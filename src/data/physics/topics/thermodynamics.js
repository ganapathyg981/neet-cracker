// Thermodynamics - 2% weightage (Tier 3)
// NCERT Class 11, Chapter 12

export const thermodynamicsTopics = [
  // Topic 1: Laws of Thermodynamics
  {
    id: 'first-law-thermodynamics',
    name: 'First Law of Thermodynamics',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "First law states energy conservation: ΔU = Q - W. Heat added to system either increases internal energy or does work. For ideal gas: ΔU depends only on temperature change. Sign convention: Q +ve when heat added, W +ve when work done BY system.",
      realWorldAnalogy: "Like a bank account - deposits (heat in) either increase savings (internal energy) or are spent (work done).",
      keyPoints: [
        "First law: ΔU = Q - W (or Q = ΔU + W)",
        "Q: heat added to system (+ve in, -ve out)",
        "W: work done BY system (+ve out, -ve on)",
        "ΔU: change in internal energy",
        "For ideal gas: ΔU = nCᵥΔT",
        "W = ∫PdV (work from P-V diagram)",
      ],
      prerequisites: ['heat-transfer-basics'],
    },
    
    formulas: [
      {
        id: 'first-law',
        name: 'First Law of Thermodynamics',
        category: 'base',
        formula: 'ΔU = Q - W',
        latex: '\\Delta U = Q - W',
        description: 'Energy conservation for thermodynamic systems',
        variables: [
          { symbol: 'ΔU', meaning: 'Change in internal energy', unit: 'J', typical_values: 'J to kJ' },
          { symbol: 'Q', meaning: 'Heat added to system', unit: 'J', typical_values: '+ve if in' },
          { symbol: 'W', meaning: 'Work done BY system', unit: 'J', typical_values: '+ve if by system' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Isothermal process', latex: '\\Delta U = 0, Q = W', context: 'T constant, ideal gas', neet_frequency: 'high' },
          { name: 'Adiabatic process', latex: 'Q = 0, \\Delta U = -W', context: 'No heat exchange', neet_frequency: 'high' },
          { name: 'Isochoric process', latex: 'W = 0, \\Delta U = Q', context: 'V constant', neet_frequency: 'high' },
          { name: 'Isobaric process', latex: 'W = P\\Delta V, Q = \\Delta U + P\\Delta V', context: 'P constant', neet_frequency: 'high' },
        ],
        specialCases: [
          'Cyclic process: ΔU = 0, Q = W',
          'Free expansion: W = 0, Q = 0, ΔU = 0',
        ],
        dimensionalCheck: '[U] = [Q] = [W] = J',
      },
      {
        id: 'work-pv',
        name: 'Work Done by Gas',
        category: 'derived',
        formula: 'W = ∫PdV',
        latex: 'W = \\int P\\,dV',
        description: 'Work done by gas equals area under P-V curve',
        variables: [
          { symbol: 'W', meaning: 'Work done', unit: 'J', typical_values: 'Area under curve' },
          { symbol: 'P', meaning: 'Pressure', unit: 'Pa', typical_values: '10³ - 10⁶ Pa' },
          { symbol: 'V', meaning: 'Volume', unit: 'm³', typical_values: '10⁻³ - 1 m³' },
        ],
        derivedFrom: 'first-law',
        applications: [
          { name: 'Isobaric', latex: 'W = P\\Delta V = P(V_2 - V_1)', context: 'Constant pressure', neet_frequency: 'high' },
          { name: 'Isothermal', latex: 'W = nRT\\ln\\frac{V_2}{V_1}', context: 'Constant temperature', neet_frequency: 'high' },
          { name: 'Adiabatic', latex: 'W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}', context: 'No heat exchange', neet_frequency: 'medium' },
        ],
        specialCases: [
          'W > 0 for expansion (V₂ > V₁)',
          'W < 0 for compression (V₂ < V₁)',
        ],
        dimensionalCheck: '[W] = [P][V] = Pa × m³ = J',
      },
      {
        id: 'internal-energy',
        name: 'Internal Energy Change',
        category: 'derived',
        formula: 'ΔU = nCᵥΔT',
        latex: '\\Delta U = nC_V \\Delta T',
        description: 'Internal energy change for ideal gas',
        variables: [
          { symbol: 'n', meaning: 'Number of moles', unit: 'mol', typical_values: '1-10 mol' },
          { symbol: 'Cᵥ', meaning: 'Molar heat capacity at constant V', unit: 'J/(mol·K)', typical_values: '3R/2 to 5R/2' },
          { symbol: 'ΔT', meaning: 'Temperature change', unit: 'K', typical_values: '10-100 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Monoatomic gas', latex: 'C_V = \\frac{3R}{2}', context: 'He, Ar, Ne', neet_frequency: 'high' },
          { name: 'Diatomic gas', latex: 'C_V = \\frac{5R}{2}', context: 'N₂, O₂, H₂', neet_frequency: 'high' },
        ],
        specialCases: [
          'ΔU depends only on ΔT for ideal gas',
          'Path independent (state function)',
        ],
        dimensionalCheck: '[ΔU] = [n][Cᵥ][ΔT] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Wrong sign for W in first law',
        correct: 'Q = ΔU + W uses work BY system (+ve expansion). Some books use Q = ΔU - W with W as work ON system.',
        whyItHappens: 'Different sign conventions in different books',
        neetExample: 'NEET 2020: Gas expands doing 200J work, absorbs 500J heat. Find ΔU.',
      },
      {
        mistake: 'Thinking ΔU = 0 for all processes',
        correct: 'ΔU = 0 only for isothermal (ideal gas) or cyclic processes',
        whyItHappens: 'Overgeneralizing special cases',
        neetExample: 'NEET 2019: ΔU for adiabatic compression',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Apply first law to various processes', difficulty: 'medium' },
      { type: 'numerical', description: 'Work from P-V diagram', difficulty: 'medium' },
      { type: 'conceptual', description: 'Compare different processes', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'First law application', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Work in different processes', frequency: 'high', yearAsked: [2019, 2021, 2022] },
    ],
    
    analogies: [
      {
        concept: 'First law',
        analogy: 'Bank account',
        mapping: 'Deposits (Q) = savings increase (ΔU) + spending (W)',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Carnot Engine and Efficiency
  {
    id: 'carnot-engine',
    name: 'Heat Engines and Carnot Cycle',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Heat engine converts heat to work. Efficiency η = W/Q₁ = 1 - Q₂/Q₁. Carnot engine has maximum possible efficiency η = 1 - T₂/T₁ operating between temperatures T₁ (hot) and T₂ (cold). Real engines always have lower efficiency.",
      realWorldAnalogy: "Like a water wheel - water falls from high to low level (temperature), some energy is extracted as work. Can never capture all the energy.",
      keyPoints: [
        "Efficiency: η = W/Q₁ = 1 - Q₂/Q₁",
        "Carnot efficiency: η_carnot = 1 - T₂/T₁",
        "η_real ≤ η_carnot always",
        "η cannot be 100% (Kelvin-Planck statement)",
        "Refrigerator COP = Q₂/W = T₂/(T₁ - T₂)",
        "Carnot cycle: 2 isothermal + 2 adiabatic processes",
      ],
      prerequisites: ['first-law-thermodynamics'],
    },
    
    formulas: [
      {
        id: 'efficiency',
        name: 'Heat Engine Efficiency',
        category: 'base',
        formula: 'η = W/Q₁ = 1 - Q₂/Q₁',
        latex: '\\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1}',
        description: 'Efficiency of heat engine',
        variables: [
          { symbol: 'η', meaning: 'Efficiency', unit: 'dimensionless', typical_values: '0-1 (0-100%)' },
          { symbol: 'W', meaning: 'Work output', unit: 'J', typical_values: 'Q₁ - Q₂' },
          { symbol: 'Q₁', meaning: 'Heat absorbed from hot reservoir', unit: 'J', typical_values: '+ve' },
          { symbol: 'Q₂', meaning: 'Heat rejected to cold reservoir', unit: 'J', typical_values: '+ve' },
        ],
        derivedFrom: 'first-law',
        applications: [
          { name: 'Work output', latex: 'W = Q_1 - Q_2', context: 'First law for cyclic process', neet_frequency: 'high' },
        ],
        specialCases: [
          'η < 1 always (cannot be 100%)',
          'Higher η means less heat wasted',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
      {
        id: 'carnot-efficiency',
        name: 'Carnot Engine Efficiency',
        category: 'derived',
        formula: 'η = 1 - T₂/T₁',
        latex: '\\eta_{Carnot} = 1 - \\frac{T_2}{T_1}',
        description: 'Maximum possible efficiency between two temperatures',
        variables: [
          { symbol: 'T₁', meaning: 'Hot reservoir temperature', unit: 'K', typical_values: '300-1000 K' },
          { symbol: 'T₂', meaning: 'Cold reservoir temperature', unit: 'K', typical_values: '300 K (ambient)' },
        ],
        derivedFrom: 'efficiency',
        applications: [
          { name: 'Heat ratio', latex: '\\frac{Q_2}{Q_1} = \\frac{T_2}{T_1}', context: 'For Carnot engine', neet_frequency: 'high' },
          { name: 'If T₂ = 0K', latex: '\\eta = 1 (100\\%)', context: 'Impossible to achieve', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Temperatures MUST be in Kelvin',
          'η → 1 as T₂ → 0 (impossible)',
        ],
        dimensionalCheck: 'Dimensionless',
      },
      {
        id: 'cop-refrigerator',
        name: 'Coefficient of Performance (Refrigerator)',
        category: 'derived',
        formula: 'COP = Q₂/W = T₂/(T₁ - T₂)',
        latex: 'COP = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}',
        description: 'Effectiveness of refrigerator/heat pump',
        variables: [
          { symbol: 'COP', meaning: 'Coefficient of performance', unit: 'dimensionless', typical_values: '2-10' },
          { symbol: 'Q₂', meaning: 'Heat removed from cold reservoir', unit: 'J', typical_values: '+ve' },
          { symbol: 'W', meaning: 'Work input', unit: 'J', typical_values: '+ve' },
        ],
        derivedFrom: 'carnot-efficiency',
        applications: [
          { name: 'COP can be > 1', latex: 'COP > 1', context: 'More heat moved than work done', neet_frequency: 'medium' },
        ],
        specialCases: [
          'COP ≠ efficiency (can exceed 1)',
          'Lower temperature difference = higher COP',
        ],
        dimensionalCheck: 'Dimensionless',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using Celsius instead of Kelvin in efficiency formula',
        correct: 'η = 1 - T₂/T₁ requires absolute temperature (Kelvin)',
        whyItHappens: 'Forgetting to convert to Kelvin',
        neetExample: 'NEET 2020: Efficiency of Carnot engine between 127°C and 27°C',
      },
      {
        mistake: 'Thinking Carnot engine is 100% efficient',
        correct: 'Carnot efficiency < 100% unless T₂ = 0K (impossible)',
        whyItHappens: 'Idealizing "perfect" engine',
        neetExample: 'NEET 2019: Maximum possible efficiency',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate Carnot efficiency', difficulty: 'easy' },
      { type: 'numerical', description: 'Work and heat in engine', difficulty: 'medium' },
      { type: 'numerical', description: 'COP of refrigerator', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Carnot efficiency calculation', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022, 2023] },
      { pattern: 'Heat and work in engine', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Carnot efficiency',
        analogy: 'Waterfall energy extraction',
        mapping: 'Taller waterfall (larger T difference) = more energy extractable',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Thermodynamic Processes
  {
    id: 'thermodynamic-processes',
    name: 'Thermodynamic Processes',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Four main processes: Isothermal (T constant, PV = constant), Adiabatic (Q = 0, PVᵞ = constant), Isobaric (P constant), Isochoric (V constant). Each has different P-V relations, work expressions, and heat-energy relationships. Polytropic process: PVⁿ = constant generalizes all.",
      realWorldAnalogy: "Isothermal: slow inflation of balloon (heat escapes to maintain temp). Adiabatic: quick pump action (no time for heat transfer). Isobaric: piston with weight. Isochoric: rigid sealed container.",
      keyPoints: [
        "Isothermal: T = const, ΔU = 0, Q = W = nRT ln(V₂/V₁)",
        "Adiabatic: Q = 0, ΔU = -W, PVᵞ = const, TVᵞ⁻¹ = const",
        "Isobaric: P = const, W = PΔV, Q = nCₚΔT",
        "Isochoric: V = const, W = 0, Q = nCᵥΔT = ΔU",
        "γ = Cₚ/Cᵥ (ratio of specific heats)",
        "Monoatomic: γ = 5/3, Diatomic: γ = 7/5",
      ],
      prerequisites: ['first-law-thermodynamics'],
    },
    
    formulas: [
      {
        id: 'isothermal-process',
        name: 'Isothermal Process',
        category: 'base',
        formula: 'PV = constant, W = nRT ln(V₂/V₁)',
        latex: 'PV = nRT = \\text{const}, \\quad W = nRT\\ln\\frac{V_2}{V_1} = nRT\\ln\\frac{P_1}{P_2}',
        description: 'Process at constant temperature',
        variables: [
          { symbol: 'T', meaning: 'Constant temperature', unit: 'K', typical_values: '300-500 K' },
          { symbol: 'W', meaning: 'Work done by gas', unit: 'J', typical_values: 'Can be + or -' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'ΔU = 0', latex: '\\Delta U = 0 \\Rightarrow Q = W', context: 'Internal energy unchanged', neet_frequency: 'high' },
          { name: 'Expansion', latex: 'W > 0 \\text{ if } V_2 > V_1', context: 'Work done BY gas', neet_frequency: 'high' },
          { name: 'Compression', latex: 'W < 0 \\text{ if } V_2 < V_1', context: 'Work done ON gas', neet_frequency: 'high' },
        ],
        specialCases: [
          'Heat added = work done (Q = W)',
          'Very slow process (quasi-static)',
        ],
        dimensionalCheck: '[W] = [nRT] = J',
      },
      {
        id: 'adiabatic-process',
        name: 'Adiabatic Process',
        category: 'base',
        formula: 'PVᵞ = constant, Q = 0',
        latex: 'PV^\\gamma = \\text{const}, \\quad TV^{\\gamma-1} = \\text{const}, \\quad T^\\gamma P^{1-\\gamma} = \\text{const}',
        description: 'Process with no heat exchange',
        variables: [
          { symbol: 'γ', meaning: 'Cₚ/Cᵥ ratio', unit: 'dimensionless', typical_values: '5/3 (mono), 7/5 (di)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Work done', latex: 'W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}', context: 'From first law: W = -ΔU', neet_frequency: 'high' },
          { name: 'Expansion cools', latex: 'T_2 < T_1 \\text{ if } V_2 > V_1', context: 'Temperature drops', neet_frequency: 'high' },
          { name: 'Compression heats', latex: 'T_2 > T_1 \\text{ if } V_2 < V_1', context: 'Temperature rises', neet_frequency: 'high' },
        ],
        specialCases: [
          'Steeper than isothermal on P-V diagram',
          'Fast process (no time for heat transfer)',
          'ΔU = -W (all work from internal energy)',
        ],
        dimensionalCheck: '[PVᵞ] = Pa × m³ᵞ',
      },
      {
        id: 'isobaric-process',
        name: 'Isobaric Process',
        category: 'base',
        formula: 'P = constant, W = PΔV',
        latex: 'P = \\text{const}, \\quad W = P\\Delta V = P(V_2 - V_1) = nR\\Delta T',
        description: 'Process at constant pressure',
        variables: [
          { symbol: 'P', meaning: 'Constant pressure', unit: 'Pa', typical_values: '10⁵ Pa' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Heat added', latex: 'Q = nC_p\\Delta T', context: 'Use Cₚ not Cᵥ', neet_frequency: 'high' },
          { name: 'First law', latex: 'Q = \\Delta U + W = nC_V\\Delta T + nR\\Delta T = nC_p\\Delta T', context: 'Cₚ = Cᵥ + R', neet_frequency: 'high' },
          { name: 'V/T = constant', latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}', context: 'Charles law', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Horizontal line on P-V diagram',
          'More heat needed than isochoric for same ΔT',
        ],
        dimensionalCheck: '[W] = [P][ΔV] = J',
      },
      {
        id: 'isochoric-process',
        name: 'Isochoric (Isometric) Process',
        category: 'base',
        formula: 'V = constant, W = 0',
        latex: 'V = \\text{const}, \\quad W = 0, \\quad Q = \\Delta U = nC_V\\Delta T',
        description: 'Process at constant volume',
        variables: [
          { symbol: 'V', meaning: 'Constant volume', unit: 'm³', typical_values: 'Fixed container' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'All heat to ΔU', latex: 'Q = \\Delta U = nC_V\\Delta T', context: 'No work done', neet_frequency: 'high' },
          { name: 'P/T = constant', latex: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2}', context: 'Gay-Lussac law', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Vertical line on P-V diagram',
          'Easiest process: W = 0',
        ],
        dimensionalCheck: '[Q] = [ΔU] = J',
      },
      {
        id: 'specific-heats',
        name: 'Specific Heats of Gases',
        category: 'derived',
        formula: 'Cₚ - Cᵥ = R, γ = Cₚ/Cᵥ',
        latex: 'C_p - C_V = R, \\quad \\gamma = \\frac{C_p}{C_V}',
        description: 'Relation between molar specific heats',
        variables: [
          { symbol: 'Cₚ', meaning: 'Molar specific heat at constant P', unit: 'J/(mol·K)', typical_values: '5R/2 to 7R/2' },
          { symbol: 'Cᵥ', meaning: 'Molar specific heat at constant V', unit: 'J/(mol·K)', typical_values: '3R/2 to 5R/2' },
          { symbol: 'R', meaning: 'Gas constant', unit: 'J/(mol·K)', typical_values: '8.314 J/(mol·K)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Monoatomic', latex: 'C_V = \\frac{3R}{2}, C_p = \\frac{5R}{2}, \\gamma = \\frac{5}{3}', context: 'He, Ne, Ar', neet_frequency: 'high' },
          { name: 'Diatomic', latex: 'C_V = \\frac{5R}{2}, C_p = \\frac{7R}{2}, \\gamma = \\frac{7}{5}', context: 'N₂, O₂, H₂', neet_frequency: 'high' },
          { name: 'From γ', latex: 'C_V = \\frac{R}{\\gamma - 1}, C_p = \\frac{\\gamma R}{\\gamma - 1}', context: 'Derive from γ', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Cₚ > Cᵥ always (extra energy for work)',
          'γ > 1 always',
        ],
        dimensionalCheck: '[C] = J/(mol·K)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using wrong C (Cₚ vs Cᵥ) for the process',
        correct: 'Isobaric: use Cₚ. Isochoric: use Cᵥ. For ΔU always use Cᵥ.',
        whyItHappens: 'Confusing which applies when',
        neetExample: 'NEET 2020: Heat in isobaric vs isochoric heating',
      },
      {
        mistake: 'Confusing adiabatic exponent γ values',
        correct: 'Monoatomic γ = 5/3 ≈ 1.67. Diatomic γ = 7/5 = 1.4.',
        whyItHappens: 'Mixing up molecular types',
        neetExample: 'NEET 2019: γ for He vs N₂',
      },
      {
        mistake: 'Wrong sign for work in adiabatic compression',
        correct: 'Compression: W < 0 (work done ON gas). ΔU > 0, T increases.',
        whyItHappens: 'Not applying W = -ΔU correctly',
        neetExample: 'NEET 2021: Temperature change in adiabatic compression',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Work in isothermal process', difficulty: 'medium' },
      { type: 'numerical', description: 'Final T in adiabatic process', difficulty: 'medium' },
      { type: 'numerical', description: 'Heat in isobaric process', difficulty: 'medium' },
      { type: 'graphical', description: 'P-V diagram analysis', difficulty: 'medium' },
      { type: 'conceptual', description: 'Compare processes', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Adiabatic process calculations', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Work from P-V diagram', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Cₚ/Cᵥ and γ problems', frequency: 'high', yearAsked: [2018, 2020, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Isothermal',
        analogy: 'Slow balloon inflation',
        mapping: 'So slow that temperature stays same - heat escapes as fast as work is done',
      },
      {
        concept: 'Adiabatic',
        analogy: 'Bike pump getting hot',
        mapping: 'Quick compression - no time for heat to escape, so temperature rises',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Second Law of Thermodynamics
  {
    id: 'second-law-thermodynamics',
    name: 'Second Law of Thermodynamics',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Second law sets direction of spontaneous processes. Kelvin-Planck: No engine can be 100% efficient (some heat must be rejected). Clausius: Heat cannot spontaneously flow from cold to hot. Both are equivalent. Entropy always increases in irreversible processes. Reversible processes have maximum efficiency.",
      realWorldAnalogy: "Heat always flows from hot coffee to cold room, never reverse. You can't make a car engine that converts all fuel energy to motion - some is always wasted as exhaust heat.",
      keyPoints: [
        "Kelvin-Planck: No 100% efficient heat engine",
        "Clausius: Heat doesn't flow cold → hot spontaneously",
        "Entropy S increases in irreversible processes (ΔS_universe ≥ 0)",
        "Reversible process: ΔS_universe = 0",
        "Irreversible process: ΔS_universe > 0",
        "Real processes are always irreversible",
      ],
      prerequisites: ['first-law-thermodynamics', 'carnot-engine'],
    },
    
    formulas: [
      {
        id: 'entropy-change',
        name: 'Entropy Change',
        category: 'base',
        formula: 'ΔS = Q_rev/T',
        latex: '\\Delta S = \\int \\frac{dQ_{rev}}{T}',
        description: 'Change in entropy for reversible process',
        variables: [
          { symbol: 'ΔS', meaning: 'Change in entropy', unit: 'J/K', typical_values: '1 to 100 J/K' },
          { symbol: 'Q_rev', meaning: 'Heat in reversible process', unit: 'J', typical_values: '100 to 10⁶ J' },
          { symbol: 'T', meaning: 'Absolute temperature', unit: 'K', typical_values: '300-1000 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Isothermal', latex: '\\Delta S = \\frac{Q}{T} = nR\\ln\\frac{V_2}{V_1}', context: 'Constant temperature', neet_frequency: 'medium' },
          { name: 'Heating at const V', latex: '\\Delta S = nC_V\\ln\\frac{T_2}{T_1}', context: 'Isochoric heating', neet_frequency: 'medium' },
          { name: 'Heating at const P', latex: '\\Delta S = nC_p\\ln\\frac{T_2}{T_1}', context: 'Isobaric heating', neet_frequency: 'medium' },
        ],
        specialCases: [
          'ΔS is state function (path independent)',
          'Adiabatic reversible: ΔS = 0 (isentropic)',
        ],
        dimensionalCheck: '[ΔS] = [Q]/[T] = J/K',
      },
      {
        id: 'entropy-universe',
        name: 'Entropy of Universe',
        category: 'derived',
        formula: 'ΔS_universe = ΔS_system + ΔS_surroundings ≥ 0',
        latex: '\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} \\geq 0',
        description: 'Total entropy never decreases',
        variables: [
          { symbol: 'ΔS_universe', meaning: 'Total entropy change', unit: 'J/K', typical_values: '≥ 0' },
        ],
        derivedFrom: 'entropy-change',
        applications: [
          { name: 'Reversible', latex: '\\Delta S_{universe} = 0', context: 'Ideal process', neet_frequency: 'medium' },
          { name: 'Irreversible', latex: '\\Delta S_{universe} > 0', context: 'Real process', neet_frequency: 'medium' },
          { name: 'Heat flow', latex: '\\Delta S = Q\\left(\\frac{1}{T_{cold}} - \\frac{1}{T_{hot}}\\right) > 0', context: 'Hot to cold', neet_frequency: 'medium' },
        ],
        specialCases: [
          'ΔS_system can be negative if ΔS_surroundings compensates',
          'Universe = system + surroundings',
        ],
        dimensionalCheck: '[ΔS] = J/K',
      },
      {
        id: 'irreversibility',
        name: 'Causes of Irreversibility',
        category: 'conceptual',
        formula: 'Friction, free expansion, heat transfer across finite ΔT',
        latex: '\\Delta S_{irr} > 0',
        description: 'Factors that make processes irreversible',
        variables: [],
        derivedFrom: null,
        applications: [
          { name: 'Free expansion', latex: '\\Delta S = nR\\ln\\frac{V_2}{V_1} > 0', context: 'Gas expands into vacuum', neet_frequency: 'medium' },
          { name: 'Heat conduction', latex: '\\Delta S > 0', context: 'Across temp difference', neet_frequency: 'low' },
        ],
        specialCases: [
          'All real processes have some irreversibility',
          'Friction always increases entropy',
        ],
        dimensionalCheck: 'N/A',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking entropy of a system can never decrease',
        correct: 'System entropy CAN decrease if surroundings entropy increases more. UNIVERSE entropy never decreases.',
        whyItHappens: 'Confusing system with universe',
        neetExample: 'NEET 2020: Entropy change when gas is compressed',
      },
      {
        mistake: 'Thinking 100% efficiency is possible with good design',
        correct: 'Second law forbids 100% efficiency. Even ideal Carnot engine is <100% unless T_cold = 0K',
        whyItHappens: 'Not accepting fundamental limitation',
        neetExample: 'NEET 2019: Maximum theoretical efficiency',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Statements of second law', difficulty: 'easy' },
      { type: 'numerical', description: 'Entropy change calculation', difficulty: 'medium' },
      { type: 'conceptual', description: 'Identify reversible vs irreversible', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Kelvin-Planck and Clausius statements', frequency: 'medium', yearAsked: [2018, 2019, 2021, 2023] },
      { pattern: 'Entropy change problems', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Reversibility conditions', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Entropy increase',
        analogy: 'Room getting messy',
        mapping: 'Without effort, rooms get messier (higher entropy), not neater. Order requires work.',
      },
      {
        concept: 'Kelvin-Planck statement',
        analogy: 'You can\'t win completely',
        mapping: 'Like a tax on energy conversion - some always goes to waste heat',
      },
    ],
    
    questions: [],
  },

  // Topic 5: PV Diagrams and Cyclic Processes
  {
    id: 'pv-diagrams-cycles',
    name: 'PV Diagrams and Cyclic Processes',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "P-V diagrams show thermodynamic processes. Work = area under curve (positive for clockwise, negative for anticlockwise). In cyclic process, ΔU = 0 so Q = W = area enclosed. Heat engines run clockwise, refrigerators anticlockwise. Different paths between same states have same ΔU but different Q and W.",
      realWorldAnalogy: "Like a lap around a track - you end where you started (same state), but you've done work during the journey. The area enclosed is the net work done.",
      keyPoints: [
        "Work = ∫PdV = area under P-V curve",
        "Clockwise cycle: W > 0 (engine)",
        "Anticlockwise cycle: W < 0 (refrigerator)",
        "Cyclic process: ΔU = 0, so Q = W = area enclosed",
        "Steeper adiabatic curve than isothermal",
        "Different paths: same ΔU, different W and Q",
      ],
      prerequisites: ['thermodynamic-processes', 'first-law-thermodynamics'],
    },
    
    formulas: [
      {
        id: 'work-from-pv',
        name: 'Work from P-V Diagram',
        category: 'base',
        formula: 'W = ∫PdV = Area under curve',
        latex: 'W = \\int P\\,dV = \\text{Area under curve}',
        description: 'Work done by gas equals area under P-V curve',
        variables: [
          { symbol: 'W', meaning: 'Work done by gas', unit: 'J', typical_values: 'Area in Pa×m³' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Expansion (V₂ > V₁)', latex: 'W > 0', context: 'Work done BY gas', neet_frequency: 'high' },
          { name: 'Compression (V₂ < V₁)', latex: 'W < 0', context: 'Work done ON gas', neet_frequency: 'high' },
          { name: 'Cyclic process', latex: 'W_{cycle} = \\oint P\\,dV = \\text{enclosed area}', context: 'Net work = enclosed area', neet_frequency: 'high' },
        ],
        specialCases: [
          'Isochoric: W = 0 (vertical line, no area)',
          'Isobaric: W = P(V₂ - V₁) (rectangle)',
        ],
        dimensionalCheck: '[W] = [P][V] = Pa × m³ = J',
      },
      {
        id: 'cyclic-process',
        name: 'Cyclic Process',
        category: 'derived',
        formula: 'ΔU = 0, Q = W = enclosed area',
        latex: '\\Delta U_{cycle} = 0, \\quad Q_{cycle} = W_{cycle} = \\text{enclosed area}',
        description: 'For complete cycle, system returns to initial state',
        variables: [
          { symbol: 'ΔU_cycle', meaning: 'Change in internal energy', unit: 'J', typical_values: '0' },
          { symbol: 'W_cycle', meaning: 'Net work done', unit: 'J', typical_values: 'Enclosed area' },
        ],
        derivedFrom: 'first-law',
        applications: [
          { name: 'Clockwise cycle', latex: 'W > 0', context: 'Heat engine', neet_frequency: 'high' },
          { name: 'Anticlockwise cycle', latex: 'W < 0', context: 'Refrigerator/heat pump', neet_frequency: 'high' },
          { name: 'Triangular cycle', latex: 'W = \\frac{1}{2} \\times base \\times height', context: 'Triangle area', neet_frequency: 'high' },
        ],
        specialCases: [
          'State function (U) unchanged after cycle',
          'Path functions (Q, W) accumulate over cycle',
        ],
        dimensionalCheck: '[W] = [Q] = J',
      },
      {
        id: 'slope-comparison',
        name: 'Slopes on P-V Diagram',
        category: 'derived',
        formula: 'Adiabatic steeper than isothermal',
        latex: '\\left|\\frac{dP}{dV}\\right|_{adiabatic} = \\gamma \\left|\\frac{dP}{dV}\\right|_{isothermal}',
        description: 'Comparison of process curves on P-V diagram',
        variables: [
          { symbol: 'dP/dV', meaning: 'Slope of P-V curve', unit: 'Pa/m³', typical_values: 'Negative (decreasing)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Isothermal slope', latex: '\\frac{dP}{dV} = -\\frac{P}{V}', context: 'From PV = const', neet_frequency: 'medium' },
          { name: 'Adiabatic slope', latex: '\\frac{dP}{dV} = -\\gamma\\frac{P}{V}', context: 'From PVᵞ = const', neet_frequency: 'medium' },
        ],
        specialCases: [
          'γ > 1, so adiabatic is steeper',
          'Adiabatic and isothermal can intersect only once',
        ],
        dimensionalCheck: '[dP/dV] = Pa/m³',
      },
      {
        id: 'mixed-cycle',
        name: 'Work in Mixed Cycles',
        category: 'derived',
        formula: 'W_total = W₁ + W₂ + W₃ + ...',
        latex: 'W_{total} = \\sum W_i = \\text{(areas of expansion)} - \\text{(areas of compression)}',
        description: 'Total work in multi-step process',
        variables: [
          { symbol: 'W_total', meaning: 'Net work', unit: 'J', typical_values: 'Algebraic sum' },
        ],
        derivedFrom: 'work-from-pv',
        applications: [
          { name: 'Rectangular cycle', latex: 'W = (P_2 - P_1)(V_2 - V_1)', context: 'Rectangle area', neet_frequency: 'high' },
          { name: 'General polygon', latex: 'W = \\sum (\\text{trapezoid areas})', context: 'Split into simpler shapes', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Sign depends on direction (CW vs CCW)',
          'Can use geometry for regular shapes',
        ],
        dimensionalCheck: '[W] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Getting wrong sign for cyclic work',
        correct: 'Clockwise cycle: W > 0 (engine). Anticlockwise: W < 0 (refrigerator).',
        whyItHappens: 'Not paying attention to cycle direction',
        neetExample: 'NEET 2020: Work in anticlockwise cycle',
      },
      {
        mistake: 'Thinking ΔU depends on path',
        correct: 'ΔU depends only on initial and final states, not path. Different paths give same ΔU.',
        whyItHappens: 'Confusing state and path functions',
        neetExample: 'NEET 2019: ΔU for different paths between same states',
      },
      {
        mistake: 'Forgetting to include all process contributions',
        correct: 'Total work = sum of work in each step. Include all processes in cycle.',
        whyItHappens: 'Missing one leg of the cycle',
        neetExample: 'NEET 2021: Net work in three-step cycle',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate work from P-V diagram', difficulty: 'medium' },
      { type: 'graphical', description: 'Identify process type from curve', difficulty: 'easy' },
      { type: 'numerical', description: 'Efficiency of cycle', difficulty: 'hard' },
      { type: 'conceptual', description: 'Compare paths between same states', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Work = area under/enclosed by curve', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Cyclic process (ΔU = 0)', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Compare isothermal and adiabatic', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Work = area under curve',
        analogy: 'Distance = area under velocity-time graph',
        mapping: 'Just as v-t area gives distance, P-V area gives work',
      },
      {
        concept: 'Cyclic process',
        analogy: 'Round trip journey',
        mapping: 'End where you started (same state), but fuel was consumed during the trip (work done)',
      },
    ],
    
    questions: [],
  },
];

