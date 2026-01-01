// Physics Data - Main Entry Point
// Re-exports from modular physics structure

export const subjects = [
  { id: 'physics', name: 'Physics', icon: '⚡', color: '#818cf8' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: '#34d399', comingSoon: true },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#fbbf24', comingSoon: true },
];

// Import from modular structure
import { 
  physicsChapters, 
  getChapter,
  topicsData,
  getTopicsForChapter,
  getTopic 
} from './physics/index';

// Re-export for backward compatibility
export { physicsChapters, getChapter, topicsData, getTopicsForChapter, getTopic };

// Sample topic detail for demo/fallback purposes
export const sampleTopicDetail = {
  id: 'simple-harmonic-motion',
  name: 'Simple Harmonic Motion (SHM)',
  theory: {
    summary: 'Simple Harmonic Motion is a type of periodic motion where the restoring force is directly proportional to the displacement and acts in the direction opposite to that of displacement.',
    realWorldAnalogy: 'Think of a child on a swing - the further they swing from center, the stronger the force pulling them back. This back-and-forth motion at a constant rhythm is SHM.',
    keyPoints: [
      'Restoring force is proportional to displacement: F = -kx',
      'Motion is periodic and oscillatory',
      'Total mechanical energy remains constant',
      'Velocity is maximum at mean position, zero at extremes',
    ],
  },
  formulas: [
    {
      id: 'f1',
      name: 'Displacement in SHM',
      category: 'base',
      formula: 'x = A sin(ωt + φ)',
      latex: 'x = A \\sin(\\omega t + \\phi)',
      description: 'Position of particle at any time t',
      variables: [
        { symbol: 'x', meaning: 'Displacement', unit: 'm' },
        { symbol: 'A', meaning: 'Amplitude', unit: 'm' },
        { symbol: 'ω', meaning: 'Angular frequency', unit: 'rad/s' },
        { symbol: 'φ', meaning: 'Initial phase', unit: 'rad' },
      ],
      applications: [
        {
          name: 'Starting from mean position',
          latex: 'x = A \\sin(\\omega t)',
          context: 'When particle starts from mean position (φ = 0)',
        },
        {
          name: 'Starting from extreme position',
          latex: 'x = A \\cos(\\omega t)',
          context: 'When particle starts from extreme position',
        },
      ],
      relatedQuestions: [],
    },
    {
      id: 'f2',
      name: 'Time Period',
      category: 'base',
      formula: 'T = 2π/ω',
      latex: 'T = \\frac{2\\pi}{\\omega}',
      description: 'Time for one complete oscillation',
      variables: [
        { symbol: 'T', meaning: 'Time period', unit: 's' },
        { symbol: 'ω', meaning: 'Angular frequency', unit: 'rad/s' },
      ],
      applications: [
        {
          name: 'Spring-mass system',
          latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}',
          context: 'Time period depends on mass and spring constant',
        },
        {
          name: 'Simple pendulum',
          latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
          context: 'Time period depends on length and gravity',
        },
      ],
      relatedQuestions: [],
    },
  ],
  questions: [
    {
      id: 'q1',
      text: 'A particle executes SHM with amplitude 4 cm. At what displacement from mean position is its energy half kinetic and half potential?',
      options: ['1 cm', '2 cm', '2√2 cm', '√2 cm'],
      correct: 2,
      difficulty: 'medium',
      explanation: 'When KE = PE, each equals E/2. Using KE = ½mω²(A² - x²) and PE = ½mω²x², we get x = A/√2 = 4/√2 = 2√2 cm',
    },
  ],
  commonMistakes: [
    {
      mistake: 'Confusing amplitude with displacement',
      correct: 'Amplitude is maximum displacement; displacement varies with time',
      whyItHappens: 'Similar terminology in different contexts',
    },
    {
      mistake: 'Wrong sign in restoring force equation',
      correct: 'F = -kx (negative sign shows force opposite to displacement)',
      whyItHappens: 'Forgetting the direction of restoring force',
    },
    {
      mistake: 'Forgetting phase constant in general equation',
      correct: 'Use x = A sin(ωt + φ) where φ depends on initial conditions',
      whyItHappens: 'Starting with simplified form and not generalizing',
    },
  ],
  variations: [
    { type: 'numerical', description: 'SHM in vertical spring systems', difficulty: 'medium' },
    { type: 'numerical', description: 'Combination of two SHMs', difficulty: 'hard' },
    { type: 'numerical', description: 'Energy distribution problems', difficulty: 'medium' },
  ],
  mostAskedPatterns: [
    { pattern: 'Finding time period of different oscillating systems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
    { pattern: 'Energy at different positions', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
    { pattern: 'Phase difference between two SHMs', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
  ],
  analogies: [
    {
      concept: 'SHM',
      analogy: 'Child on swing',
      mapping: 'Further from center = stronger pull back. Natural rhythm of oscillation.',
    },
    {
      concept: 'Energy conservation in SHM',
      analogy: 'Roller coaster',
      mapping: 'Total energy constant - converts between KE (at center) and PE (at extremes)',
    },
  ],
};
