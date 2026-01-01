// Centralized Question Bank
// All curated NEET-style questions linked to topics, formulas, chapters
// Now organized with modular chapter-specific files

import { allQuestions, getQuestionsByChapter, getQuestionsByFormula, getQuestionsByDifficulty, getQuestionStats } from './questions/index.js';

// Main question bank export - combines all chapters
export const questionBank = allQuestions;

// Helper functions to filter questions
export function getQuestionsByTopicId(topicId) {
  return questionBank.filter(q => q.topic === topicId);
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
