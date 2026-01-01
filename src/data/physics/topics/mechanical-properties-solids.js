// Mechanical Properties of Solids - 2% weightage (Tier 3)
// NCERT Class 11, Chapter 9

export const mechanicalPropertiesSolidsTopics = [
  // Topic 1: Stress and Strain
  {
    id: 'stress-strain',
    name: 'Stress and Strain',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Stress is the restoring force per unit area (σ = F/A). Strain is the fractional deformation (ε = ΔL/L). Stress causes strain. Hooke's law: within elastic limit, stress ∝ strain. Types: tensile, compressive, and shear. Stress has units of pressure, strain is dimensionless.",
      realWorldAnalogy: "Pulling a rubber band - the force you apply per unit area is stress, how much it stretches relative to original length is strain.",
      keyPoints: [
        "Stress σ = F/A (force per unit area)",
        "Longitudinal strain = ΔL/L (change in length / original length)",
        "Volume strain = ΔV/V (change in volume / original volume)",
        "Shear strain = θ ≈ tan θ = Δx/L (angle of deformation)",
        "Hooke's law: stress = E × strain (within elastic limit)",
        "SI unit: Stress - Pa (N/m²), Strain - dimensionless",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'stress-formula',
        name: 'Stress',
        category: 'base',
        formula: 'σ = F/A',
        latex: '\\sigma = \\frac{F}{A}',
        description: 'Internal restoring force per unit cross-sectional area',
        variables: [
          { symbol: 'σ', meaning: 'Stress', unit: 'Pa or N/m²', typical_values: '10⁶ to 10⁹ Pa' },
          { symbol: 'F', meaning: 'Applied force', unit: 'N', typical_values: '1 to 10⁶ N' },
          { symbol: 'A', meaning: 'Cross-sectional area', unit: 'm²', typical_values: '10⁻⁶ to 10⁻² m²' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Tensile stress', latex: '\\sigma = \\frac{F}{A}', context: 'Pulling/stretching', neet_frequency: 'high' },
          { name: 'Compressive stress', latex: '\\sigma = \\frac{F}{A}', context: 'Pushing/compressing', neet_frequency: 'high' },
          { name: 'Shear stress', latex: '\\tau = \\frac{F_{tangential}}{A}', context: 'Force parallel to surface', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Same formula for all types, direction differs',
          'Stress is a tensor quantity (has direction associated with plane)',
        ],
        dimensionalCheck: '[σ] = [F]/[A] = N/m² = Pa',
      },
      {
        id: 'strain-formula',
        name: 'Strain',
        category: 'base',
        formula: 'ε = ΔL/L or ΔV/V or θ',
        latex: '\\epsilon = \\frac{\\Delta L}{L}',
        description: 'Fractional change in dimensions',
        variables: [
          { symbol: 'ε', meaning: 'Strain', unit: 'dimensionless', typical_values: '10⁻⁴ to 10⁻¹' },
          { symbol: 'ΔL', meaning: 'Change in length', unit: 'm', typical_values: 'mm to cm' },
          { symbol: 'L', meaning: 'Original length', unit: 'm', typical_values: 'cm to m' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Longitudinal strain', latex: '\\epsilon_L = \\frac{\\Delta L}{L}', context: 'Change in length', neet_frequency: 'high' },
          { name: 'Volume strain', latex: '\\epsilon_V = \\frac{\\Delta V}{V}', context: 'Change in volume', neet_frequency: 'medium' },
          { name: 'Shear strain', latex: '\\gamma = \\theta \\approx \\frac{\\Delta x}{h}', context: 'Angular deformation', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Strain is dimensionless (ratio of same units)',
          'Can be expressed as percentage',
        ],
        dimensionalCheck: '[ε] = dimensionless',
      },
      {
        id: 'hookes-law',
        name: "Hooke's Law",
        category: 'base',
        formula: 'σ = E × ε',
        latex: '\\sigma = E \\times \\epsilon',
        description: 'Within elastic limit, stress is proportional to strain',
        variables: [
          { symbol: 'E', meaning: 'Modulus of elasticity', unit: 'Pa', typical_values: '10⁹ to 10¹¹ Pa' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Force on wire', latex: 'F = \\frac{EA\\Delta L}{L}', context: 'Tensile deformation', neet_frequency: 'high' },
          { name: 'Spring analogy', latex: 'k = \\frac{EA}{L}', context: 'Wire acts like spring', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Valid only within elastic limit',
          'E depends on material, not dimensions',
        ],
        dimensionalCheck: '[E] = [σ]/[ε] = Pa',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing stress and pressure',
        correct: 'Stress is internal restoring force/area, pressure is external force/area. Same units, different concepts.',
        whyItHappens: 'Both have units of Pa',
        neetExample: 'NEET 2020: Stress in a wire under tension',
      },
      {
        mistake: 'Thinking strain has units',
        correct: 'Strain = ΔL/L is dimensionless (length/length cancels)',
        whyItHappens: 'Expecting all physical quantities to have units',
        neetExample: 'NEET 2019: Units of strain',
      },
      {
        mistake: 'Using Hooke\'s law beyond elastic limit',
        correct: 'Hooke\'s law (σ ∝ ε) is valid only within elastic limit (proportional limit)',
        whyItHappens: 'Overgeneralizing the law',
        neetExample: 'NEET 2021: Stress-strain curve interpretation',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate stress in wire', difficulty: 'easy' },
      { type: 'numerical', description: 'Calculate strain from elongation', difficulty: 'easy' },
      { type: 'conceptual', description: 'Types of stress and strain', difficulty: 'easy' },
      { type: 'graphical', description: 'Stress-strain curve analysis', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Stress calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Strain calculation', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Stress-strain curve regions', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Stress',
        analogy: 'Pressure on a person in a crowd',
        mapping: 'More people (force) in smaller area = more uncomfortable (stress)',
      },
      {
        concept: 'Strain',
        analogy: 'Stretching a rubber band',
        mapping: 'Strain is how much longer it gets relative to original - 10% longer = 0.1 strain',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Elastic Moduli
  {
    id: 'elastic-moduli',
    name: 'Elastic Moduli',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Elastic modulus is ratio of stress to strain. Three types: Young's modulus (Y) for linear, Bulk modulus (B) for volumetric, and Shear modulus (G) for shape. All have units of Pa. Y = σ/ε, B = -P/(ΔV/V), G = τ/θ. Moduli are material properties, independent of dimensions.",
      realWorldAnalogy: "Young's modulus is like stiffness of a spring - higher Y means harder to stretch. Bulk modulus is how hard to squeeze (like compressing water vs air). Shear modulus is resistance to shape change (like shearing a deck of cards).",
      keyPoints: [
        "Young's modulus: Y = σ/ε = (F/A)/(ΔL/L) = FL/(AΔL)",
        "Bulk modulus: B = -P/(ΔV/V) = -PV/ΔV (pressure change)",
        "Shear modulus: G = τ/θ = (F/A)/θ",
        "All three have units of Pa (N/m²)",
        "Steel has high Y, rubber has low Y",
        "Incompressible fluids have infinite B",
      ],
      prerequisites: ['stress-strain'],
    },
    
    formulas: [
      {
        id: 'youngs-modulus',
        name: "Young's Modulus",
        category: 'base',
        formula: 'Y = σ/ε = FL/(AΔL)',
        latex: 'Y = \\frac{\\sigma}{\\epsilon} = \\frac{FL}{A\\Delta L}',
        description: 'Ratio of tensile stress to tensile strain',
        variables: [
          { symbol: 'Y', meaning: "Young's modulus", unit: 'Pa', typical_values: '10⁹-10¹² Pa' },
          { symbol: 'F', meaning: 'Applied force', unit: 'N', typical_values: '1-10⁶ N' },
          { symbol: 'L', meaning: 'Original length', unit: 'm', typical_values: '0.1-10 m' },
          { symbol: 'A', meaning: 'Cross-sectional area', unit: 'm²', typical_values: '10⁻⁶-10⁻² m²' },
          { symbol: 'ΔL', meaning: 'Elongation', unit: 'm', typical_values: '10⁻⁵-10⁻² m' },
        ],
        derivedFrom: 'hookes-law',
        applications: [
          { name: 'Elongation formula', latex: '\\Delta L = \\frac{FL}{AY}', context: 'Find extension', neet_frequency: 'high' },
          { name: 'For cylindrical wire', latex: 'Y = \\frac{4FL}{\\pi d^2 \\Delta L}', context: 'A = πd²/4', neet_frequency: 'high' },
          { name: 'Energy stored', latex: 'U = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} \\times V', context: 'Elastic PE', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Y is material property, independent of dimensions',
          'Higher Y = stiffer material',
          'Rubber: ~10⁸ Pa, Steel: ~2×10¹¹ Pa',
        ],
        dimensionalCheck: '[Y] = [stress]/[strain] = Pa',
      },
      {
        id: 'bulk-modulus',
        name: 'Bulk Modulus',
        category: 'base',
        formula: 'B = -P/(ΔV/V)',
        latex: 'B = -\\frac{P}{\\Delta V/V} = -\\frac{PV}{\\Delta V}',
        description: 'Ratio of pressure change to fractional volume change',
        variables: [
          { symbol: 'B', meaning: 'Bulk modulus', unit: 'Pa', typical_values: '10⁹-10¹¹ Pa' },
          { symbol: 'P', meaning: 'Pressure change', unit: 'Pa', typical_values: '10⁵-10⁹ Pa' },
          { symbol: 'ΔV', meaning: 'Volume change', unit: 'm³', typical_values: 'Negative for compression' },
          { symbol: 'V', meaning: 'Original volume', unit: 'm³', typical_values: '10⁻⁶-1 m³' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Compressibility', latex: 'K = \\frac{1}{B}', context: 'Inverse of bulk modulus', neet_frequency: 'medium' },
          { name: 'Volume change', latex: '\\Delta V = -\\frac{PV}{B}', context: 'Find compression', neet_frequency: 'high' },
        ],
        specialCases: [
          'Negative sign: pressure increase causes volume decrease',
          'Water B ≈ 2.2 × 10⁹ Pa (nearly incompressible)',
          'Gases have low B (highly compressible)',
        ],
        dimensionalCheck: '[B] = Pa',
      },
      {
        id: 'shear-modulus',
        name: 'Shear Modulus (Rigidity Modulus)',
        category: 'base',
        formula: 'G = τ/θ',
        latex: 'G = \\frac{\\tau}{\\theta} = \\frac{F/A}{\\theta}',
        description: 'Ratio of shear stress to shear strain',
        variables: [
          { symbol: 'G', meaning: 'Shear modulus', unit: 'Pa', typical_values: '10⁹-10¹¹ Pa' },
          { symbol: 'τ', meaning: 'Shear stress', unit: 'Pa', typical_values: 'F/A' },
          { symbol: 'θ', meaning: 'Shear strain (angle)', unit: 'rad', typical_values: '10⁻⁵-10⁻¹ rad' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Lateral displacement', latex: '\\Delta x = \\frac{Fh}{AG}', context: 'h = height of block', neet_frequency: 'medium' },
          { name: 'For small angles', latex: '\\theta \\approx \\tan\\theta = \\frac{\\Delta x}{h}', context: 'Shear strain approximation', neet_frequency: 'medium' },
        ],
        specialCases: [
          'G = 0 for fluids (cannot sustain shear stress)',
          'Related to Y and B by elasticity equations',
        ],
        dimensionalCheck: '[G] = Pa',
      },
      {
        id: 'elastic-energy',
        name: 'Elastic Potential Energy',
        category: 'derived',
        formula: 'U = ½ × stress × strain × volume',
        latex: 'U = \\frac{1}{2} \\sigma \\epsilon V = \\frac{1}{2} \\frac{F^2L}{AY} = \\frac{F\\Delta L}{2}',
        description: 'Energy stored in elastically deformed body',
        variables: [
          { symbol: 'U', meaning: 'Elastic potential energy', unit: 'J', typical_values: '10⁻³-10³ J' },
          { symbol: 'V', meaning: 'Volume of material', unit: 'm³', typical_values: 'AL' },
        ],
        derivedFrom: 'youngs-modulus',
        applications: [
          { name: 'Per unit volume', latex: 'u = \\frac{U}{V} = \\frac{1}{2}\\sigma\\epsilon = \\frac{\\sigma^2}{2Y}', context: 'Energy density', neet_frequency: 'high' },
          { name: 'In terms of force', latex: 'U = \\frac{1}{2}F\\Delta L = \\frac{F^2L}{2AY}', context: 'Work done in stretching', neet_frequency: 'high' },
        ],
        specialCases: [
          'Same as work done in stretching',
          'Area under force-extension graph',
        ],
        dimensionalCheck: '[U] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking larger dimensions mean larger modulus',
        correct: 'Moduli are material properties. Same material = same modulus regardless of size',
        whyItHappens: 'Confusing intensive and extensive properties',
        neetExample: 'NEET 2020: Compare Y of thin vs thick steel wires',
      },
      {
        mistake: 'Forgetting negative sign in bulk modulus formula',
        correct: 'B = -P/(ΔV/V). Negative ensures B is positive (ΔV is negative for compression)',
        whyItHappens: 'Not considering that compression gives negative ΔV',
        neetExample: 'NEET 2019: Volume change under pressure',
      },
      {
        mistake: 'Using same formula for all three moduli',
        correct: 'Y = σ/ε (linear), B = -P/(ΔV/V) (volume), G = τ/θ (shear). Different formulas!',
        whyItHappens: 'Generalizing from one modulus',
        neetExample: 'NEET 2021: Identify correct formula for each modulus',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate elongation using Y', difficulty: 'medium' },
      { type: 'numerical', description: 'Calculate volume change using B', difficulty: 'medium' },
      { type: 'numerical', description: 'Energy stored in stretched wire', difficulty: 'medium' },
      { type: 'conceptual', description: 'Compare moduli of different materials', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: "Young's modulus applications", frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Elastic energy calculation', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Bulk modulus problems', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: "Young's modulus",
        analogy: 'Spring constant for materials',
        mapping: 'Higher Y = stiffer spring. Steel (high Y) like stiff spring, rubber (low Y) like loose spring',
      },
      {
        concept: 'Bulk modulus',
        analogy: 'Squeezing a balloon vs a rock',
        mapping: 'Low B (balloon) = easy to compress. High B (rock) = hard to compress',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Poisson's Ratio and Elastic Limit
  {
    id: 'poissons-ratio',
    name: "Poisson's Ratio and Stress-Strain Curve",
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Poisson's ratio (σ) is ratio of lateral strain to longitudinal strain. For most materials, 0 < σ < 0.5. When stretched, materials get thinner (lateral contraction). Stress-strain curve shows proportional limit, elastic limit, yield point, ultimate strength, and breaking point. Beyond elastic limit, permanent deformation occurs.",
      realWorldAnalogy: "When you stretch a rubber band, it gets longer but also thinner. Poisson's ratio tells you how much thinner it gets relative to how much longer. The stress-strain curve is like a material's 'strength biography' - showing how it responds from gentle stretching to breaking.",
      keyPoints: [
        "Poisson's ratio: σ = -(lateral strain)/(longitudinal strain)",
        "Theoretical range: -1 to 0.5, typical: 0.2 to 0.4",
        "For incompressible material: σ = 0.5",
        "Stress-strain curve regions: proportional, elastic, plastic, fracture",
        "Elastic limit: max stress with complete recovery",
        "Yield point: where plastic deformation begins",
      ],
      prerequisites: ['stress-strain', 'elastic-moduli'],
    },
    
    formulas: [
      {
        id: 'poissons-ratio-formula',
        name: "Poisson's Ratio",
        category: 'base',
        formula: 'σ = -εlateral/εlongitudinal',
        latex: '\\sigma_P = -\\frac{\\epsilon_{lateral}}{\\epsilon_{longitudinal}} = -\\frac{\\Delta d/d}{\\Delta L/L}',
        description: 'Ratio of lateral contraction to axial extension',
        variables: [
          { symbol: 'σₚ', meaning: "Poisson's ratio", unit: 'dimensionless', typical_values: '0.2 to 0.5' },
          { symbol: 'εlateral', meaning: 'Lateral strain', unit: 'dimensionless', typical_values: 'ΔD/D' },
          { symbol: 'εlongitudinal', meaning: 'Longitudinal strain', unit: 'dimensionless', typical_values: 'ΔL/L' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Diameter change', latex: '\\Delta d = -\\sigma_P \\cdot d \\cdot \\frac{\\Delta L}{L}', context: 'Wire stretching', neet_frequency: 'medium' },
          { name: 'Volume change', latex: '\\frac{\\Delta V}{V} = \\epsilon_L(1 - 2\\sigma_P)', context: 'During stretching', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Negative sign: stretching causes thinning',
          'σₚ = 0.5 for incompressible materials (ΔV = 0)',
          'Steel ≈ 0.3, Rubber ≈ 0.5, Cork ≈ 0',
        ],
        dimensionalCheck: 'Dimensionless (ratio of strains)',
      },
      {
        id: 'relation-moduli',
        name: 'Relation Between Elastic Constants',
        category: 'derived',
        formula: 'Y = 2G(1 + σ) = 3B(1 - 2σ)',
        latex: 'Y = 2G(1 + \\sigma_P) = 3B(1 - 2\\sigma_P)',
        description: 'Relations connecting elastic moduli and Poisson ratio',
        variables: [
          { symbol: 'Y', meaning: "Young's modulus", unit: 'Pa', typical_values: '10⁹-10¹¹ Pa' },
          { symbol: 'G', meaning: 'Shear modulus', unit: 'Pa', typical_values: '10⁹-10¹¹ Pa' },
          { symbol: 'B', meaning: 'Bulk modulus', unit: 'Pa', typical_values: '10⁹-10¹¹ Pa' },
        ],
        derivedFrom: 'poissons-ratio-formula',
        applications: [
          { name: 'Find G from Y', latex: 'G = \\frac{Y}{2(1+\\sigma_P)}', context: 'Given Y and σ', neet_frequency: 'medium' },
          { name: 'Find B from Y', latex: 'B = \\frac{Y}{3(1-2\\sigma_P)}', context: 'Given Y and σ', neet_frequency: 'medium' },
        ],
        specialCases: [
          'For σₚ = 0.5: B = ∞ (incompressible)',
          'Only 2 of the 4 constants are independent',
        ],
        dimensionalCheck: '[Y] = [G] = [B] = Pa',
      },
      {
        id: 'breaking-stress',
        name: 'Breaking Stress',
        category: 'derived',
        formula: 'Breaking stress = F_breaking/A',
        latex: '\\sigma_{breaking} = \\frac{F_{breaking}}{A}',
        description: 'Maximum stress a material can withstand before breaking',
        variables: [
          { symbol: 'σbreaking', meaning: 'Breaking stress', unit: 'Pa', typical_values: '10⁷-10⁹ Pa' },
          { symbol: 'Fbreaking', meaning: 'Breaking load', unit: 'N', typical_values: 'Material dependent' },
        ],
        derivedFrom: 'stress-formula',
        applications: [
          { name: 'Maximum load', latex: 'F_{max} = \\sigma_{breaking} \\times A', context: 'Safe load design', neet_frequency: 'high' },
          { name: 'With safety factor', latex: 'F_{safe} = \\frac{\\sigma_{breaking} \\times A}{n}', context: 'n = safety factor', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Material property, independent of dimensions',
          'Ductile materials show warning before breaking',
          'Brittle materials break suddenly',
        ],
        dimensionalCheck: '[σ] = Pa',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting negative sign in Poisson ratio definition',
        correct: 'σₚ = -(lateral strain)/(longitudinal strain). Negative because they\'re opposite (stretch → thin)',
        whyItHappens: 'Not considering the opposing nature of the strains',
        neetExample: 'NEET 2020: Sign of lateral strain when wire is stretched',
      },
      {
        mistake: 'Confusing elastic limit with proportional limit',
        correct: 'Proportional limit: stress ∝ strain ends. Elastic limit: reversibility ends. Proportional < Elastic',
        whyItHappens: 'Similar concepts, often close together on curve',
        neetExample: 'NEET 2019: Difference between elastic and proportional limit',
      },
      {
        mistake: 'Thinking volume always stays constant when stretched',
        correct: 'Volume changes unless σₚ = 0.5. ΔV/V = ε(1 - 2σₚ)',
        whyItHappens: 'Assuming incompressibility for all materials',
        neetExample: 'NEET 2021: Volume change when wire is stretched',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate lateral strain from Poisson ratio', difficulty: 'easy' },
      { type: 'numerical', description: 'Breaking load calculation', difficulty: 'easy' },
      { type: 'conceptual', description: 'Stress-strain curve interpretation', difficulty: 'medium' },
      { type: 'numerical', description: 'Relation between elastic constants', difficulty: 'hard' },
    ],
    
    mostAskedPatterns: [
      { pattern: "Poisson's ratio problems", frequency: 'medium', yearAsked: [2018, 2019, 2021, 2023] },
      { pattern: 'Breaking stress/load', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Stress-strain curve regions', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: "Poisson's ratio",
        analogy: 'Squeezing toothpaste tube',
        mapping: 'Squeeze (compress) the tube and paste comes out the ends (lateral expansion)',
      },
      {
        concept: 'Stress-strain curve',
        analogy: 'Stretching a spring',
        mapping: 'First it stretches proportionally, then it starts to deform, finally it breaks',
      },
    ],
    
    questions: [],
  },
];

