// Motion in a Plane - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 4

export const motionInPlaneTopics = [
  // Topic 1: Vectors and Vector Operations
  {
    id: 'vectors-operations',
    name: 'Vectors and Vector Operations',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "Vectors have magnitude and direction. Represented as A⃗ = Aₓî + Aᵧĵ. Addition follows triangle/parallelogram law. Subtraction: A⃗ - B⃗ = A⃗ + (-B⃗). Dot product gives scalar, cross product gives vector perpendicular to plane.",
      realWorldAnalogy: "Walking 3 km east then 4 km north: total path is 7 km (scalar addition), but displacement is 5 km at an angle (vector addition using Pythagoras).",
      keyPoints: [
        "Vector = magnitude + direction; Scalar = magnitude only",
        "Unit vector: Â = A⃗/|A⃗| (magnitude = 1)",
        "A⃗ = Aₓî + Aᵧĵ where Aₓ = A cos θ, Aᵧ = A sin θ",
        "|A⃗| = √(Aₓ² + Aᵧ²), direction: tan θ = Aᵧ/Aₓ",
        "Triangle law: R⃗ = A⃗ + B⃗ (head-to-tail)",
        "Parallelogram law: R² = A² + B² + 2AB cos θ",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'vector-addition',
        name: 'Vector Addition (Parallelogram Law)',
        category: 'base',
        formula: 'R² = A² + B² + 2AB cos θ',
        latex: 'R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}',
        description: 'Magnitude of resultant of two vectors at angle θ',
        variables: [
          { symbol: 'R', meaning: 'Resultant magnitude', unit: 'Same as A, B', typical_values: '|A-B| ≤ R ≤ A+B' },
          { symbol: 'A, B', meaning: 'Magnitudes of vectors', unit: 'Various', typical_values: 'Given' },
          { symbol: 'θ', meaning: 'Angle between vectors', unit: 'degrees or radians', typical_values: '0° to 180°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Parallel vectors (θ=0°)', latex: 'R = A + B', context: 'Maximum resultant', neet_frequency: 'high' },
          { name: 'Anti-parallel (θ=180°)', latex: 'R = |A - B|', context: 'Minimum resultant', neet_frequency: 'high' },
          { name: 'Perpendicular (θ=90°)', latex: 'R = \\sqrt{A^2 + B^2}', context: 'Pythagoras', neet_frequency: 'high' },
          { name: 'Equal vectors (A=B)', latex: 'R = 2A\\cos(\\theta/2)', context: 'Useful for equal force problems', neet_frequency: 'medium' },
        ],
        specialCases: [
          'R_max = A + B (when θ = 0°)',
          'R_min = |A - B| (when θ = 180°)',
          'If A = B: R = 2A cos(θ/2)',
        ],
        dimensionalCheck: '[R] = [A] = [B]',
      },
      {
        id: 'resultant-direction',
        name: 'Direction of Resultant',
        category: 'derived',
        formula: 'tan α = B sin θ / (A + B cos θ)',
        latex: '\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}',
        description: 'Angle of resultant with vector A',
        variables: [
          { symbol: 'α', meaning: 'Angle of R with A', unit: 'degrees', typical_values: '0 to 180°' },
        ],
        derivedFrom: 'vector-addition',
        applications: [
          { name: 'Equal vectors', latex: '\\alpha = \\theta/2', context: 'Resultant bisects angle when A = B', neet_frequency: 'high' },
        ],
        specialCases: [
          'When A = B, resultant bisects the angle',
          'When θ = 90°, tan α = B/A',
        ],
        dimensionalCheck: 'Dimensionless (angle)',
      },
      {
        id: 'dot-product',
        name: 'Scalar (Dot) Product',
        category: 'base',
        formula: 'A⃗ · B⃗ = AB cos θ = AₓBₓ + AᵧBᵧ',
        latex: '\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta = A_xB_x + A_yB_y + A_zB_z',
        description: 'Product giving scalar; measures parallel components',
        variables: [
          { symbol: 'A⃗ · B⃗', meaning: 'Dot product', unit: 'Product of units', typical_values: 'Scalar result' },
          { symbol: 'θ', meaning: 'Angle between vectors', unit: 'radians', typical_values: '0 to π' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Work done', latex: 'W = \\vec{F} \\cdot \\vec{s} = Fs\\cos\\theta', context: 'Force times displacement', neet_frequency: 'high' },
          { name: 'Perpendicular test', latex: '\\vec{A} \\cdot \\vec{B} = 0 \\Rightarrow \\vec{A} \\perp \\vec{B}', context: 'Dot product zero means perpendicular', neet_frequency: 'high' },
          { name: 'Finding angle', latex: '\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{AB}', context: 'Angle between vectors', neet_frequency: 'medium' },
        ],
        specialCases: [
          'A⃗ · A⃗ = A² (self dot product)',
          'î · î = ĵ · ĵ = k̂ · k̂ = 1',
          'î · ĵ = ĵ · k̂ = k̂ · î = 0',
        ],
        dimensionalCheck: '[A⃗ · B⃗] = [A][B]',
      },
      {
        id: 'cross-product',
        name: 'Vector (Cross) Product',
        category: 'base',
        formula: 'A⃗ × B⃗ = AB sin θ n̂',
        latex: '|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta',
        description: 'Product giving vector perpendicular to both; direction by right-hand rule',
        variables: [
          { symbol: '|A⃗ × B⃗|', meaning: 'Cross product magnitude', unit: 'Product of units', typical_values: 'Vector result' },
          { symbol: 'n̂', meaning: 'Unit vector perpendicular to plane', unit: 'Dimensionless', typical_values: 'By right-hand rule' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Torque', latex: '\\vec{\\tau} = \\vec{r} \\times \\vec{F}', context: 'Rotational effect of force', neet_frequency: 'high' },
          { name: 'Area of parallelogram', latex: 'A = |\\vec{A} \\times \\vec{B}|', context: 'Magnitude gives area', neet_frequency: 'medium' },
          { name: 'Parallel test', latex: '\\vec{A} \\times \\vec{B} = 0 \\Rightarrow \\vec{A} \\parallel \\vec{B}', context: 'Cross product zero means parallel', neet_frequency: 'high' },
        ],
        specialCases: [
          'A⃗ × A⃗ = 0 (self cross product)',
          'A⃗ × B⃗ = -B⃗ × A⃗ (anti-commutative)',
          'î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ',
        ],
        dimensionalCheck: '[A⃗ × B⃗] = [A][B]',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using arithmetic addition for vector magnitudes',
        correct: 'Vector magnitudes don\'t simply add. Use R = √(A² + B² + 2AB cos θ).',
        whyItHappens: 'Treating vectors like scalars',
        neetExample: 'NEET 2020: Two forces of 3N and 4N at 90° give resultant 5N, not 7N',
      },
      {
        mistake: 'Forgetting that cross product is anti-commutative',
        correct: 'A⃗ × B⃗ = -B⃗ × A⃗. Order matters for cross product direction.',
        whyItHappens: 'Assuming all products are commutative',
        neetExample: 'NEET 2019: Direction of torque τ⃗ = r⃗ × F⃗',
      },
      {
        mistake: 'Wrong angle in parallelogram law',
        correct: 'θ is angle BETWEEN the vectors (tail to tail), not the exterior angle.',
        whyItHappens: 'Misidentifying the angle when vectors are drawn head-to-tail',
        neetExample: 'NEET 2021: Resultant of two vectors at 120°',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Find resultant magnitude and direction', difficulty: 'medium' },
      { type: 'numerical', description: 'Component method for multiple vectors', difficulty: 'medium' },
      { type: 'numerical', description: 'Dot and cross product calculations', difficulty: 'medium' },
      { type: 'conceptual', description: 'Unit vector problems', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Resultant of two vectors at angle', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Angle for given resultant condition', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Dot product for angle between vectors', frequency: 'medium', yearAsked: [2018, 2021] },
    ],
    
    analogies: [
      {
        concept: 'Vector addition',
        analogy: 'Following directions on a map',
        mapping: 'Go 3 blocks east, 4 blocks north → you\'re 5 blocks from start (not 7)',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Projectile Motion
  {
    id: 'projectile-motion',
    name: 'Projectile Motion',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Projectile motion is 2D motion under gravity. Horizontal: uniform motion (aₓ = 0). Vertical: uniformly accelerated (aᵧ = g). Independence: horizontal and vertical components don't affect each other. Trajectory is parabolic. Range maximum at 45°.",
      realWorldAnalogy: "A ball thrown at an angle follows a curved path - it maintains constant horizontal speed while accelerating downward. Like dropping a ball from a moving train - it lands beside the track, not behind.",
      keyPoints: [
        "Horizontal: x = u cos θ · t (uniform motion)",
        "Vertical: y = u sin θ · t - ½gt² (accelerated)",
        "Time of flight: T = 2u sin θ/g",
        "Maximum height: H = u² sin² θ/2g",
        "Range: R = u² sin 2θ/g",
        "R_max at θ = 45°; same R for θ and (90°-θ)",
      ],
      prerequisites: ['vectors-operations'],
    },
    
    formulas: [
      {
        id: 'time-of-flight',
        name: 'Time of Flight',
        category: 'derived',
        formula: 'T = 2u sin θ/g',
        latex: 'T = \\frac{2u\\sin\\theta}{g}',
        description: 'Total time projectile is in air (for same level landing)',
        variables: [
          { symbol: 'T', meaning: 'Time of flight', unit: 's', typical_values: '1-10 s' },
          { symbol: 'u', meaning: 'Initial speed', unit: 'm/s', typical_values: '10-100 m/s' },
          { symbol: 'θ', meaning: 'Angle of projection', unit: 'degrees', typical_values: '0° to 90°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Depends only on vertical component', latex: 'T = \\frac{2u_y}{g} = \\frac{2u\\sin\\theta}{g}', context: 'Horizontal component doesn\'t affect T', neet_frequency: 'high' },
          { name: 'Time to reach max height', latex: 't = \\frac{T}{2} = \\frac{u\\sin\\theta}{g}', context: 'Half the total time', neet_frequency: 'high' },
        ],
        specialCases: [
          'T ∝ sin θ (maximum at θ = 90°)',
          'T ∝ u (double speed → double time)',
          'For horizontal projection: T = √(2h/g)',
        ],
        dimensionalCheck: '[T] = [u]/[g] = s',
      },
      {
        id: 'max-height',
        name: 'Maximum Height',
        category: 'derived',
        formula: 'H = u² sin² θ/2g',
        latex: 'H = \\frac{u^2\\sin^2\\theta}{2g}',
        description: 'Highest point reached by projectile',
        variables: [
          { symbol: 'H', meaning: 'Maximum height', unit: 'm', typical_values: 'Depends on u, θ' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Vertical throw', latex: 'H = \\frac{u^2}{2g}', context: 'θ = 90°', neet_frequency: 'high' },
          { name: 'Relation with T', latex: 'H = \\frac{gT^2}{8}', context: 'Using T = 2u sin θ/g', neet_frequency: 'medium' },
        ],
        specialCases: [
          'H ∝ sin² θ (maximum at θ = 90°)',
          'H ∝ u² (double speed → 4× height)',
          'At H: vᵧ = 0 but vₓ ≠ 0',
        ],
        dimensionalCheck: '[H] = [u²]/[g] = m',
      },
      {
        id: 'range',
        name: 'Horizontal Range',
        category: 'derived',
        formula: 'R = u² sin 2θ/g',
        latex: 'R = \\frac{u^2\\sin 2\\theta}{g}',
        description: 'Horizontal distance covered when landing at same level',
        variables: [
          { symbol: 'R', meaning: 'Range', unit: 'm', typical_values: 'Maximum at 45°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Maximum range', latex: 'R_{max} = \\frac{u^2}{g}', context: 'At θ = 45°', neet_frequency: 'high' },
          { name: 'Complementary angles', latex: 'R(\\theta) = R(90° - \\theta)', context: 'Same range for θ and (90°-θ)', neet_frequency: 'high' },
          { name: 'Relation with H', latex: 'R = 4H\\cot\\theta', context: 'Connecting R and H', neet_frequency: 'medium' },
        ],
        specialCases: [
          'R_max at θ = 45° (sin 2θ = 1)',
          'R = 0 at θ = 0° or 90°',
          'Same R for angles θ and (90° - θ)',
        ],
        dimensionalCheck: '[R] = [u²]/[g] = m',
      },
      {
        id: 'trajectory',
        name: 'Equation of Trajectory',
        category: 'derived',
        formula: 'y = x tan θ - gx²/2u² cos² θ',
        latex: 'y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}',
        description: 'Path equation (parabola) relating y and x',
        variables: [
          { symbol: 'y', meaning: 'Vertical position', unit: 'm', typical_values: 'Height at position x' },
          { symbol: 'x', meaning: 'Horizontal position', unit: 'm', typical_values: '0 to R' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Standard form', latex: 'y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)', context: 'In terms of range R', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Parabolic path (y ∝ x²)',
          'Passes through origin and (R, 0)',
          'Maximum at x = R/2',
        ],
        dimensionalCheck: '[y] = [x] = m',
      },
      {
        id: 'horizontal-projection',
        name: 'Horizontal Projection',
        category: 'derived',
        formula: 'T = √(2h/g), R = u√(2h/g)',
        latex: 'T = \\sqrt{\\frac{2h}{g}}, \\quad R = u\\sqrt{\\frac{2h}{g}}',
        description: 'Projectile thrown horizontally from height h',
        variables: [
          { symbol: 'h', meaning: 'Height of projection', unit: 'm', typical_values: 'Height of cliff/table' },
        ],
        derivedFrom: 'time-of-flight',
        applications: [
          { name: 'Time to reach ground', latex: 'T = \\sqrt{\\frac{2h}{g}}', context: 'Independent of horizontal velocity', neet_frequency: 'high' },
          { name: 'Range from cliff', latex: 'R = uT = u\\sqrt{\\frac{2h}{g}}', context: 'Horizontal distance', neet_frequency: 'high' },
        ],
        specialCases: [
          'Time independent of u (same as free fall)',
          'Range ∝ u (faster → farther)',
          'Final velocity: v = √(u² + 2gh)',
        ],
        dimensionalCheck: '[T] = √([h]/[g]) = s',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using wrong formula for time when thrown from height',
        correct: 'T = 2u sin θ/g is for same-level landing. For cliff, solve: -h = u sin θ · t - ½gt²',
        whyItHappens: 'Not recognizing different landing height',
        neetExample: 'NEET 2020: Ball thrown at 30° from 20m tower',
      },
      {
        mistake: 'Thinking velocity is zero at highest point',
        correct: 'At highest point, vᵧ = 0 but vₓ = u cos θ ≠ 0. Speed = u cos θ.',
        whyItHappens: 'Confusing vertical component with total velocity',
        neetExample: 'NEET 2019: Minimum velocity of projectile during flight',
      },
      {
        mistake: 'Forgetting complementary angle property',
        correct: 'Angles θ and (90° - θ) give same range but different heights and times.',
        whyItHappens: 'Not connecting sin 2θ = sin 2(90° - θ)',
        neetExample: 'NEET 2021: Angles giving range of 30m',
      },
      {
        mistake: 'Using R = u²sin2θ/g for inclined plane',
        correct: 'For projection on incline, use component equations along and perpendicular to incline.',
        whyItHappens: 'Applying formula without checking conditions',
        neetExample: 'NEET 2022: Projectile on 30° incline',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Range, height, time of flight', difficulty: 'medium' },
      { type: 'numerical', description: 'Horizontal projection from cliff', difficulty: 'medium' },
      { type: 'numerical', description: 'Two projectiles with same range', difficulty: 'medium' },
      { type: 'conceptual', description: 'Velocity at various points', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Range, height, time of flight calculations', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Angle for maximum range', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Horizontal projection', frequency: 'high', yearAsked: [2018, 2020, 2021, 2023] },
      { pattern: 'Velocity at highest point', frequency: 'medium', yearAsked: [2019, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Independence of motion',
        analogy: 'Dropping from moving train',
        mapping: 'Ball continues forward with train\'s speed while falling - horizontal and vertical motions are independent',
      },
      {
        concept: 'Maximum range at 45°',
        analogy: 'Shot put or javelin',
        mapping: 'Athletes throw near 45° (slightly less due to height of release) for maximum distance',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Uniform Circular Motion
  {
    id: 'uniform-circular-motion',
    name: 'Uniform Circular Motion',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "In uniform circular motion, speed is constant but velocity changes (direction changes). Centripetal acceleration ac = v²/r = ω²r points toward center. Centripetal force Fc = mv²/r is required for circular motion. Angular velocity ω = 2π/T = 2πf.",
      realWorldAnalogy: "Car on circular track: speedometer constant but steering wheel turned. You feel pushed outward (actually it's inertia - car pushes you inward). Washing machine spin cycle uses centripetal force.",
      keyPoints: [
        "Speed constant, velocity changing (direction changes)",
        "Centripetal acceleration: ac = v²/r = ω²r (toward center)",
        "Centripetal force: Fc = mv²/r = mω²r",
        "Angular velocity: ω = dθ/dt = 2π/T = 2πf",
        "v = ωr (linear and angular velocity relation)",
        "Period T = 2πr/v = 2π/ω",
      ],
      prerequisites: ['vectors-operations'],
    },
    
    formulas: [
      {
        id: 'centripetal-acceleration',
        name: 'Centripetal Acceleration',
        category: 'base',
        formula: 'ac = v²/r = ω²r',
        latex: 'a_c = \\frac{v^2}{r} = \\omega^2 r',
        description: 'Acceleration toward center for circular motion',
        variables: [
          { symbol: 'ac', meaning: 'Centripetal acceleration', unit: 'm/s²', typical_values: 'Depends on v, r' },
          { symbol: 'v', meaning: 'Linear speed', unit: 'm/s', typical_values: 'Tangential velocity' },
          { symbol: 'r', meaning: 'Radius of circle', unit: 'm', typical_values: 'Path radius' },
          { symbol: 'ω', meaning: 'Angular velocity', unit: 'rad/s', typical_values: '2π/T' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Using period', latex: 'a_c = \\frac{4\\pi^2 r}{T^2}', context: 'In terms of period T', neet_frequency: 'high' },
          { name: 'Using frequency', latex: 'a_c = 4\\pi^2 f^2 r', context: 'In terms of frequency f', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Direction always toward center',
          'Magnitude constant for uniform circular motion',
          'ac ∝ v² (double speed → 4× acceleration)',
        ],
        dimensionalCheck: '[ac] = [v²]/[r] = m/s²',
      },
      {
        id: 'centripetal-force',
        name: 'Centripetal Force',
        category: 'derived',
        formula: 'Fc = mv²/r = mω²r',
        latex: 'F_c = \\frac{mv^2}{r} = m\\omega^2 r',
        description: 'Force required to maintain circular motion',
        variables: [
          { symbol: 'Fc', meaning: 'Centripetal force', unit: 'N', typical_values: 'Depends on m, v, r' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg', typical_values: 'Object mass' },
        ],
        derivedFrom: 'centripetal-acceleration',
        applications: [
          { name: 'Banking of roads', latex: '\\tan\\theta = \\frac{v^2}{rg}', context: 'Ideal banking angle', neet_frequency: 'high' },
          { name: 'Conical pendulum', latex: 'T\\sin\\theta = \\frac{mv^2}{r}', context: 'Tension provides Fc', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Centripetal force is not a new force - it\'s provided by tension, friction, gravity, etc.',
          'Always toward center, perpendicular to velocity',
        ],
        dimensionalCheck: '[Fc] = [m][v²]/[r] = N',
      },
      {
        id: 'angular-velocity',
        name: 'Angular Velocity and Period',
        category: 'base',
        formula: 'ω = 2π/T = 2πf',
        latex: '\\omega = \\frac{2\\pi}{T} = 2\\pi f',
        description: 'Rate of angular displacement',
        variables: [
          { symbol: 'ω', meaning: 'Angular velocity', unit: 'rad/s', typical_values: 'Various' },
          { symbol: 'T', meaning: 'Time period', unit: 's', typical_values: 'Time for one rotation' },
          { symbol: 'f', meaning: 'Frequency', unit: 'Hz', typical_values: 'Rotations per second' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Linear-angular relation', latex: 'v = \\omega r', context: 'Tangential velocity', neet_frequency: 'high' },
          { name: 'Period of rotation', latex: 'T = \\frac{2\\pi r}{v}', context: 'Circumference/speed', neet_frequency: 'high' },
        ],
        specialCases: [
          'ω same for all points on rigid body',
          'v different for different radii (v = ωr)',
          '1 revolution = 2π radians',
        ],
        dimensionalCheck: '[ω] = rad/s (dimensionally 1/s)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking centrifugal force throws objects outward',
        correct: 'Centrifugal force is a pseudo force (exists only in rotating frame). Real centripetal force pulls inward.',
        whyItHappens: 'Confusing experience (feeling "thrown out") with physics',
        neetExample: 'NEET 2020: Direction of force on object in circular motion',
      },
      {
        mistake: 'Confusing angular and linear velocity',
        correct: 'ω is same for all points on rotating body. v = ωr varies with radius.',
        whyItHappens: 'Not understanding v = ωr relationship',
        neetExample: 'NEET 2019: Velocity of points on spinning disc at different radii',
      },
      {
        mistake: 'Using v instead of v² in centripetal acceleration',
        correct: 'ac = v²/r, not v/r. Doubling speed quadruples acceleration.',
        whyItHappens: 'Forgetting the squared term',
        neetExample: 'NEET 2021: Effect of doubling speed on centripetal force',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Centripetal force/acceleration', difficulty: 'easy' },
      { type: 'numerical', description: 'Banking angle problems', difficulty: 'medium' },
      { type: 'numerical', description: 'Angular velocity and period', difficulty: 'easy' },
      { type: 'conceptual', description: 'Direction of forces', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Centripetal force calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
      { pattern: 'Banking of roads', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Angular velocity relations', frequency: 'medium', yearAsked: [2018, 2021] },
    ],
    
    analogies: [
      {
        concept: 'Centripetal force',
        analogy: 'Swinging bucket of water',
        mapping: 'Rope tension pulls bucket inward. Water doesn\'t fall because it\'s in circular motion.',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Non-Uniform Circular Motion
  {
    id: 'non-uniform-circular-motion',
    name: 'Non-Uniform Circular Motion',
    weightage: 0.3,
    difficulty: 'hard',
    
    theory: {
      summary: "In non-uniform circular motion, speed changes. Total acceleration has two components: centripetal (ac = v²/r, toward center) and tangential (at = dv/dt, along velocity). Net acceleration a = √(ac² + at²). Angular acceleration α = dω/dt.",
      realWorldAnalogy: "Car speeding up on a curve: you feel pushed back (tangential deceleration when braking) AND sideways (centripetal). A planet in elliptical orbit has both components.",
      keyPoints: [
        "Speed is not constant (|v| changes)",
        "Centripetal: ac = v²/r (toward center)",
        "Tangential: at = dv/dt = αr (along velocity)",
        "Net acceleration: a = √(ac² + at²)",
        "Angular acceleration: α = dω/dt",
        "at causes speed change, ac causes direction change",
      ],
      prerequisites: ['uniform-circular-motion'],
    },
    
    formulas: [
      {
        id: 'tangential-acceleration',
        name: 'Tangential Acceleration',
        category: 'base',
        formula: 'at = dv/dt = αr',
        latex: 'a_t = \\frac{dv}{dt} = \\alpha r',
        description: 'Component of acceleration along velocity (changes speed)',
        variables: [
          { symbol: 'at', meaning: 'Tangential acceleration', unit: 'm/s²', typical_values: 'Rate of speed change' },
          { symbol: 'α', meaning: 'Angular acceleration', unit: 'rad/s²', typical_values: 'dω/dt' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'From angular acceleration', latex: 'a_t = \\alpha r', context: 'Tangential from angular', neet_frequency: 'high' },
        ],
        specialCases: [
          'at = 0 for uniform circular motion',
          'Direction: tangent to circle (along or opposite to v)',
        ],
        dimensionalCheck: '[at] = [α][r] = m/s²',
      },
      {
        id: 'net-acceleration',
        name: 'Net Acceleration',
        category: 'derived',
        formula: 'a = √(ac² + at²)',
        latex: 'a = \\sqrt{a_c^2 + a_t^2}',
        description: 'Total acceleration combining both components',
        variables: [
          { symbol: 'a', meaning: 'Net acceleration', unit: 'm/s²', typical_values: 'Vector sum' },
        ],
        derivedFrom: 'tangential-acceleration',
        applications: [
          { name: 'Angle with radius', latex: '\\tan\\phi = \\frac{a_t}{a_c}', context: 'Direction of net acceleration', neet_frequency: 'medium' },
        ],
        specialCases: [
          'ac and at are perpendicular',
          'If at = 0: a = ac (uniform circular motion)',
          'If ac = 0: a = at (linear motion)',
        ],
        dimensionalCheck: '[a] = m/s²',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Ignoring tangential component',
        correct: 'If speed changes, there\'s tangential acceleration at. Total a = √(ac² + at²).',
        whyItHappens: 'Only remembering uniform circular motion formulas',
        neetExample: 'NEET 2020: Particle speeding up while going in circle',
      },
      {
        mistake: 'Adding accelerations algebraically',
        correct: 'ac and at are perpendicular, so use Pythagoras: a = √(ac² + at²)',
        whyItHappens: 'Treating them as parallel components',
        neetExample: 'NEET 2019: Net acceleration when ac = 3 m/s² and at = 4 m/s²',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Net acceleration calculation', difficulty: 'medium' },
      { type: 'numerical', description: 'Angular acceleration problems', difficulty: 'medium' },
      { type: 'conceptual', description: 'Direction of acceleration components', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Net acceleration from components', frequency: 'medium', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Angular acceleration', frequency: 'medium', yearAsked: [2018, 2020] },
    ],
    
    analogies: [
      {
        concept: 'Two components of acceleration',
        analogy: 'Car on curved highway',
        mapping: 'Gas pedal controls at (speed). Steering wheel controls direction via ac. Both work together.',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Relative Motion in 2D
  {
    id: 'relative-motion-2d',
    name: 'Relative Motion in Two Dimensions',
    weightage: 0.4,
    difficulty: 'medium',
    
    theory: {
      summary: "Relative velocity: v⃗_AB = v⃗_A - v⃗_B. River-boat problems: to cross shortest path, head upstream. Rain-man problems: rain appears to come at angle. Use vector subtraction to find relative velocity.",
      realWorldAnalogy: "Standing on escalator: you move relative to ground but stationary relative to escalator. Walking on moving train: your velocity relative to ground = your velocity on train + train velocity.",
      keyPoints: [
        "v⃗_AB = v⃗_A - v⃗_B (velocity of A as seen from B)",
        "River crossing: drift = (v_river)(time)",
        "Shortest path: head upstream at angle sin θ = v_river/v_boat",
        "Rain-man: v⃗_rain_man = v⃗_rain - v⃗_man",
        "Shortest time: head perpendicular to river",
        "Relative velocity approach for collision problems",
      ],
      prerequisites: ['vectors-operations'],
    },
    
    formulas: [
      {
        id: 'relative-velocity',
        name: 'Relative Velocity',
        category: 'base',
        formula: 'v⃗_AB = v⃗_A - v⃗_B',
        latex: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B',
        description: 'Velocity of A as observed from B',
        variables: [
          { symbol: 'v⃗_AB', meaning: 'Velocity of A relative to B', unit: 'm/s', typical_values: 'Vector difference' },
          { symbol: 'v⃗_A', meaning: 'Velocity of A in ground frame', unit: 'm/s', typical_values: 'Given' },
          { symbol: 'v⃗_B', meaning: 'Velocity of B in ground frame', unit: 'm/s', typical_values: 'Given' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Same direction', latex: 'v_{rel} = v_A - v_B', context: 'Subtract magnitudes', neet_frequency: 'high' },
          { name: 'Opposite direction', latex: 'v_{rel} = v_A + v_B', context: 'Add magnitudes', neet_frequency: 'high' },
          { name: 'Perpendicular', latex: 'v_{rel} = \\sqrt{v_A^2 + v_B^2}', context: 'Pythagoras', neet_frequency: 'high' },
        ],
        specialCases: [
          'v⃗_AB = -v⃗_BA (symmetric)',
          'If v⃗_A = v⃗_B, then v⃗_AB = 0',
        ],
        dimensionalCheck: '[v_AB] = m/s',
      },
      {
        id: 'river-boat',
        name: 'River-Boat Problems',
        category: 'derived',
        formula: 'Shortest path: sin θ = v_r/v_b, Shortest time: head ⊥ to bank',
        latex: '\\sin\\theta = \\frac{v_{river}}{v_{boat}}, \\quad t_{min} = \\frac{d}{v_{boat}}',
        description: 'Crossing river with current',
        variables: [
          { symbol: 'v_r', meaning: 'River velocity', unit: 'm/s', typical_values: 'Current speed' },
          { symbol: 'v_b', meaning: 'Boat velocity in still water', unit: 'm/s', typical_values: 'Must be > v_r for direct crossing' },
          { symbol: 'd', meaning: 'River width', unit: 'm', typical_values: 'Distance to cross' },
        ],
        derivedFrom: 'relative-velocity',
        applications: [
          { name: 'Shortest time (with drift)', latex: 't = \\frac{d}{v_b}, \\text{ drift} = v_r t', context: 'Head perpendicular to bank', neet_frequency: 'high' },
          { name: 'Shortest path (no drift)', latex: 't = \\frac{d}{\\sqrt{v_b^2 - v_r^2}}', context: 'Head upstream at angle', neet_frequency: 'high' },
        ],
        specialCases: [
          'Shortest path impossible if v_boat < v_river',
          'Shortest time always possible',
          'Drift ∝ time ∝ 1/v_b',
        ],
        dimensionalCheck: 'Various',
      },
      {
        id: 'rain-man',
        name: 'Rain-Man Problems',
        category: 'derived',
        formula: 'tan θ = v_man/v_rain (when rain is vertical)',
        latex: '\\tan\\theta = \\frac{v_{man}}{v_{rain}}',
        description: 'Apparent direction of rain for moving observer',
        variables: [
          { symbol: 'θ', meaning: 'Angle rain appears from vertical', unit: 'degrees', typical_values: 'Depends on speeds' },
        ],
        derivedFrom: 'relative-velocity',
        applications: [
          { name: 'Umbrella tilt', latex: '\\theta = \\tan^{-1}\\frac{v_{man}}{v_{rain}}', context: 'Angle to tilt umbrella', neet_frequency: 'high' },
        ],
        specialCases: [
          'If man runs faster, rain appears more horizontal',
          'Rain actually vertical: angle = tan⁻¹(v_man/v_rain)',
        ],
        dimensionalCheck: 'Dimensionless (angle)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Wrong direction for relative velocity subtraction',
        correct: 'v⃗_AB = v⃗_A - v⃗_B means subtract B from A. Draw vectors tail-to-tail.',
        whyItHappens: 'Confusing which velocity to subtract',
        neetExample: 'NEET 2020: Relative velocity of two cars',
      },
      {
        mistake: 'Confusing shortest path with shortest time',
        correct: 'Shortest time: head ⊥ to bank (get drift). Shortest path: head upstream (takes longer).',
        whyItHappens: 'Similar problem setups',
        neetExample: 'NEET 2019: Boat crossing river by shortest path vs shortest time',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'River-boat crossing', difficulty: 'medium' },
      { type: 'numerical', description: 'Rain-man umbrella angle', difficulty: 'easy' },
      { type: 'numerical', description: 'Relative velocity of two objects', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'River crossing problems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
      { pattern: 'Rain-man problems', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Relative velocity',
        analogy: 'Walking on moving train',
        mapping: 'Your speed relative to ground = your walking speed + train speed (if same direction)',
      },
    ],
    
    questions: [],
  },

  // Topic 6: Projectile on Inclined Plane
  {
    id: 'projectile-inclined',
    name: 'Projectile on Inclined Plane',
    weightage: 0.3,
    difficulty: 'hard',
    
    theory: {
      summary: "For projectile on incline, take axes along and perpendicular to incline. Components: along incline a = g sin β, perpendicular a = g cos β. Range on incline: R = 2u² sin α cos(α+β) / g cos² β for upward projection.",
      realWorldAnalogy: "Ball kicked up a hill: use tilted coordinate system aligned with slope for easier calculation.",
      keyPoints: [
        "Take x-axis along incline, y-axis perpendicular",
        "g_x = g sin β (along incline), g_y = g cos β (perpendicular)",
        "For max range up incline: α = (π/4 - β/2)",
        "For max range down incline: α = (π/4 + β/2)",
        "Time of flight: T = 2u sin α / g cos β",
        "Standard formulas modified by incline angle β",
      ],
      prerequisites: ['projectile-motion'],
    },
    
    formulas: [
      {
        id: 'incline-range',
        name: 'Range on Inclined Plane',
        category: 'derived',
        formula: 'R = 2u² sin α cos(α+β) / g cos² β (up incline)',
        latex: 'R = \\frac{2u^2\\sin\\alpha\\cos(\\alpha + \\beta)}{g\\cos^2\\beta}',
        description: 'Range along inclined plane for upward projection',
        variables: [
          { symbol: 'R', meaning: 'Range along incline', unit: 'm', typical_values: 'Along the slope' },
          { symbol: 'α', meaning: 'Angle of projection from incline', unit: 'degrees', typical_values: 'With respect to incline' },
          { symbol: 'β', meaning: 'Angle of incline', unit: 'degrees', typical_values: 'Slope angle' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Maximum range up incline', latex: '\\alpha = \\frac{\\pi}{4} - \\frac{\\beta}{2}', context: 'For max range going up', neet_frequency: 'medium' },
          { name: 'Maximum range down incline', latex: '\\alpha = \\frac{\\pi}{4} + \\frac{\\beta}{2}', context: 'For max range going down', neet_frequency: 'medium' },
        ],
        specialCases: [
          'When β = 0, reduces to standard R = u² sin 2α/g',
          'Max range angle depends on incline direction',
        ],
        dimensionalCheck: '[R] = [u²]/[g] = m',
      },
      {
        id: 'incline-time',
        name: 'Time of Flight on Incline',
        category: 'derived',
        formula: 'T = 2u sin α / g cos β',
        latex: 'T = \\frac{2u\\sin\\alpha}{g\\cos\\beta}',
        description: 'Time of flight for projectile on incline',
        variables: [
          { symbol: 'T', meaning: 'Time of flight', unit: 's', typical_values: 'Modified by incline' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Modified by incline', latex: 'T = \\frac{2u\\sin\\alpha}{g\\cos\\beta}', context: 'g cos β is effective gravity ⊥ to incline', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Longer time for same velocity on steeper incline',
          'g cos β acts perpendicular to incline',
        ],
        dimensionalCheck: '[T] = [u]/[g] = s',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using standard range formula for inclined plane',
        correct: 'Use modified formula with incline angle β. Standard formula only for horizontal ground.',
        whyItHappens: 'Not recognizing that standard formulas don\'t apply',
        neetExample: 'NEET 2021: Projectile on 30° incline',
      },
      {
        mistake: 'Wrong angle for maximum range',
        correct: 'Max range angle is (45° - β/2) for up incline, (45° + β/2) for down incline.',
        whyItHappens: 'Remembering only 45° for horizontal',
        neetExample: 'NEET 2020: Angle for maximum range on incline',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Range on inclined plane', difficulty: 'hard' },
      { type: 'numerical', description: 'Time of flight on incline', difficulty: 'medium' },
      { type: 'conceptual', description: 'Angle for max range on incline', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Range on inclined plane', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
      { pattern: 'Angle for maximum range', frequency: 'medium', yearAsked: [2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Modified gravity',
        analogy: 'Tilted reference frame',
        mapping: 'Like being in a tilted room - gravity seems to act at an angle',
      },
    ],
    
    questions: [],
  },
];

