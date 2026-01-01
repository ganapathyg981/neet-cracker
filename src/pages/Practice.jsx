import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, CheckCircle2, XCircle, RotateCcw, ChevronDown } from 'lucide-react';
import { getAllQuestions, getQuestionsBySubject, getQuestionsByChapter } from '../data/questionBank';
import { physicsChapters } from '../data/physicsData';
import { recordQuestionAttempt, getQuestionStatus, getStats } from '../stores/progressStore';

export default function Practice() {
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [chapterFilter, setChapterFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const allQuestions = getAllQuestions();
  const stats = getStats();

  const filteredQuestions = useMemo(() => {
    let filtered = [...allQuestions];
    
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficultyFilter);
    }
    
    if (chapterFilter !== 'all') {
      filtered = filtered.filter(q => q.chapter === chapterFilter);
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(q => {
        const status = getQuestionStatus(q.id);
        if (statusFilter === 'unattempted') return !status?.answered;
        if (statusFilter === 'correct') return status?.correct === true;
        if (statusFilter === 'wrong') return status?.answered && !status?.correct;
        return true;
      });
    }
    
    return filtered;
  }, [allQuestions, difficultyFilter, chapterFilter, statusFilter]);

  const handleOptionClick = (questionId, optionIndex, correctIndex) => {
    if (selectedAnswers[questionId] !== undefined) return;

    const isCorrect = optionIndex === correctIndex;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setShowExplanation(prev => ({ ...prev, [questionId]: true }));

    recordQuestionAttempt(questionId, isCorrect);
  };

  const resetFilters = () => {
    setDifficultyFilter('all');
    setChapterFilter('all');
    setStatusFilter('all');
  };

  const chapters = physicsChapters.map(c => ({ id: c.id, name: c.name }));

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Practice</h1>
        <p className="page-subtitle">
          {allQuestions.length} questions available • {stats.questionsAttempted} attempted • {stats.accuracy}% accuracy
        </p>
      </div>

      {/* Stats Bar */}
      <div className="practice-stats">
        <div className="practice-stat">
          <span className="practice-stat-value">{allQuestions.length}</span>
          <span className="practice-stat-label">Total</span>
        </div>
        <div className="practice-stat">
          <span className="practice-stat-value">{stats.questionsAttempted}</span>
          <span className="practice-stat-label">Attempted</span>
        </div>
        <div className="practice-stat correct">
          <span className="practice-stat-value">{stats.questionsCorrect}</span>
          <span className="practice-stat-label">Correct</span>
        </div>
        <div className="practice-stat">
          <span className="practice-stat-value">{stats.accuracy}%</span>
          <span className="practice-stat-label">Accuracy</span>
        </div>
      </div>

      {/* Filter Toggle */}
      <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
        <Filter size={18} />
        <span>Filters</span>
        <ChevronDown size={18} className={showFilters ? 'rotated' : ''} />
        {(difficultyFilter !== 'all' || chapterFilter !== 'all' || statusFilter !== 'all') && (
          <span className="filter-badge">Active</span>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label className="filter-label">Difficulty</label>
            <div className="filter-options">
              {['all', 'easy', 'medium', 'hard'].map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`filter-btn ${difficultyFilter === d ? 'active' : ''}`}
                  onClick={() => setDifficultyFilter(d)}
                >
                  {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Chapter</label>
            <div className="filter-options scrollable">
              <button
                type="button"
                className={`filter-btn ${chapterFilter === 'all' ? 'active' : ''}`}
                onClick={() => setChapterFilter('all')}
              >
                All Chapters
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  type="button"
                  className={`filter-btn ${chapterFilter === chapter.id ? 'active' : ''}`}
                  onClick={() => setChapterFilter(chapter.id)}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Status</label>
            <div className="filter-options">
              <button
                type="button"
                className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
                onClick={() => setStatusFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`filter-btn ${statusFilter === 'unattempted' ? 'active' : ''}`}
                onClick={() => setStatusFilter('unattempted')}
              >
                Unattempted
              </button>
              <button
                type="button"
                className={`filter-btn ${statusFilter === 'correct' ? 'active' : ''}`}
                onClick={() => setStatusFilter('correct')}
              >
                ✓ Correct
              </button>
              <button
                type="button"
                className={`filter-btn ${statusFilter === 'wrong' ? 'active' : ''}`}
                onClick={() => setStatusFilter('wrong')}
              >
                ✗ Wrong
              </button>
            </div>
          </div>

          <button type="button" className="reset-filters-btn" onClick={resetFilters}>
            <RotateCcw size={14} />
            Reset Filters
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="results-count">
        Showing {filteredQuestions.length} of {allQuestions.length} questions
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📚</div>
          <p>No questions found for this filter</p>
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="questions-grid">
          {filteredQuestions.map((question) => {
            const previousStatus = getQuestionStatus(question.id);
            const currentAnswer = selectedAnswers[question.id];
            const showResult = currentAnswer !== undefined;
            
            return (
              <div key={question.id} className="question-card">
                <div className="question-header">
                  <span className={`tag ${question.difficulty}`}>{question.difficulty}</span>
                  {question.year && <span className="tag year">NEET {question.year}</span>}
                  {question.chapter && (
                    <span className="tag chapter">{question.chapter.replace(/-/g, ' ')}</span>
                  )}
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
                    if (showResult) {
                      if (isCorrect) optionClass += ' correct';
                      else if (isSelected) optionClass += ' wrong';
                    }

                    return (
                      <div
                        key={idx}
                        className={optionClass}
                        onClick={() => !showResult && handleOptionClick(question.id, idx, question.correct)}
                        style={{ cursor: showResult ? 'default' : 'pointer' }}
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
      )}
    </div>
  );
}
