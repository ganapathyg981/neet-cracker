import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { getTopic, getChapter, sampleTopicDetail } from '../data/physicsData';
import { getQuestionsByFormula } from '../data/questionBank';
import { recordQuestionAttempt, getQuestionStatus } from '../stores/progressStore';
import Formula from '../components/Formula';

export default function FormulaDetail() {
  const { subjectId, chapterId, topicId, formulaId } = useParams();
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const chapter = getChapter(chapterId);
  const topic = getTopic(chapterId, topicId);
  
  // Use topic data if available, otherwise fall back to sample for demo
  const topicData = topic?.formulas?.length > 0 ? topic : sampleTopicDetail;
  const formula = topicData.formulas?.find(f => f.id === formulaId);
  
  // Get questions related to this formula from the centralized question bank
  const relatedQuestions = getQuestionsByFormula(formulaId);

  const handleOptionClick = (questionId, optionIndex, correctIndex) => {
    if (selectedAnswers[questionId] !== undefined) return;
    
    const isCorrect = optionIndex === correctIndex;
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
    setShowExplanation({ ...showExplanation, [questionId]: true });
    
    // Record in progress store
    recordQuestionAttempt(questionId, isCorrect);
  };

  if (!formula) {
    return (
      <div className="page">
        <Link to={`/study/${subjectId}/${chapterId}/${topicId}`} className="back-btn">
          <ChevronLeft size={20} />
          Back to Topic
        </Link>
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>Formula not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to={`/study/${subjectId}/${chapterId}/${topicId}`} className="back-btn">
        <ChevronLeft size={20} />
        Back to {topic?.name || topicData.name}
      </Link>

      <div className="breadcrumb">
        <Link to="/study">Study</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}`}>Physics</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}`}>{chapter?.name}</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}/${topicId}`}>{topic?.name || topicData.name}</Link>
        <span>›</span>
        <span>{formula.name}</span>
      </div>

      {/* Main Formula */}
      <div className="formula-hero">
        <div className="formula-hero-label">{formula.name}</div>
        <div className="formula-hero-math">
          <Formula math={formula.latex} display={true} />
        </div>
        <div className="formula-hero-description">{formula.description}</div>
      </div>

      {/* Variables */}
      {formula.variables && formula.variables.length > 0 && (
        <div className="section">
          <h2 className="section-title">📊 Variables</h2>
          <div className="variables-grid">
            {formula.variables.map((v, idx) => (
              <div key={idx} className="variable-card">
                <div className="variable-card-symbol">{v.symbol}</div>
                <div className="variable-card-info">
                  <div className="variable-card-meaning">{v.meaning}</div>
                  <div className="variable-card-unit">{v.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Applications / Derived Formulas */}
      {formula.applications && formula.applications.length > 0 && (
        <div className="section">
          <h2 className="section-title">📐 Applications & Derived Formulas</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>
            Tap on any application to view practice questions
          </p>
          <div className="applications-grid">
            {formula.applications.map((app, idx) => {
              const appId = app.id || `${formulaId}-app-${idx}`;
              const derivedQuestions = getQuestionsByFormula(appId);
              
              return (
                <div 
                  key={appId} 
                  className="application-card clickable"
                  onClick={() => app.id && navigate(`/study/${subjectId}/${chapterId}/${topicId}/formula/${formulaId}/app/${app.id}`)}
                >
                  <div className="application-card-name">{app.name}</div>
                  <div className="application-card-math">
                    <Formula math={app.latex} display={true} />
                  </div>
                  <div className="application-card-context">{app.context}</div>
                  <div className="application-card-footer">
                    <div className="application-card-tags">
                      {app.neet_frequency && (
                        <span className={`tag frequency-${app.neet_frequency}`}>
                          {app.neet_frequency === 'high' ? '🔥 HIGH FREQUENCY' : 
                           app.neet_frequency === 'medium' ? '📊 MEDIUM' : '📝 LOW'}
                        </span>
                      )}
                      {derivedQuestions.length > 0 && (
                        <span className="questions-badge">{derivedQuestions.length} questions</span>
                      )}
                    </div>
                    {app.id && <ArrowRight size={18} className="application-card-arrow" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Questions from Question Bank */}
      {relatedQuestions.length > 0 && (
        <div className="section">
          <h2 className="section-title">📝 Practice Questions ({relatedQuestions.length})</h2>
          <div className="questions-grid">
            {relatedQuestions.map((question) => {
              const previousStatus = getQuestionStatus(question.id);
              const currentAnswer = selectedAnswers[question.id];
              const showResult = currentAnswer !== undefined || previousStatus?.answered;
              
              return (
                <div key={question.id} className="question-card">
                  <div className="question-header">
                    <span className={`tag ${question.difficulty}`}>{question.difficulty}</span>
                    {question.year && <span className="tag year">NEET {question.year}</span>}
                    {previousStatus?.answered && currentAnswer === undefined && (
                      <span className={`tag ${previousStatus.correct ? 'correct-tag' : 'wrong-tag'}`}>
                        {previousStatus.correct ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                        {previousStatus.correct ? 'Solved' : 'Retry'}
                      </span>
                    )}
                  </div>
                  <p className="question-text">{question.text}</p>
                  <div className="options">
                    {question.options.map((option, idx) => {
                      const isSelected = currentAnswer === idx;
                      const isCorrect = question.correct === idx;
                      
                      let optionClass = 'option';
                      if (showResult && currentAnswer !== undefined) {
                        if (isCorrect) optionClass += ' correct';
                        else if (isSelected) optionClass += ' wrong';
                      }

                      return (
                        <div
                          key={idx}
                          className={optionClass}
                          onClick={() => handleOptionClick(question.id, idx, question.correct)}
                        >
                          {String.fromCharCode(65 + idx)}. {option}
                        </div>
                      );
                    })}
                  </div>
                  {showExplanation[question.id] && (
                    <div className="explanation">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* No questions state */}
      {relatedQuestions.length === 0 && (
        <div className="section">
          <h2 className="section-title">📝 Practice Questions</h2>
          <div className="empty-state" style={{ padding: '24px' }}>
            <div className="empty-state-icon">📚</div>
            <p>Practice questions for this formula will be added soon</p>
          </div>
        </div>
      )}

      {/* Empty state for formulas without applications yet */}
      {(!formula.applications || formula.applications.length === 0) && 
       (!formula.variables || formula.variables.length === 0) && (
        <div className="empty-state">
          <div className="empty-state-icon">📚</div>
          <p>Detailed applications and variables will be added soon</p>
        </div>
      )}
    </div>
  );
}
