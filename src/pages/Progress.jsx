import { useState } from 'react';
import { TrendingUp, Target, AlertTriangle, Award, BarChart3, CheckCircle2, XCircle, Flame } from 'lucide-react';
import { getStats, getTestResults, getAllProgress, resetProgress } from '../stores/progressStore';
import { getAllQuestions, getQuestionsBySubject, getQuestionsByChapter } from '../data/questionBank';
import { physicsChapters } from '../data/physicsData';

export default function Progress() {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  const stats = getStats();
  const testResults = getTestResults();
  const allQuestions = getAllQuestions();
  const progress = getAllProgress();
  
  // Calculate subject progress
  const calculateSubjectProgress = (subjectId) => {
    const questions = getQuestionsBySubject(subjectId);
    if (questions.length === 0) return { progress: 0, attempted: 0, total: 0, correct: 0 };
    
    let attempted = 0;
    let correct = 0;
    
    questions.forEach(q => {
      const status = progress.questionsAttempted?.[q.id];
      if (status?.answered) {
        attempted++;
        if (status.correct) correct++;
      }
    });
    
    return {
      progress: Math.round((attempted / questions.length) * 100),
      attempted,
      total: questions.length,
      correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0,
    };
  };

  const subjects = [
    { id: 'physics', name: 'Physics', icon: '⚡', color: '#818cf8', ...calculateSubjectProgress('physics') },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: '#34d399', progress: 0, attempted: 0, total: 0, correct: 0, accuracy: 0 },
    { id: 'biology', name: 'Biology', icon: '🧬', color: '#fbbf24', progress: 0, attempted: 0, total: 0, correct: 0, accuracy: 0 },
  ];

  // Calculate chapter-wise progress for Physics
  const chapterProgress = physicsChapters.map(chapter => {
    const questions = getQuestionsByChapter(chapter.id);
    let attempted = 0;
    let correct = 0;
    
    questions.forEach(q => {
      const status = progress.questionsAttempted?.[q.id];
      if (status?.answered) {
        attempted++;
        if (status.correct) correct++;
      }
    });
    
    return {
      ...chapter,
      questions: questions.length,
      attempted,
      correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0,
    };
  }).filter(c => c.questions > 0);

  // Identify weak topics (chapters with <50% accuracy and at least 2 attempts)
  const weakTopics = chapterProgress
    .filter(c => c.attempted >= 2 && c.accuracy < 50)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 5);

  // Test performance over time
  const recentTests = testResults.slice(-10).reverse();

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    window.location.reload();
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Progress</h1>
        <p className="page-subtitle">Track your preparation journey</p>
      </div>

      <div className="two-column">
        <div>
          {/* Overall Stats */}
          <div className="section">
            <h2 className="section-title">
              <BarChart3 size={18} />
              Overall Stats
            </h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{stats.questionsAttempted}</div>
                <div className="stat-label">Questions Done</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{stats.accuracy}%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{stats.testsCompleted}</div>
                <div className="stat-label">Tests Taken</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{stats.bestScore || '-'}%</div>
                <div className="stat-label">Best Score</div>
              </div>
            </div>
          </div>

          {/* Subject Progress */}
          <div className="section">
            <h2 className="section-title">
              <TrendingUp size={18} />
              Subject Progress
            </h2>
            
            <div className="cards-grid-2">
              {subjects.map((subject) => (
                <div key={subject.name} className="card no-hover" style={{ cursor: 'default' }}>
                  <div className="card-header">
                    <div>
                      <div className="card-title">
                        <span style={{ marginRight: '8px' }}>{subject.icon}</span>
                        {subject.name}
                      </div>
                      <div className="card-subtitle">
                        {subject.attempted}/{subject.total} questions • {subject.accuracy}% accuracy
                      </div>
                    </div>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-label">
                      <span>Completed</span>
                      <span>{subject.progress}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${subject.progress}%`,
                          background: subject.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter-wise Breakdown */}
          {chapterProgress.length > 0 && (
            <div className="section">
              <h2 className="section-title">
                <Target size={18} />
                Chapter-wise Performance
              </h2>
              <div className="chapter-progress-list">
                {chapterProgress.map((chapter) => (
                  <div key={chapter.id} className="chapter-progress-item">
                    <div className="chapter-progress-info">
                      <div className="chapter-progress-name">{chapter.name}</div>
                      <div className="chapter-progress-stats">
                        {chapter.attempted}/{chapter.questions} attempted • 
                        <span className={chapter.accuracy >= 70 ? ' good' : chapter.accuracy >= 40 ? ' okay' : ' poor'}>
                          {chapter.accuracy}% accuracy
                        </span>
                      </div>
                    </div>
                    <div className="chapter-progress-bar">
                      <div 
                        className="chapter-progress-fill"
                        style={{ 
                          width: `${chapter.questions > 0 ? (chapter.attempted / chapter.questions) * 100 : 0}%`,
                          background: chapter.accuracy >= 70 ? 'var(--accent-green)' : chapter.accuracy >= 40 ? 'var(--accent-yellow)' : 'var(--accent-red)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {/* Study Streak */}
          <div className="section">
            <h2 className="section-title">
              <Award size={18} />
              Study Streak
            </h2>
            <div className="card no-hover streak-display" style={{ textAlign: 'center', cursor: 'default' }}>
              <Flame size={48} className="streak-flame" />
              <div className="streak-number">{stats.currentStreak} days</div>
              <div className="streak-message">
                {stats.currentStreak === 0 
                  ? 'Start studying to build your streak!'
                  : stats.currentStreak >= 7 
                    ? 'Amazing consistency! Keep it up! 🔥'
                    : 'Keep studying daily!'}
              </div>
              {stats.bestStreak > 0 && (
                <div className="streak-best">Best streak: {stats.bestStreak} days</div>
              )}
            </div>
          </div>

          {/* Weak Topics */}
          <div className="section">
            <h2 className="section-title">
              <AlertTriangle size={18} />
              Weak Topics
            </h2>
            <div className="card no-hover">
              {weakTopics.length > 0 ? (
                <div className="weak-topics-list">
                  {weakTopics.map((topic) => (
                    <div key={topic.id} className="weak-topic-item">
                      <div className="weak-topic-info">
                        <div className="weak-topic-name">{topic.name}</div>
                        <div className="weak-topic-stats">
                          {topic.correct}/{topic.attempted} correct
                        </div>
                      </div>
                      <div className={`weak-topic-accuracy ${topic.accuracy < 30 ? 'critical' : 'warning'}`}>
                        {topic.accuracy}%
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state" style={{ padding: '20px' }}>
                  <div className="empty-state-icon">🎯</div>
                  <p>
                    {stats.questionsAttempted < 5 
                      ? 'Complete more questions to identify weak areas'
                      : 'Great job! No weak topics detected'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mock Test Performance */}
          <div className="section">
            <h2 className="section-title">
              <Target size={18} />
              Mock Test Performance
            </h2>
            {recentTests.length > 0 ? (
              <div className="test-history">
                {recentTests.map((test) => (
                  <div key={test.id} className="test-history-item">
                    <div className="test-history-info">
                      <div className="test-history-name">{test.scope}</div>
                      <div className="test-history-date">
                        {new Date(test.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="test-history-results">
                      <span className="test-correct">
                        <CheckCircle2 size={14} /> {test.correct}
                      </span>
                      <span className="test-wrong">
                        <XCircle size={14} /> {test.wrong}
                      </span>
                      <span className={`test-score ${test.score >= 70 ? 'good' : test.score >= 40 ? 'okay' : 'poor'}`}>
                        {test.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card no-hover">
                <div className="empty-state" style={{ padding: '20px' }}>
                  <div className="empty-state-icon">📊</div>
                  <p>Take mock tests to track your performance</p>
                </div>
              </div>
            )}
          </div>

          {/* Reset Progress */}
          <div className="section">
            <button 
              className="btn btn-danger-outline"
              onClick={() => setShowResetConfirm(true)}
            >
              Reset All Progress
            </button>
            
            {showResetConfirm && (
              <div className="reset-confirm">
                <p>Are you sure? This will delete all your progress data.</p>
                <div className="reset-confirm-buttons">
                  <button className="btn btn-secondary" onClick={() => setShowResetConfirm(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-danger" onClick={handleReset}>
                    Yes, Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
