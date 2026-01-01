// Gravitation - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 8

export const gravitationTopics = [
  // Topic 1: Law of Gravitation
  {
    id: 'law-of-gravitation',
    name: 'Law of Gravitation',
    weightage: 1,
    difficulty: 'easy',
    
    theory: {
      summary: "Newton's law of universal gravitation states that every particle attracts every other particle with force F = Gm₁m₂/r². G is universal gravitational constant (6.67 × 10⁻¹¹ N·m²/kg²). Force is always attractive and acts along the line joining centers.",
      realWorldAnalogy: "Like invisible elastic bands between all masses - heavier objects have thicker bands, farther objects have weaker pull.",
      keyPoints: [
        "F = Gm₁m₂/r² (inverse square law)",
        "G = 6.67 × 10⁻¹¹ N·m²/kg²",
        "Always attractive, acts along line of centers",
        "Gravitational field: g = GM/r²",
        "Shell theorem: uniform shell acts as point mass at center (outside)",
        "Inside uniform shell: g = 0",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'gravitational-force',
        name: "Newton's Law of Gravitation",
        category: 'base',
        formula: 'F = Gm₁m₂/r²',
        latex: 'F = \\frac{Gm_1m_2}{r^2}',
        description: 'Gravitational force between two point masses',
        variables: [
          { symbol: 'F', meaning: 'Gravitational force', unit: 'N', typical_values: '10⁻⁸ to 10²² N' },
          { symbol: 'G', meaning: 'Universal gravitational constant', unit: 'N·m²/kg²', typical_values: '6.67 × 10⁻¹¹' },
          { symbol: 'm₁, m₂', meaning: 'Masses', unit: 'kg', typical_values: 'kg to 10³⁰ kg' },
          { symbol: 'r', meaning: 'Distance between centers', unit: 'm', typical_values: 'm to 10¹¹ m' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Weight at surface', latex: 'W = \\frac{GMm}{R^2} = mg', context: 'M is Earth mass, R is radius', neet_frequency: 'high' },
          { name: 'Force on satellite', latex: 'F = \\frac{GMm}{(R+h)^2}', context: 'At height h above surface', neet_frequency: 'high' },
        ],
        specialCases: [
          'Force on surface: F = mg where g = GM/R²',
          'Inverse square: double distance → 1/4 force',
        ],
        dimensionalCheck: '[F] = [G][m²]/[r²] = (N·m²/kg²)(kg²)/m² = N',
      },
      {
        id: 'gravitational-field',
        name: 'Gravitational Field',
        category: 'derived',
        formula: 'g = GM/r²',
        latex: 'g = \\frac{GM}{r^2}',
        description: 'Gravitational field strength at distance r from point mass M',
        variables: [
          { symbol: 'g', meaning: 'Gravitational field strength', unit: 'm/s² or N/kg', typical_values: '1-10 m/s²' },
          { symbol: 'M', meaning: 'Source mass', unit: 'kg', typical_values: 'Planetary masses' },
          { symbol: 'r', meaning: 'Distance from center', unit: 'm', typical_values: 'Radius or more' },
        ],
        derivedFrom: 'gravitational-force',
        applications: [
          { name: 'At Earth surface', latex: 'g_0 = \\frac{GM}{R^2} \\approx 9.8 m/s^2', context: 'Standard gravity', neet_frequency: 'high' },
          { name: 'At height h', latex: 'g_h = \\frac{GM}{(R+h)^2} = g_0\\left(\\frac{R}{R+h}\\right)^2', context: 'Decreases with height', neet_frequency: 'high' },
        ],
        specialCases: [
          'g ∝ 1/r² outside Earth',
          'g ∝ r inside uniform Earth',
        ],
        dimensionalCheck: '[g] = m/s²',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using surface formula for g at height',
        correct: 'At height h: g = GM/(R+h)², not GM/R²',
        whyItHappens: 'Forgetting to add h to radius',
        neetExample: 'NEET 2020: g at height equal to Earth radius',
      },
      {
        mistake: 'Wrong direction of gravitational force',
        correct: 'Always attractive, toward the other mass (never repulsive)',
        whyItHappens: 'Confusing with electric force which can be repulsive',
        neetExample: 'NEET 2019: Direction of gravitational force on satellite',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Force between two masses', difficulty: 'easy' },
      { type: 'numerical', description: 'g at different distances', difficulty: 'medium' },
      { type: 'conceptual', description: 'Effect of mass/distance on force', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Gravitational force calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'g at height or depth', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Inverse square law',
        analogy: 'Light from bulb',
        mapping: 'Double distance → 1/4 intensity (spreads over 4× area)',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Variation of g
  {
    id: 'acceleration-due-gravity',
    name: 'Acceleration due to Gravity',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Value of g varies with altitude, depth, and latitude. At height h: g = g₀(R/(R+h))². At depth d: g = g₀(1 - d/R). At poles g is maximum, at equator minimum due to Earth's rotation and shape.",
      realWorldAnalogy: "Like being on a spinning merry-go-round - you feel lighter at the edge (equator) than at the center (poles).",
      keyPoints: [
        "At height h: g_h = g₀(R/(R+h))² ≈ g₀(1 - 2h/R) for h << R",
        "At depth d: g_d = g₀(1 - d/R)",
        "At center: g = 0",
        "At equator: g' = g - Rω² (less due to rotation)",
        "At poles: g maximum (no centrifugal effect)",
      ],
      prerequisites: ['law-of-gravitation'],
    },
    
    formulas: [
      {
        id: 'g-at-height',
        name: 'g at Height',
        category: 'derived',
        formula: 'g_h = g₀(R/(R+h))²',
        latex: 'g_h = g_0\\left(\\frac{R}{R+h}\\right)^2',
        description: 'Acceleration due to gravity at height h above surface',
        variables: [
          { symbol: 'g_h', meaning: 'g at height h', unit: 'm/s²', typical_values: 'Less than g₀' },
          { symbol: 'g₀', meaning: 'g at surface', unit: 'm/s²', typical_values: '9.8 m/s²' },
          { symbol: 'R', meaning: 'Earth radius', unit: 'm', typical_values: '6.4 × 10⁶ m' },
          { symbol: 'h', meaning: 'Height above surface', unit: 'm', typical_values: 'km to 1000s km' },
        ],
        derivedFrom: 'gravitational-field',
        applications: [
          { name: 'Approximate (h << R)', latex: 'g_h \\approx g_0\\left(1 - \\frac{2h}{R}\\right)', context: 'Linear approximation', neet_frequency: 'high' },
          { name: 'At h = R', latex: 'g_h = \\frac{g_0}{4}', context: 'Height equals radius', neet_frequency: 'high' },
        ],
        specialCases: [
          'g decreases with height',
          'At infinite height: g → 0',
        ],
        dimensionalCheck: '[g] = m/s²',
      },
      {
        id: 'g-at-depth',
        name: 'g at Depth',
        category: 'derived',
        formula: 'g_d = g₀(1 - d/R)',
        latex: 'g_d = g_0\\left(1 - \\frac{d}{R}\\right)',
        description: 'Acceleration due to gravity at depth d below surface',
        variables: [
          { symbol: 'g_d', meaning: 'g at depth d', unit: 'm/s²', typical_values: 'Less than g₀' },
          { symbol: 'd', meaning: 'Depth below surface', unit: 'm', typical_values: '0 to R' },
        ],
        derivedFrom: 'gravitational-field',
        applications: [
          { name: 'At center', latex: 'g = 0 \\text{ (at } d = R\\text{)}', context: 'No gravity at Earth center', neet_frequency: 'high' },
          { name: 'At half depth', latex: 'g_{R/2} = \\frac{g_0}{2}', context: 'd = R/2', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Linear decrease with depth',
          'Assumes uniform density Earth',
        ],
        dimensionalCheck: '[g] = m/s²',
      },
      {
        id: 'g-latitude',
        name: 'g Variation with Latitude',
        category: 'derived',
        formula: "g' = g - Rω²cos²φ",
        latex: "g' = g - R\\omega^2\\cos^2\\phi",
        description: 'Apparent g reduced by centrifugal effect of Earth rotation',
        variables: [
          { symbol: 'φ', meaning: 'Latitude', unit: 'degrees', typical_values: '0° (equator) to 90° (pole)' },
          { symbol: 'ω', meaning: 'Angular velocity of Earth', unit: 'rad/s', typical_values: '7.3 × 10⁻⁵ rad/s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'At equator', latex: "g' = g - R\\omega^2", context: 'φ = 0, maximum reduction', neet_frequency: 'high' },
          { name: 'At poles', latex: "g' = g", context: 'φ = 90°, no centrifugal effect', neet_frequency: 'high' },
        ],
        specialCases: [
          'Equator: g minimum',
          'Poles: g maximum',
          'Difference ≈ 0.034 m/s²',
        ],
        dimensionalCheck: "[g'] = m/s²",
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using same formula for height and depth',
        correct: 'Height: g = g₀(R/(R+h))². Depth: g = g₀(1-d/R). Different formulas!',
        whyItHappens: 'Both deal with variation of g',
        neetExample: 'NEET 2020: Compare g at height h and depth d = 2h',
      },
      {
        mistake: 'Forgetting g = 0 at center',
        correct: 'At depth d = R (center), g = 0 because mass above cancels',
        whyItHappens: 'Thinking gravity still pulls toward center from center',
        neetExample: 'NEET 2021: Value of g at Earth center',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'g at given height', difficulty: 'medium' },
      { type: 'numerical', description: 'g at given depth', difficulty: 'medium' },
      { type: 'numerical', description: 'Compare height and depth effects', difficulty: 'hard' },
      { type: 'conceptual', description: 'Effect of rotation on g', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'g at height problems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'g at depth problems', frequency: 'high', yearAsked: [2019, 2021, 2022, 2023] },
      { pattern: 'Height-depth comparison', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'g inside Earth',
        analogy: 'Being in middle of crowd',
        mapping: 'At center, pulled equally in all directions = net zero force',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Escape Velocity
  {
    id: 'escape-velocity',
    name: 'Escape Velocity',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Escape velocity is minimum velocity to escape gravitational field permanently. v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s for Earth. Independent of mass and direction of projection. Related to orbital velocity: v_e = √2 × v_orbital.",
      realWorldAnalogy: "Like throwing a ball upward - escape velocity is the speed needed so it never comes back down.",
      keyPoints: [
        "v_e = √(2GM/R) = √(2gR)",
        "For Earth: v_e ≈ 11.2 km/s",
        "Independent of mass of escaping body",
        "Independent of direction of projection",
        "v_e = √2 × v_orbital",
        "Reaches infinity with zero velocity",
      ],
      prerequisites: ['law-of-gravitation', 'gravitational-potential-energy'],
    },
    
    formulas: [
      {
        id: 'escape-velocity',
        name: 'Escape Velocity',
        category: 'base',
        formula: 'v_e = √(2GM/R) = √(2gR)',
        latex: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
        description: 'Minimum velocity to escape gravitational field',
        variables: [
          { symbol: 'v_e', meaning: 'Escape velocity', unit: 'm/s', typical_values: '11.2 km/s for Earth' },
          { symbol: 'M', meaning: 'Mass of planet', unit: 'kg', typical_values: '5.97 × 10²⁴ kg (Earth)' },
          { symbol: 'R', meaning: 'Radius of planet', unit: 'm', typical_values: '6.4 × 10⁶ m (Earth)' },
        ],
        derivedFrom: 'gravitational-potential-energy',
        applications: [
          { name: 'From surface', latex: 'v_e = \\sqrt{2gR}', context: 'Using g = GM/R²', neet_frequency: 'high' },
          { name: 'From height h', latex: 'v_e = \\sqrt{\\frac{2GM}{R+h}}', context: 'At height h above surface', neet_frequency: 'medium' },
          { name: 'Relation to orbital', latex: 'v_e = \\sqrt{2} \\times v_{orbital}', context: 'v_e is √2 times orbital velocity', neet_frequency: 'high' },
        ],
        specialCases: [
          'v_e ∝ √M, v_e ∝ 1/√R',
          'Independent of mass of escaping body',
        ],
        dimensionalCheck: '[v] = √([G][M]/[R]) = √((N·m²/kg²)(kg)/m) = m/s',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking escape velocity depends on mass of projectile',
        correct: 'v_e = √(2GM/R) has no projectile mass - same for feather or rocket',
        whyItHappens: 'Intuition that heavier objects need more speed',
        neetExample: 'NEET 2020: Escape velocity for 1 kg vs 100 kg object',
      },
      {
        mistake: 'Forgetting √2 factor between v_e and v_orbital',
        correct: 'v_e = √2 × v_orbital. Orbital velocity is v_o = √(GM/R) = √(gR)',
        whyItHappens: 'Mixing up the two velocities',
        neetExample: 'NEET 2019: Escape velocity in terms of orbital velocity',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate escape velocity', difficulty: 'easy' },
      { type: 'numerical', description: 'v_e from different heights', difficulty: 'medium' },
      { type: 'numerical', description: 'Compare v_e for different planets', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Escape velocity calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'v_e and v_orbital relation', frequency: 'high', yearAsked: [2019, 2021, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Escape velocity',
        analogy: 'Jumping out of a well',
        mapping: 'Need minimum jump speed to clear the edge and escape',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Gravitational Potential Energy
  {
    id: 'gravitational-potential-energy',
    name: 'Gravitational Potential Energy',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Gravitational potential energy is the energy possessed by a body due to its position in a gravitational field. U = -GMm/r (negative because work done against gravity). At surface: U = -GMm/R. Potential energy is zero at infinity. Work done to move mass from r₁ to r₂: W = GMm(1/r₁ - 1/r₂).",
      realWorldAnalogy: "Like storing energy in a stretched spring - lifting a ball stores gravitational potential energy that can be converted to kinetic energy when released.",
      keyPoints: [
        "U = -GMm/r (negative sign indicates bound system)",
        "At infinity: U = 0 (reference point)",
        "At surface: U = -GMm/R",
        "Gravitational potential: V = -GM/r (energy per unit mass)",
        "Work to bring mass from ∞ to r: W = -GMm/r = U",
        "Total mechanical energy: E = KE + PE = -GMm/2r (for orbit)",
      ],
      prerequisites: ['law-of-gravitation'],
    },
    
    formulas: [
      {
        id: 'gpe-formula',
        name: 'Gravitational Potential Energy',
        category: 'base',
        formula: 'U = -GMm/r',
        latex: 'U = -\\frac{GMm}{r}',
        description: 'Potential energy of mass m at distance r from mass M',
        variables: [
          { symbol: 'U', meaning: 'Gravitational potential energy', unit: 'J', typical_values: 'Negative values' },
          { symbol: 'G', meaning: 'Gravitational constant', unit: 'N·m²/kg²', typical_values: '6.67 × 10⁻¹¹' },
          { symbol: 'M', meaning: 'Source mass (planet)', unit: 'kg', typical_values: '5.97 × 10²⁴ kg' },
          { symbol: 'm', meaning: 'Object mass', unit: 'kg', typical_values: 'kg' },
          { symbol: 'r', meaning: 'Distance from center', unit: 'm', typical_values: 'R or more' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'At surface', latex: 'U = -\\frac{GMm}{R}', context: 'r = R (planet radius)', neet_frequency: 'high' },
          { name: 'Change in PE', latex: '\\Delta U = GMm\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)', context: 'Moving between two points', neet_frequency: 'high' },
          { name: 'Near surface approx', latex: 'U \\approx mgh', context: 'For h << R, ΔU = mgh', neet_frequency: 'high' },
        ],
        specialCases: [
          'Negative sign: system is bound (needs energy to escape)',
          'U → 0 as r → ∞',
        ],
        dimensionalCheck: '[U] = [G][M][m]/[r] = J',
      },
      {
        id: 'gravitational-potential',
        name: 'Gravitational Potential',
        category: 'derived',
        formula: 'V = -GM/r',
        latex: 'V = -\\frac{GM}{r}',
        description: 'Gravitational potential (PE per unit mass) at distance r',
        variables: [
          { symbol: 'V', meaning: 'Gravitational potential', unit: 'J/kg', typical_values: 'Negative values' },
          { symbol: 'r', meaning: 'Distance from center', unit: 'm', typical_values: 'R or more' },
        ],
        derivedFrom: 'gpe-formula',
        applications: [
          { name: 'PE from potential', latex: 'U = mV', context: 'PE = mass × potential', neet_frequency: 'medium' },
          { name: 'At surface', latex: 'V = -\\frac{GM}{R} = -gR', context: 'Using g = GM/R²', neet_frequency: 'high' },
        ],
        specialCases: [
          'V is scalar (no direction)',
          'V = U/m (potential energy per unit mass)',
        ],
        dimensionalCheck: '[V] = J/kg = m²/s²',
      },
      {
        id: 'binding-energy',
        name: 'Binding Energy',
        category: 'derived',
        formula: 'BE = GMm/r',
        latex: 'BE = \\frac{GMm}{r}',
        description: 'Energy required to free an object from gravitational field',
        variables: [
          { symbol: 'BE', meaning: 'Binding energy', unit: 'J', typical_values: 'Positive value' },
        ],
        derivedFrom: 'gpe-formula',
        applications: [
          { name: 'Energy to escape', latex: 'E_{escape} = \\frac{GMm}{R} = \\frac{1}{2}mv_e^2', context: 'From surface', neet_frequency: 'high' },
          { name: 'For satellite', latex: 'BE = \\frac{GMm}{2r}', context: 'Orbiting satellite', neet_frequency: 'medium' },
        ],
        specialCases: [
          'BE = |U| for object at rest',
          'BE = |E_total| for orbiting satellite',
        ],
        dimensionalCheck: '[BE] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting negative sign in U = -GMm/r',
        correct: 'PE is always negative for gravitationally bound systems. Negative means bound.',
        whyItHappens: 'Expecting PE to be positive like mgh',
        neetExample: 'NEET 2020: Total energy of satellite in orbit',
      },
      {
        mistake: 'Using U = mgh at large heights',
        correct: 'mgh is valid only for h << R. For large h, use U = -GMm/r',
        whyItHappens: 'Overapplying surface formula',
        neetExample: 'NEET 2019: PE of satellite at height h = R',
      },
      {
        mistake: 'Confusing potential (V) with potential energy (U)',
        correct: 'V = -GM/r (J/kg), U = -GMm/r (J). U = mV',
        whyItHappens: 'Similar names and formulas',
        neetExample: 'NEET 2021: Gravitational potential at Earth surface',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate PE at given distance', difficulty: 'easy' },
      { type: 'numerical', description: 'Work done to move mass between points', difficulty: 'medium' },
      { type: 'numerical', description: 'Binding energy calculation', difficulty: 'medium' },
      { type: 'conceptual', description: 'Why PE is negative', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'PE at height problems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Work done against gravity', frequency: 'medium', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Gravitational potential calculation', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Negative PE',
        analogy: 'Debt',
        mapping: 'Negative PE is like debt - you need to put in energy (pay off) to become free (reach zero)',
      },
      {
        concept: 'Potential vs PE',
        analogy: 'Voltage vs charge energy',
        mapping: 'V is like voltage (per unit), U is total energy (like V × charge)',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Orbital Velocity
  {
    id: 'orbital-velocity',
    name: 'Orbital Velocity',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Orbital velocity is the velocity needed for a satellite to maintain a stable orbit. v₀ = √(GM/r) = √(gR²/r). For orbit at surface: v₀ = √(gR) ≈ 7.9 km/s. Orbital velocity decreases with increasing orbital radius. Related to escape velocity: vₑ = √2 × v₀.",
      realWorldAnalogy: "Like swinging a ball on a string - too slow and it falls, too fast and it escapes. Just right keeps it in a circle.",
      keyPoints: [
        "v₀ = √(GM/r) = √(g₀R²/r)",
        "At surface: v₀ = √(gR) ≈ 7.9 km/s",
        "v₀ decreases with altitude: v₀ ∝ 1/√r",
        "Relation: vₑ = √2 × v₀",
        "Time period: T = 2πr/v₀ = 2π√(r³/GM)",
        "Centripetal force = Gravitational force: mv₀²/r = GMm/r²",
      ],
      prerequisites: ['law-of-gravitation'],
    },
    
    formulas: [
      {
        id: 'orbital-velocity-formula',
        name: 'Orbital Velocity',
        category: 'base',
        formula: 'v₀ = √(GM/r)',
        latex: 'v_0 = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{gR^2}{r}}',
        description: 'Velocity required for circular orbit at radius r',
        variables: [
          { symbol: 'v₀', meaning: 'Orbital velocity', unit: 'm/s', typical_values: '3-8 km/s' },
          { symbol: 'M', meaning: 'Planet mass', unit: 'kg', typical_values: '5.97 × 10²⁴ kg' },
          { symbol: 'r', meaning: 'Orbital radius', unit: 'm', typical_values: 'R + h' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Close to surface', latex: 'v_0 = \\sqrt{gR} \\approx 7.9 \\text{ km/s}', context: 'r ≈ R', neet_frequency: 'high' },
          { name: 'At height h', latex: 'v_0 = \\sqrt{\\frac{gR^2}{R+h}}', context: 'General formula', neet_frequency: 'high' },
          { name: 'Relation to escape', latex: 'v_e = \\sqrt{2} \\times v_0', context: 'At same radius', neet_frequency: 'high' },
        ],
        specialCases: [
          'v₀ ∝ 1/√r (higher orbit = slower)',
          'Independent of satellite mass',
        ],
        dimensionalCheck: '[v] = √([G][M]/[r]) = m/s',
      },
      {
        id: 'time-period-orbit',
        name: 'Time Period of Orbit',
        category: 'derived',
        formula: 'T = 2π√(r³/GM)',
        latex: 'T = 2\\pi\\sqrt{\\frac{r^3}{GM}} = \\frac{2\\pi r}{v_0}',
        description: 'Time for one complete revolution',
        variables: [
          { symbol: 'T', meaning: 'Orbital time period', unit: 's', typical_values: 'Hours to days' },
          { symbol: 'r', meaning: 'Orbital radius', unit: 'm', typical_values: 'R + h' },
        ],
        derivedFrom: 'orbital-velocity-formula',
        applications: [
          { name: 'Close to Earth', latex: 'T \\approx 84 \\text{ min}', context: 'Minimum period for Earth satellite', neet_frequency: 'high' },
          { name: 'Geostationary', latex: 'T = 24 \\text{ hours}', context: 'At h ≈ 36000 km', neet_frequency: 'high' },
        ],
        specialCases: [
          'T² ∝ r³ (Kepler\'s 3rd law)',
          'Higher orbit = longer period',
        ],
        dimensionalCheck: '[T] = √([r³]/[GM]) = s',
      },
      {
        id: 'orbital-energy',
        name: 'Total Energy of Orbiting Satellite',
        category: 'derived',
        formula: 'E = -GMm/2r',
        latex: 'E = -\\frac{GMm}{2r} = \\frac{U}{2} = -KE',
        description: 'Total mechanical energy of satellite in circular orbit',
        variables: [
          { symbol: 'E', meaning: 'Total energy', unit: 'J', typical_values: 'Negative' },
          { symbol: 'r', meaning: 'Orbital radius', unit: 'm', typical_values: 'R + h' },
        ],
        derivedFrom: 'orbital-velocity-formula',
        applications: [
          { name: 'Energy relations', latex: 'E = \\frac{U}{2} = -KE', context: 'KE = -E, PE = 2E', neet_frequency: 'high' },
          { name: 'Energy to change orbit', latex: '\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)', context: 'Moving to higher orbit needs energy', neet_frequency: 'medium' },
        ],
        specialCases: [
          'KE = GMm/2r (positive)',
          'PE = -GMm/r (negative, twice KE in magnitude)',
          'E < 0 means bound orbit',
        ],
        dimensionalCheck: '[E] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking higher orbit means higher velocity',
        correct: 'v₀ = √(GM/r), so v₀ ∝ 1/√r. Higher orbit = SLOWER velocity',
        whyItHappens: 'Intuition that faster satellites go farther',
        neetExample: 'NEET 2020: Compare orbital velocities at different heights',
      },
      {
        mistake: 'Using r = h instead of r = R + h',
        correct: 'r is distance from Earth center, not from surface. r = R + h',
        whyItHappens: 'Confusing height with orbital radius',
        neetExample: 'NEET 2019: Orbital velocity at height h = R',
      },
      {
        mistake: 'Thinking satellite needs fuel to maintain orbit',
        correct: 'In ideal circular orbit, no fuel needed - gravity provides centripetal force',
        whyItHappens: 'Everyday experience that moving objects need force',
        neetExample: 'NEET 2021: Why satellites don\'t fall',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate orbital velocity at given height', difficulty: 'easy' },
      { type: 'numerical', description: 'Time period of satellite', difficulty: 'medium' },
      { type: 'numerical', description: 'Energy of satellite in orbit', difficulty: 'medium' },
      { type: 'conceptual', description: 'Effect of altitude on v₀ and T', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Orbital velocity calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2023] },
      { pattern: 'Time period of satellite', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Energy of satellite', frequency: 'medium', yearAsked: [2018, 2021, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Orbital velocity',
        analogy: 'Ball on string in circle',
        mapping: 'Gravity is like the string - provides inward pull. v₀ is the right speed to not fall or fly away',
      },
      {
        concept: 'Higher orbit slower',
        analogy: 'Outer lanes on track',
        mapping: 'Runners in outer lane travel longer distance at slower pace',
      },
    ],
    
    questions: [],
  },

  // Topic 6: Satellites
  {
    id: 'satellites',
    name: 'Satellites',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Satellites are objects orbiting a planet. Geostationary satellites orbit at h ≈ 36,000 km with T = 24 hours, appearing stationary from Earth. Polar satellites orbit pole-to-pole at low altitudes. Energy required to place satellite in orbit = |E| = GMm/2r from surface.",
      realWorldAnalogy: "Geostationary satellite is like a ceiling fan - always above the same spot. Polar satellite is like a sweeping searchlight - covers entire surface over time.",
      keyPoints: [
        "Geostationary: T = 24h, h ≈ 36,000 km, equatorial orbit",
        "Polar satellites: Low altitude (200-800 km), pole-to-pole",
        "Binding energy of satellite: BE = GMm/2r",
        "Energy to put in orbit from surface: E = GMm/2R(1/(1+h/R))",
        "To change orbit: supply energy difference",
        "Satellite appears weightless (free fall)",
      ],
      prerequisites: ['orbital-velocity', 'gravitational-potential-energy'],
    },
    
    formulas: [
      {
        id: 'geostationary-orbit',
        name: 'Geostationary Orbit',
        category: 'derived',
        formula: 'h ≈ 36,000 km, T = 24 hours',
        latex: 'r = \\sqrt[3]{\\frac{GMT^2}{4\\pi^2}}',
        description: 'Orbit where satellite has same angular velocity as Earth',
        variables: [
          { symbol: 'h', meaning: 'Height above surface', unit: 'km', typical_values: '≈ 36,000 km' },
          { symbol: 'T', meaning: 'Time period', unit: 'hours', typical_values: '24 hours' },
        ],
        derivedFrom: 'time-period-orbit',
        applications: [
          { name: 'Communication satellites', latex: '', context: 'TV, phone relay', neet_frequency: 'medium' },
          { name: 'Weather monitoring', latex: '', context: 'Stationary view of region', neet_frequency: 'low' },
        ],
        specialCases: [
          'Must be in equatorial plane',
          'Only one possible height for T = 24h',
          'Angular velocity = Earth\'s rotation',
        ],
        dimensionalCheck: '[r] = m, [T] = s',
      },
      {
        id: 'energy-to-orbit',
        name: 'Energy to Put Satellite in Orbit',
        category: 'derived',
        formula: 'E = GMm(1/R - 1/2r)',
        latex: 'E = \\frac{GMm}{R} - \\frac{GMm}{2r} = \\frac{GMm}{R}\\left(1 - \\frac{R}{2r}\\right)',
        description: 'Total energy required to place satellite from surface to orbit',
        variables: [
          { symbol: 'E', meaning: 'Energy required', unit: 'J', typical_values: 'Positive' },
          { symbol: 'R', meaning: 'Earth radius', unit: 'm', typical_values: '6.4 × 10⁶ m' },
          { symbol: 'r', meaning: 'Orbital radius', unit: 'm', typical_values: 'R + h' },
        ],
        derivedFrom: 'orbital-energy',
        applications: [
          { name: 'Close orbit (r ≈ R)', latex: 'E = \\frac{GMm}{2R} = \\frac{mgR}{2}', context: 'Minimum energy', neet_frequency: 'high' },
          { name: 'Work breakdown', latex: 'E = KE_{orbit} + |\\Delta PE|', context: 'Energy for velocity + height', neet_frequency: 'medium' },
        ],
        specialCases: [
          'E = BE_surface - BE_orbit = GMm/R - GMm/2r',
          'Need to overcome binding + give orbital KE',
        ],
        dimensionalCheck: '[E] = J',
      },
      {
        id: 'parking-orbit',
        name: 'Change of Orbit',
        category: 'derived',
        formula: 'ΔE = GMm/2(1/r₁ - 1/r₂)',
        latex: '\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)',
        description: 'Energy needed to transfer satellite between orbits',
        variables: [
          { symbol: 'ΔE', meaning: 'Energy change', unit: 'J', typical_values: 'Positive to go higher' },
          { symbol: 'r₁', meaning: 'Initial orbital radius', unit: 'm', typical_values: 'Lower orbit' },
          { symbol: 'r₂', meaning: 'Final orbital radius', unit: 'm', typical_values: 'Higher orbit' },
        ],
        derivedFrom: 'orbital-energy',
        applications: [
          { name: 'Move to higher orbit', latex: '\\Delta E > 0', context: 'Energy must be added', neet_frequency: 'medium' },
          { name: 'De-orbit', latex: '\\Delta E < 0', context: 'Energy released/removed', neet_frequency: 'low' },
        ],
        specialCases: [
          'Higher orbit has more negative total E',
          'Counterintuitive: moving to slower orbit needs energy',
        ],
        dimensionalCheck: '[ΔE] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking geostationary means not moving',
        correct: 'Satellite moves at ~3 km/s, but its angular velocity matches Earth rotation',
        whyItHappens: 'Confusing stationary appearance with actual motion',
        neetExample: 'NEET 2020: Velocity of geostationary satellite',
      },
      {
        mistake: 'Geostationary orbit possible at any height',
        correct: 'Only one specific height (~36,000 km) gives T = 24 hours',
        whyItHappens: 'Not applying T² ∝ r³ relationship',
        neetExample: 'NEET 2019: Height of geostationary orbit',
      },
      {
        mistake: 'Ignoring KE needed for orbital velocity',
        correct: 'Energy to orbit = PE change + orbital KE. Not just lifting!',
        whyItHappens: 'Only considering height change',
        neetExample: 'NEET 2021: Total energy to launch satellite',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Height of geostationary orbit', difficulty: 'medium' },
      { type: 'numerical', description: 'Energy to place satellite in orbit', difficulty: 'hard' },
      { type: 'numerical', description: 'Energy to change orbit', difficulty: 'hard' },
      { type: 'conceptual', description: 'Properties of geostationary vs polar satellites', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Geostationary orbit properties', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
      { pattern: 'Energy to launch satellite', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
      { pattern: 'Satellite binding energy', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Geostationary satellite',
        analogy: 'Moon always showing same face to Earth',
        mapping: 'Both have period matched to the body they orbit relative to',
      },
      {
        concept: 'Polar vs geostationary',
        analogy: 'Scanning vs staring',
        mapping: 'Polar scans whole surface over time, geostationary stares at one region',
      },
    ],
    
    questions: [],
  },

  // Topic 7: Kepler's Laws
  {
    id: 'keplers-laws',
    name: "Kepler's Laws of Planetary Motion",
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Kepler's three laws describe planetary motion. First law: Planets move in elliptical orbits with Sun at one focus. Second law: Line from Sun to planet sweeps equal areas in equal times (conservation of angular momentum). Third law: T² ∝ a³ (T² = 4π²a³/GM).",
      realWorldAnalogy: "First law: Like an oval racetrack with Sun at one end, not center. Second law: Planet speeds up when closer to Sun (like a skater pulling in arms). Third law: Outer planets take longer to orbit.",
      keyPoints: [
        "1st law (Ellipse): Orbits are ellipses with Sun at one focus",
        "2nd law (Equal areas): dA/dt = constant (L conserved)",
        "3rd law (Harmonic): T² ∝ a³, T² = 4π²a³/GM",
        "For circular orbits: T² ∝ r³",
        "Areal velocity = L/(2m) = constant",
        "Applies to any orbiting system (satellites, moons)",
      ],
      prerequisites: ['law-of-gravitation', 'angular-momentum'],
    },
    
    formulas: [
      {
        id: 'keplers-third-law',
        name: "Kepler's Third Law",
        category: 'base',
        formula: 'T² = 4π²a³/GM',
        latex: 'T^2 = \\frac{4\\pi^2 a^3}{GM}',
        description: 'Square of time period proportional to cube of semi-major axis',
        variables: [
          { symbol: 'T', meaning: 'Orbital time period', unit: 's', typical_values: 'Days to years' },
          { symbol: 'a', meaning: 'Semi-major axis of ellipse', unit: 'm', typical_values: 'AU or km' },
          { symbol: 'M', meaning: 'Central body mass', unit: 'kg', typical_values: 'Sun or planet mass' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Circular orbits', latex: 'T^2 = \\frac{4\\pi^2 r^3}{GM}', context: 'a = r for circle', neet_frequency: 'high' },
          { name: 'Ratio form', latex: '\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}', context: 'Compare two orbits', neet_frequency: 'high' },
          { name: 'Find planet mass', latex: 'M = \\frac{4\\pi^2 r^3}{GT^2}', context: 'From satellite orbit data', neet_frequency: 'medium' },
        ],
        specialCases: [
          'T² ∝ r³ (period increases with distance)',
          'Independent of orbiting body mass',
        ],
        dimensionalCheck: '[T²] = [r³]/[GM] = s²',
      },
      {
        id: 'areal-velocity',
        name: 'Areal Velocity (Second Law)',
        category: 'base',
        formula: 'dA/dt = L/(2m)',
        latex: '\\frac{dA}{dt} = \\frac{L}{2m} = \\frac{rv\\sin\\theta}{2} = \\text{constant}',
        description: 'Rate at which line from Sun to planet sweeps area',
        variables: [
          { symbol: 'dA/dt', meaning: 'Areal velocity', unit: 'm²/s', typical_values: 'Constant for orbit' },
          { symbol: 'L', meaning: 'Angular momentum', unit: 'kg·m²/s', typical_values: 'Conserved' },
          { symbol: 'm', meaning: 'Planet mass', unit: 'kg', typical_values: 'Planet mass' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Circular orbit', latex: '\\frac{dA}{dt} = \\frac{r \\cdot v}{2} = \\frac{\\pi r^2}{T}', context: 'Uniform motion', neet_frequency: 'medium' },
          { name: 'Perihelion vs Aphelion', latex: 'r_1 v_1 = r_2 v_2', context: 'From L = mvr = constant', neet_frequency: 'high' },
        ],
        specialCases: [
          'Faster at perihelion (closest), slower at aphelion (farthest)',
          'Consequence of angular momentum conservation',
        ],
        dimensionalCheck: '[dA/dt] = [L]/[m] = m²/s',
      },
      {
        id: 'velocity-perihelion-aphelion',
        name: 'Velocity at Perihelion and Aphelion',
        category: 'derived',
        formula: 'r₁v₁ = r₂v₂',
        latex: 'r_p v_p = r_a v_a',
        description: 'Angular momentum conservation between closest and farthest points',
        variables: [
          { symbol: 'rₚ', meaning: 'Perihelion distance', unit: 'm', typical_values: 'Closest approach' },
          { symbol: 'rₐ', meaning: 'Aphelion distance', unit: 'm', typical_values: 'Farthest distance' },
          { symbol: 'vₚ', meaning: 'Speed at perihelion', unit: 'm/s', typical_values: 'Maximum speed' },
          { symbol: 'vₐ', meaning: 'Speed at aphelion', unit: 'm/s', typical_values: 'Minimum speed' },
        ],
        derivedFrom: 'areal-velocity',
        applications: [
          { name: 'Velocity ratio', latex: '\\frac{v_p}{v_a} = \\frac{r_a}{r_p}', context: 'Inverse ratio', neet_frequency: 'high' },
        ],
        specialCases: [
          'vₚ > vₐ always',
          'Product rv = constant throughout orbit',
        ],
        dimensionalCheck: '[rv] = m²/s',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking Sun is at center of ellipse',
        correct: 'Sun is at one FOCUS, not at the center of the ellipse',
        whyItHappens: 'Confusing focus with center',
        neetExample: 'NEET 2020: Position of Sun in planetary orbit',
      },
      {
        mistake: 'Using T² ∝ r² instead of T² ∝ r³',
        correct: 'Third law is T² ∝ r³ (cube, not square)',
        whyItHappens: 'Mixing up the power',
        neetExample: 'NEET 2019: If distance doubles, how does period change?',
      },
      {
        mistake: 'Thinking equal areas means equal distances traveled',
        correct: 'Equal areas in equal time, not equal arc lengths. Planet moves faster when closer.',
        whyItHappens: 'Misunderstanding the second law',
        neetExample: 'NEET 2021: Speed at perihelion vs aphelion',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Apply T² ∝ r³ to find period', difficulty: 'easy' },
      { type: 'numerical', description: 'Compare periods of different planets/satellites', difficulty: 'medium' },
      { type: 'numerical', description: 'Velocity at perihelion and aphelion', difficulty: 'medium' },
      { type: 'conceptual', description: 'Interpretation of Kepler\'s laws', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'T² ∝ r³ applications', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Velocity ratio at perihelion/aphelion', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
      { pattern: 'Areal velocity problems', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Second law',
        analogy: 'Ice skater spinning',
        mapping: 'Close to spin axis (Sun) = faster motion. Far from axis = slower. Angular momentum conserved.',
      },
      {
        concept: 'Third law',
        analogy: 'Runners on circular track',
        mapping: 'Outer lanes are longer, so take more time even at same speed. Planets also slow down with distance.',
      },
    ],
    
    questions: [],
  },

  // Topic 8: Weightlessness
  {
    id: 'weightlessness',
    name: 'Weightlessness',
    weightage: 0,
    difficulty: 'easy',
    
    theory: {
      summary: "Weightlessness occurs when the apparent weight (normal force) becomes zero. This happens in free fall, orbiting satellites, and at the center of Earth. True weight (gravitational force) still exists; only apparent weight is zero. Astronauts feel weightless because they and the spacecraft are falling together.",
      realWorldAnalogy: "Like being in a falling elevator - you and the elevator fall together, so you don't press on the floor. The floor can't push back, so you feel weightless.",
      keyPoints: [
        "Apparent weight = N (normal force from surface)",
        "Weightlessness: N = 0, not that W = 0",
        "Occurs in: free fall, orbiting spacecraft, center of Earth",
        "In orbit: satellite and astronaut both in free fall toward Earth",
        "Not zero gravity - gravity provides centripetal force",
        "g still exists at ISS altitude (~90% of surface value)",
      ],
      prerequisites: ['law-of-gravitation'],
    },
    
    formulas: [
      {
        id: 'apparent-weight',
        name: 'Apparent Weight',
        category: 'base',
        formula: 'W_apparent = m(g - a)',
        latex: 'W_{apparent} = m(g - a) = N',
        description: 'Weight felt by a person when accelerating',
        variables: [
          { symbol: 'W_apparent', meaning: 'Apparent weight', unit: 'N', typical_values: '0 to >mg' },
          { symbol: 'g', meaning: 'Gravitational acceleration', unit: 'm/s²', typical_values: '9.8 m/s²' },
          { symbol: 'a', meaning: 'Acceleration of system', unit: 'm/s²', typical_values: 'Positive if downward' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Free fall', latex: 'N = m(g - g) = 0', context: 'a = g, weightless', neet_frequency: 'high' },
          { name: 'Ascending lift', latex: 'N = m(g + a)', context: 'Feel heavier', neet_frequency: 'high' },
          { name: 'Descending lift', latex: 'N = m(g - a)', context: 'Feel lighter', neet_frequency: 'high' },
        ],
        specialCases: [
          'a = g (free fall): N = 0',
          'a > g: N negative (person would lift off floor)',
        ],
        dimensionalCheck: '[N] = [m][g] = N',
      },
      {
        id: 'weightlessness-orbit',
        name: 'Weightlessness in Orbit',
        category: 'derived',
        formula: 'N = 0 (satellite and astronaut have same a = g)',
        latex: 'a_{astronaut} = a_{satellite} = \\frac{v^2}{r} = \\frac{GM}{r^2} = g_r',
        description: 'Both astronaut and spacecraft fall with same acceleration',
        variables: [
          { symbol: 'aᵣ', meaning: 'Centripetal acceleration = g at that height', unit: 'm/s²', typical_values: '~9 m/s² at ISS' },
        ],
        derivedFrom: 'apparent-weight',
        applications: [
          { name: 'ISS height (~400 km)', latex: 'g \\approx 0.89 g_0 \\approx 8.7 \\text{ m/s}^2', context: 'g is not zero!', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Both astronaut and craft accelerate at same rate',
          'No relative motion, so no normal force',
        ],
        dimensionalCheck: '[a] = m/s²',
      },
      {
        id: 'effective-g-latitude',
        name: 'Effective g with Rotation',
        category: 'derived',
        formula: "g' = g - Rω²cos²φ",
        latex: "g' = g - R\\omega^2\\cos^2\\phi",
        description: 'Apparent g reduced by Earth\'s rotation',
        variables: [
          { symbol: "g'", meaning: 'Effective acceleration', unit: 'm/s²', typical_values: 'g at poles to g-0.034 at equator' },
          { symbol: 'ω', meaning: 'Earth angular velocity', unit: 'rad/s', typical_values: '7.3 × 10⁻⁵ rad/s' },
          { symbol: 'φ', meaning: 'Latitude', unit: 'degrees', typical_values: '0° to 90°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For weightlessness at equator', latex: 'g = R\\omega^2 \\Rightarrow \\omega = \\sqrt{g/R}', context: 'T ≈ 84 min', neet_frequency: 'medium' },
          { name: 'Rotation speed needed', latex: 'T = 2\\pi\\sqrt{R/g} \\approx 84 \\text{ min}', context: 'Earth must spin 17× faster', neet_frequency: 'medium' },
        ],
        specialCases: [
          'At poles (φ = 90°): no centrifugal effect',
          'At equator (φ = 0°): maximum reduction',
        ],
        dimensionalCheck: "[g'] = m/s²",
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking weightlessness means no gravity',
        correct: 'Gravity exists! Weightlessness = zero apparent weight (normal force = 0)',
        whyItHappens: 'Confusing weight with gravitational force',
        neetExample: 'NEET 2020: g at height of space station',
      },
      {
        mistake: 'Thinking astronauts are beyond Earth\'s gravity',
        correct: 'At ISS altitude, g ≈ 8.7 m/s² (89% of surface). They\'re in free fall!',
        whyItHappens: 'Misconception about space',
        neetExample: 'NEET 2019: Why astronauts feel weightless in orbit',
      },
      {
        mistake: 'Confusing apparent weight with true weight',
        correct: 'True weight mg doesn\'t change (much). Apparent weight N changes with acceleration.',
        whyItHappens: 'Not distinguishing between the two',
        neetExample: 'NEET 2021: Apparent weight in accelerating lift',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Why astronauts feel weightless', difficulty: 'easy' },
      { type: 'numerical', description: 'Apparent weight in lift', difficulty: 'easy' },
      { type: 'numerical', description: 'Rotation speed for weightlessness', difficulty: 'medium' },
      { type: 'conceptual', description: 'g value at space station altitude', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Apparent weight in lift problems', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Weightlessness in orbit explanation', frequency: 'medium', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Conditions for weightlessness', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Weightlessness',
        analogy: 'Falling elevator',
        mapping: 'You and elevator fall together, floor can\'t push up on you, so N = 0',
      },
      {
        concept: 'Orbit as free fall',
        analogy: 'Cannonball thought experiment',
        mapping: 'Fire fast enough and Earth curves away as you fall - you keep missing!',
      },
    ],
    
    questions: [],
  },
];

