import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, BookOpen, Target, Flame, TrendingUp } from 'lucide-react';
import { getStats, getTestResults } from '../stores/progressStore';
import { getAllQuestions, getQuestionsBySubject } from '../data/questionBank';

export default function Dashboard() {
  const stats = getStats();
  const testResults = getTestResults();
  const allQuestions = getAllQuestions();
  
  // Calculate days left until NEET 2025 (assuming May 2025)
  const neetDate = new Date('2025-05-04');
  const today = new Date();
  const daysLeft = Math.ceil((neetDate - today) / (1000 * 60 * 60 * 24));
  
  // Calculate subject-wise progress
  const physicsQuestions = getQuestionsBySubject('physics');
  const physicsAttempted = physicsQuestions.filter(q => {
    const stored = localStorage.getItem('neet_cracker_progress');
    if (!stored) return false;
    const progress = JSON.parse(stored);
    return progress.questionsAttempted?.[q.id]?.answered;
  }).length;
  const physicsProgress = physicsQuestions.length > 0 
    ? Math.round((physicsAttempted / physicsQuestions.length) * 100) 
    : 0;

  // Recent test performance
  const recentTests = testResults.slice(-3).reverse();
  const avgScore = testResults.length > 0
    ? Math.round(testResults.reduce((acc, t) => acc + t.score, 0) / testResults.length)
    : 0;

  // Weak topics (topics with low accuracy)
  const weakTopics = [];
  
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Let's ace NEET 2025! 💪</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-sidebar">
          <div className="days-counter">
            <div className="days-number">{daysLeft > 0 ? daysLeft : 0}</div>
            <div className="days-label">Days left for NEET 2025</div>
          </div>

          {/* Streak Card */}
          <div className="streak-card">
            <div className="streak-header">
              <Flame size={24} className="streak-icon" />
              <span className="streak-days">{stats.currentStreak}</span>
              <span className="streak-label">day streak</span>
            </div>
            {stats.bestStreak > stats.currentStreak && (
              <div className="streak-best">Best: {stats.bestStreak} days</div>
            )}
          </div>

          {/* Weak Topics Alert */}
          <div className="alert-card">
            <div className="alert-title">
              <AlertTriangle size={18} />
              Weak Topics Alert
            </div>
            <div className="alert-content">
              {stats.questionsAttempted < 10 ? (
                'Answer more questions to identify weak topics'
              ) : stats.accuracy < 50 ? (
                'Focus on Wave Optics & Electrostatics - accuracy below 50%'
              ) : (
                'Great progress! Keep practicing consistently'
              )}
            </div>
          </div>
        </div>

        <div className="dashboard-main">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{physicsProgress}%</div>
              <div className="stat-label">Physics Progress</div>
              <div className="stat-sub">{physicsAttempted}/{physicsQuestions.length} Qs</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.accuracy}%</div>
              <div className="stat-label">Accuracy</div>
              <div className="stat-sub">{stats.questionsCorrect} correct</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.questionsAttempted}</div>
              <div className="stat-label">Questions Done</div>
              <div className="stat-sub">of {allQuestions.length} total</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.testsCompleted}</div>
              <div className="stat-label">Mock Tests</div>
              {avgScore > 0 && <div className="stat-sub">Avg: {avgScore}%</div>}
            </div>
          </div>

          {/* Recent Tests */}
          {recentTests.length > 0 && (
            <div className="section">
              <h2 className="section-title">
                <TrendingUp size={18} />
                Recent Tests
              </h2>
              <div className="recent-tests-grid">
                {recentTests.map((test) => (
                  <div key={test.id} className="recent-test-card">
                    <div className="recent-test-score">
                      <span className={`score ${test.score >= 70 ? 'good' : test.score >= 40 ? 'okay' : 'poor'}`}>
                        {test.score}%
                      </span>
                    </div>
                    <div className="recent-test-info">
                      <div className="recent-test-name">{test.scope}</div>
                      <div className="recent-test-meta">
                        {test.correct}/{test.questions} correct • {new Date(test.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="section">
            <h2 className="section-title">
              <Target size={18} />
              Quick Actions
            </h2>
            
            <div className="quick-actions">
              <Link to="/study" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div>
                      <div className="card-title">Continue Studying</div>
                      <div className="card-subtitle">
                        {stats.topicsCompleted > 0 
                          ? `${stats.topicsCompleted} topics viewed`
                          : 'Start with Physics → Wave Optics'}
                      </div>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-secondary)' }} />
                  </div>
                </div>
              </Link>

              <Link to="/practice" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div>
                      <div className="card-title">Practice Questions</div>
                      <div className="card-subtitle">
                        {allQuestions.length - stats.questionsAttempted} new questions available
                      </div>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-secondary)' }} />
                  </div>
                </div>
              </Link>

              <Link to="/mock-test" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div>
                      <div className="card-title">Take Mock Test</div>
                      <div className="card-subtitle">
                        {stats.testsCompleted > 0 
                          ? `Best score: ${stats.bestScore}%`
                          : 'Test your preparation'}
                      </div>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-secondary)' }} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
