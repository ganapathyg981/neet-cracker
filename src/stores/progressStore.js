// Global Progress Store using localStorage
// Tracks: questions answered, topics completed, test results, streaks

const STORAGE_KEY = 'neet_cracker_progress';

const defaultProgress = {
  questionsAttempted: {}, // { questionId: { answered: true, correct: boolean, attempts: number, lastAttempted: date } }
  topicsCompleted: [],    // [topicId, topicId, ...]
  chaptersProgress: {},   // { chapterId: { viewed: boolean, questionsAttempted: number, questionsCorrect: number } }
  testResults: [],        // [{ id, date, type, scope, questions, correct, wrong, score, timeSpent }]
  streak: {
    current: 0,
    best: 0,
    lastStudyDate: null,
  },
  lastUpdated: null,
};

function getProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultProgress, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Error reading progress:', e);
  }
  return { ...defaultProgress };
}

function saveProgress(progress) {
  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

export function recordQuestionAttempt(questionId, isCorrect) {
  const progress = getProgress();
  const existing = progress.questionsAttempted[questionId] || { attempts: 0 };
  
  progress.questionsAttempted[questionId] = {
    answered: true,
    correct: isCorrect,
    attempts: existing.attempts + 1,
    lastAttempted: new Date().toISOString(),
  };
  
  updateStreak(progress);
  saveProgress(progress);
  return progress;
}

export function recordTopicViewed(topicId, chapterId) {
  const progress = getProgress();
  
  // Update chapter progress
  if (!progress.chaptersProgress[chapterId]) {
    progress.chaptersProgress[chapterId] = { viewed: true, questionsAttempted: 0, questionsCorrect: 0 };
  }
  progress.chaptersProgress[chapterId].viewed = true;
  
  updateStreak(progress);
  saveProgress(progress);
  return progress;
}

export function recordTopicCompleted(topicId) {
  const progress = getProgress();
  if (!progress.topicsCompleted.includes(topicId)) {
    progress.topicsCompleted.push(topicId);
  }
  saveProgress(progress);
  return progress;
}

export function recordTestResult(testResult) {
  const progress = getProgress();
  progress.testResults.push({
    ...testResult,
    id: `test_${Date.now()}`,
    date: new Date().toISOString(),
  });
  
  updateStreak(progress);
  saveProgress(progress);
  return progress;
}

function updateStreak(progress) {
  const today = new Date().toDateString();
  const lastDate = progress.streak.lastStudyDate;
  
  if (!lastDate) {
    progress.streak.current = 1;
    progress.streak.lastStudyDate = today;
  } else {
    const last = new Date(lastDate).toDateString();
    if (last === today) {
      // Same day, no change
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (last === yesterday.toDateString()) {
        // Consecutive day
        progress.streak.current += 1;
      } else {
        // Streak broken
        progress.streak.current = 1;
      }
      progress.streak.lastStudyDate = today;
    }
  }
  
  if (progress.streak.current > progress.streak.best) {
    progress.streak.best = progress.streak.current;
  }
}

export function getStats() {
  const progress = getProgress();
  
  const totalQuestions = Object.keys(progress.questionsAttempted).length;
  const correctQuestions = Object.values(progress.questionsAttempted)
    .filter(q => q.correct).length;
  
  const testsCount = progress.testResults.length;
  const avgScore = testsCount > 0
    ? Math.round(progress.testResults.reduce((acc, t) => acc + t.score, 0) / testsCount)
    : 0;
  const bestScore = testsCount > 0
    ? Math.max(...progress.testResults.map(t => t.score))
    : 0;
  
  const accuracy = totalQuestions > 0
    ? Math.round((correctQuestions / totalQuestions) * 100)
    : 0;
  
  return {
    questionsAttempted: totalQuestions,
    questionsCorrect: correctQuestions,
    accuracy,
    topicsCompleted: progress.topicsCompleted.length,
    testsCompleted: testsCount,
    avgScore,
    bestScore,
    currentStreak: progress.streak.current,
    bestStreak: progress.streak.best,
    lastStudyDate: progress.streak.lastStudyDate,
  };
}

export function getQuestionStatus(questionId) {
  const progress = getProgress();
  return progress.questionsAttempted[questionId] || null;
}

export function getTopicProgress(topicId, questionsInTopic) {
  const progress = getProgress();
  const attempted = questionsInTopic.filter(q => 
    progress.questionsAttempted[q.id]
  ).length;
  const correct = questionsInTopic.filter(q => 
    progress.questionsAttempted[q.id]?.correct
  ).length;
  
  return {
    attempted,
    correct,
    total: questionsInTopic.length,
    percentage: questionsInTopic.length > 0 
      ? Math.round((attempted / questionsInTopic.length) * 100) 
      : 0,
  };
}

export function getChapterProgress(chapterId, questionsInChapter) {
  const progress = getProgress();
  const attempted = questionsInChapter.filter(q => 
    progress.questionsAttempted[q.id]
  ).length;
  const correct = questionsInChapter.filter(q => 
    progress.questionsAttempted[q.id]?.correct
  ).length;
  
  return {
    attempted,
    correct,
    total: questionsInChapter.length,
    percentage: questionsInChapter.length > 0 
      ? Math.round((attempted / questionsInChapter.length) * 100) 
      : 0,
  };
}

export function getSubjectProgress(subjectId, questionsInSubject) {
  const progress = getProgress();
  const attempted = questionsInSubject.filter(q => 
    progress.questionsAttempted[q.id]
  ).length;
  const correct = questionsInSubject.filter(q => 
    progress.questionsAttempted[q.id]?.correct
  ).length;
  
  return {
    attempted,
    correct,
    total: questionsInSubject.length,
    percentage: questionsInSubject.length > 0 
      ? Math.round((attempted / questionsInSubject.length) * 100) 
      : 0,
  };
}

export function getTestResults() {
  const progress = getProgress();
  return progress.testResults;
}

export function getWeakTopics() {
  const progress = getProgress();
  const topicStats = {};
  
  // Group by topic
  Object.entries(progress.questionsAttempted).forEach(([qId, data]) => {
    // We'd need question data to get topic - this is a simplified version
    // In real implementation, we'd look up the question to get its topic
  });
  
  return [];
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultProgress;
}

export function getAllProgress() {
  return getProgress();
}

