import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, XCircle } from 'lucide-react';
import { getTopic, getChapter } from '../data/physicsData';
import { getQuestionsByFormula } from '../data/questionBank';
import { recordQuestionAttempt, getQuestionStatus } from '../stores/progressStore';
import Formula from '../components/Formula';

export default function ApplicationDetail() {
  const { subjectId, chapterId, topicId, formulaId, appId } = useParams();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const chapter = getChapter(chapterId);
  const topic = getTopic(chapterId, topicId);
  const formula = topic?.formulas?.find(f => f.id === formulaId);
  const application = formula?.applications?.find(a => a.id === appId);
  
  const relatedQuestions = getQuestionsByFormula(appId);

  const handleOptionClick = (questionId, optionIndex, correctIndex) => {
    if (selectedAnswers[questionId] !== undefined) return;
    
    const isCorrect = optionIndex === correctIndex;
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
    setShowExplanation({ ...showExplanation, [questionId]: true });
    
    recordQuestionAttempt(questionId, isCorrect);
  };

  if (!application) {
    return (
      <div className="page">
        <Link to={`/study/${subjectId}/${chapterId}/${topicId}/formula/${formulaId}`} className="back-btn">
          <ChevronLeft size={20} />
          Back to Formula
        </Link>
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>Application not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to={`/study/${subjectId}/${chapterId}/${topicId}/formula/${formulaId}`} className="back-btn">
        <ChevronLeft size={20} />
        Back to {formula?.name}
      </Link>

      <div className="breadcrumb">
        <Link to="/study">Study</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}`}>Physics</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}`}>{chapter?.name}</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}/${topicId}`}>{topic?.name}</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}/${topicId}/formula/${formulaId}`}>{formula?.name}</Link>
        <span>›</span>
        <span>{application.name}</span>
      </div>

      {/* Application Hero */}
      <div className="formula-hero">
        <div className="formula-hero-label">{application.name}</div>
        <div className="formula-hero-math">
          <Formula math={application.latex} display={true} />
        </div>
        <div className="formula-hero-description">{application.context}</div>
        {application.neet_frequency && (
          <div style={{ marginTop: '16px' }}>
            <span className={`tag frequency-${application.neet_frequency}`}>
              {application.neet_frequency === 'high' ? '🔥 HIGH FREQUENCY in NEET' : 
               application.neet_frequency === 'medium' ? '📊 MEDIUM FREQUENCY' : '📝 LOW FREQUENCY'}
            </span>
          </div>
        )}
      </div>

      {/* Practice Questions */}
      <div className="section">
        <h2 className="section-title">📝 Practice Questions ({relatedQuestions.length})</h2>
        {relatedQuestions.length > 0 ? (
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
        ) : (
          <div className="empty-state" style={{ padding: '24px' }}>
            <div className="empty-state-icon">📚</div>
            <p>Practice questions for this application will be added soon</p>
          </div>
        )}
      </div>
    </div>
  );
}

