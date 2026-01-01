// Kinetic Theory of Gases - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 13

export const kineticTheoryTopics = [
  // Topic 1: Kinetic Theory Assumptions and Ideal Gas
  {
    id: 'kinetic-theory-assumptions',
    name: 'Kinetic Theory Assumptions and Ideal Gas',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Kinetic theory explains gas behavior using molecular motion. Ideal gas assumptions: molecules are point masses in random motion, collisions are elastic, no intermolecular forces except during collision, and time of collision is negligible compared to time between collisions.",
      realWorldAnalogy: "Imagine billions of tiny perfectly bouncy balls flying around in a room, bouncing off walls and each other without losing energy - that's how gas molecules behave in kinetic theory.",
      keyPoints: [
        "Gas consists of large number of tiny molecules in random motion",
        "Molecular size << intermolecular separation (point masses)",
        "Collisions are perfectly elastic (KE conserved)",
        "No intermolecular forces except during collision",
        "Time of collision << time between collisions",
        "Molecules obey Newton's laws of motion",
        "Ideal gas equation: PV = nRT = NkT",
      ],
      prerequisites: ['thermodynamics-basics'],
    },
    
    formulas: [
      {
        id: 'ideal-gas-equation',
        name: 'Ideal Gas Equation',
        category: 'base',
        formula: 'PV = nRT = NkT',
        latex: 'PV = nRT = Nk_BT',
        description: 'Equation of state for an ideal gas relating pressure, volume, and temperature',
        variables: [
          { symbol: 'P', meaning: 'Pressure', unit: 'Pa', typical_values: '10⁵ Pa (1 atm)' },
          { symbol: 'V', meaning: 'Volume', unit: 'm³', typical_values: 'litres to m³' },
          { symbol: 'n', meaning: 'Number of moles', unit: 'mol', typical_values: '1-10 mol' },
          { symbol: 'R', meaning: 'Universal gas constant', unit: 'J/(mol·K)', typical_values: '8.314 J/(mol·K)' },
          { symbol: 'T', meaning: 'Absolute temperature', unit: 'K', typical_values: '273-373 K' },
          { symbol: 'N', meaning: 'Number of molecules', unit: 'dimensionless', typical_values: '~10²³' },
          { symbol: 'k_B', meaning: 'Boltzmann constant', unit: 'J/K', typical_values: '1.38 × 10⁻²³ J/K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Density form', latex: 'P = \\frac{\\rho RT}{M}', context: 'ρ = density, M = molar mass', neet_frequency: 'high' },
          { name: 'At STP', latex: 'V_m = 22.4 \\text{ L/mol}', context: 'Molar volume at 0°C, 1 atm', neet_frequency: 'medium' },
        ],
        specialCases: [
          'R = NAkB (Avogadro number × Boltzmann constant)',
          'At constant T: PV = constant (Boyle\'s law)',
          'At constant P: V/T = constant (Charles\' law)',
        ],
        dimensionalCheck: '[P][V] = [n][R][T] = mol × J/(mol·K) × K = J ✓',
      },
      {
        id: 'gas-density',
        name: 'Gas Density from Ideal Gas Law',
        category: 'derived',
        formula: 'ρ = PM/(RT)',
        latex: '\\rho = \\frac{PM}{RT}',
        description: 'Density of an ideal gas in terms of pressure and temperature',
        variables: [
          { symbol: 'ρ', meaning: 'Density', unit: 'kg/m³', typical_values: '1-2 kg/m³ for common gases' },
          { symbol: 'M', meaning: 'Molar mass', unit: 'kg/mol', typical_values: '0.028 kg/mol for N₂' },
        ],
        derivedFrom: 'ideal-gas-equation',
        applications: [
          { name: 'Compare densities', latex: '\\frac{\\rho_1}{\\rho_2} = \\frac{M_1}{M_2}', context: 'Same P and T', neet_frequency: 'high' },
        ],
        specialCases: [
          'ρ ∝ P at constant T',
          'ρ ∝ 1/T at constant P',
          'ρ ∝ M at same P, T',
        ],
        dimensionalCheck: '[ρ] = kg/m³',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using Celsius instead of Kelvin in gas equations',
        correct: 'Always use absolute temperature (Kelvin). T(K) = T(°C) + 273',
        whyItHappens: 'Habit of using Celsius in everyday life',
        neetExample: 'NEET 2020: Gas at 27°C - must convert to 300 K',
      },
      {
        mistake: 'Confusing R and k_B',
        correct: 'R = 8.314 J/(mol·K) for moles. k_B = 1.38 × 10⁻²³ J/K for molecules. R = NAk_B',
        whyItHappens: 'Similar symbols, both relate to gas constant',
        neetExample: 'NEET 2019: Energy per molecule vs per mole',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate P, V, or T using ideal gas law', difficulty: 'easy' },
      { type: 'numerical', description: 'Gas density problems', difficulty: 'medium' },
      { type: 'conceptual', description: 'Assumptions of kinetic theory', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Ideal gas equation calculations', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022] },
      { pattern: 'Gas density comparisons', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Ideal gas',
        analogy: 'Perfectly bouncy balls in a box',
        mapping: 'Balls = molecules, bouncing = collisions, box walls = container',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Kinetic Interpretation of Temperature
  {
    id: 'kinetic-interpretation-temperature',
    name: 'Kinetic Interpretation of Temperature',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Temperature is a measure of the average kinetic energy of gas molecules. The average KE per molecule is (3/2)kT. At absolute zero, molecular motion would theoretically cease. Root mean square speed depends on temperature and molecular mass.",
      realWorldAnalogy: "Temperature is like the 'intensity of dancing' of molecules. Hot gas = molecules dancing wildly. Cold gas = molecules moving sluggishly. At absolute zero, the dance stops.",
      keyPoints: [
        "Average KE per molecule = (3/2)kT",
        "Average KE per mole = (3/2)RT",
        "Temperature ∝ average KE (not speed)",
        "At T = 0 K, KE = 0 (absolute zero)",
        "v_rms = √(3kT/m) = √(3RT/M)",
        "At same T, lighter molecules move faster",
      ],
      prerequisites: ['kinetic-theory-assumptions'],
    },
    
    formulas: [
      {
        id: 'average-ke-molecule',
        name: 'Average KE per Molecule',
        category: 'base',
        formula: 'KE_avg = (3/2)kT',
        latex: '\\langle KE \\rangle = \\frac{3}{2}k_B T',
        description: 'Average translational kinetic energy of a gas molecule',
        variables: [
          { symbol: 'KE', meaning: 'Average kinetic energy', unit: 'J', typical_values: '10⁻²¹ J' },
          { symbol: 'k_B', meaning: 'Boltzmann constant', unit: 'J/K', typical_values: '1.38 × 10⁻²³' },
          { symbol: 'T', meaning: 'Absolute temperature', unit: 'K', typical_values: '300 K (room temp)' },
        ],
        derivedFrom: 'kinetic-theory-pressure',
        applications: [
          { name: 'Per mole', latex: 'KE_{mole} = \\frac{3}{2}RT', context: 'Multiply by NA', neet_frequency: 'high' },
          { name: 'Total KE of gas', latex: 'KE_{total} = \\frac{3}{2}nRT', context: 'n moles of gas', neet_frequency: 'high' },
        ],
        specialCases: [
          'KE depends only on T, not on gas type',
          'All gases at same T have same average KE per molecule',
          'KE ∝ T (in Kelvin)',
        ],
        dimensionalCheck: '[KE] = [k][T] = J/K × K = J ✓',
      },
      {
        id: 'rms-speed',
        name: 'Root Mean Square Speed',
        category: 'derived',
        formula: 'v_rms = √(3kT/m) = √(3RT/M)',
        latex: 'v_{rms} = \\sqrt{\\frac{3k_B T}{m}} = \\sqrt{\\frac{3RT}{M}}',
        description: 'RMS speed of gas molecules - the square root of mean of squared speeds',
        variables: [
          { symbol: 'v_rms', meaning: 'Root mean square speed', unit: 'm/s', typical_values: '400-2000 m/s' },
          { symbol: 'm', meaning: 'Mass of one molecule', unit: 'kg', typical_values: '10⁻²⁶ kg' },
          { symbol: 'M', meaning: 'Molar mass', unit: 'kg/mol', typical_values: '0.002-0.044 kg/mol' },
        ],
        derivedFrom: 'average-ke-molecule',
        applications: [
          { name: 'Compare speeds', latex: '\\frac{v_1}{v_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{m_2}{m_1}}', context: 'At same temperature', neet_frequency: 'high' },
          { name: 'Temperature dependence', latex: 'v_{rms} \\propto \\sqrt{T}', context: 'For same gas', neet_frequency: 'high' },
        ],
        specialCases: [
          'H₂ has highest v_rms (lightest molecule)',
          'v_rms(H₂) : v_rms(O₂) = √(32/2) = 4:1',
          'Doubling T increases v_rms by √2',
        ],
        dimensionalCheck: '[v] = √([R][T]/[M]) = √(J·mol⁻¹·K⁻¹·K/kg·mol⁻¹) = m/s ✓',
      },
      {
        id: 'mean-speed',
        name: 'Mean Speed (Average Speed)',
        category: 'derived',
        formula: 'v_avg = √(8kT/πm) = √(8RT/πM)',
        latex: 'v_{avg} = \\sqrt{\\frac{8k_B T}{\\pi m}} = \\sqrt{\\frac{8RT}{\\pi M}}',
        description: 'Arithmetic mean of molecular speeds',
        variables: [
          { symbol: 'v_avg', meaning: 'Average speed', unit: 'm/s', typical_values: 'Slightly less than v_rms' },
        ],
        derivedFrom: 'maxwell-distribution',
        applications: [
          { name: 'Ratio to v_rms', latex: '\\frac{v_{avg}}{v_{rms}} = \\sqrt{\\frac{8}{3\\pi}} = 0.921', context: 'Always this ratio', neet_frequency: 'high' },
        ],
        specialCases: [
          'v_avg < v_rms always',
          'v_avg = 0.921 × v_rms',
        ],
        dimensionalCheck: '[v] = m/s',
      },
      {
        id: 'most-probable-speed',
        name: 'Most Probable Speed',
        category: 'derived',
        formula: 'v_mp = √(2kT/m) = √(2RT/M)',
        latex: 'v_{mp} = \\sqrt{\\frac{2k_B T}{m}} = \\sqrt{\\frac{2RT}{M}}',
        description: 'Speed possessed by maximum number of molecules',
        variables: [
          { symbol: 'v_mp', meaning: 'Most probable speed', unit: 'm/s', typical_values: 'Smallest of the three' },
        ],
        derivedFrom: 'maxwell-distribution',
        applications: [
          { name: 'Speed ratios', latex: 'v_{mp} : v_{avg} : v_{rms} = 1 : 1.128 : 1.224', context: 'Or √2 : √(8/π) : √3', neet_frequency: 'high' },
          { name: 'Simple ratio', latex: 'v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3}', context: 'Exact values', neet_frequency: 'high' },
        ],
        specialCases: [
          'v_mp < v_avg < v_rms always',
          'v_mp = 0.816 × v_rms',
        ],
        dimensionalCheck: '[v] = m/s',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing v_rms, v_avg, and v_mp',
        correct: 'Order: v_mp < v_avg < v_rms. Ratio = 1 : 1.128 : 1.224 (or √2 : √(8/π) : √3)',
        whyItHappens: 'Three similar quantities with similar formulas',
        neetExample: 'NEET 2020: Which speed is maximum - v_rms is always largest',
      },
      {
        mistake: 'Thinking heavier molecules have higher KE at same T',
        correct: 'Average KE = (3/2)kT - same for all gases at same T. Heavier molecules move slower.',
        whyItHappens: 'Confusing energy with speed',
        neetExample: 'NEET 2019: Compare KE of O₂ and H₂ at same temperature',
      },
      {
        mistake: 'Using v ∝ T instead of v ∝ √T',
        correct: 'v_rms ∝ √T (square root relationship). KE ∝ T (linear).',
        whyItHappens: 'Forgetting the square root in velocity formula',
        neetExample: 'NEET 2021: If T doubles, v_rms increases by √2, not 2',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate rms speed of gas', difficulty: 'easy' },
      { type: 'numerical', description: 'Compare speeds of different gases', difficulty: 'medium' },
      { type: 'numerical', description: 'Speed ratios v_mp : v_avg : v_rms', difficulty: 'medium' },
      { type: 'conceptual', description: 'Temperature and molecular KE relationship', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'RMS speed calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Speed comparison of different gases', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022] },
      { pattern: 'v_mp : v_avg : v_rms ratio', frequency: 'high', yearAsked: [2018, 2020, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Temperature as average KE',
        analogy: 'Temperature of a party',
        mapping: 'Hot party = people dancing energetically. Cold party = people sitting still.',
      },
      {
        concept: 'Lighter molecules move faster',
        analogy: 'Same push on different balls',
        mapping: 'Ping pong ball flies faster than bowling ball with same energy',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Pressure from Kinetic Theory
  {
    id: 'pressure-kinetic-theory',
    name: 'Pressure from Kinetic Theory',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "Pressure arises from molecular collisions with container walls. Using kinetic theory, P = (1/3)ρv²_rms = (1/3)(mn/V)v²_rms. This connects macroscopic pressure to microscopic molecular motion.",
      realWorldAnalogy: "Imagine rain hitting a window - each drop exerts a tiny force. Millions of drops create steady pressure. Similarly, billions of molecular impacts create gas pressure.",
      keyPoints: [
        "Pressure = force per unit area from molecular collisions",
        "P = (1/3)ρv²_rms where ρ is density",
        "P = (1/3)(Nm/V)v²_rms = (1/3)(nm)v²_rms where n = N/V",
        "Pressure ∝ number density × average KE",
        "At molecular level: P = (2/3)n(KE_avg)",
        "Connects microscopic motion to macroscopic properties",
      ],
      prerequisites: ['kinetic-theory-assumptions'],
    },
    
    formulas: [
      {
        id: 'pressure-rms',
        name: 'Pressure in Terms of RMS Speed',
        category: 'base',
        formula: 'P = (1/3)ρv²_rms',
        latex: 'P = \\frac{1}{3}\\rho v_{rms}^2 = \\frac{1}{3}\\frac{Nm}{V}v_{rms}^2',
        description: 'Gas pressure from kinetic theory in terms of density and RMS speed',
        variables: [
          { symbol: 'P', meaning: 'Pressure', unit: 'Pa', typical_values: '10⁵ Pa' },
          { symbol: 'ρ', meaning: 'Gas density', unit: 'kg/m³', typical_values: '1-2 kg/m³' },
          { symbol: 'v_rms', meaning: 'RMS speed', unit: 'm/s', typical_values: '400-2000 m/s' },
          { symbol: 'N', meaning: 'Number of molecules', unit: 'dimensionless', typical_values: '~10²³' },
          { symbol: 'm', meaning: 'Mass of one molecule', unit: 'kg', typical_values: '10⁻²⁶ kg' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'In terms of KE', latex: 'P = \\frac{2}{3}n\\langle KE \\rangle = \\frac{2}{3}\\frac{N}{V}\\langle KE \\rangle', context: 'n = number density', neet_frequency: 'high' },
          { name: 'Per mole', latex: 'PV = \\frac{1}{3}Mv_{rms}^2', context: 'M = molar mass', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Factor 1/3 from averaging over 3 dimensions',
          'Derivation assumes elastic collisions',
        ],
        dimensionalCheck: '[P] = [ρ][v²] = kg/m³ × m²/s² = Pa ✓',
      },
      {
        id: 'pressure-energy-density',
        name: 'Pressure and Energy Density',
        category: 'derived',
        formula: 'P = (2/3)E/V = (2/3)u',
        latex: 'P = \\frac{2}{3}\\frac{E}{V} = \\frac{2}{3}u',
        description: 'Pressure equals two-thirds of kinetic energy density',
        variables: [
          { symbol: 'E', meaning: 'Total kinetic energy', unit: 'J', typical_values: 'nRT × 3/2' },
          { symbol: 'u', meaning: 'Energy density (E/V)', unit: 'J/m³', typical_values: '~10⁵ J/m³' },
        ],
        derivedFrom: 'pressure-rms',
        applications: [
          { name: 'Energy from PV', latex: 'E = \\frac{3}{2}PV', context: 'Total translational KE', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Only translational KE considered',
          'For monatomic gas: total internal energy = (3/2)PV',
        ],
        dimensionalCheck: '[P] = [E]/[V] = J/m³ = Pa ✓',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting the factor 1/3 in pressure formula',
        correct: 'P = (1/3)ρv²_rms, not ρv²_rms. The 1/3 comes from 3D motion averaging.',
        whyItHappens: 'Not understanding the derivation from 3D molecular motion',
        neetExample: 'NEET 2019: Derive pressure using kinetic theory',
      },
      {
        mistake: 'Confusing P = (1/3)ρv² with P = (2/3)nu',
        correct: 'Both are correct. P = (1/3)ρv²_rms = (2/3)n⟨KE⟩. Different forms of same result.',
        whyItHappens: 'Multiple equivalent formulas',
        neetExample: 'NEET 2020: Express pressure in terms of energy density',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate pressure from molecular data', difficulty: 'medium' },
      { type: 'derivation', description: 'Derive pressure formula', difficulty: 'hard' },
      { type: 'conceptual', description: 'Origin of factor 1/3', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Pressure formula and its forms', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
      { pattern: 'Relation between P and KE density', frequency: 'medium', yearAsked: [2019, 2021] },
    ],
    
    analogies: [
      {
        concept: 'Pressure from collisions',
        analogy: 'Hailstorm on roof',
        mapping: 'Each hailstone = molecule, collective impact = pressure',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Degrees of Freedom and Equipartition
  {
    id: 'degrees-of-freedom',
    name: 'Degrees of Freedom and Law of Equipartition',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Degrees of freedom (f) are independent ways a molecule can have energy. Law of equipartition: each degree of freedom contributes (1/2)kT to average energy. Monatomic: f=3, Diatomic: f=5 (at moderate T), Polyatomic: f=6 or more.",
      realWorldAnalogy: "Degrees of freedom are like ways to spend money. Monatomic atom can only spend on 'moving' (3 directions). Diatomic molecule can also 'rotate' (2 axes). Polyatomic can additionally 'vibrate'.",
      keyPoints: [
        "Degree of freedom = independent mode of energy storage",
        "Each degree of freedom gets (1/2)kT energy per molecule",
        "Monatomic: f = 3 (3 translational only)",
        "Diatomic: f = 5 (3 translational + 2 rotational) at moderate T",
        "Diatomic at high T: f = 7 (+ 2 vibrational)",
        "Total energy U = (f/2)nRT",
      ],
      prerequisites: ['kinetic-interpretation-temperature'],
    },
    
    formulas: [
      {
        id: 'equipartition-law',
        name: 'Law of Equipartition of Energy',
        category: 'base',
        formula: 'Energy per DOF = (1/2)kT per molecule',
        latex: 'E_{per\\,DOF} = \\frac{1}{2}k_B T',
        description: 'Each degree of freedom contributes (1/2)kT to the average energy',
        variables: [
          { symbol: 'E', meaning: 'Energy per degree of freedom', unit: 'J', typical_values: '~10⁻²¹ J' },
          { symbol: 'f', meaning: 'Degrees of freedom', unit: 'dimensionless', typical_values: '3, 5, 6, 7' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Total energy per molecule', latex: 'E = \\frac{f}{2}k_B T', context: 'f degrees of freedom', neet_frequency: 'high' },
          { name: 'Total energy of gas', latex: 'U = \\frac{f}{2}nRT', context: 'n moles of gas', neet_frequency: 'high' },
        ],
        specialCases: [
          'Translational DOF: 3 (x, y, z motion)',
          'Rotational DOF: 2 for linear, 3 for non-linear',
          'Vibrational: 2 per mode (KE + PE)',
        ],
        dimensionalCheck: '[E] = J',
      },
      {
        id: 'internal-energy-gas',
        name: 'Internal Energy of Ideal Gas',
        category: 'derived',
        formula: 'U = (f/2)nRT',
        latex: 'U = \\frac{f}{2}nRT',
        description: 'Total internal energy of n moles of ideal gas',
        variables: [
          { symbol: 'U', meaning: 'Internal energy', unit: 'J', typical_values: 'kJ range' },
          { symbol: 'f', meaning: 'Degrees of freedom', unit: 'dimensionless', typical_values: '3, 5, 7' },
          { symbol: 'n', meaning: 'Number of moles', unit: 'mol', typical_values: '1-10 mol' },
        ],
        derivedFrom: 'equipartition-law',
        applications: [
          { name: 'Monatomic gas', latex: 'U = \\frac{3}{2}nRT', context: 'f = 3 (He, Ne, Ar)', neet_frequency: 'high' },
          { name: 'Diatomic gas', latex: 'U = \\frac{5}{2}nRT', context: 'f = 5 (O₂, N₂, H₂) at room T', neet_frequency: 'high' },
          { name: 'Triatomic linear', latex: 'U = \\frac{7}{2}nRT', context: 'f = 7 (CO₂) including vibration', neet_frequency: 'low' },
        ],
        specialCases: [
          'Internal energy depends only on T for ideal gas',
          'U ∝ T (linear relationship)',
          'ΔU = (f/2)nRΔT',
        ],
        dimensionalCheck: '[U] = [n][R][T] = J',
      },
      {
        id: 'degrees-of-freedom-values',
        name: 'Degrees of Freedom for Different Molecules',
        category: 'base',
        formula: 'f = 3 (mono), 5 (di), 6 (poly non-linear)',
        latex: 'f = \\begin{cases} 3 & \\text{monatomic} \\\\ 5 & \\text{diatomic (room T)} \\\\ 6 & \\text{polyatomic non-linear} \\end{cases}',
        description: 'Number of degrees of freedom for different molecular types',
        variables: [
          { symbol: 'f', meaning: 'Degrees of freedom', unit: 'dimensionless', typical_values: '3, 5, 6, 7' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'General formula', latex: 'f = 3N - c', context: 'N atoms, c constraints (advanced)', neet_frequency: 'low' },
        ],
        specialCases: [
          'Monatomic (He, Ne, Ar): f = 3',
          'Diatomic (O₂, N₂): f = 5 (room T), f = 7 (high T)',
          'Triatomic linear (CO₂): f = 5 + 2 = 7',
          'Triatomic non-linear (H₂O): f = 6',
        ],
        dimensionalCheck: 'f is dimensionless',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using f = 3 for all gases',
        correct: 'Monatomic: 3, Diatomic: 5, Polyatomic: 6 or more. Must identify molecular type.',
        whyItHappens: 'Not distinguishing between different molecular structures',
        neetExample: 'NEET 2020: Compare internal energy of He and O₂ at same T',
      },
      {
        mistake: 'Forgetting that diatomic has f = 7 at high temperature',
        correct: 'At room T, vibration is frozen, f = 5. At high T, vibration active, f = 7.',
        whyItHappens: 'Temperature dependence of DOF not remembered',
        neetExample: 'NEET 2019: DOF of N₂ at high temperature',
      },
      {
        mistake: 'Counting vibrational DOF as 1 instead of 2',
        correct: 'Each vibrational mode contributes 2 DOF (one for KE, one for PE)',
        whyItHappens: 'Thinking only about motion, forgetting potential energy',
        neetExample: 'NEET 2021: Total DOF for CO₂ including vibration',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate internal energy of gas', difficulty: 'easy' },
      { type: 'numerical', description: 'Compare energies of different gases', difficulty: 'medium' },
      { type: 'conceptual', description: 'Identify DOF for given molecule', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'DOF of different molecules', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Internal energy calculation', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022] },
      { pattern: 'Equipartition energy per DOF', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Degrees of freedom',
        analogy: 'Ways to exercise',
        mapping: 'Atom can only run (translate). Dumbbell can run + rotate. Complex shape can also flex (vibrate).',
      },
      {
        concept: 'Equipartition',
        analogy: 'Fair division of pizza',
        mapping: 'Energy (pizza) divided equally among all possible modes (people)',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Mean Free Path
  {
    id: 'mean-free-path',
    name: 'Mean Free Path',
    weightage: 0.5,
    difficulty: 'medium',
    
    theory: {
      summary: "Mean free path (λ) is the average distance a molecule travels between successive collisions. λ = 1/(√2 × πd²n) where d is molecular diameter and n is number density. It depends on molecular size, temperature, and pressure.",
      realWorldAnalogy: "Walking through a crowded room - how far can you walk before bumping into someone? Depends on room crowdedness (density) and how wide people are (molecular diameter).",
      keyPoints: [
        "λ = average distance between collisions",
        "λ = 1/(√2 × πd²n) where n = N/V",
        "λ ∝ T (at constant P)",
        "λ ∝ 1/P (at constant T)",
        "λ ∝ 1/d² (smaller molecules travel farther)",
        "Collision frequency = v_avg/λ",
      ],
      prerequisites: ['kinetic-theory-assumptions', 'kinetic-interpretation-temperature'],
    },
    
    formulas: [
      {
        id: 'mean-free-path-formula',
        name: 'Mean Free Path',
        category: 'base',
        formula: 'λ = 1/(√2 × πd²n) = kT/(√2 × πd²P)',
        latex: '\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n} = \\frac{k_B T}{\\sqrt{2}\\pi d^2 P}',
        description: 'Average distance traveled by a molecule between successive collisions',
        variables: [
          { symbol: 'λ', meaning: 'Mean free path', unit: 'm', typical_values: '10⁻⁸ to 10⁻⁵ m' },
          { symbol: 'd', meaning: 'Molecular diameter', unit: 'm', typical_values: '2-5 × 10⁻¹⁰ m' },
          { symbol: 'n', meaning: 'Number density (N/V)', unit: 'm⁻³', typical_values: '~10²⁵ m⁻³' },
          { symbol: 'P', meaning: 'Pressure', unit: 'Pa', typical_values: '10⁵ Pa' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'At constant P', latex: '\\lambda \\propto T', context: 'Higher T, molecules farther apart', neet_frequency: 'high' },
          { name: 'At constant T', latex: '\\lambda \\propto \\frac{1}{P}', context: 'Higher P, more crowded', neet_frequency: 'high' },
          { name: 'Molecular size effect', latex: '\\lambda \\propto \\frac{1}{d^2}', context: 'Smaller molecules travel farther', neet_frequency: 'medium' },
        ],
        specialCases: [
          'In vacuum (low P): λ → ∞',
          'At very high P: λ → 0',
          'λ for air at STP ≈ 10⁻⁷ m',
        ],
        dimensionalCheck: '[λ] = m',
      },
      {
        id: 'collision-frequency',
        name: 'Collision Frequency',
        category: 'derived',
        formula: 'f = v_avg/λ = √2 × πd²nv_avg',
        latex: 'f = \\frac{v_{avg}}{\\lambda} = \\sqrt{2}\\pi d^2 n v_{avg}',
        description: 'Number of collisions per unit time experienced by a molecule',
        variables: [
          { symbol: 'f', meaning: 'Collision frequency', unit: 's⁻¹ or Hz', typical_values: '10⁹ to 10¹⁰ s⁻¹' },
          { symbol: 'v_avg', meaning: 'Average speed', unit: 'm/s', typical_values: '400-500 m/s' },
        ],
        derivedFrom: 'mean-free-path-formula',
        applications: [
          { name: 'Time between collisions', latex: '\\tau = \\frac{1}{f} = \\frac{\\lambda}{v_{avg}}', context: 'Mean collision time', neet_frequency: 'medium' },
        ],
        specialCases: [
          'f ∝ P at constant T',
          'f ∝ √T at constant P (through v_avg)',
        ],
        dimensionalCheck: '[f] = s⁻¹',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting the √2 factor in mean free path formula',
        correct: 'λ = 1/(√2 × πd²n). The √2 comes from relative velocity consideration.',
        whyItHappens: 'Simplified derivation doesn\'t include relative motion of molecules',
        neetExample: 'NEET 2019: Calculate mean free path - must include √2',
      },
      {
        mistake: 'Wrong proportionality with T and P',
        correct: 'λ ∝ T at constant P. λ ∝ 1/P at constant T. At constant V: λ ∝ 1/T.',
        whyItHappens: 'Not identifying what is held constant',
        neetExample: 'NEET 2020: Effect of doubling temperature on mean free path',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate mean free path', difficulty: 'medium' },
      { type: 'numerical', description: 'Effect of T or P change on λ', difficulty: 'medium' },
      { type: 'conceptual', description: 'Factors affecting mean free path', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Proportionality of λ with T and P', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'Mean free path formula', frequency: 'medium', yearAsked: [2019, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Mean free path',
        analogy: 'Walking in a crowd',
        mapping: 'More people (higher density) or bigger people (larger d) = shorter distance before collision',
      },
    ],
    
    questions: [],
  },

  // Topic 6: Specific Heat Capacities of Gases
  {
    id: 'specific-heat-gases',
    name: 'Specific Heat Capacities of Gases (Cp and Cv)',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Gases have two specific heats: Cv (at constant volume) and Cp (at constant pressure). Cp > Cv because work is done at constant P. Cp - Cv = R (Mayer's relation). The ratio γ = Cp/Cv depends on molecular type and affects adiabatic processes.",
      realWorldAnalogy: "Heating air in a rigid container (Cv) vs flexible balloon (Cp). The balloon needs more heat because some energy goes into expanding work.",
      keyPoints: [
        "Cv = (f/2)R (heat at constant volume)",
        "Cp = Cv + R = ((f+2)/2)R (heat at constant pressure)",
        "Mayer's relation: Cp - Cv = R",
        "γ = Cp/Cv = 1 + 2/f",
        "Monatomic: γ = 5/3 = 1.67",
        "Diatomic: γ = 7/5 = 1.4",
        "Polyatomic: γ ≈ 4/3 = 1.33",
      ],
      prerequisites: ['degrees-of-freedom'],
    },
    
    formulas: [
      {
        id: 'cv-formula',
        name: 'Molar Heat Capacity at Constant Volume',
        category: 'base',
        formula: 'Cv = (f/2)R',
        latex: 'C_V = \\frac{f}{2}R',
        description: 'Heat capacity per mole at constant volume',
        variables: [
          { symbol: 'Cv', meaning: 'Molar heat capacity at constant V', unit: 'J/(mol·K)', typical_values: '12.5-25 J/(mol·K)' },
          { symbol: 'f', meaning: 'Degrees of freedom', unit: 'dimensionless', typical_values: '3, 5, 6' },
          { symbol: 'R', meaning: 'Gas constant', unit: 'J/(mol·K)', typical_values: '8.314' },
        ],
        derivedFrom: 'equipartition-law',
        applications: [
          { name: 'Monatomic', latex: 'C_V = \\frac{3}{2}R = 12.5 \\text{ J/(mol·K)}', context: 'f = 3', neet_frequency: 'high' },
          { name: 'Diatomic', latex: 'C_V = \\frac{5}{2}R = 20.8 \\text{ J/(mol·K)}', context: 'f = 5', neet_frequency: 'high' },
          { name: 'Heat added at const V', latex: 'Q = nC_V\\Delta T', context: 'No work done', neet_frequency: 'high' },
        ],
        specialCases: [
          'At constant V: all heat goes to internal energy',
          'ΔU = nCvΔT (always true for ideal gas)',
        ],
        dimensionalCheck: '[Cv] = J/(mol·K)',
      },
      {
        id: 'cp-formula',
        name: 'Molar Heat Capacity at Constant Pressure',
        category: 'derived',
        formula: 'Cp = Cv + R = ((f+2)/2)R',
        latex: 'C_P = C_V + R = \\frac{f+2}{2}R',
        description: 'Heat capacity per mole at constant pressure',
        variables: [
          { symbol: 'Cp', meaning: 'Molar heat capacity at constant P', unit: 'J/(mol·K)', typical_values: '20-35 J/(mol·K)' },
        ],
        derivedFrom: 'cv-formula',
        applications: [
          { name: 'Monatomic', latex: 'C_P = \\frac{5}{2}R = 20.8 \\text{ J/(mol·K)}', context: 'f = 3', neet_frequency: 'high' },
          { name: 'Diatomic', latex: 'C_P = \\frac{7}{2}R = 29.1 \\text{ J/(mol·K)}', context: 'f = 5', neet_frequency: 'high' },
          { name: 'Heat added at const P', latex: 'Q = nC_P\\Delta T', context: 'Includes work done', neet_frequency: 'high' },
        ],
        specialCases: [
          'At constant P: Q = ΔU + W = ΔU + PΔV',
          'Extra R accounts for expansion work',
        ],
        dimensionalCheck: '[Cp] = J/(mol·K)',
      },
      {
        id: 'mayers-relation',
        name: 'Mayer\'s Relation',
        category: 'base',
        formula: 'Cp - Cv = R',
        latex: 'C_P - C_V = R',
        description: 'Universal relation between Cp and Cv for ideal gases',
        variables: [
          { symbol: 'R', meaning: 'Universal gas constant', unit: 'J/(mol·K)', typical_values: '8.314' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Find Cv from Cp', latex: 'C_V = C_P - R', context: 'If Cp is known', neet_frequency: 'high' },
          { name: 'Verify ideal gas', latex: 'C_P - C_V = R \\text{ (test)}', context: 'Deviation indicates real gas', neet_frequency: 'low' },
        ],
        specialCases: [
          'Holds only for ideal gases',
          'For real gases: Cp - Cv > R',
        ],
        dimensionalCheck: '[Cp - Cv] = [R] = J/(mol·K)',
      },
      {
        id: 'gamma-ratio',
        name: 'Ratio of Specific Heats (γ)',
        category: 'derived',
        formula: 'γ = Cp/Cv = 1 + 2/f',
        latex: '\\gamma = \\frac{C_P}{C_V} = 1 + \\frac{2}{f}',
        description: 'Ratio of specific heats, important for adiabatic processes',
        variables: [
          { symbol: 'γ', meaning: 'Adiabatic exponent', unit: 'dimensionless', typical_values: '1.33 to 1.67' },
        ],
        derivedFrom: 'cv-formula',
        applications: [
          { name: 'Monatomic', latex: '\\gamma = \\frac{5}{3} = 1.67', context: 'f = 3 (He, Ar, Ne)', neet_frequency: 'high' },
          { name: 'Diatomic', latex: '\\gamma = \\frac{7}{5} = 1.4', context: 'f = 5 (O₂, N₂, Air)', neet_frequency: 'high' },
          { name: 'Polyatomic', latex: '\\gamma = \\frac{4}{3} = 1.33', context: 'f = 6 (H₂O, NH₃)', neet_frequency: 'medium' },
          { name: 'Adiabatic process', latex: 'PV^\\gamma = \\text{constant}', context: 'Critical for adiabatic', neet_frequency: 'high' },
        ],
        specialCases: [
          'γ > 1 always (Cp > Cv)',
          'γ decreases as f increases',
          'Range: 1 < γ ≤ 5/3',
        ],
        dimensionalCheck: 'γ is dimensionless',
      },
      {
        id: 'gamma-relations',
        name: 'Useful γ Relations',
        category: 'derived',
        formula: 'Cv = R/(γ-1), Cp = γR/(γ-1)',
        latex: 'C_V = \\frac{R}{\\gamma - 1}, \\quad C_P = \\frac{\\gamma R}{\\gamma - 1}',
        description: 'Express Cv and Cp in terms of γ',
        variables: [],
        derivedFrom: 'gamma-ratio',
        applications: [
          { name: 'From γ to Cv', latex: 'C_V = \\frac{R}{\\gamma - 1}', context: 'If only γ is given', neet_frequency: 'high' },
          { name: 'From γ to Cp', latex: 'C_P = \\frac{\\gamma R}{\\gamma - 1}', context: 'If only γ is given', neet_frequency: 'high' },
          { name: 'Internal energy', latex: 'U = \\frac{PV}{\\gamma - 1}', context: 'From equation of state', neet_frequency: 'medium' },
        ],
        specialCases: [
          'These are frequently used to find Cv, Cp when γ is given',
        ],
        dimensionalCheck: '[Cv] = [R] = J/(mol·K)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing Cp and Cv - using wrong one',
        correct: 'Cv at constant volume (no work). Cp at constant pressure (includes expansion work). Cp > Cv.',
        whyItHappens: 'Similar symbols, not remembering which is larger',
        neetExample: 'NEET 2020: Heat required to raise temperature at constant V vs P',
      },
      {
        mistake: 'Applying Mayer\'s relation to real gases',
        correct: 'Cp - Cv = R only for ideal gases. Real gases deviate.',
        whyItHappens: 'Universal application without checking conditions',
        neetExample: 'NEET 2019: Why Cp - Cv > R for real gases?',
      },
      {
        mistake: 'Using wrong γ for gas type',
        correct: 'Monatomic: 5/3, Diatomic: 7/5, Polyatomic: 4/3. Must identify molecular structure.',
        whyItHappens: 'Not relating γ to molecular structure',
        neetExample: 'NEET 2021: γ for O₂ vs He vs CO₂',
      },
      {
        mistake: 'Thinking γ can be less than 1',
        correct: 'γ = Cp/Cv > 1 always (since Cp > Cv). Range: 1 < γ ≤ 5/3',
        whyItHappens: 'Mathematical error or conceptual confusion',
        neetExample: 'NEET 2022: Valid range of γ',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate Cp, Cv, γ from DOF', difficulty: 'easy' },
      { type: 'numerical', description: 'Find Cv from γ and vice versa', difficulty: 'medium' },
      { type: 'conceptual', description: 'Why Cp > Cv?', difficulty: 'easy' },
      { type: 'numerical', description: 'Heat required at constant P vs V', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'γ values for different gases', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Mayer\'s relation application', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Cv, Cp in terms of γ', frequency: 'medium', yearAsked: [2018, 2021, 2022] },
      { pattern: 'Cv, Cp in terms of f', frequency: 'high', yearAsked: [2019, 2020, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Why Cp > Cv',
        analogy: 'Heating water in open vs closed pot',
        mapping: 'Open pot (const P): heat needed for temp rise + pushing lid up (work)',
      },
      {
        concept: 'γ and molecular complexity',
        analogy: 'Dividing pizza among more people',
        mapping: 'More DOF = energy spread more ways = smaller share per mode = smaller γ',
      },
    ],
    
    questions: [],
  },
];

