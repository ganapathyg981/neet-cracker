import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, BookOpen, Calculator, HelpCircle, AlertCircle, Shuffle, TrendingUp, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { getTopic, getChapter, sampleTopicDetail } from '../data/physicsData';
import { getQuestionsByTopic } from '../data/questionBank';
import { recordQuestionAttempt, getQuestionStatus, recordTopicViewed } from '../stores/progressStore';
import Formula from '../components/Formula';
import FormulaText from '../components/FormulaText';

export default function TopicDetail() {
  const { subjectId, chapterId, topicId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('theory');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const chapter = getChapter(chapterId);
  const topic = getTopic(chapterId, topicId);
  
  // Use topic data if available, otherwise fall back to sample for demo
  const data = topic?.formulas?.length > 0 ? topic : sampleTopicDetail;
  const hasContent = topic?.theory?.summary || topic?.formulas?.length > 0;

  // Get questions from centralized question bank
  const questions = getQuestionsByTopic(topicId);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
    
    // Record that this topic was viewed
    if (topic && chapterId) {
      recordTopicViewed(topicId, chapterId);
    }
  }, [searchParams, topicId, chapterId, topic]);

  const handleOptionClick = (questionId, optionIndex, correctIndex) => {
    if (selectedAnswers[questionId] !== undefined) return;
    
    const isCorrect = optionIndex === correctIndex;
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
    setShowExplanation({ ...showExplanation, [questionId]: true });
    
    // Record in progress store
    recordQuestionAttempt(questionId, isCorrect);
  };

  const tabs = [
    { id: 'theory', label: 'Theory', icon: BookOpen },
    { id: 'formulas', label: 'Formulas', icon: Calculator },
    { id: 'questions', label: `Questions (${questions.length})`, icon: HelpCircle },
    { id: 'mistakes', label: 'Mistakes', icon: AlertCircle },
    { id: 'variations', label: 'Variations', icon: Shuffle },
    { id: 'patterns', label: 'Patterns', icon: TrendingUp },
  ];

  if (!topic) {
    return (
      <div className="page">
        <Link to={`/study/${subjectId}/${chapterId}`} className="back-btn">
          <ChevronLeft size={20} />
          Back to Topics
        </Link>
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>Topic not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to={`/study/${subjectId}/${chapterId}`} className="back-btn">
        <ChevronLeft size={20} />
        Back to Topics
      </Link>

      <div className="breadcrumb">
        <Link to="/study">Study</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}`}>Physics</Link>
        <span>›</span>
        <Link to={`/study/${subjectId}/${chapterId}`}>{chapter?.name}</Link>
        <span>›</span>
        <span>{topic.name}</span>
      </div>

      <div className="page-header">
        <h1 className="page-title">{topic.name}</h1>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <span className={`tag ${topic.difficulty}`}>{topic.difficulty}</span>
          {topic.weightage > 0 && (
            <span className="tag weightage">{topic.weightage}% weightage</span>
          )}
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'theory' && (
        <div className="two-column">
          <div className="topic-section">
            <h3 className="topic-section-title">
              <BookOpen size={16} />
              Theory
            </h3>
            {data.theory?.summary ? (
              <>
                <p className="theory-text">{data.theory.summary}</p>
                
                {data.theory.realWorldAnalogy && (
                  <div className="analogy-box">
                    <div className="analogy-label">🌍 Real World Analogy</div>
                    <p style={{ fontSize: '14px', margin: 0 }}>{data.theory.realWorldAnalogy}</p>
                  </div>
                )}
              </>
            ) : (
              <div className="empty-state" style={{ padding: '20px' }}>
                <p>Theory content coming soon</p>
              </div>
            )}
          </div>

          <div className="topic-section">
            <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--accent-green-bright)' }}>Key Points</h4>
            {data.theory?.keyPoints?.length > 0 ? (
              <ul className="key-points">
                {data.theory.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Key points will be added soon</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div>
          <p className="theory-text" style={{ marginBottom: '20px' }}>
            Tap on a formula to see its applications, derived formulas, and practice questions
          </p>
          {(() => {
            const baseFormulas = data.formulas?.filter(formula => formula.category !== 'derived') || [];

            return baseFormulas.length > 0 ? (
              <div className="formulas-grid">
                {baseFormulas.map((formula) => {
                  // Count questions for this formula
                  const formulaQuestions = questions.filter(q =>
                    q.formulas && q.formulas.includes(formula.id)
                  );

                  // Count derived formulas
                  const derivedCount = data.formulas.filter(f => f.derivedFrom === formula.id).length;

                  return (
                    <div
                      key={formula.id}
                      className="formula-card-simple"
                      onClick={() => navigate(`/study/${subjectId}/${chapterId}/${topicId}/formula/${formula.id}`)}
                    >
                      <div className="formula-card-simple-name">{formula.name}</div>
                      <div className="formula-card-simple-math">
                        <Formula math={formula.latex} display={true} />
                      </div>
                      <div className="formula-card-simple-footer">
                        <span className="formula-card-simple-count">
                          {derivedCount} {derivedCount === 1 ? 'application' : 'applications'}
                        </span>
                        {formulaQuestions.length > 0 && (
                          <span className="formula-card-simple-questions">
                            {formulaQuestions.length} Q
                          </span>
                        )}
                        <ArrowRight size={18} className="formula-card-simple-arrow" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">📐</div>
                <p>Formulas will be added soon</p>
              </div>
            );
          })()}
        </div>
      )}

      {activeTab === 'questions' && (
        <div>
          {questions.length > 0 ? (
            <div className="questions-grid">
              {questions.map((question) => {
                const previousStatus = getQuestionStatus(question.id);
                const currentAnswer = selectedAnswers[question.id];
                const showResult = currentAnswer !== undefined;
                
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
                    <p className="question-text"><FormulaText text={question.text} /></p>
                    <div className="options">
                      {question.options.map((option, idx) => {
                        const isSelected = currentAnswer === idx;
                        const isCorrect = question.correct === idx;

                        let optionClass = 'option';
                        if (showResult) {
                          if (isCorrect) optionClass += ' correct';
                          else if (isSelected) optionClass += ' wrong';
                        }

                        return (
                          <div
                            key={idx}
                            className={optionClass}
                            onClick={() => handleOptionClick(question.id, idx, question.correct)}
                          >
                            {String.fromCharCode(65 + idx)}. <FormulaText text={option} />
                          </div>
                        );
                      })}
                    </div>
                    {showExplanation[question.id] && (
                      <div className="explanation">
                        <strong>Explanation:</strong> <FormulaText text={question.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">❓</div>
              <p>Practice questions will be added soon</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'mistakes' && (
        <div className="content-cards-grid">
          {data.commonMistakes?.length > 0 ? (
            data.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="mistake-card">
                <div className="mistake-header">
                  <div className="list-number">{idx + 1}</div>
                  <div className="mistake-title">
                    {typeof mistake === 'string' ? <FormulaText text={mistake} /> : <FormulaText text={mistake.mistake} />}
                  </div>
                </div>
                {typeof mistake === 'object' && (
                  <div className="mistake-details">
                    {mistake.correct && (
                      <div className="mistake-correct">
                        <span className="label">✓ Correct:</span> <FormulaText text={mistake.correct} />
                      </div>
                    )}
                    {mistake.whyItHappens && (
                      <div className="mistake-why">
                        <span className="label">Why it happens:</span> <FormulaText text={mistake.whyItHappens} />
                      </div>
                    )}
                    {mistake.neetExample && (
                      <div className="mistake-example">
                        <span className="label">📝 NEET:</span> <FormulaText text={mistake.neetExample} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">⚠️</div>
              <p>Common mistakes will be added soon</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'variations' && (
        <div className="content-cards-grid">
          {data.variations?.length > 0 ? (
            data.variations.map((variation, idx) => (
              <div key={idx} className="variation-card">
                <div className="variation-header">
                  <div className="list-number">{idx + 1}</div>
                  <div className="variation-title">
                    {typeof variation === 'string' ? variation : variation.description}
                  </div>
                </div>
                {typeof variation === 'object' && (
                  <div className="variation-meta">
                    {variation.type && (
                      <span className={`tag ${variation.type}`}>{variation.type}</span>
                    )}
                    {variation.difficulty && (
                      <span className={`tag ${variation.difficulty}`}>{variation.difficulty}</span>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔀</div>
              <p>Question variations will be added soon</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'patterns' && (
        <div className="content-cards-grid">
          {data.mostAskedPatterns?.length > 0 ? (
            data.mostAskedPatterns.map((pattern, idx) => (
              <div key={idx} className="pattern-card">
                <div className="pattern-header">
                  <div className="list-number">{idx + 1}</div>
                  <div className="pattern-title">
                    {typeof pattern === 'string' ? pattern : pattern.pattern}
                  </div>
                </div>
                {typeof pattern === 'object' && (
                  <div className="pattern-meta">
                    {pattern.frequency && (
                      <span className={`tag frequency-${pattern.frequency}`}>
                        {pattern.frequency === 'high' ? '🔥 High frequency' : 
                         pattern.frequency === 'medium' ? '📊 Medium frequency' : 
                         '📝 Asked'}
                      </span>
                    )}
                    {pattern.yearAsked && pattern.yearAsked.length > 0 && (
                      <span className="years-asked">
                        Years: {pattern.yearAsked.join(', ')}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📈</div>
              <p>Most asked patterns will be added soon</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
