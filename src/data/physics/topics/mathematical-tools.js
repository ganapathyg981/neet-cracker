// Mathematical Tools - 2% weightage (Tier 3)
// NCERT Class 11 - Foundation chapter for Physics
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const mathematicalToolsTopics = [
  // Topic 1: Binomial Expression and Approximation
  {
    id: 'binomial-approximation',
    name: 'Binomial Expression and Approximation',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "The binomial theorem provides expansion for (1+x)ⁿ. For |x| << 1 (x much less than 1), the approximation (1+x)ⁿ ≈ 1 + nx is extremely useful in physics. This simplifies complex expressions involving small quantities like Δr/r, v/c, etc. Used extensively in gravitation, relativity, optics, and error analysis.",
      realWorldAnalogy: "Like rounding money - if you have ₹100.05, you often say ₹100. The binomial approximation ignores tiny higher-order terms just like we ignore small change in everyday transactions.",
      keyPoints: [
        "Binomial theorem: (1+x)ⁿ = 1 + nx + n(n-1)x²/2! + ...",
        "For |x| << 1: (1+x)ⁿ ≈ 1 + nx (first order approximation)",
        "(1+x)⁻¹ ≈ 1 - x for small x",
        "(1+x)^(1/2) ≈ 1 + x/2 for small x",
        "(1+x)^(-1/2) ≈ 1 - x/2 for small x",
        "(1-x)ⁿ ≈ 1 - nx for small x",
        "Used in: gravity variation, relativistic effects, lens formula, error propagation",
        "Valid only when |x| << 1 (typically x < 0.1)",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 11, Mathematical Tools section",
    },
    
    formulas: [
      {
        id: 'binomial-expansion',
        name: 'Binomial Expansion',
        category: 'base',
        formula: '(1+x)ⁿ = 1 + nx + n(n-1)x²/2! + ...',
        latex: '(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + ...',
        description: 'Full binomial expansion for any real n',
        variables: [
          { symbol: 'x', meaning: 'Small quantity', unit: 'dimensionless', typical_values: '|x| << 1' },
          { symbol: 'n', meaning: 'Exponent', unit: 'dimensionless', typical_values: 'Any real number' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'First order approximation', latex: '(1+x)^n \\approx 1 + nx', context: 'When |x| << 1', neet_frequency: 'high' },
          { name: 'Gravity at height h', latex: 'g_h = g\\left(1+\\frac{h}{R}\\right)^{-2} \\approx g\\left(1 - \\frac{2h}{R}\\right)', context: 'h << R', neet_frequency: 'high' },
          { name: 'Time dilation', latex: '\\gamma = \\left(1-\\frac{v^2}{c^2}\\right)^{-1/2} \\approx 1 + \\frac{v^2}{2c^2}', context: 'v << c', neet_frequency: 'medium' },
        ],
        specialCases: [
          '(1+x)² ≈ 1 + 2x',
          '(1+x)⁻¹ ≈ 1 - x',
          '(1+x)^(1/2) ≈ 1 + x/2',
          '(1-x)^(1/2) ≈ 1 - x/2',
        ],
        dimensionalCheck: 'Both sides dimensionless',
      },
      {
        id: 'common-approximations',
        name: 'Common Physics Approximations',
        category: 'derived',
        formula: 'Various approximations used in NEET',
        latex: '(1+x)^{-1} \\approx 1-x, \\quad (1+x)^{1/2} \\approx 1 + \\frac{x}{2}',
        description: 'Frequently used approximations in physics problems',
        variables: [
          { symbol: 'x', meaning: 'Small parameter', unit: 'dimensionless', typical_values: 'h/R, v/c, Δ/L' },
        ],
        derivedFrom: 'binomial-expansion',
        applications: [
          { name: 'Gravity variation', latex: 'g_h \\approx g\\left(1-\\frac{2h}{R}\\right)', context: 'At height h << R', neet_frequency: 'high' },
          { name: 'Gravity inside Earth', latex: 'g_d \\approx g\\left(1-\\frac{d}{R}\\right)', context: 'At depth d', neet_frequency: 'high' },
          { name: 'Capacitor with dielectric', latex: 'C = \\frac{\\epsilon_0 A}{d-t+t/K}', context: 'Partial dielectric', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Always check if x << 1 before applying',
          'Keep only first-order terms unless asked for higher accuracy',
        ],
        dimensionalCheck: 'Depends on context',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Applying approximation when x is not small',
        correct: 'Binomial approximation valid only when |x| << 1. For x = 0.5, error is significant.',
        whyItHappens: 'Not checking the condition before applying',
        neetExample: 'NEET 2019: When is (1+x)ⁿ ≈ 1+nx valid?',
      },
      {
        mistake: 'Wrong sign in approximation',
        correct: '(1+x)⁻¹ ≈ 1-x (note the minus). (1-x)ⁿ ≈ 1-nx (double negative gives plus only if both are negative).',
        whyItHappens: 'Sign errors in derivation',
        neetExample: 'NEET 2020: Approximate (1+h/R)⁻²',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Apply binomial to gravity problems', difficulty: 'medium' },
      { type: 'conceptual', description: 'When is approximation valid', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Gravity variation with height/depth', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
      { pattern: 'Condition for approximation validity', frequency: 'medium', yearAsked: [2019, 2021] },
    ],
    
    analogies: [
      {
        concept: 'Binomial approximation',
        analogy: 'Rounding to nearest rupee',
        mapping: 'Ignore small terms like ignoring paisa when dealing with large amounts',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Functions and Graphs
  {
    id: 'functions-graphs',
    name: 'Functions and Graphs',
    weightage: 0.5,
    difficulty: 'easy',
    
    theory: {
      summary: "Understanding graphs is crucial for physics. Key relationships: linear (y ∝ x), quadratic (y ∝ x²), inverse (y ∝ 1/x), square root (y ∝ √x). Slope of y-t graph gives velocity; slope of v-t graph gives acceleration; area under v-t graph gives displacement. Graphs help visualize relationships and extract physical quantities.",
      realWorldAnalogy: "Graphs are like maps of relationships - just as a road map shows how cities connect, graphs show how physical quantities relate to each other.",
      keyPoints: [
        "Linear: y = mx + c (straight line, slope = m)",
        "Quadratic: y = ax² + bx + c (parabola)",
        "Inverse: y = k/x (hyperbola)",
        "Exponential: y = ae^(bx) or y = ae^(-bx)",
        "Slope of position-time graph = velocity",
        "Slope of velocity-time graph = acceleration",
        "Area under v-t graph = displacement",
        "Area under a-t graph = change in velocity",
        "Intercepts give initial values",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 11, Mathematical Tools",
    },
    
    formulas: [
      {
        id: 'graph-interpretations',
        name: 'Graph Interpretations in Physics',
        category: 'base',
        formula: 'Slope and Area interpretations',
        latex: 'v = \\frac{dx}{dt} = \\text{slope of x-t}, \\quad a = \\frac{dv}{dt} = \\text{slope of v-t}',
        description: 'Physical meaning of slope and area in kinematic graphs',
        variables: [
          { symbol: 'slope', meaning: 'Rate of change', unit: 'y-unit/x-unit', typical_values: 'Derivative' },
          { symbol: 'area', meaning: 'Accumulated quantity', unit: 'y-unit × x-unit', typical_values: 'Integral' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'x-t graph slope', latex: 'v = \\text{slope}', context: 'Velocity from position graph', neet_frequency: 'high' },
          { name: 'v-t graph slope', latex: 'a = \\text{slope}', context: 'Acceleration from velocity graph', neet_frequency: 'high' },
          { name: 'v-t graph area', latex: 's = \\int v\\,dt = \\text{area}', context: 'Displacement from velocity graph', neet_frequency: 'high' },
          { name: 'F-x graph area', latex: 'W = \\int F\\,dx = \\text{area}', context: 'Work from force graph', neet_frequency: 'high' },
        ],
        specialCases: [
          'Horizontal line: constant quantity',
          'Straight line with slope: uniform rate of change',
          'Curved line: variable rate of change',
        ],
        dimensionalCheck: 'Units from y-axis and x-axis',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing slope with value on graph',
        correct: 'Slope is the RATE OF CHANGE (rise/run), not the y-value at a point.',
        whyItHappens: 'Reading y-value instead of calculating slope',
        neetExample: 'NEET 2020: Find velocity from x-t graph at t = 2s',
      },
      {
        mistake: 'Forgetting area can be negative',
        correct: 'Area below x-axis is negative. Net displacement = positive area - negative area.',
        whyItHappens: 'Not considering sign of area',
        neetExample: 'NEET 2019: Displacement from v-t graph with negative velocity portion',
      },
    ],
    
    variations: [
      { type: 'graphical', description: 'Find slope at a point', difficulty: 'easy' },
      { type: 'graphical', description: 'Calculate area under curve', difficulty: 'medium' },
      { type: 'graphical', description: 'Interpret physical meaning', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Velocity from x-t graph', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
      { pattern: 'Displacement from v-t graph', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Graph slope',
        analogy: 'Steepness of hill',
        mapping: 'Steeper hill = larger slope = faster rate of change',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Logarithms
  {
    id: 'logarithms',
    name: 'Logarithms',
    weightage: 0.5,
    difficulty: 'easy',
    
    theory: {
      summary: "Logarithms are inverse of exponentials: if a^x = N, then log_a(N) = x. Natural log (ln) uses base e ≈ 2.718. Common log (log₁₀) uses base 10. Key properties: log(AB) = log A + log B, log(A/B) = log A - log B, log(Aⁿ) = n log A. Used in decibel scale, pH, radioactive decay, entropy calculations.",
      realWorldAnalogy: "Logarithms compress large ranges into manageable numbers - like how Richter scale makes earthquake magnitudes from 1 to 10 instead of 1 to 10 billion.",
      keyPoints: [
        "Definition: if a^x = N, then log_a(N) = x",
        "Natural log: ln(x) = log_e(x), where e ≈ 2.718",
        "Common log: log₁₀(x)",
        "Product rule: log(AB) = log A + log B",
        "Quotient rule: log(A/B) = log A - log B",
        "Power rule: log(Aⁿ) = n log A",
        "log(1) = 0 for any base",
        "log_a(a) = 1",
        "ln(e) = 1, log₁₀(10) = 1",
        "Used in: decibels, pH, half-life, entropy",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 11, Mathematical Tools",
    },
    
    formulas: [
      {
        id: 'log-properties',
        name: 'Logarithm Properties',
        category: 'base',
        formula: 'log(AB) = log A + log B, log(A/B) = log A - log B',
        latex: '\\log(AB) = \\log A + \\log B, \\quad \\log\\left(\\frac{A}{B}\\right) = \\log A - \\log B',
        description: 'Fundamental properties of logarithms',
        variables: [
          { symbol: 'log', meaning: 'Logarithm (any base)', unit: 'dimensionless', typical_values: 'Real number' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Radioactive decay', latex: 't = \\frac{1}{\\lambda}\\ln\\left(\\frac{N_0}{N}\\right)', context: 'Time from decay equation', neet_frequency: 'high' },
          { name: 'Half-life', latex: 't_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}', context: 'ln 2 ≈ 0.693', neet_frequency: 'high' },
          { name: 'Decibel scale', latex: '\\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)', context: 'Sound intensity level', neet_frequency: 'medium' },
        ],
        specialCases: [
          'ln(e) = 1',
          'ln(1) = 0',
          'ln(e²) = 2',
          'log₁₀(100) = 2',
        ],
        dimensionalCheck: 'Logarithm is dimensionless',
      },
      {
        id: 'useful-log-values',
        name: 'Useful Logarithm Values',
        category: 'reference',
        formula: 'ln 2 ≈ 0.693, ln 10 ≈ 2.303',
        latex: '\\ln 2 \\approx 0.693, \\quad \\ln 10 \\approx 2.303, \\quad \\log_{10} 2 \\approx 0.301',
        description: 'Common logarithm values to memorize',
        variables: [],
        derivedFrom: null,
        applications: [
          { name: 'Half-life formula', latex: 't_{1/2} = \\frac{0.693}{\\lambda}', context: 'Uses ln 2', neet_frequency: 'high' },
          { name: 'Conversion', latex: '\\ln x = 2.303 \\log_{10} x', context: 'Natural to common log', neet_frequency: 'medium' },
        ],
        specialCases: [
          'e ≈ 2.718',
          'ln e = 1',
          'e^(ln x) = x',
        ],
        dimensionalCheck: 'Pure numbers',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing ln and log₁₀',
        correct: 'In physics, ln usually means natural log (base e). log₁₀ is common log. ln 2 ≈ 0.693, log₁₀ 2 ≈ 0.301.',
        whyItHappens: 'Different conventions in math and physics',
        neetExample: 'NEET 2019: Calculate half-life using ln 2 = 0.693',
      },
      {
        mistake: 'log(A+B) ≠ log A + log B',
        correct: 'log(A+B) cannot be simplified! Only log(A×B) = log A + log B.',
        whyItHappens: 'Applying product rule incorrectly',
        neetExample: 'NEET 2020: Simplify logarithmic expression',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Simplify logarithmic expressions', difficulty: 'easy' },
      { type: 'numerical', description: 'Solve exponential equations using log', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Half-life calculations using ln 2', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
      { pattern: 'Decibel calculations', frequency: 'medium', yearAsked: [2019, 2021] },
    ],
    
    analogies: [
      {
        concept: 'Logarithm',
        analogy: 'Number of digits',
        mapping: 'log₁₀(1000) = 3 tells you 1000 has about 3+1 = 4 digits',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Differentiation and Integration
  {
    id: 'calculus-basics',
    name: 'Differentiation and Integration',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "Differentiation gives instantaneous rate of change: v = dx/dt, a = dv/dt. Integration gives accumulation: x = ∫v dt, v = ∫a dt. Basic rules: d(xⁿ)/dx = nxⁿ⁻¹, ∫xⁿ dx = xⁿ⁺¹/(n+1). Differentiation and integration are inverse operations. Used extensively in kinematics, work-energy, electromagnetic induction.",
      realWorldAnalogy: "Differentiation is like checking your speedometer (instantaneous rate). Integration is like checking your odometer (accumulated distance). They're opposite processes - speed to distance and back.",
      keyPoints: [
        "Derivative = instantaneous rate of change = slope of tangent",
        "d(xⁿ)/dx = nxⁿ⁻¹",
        "d(sin x)/dx = cos x, d(cos x)/dx = -sin x",
        "d(eˣ)/dx = eˣ",
        "d(ln x)/dx = 1/x",
        "Integration = anti-derivative = area under curve",
        "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)",
        "∫(1/x) dx = ln|x| + C",
        "∫sin x dx = -cos x + C",
        "∫cos x dx = sin x + C",
        "v = dx/dt, a = dv/dt, x = ∫v dt, v = ∫a dt",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 11, Mathematical Tools",
    },
    
    formulas: [
      {
        id: 'differentiation-rules',
        name: 'Basic Differentiation Rules',
        category: 'base',
        formula: 'd(xⁿ)/dx = nxⁿ⁻¹',
        latex: '\\frac{d}{dx}(x^n) = nx^{n-1}',
        description: 'Power rule and other basic derivatives',
        variables: [
          { symbol: 'd/dx', meaning: 'Derivative with respect to x', unit: '1/x-unit', typical_values: 'Rate of change' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Velocity from position', latex: 'v = \\frac{dx}{dt}', context: 'Rate of change of position', neet_frequency: 'high' },
          { name: 'Acceleration from velocity', latex: 'a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}', context: 'Second derivative', neet_frequency: 'high' },
          { name: 'Force from potential', latex: 'F = -\\frac{dU}{dx}', context: 'Gradient of PE', neet_frequency: 'high' },
          { name: 'Maxima/minima', latex: '\\frac{dy}{dx} = 0', context: 'Finding extrema', neet_frequency: 'medium' },
        ],
        specialCases: [
          'd(constant)/dx = 0',
          'd(x)/dx = 1',
          'd(x²)/dx = 2x',
          'd(1/x)/dx = -1/x²',
        ],
        dimensionalCheck: '[dy/dx] = [y]/[x]',
      },
      {
        id: 'integration-rules',
        name: 'Basic Integration Rules',
        category: 'base',
        formula: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
        latex: '\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)',
        description: 'Power rule and other basic integrals',
        variables: [
          { symbol: '∫', meaning: 'Integral', unit: 'x-unit × y-unit', typical_values: 'Accumulated quantity' },
          { symbol: 'C', meaning: 'Constant of integration', unit: 'same as y', typical_values: 'Determined by initial conditions' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Displacement from velocity', latex: 'x = \\int v \\, dt', context: 'Area under v-t curve', neet_frequency: 'high' },
          { name: 'Work from force', latex: 'W = \\int F \\, dx', context: 'Area under F-x curve', neet_frequency: 'high' },
          { name: 'Impulse', latex: 'J = \\int F \\, dt', context: 'Area under F-t curve', neet_frequency: 'medium' },
        ],
        specialCases: [
          '∫1 dx = x + C',
          '∫x dx = x²/2 + C',
          '∫x² dx = x³/3 + C',
          '∫(1/x) dx = ln|x| + C',
        ],
        dimensionalCheck: '[∫y dx] = [y][x]',
      },
      {
        id: 'trigonometric-calculus',
        name: 'Trigonometric Derivatives and Integrals',
        category: 'derived',
        formula: 'd(sin x)/dx = cos x, d(cos x)/dx = -sin x',
        latex: '\\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x',
        description: 'Calculus of trigonometric functions',
        variables: [
          { symbol: 'x', meaning: 'Angle in radians', unit: 'rad', typical_values: '0 to 2π' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'SHM velocity', latex: 'x = A\\sin\\omega t \\Rightarrow v = A\\omega\\cos\\omega t', context: 'Velocity in SHM', neet_frequency: 'high' },
          { name: 'SHM acceleration', latex: 'a = -A\\omega^2\\sin\\omega t = -\\omega^2 x', context: 'Acceleration in SHM', neet_frequency: 'high' },
          { name: 'Integration', latex: '\\int \\sin x \\, dx = -\\cos x + C', context: 'Note the minus sign', neet_frequency: 'medium' },
        ],
        specialCases: [
          'd(tan x)/dx = sec²x',
          '∫cos x dx = sin x + C',
          '∫sin x dx = -cos x + C',
        ],
        dimensionalCheck: 'Dimensionless (trigonometric)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting the constant of integration',
        correct: 'Indefinite integral always has + C. Definite integral (with limits) does not need C.',
        whyItHappens: 'Rushing through calculations',
        neetExample: 'NEET 2019: Find position given velocity and initial position',
      },
      {
        mistake: 'Wrong sign in trig derivatives',
        correct: 'd(sin x)/dx = cos x (positive). d(cos x)/dx = -sin x (NEGATIVE).',
        whyItHappens: 'Not memorizing the minus sign for cosine derivative',
        neetExample: 'NEET 2020: Find acceleration in SHM x = A cos ωt',
      },
      {
        mistake: 'Using d/dt when should use d/dx or vice versa',
        correct: 'Check what variable you\'re differentiating with respect to. v = dx/dt, not dx/dx.',
        whyItHappens: 'Not reading carefully',
        neetExample: 'NEET 2021: Rate of change with respect to position',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Find velocity/acceleration from position function', difficulty: 'medium' },
      { type: 'numerical', description: 'Find displacement from velocity function', difficulty: 'medium' },
      { type: 'conceptual', description: 'Physical interpretation of derivative/integral', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'v, a from x(t) in kinematics', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'SHM calculus (x, v, a relations)', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Work from variable force', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Differentiation',
        analogy: 'Speedometer reading',
        mapping: 'Shows instantaneous rate - how fast position is changing right now',
      },
      {
        concept: 'Integration',
        analogy: 'Odometer reading',
        mapping: 'Shows accumulated distance - adding up all the tiny distances traveled',
      },
      {
        concept: 'Inverse relationship',
        analogy: 'Stacking and unstacking',
        mapping: 'Integration "stacks up" (accumulates), differentiation "unstacks" (finds rate)',
      },
    ],
    
    questions: [],
  },
];

