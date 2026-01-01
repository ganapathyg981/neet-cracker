// Questions Index
// Combines all chapter-specific questions into a unified export

import { electricChargesFieldsQuestions } from './electric-charges-fields-questions.js';
import { gravitationQuestions } from './gravitation-questions.js';
import { rayOpticsQuestions } from './ray-optics-questions.js';
import { currentElectricityQuestions } from './current-electricity-questions.js';
import { electrostaticPotentialCapacitanceQuestions } from './electrostatic-potential-questions.js';
import { semiconductorElectronicsQuestions } from './semiconductor-electronics-questions.js';

// Combined question bank - all chapters
export const allQuestions = [
  ...electricChargesFieldsQuestions,
  ...gravitationQuestions,
  ...rayOpticsQuestions,
  ...currentElectricityQuestions,
  ...electrostaticPotentialCapacitanceQuestions,
  ...semiconductorElectronicsQuestions,
];

// Export individual chapter questions for targeted access
export {
  electricChargesFieldsQuestions,
  gravitationQuestions,
  rayOpticsQuestions,
  currentElectricityQuestions,
  electrostaticPotentialCapacitanceQuestions,
  semiconductorElectronicsQuestions,
};

// Utility function to get questions by chapter
export function getQuestionsByChapter(chapterName) {
  return allQuestions.filter(q => q.chapter === chapterName);
}

// Utility function to get questions by formula
export function getQuestionsByFormula(formulaId) {
  return allQuestions.filter(q => q.formulas && q.formulas.includes(formulaId));
}

// Utility function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty) {
  return allQuestions.filter(q => q.difficulty === difficulty);
}

// Get statistics about question coverage
export function getQuestionStats() {
  const chapterCounts = {};
  const topicCounts = {};
  const difficultyDistribution = { easy: 0, medium: 0, hard: 0 };

  allQuestions.forEach(q => {
    // Chapter counts
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;

    // Topic counts
    if (q.topic) {
      topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
    }

    // Difficulty distribution
    if (difficultyDistribution[q.difficulty] !== undefined) {
      difficultyDistribution[q.difficulty]++;
    }
  });

  return {
    totalQuestions: allQuestions.length,
    chapters: chapterCounts,
    topics: topicCounts,
    difficulty: difficultyDistribution,
  };
}
