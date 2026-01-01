// Thermal Properties of Matter - 1% weightage (Tier 3)
// NCERT Class 11, Chapter 11

export const thermalPropertiesTopics = [
  // Topic 1: Thermal Expansion
  {
    id: 'thermal-expansion',
    name: 'Thermal Expansion',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "When heated, solids expand in all dimensions. Linear expansion: ΔL = αLΔT. Area expansion: ΔA = βAΔT where β = 2α. Volume expansion: ΔV = γVΔT where γ = 3α. Liquids only show volume expansion. Water shows anomalous expansion (densest at 4°C).",
      realWorldAnalogy: "Railway tracks have gaps between sections - in summer, steel expands and needs room to grow without buckling. Bridges have expansion joints for the same reason.",
      keyPoints: [
        "Linear: ΔL = αLΔT (α = coefficient of linear expansion)",
        "Area: ΔA = βAΔT (β = 2α)",
        "Volume: ΔV = γVΔT (γ = 3α)",
        "Relation: γ = 3α = 3β/2",
        "Liquids: apparent γ = γ_liquid - γ_container",
        "Water: anomalous expansion, maximum density at 4°C",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'linear-expansion',
        name: 'Linear Expansion',
        category: 'base',
        formula: 'ΔL = αLΔT or L = L₀(1 + αΔT)',
        latex: '\\Delta L = \\alpha L \\Delta T \\quad \\text{or} \\quad L = L_0(1 + \\alpha\\Delta T)',
        description: 'Change in length of solid with temperature',
        variables: [
          { symbol: 'α', meaning: 'Coefficient of linear expansion', unit: '/°C or /K', typical_values: '10⁻⁶ to 10⁻⁵ /K' },
          { symbol: 'L₀', meaning: 'Original length', unit: 'm', typical_values: '0.1 to 10 m' },
          { symbol: 'ΔT', meaning: 'Temperature change', unit: '°C or K', typical_values: '1 to 100 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Thermal stress (fixed ends)', latex: '\\sigma = Y\\alpha\\Delta T', context: 'When rod cannot expand', neet_frequency: 'high' },
          { name: 'Bimetallic strip', latex: '', context: 'Different α causes bending', neet_frequency: 'medium' },
          { name: 'Clock error', latex: '\\Delta t = \\frac{1}{2}\\alpha \\Delta T \\cdot t', context: 'Pendulum clock', neet_frequency: 'medium' },
        ],
        specialCases: [
          'α is nearly constant over moderate temperature ranges',
          'Metals: α ≈ 10⁻⁵ /K, Glass: ≈ 10⁻⁶ /K',
        ],
        dimensionalCheck: '[ΔL] = [α][L][ΔT] = /K × m × K = m',
      },
      {
        id: 'area-expansion',
        name: 'Area Expansion',
        category: 'derived',
        formula: 'ΔA = βAΔT = 2αAΔT',
        latex: '\\Delta A = \\beta A \\Delta T = 2\\alpha A \\Delta T',
        description: 'Change in area of solid with temperature',
        variables: [
          { symbol: 'β', meaning: 'Coefficient of area expansion', unit: '/K', typical_values: '2α' },
          { symbol: 'A', meaning: 'Original area', unit: 'm²', typical_values: 'm²' },
        ],
        derivedFrom: 'linear-expansion',
        applications: [
          { name: 'Hole in plate', latex: 'A_{hole} = A_0(1 + \\beta\\Delta T)', context: 'Hole expands too!', neet_frequency: 'high' },
          { name: 'Coefficient relation', latex: '\\beta = 2\\alpha', context: 'Area = L²', neet_frequency: 'high' },
        ],
        specialCases: [
          'Hole expands same as if solid material were there',
          'β = 2α (derived from A = L², expand both L)',
        ],
        dimensionalCheck: '[ΔA] = [β][A][ΔT] = m²',
      },
      {
        id: 'volume-expansion',
        name: 'Volume Expansion',
        category: 'derived',
        formula: 'ΔV = γVΔT = 3αVΔT',
        latex: '\\Delta V = \\gamma V \\Delta T = 3\\alpha V \\Delta T',
        description: 'Change in volume with temperature',
        variables: [
          { symbol: 'γ', meaning: 'Coefficient of volume expansion', unit: '/K', typical_values: '3α for solids' },
          { symbol: 'V', meaning: 'Original volume', unit: 'm³', typical_values: 'cm³ to m³' },
        ],
        derivedFrom: 'linear-expansion',
        applications: [
          { name: 'Solids', latex: '\\gamma = 3\\alpha', context: 'V = L³', neet_frequency: 'high' },
          { name: 'Apparent expansion (liquid)', latex: '\\gamma_{app} = \\gamma_L - \\gamma_C', context: 'Relative to container', neet_frequency: 'high' },
          { name: 'Density change', latex: '\\rho = \\frac{\\rho_0}{1 + \\gamma\\Delta T}', context: 'As V increases, ρ decreases', neet_frequency: 'high' },
        ],
        specialCases: [
          'Liquids have only γ (no α or β)',
          'γ_water ≈ 2.1 × 10⁻⁴ /K at 20°C',
        ],
        dimensionalCheck: '[ΔV] = [γ][V][ΔT] = m³',
      },
      {
        id: 'thermal-stress',
        name: 'Thermal Stress',
        category: 'derived',
        formula: 'σ = YαΔT',
        latex: '\\sigma = Y\\alpha\\Delta T',
        description: 'Stress developed when expansion is prevented',
        variables: [
          { symbol: 'σ', meaning: 'Thermal stress', unit: 'Pa', typical_values: '10⁶ to 10⁸ Pa' },
          { symbol: 'Y', meaning: "Young's modulus", unit: 'Pa', typical_values: '10¹⁰ to 10¹¹ Pa' },
        ],
        derivedFrom: 'linear-expansion',
        applications: [
          { name: 'Force developed', latex: 'F = YA\\alpha\\Delta T', context: 'Force = stress × area', neet_frequency: 'high' },
          { name: 'Energy stored', latex: 'U = \\frac{1}{2}Y(\\alpha\\Delta T)^2 V', context: 'Strain energy', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Very large forces can develop',
          'Why hot water on cold glass cracks it',
        ],
        dimensionalCheck: '[σ] = [Y][α][ΔT] = Pa',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking holes contract when heated',
        correct: 'Holes expand just like the material would. Think of the material as stretching uniformly.',
        whyItHappens: 'Intuition that material expands into hole',
        neetExample: 'NEET 2020: Diameter of hole in heated plate',
      },
      {
        mistake: 'Using wrong coefficient relation (β = α, γ = α)',
        correct: 'β = 2α (area), γ = 3α (volume). Not equal!',
        whyItHappens: 'Forgetting the multiplicative factors',
        neetExample: 'NEET 2019: Relation between α, β, γ',
      },
      {
        mistake: 'Ignoring container expansion for liquids',
        correct: 'Apparent expansion = γ_liquid - γ_container. Container also expands!',
        whyItHappens: 'Assuming container is rigid',
        neetExample: 'NEET 2021: Mercury in glass thermometer',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate linear expansion', difficulty: 'easy' },
      { type: 'numerical', description: 'Thermal stress problems', difficulty: 'medium' },
      { type: 'numerical', description: 'Apparent vs real expansion', difficulty: 'medium' },
      { type: 'conceptual', description: 'Expansion of holes and cavities', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Linear/area/volume expansion', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Thermal stress in rod', frequency: 'medium', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Relation between α, β, γ', frequency: 'high', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Thermal expansion',
        analogy: 'Inflating a balloon',
        mapping: 'Everything gets bigger proportionally - holes, gaps, all dimensions',
      },
      {
        concept: 'Thermal stress',
        analogy: 'Trying to expand in a tight box',
        mapping: 'If you can\'t expand, you push against constraints with great force',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Calorimetry
  {
    id: 'calorimetry',
    name: 'Calorimetry',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Calorimetry deals with heat exchange. Q = mcΔT for temperature change, Q = mL for phase change (L = latent heat). At thermal equilibrium, heat lost = heat gained. Specific heat varies with substance. Water has high specific heat (4186 J/kg·K).",
      realWorldAnalogy: "Mixing hot and cold water - the hot water cools down and cold water heats up until they reach the same temperature. Total heat stays constant.",
      keyPoints: [
        "Heat capacity: Q = mcΔT (m = mass, c = specific heat)",
        "Latent heat: Q = mL (L = latent heat of fusion/vaporization)",
        "Principle of calorimetry: heat lost = heat gained",
        "Water: c = 4186 J/kg·K, L_f = 3.34 × 10⁵ J/kg, L_v = 2.26 × 10⁶ J/kg",
        "Molar heat capacity: C = Mc (M = molar mass)",
        "Specific heat at constant P (Cₚ) > at constant V (Cᵥ)",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'specific-heat',
        name: 'Specific Heat Capacity',
        category: 'base',
        formula: 'Q = mcΔT',
        latex: 'Q = mc\\Delta T',
        description: 'Heat required to change temperature',
        variables: [
          { symbol: 'Q', meaning: 'Heat energy', unit: 'J', typical_values: '100 to 10⁶ J' },
          { symbol: 'm', meaning: 'Mass', unit: 'kg', typical_values: '0.01 to 10 kg' },
          { symbol: 'c', meaning: 'Specific heat capacity', unit: 'J/(kg·K)', typical_values: '100-4200 J/(kg·K)' },
          { symbol: 'ΔT', meaning: 'Temperature change', unit: 'K or °C', typical_values: '1-100 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Thermal capacity', latex: 'C = mc', context: 'Heat per unit temp change', neet_frequency: 'medium' },
          { name: 'Mixture temperature', latex: 'T_f = \\frac{m_1c_1T_1 + m_2c_2T_2}{m_1c_1 + m_2c_2}', context: 'Final equilibrium temp', neet_frequency: 'high' },
        ],
        specialCases: [
          'c_water = 4186 J/(kg·K) (highest of common substances)',
          '1 cal = 4.186 J',
        ],
        dimensionalCheck: '[Q] = [m][c][ΔT] = kg × J/(kg·K) × K = J',
      },
      {
        id: 'latent-heat',
        name: 'Latent Heat',
        category: 'base',
        formula: 'Q = mL',
        latex: 'Q = mL',
        description: 'Heat for phase change at constant temperature',
        variables: [
          { symbol: 'L', meaning: 'Specific latent heat', unit: 'J/kg', typical_values: '10⁵ to 10⁶ J/kg' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Fusion (melting)', latex: 'Q = mL_f', context: 'L_f = 3.34 × 10⁵ J/kg for ice', neet_frequency: 'high' },
          { name: 'Vaporization', latex: 'Q = mL_v', context: 'L_v = 2.26 × 10⁶ J/kg for water', neet_frequency: 'high' },
          { name: 'Ice to steam', latex: 'Q = mL_f + mc\\Delta T + mL_v', context: 'Multi-step heating', neet_frequency: 'high' },
        ],
        specialCases: [
          'Temperature constant during phase change',
          'L_v > L_f (more energy to vaporize)',
        ],
        dimensionalCheck: '[Q] = [m][L] = kg × J/kg = J',
      },
      {
        id: 'principle-calorimetry',
        name: 'Principle of Calorimetry',
        category: 'base',
        formula: 'Heat lost = Heat gained',
        latex: '\\sum Q_{lost} = \\sum Q_{gained}',
        description: 'Conservation of energy in heat exchange',
        variables: [
          { symbol: 'Q_lost', meaning: 'Heat released by hotter body', unit: 'J', typical_values: 'Positive' },
          { symbol: 'Q_gained', meaning: 'Heat absorbed by colder body', unit: 'J', typical_values: 'Positive' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Mixing liquids', latex: 'm_1c_1(T_1 - T_f) = m_2c_2(T_f - T_2)', context: 'Find final temp', neet_frequency: 'high' },
          { name: 'With phase change', latex: 'm_1L + m_1c\\Delta T_1 = m_2c\\Delta T_2', context: 'Ice melting in water', neet_frequency: 'high' },
        ],
        specialCases: [
          'No heat loss to surroundings (adiabatic)',
          'Check if phase change occurs',
        ],
        dimensionalCheck: '[Q] = J',
      },
      {
        id: 'water-equivalent',
        name: 'Water Equivalent',
        category: 'derived',
        formula: 'W = mc/c_water',
        latex: 'W = \\frac{mc}{c_{water}}',
        description: 'Mass of water with same thermal capacity',
        variables: [
          { symbol: 'W', meaning: 'Water equivalent', unit: 'kg', typical_values: 'Depends on material' },
          { symbol: 'c_water', meaning: 'Specific heat of water', unit: 'J/(kg·K)', typical_values: '4186 J/(kg·K)' },
        ],
        derivedFrom: 'specific-heat',
        applications: [
          { name: 'Calorimeter', latex: 'W_{cal} = m_{cal}c_{cal}/c_w', context: 'Account for calorimeter heat', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Water equivalent of water = its mass',
          'Useful for comparing thermal capacities',
        ],
        dimensionalCheck: '[W] = kg',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting phase change requires latent heat, not mcΔT',
        correct: 'At melting/boiling point, use Q = mL. Temperature stays constant during phase change.',
        whyItHappens: 'Applying mcΔT to all heating',
        neetExample: 'NEET 2020: Heat to convert ice at 0°C to water at 0°C',
      },
      {
        mistake: 'Not checking if final state is valid',
        correct: 'Check if calculated T is physically possible. If mixing ice and water gives T < 0°C, some ice remains.',
        whyItHappens: 'Blindly applying formula without checking',
        neetExample: 'NEET 2019: Mixing ice and water - final state',
      },
      {
        mistake: 'Using wrong sign convention for heat',
        correct: 'Heat lost by hot body = heat gained by cold body. Both are positive in the equation.',
        whyItHappens: 'Confusion about sign of heat',
        neetExample: 'NEET 2021: Calorimetry calculation',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Final temperature of mixture', difficulty: 'medium' },
      { type: 'numerical', description: 'Heat for phase change', difficulty: 'easy' },
      { type: 'numerical', description: 'Ice-water mixture problems', difficulty: 'hard' },
      { type: 'conceptual', description: 'Why L_v > L_f', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Mixing problems (final temp)', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Phase change calculations', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Ice-water problems', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Specific heat',
        analogy: 'Thermal stubbornness',
        mapping: 'High specific heat = stubbornly resists temperature change (like water)',
      },
      {
        concept: 'Latent heat',
        analogy: 'Hidden energy for transformation',
        mapping: 'Energy goes into breaking bonds (melting) or escaping (vaporizing), not raising temperature',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Heat Transfer - Conduction
  {
    id: 'heat-conduction',
    name: 'Heat Transfer: Conduction',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Conduction is heat transfer through material without bulk motion. Rate: Q/t = KA(T₁-T₂)/L. K is thermal conductivity. Metals are good conductors, gases are poor. Thermal resistance R = L/(KA). Series: R_total = R₁ + R₂. Parallel: 1/R = 1/R₁ + 1/R₂.",
      realWorldAnalogy: "Metal spoon in hot soup gets hot at the handle - heat conducts from soup through metal. Wooden spoon stays cool because wood is a poor conductor.",
      keyPoints: [
        "Fourier's law: Q/t = KA(ΔT)/L",
        "K = thermal conductivity (W/(m·K))",
        "Thermal resistance: R = L/(KA)",
        "Series: R_total = R₁ + R₂",
        "Parallel: 1/R = 1/R₁ + 1/R₂",
        "Temperature gradient: dT/dx = -Q/(KA)",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'fouriers-law',
        name: "Fourier's Law of Conduction",
        category: 'base',
        formula: 'Q/t = KA(T₁-T₂)/L',
        latex: '\\frac{Q}{t} = \\frac{KA(T_1 - T_2)}{L}',
        description: 'Rate of heat conduction through a material',
        variables: [
          { symbol: 'Q/t', meaning: 'Heat flow rate', unit: 'W', typical_values: '1 to 10⁴ W' },
          { symbol: 'K', meaning: 'Thermal conductivity', unit: 'W/(m·K)', typical_values: '0.01-400 W/(m·K)' },
          { symbol: 'A', meaning: 'Cross-sectional area', unit: 'm²', typical_values: '10⁻⁴ to 1 m²' },
          { symbol: 'L', meaning: 'Length/thickness', unit: 'm', typical_values: '10⁻³ to 1 m' },
          { symbol: 'T₁-T₂', meaning: 'Temperature difference', unit: 'K', typical_values: '1-100 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Through wall', latex: 'P = \\frac{KA\\Delta T}{L}', context: 'Steady state', neet_frequency: 'high' },
          { name: 'Temperature gradient', latex: '\\frac{dT}{dx} = -\\frac{P}{KA}', context: 'Rate of temp change', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Metals: K ~ 50-400 W/(m·K)',
          'Insulators: K ~ 0.01-1 W/(m·K)',
        ],
        dimensionalCheck: '[Q/t] = [K][A][ΔT]/[L] = W',
      },
      {
        id: 'thermal-resistance',
        name: 'Thermal Resistance',
        category: 'derived',
        formula: 'R = L/(KA)',
        latex: 'R = \\frac{L}{KA}',
        description: 'Resistance to heat flow (like electrical resistance)',
        variables: [
          { symbol: 'R', meaning: 'Thermal resistance', unit: 'K/W', typical_values: '10⁻³ to 10 K/W' },
        ],
        derivedFrom: 'fouriers-law',
        applications: [
          { name: 'Heat flow', latex: 'P = \\frac{\\Delta T}{R}', context: 'Ohm\'s law analogy', neet_frequency: 'high' },
          { name: 'Series', latex: 'R_{total} = R_1 + R_2 + ...', context: 'Layers in series', neet_frequency: 'high' },
          { name: 'Parallel', latex: '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}', context: 'Parallel paths', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Series: same heat flow through all layers',
          'Parallel: same temperature drop across paths',
        ],
        dimensionalCheck: '[R] = [L]/([K][A]) = K/W',
      },
      {
        id: 'series-conduction',
        name: 'Series Combination',
        category: 'derived',
        formula: 'K_eff = (L₁+L₂)/(L₁/K₁ + L₂/K₂)',
        latex: 'K_{eff} = \\frac{L_1 + L_2}{\\frac{L_1}{K_1} + \\frac{L_2}{K_2}}',
        description: 'Effective conductivity for layers in series',
        variables: [
          { symbol: 'K_eff', meaning: 'Effective conductivity', unit: 'W/(m·K)', typical_values: 'Between K₁ and K₂' },
        ],
        derivedFrom: 'thermal-resistance',
        applications: [
          { name: 'Interface temperature', latex: 'T_{interface} = T_1 - \\frac{P L_1}{K_1 A}', context: 'Between layers', neet_frequency: 'high' },
          { name: 'Equal thickness', latex: 'K_{eff} = \\frac{2K_1K_2}{K_1+K_2}', context: 'L₁ = L₂', neet_frequency: 'high' },
        ],
        specialCases: [
          'K_eff is harmonic mean weighted by thickness',
          'Always K_eff < K_max',
        ],
        dimensionalCheck: '[K] = W/(m·K)',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using arithmetic mean for series K',
        correct: 'Series uses harmonic mean: K_eff = (L₁+L₂)/(L₁/K₁ + L₂/K₂)',
        whyItHappens: 'Confusion with parallel combination',
        neetExample: 'NEET 2020: Effective K for two layers',
      },
      {
        mistake: 'Forgetting area in thermal resistance',
        correct: 'R = L/(KA). Larger area = less resistance',
        whyItHappens: 'Treating R as just L/K',
        neetExample: 'NEET 2019: Compare heat flow through different cross-sections',
      },
      {
        mistake: 'Wrong temperature at interface',
        correct: 'Use: T_interface = T₁ - (Q/t)(L₁/K₁A) or proportion by R',
        whyItHappens: 'Assuming temperature drop is uniform',
        neetExample: 'NEET 2021: Temperature between two slabs',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Heat flow through slab', difficulty: 'easy' },
      { type: 'numerical', description: 'Series combination of slabs', difficulty: 'medium' },
      { type: 'numerical', description: 'Temperature at interface', difficulty: 'medium' },
      { type: 'conceptual', description: 'Thermal vs electrical analogy', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Heat conduction rate', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Series/parallel slabs', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Interface temperature', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Thermal conduction',
        analogy: 'Electrical circuit',
        mapping: 'Heat flow ~ Current, Temp difference ~ Voltage, R_thermal ~ R_electrical',
      },
      {
        concept: 'Thermal conductivity',
        analogy: 'How easily heat flows through',
        mapping: 'High K = highway for heat (metals). Low K = obstacle course (insulators)',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Heat Transfer - Convection
  {
    id: 'heat-convection',
    name: 'Heat Transfer: Convection',
    weightage: 0,
    difficulty: 'easy',
    
    theory: {
      summary: "Convection is heat transfer by bulk fluid motion. Natural convection driven by buoyancy (hot fluid rises). Forced convection uses external means (fans, pumps). Newton's law of cooling: dT/dt = -k(T - T₀). Land-sea breezes and atmospheric circulation are examples.",
      realWorldAnalogy: "Boiling water - hot water at bottom rises, cool water at top sinks, creating circulation. Room heater warms air which rises, pulling in cooler air.",
      keyPoints: [
        "Natural convection: driven by density differences (hot rises)",
        "Forced convection: external agency moves fluid",
        "Newton's law of cooling: rate ∝ temperature difference",
        "dT/dt = -k(T - T₀) or T = T₀ + (T₁ - T₀)e^(-kt)",
        "Examples: land-sea breeze, room heating, car radiator",
        "Convection only in fluids (liquids and gases)",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'newtons-law-cooling',
        name: "Newton's Law of Cooling",
        category: 'base',
        formula: 'dT/dt = -k(T - T₀)',
        latex: '\\frac{dT}{dt} = -k(T - T_0)',
        description: 'Rate of cooling proportional to temperature excess',
        variables: [
          { symbol: 'dT/dt', meaning: 'Rate of temperature change', unit: 'K/s', typical_values: '0.01 to 1 K/s' },
          { symbol: 'k', meaning: 'Cooling constant', unit: '/s', typical_values: '10⁻³ to 10⁻¹ /s' },
          { symbol: 'T₀', meaning: 'Surrounding temperature', unit: 'K', typical_values: 'Room temp' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Exponential decay', latex: 'T = T_0 + (T_1 - T_0)e^{-kt}', context: 'Temperature vs time', neet_frequency: 'high' },
          { name: 'Average form', latex: '\\frac{T_1 - T_2}{t} = k\\left(\\frac{T_1 + T_2}{2} - T_0\\right)', context: 'Approximate calculation', neet_frequency: 'high' },
          { name: 'Time to cool', latex: 't = \\frac{1}{k}\\ln\\frac{T_1 - T_0}{T_2 - T_0}', context: 'From T₁ to T₂', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Valid when T - T₀ is not too large',
          'k depends on surface, fluid, and flow',
        ],
        dimensionalCheck: '[dT/dt] = [k][ΔT] = K/s',
      },
      {
        id: 'convection-rate',
        name: 'Convective Heat Transfer',
        category: 'base',
        formula: 'Q/t = hA(T - T₀)',
        latex: '\\frac{Q}{t} = hA(T - T_0)',
        description: 'Rate of heat loss by convection',
        variables: [
          { symbol: 'h', meaning: 'Convective heat transfer coefficient', unit: 'W/(m²·K)', typical_values: '5-25 (natural), 25-250 (forced)' },
          { symbol: 'A', meaning: 'Surface area', unit: 'm²', typical_values: 'Exposed area' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Natural convection', latex: 'h \\approx 5-25 \\text{ W/(m}^2\\text{K)}', context: 'Still air', neet_frequency: 'low' },
          { name: 'Forced convection', latex: 'h \\approx 25-250 \\text{ W/(m}^2\\text{K)}', context: 'Moving air', neet_frequency: 'low' },
        ],
        specialCases: [
          'h much higher for forced convection',
          'h depends on fluid properties and flow',
        ],
        dimensionalCheck: '[Q/t] = [h][A][ΔT] = W',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using T instead of (T - T₀) in cooling law',
        correct: 'Rate depends on temperature EXCESS above surroundings, not absolute temperature',
        whyItHappens: 'Forgetting the role of surroundings',
        neetExample: 'NEET 2020: Cooling rate at different temperatures',
      },
      {
        mistake: 'Assuming Newton cooling valid for large ΔT',
        correct: 'Newton\'s law is approximate, valid for small temperature differences. Large ΔT needs radiation too.',
        whyItHappens: 'Overapplying the simple formula',
        neetExample: 'NEET 2019: When Newton cooling fails',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Apply Newton cooling law', difficulty: 'medium' },
      { type: 'numerical', description: 'Time to cool to given temperature', difficulty: 'medium' },
      { type: 'conceptual', description: 'Natural vs forced convection', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: "Newton's law of cooling", frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Cooling time calculation', frequency: 'medium', yearAsked: [2019, 2021, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Convection',
        analogy: 'Conveyor belt for heat',
        mapping: 'Fluid physically carries heat from one place to another, like a conveyor belt',
      },
      {
        concept: "Newton's cooling",
        analogy: 'Bigger difference = faster equalization',
        mapping: 'Like water flow: bigger pressure difference = faster flow. Bigger temp difference = faster heat flow',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Heat Transfer - Radiation
  {
    id: 'heat-radiation',
    name: 'Heat Transfer: Radiation',
    weightage: 0,
    difficulty: 'medium',
    
    theory: {
      summary: "Radiation is heat transfer by electromagnetic waves, requiring no medium. Stefan-Boltzmann law: P = σAT⁴ (σ = 5.67 × 10⁻⁸ W/m²K⁴). Wien's law: λₘₐₓT = b (b = 2.9 × 10⁻³ m·K). Blackbody is perfect absorber/emitter. Emissivity e = power emitted/blackbody power.",
      realWorldAnalogy: "Feel warmth from a bonfire without touching - heat reaches you as infrared radiation. Sun heats Earth through 150 million km of empty space.",
      keyPoints: [
        "Stefan-Boltzmann: P = εσAT⁴ (for non-blackbody)",
        "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
        "Wien's displacement law: λₘₐₓT = 2.9 × 10⁻³ m·K",
        "Net radiation: P_net = εσA(T⁴ - T₀⁴)",
        "Kirchhoff's law: good absorbers are good emitters",
        "Emissivity: e = 1 for blackbody, < 1 for others",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'stefan-boltzmann',
        name: 'Stefan-Boltzmann Law',
        category: 'base',
        formula: 'P = εσAT⁴',
        latex: 'P = \\varepsilon\\sigma AT^4',
        description: 'Power radiated by a body',
        variables: [
          { symbol: 'P', meaning: 'Radiated power', unit: 'W', typical_values: '1-10⁴ W' },
          { symbol: 'ε', meaning: 'Emissivity', unit: 'dimensionless', typical_values: '0-1 (1 for blackbody)' },
          { symbol: 'σ', meaning: 'Stefan-Boltzmann constant', unit: 'W/(m²K⁴)', typical_values: '5.67 × 10⁻⁸' },
          { symbol: 'A', meaning: 'Surface area', unit: 'm²', typical_values: '10⁻³ to 10 m²' },
          { symbol: 'T', meaning: 'Absolute temperature', unit: 'K', typical_values: '300-6000 K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Blackbody (ε = 1)', latex: 'P = \\sigma AT^4', context: 'Perfect emitter', neet_frequency: 'high' },
          { name: 'Net radiation', latex: 'P_{net} = \\varepsilon\\sigma A(T^4 - T_0^4)', context: 'Hot body in surroundings', neet_frequency: 'high' },
          { name: 'Power ratio', latex: '\\frac{P_1}{P_2} = \\left(\\frac{T_1}{T_2}\\right)^4', context: 'Same body at different T', neet_frequency: 'high' },
        ],
        specialCases: [
          'P ∝ T⁴ (very sensitive to temperature)',
          'Must use absolute temperature (Kelvin)',
        ],
        dimensionalCheck: '[P] = [σ][A][T⁴] = W',
      },
      {
        id: 'wiens-law',
        name: "Wien's Displacement Law",
        category: 'base',
        formula: 'λₘₐₓT = b',
        latex: '\\lambda_{max} T = b = 2.9 \\times 10^{-3} \\text{ m·K}',
        description: 'Peak wavelength inversely proportional to temperature',
        variables: [
          { symbol: 'λₘₐₓ', meaning: 'Wavelength at maximum intensity', unit: 'm', typical_values: '10⁻⁷ to 10⁻⁵ m' },
          { symbol: 'b', meaning: "Wien's constant", unit: 'm·K', typical_values: '2.9 × 10⁻³' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Sun (T ≈ 6000K)', latex: '\\lambda_{max} \\approx 500 \\text{ nm}', context: 'Visible light peak', neet_frequency: 'high' },
          { name: 'Human body (T ≈ 310K)', latex: '\\lambda_{max} \\approx 9.4 \\text{ μm}', context: 'Infrared radiation', neet_frequency: 'medium' },
          { name: 'Temperature from λ', latex: 'T = \\frac{b}{\\lambda_{max}}', context: 'Estimate stellar temp', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Hotter = shorter wavelength (bluer)',
          'Cooler = longer wavelength (redder)',
        ],
        dimensionalCheck: '[λ][T] = m·K',
      },
      {
        id: 'kirchhoffs-law',
        name: "Kirchhoff's Law of Radiation",
        category: 'base',
        formula: 'e/a = E (constant for all bodies)',
        latex: '\\frac{e}{a} = E \\text{ (emissive power of blackbody at same T)}',
        description: 'Good absorbers are good emitters',
        variables: [
          { symbol: 'e', meaning: 'Emissive power', unit: 'W/m²', typical_values: 'Body dependent' },
          { symbol: 'a', meaning: 'Absorptivity', unit: 'dimensionless', typical_values: '0-1' },
          { symbol: 'E', meaning: 'Blackbody emissive power', unit: 'W/m²', typical_values: 'σT⁴' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For blackbody', latex: 'a = e = 1', context: 'Perfect absorber = perfect emitter', neet_frequency: 'medium' },
          { name: 'Practical implication', latex: '', context: 'Dark objects radiate more', neet_frequency: 'low' },
        ],
        specialCases: [
          'Blackbody: a = ε = 1',
          'At thermal equilibrium: absorption rate = emission rate',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using Celsius in Stefan-Boltzmann law',
        correct: 'P = σAT⁴ requires T in Kelvin. T⁴ is very different in K vs °C!',
        whyItHappens: 'Forgetting that absolute temperature is required',
        neetExample: 'NEET 2020: Power radiated at 27°C vs 127°C',
      },
      {
        mistake: 'Forgetting T⁰⁴ in net radiation',
        correct: 'Net power = εσA(T⁴ - T₀⁴). Body also absorbs radiation from surroundings.',
        whyItHappens: 'Ignoring absorption from surroundings',
        neetExample: 'NEET 2019: Net heat loss by radiation',
      },
      {
        mistake: 'Confusing λₘₐₓ shift direction',
        correct: 'Higher T → smaller λₘₐₓ (shifts to blue/UV). Lower T → larger λₘₐₓ (shifts to red/IR)',
        whyItHappens: 'Getting inverse relationship backwards',
        neetExample: 'NEET 2021: Color change of heated metal',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Power radiated calculation', difficulty: 'easy' },
      { type: 'numerical', description: 'Net radiation in surroundings', difficulty: 'medium' },
      { type: 'numerical', description: "Apply Wien's law", difficulty: 'easy' },
      { type: 'conceptual', description: 'Compare radiation at different temperatures', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Stefan-Boltzmann law (P ∝ T⁴)', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2023] },
      { pattern: "Wien's displacement law", frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Net radiation problems', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'T⁴ dependence',
        analogy: 'Explosive sensitivity',
        mapping: 'Double T → 16× radiation. Small temperature change makes big difference',
      },
      {
        concept: "Wien's law",
        analogy: 'Color of heated metal',
        mapping: 'Cold metal: invisible IR. Heat: red glow. More heat: orange → yellow → white',
      },
    ],
    
    questions: [],
  },

  // Topic 6: Anomalous Expansion of Water
  {
    id: 'anomalous-expansion-water',
    name: 'Anomalous Expansion of Water',
    weightage: 0,
    difficulty: 'easy',
    
    theory: {
      summary: "Water shows anomalous behavior: it contracts when heated from 0°C to 4°C, then expands normally. Maximum density at 4°C. This allows aquatic life to survive in frozen lakes - ice floats and water at 4°C stays at bottom. Due to hydrogen bonding structure changes.",
      realWorldAnalogy: "In winter, lake surfaces freeze but fish survive in liquid water at the bottom (at 4°C). If ice sank, entire lake would freeze solid from bottom up.",
      keyPoints: [
        "Water is densest at 4°C (ρ ≈ 1000 kg/m³)",
        "0-4°C: contracts on heating (anomalous)",
        "Above 4°C: expands on heating (normal)",
        "Ice is less dense than water (floats)",
        "ρ_ice ≈ 917 kg/m³ < ρ_water = 1000 kg/m³",
        "Due to hydrogen bonding structure",
      ],
      prerequisites: ['thermal-expansion'],
    },
    
    formulas: [
      {
        id: 'water-density-temp',
        name: 'Water Density vs Temperature',
        category: 'base',
        formula: 'ρₘₐₓ at T = 4°C',
        latex: '\\rho_{max} \\text{ at } T = 4°C',
        description: 'Maximum density of water at 4°C',
        variables: [
          { symbol: 'ρₘₐₓ', meaning: 'Maximum density', unit: 'kg/m³', typical_values: '1000 kg/m³' },
          { symbol: 'T', meaning: 'Temperature', unit: '°C', typical_values: '4°C' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Lake stratification', latex: '', context: 'Dense 4°C water sinks to bottom', neet_frequency: 'medium' },
          { name: 'Ice floats', latex: '\\frac{\\rho_{ice}}{\\rho_{water}} = \\frac{917}{1000} = 0.917', context: '92% submerged', neet_frequency: 'high' },
        ],
        specialCases: [
          'Only significant near 0-4°C',
          'Above 4°C, γ is positive (normal expansion)',
        ],
        dimensionalCheck: '[ρ] = kg/m³',
      },
      {
        id: 'fraction-submerged-ice',
        name: 'Fraction of Ice Submerged',
        category: 'derived',
        formula: 'V_sub/V = ρ_ice/ρ_water ≈ 0.92',
        latex: '\\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{ice}}{\\rho_{water}} \\approx 0.92',
        description: 'About 92% of floating ice is underwater',
        variables: [
          { symbol: 'ρ_ice', meaning: 'Density of ice', unit: 'kg/m³', typical_values: '917 kg/m³' },
          { symbol: 'ρ_water', meaning: 'Density of water', unit: 'kg/m³', typical_values: '1000 kg/m³' },
        ],
        derivedFrom: 'buoyant-force',
        applications: [
          { name: 'Iceberg visibility', latex: '', context: 'Only 8% visible above water', neet_frequency: 'medium' },
          { name: 'Ice melting level', latex: '', context: 'Water level unchanged when ice melts', neet_frequency: 'high' },
        ],
        specialCases: [
          'Tip of the iceberg = 8%',
          'Melting floating ice doesn\'t change water level',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking water always expands when heated',
        correct: 'Between 0-4°C, water contracts when heated. Expands normally only above 4°C.',
        whyItHappens: 'Generalizing from normal expansion',
        neetExample: 'NEET 2020: What happens when water at 0°C is heated?',
      },
      {
        mistake: 'Thinking ice sinks in water',
        correct: 'Ice floats because ρ_ice (917 kg/m³) < ρ_water (1000 kg/m³)',
        whyItHappens: 'Expecting solid to be denser than liquid',
        neetExample: 'NEET 2019: Why ice floats',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Why lakes freeze from top', difficulty: 'easy' },
      { type: 'numerical', description: 'Fraction of ice submerged', difficulty: 'easy' },
      { type: 'conceptual', description: 'Biological importance of anomalous expansion', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Maximum density at 4°C', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
      { pattern: 'Why ice floats', frequency: 'medium', yearAsked: [2019, 2021] },
      { pattern: 'Lake freezing phenomenon', frequency: 'low', yearAsked: [2018, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Anomalous expansion',
        analogy: 'Making lemonade with ice',
        mapping: 'Ice floats on top, keeping drink cold. If ice sank, drinking would be harder!',
      },
      {
        concept: 'Life in frozen lakes',
        analogy: 'Ice as insulating blanket',
        mapping: 'Floating ice insulates water below, maintaining liquid water for fish to survive',
      },
    ],
    
    questions: [],
  },
];

