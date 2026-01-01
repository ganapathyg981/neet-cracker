// Centralized Question Bank
// All curated NEET-style questions linked to topics, formulas, chapters
// Now organized with modular chapter-specific files

import { allQuestions, getQuestionsByChapter, getQuestionsByFormula, getQuestionsByDifficulty } from './questions/index.js';

// Main question bank export - combines all chapters
export const questionBank = allQuestions;

// Get all questions
export function getAllQuestions() {
  return questionBank;
}

// Get questions by subject
export function getQuestionsBySubject(subject) {
  return questionBank.filter(q => q.subject === subject);
}

// Get questions by topic
export function getQuestionsByTopic(topicId) {
  return questionBank.filter(q => q.topic === topicId);
}

// Get questions by chapter (re-export)
export { getQuestionsByChapter };

// Get questions by formula (re-export)
export { getQuestionsByFormula };

// Get random questions for mock tests
export function getRandomQuestions(count = 10, options = {}) {
  let filtered = [...questionBank];
  
  if (options.subject) {
    filtered = filtered.filter(q => q.subject === options.subject);
  }
  if (options.chapter) {
    filtered = filtered.filter(q => q.chapter === options.chapter);
  }
  if (options.difficulty) {
    filtered = filtered.filter(q => q.difficulty === options.difficulty);
  }
  
  // Shuffle and take count
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  
  return filtered.slice(0, count);
}

// Helper functions to filter questions (legacy aliases)
export function getQuestionsByTopicId(topicId) {
  return getQuestionsByTopic(topicId);
}

export function getQuestionsByChapterId(chapterId) {
  return getQuestionsByChapter(chapterId);
}

export function getQuestionsByFormulaId(formulaId) {
  return getQuestionsByFormula(formulaId);
}

export function getQuestionsByDifficultyLevel(difficulty) {
  return getQuestionsByDifficulty(difficulty);
}

export function getQuestionBankStatistics() {
  return getQuestionStats();
}

// Get statistics about question coverage
export function getQuestionStats() {
  const chapterCounts = {};
  const topicCounts = {};
  const formulaCounts = {};
  const difficultyDistribution = { easy: 0, medium: 0, hard: 0 };

  questionBank.forEach(q => {
    // Chapter counts
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;

    // Topic counts
    if (q.topic) {
      topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
    }

    // Formula counts
    if (q.formulas && Array.isArray(q.formulas)) {
      q.formulas.forEach(formula => {
        formulaCounts[formula] = (formulaCounts[formula] || 0) + 1;
      });
    }

    // Difficulty distribution
    if (difficultyDistribution[q.difficulty] !== undefined) {
      difficultyDistribution[q.difficulty]++;
    }
  });

  return {
    totalQuestions: questionBank.length,
    chapters: chapterCounts,
    topics: topicCounts,
    formulas: formulaCounts,
    difficulty: difficultyDistribution,
  };
}

// Helper function to search questions
export function searchQuestions(query) {
  const lowerQuery = query.toLowerCase();
  return questionBank.filter(q =>
    q.text.toLowerCase().includes(lowerQuery) ||
    q.id.toLowerCase().includes(lowerQuery) ||
    (q.explanation && q.explanation.toLowerCase().includes(lowerQuery))
  );
}

// Export for testing and debugging
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    questionBank,
    getQuestionsByTopicId,
    getQuestionsByChapterId,
    getQuestionsByFormulaId,
    getQuestionsByDifficultyLevel,
    getQuestionBankStatistics,
    getQuestionStats,
    searchQuestions,
  };
}
