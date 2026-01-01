// Physics Module - Main Entry Point
// Exports all physics data (chapters, topics, helpers)

export { physicsChapters, getChapter } from './chapters';
export { 
  topicsData, 
  getTopicsForChapter, 
  getTopic,
  getTotalTopicsCount,
  getPopulatedChaptersCount 
} from './topics/index';

