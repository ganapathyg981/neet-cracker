import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Clock, Play, ArrowLeft, ArrowRight, Flag, CheckCircle2, XCircle } from 'lucide-react';
import { subjects, physicsChapters, getTopicsForChapter } from '../data/physicsData';
import { getRandomQuestions, getAllQuestions } from '../data/questionBank';
import { recordQuestionAttempt, recordTestResult, getTestResults } from '../stores/progressStore';

export default function MockTest() {
  const [testType, setTestType] = useState('full');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [questionCount, setQuestionCount] = useState(30);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showChapterDropdown, setShowChapterDropdown] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  
  // Test state
  const [testMode, setTestMode] = useState('config'); // config, running, results
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [testStartTime, setTestStartTime] = useState(null);

  const testTypes = [
    { id: 'full', label: 'Full Syllabus' },
    { id: 'subject', label: 'One Subject' },
    { id: 'chapter', label: 'One Chapter' },
    { id: 'topic', label: 'One Topic' },
  ];

  const questionOptions = [10, 30, 45, 60];
  const availableSubjects = subjects.filter(s => !s.comingSoon);
  const topics = selectedChapter ? getTopicsForChapter(selectedChapter) : [];
  const previousTests = getTestResults();

  // Timer
  useEffect(() => {
    if (testMode !== 'running' || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [testMode, timeLeft]);

  const getEstimatedTime = () => {
    const minutes = questionCount * 1.5;
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    return `${minutes} mins`;
  };

  const canStartTest = () => {
    if (testType === 'full') return true;
    if (testType === 'subject') return selectedSubject !== '';
    if (testType === 'chapter') return selectedSubject !== '' && selectedChapter !== '';
    if (testType === 'topic') return selectedSubject !== '' && selectedChapter !== '' && selectedTopic !== '';
    return false;
  };

  const getTestName = () => {
    if (testType === 'full') return 'Full Syllabus Test';
    if (testType === 'subject') {
      const subject = subjects.find(s => s.id === selectedSubject);
      return subject ? `${subject.name} Test` : 'Subject Test';
    }
    if (testType === 'chapter') {
      const chapter = physicsChapters.find(c => c.id === selectedChapter);
      return chapter ? `${chapter.name} Test` : 'Chapter Test';
    }
    if (testType === 'topic') {
      const topic = topics.find(t => t.id === selectedTopic);
      return topic ? `${topic.name} Test` : 'Topic Test';
    }
    return 'Test';
  };

  const startTest = () => {
    const filters = {};
    if (testType !== 'full') {
      filters.subject = selectedSubject;
      if (testType === 'chapter' || testType === 'topic') {
        filters.chapter = selectedChapter;
      }
      if (testType === 'topic') {
        filters.topic = selectedTopic;
      }
    }
    
    const questions = getRandomQuestions(questionCount, filters);
    if (questions.length === 0) {
      alert('No questions available for this selection. Try a different filter.');
      return;
    }
    
    setTestQuestions(questions);
    setAnswers({});
    setFlagged({});
    setCurrentQuestionIndex(0);
    setTimeLeft(questionCount * 90); // 1.5 minutes per question in seconds
    setTestStartTime(Date.now());
    setTestMode('running');
  };

  const finishTest = useCallback(() => {
    const timeSpent = Math.round((Date.now() - testStartTime) / 1000);
    
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    testQuestions.forEach(q => {
      const answer = answers[q.id];
      if (answer === undefined) {
        unanswered++;
      } else if (answer === q.correct) {
        correct++;
        recordQuestionAttempt(q.id, true);
      } else {
        wrong++;
        recordQuestionAttempt(q.id, false);
      }
    });
    
    const score = Math.round((correct / testQuestions.length) * 100);
    
    recordTestResult({
      type: testType,
      scope: getTestName(),
      questions: testQuestions.length,
      correct,
      wrong,
      unanswered,
      score,
      timeSpent,
    });
    
    setTestMode('results');
  }, [testQuestions, answers, testStartTime, testType]);

  const selectAnswer = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const toggleFlag = (questionId) => {
    setFlagged({ ...flagged, [questionId]: !flagged[questionId] });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getResults = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    testQuestions.forEach(q => {
      const answer = answers[q.id];
      if (answer === undefined) unanswered++;
      else if (answer === q.correct) correct++;
      else wrong++;
    });
    
    return { correct, wrong, unanswered, total: testQuestions.length };
  };

  // Test Running View
  if (testMode === 'running') {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const answered = Object.keys(answers).length;
    const flaggedCount = Object.values(flagged).filter(Boolean).length;
    
    return (
      <div className="page test-running">
        {/* Timer & Progress Bar */}
        <div className="test-header">
          <div className="test-timer" style={{ color: timeLeft < 300 ? 'var(--accent-red)' : 'var(--text-primary)' }}>
            <Clock size={18} />
            {formatTime(timeLeft)}
          </div>
          <div className="test-progress-text">
            {currentQuestionIndex + 1} / {testQuestions.length}
          </div>
          <button className="btn btn-danger" onClick={finishTest}>
            End Test
          </button>
        </div>
        
        <div className="test-progress-bar">
          <div 
            className="test-progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / testQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="test-question-card">
          <div className="test-question-header">
            <span className={`tag ${currentQuestion.difficulty}`}>{currentQuestion.difficulty}</span>
            <button 
              className={`flag-btn ${flagged[currentQuestion.id] ? 'flagged' : ''}`}
              onClick={() => toggleFlag(currentQuestion.id)}
            >
              <Flag size={18} />
              {flagged[currentQuestion.id] ? 'Flagged' : 'Flag'}
            </button>
          </div>
          
          <p className="test-question-text">{currentQuestion.text}</p>
          
          <div className="test-options">
            {currentQuestion.options.map((option, idx) => (
              <div
                key={idx}
                className={`test-option ${answers[currentQuestion.id] === idx ? 'selected' : ''}`}
                onClick={() => selectAnswer(currentQuestion.id, idx)}
              >
                <span className="test-option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="test-option-text">{option}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="test-navigation">
          <button 
            className="btn btn-secondary"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
          >
            <ArrowLeft size={18} />
            Previous
          </button>
          
          <div className="test-nav-dots">
            {testQuestions.map((q, idx) => (
              <div
                key={q.id}
                className={`test-nav-dot 
                  ${idx === currentQuestionIndex ? 'current' : ''} 
                  ${answers[q.id] !== undefined ? 'answered' : ''} 
                  ${flagged[q.id] ? 'flagged' : ''}`}
                onClick={() => setCurrentQuestionIndex(idx)}
                title={`Question ${idx + 1}`}
              />
            ))}
          </div>
          
          {currentQuestionIndex < testQuestions.length - 1 ? (
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            >
              Next
              <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn btn-success" onClick={finishTest}>
              Submit Test
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="test-stats-bar">
          <span>Answered: {answered}/{testQuestions.length}</span>
          <span>Flagged: {flaggedCount}</span>
        </div>
      </div>
    );
  }

  // Results View
  if (testMode === 'results') {
    const results = getResults();
    const score = Math.round((results.correct / results.total) * 100);
    
    return (
      <div className="page test-results">
        <div className="results-header">
          <h1 className="page-title">Test Complete!</h1>
          <div className="results-score-circle">
            <div className="score-value">{score}%</div>
            <div className="score-label">Score</div>
          </div>
        </div>

        <div className="results-stats">
          <div className="result-stat correct">
            <CheckCircle2 size={24} />
            <div className="result-stat-value">{results.correct}</div>
            <div className="result-stat-label">Correct</div>
          </div>
          <div className="result-stat wrong">
            <XCircle size={24} />
            <div className="result-stat-value">{results.wrong}</div>
            <div className="result-stat-label">Wrong</div>
          </div>
          <div className="result-stat unanswered">
            <div className="result-stat-value">{results.unanswered}</div>
            <div className="result-stat-label">Skipped</div>
          </div>
        </div>

        <h2 className="section-title">Review Answers</h2>
        <div className="results-review">
          {testQuestions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correct;
            const isAnswered = userAnswer !== undefined;
            
            return (
              <div key={q.id} className={`review-card ${isAnswered ? (isCorrect ? 'correct' : 'wrong') : 'skipped'}`}>
                <div className="review-header">
                  <span className="review-number">Q{idx + 1}</span>
                  <span className={`tag ${q.difficulty}`}>{q.difficulty}</span>
                  {isAnswered ? (
                    isCorrect ? <CheckCircle2 size={18} className="review-icon correct" /> 
                             : <XCircle size={18} className="review-icon wrong" />
                  ) : (
                    <span className="tag skipped">Skipped</span>
                  )}
                </div>
                <p className="review-text">{q.text}</p>
                <div className="review-options">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className={`review-option 
                        ${optIdx === q.correct ? 'correct-answer' : ''} 
                        ${optIdx === userAnswer && !isCorrect ? 'user-wrong' : ''}`}
                    >
                      {String.fromCharCode(65 + optIdx)}. {opt}
                      {optIdx === q.correct && <CheckCircle2 size={14} />}
                      {optIdx === userAnswer && !isCorrect && <XCircle size={14} />}
                    </div>
                  ))}
                </div>
                <div className="review-explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>

        <div className="results-actions">
          <button className="btn btn-primary" onClick={() => {
            setTestMode('config');
            setTestQuestions([]);
            setAnswers({});
            setFlagged({});
          }}>
            Take Another Test
          </button>
        </div>
      </div>
    );
  }

  // Config View (default)
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Mock Tests</h1>
        <p className="page-subtitle">Configure and take practice tests</p>
      </div>

      <div className="test-layout">
        <div className="test-config">
          <div className="config-section">
            <div className="config-label">Test Type</div>
            <div className="config-options">
              {testTypes.map((type) => (
                <div
                  key={type.id}
                  className={`config-option ${testType === type.id ? 'selected' : ''}`}
                  onClick={() => {
                    setTestType(type.id);
                    setSelectedSubject('');
                    setSelectedChapter('');
                    setSelectedTopic('');
                  }}
                >
                  {type.label}
                </div>
              ))}
            </div>
          </div>

          {(testType === 'subject' || testType === 'chapter' || testType === 'topic') && (
            <div className="config-section">
              <div className="config-label">Select Subject</div>
              <div className="select-wrapper">
                <div
                  className="select-trigger"
                  onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                >
                  <span style={{ color: selectedSubject ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {selectedSubject
                      ? subjects.find(s => s.id === selectedSubject)?.name
                      : 'Choose a subject'}
                  </span>
                  <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
                {showSubjectDropdown && (
                  <div className="select-dropdown">
                    {availableSubjects.map((subject) => (
                      <div
                        key={subject.id}
                        className={`select-option ${selectedSubject === subject.id ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedSubject(subject.id);
                          setSelectedChapter('');
                          setSelectedTopic('');
                          setShowSubjectDropdown(false);
                        }}
                      >
                        {subject.icon} {subject.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {(testType === 'chapter' || testType === 'topic') && selectedSubject && (
            <div className="config-section">
              <div className="config-label">Select Chapter</div>
              <div className="select-wrapper">
                <div
                  className="select-trigger"
                  onClick={() => setShowChapterDropdown(!showChapterDropdown)}
                >
                  <span style={{ color: selectedChapter ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {selectedChapter
                      ? physicsChapters.find(c => c.id === selectedChapter)?.name
                      : 'Choose a chapter'}
                  </span>
                  <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
                {showChapterDropdown && (
                  <div className="select-dropdown">
                    {physicsChapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className={`select-option ${selectedChapter === chapter.id ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedChapter(chapter.id);
                          setSelectedTopic('');
                          setShowChapterDropdown(false);
                        }}
                      >
                        {chapter.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {testType === 'topic' && selectedChapter && (
            <div className="config-section">
              <div className="config-label">Select Topic</div>
              <div className="select-wrapper">
                <div
                  className="select-trigger"
                  onClick={() => setShowTopicDropdown(!showTopicDropdown)}
                >
                  <span style={{ color: selectedTopic ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {selectedTopic
                      ? topics.find(t => t.id === selectedTopic)?.name
                      : 'Choose a topic'}
                  </span>
                  <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
                {showTopicDropdown && (
                  <div className="select-dropdown">
                    {topics.map((topic) => (
                      <div
                        key={topic.id}
                        className={`select-option ${selectedTopic === topic.id ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedTopic(topic.id);
                          setShowTopicDropdown(false);
                        }}
                      >
                        {topic.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="config-section">
            <div className="config-label">Number of Questions</div>
            <div className="config-options">
              {questionOptions.map((count) => (
                <div
                  key={count}
                  className={`config-option ${questionCount === count ? 'selected' : ''}`}
                  onClick={() => setQuestionCount(count)}
                >
                  {count}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Preview Card */}
        <div className="test-preview">
          <div className="card no-hover" style={{ cursor: 'default' }}>
            <div className="card-title">{getTestName()}</div>
            <div className="card-subtitle" style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} />
                {getEstimatedTime()}
              </span>
              <span>{questionCount} questions</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: '20px', opacity: canStartTest() ? 1 : 0.5, width: '100%' }}
              disabled={!canStartTest()}
              onClick={startTest}
            >
              <Play size={18} />
              Start Test
            </button>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 className="section-title">Previous Attempts ({previousTests.length})</h3>
            {previousTests.length > 0 ? (
              <div className="previous-tests">
                {previousTests.slice(-5).reverse().map((test) => (
                  <div key={test.id} className="previous-test-card">
                    <div className="previous-test-info">
                      <div className="previous-test-name">{test.scope}</div>
                      <div className="previous-test-date">
                        {new Date(test.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="previous-test-score">
                      <span className={`score ${test.score >= 70 ? 'good' : test.score >= 40 ? 'okay' : 'poor'}`}>
                        {test.score}%
                      </span>
                      <span className="correct-count">
                        {test.correct}/{test.questions}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: '24px' }}>
                <div className="empty-state-icon">📊</div>
                <p>No tests attempted yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
