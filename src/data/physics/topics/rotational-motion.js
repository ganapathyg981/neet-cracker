// Rotational Motion - 6% weightage (Tier 1)
// NCERT Class 11, Chapter 7

export const rotationalMotionTopics = [
  // Topic 1: Moment of Inertia
  {
    id: 'moment-of-inertia',
    name: 'Moment of Inertia',
    weightage: 2,
    difficulty: 'medium',
    
    theory: {
      summary: "Moment of inertia (I) is the rotational analog of mass. It measures the resistance of a body to angular acceleration. It depends not only on mass but also on how the mass is distributed relative to the axis of rotation. I = Σmᵢrᵢ² for discrete particles.",
      realWorldAnalogy: "A figure skater spinning - when arms are extended (mass far from axis), rotation is slow. When arms are pulled in (mass close to axis), rotation speeds up. Same mass, different moment of inertia.",
      keyPoints: [
        "I = Σmᵢrᵢ² for point masses, I = ∫r²dm for continuous bodies",
        "Depends on mass distribution and choice of axis",
        "SI unit: kg·m²",
        "Always positive (r² is always positive)",
        "Different for different axes of the same body",
        "Larger I means harder to start or stop rotation",
      ],
      prerequisites: ['basic-rotational-concepts', 'centre-of-mass'],
    },
    
    formulas: [
      {
        id: 'moi-definition',
        name: 'Moment of Inertia Definition',
        category: 'base',
        formula: 'I = Σmᵢrᵢ²',
        latex: 'I = \\sum_{i} m_i r_i^2 = \\int r^2 \\, dm',
        description: 'Sum of mass times square of perpendicular distance from axis for all particles',
        variables: [
          { symbol: 'I', meaning: 'Moment of inertia', unit: 'kg·m²', typical_values: '10⁻³ to 10² kg·m²' },
          { symbol: 'mᵢ', meaning: 'Mass of ith particle', unit: 'kg', typical_values: 'Point masses' },
          { symbol: 'rᵢ', meaning: 'Perpendicular distance from axis', unit: 'm', typical_values: 'cm to m' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Two particle system', latex: 'I = m_1r_1^2 + m_2r_2^2', context: 'Two masses at different distances from axis', neet_frequency: 'high' },
          { name: 'Ring about center', latex: 'I = MR^2', context: 'All mass at same distance R', neet_frequency: 'high' },
        ],
        specialCases: [
          'Point mass: I = mr²',
          'System of particles: Sum individual contributions',
        ],
        dimensionalCheck: '[I] = [M][L²] = kg·m²',
      },
      {
        id: 'moi-ring',
        name: 'Ring (about central axis)',
        category: 'derived',
        formula: 'I = MR²',
        latex: 'I = MR^2',
        description: 'Moment of inertia of a thin ring about an axis through its center, perpendicular to its plane',
        variables: [
          { symbol: 'M', meaning: 'Mass of ring', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'R', meaning: 'Radius of ring', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About diameter', latex: 'I = \\frac{MR^2}{2}', context: 'Ring about any diameter', neet_frequency: 'high' },
          { name: 'About tangent (in plane)', latex: 'I = \\frac{3MR^2}{2}', context: 'Using parallel axis theorem', neet_frequency: 'medium' },
          { name: 'About tangent (perpendicular)', latex: 'I = 2MR^2', context: 'Tangent perpendicular to plane', neet_frequency: 'medium' },
        ],
        specialCases: [
          'All mass at distance R from axis',
          'Maximum MOI for given mass and radius',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
      {
        id: 'moi-disc',
        name: 'Disc (about central axis)',
        category: 'derived',
        formula: 'I = ½MR²',
        latex: 'I = \\frac{1}{2}MR^2',
        description: 'Moment of inertia of a uniform disc about an axis through its center, perpendicular to its plane',
        variables: [
          { symbol: 'M', meaning: 'Mass of disc', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'R', meaning: 'Radius of disc', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About diameter', latex: 'I = \\frac{MR^2}{4}', context: 'Disc about any diameter', neet_frequency: 'high' },
          { name: 'About tangent (in plane)', latex: 'I = \\frac{5MR^2}{4}', context: 'Using parallel axis theorem', neet_frequency: 'medium' },
          { name: 'About tangent (perpendicular)', latex: 'I = \\frac{3MR^2}{2}', context: 'Tangent perpendicular to plane', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Mass distributed from 0 to R',
          'Half of ring\'s MOI for same M and R',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
      {
        id: 'moi-solid-sphere',
        name: 'Solid Sphere',
        category: 'derived',
        formula: 'I = ⅖MR²',
        latex: 'I = \\frac{2}{5}MR^2',
        description: 'Moment of inertia of a uniform solid sphere about any diameter',
        variables: [
          { symbol: 'M', meaning: 'Mass of sphere', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'R', meaning: 'Radius of sphere', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About tangent', latex: 'I = \\frac{7}{5}MR^2', context: 'Using parallel axis theorem', neet_frequency: 'high' },
          { name: 'Rolling on incline', latex: 'I = \\frac{2}{5}MR^2', context: 'Used in rolling motion problems', neet_frequency: 'high' },
        ],
        specialCases: [
          'Same about any diameter (spherical symmetry)',
          'Less than disc due to mass distribution',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
      {
        id: 'moi-hollow-sphere',
        name: 'Hollow Sphere (Spherical Shell)',
        category: 'derived',
        formula: 'I = ⅔MR²',
        latex: 'I = \\frac{2}{3}MR^2',
        description: 'Moment of inertia of a thin spherical shell about any diameter',
        variables: [
          { symbol: 'M', meaning: 'Mass of shell', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'R', meaning: 'Radius of shell', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About tangent', latex: 'I = \\frac{5}{3}MR^2', context: 'Using parallel axis theorem', neet_frequency: 'medium' },
        ],
        specialCases: [
          'All mass at distance R from center',
          'Greater than solid sphere for same M, R',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
      {
        id: 'moi-solid-cylinder',
        name: 'Solid Cylinder',
        category: 'derived',
        formula: 'I = ½MR²',
        latex: 'I = \\frac{1}{2}MR^2',
        description: 'Moment of inertia of a uniform solid cylinder about its geometric axis',
        variables: [
          { symbol: 'M', meaning: 'Mass of cylinder', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'R', meaning: 'Radius of cylinder', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About diameter at center', latex: 'I = \\frac{M}{4}\\left(R^2 + \\frac{L^2}{3}\\right)', context: 'Perpendicular to length at center', neet_frequency: 'low' },
        ],
        specialCases: [
          'Same as disc about central axis',
          'Length does not affect I about geometric axis',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
      {
        id: 'moi-rod-center',
        name: 'Thin Rod (about center)',
        category: 'derived',
        formula: 'I = ML²/12',
        latex: 'I = \\frac{ML^2}{12}',
        description: 'Moment of inertia of a thin rod about an axis through its center, perpendicular to its length',
        variables: [
          { symbol: 'M', meaning: 'Mass of rod', unit: 'kg', typical_values: '0.1-5 kg' },
          { symbol: 'L', meaning: 'Length of rod', unit: 'm', typical_values: '0.1-2 m' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'About one end', latex: 'I = \\frac{ML^2}{3}', context: 'Using parallel axis theorem', neet_frequency: 'high' },
        ],
        specialCases: [
          'ML²/3 about end is 4 times ML²/12 about center',
          'Only length matters, not cross-section (thin rod)',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using wrong MOI formula - confusing disc and ring',
        correct: 'Ring: I = MR², Disc: I = ½MR². Ring has all mass at edge, disc has mass distributed',
        whyItHappens: 'Not understanding that MOI depends on mass distribution',
        neetExample: 'NEET 2020: Compare MOI of ring and disc of same mass and radius',
      },
      {
        mistake: 'Using MOI about wrong axis',
        correct: 'Each body has different MOI about different axes. Specify the axis clearly',
        whyItHappens: 'Not reading problem carefully for axis specification',
        neetExample: 'NEET 2019: MOI of disc about diameter vs about center',
      },
      {
        mistake: 'Forgetting factor of 2 in solid sphere (using ⅖ vs ⅔)',
        correct: 'Solid sphere: ⅖MR², Hollow sphere: ⅔MR²',
        whyItHappens: 'Mixing up solid and hollow sphere formulas',
        neetExample: 'NEET 2021: MOI comparison of solid and hollow spheres',
      },
      {
        mistake: 'Wrong distance in parallel axis theorem',
        correct: 'Distance d is between parallel axes, not from center of mass to any point',
        whyItHappens: 'Misunderstanding the geometric meaning of d',
        neetExample: 'NEET 2018: MOI of disc about tangent using parallel axis theorem',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate MOI of standard shapes about given axis', difficulty: 'easy' },
      { type: 'numerical', description: 'MOI of composite bodies (disc with hole, etc.)', difficulty: 'hard' },
      { type: 'conceptual', description: 'Compare MOI of different shapes', difficulty: 'medium' },
      { type: 'numerical', description: 'Apply parallel axis theorem', difficulty: 'medium' },
      { type: 'application', description: 'MOI in rolling motion problems', difficulty: 'hard' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'MOI of standard shapes (disc, ring, sphere)', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Parallel axis theorem application', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'MOI of composite system', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Compare MOI about different axes', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Moment of inertia',
        analogy: 'Difficulty opening a heavy door',
        mapping: 'Mass far from hinge (high I) = hard to push. Mass near hinge (low I) = easy to push',
      },
      {
        concept: 'I depends on mass distribution',
        analogy: 'Carrying a long pole while walking on rope',
        mapping: 'Extended pole (high I) = more stable but harder to turn. Pole close to body (low I) = less stable but easier to turn',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Theorems of Moment of Inertia
  {
    id: 'theorems-moment-inertia',
    name: 'Theorems of Moment of Inertia',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Two important theorems simplify MOI calculations. Parallel Axis Theorem: I = I_cm + Md², relates MOI about any axis to MOI about parallel axis through CM. Perpendicular Axis Theorem: I_z = I_x + I_y, applies only to planar bodies (2D), relates MOI about perpendicular axes.",
      realWorldAnalogy: "Parallel axis theorem: A hammer is easier to swing when held at the head (axis through CM) than at the end of handle (axis far from CM). The extra effort is Md².",
      keyPoints: [
        "Parallel Axis Theorem: I = I_cm + Md² (any rigid body, any parallel axes)",
        "d = perpendicular distance between the two parallel axes",
        "Perpendicular Axis Theorem: I_z = I_x + I_y (only for laminar/planar bodies)",
        "x, y, z are mutually perpendicular, with z perpendicular to plane",
        "Parallel axis theorem always increases MOI (Md² is always positive)",
        "Use these theorems to derive MOI about non-standard axes",
      ],
      prerequisites: ['moment-of-inertia'],
    },
    
    formulas: [
      {
        id: 'parallel-axis',
        name: 'Parallel Axis Theorem',
        category: 'base',
        formula: 'I = I_cm + Md²',
        latex: 'I = I_{cm} + Md^2',
        description: 'MOI about any axis equals MOI about parallel axis through CM plus Md²',
        variables: [
          { symbol: 'I', meaning: 'MOI about given axis', unit: 'kg·m²', typical_values: 'Greater than I_cm' },
          { symbol: 'I_cm', meaning: 'MOI about parallel axis through CM', unit: 'kg·m²', typical_values: 'Standard value' },
          { symbol: 'M', meaning: 'Total mass', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'd', meaning: 'Distance between parallel axes', unit: 'm', typical_values: '0 to R' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'Rod about end', latex: 'I_{end} = \\frac{ML^2}{12} + M\\left(\\frac{L}{2}\\right)^2 = \\frac{ML^2}{3}', context: 'From center to end of rod', neet_frequency: 'high' },
          { name: 'Disc about tangent', latex: 'I = \\frac{MR^2}{2} + MR^2 = \\frac{3MR^2}{2}', context: 'Tangent perpendicular to plane', neet_frequency: 'high' },
          { name: 'Ring about tangent', latex: 'I = MR^2 + MR^2 = 2MR^2', context: 'Tangent perpendicular to plane', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Minimum MOI is always about axis through CM',
          'd = 0 gives I = I_cm (trivial case)',
        ],
        dimensionalCheck: '[I] = [I_cm] + [M][d²] = kg·m²',
      },
      {
        id: 'perpendicular-axis',
        name: 'Perpendicular Axis Theorem',
        category: 'base',
        formula: 'I_z = I_x + I_y',
        latex: 'I_z = I_x + I_y',
        description: 'For a planar body, MOI about axis perpendicular to plane equals sum of MOI about two perpendicular axes in the plane',
        variables: [
          { symbol: 'I_z', meaning: 'MOI about axis perpendicular to plane', unit: 'kg·m²', typical_values: 'Sum of I_x and I_y' },
          { symbol: 'I_x, I_y', meaning: 'MOI about axes in the plane', unit: 'kg·m²', typical_values: 'In-plane axes' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'Ring about diameter', latex: 'I_{dia} = \\frac{I_z}{2} = \\frac{MR^2}{2}', context: 'Since I_x = I_y by symmetry', neet_frequency: 'high' },
          { name: 'Disc about diameter', latex: 'I_{dia} = \\frac{I_z}{2} = \\frac{MR^2}{4}', context: 'Using I_z = MR²/2', neet_frequency: 'high' },
        ],
        specialCases: [
          'Only valid for 2D/planar/laminar bodies',
          'All three axes must pass through same point',
          'If I_x = I_y (symmetry), then I_z = 2I_x',
        ],
        dimensionalCheck: '[I] = kg·m²',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Applying perpendicular axis theorem to 3D bodies like sphere',
        correct: 'Perpendicular axis theorem is ONLY for planar (2D) bodies like ring, disc, rectangular plate',
        whyItHappens: 'Not understanding the limitation of the theorem',
        neetExample: 'NEET 2019: Why can\'t we use perpendicular axis theorem for solid sphere?',
      },
      {
        mistake: 'Using parallel axis theorem with non-CM axis as reference',
        correct: 'One axis must pass through center of mass. I = I_cm + Md², not I₁ = I₂ + Md²',
        whyItHappens: 'Misremembering the theorem - CM axis is always the reference',
        neetExample: 'NEET 2020: Find MOI about axis 2R from center of disc',
      },
      {
        mistake: 'Wrong distance d in parallel axis theorem',
        correct: 'd is the perpendicular distance between the two axes, not distance from CM to any point',
        whyItHappens: 'Geometric confusion about axis positions',
        neetExample: 'NEET 2021: MOI of ring about tangent in its plane',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Apply parallel axis theorem to find MOI', difficulty: 'medium' },
      { type: 'numerical', description: 'Apply perpendicular axis theorem for planar bodies', difficulty: 'medium' },
      { type: 'conceptual', description: 'Identify when each theorem applies', difficulty: 'easy' },
      { type: 'numerical', description: 'Combined use of both theorems', difficulty: 'hard' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Parallel axis theorem for rod, disc, ring', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
      { pattern: 'MOI about diameter using perpendicular axis theorem', frequency: 'high', yearAsked: [2018, 2020, 2021, 2023] },
      { pattern: 'Identify correct theorem to apply', frequency: 'medium', yearAsked: [2019, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Parallel axis theorem',
        analogy: 'Swinging a bat from different grip positions',
        mapping: 'Holding near balance point (CM) = easy to swing. Holding at end = harder by Md²',
      },
      {
        concept: 'Perpendicular axis theorem',
        analogy: 'Resistance to tipping a flat plate',
        mapping: 'Tipping about z (perpendicular) = sum of difficulties tipping about x and y (in-plane)',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Radius of Gyration
  {
    id: 'radius-of-gyration',
    name: 'Radius of Gyration',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Radius of gyration (k) is the distance from the axis at which entire mass can be assumed concentrated to give the same moment of inertia. It simplifies MOI calculations and comparisons. I = Mk², so k = √(I/M).",
      realWorldAnalogy: "Imagine replacing a wheel with all its mass concentrated at a single point at distance k from the axis. This point mass would have the same resistance to rotation as the actual wheel.",
      keyPoints: [
        "Definition: I = Mk², so k = √(I/M)",
        "k depends on shape and axis of rotation, not on mass",
        "SI unit: meter (m)",
        "Physical meaning: effective distance of mass concentration",
        "Different for different axes of same body",
        "Useful for comparing rotational behavior of different bodies",
      ],
      prerequisites: ['moment-of-inertia'],
    },
    
    formulas: [
      {
        id: 'radius-gyration-def',
        name: 'Radius of Gyration Definition',
        category: 'base',
        formula: 'k = √(I/M)',
        latex: 'k = \\sqrt{\\frac{I}{M}}',
        description: 'Radius of gyration is the root mean square distance of particles from axis',
        variables: [
          { symbol: 'k', meaning: 'Radius of gyration', unit: 'm', typical_values: 'Fraction of body dimensions' },
          { symbol: 'I', meaning: 'Moment of inertia', unit: 'kg·m²', typical_values: 'Standard MOI values' },
          { symbol: 'M', meaning: 'Total mass', unit: 'kg', typical_values: '0.1-10 kg' },
        ],
        derivedFrom: 'moi-definition',
        applications: [
          { name: 'Ring about center', latex: 'k = R', context: 'Since I = MR², k = √(MR²/M) = R', neet_frequency: 'high' },
          { name: 'Disc about center', latex: 'k = \\frac{R}{\\sqrt{2}}', context: 'Since I = MR²/2', neet_frequency: 'high' },
          { name: 'Solid sphere', latex: 'k = R\\sqrt{\\frac{2}{5}}', context: 'Since I = 2MR²/5', neet_frequency: 'medium' },
          { name: 'Rod about center', latex: 'k = \\frac{L}{\\sqrt{12}} = \\frac{L}{2\\sqrt{3}}', context: 'Since I = ML²/12', neet_frequency: 'medium' },
        ],
        specialCases: [
          'k is independent of mass',
          'k depends only on geometry and axis',
        ],
        dimensionalCheck: '[k] = √([kg·m²]/[kg]) = m',
      },
      {
        id: 'moi-from-k',
        name: 'MOI from Radius of Gyration',
        category: 'derived',
        formula: 'I = Mk²',
        latex: 'I = Mk^2',
        description: 'Express moment of inertia in terms of mass and radius of gyration',
        variables: [
          { symbol: 'I', meaning: 'Moment of inertia', unit: 'kg·m²', typical_values: 'Calculated value' },
          { symbol: 'M', meaning: 'Total mass', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'k', meaning: 'Radius of gyration', unit: 'm', typical_values: 'Given or calculated' },
        ],
        derivedFrom: 'radius-gyration-def',
        applications: [
          { name: 'Comparing bodies', latex: '\\frac{I_1}{I_2} = \\frac{M_1 k_1^2}{M_2 k_2^2}', context: 'Ratio of MOI', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Same formula form as I = mr² for point mass',
          'k plays role of effective distance',
        ],
        dimensionalCheck: '[I] = [M][k²] = kg·m²',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking radius of gyration depends on mass',
        correct: 'k = √(I/M) - the M cancels out, k depends only on shape and axis',
        whyItHappens: 'Not simplifying the formula properly',
        neetExample: 'NEET 2019: Two discs of different masses but same radius have same k',
      },
      {
        mistake: 'Confusing k with actual radius R',
        correct: 'k ≤ R for most standard shapes. k = R only for ring about central axis',
        whyItHappens: 'Assuming all mass is at the edge',
        neetExample: 'NEET 2020: Radius of gyration of disc vs ring',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate k for given shape and axis', difficulty: 'easy' },
      { type: 'numerical', description: 'Find MOI given k and M', difficulty: 'easy' },
      { type: 'conceptual', description: 'Compare k for different bodies', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Calculate k for standard shapes', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'Ratio of k for different axes', frequency: 'medium', yearAsked: [2019, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Radius of gyration',
        analogy: 'Average distance of students from teacher in classroom',
        mapping: 'k is like rms distance - represents effective spread of mass from axis',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Angular Momentum
  {
    id: 'angular-momentum',
    name: 'Angular Momentum',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Angular momentum (L) is the rotational analog of linear momentum. For a rotating rigid body, L = Iω. For a particle, L = r × p = mvr sin θ. Angular momentum is conserved when net external torque is zero.",
      realWorldAnalogy: "An ice skater spinning - when arms are pulled in, rotation speeds up because L = Iω is conserved. Decreasing I (arms in) increases ω.",
      keyPoints: [
        "For rigid body: L = Iω (analog of p = mv)",
        "For particle: L = r × p = mvr sin θ",
        "SI unit: kg·m²/s or J·s",
        "Conservation: If τ_ext = 0, then L = constant",
        "Direction given by right-hand rule",
        "τ = dL/dt (Newton's second law for rotation)",
      ],
      prerequisites: ['moment-of-inertia', 'torque-basics'],
    },
    
    formulas: [
      {
        id: 'angular-momentum-rigid',
        name: 'Angular Momentum of Rigid Body',
        category: 'base',
        formula: 'L = Iω',
        latex: 'L = I\\omega',
        description: 'Angular momentum of a rigid body rotating about a fixed axis',
        variables: [
          { symbol: 'L', meaning: 'Angular momentum', unit: 'kg·m²/s', typical_values: '10⁻³ to 10² kg·m²/s' },
          { symbol: 'I', meaning: 'Moment of inertia', unit: 'kg·m²', typical_values: 'Standard values' },
          { symbol: 'ω', meaning: 'Angular velocity', unit: 'rad/s', typical_values: '1-100 rad/s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Rotating disc', latex: 'L = \\frac{1}{2}MR^2 \\omega', context: 'Using I = MR²/2 for disc', neet_frequency: 'high' },
          { name: 'Rotating ring', latex: 'L = MR^2 \\omega', context: 'Using I = MR² for ring', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Direction along axis of rotation (right-hand rule)',
          'For multiple rotating parts: L_total = ΣIᵢωᵢ',
        ],
        dimensionalCheck: '[L] = [I][ω] = kg·m²·rad/s = kg·m²/s',
      },
      {
        id: 'angular-momentum-particle',
        name: 'Angular Momentum of Particle',
        category: 'base',
        formula: 'L = r × p = mvr sin θ',
        latex: 'L = \\vec{r} \\times \\vec{p} = mvr\\sin\\theta',
        description: 'Angular momentum of a particle about a point O',
        variables: [
          { symbol: 'L', meaning: 'Angular momentum', unit: 'kg·m²/s', typical_values: 'Depends on m, v, r' },
          { symbol: 'r', meaning: 'Position vector from O', unit: 'm', typical_values: 'Distance from reference' },
          { symbol: 'p', meaning: 'Linear momentum', unit: 'kg·m/s', typical_values: 'mv' },
          { symbol: 'θ', meaning: 'Angle between r and p', unit: 'rad', typical_values: '0 to π' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Particle in circular motion', latex: 'L = mvr', context: 'When r ⊥ v (θ = 90°)', neet_frequency: 'high' },
          { name: 'Particle moving in straight line', latex: 'L = mvd', context: 'd = perpendicular distance from O to line', neet_frequency: 'medium' },
        ],
        specialCases: [
          'L = 0 when particle moves toward/away from O (θ = 0 or π)',
          'L = mvr (maximum) when r ⊥ v',
        ],
        dimensionalCheck: '[L] = [m][v][r] = kg·m/s·m = kg·m²/s',
      },
      {
        id: 'conservation-angular-momentum',
        name: 'Conservation of Angular Momentum',
        category: 'base',
        formula: 'I₁ω₁ = I₂ω₂',
        latex: 'I_1\\omega_1 = I_2\\omega_2',
        description: 'When net external torque is zero, angular momentum is conserved',
        variables: [
          { symbol: 'I₁, I₂', meaning: 'Initial and final MOI', unit: 'kg·m²', typical_values: 'Before and after change' },
          { symbol: 'ω₁, ω₂', meaning: 'Initial and final angular velocity', unit: 'rad/s', typical_values: 'Before and after' },
        ],
        derivedFrom: 'angular-momentum-rigid',
        applications: [
          { name: 'Spinning skater', latex: '\\omega_2 = \\omega_1 \\frac{I_1}{I_2}', context: 'ω increases when I decreases', neet_frequency: 'high' },
          { name: 'Rotating platform with person', latex: 'I_p\\omega_0 + I_m \\cdot 0 = (I_p + I_m)\\omega', context: 'Person jumps on rotating platform', neet_frequency: 'high' },
        ],
        specialCases: [
          'τ_ext = 0 is required condition',
          'Internal forces cannot change L',
        ],
        dimensionalCheck: '[I][ω] = kg·m²/s (constant)',
      },
      {
        id: 'torque-angular-momentum',
        name: 'Torque and Angular Momentum Relation',
        category: 'base',
        formula: 'τ = dL/dt',
        latex: '\\tau = \\frac{dL}{dt}',
        description: 'Net external torque equals rate of change of angular momentum',
        variables: [
          { symbol: 'τ', meaning: 'Net external torque', unit: 'N·m', typical_values: '1-100 N·m' },
          { symbol: 'dL/dt', meaning: 'Rate of change of L', unit: 'kg·m²/s²', typical_values: 'Varies' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For rigid body', latex: '\\tau = I\\alpha', context: 'Since L = Iω, τ = I(dω/dt) = Iα', neet_frequency: 'high' },
          { name: 'Impulse-momentum', latex: '\\int \\tau \\, dt = \\Delta L', context: 'Angular impulse equals change in L', neet_frequency: 'medium' },
        ],
        specialCases: [
          'τ = 0 implies L = constant (conservation)',
          'Analog of F = dp/dt in linear motion',
        ],
        dimensionalCheck: '[τ] = [dL/dt] = kg·m²/s² = N·m',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing linear and angular momentum conservation conditions',
        correct: 'L conserved when τ_ext = 0. p conserved when F_ext = 0. These are independent conditions',
        whyItHappens: 'Not distinguishing rotational and translational conservation laws',
        neetExample: 'NEET 2020: When is angular momentum conserved but linear momentum not?',
      },
      {
        mistake: 'Ignoring that ω increases when I decreases (and vice versa)',
        correct: 'L = Iω = constant. If I↓ then ω↑ proportionally',
        whyItHappens: 'Not applying conservation correctly',
        neetExample: 'NEET 2019: Skater pulls arms in, find new angular velocity',
      },
      {
        mistake: 'Using L = mvr even when v is not perpendicular to r',
        correct: 'Use L = mvr sin θ, or L = mv × (perpendicular distance from axis)',
        whyItHappens: 'Forgetting the cross product nature',
        neetExample: 'NEET 2021: Angular momentum of particle moving in straight line about external point',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate L for rotating rigid body', difficulty: 'easy' },
      { type: 'numerical', description: 'Apply conservation of angular momentum', difficulty: 'medium' },
      { type: 'numerical', description: 'L of particle about external point', difficulty: 'medium' },
      { type: 'conceptual', description: 'Conditions for L conservation', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Conservation of angular momentum problems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Angular momentum of rotating disc/ring', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Spinning skater type problems', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Conservation of angular momentum',
        analogy: 'Ice skater spinning',
        mapping: 'Arms out (high I) = slow spin. Arms in (low I) = fast spin. L stays same',
      },
      {
        concept: 'L = Iω',
        analogy: 'p = mv for rotation',
        mapping: 'Angular momentum is "rotational momentum" with I playing role of m and ω of v',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Rolling Motion
  {
    id: 'rolling-motion',
    name: 'Rolling Motion',
    weightage: 1,
    difficulty: 'hard',
    
    theory: {
      summary: "Rolling motion is a combination of translation and rotation. For pure rolling (without slipping), the point of contact is instantaneously at rest: v_cm = ωR. Total kinetic energy = translational KE + rotational KE. Friction provides torque but does no work in pure rolling.",
      realWorldAnalogy: "A bicycle wheel rolling on road - the bottom point touching road is momentarily stationary relative to road (no skidding). The wheel both moves forward (translation) and spins (rotation).",
      keyPoints: [
        "Pure rolling condition: v_cm = ωR (no slipping)",
        "Point of contact is instantaneous axis of rotation",
        "KE_total = ½Mv_cm² + ½Iω² = ½Mv_cm²(1 + k²/R²)",
        "Static friction provides torque, no energy loss in pure rolling",
        "Velocity of top point = 2v_cm",
        "Rolling on incline: a = g sin θ/(1 + I/MR²)",
      ],
      prerequisites: ['moment-of-inertia', 'angular-momentum', 'friction'],
    },
    
    formulas: [
      {
        id: 'rolling-condition',
        name: 'Pure Rolling Condition',
        category: 'base',
        formula: 'v_cm = ωR',
        latex: 'v_{cm} = \\omega R',
        description: 'For rolling without slipping, linear velocity of center equals ω times radius',
        variables: [
          { symbol: 'v_cm', meaning: 'Velocity of center of mass', unit: 'm/s', typical_values: '1-10 m/s' },
          { symbol: 'ω', meaning: 'Angular velocity', unit: 'rad/s', typical_values: 'v_cm/R' },
          { symbol: 'R', meaning: 'Radius of rolling body', unit: 'm', typical_values: '0.01-1 m' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Angular velocity', latex: '\\omega = \\frac{v_{cm}}{R}', context: 'Finding ω from v', neet_frequency: 'high' },
          { name: 'Acceleration condition', latex: 'a_{cm} = \\alpha R', context: 'For pure rolling', neet_frequency: 'high' },
        ],
        specialCases: [
          'v_cm > ωR: forward slipping (skidding)',
          'v_cm < ωR: backward slipping (spinning)',
        ],
        dimensionalCheck: '[v] = [ω][R] = rad/s × m = m/s',
      },
      {
        id: 'rolling-ke',
        name: 'Kinetic Energy of Rolling Body',
        category: 'derived',
        formula: 'KE = ½Mv²(1 + k²/R²)',
        latex: 'KE = \\frac{1}{2}Mv_{cm}^2\\left(1 + \\frac{k^2}{R^2}\\right) = \\frac{1}{2}Mv_{cm}^2\\left(1 + \\frac{I}{MR^2}\\right)',
        description: 'Total kinetic energy is sum of translational and rotational KE',
        variables: [
          { symbol: 'KE', meaning: 'Total kinetic energy', unit: 'J', typical_values: 'Sum of both components' },
          { symbol: 'M', meaning: 'Mass of body', unit: 'kg', typical_values: '0.1-10 kg' },
          { symbol: 'v_cm', meaning: 'Velocity of CM', unit: 'm/s', typical_values: '1-10 m/s' },
          { symbol: 'k', meaning: 'Radius of gyration', unit: 'm', typical_values: 'Depends on shape' },
        ],
        derivedFrom: 'rolling-condition',
        applications: [
          { name: 'Ring', latex: 'KE = Mv_{cm}^2', context: 'k² = R², so factor = 2', neet_frequency: 'high' },
          { name: 'Disc/Solid cylinder', latex: 'KE = \\frac{3}{4}Mv_{cm}^2', context: 'k² = R²/2, so factor = 3/2', neet_frequency: 'high' },
          { name: 'Solid sphere', latex: 'KE = \\frac{7}{10}Mv_{cm}^2', context: 'k² = 2R²/5, so factor = 7/5', neet_frequency: 'high' },
          { name: 'Hollow sphere', latex: 'KE = \\frac{5}{6}Mv_{cm}^2', context: 'k² = 2R²/3, so factor = 5/3', neet_frequency: 'medium' },
        ],
        specialCases: [
          'KE_trans = ½Mv² and KE_rot = ½Iω²',
          'KE_rot/KE_total = k²/(k² + R²) = I/(I + MR²)',
        ],
        dimensionalCheck: '[KE] = [M][v²] = kg·m²/s² = J',
      },
      {
        id: 'rolling-incline-acceleration',
        name: 'Acceleration on Inclined Plane',
        category: 'derived',
        formula: 'a = g sin θ/(1 + I/MR²)',
        latex: 'a = \\frac{g\\sin\\theta}{1 + \\frac{I}{MR^2}} = \\frac{g\\sin\\theta}{1 + \\frac{k^2}{R^2}}',
        description: 'Acceleration of a body rolling down an inclined plane without slipping',
        variables: [
          { symbol: 'a', meaning: 'Acceleration of CM', unit: 'm/s²', typical_values: 'Less than g sin θ' },
          { symbol: 'g', meaning: 'Acceleration due to gravity', unit: 'm/s²', typical_values: '9.8 or 10 m/s²' },
          { symbol: 'θ', meaning: 'Angle of incline', unit: 'degrees/rad', typical_values: '15-45°' },
          { symbol: 'I/MR²', meaning: 'Geometric factor', unit: 'dimensionless', typical_values: '2/5 to 1' },
        ],
        derivedFrom: 'rolling-condition',
        applications: [
          { name: 'Solid sphere', latex: 'a = \\frac{5g\\sin\\theta}{7}', context: 'I/MR² = 2/5', neet_frequency: 'high' },
          { name: 'Disc/Cylinder', latex: 'a = \\frac{2g\\sin\\theta}{3}', context: 'I/MR² = 1/2', neet_frequency: 'high' },
          { name: 'Ring/Hollow cylinder', latex: 'a = \\frac{g\\sin\\theta}{2}', context: 'I/MR² = 1', neet_frequency: 'high' },
          { name: 'Hollow sphere', latex: 'a = \\frac{3g\\sin\\theta}{5}', context: 'I/MR² = 2/3', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Solid sphere has maximum a (reaches bottom first)',
          'Ring/hollow cylinder has minimum a (reaches last)',
          'Acceleration independent of mass and radius',
        ],
        dimensionalCheck: '[a] = [g] = m/s²',
      },
      {
        id: 'rolling-incline-velocity',
        name: 'Velocity at Bottom of Incline',
        category: 'derived',
        formula: 'v = √(2gh/(1 + k²/R²))',
        latex: 'v = \\sqrt{\\frac{2gh}{1 + \\frac{k^2}{R^2}}}',
        description: 'Velocity of CM when rolling body reaches bottom of incline of height h',
        variables: [
          { symbol: 'v', meaning: 'Velocity at bottom', unit: 'm/s', typical_values: 'Less than √(2gh)' },
          { symbol: 'h', meaning: 'Height of incline', unit: 'm', typical_values: '0.5-5 m' },
        ],
        derivedFrom: 'rolling-ke',
        applications: [
          { name: 'Solid sphere', latex: 'v = \\sqrt{\\frac{10gh}{7}}', context: 'Fastest rolling body', neet_frequency: 'high' },
          { name: 'Disc/Cylinder', latex: 'v = \\sqrt{\\frac{4gh}{3}}', context: 'Intermediate speed', neet_frequency: 'high' },
          { name: 'Ring', latex: 'v = \\sqrt{gh}', context: 'Slowest rolling body', neet_frequency: 'medium' },
        ],
        specialCases: [
          'From energy conservation: Mgh = ½Mv²(1 + k²/R²)',
          'Sliding body (no rotation): v = √(2gh)',
        ],
        dimensionalCheck: '[v] = √[gh] = m/s',
      },
      {
        id: 'rolling-friction',
        name: 'Friction in Rolling',
        category: 'derived',
        formula: 'f = Ma(I/MR²)/(1 + I/MR²)',
        latex: 'f = \\frac{Mg\\sin\\theta \\cdot \\frac{I}{MR^2}}{1 + \\frac{I}{MR^2}}',
        description: 'Static friction required for pure rolling on inclined plane',
        variables: [
          { symbol: 'f', meaning: 'Friction force', unit: 'N', typical_values: 'Less than μN' },
          { symbol: 'I/MR²', meaning: 'Geometric factor', unit: 'dimensionless', typical_values: '2/5 to 1' },
        ],
        derivedFrom: 'rolling-incline-acceleration',
        applications: [
          { name: 'Solid sphere', latex: 'f = \\frac{2}{7}Mg\\sin\\theta', context: 'Minimum friction among rolling bodies', neet_frequency: 'medium' },
          { name: 'Disc', latex: 'f = \\frac{1}{3}Mg\\sin\\theta', context: 'Intermediate friction', neet_frequency: 'medium' },
          { name: 'Ring', latex: 'f = \\frac{1}{2}Mg\\sin\\theta', context: 'Maximum friction among rolling bodies', neet_frequency: 'medium' },
        ],
        specialCases: [
          'f must be less than μₛN = μₛMg cos θ for pure rolling',
          'Static friction acts, does no work at contact point',
        ],
        dimensionalCheck: '[f] = [M][g] = N',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting rotational KE in rolling motion',
        correct: 'Total KE = ½Mv² + ½Iω² = ½Mv²(1 + I/MR²), not just ½Mv²',
        whyItHappens: 'Treating rolling as pure translation',
        neetExample: 'NEET 2019: KE of solid sphere rolling at velocity v',
      },
      {
        mistake: 'Thinking all shapes reach bottom together on incline',
        correct: 'Acceleration depends on shape: a = g sin θ/(1 + I/MR²). Lower I/MR² = faster',
        whyItHappens: 'Expecting mass to determine speed (it doesn\'t for rolling)',
        neetExample: 'NEET 2020: Which reaches bottom first - sphere, disc, or ring?',
      },
      {
        mistake: 'Using wrong friction direction for rolling up vs down',
        correct: 'Rolling down: friction up. Rolling up: friction down. Friction opposes tendency to slip',
        whyItHappens: 'Not analyzing slip tendency correctly',
        neetExample: 'NEET 2021: Direction of friction for ball rolling up incline',
      },
      {
        mistake: 'Thinking friction does work in pure rolling',
        correct: 'Point of contact is instantaneously at rest, so friction displacement = 0, work = 0',
        whyItHappens: 'Confusing pure rolling with slipping',
        neetExample: 'NEET 2018: Work done by friction in pure rolling',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'KE of rolling body at given speed', difficulty: 'easy' },
      { type: 'numerical', description: 'Acceleration on inclined plane', difficulty: 'medium' },
      { type: 'numerical', description: 'Velocity at bottom of incline', difficulty: 'medium' },
      { type: 'conceptual', description: 'Which body reaches bottom first?', difficulty: 'easy' },
      { type: 'numerical', description: 'Minimum friction for pure rolling', difficulty: 'hard' },
      { type: 'conceptual', description: 'Work done by friction in rolling', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Which body reaches bottom first?', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2023] },
      { pattern: 'Velocity at bottom of incline', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Ratio of rotational to total KE', frequency: 'medium', yearAsked: [2018, 2021, 2022] },
      { pattern: 'Acceleration of rolling body on incline', frequency: 'high', yearAsked: [2019, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Rolling = translation + rotation',
        analogy: 'Walking = moving forward + swinging legs',
        mapping: 'You move forward (translation) while legs rotate about hip. Combined motion.',
      },
      {
        concept: 'Pure rolling (no slip)',
        analogy: 'Walking without slipping on floor',
        mapping: 'Foot touching ground doesn\'t slide - momentarily stationary like contact point in rolling',
      },
    ],
    
    questions: [],
  },

  // Topic 6: Rolling Motion on Inclined Plane
  {
    id: 'rolling-inclined-plane',
    name: 'Rolling Motion on Inclined Plane',
    weightage: 0,
    difficulty: 'hard',
    
    theory: {
      summary: "When a body rolls down an inclined plane, gravitational PE converts to both translational and rotational KE. The distribution depends on the body's moment of inertia. Bodies with lower I/MR² roll faster. Energy conservation: Mgh = ½Mv²(1 + I/MR²).",
      realWorldAnalogy: "Two cans rolling down a ramp - one filled with soup (solid), one with frozen contents (acts like shell). The soup can reaches bottom first because solid has lower I/MR².",
      keyPoints: [
        "Energy conservation: PE = KE_trans + KE_rot",
        "Bodies with lower I/MR² accelerate faster",
        "Race order (fastest to slowest): Solid sphere > Solid cylinder > Hollow sphere > Ring",
        "Friction is necessary for rolling but does no net work",
        "Mass and radius don't affect which body wins (same shape wins)",
        "Angle affects speed at bottom (steeper = faster) but not race order",
      ],
      prerequisites: ['rolling-motion', 'moment-of-inertia'],
    },
    
    formulas: [
      {
        id: 'time-to-descend',
        name: 'Time to Descend Incline',
        category: 'derived',
        formula: 't = √(2s(1 + k²/R²)/(g sin θ))',
        latex: 't = \\sqrt{\\frac{2s\\left(1 + \\frac{k^2}{R^2}\\right)}{g\\sin\\theta}}',
        description: 'Time for a rolling body to descend length s on incline',
        variables: [
          { symbol: 't', meaning: 'Time to descend', unit: 's', typical_values: '1-10 s' },
          { symbol: 's', meaning: 'Length of incline', unit: 'm', typical_values: '1-10 m' },
          { symbol: 'θ', meaning: 'Angle of incline', unit: 'rad', typical_values: '15-45°' },
        ],
        derivedFrom: 'rolling-incline-acceleration',
        applications: [
          { name: 'Solid sphere', latex: 't = \\sqrt{\\frac{14s}{5g\\sin\\theta}}', context: 'Shortest time (fastest)', neet_frequency: 'medium' },
          { name: 'Ring', latex: 't = \\sqrt{\\frac{4s}{g\\sin\\theta}}', context: 'Longest time (slowest)', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Time ratio depends only on k²/R², not on mass or radius',
          'Solid sphere takes least time among common shapes',
        ],
        dimensionalCheck: '[t] = √([s]/[g]) = s',
      },
      {
        id: 'ke-distribution',
        name: 'KE Distribution in Rolling',
        category: 'derived',
        formula: 'KE_rot/KE_total = I/(I + MR²)',
        latex: '\\frac{KE_{rot}}{KE_{total}} = \\frac{I}{I + MR^2} = \\frac{k^2}{k^2 + R^2}',
        description: 'Fraction of total kinetic energy that is rotational',
        variables: [
          { symbol: 'KE_rot', meaning: 'Rotational kinetic energy', unit: 'J', typical_values: 'Fraction of total' },
          { symbol: 'KE_total', meaning: 'Total kinetic energy', unit: 'J', typical_values: 'Mgh at bottom' },
        ],
        derivedFrom: 'rolling-ke',
        applications: [
          { name: 'Ring', latex: '\\frac{KE_{rot}}{KE_{total}} = \\frac{1}{2}', context: 'Half energy is rotational', neet_frequency: 'high' },
          { name: 'Disc', latex: '\\frac{KE_{rot}}{KE_{total}} = \\frac{1}{3}', context: 'One-third rotational', neet_frequency: 'high' },
          { name: 'Solid sphere', latex: '\\frac{KE_{rot}}{KE_{total}} = \\frac{2}{7}', context: '2/7 rotational', neet_frequency: 'high' },
        ],
        specialCases: [
          'Higher I/MR² means more energy in rotation',
          'This energy "diverted" to rotation makes body slower',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
      {
        id: 'minimum-friction-coefficient',
        name: 'Minimum μ for Pure Rolling',
        category: 'derived',
        formula: 'μ_min = tan θ × (I/MR²)/(1 + I/MR²)',
        latex: '\\mu_{min} = \\frac{\\tan\\theta}{1 + \\frac{MR^2}{I}} = \\frac{\\tan\\theta \\cdot \\frac{I}{MR^2}}{1 + \\frac{I}{MR^2}}',
        description: 'Minimum coefficient of static friction required for pure rolling on incline',
        variables: [
          { symbol: 'μ_min', meaning: 'Minimum friction coefficient', unit: 'dimensionless', typical_values: '0.1-0.5' },
          { symbol: 'θ', meaning: 'Angle of incline', unit: 'rad', typical_values: '15-45°' },
        ],
        derivedFrom: 'rolling-friction',
        applications: [
          { name: 'Solid sphere', latex: '\\mu_{min} = \\frac{2}{7}\\tan\\theta', context: 'Needs least friction', neet_frequency: 'medium' },
          { name: 'Disc', latex: '\\mu_{min} = \\frac{1}{3}\\tan\\theta', context: 'Intermediate requirement', neet_frequency: 'medium' },
          { name: 'Ring', latex: '\\mu_{min} = \\frac{1}{2}\\tan\\theta', context: 'Needs most friction', neet_frequency: 'medium' },
        ],
        specialCases: [
          'If μ < μ_min, body will slip while rolling',
          'Ring needs maximum friction to roll without slipping',
        ],
        dimensionalCheck: 'Dimensionless',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking heavier body reaches bottom first',
        correct: 'Mass doesn\'t affect rolling race - only shape (I/MR² ratio) matters',
        whyItHappens: 'Intuition from everyday experience with sliding objects',
        neetExample: 'NEET 2019: Two spheres of different masses roll down - which is faster?',
      },
      {
        mistake: 'Thinking larger radius means faster rolling',
        correct: 'Radius cancels out - a small disc and large disc of same shape reach together',
        whyItHappens: 'Not realizing v = √(2gh/(1+k²/R²)) and k ∝ R',
        neetExample: 'NEET 2020: Small vs large solid sphere on same incline',
      },
      {
        mistake: 'Using sliding formula v = √(2gh) for rolling',
        correct: 'For rolling, v = √(2gh/(1+k²/R²)) - always less than sliding case',
        whyItHappens: 'Not accounting for energy going into rotation',
        neetExample: 'NEET 2018: Compare velocity of rolling vs sliding sphere',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Race between different rolling bodies', difficulty: 'easy' },
      { type: 'numerical', description: 'Find velocity at bottom for given shape', difficulty: 'medium' },
      { type: 'numerical', description: 'Calculate time to descend', difficulty: 'medium' },
      { type: 'numerical', description: 'Find minimum μ for pure rolling', difficulty: 'hard' },
      { type: 'conceptual', description: 'Effect of mass/radius on rolling race', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Which body wins rolling race?', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022, 2023] },
      { pattern: 'Velocity at bottom of incline', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Fraction of KE that is rotational', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Rolling race',
        analogy: 'Two runners: one carrying heavy backpack',
        mapping: 'Runner with backpack (high I) is slower - energy goes into carrying weight vs forward motion',
      },
      {
        concept: 'Mass doesn\'t affect race',
        analogy: 'Two identical cars with different fuel loads',
        mapping: 'Both accelerate same on slope (friction proportional to weight). Rolling bodies similar.',
      },
    ],
    
    questions: [],
  },
];

