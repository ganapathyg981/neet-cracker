// Dual Nature of Radiation and Matter - 3% weightage (Tier 2)
// NCERT Class 12, Chapter 11
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const dualNatureRadiationTopics = [
  // Topic 1: Photoelectric Effect
  {
    id: 'photoelectric-effect',
    name: 'Photoelectric Effect',
    weightage: 2,
    difficulty: 'medium',
    
    theory: {
      summary: "When light of sufficient frequency falls on a metal surface, electrons are emitted instantaneously. Einstein explained this using photon concept: each photon has energy E = hν. For emission, photon energy must exceed work function φ (minimum energy to free electron). Maximum kinetic energy of photoelectrons: KE_max = hν - φ = h(ν - ν₀). Threshold frequency ν₀ = φ/h is minimum frequency for emission. Stopping potential V₀ measures KE_max. Intensity affects number of electrons, NOT their energy.",
      realWorldAnalogy: "Like coins in a vending machine - each photon is a coin. Need minimum coin value (work function) to get anything out. Extra value becomes kinetic energy of the 'product' (electron). More coins (intensity) gives more products, not faster products.",
      keyPoints: [
        "Einstein's equation: hν = φ + KE_max (photon energy = work function + max KE)",
        "Work function φ = hν₀ (minimum energy to remove electron from metal surface)",
        "Threshold frequency ν₀ = φ/h (minimum frequency for emission)",
        "Threshold wavelength λ₀ = hc/φ (maximum wavelength for emission)",
        "Stopping potential: eV₀ = KE_max = hν - φ",
        "Instantaneous emission (no time delay, proves particle nature)",
        "Number of photoelectrons ∝ intensity",
        "KE_max depends on frequency, NOT intensity",
        "For ν < ν₀: NO emission regardless of intensity",
        "Saturation current ∝ intensity",
        "V₀ vs ν graph: slope = h/e (same for all metals)",
        "V₀ vs ν graph: intercept = -φ/e (different for different metals)",
      ],
      prerequisites: ['quantum-theory-light'],
      ncertReference: "NCERT Class 12, Chapter 11, Section 11.2-11.6",
    },
    
    formulas: [
      {
        id: 'einstein-photoelectric',
        name: "Einstein's Photoelectric Equation",
        category: 'base',
        formula: 'hν = φ + KE_max',
        latex: 'h\\nu = \\phi + KE_{max}',
        description: 'Energy conservation: photon energy equals work function plus maximum kinetic energy',
        variables: [
          { symbol: 'h', meaning: "Planck's constant", unit: 'J·s', typical_values: '6.63 × 10⁻³⁴ J·s' },
          { symbol: 'ν', meaning: 'Frequency of incident light', unit: 'Hz', typical_values: '10¹⁴ - 10¹⁵ Hz (visible to UV)' },
          { symbol: 'φ', meaning: 'Work function of metal', unit: 'eV or J', typical_values: '2-5 eV (metals)' },
          { symbol: 'KE_max', meaning: 'Maximum kinetic energy of photoelectron', unit: 'eV or J', typical_values: '0-10 eV' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'In terms of wavelength', latex: '\\frac{hc}{\\lambda} = \\phi + KE_{max}', context: 'Using c = νλ', neet_frequency: 'high' },
          { name: 'Threshold frequency', latex: '\\nu_0 = \\frac{\\phi}{h}', context: 'Minimum frequency for emission (KE=0)', neet_frequency: 'high' },
          { name: 'Threshold wavelength', latex: '\\lambda_0 = \\frac{hc}{\\phi}', context: 'Maximum wavelength for emission', neet_frequency: 'high' },
          { name: 'In terms of threshold', latex: 'KE_{max} = h(\\nu - \\nu_0) = hc\\left(\\frac{1}{\\lambda} - \\frac{1}{\\lambda_0}\\right)', context: 'Alternative form', neet_frequency: 'high' },
        ],
        specialCases: [
          'At ν = ν₀: KE_max = 0 (electrons just released with zero velocity)',
          'For ν < ν₀: No emission regardless of intensity',
          'For ν > ν₀: KE_max increases linearly with ν',
          'Typical work functions: Cs ~2 eV, Na ~2.3 eV, Cu ~4.7 eV',
        ],
        dimensionalCheck: '[hν] = J·s × s⁻¹ = J = [φ] + [KE]',
      },
      {
        id: 'stopping-potential',
        name: 'Stopping Potential',
        category: 'derived',
        formula: 'eV₀ = KE_max = hν - φ',
        latex: 'eV_0 = KE_{max} = h\\nu - \\phi',
        description: 'Potential needed to stop the most energetic photoelectrons',
        variables: [
          { symbol: 'V₀', meaning: 'Stopping potential', unit: 'V', typical_values: '0-10 V' },
          { symbol: 'e', meaning: 'Electron charge', unit: 'C', typical_values: '1.6 × 10⁻¹⁹ C' },
        ],
        derivedFrom: 'einstein-photoelectric',
        applications: [
          { name: 'V₀ vs ν graph', latex: 'V_0 = \\frac{h}{e}\\nu - \\frac{\\phi}{e}', context: 'Linear graph, slope = h/e', neet_frequency: 'high' },
          { name: 'Slope of V₀ vs ν', latex: '\\text{Slope} = \\frac{h}{e} = 4.14 \\times 10^{-15} \\text{ V·s}', context: 'Same for all metals', neet_frequency: 'high' },
          { name: 'Y-intercept', latex: '\\text{Intercept} = -\\frac{\\phi}{e} = -V_0', context: 'At ν = 0 (extrapolated)', neet_frequency: 'medium' },
          { name: 'X-intercept', latex: '\\nu_0 = \\frac{\\phi}{h}', context: 'Threshold frequency', neet_frequency: 'high' },
        ],
        specialCases: [
          'V₀ is independent of intensity (key experimental fact)',
          'V₀ = 0 at threshold frequency ν₀',
          'V₀ increases linearly with frequency',
          'Different metals have parallel V₀ vs ν lines (same slope, different intercepts)',
        ],
        dimensionalCheck: '[eV₀] = C × V = J',
      },
      {
        id: 'saturation-current',
        name: 'Saturation Current',
        category: 'derived',
        formula: 'i_sat ∝ Intensity ∝ (number of photons/s)',
        latex: 'i_{sat} \\propto I \\propto \\frac{P}{h\\nu}',
        description: 'Maximum photocurrent when all emitted electrons reach collector',
        variables: [
          { symbol: 'i_sat', meaning: 'Saturation current', unit: 'A', typical_values: 'μA to mA' },
          { symbol: 'I', meaning: 'Light intensity', unit: 'W/m²', typical_values: 'Varies' },
          { symbol: 'P', meaning: 'Power of light source', unit: 'W', typical_values: 'mW to W' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Doubling intensity', latex: 'i_{sat} \\rightarrow 2i_{sat}', context: 'Current doubles', neet_frequency: 'high' },
          { name: 'Number of photoelectrons', latex: 'n = \\frac{i_{sat}}{e}', context: 'Electrons per second', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Saturation current ∝ intensity',
          'Saturation current independent of frequency (for ν > ν₀)',
          'All emitted electrons reach anode at saturation',
        ],
        dimensionalCheck: '[i] = A',
      },
      {
        id: 'useful-values',
        name: 'Useful Constants and Conversions',
        category: 'reference',
        formula: 'hc = 1240 eV·nm = 12400 eV·Å',
        latex: 'hc = 1240 \\text{ eV·nm} = 12400 \\text{ eV·Å}',
        description: 'Useful product for quick calculations',
        variables: [
          { symbol: 'hc', meaning: 'Planck constant × speed of light', unit: 'eV·nm', typical_values: '1240 eV·nm' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Energy from wavelength', latex: 'E(eV) = \\frac{1240}{\\lambda(nm)} = \\frac{12400}{\\lambda(Å)}', context: 'Quick conversion', neet_frequency: 'high' },
          { name: 'Visible light energy', latex: 'E \\approx 1.8-3.1 \\text{ eV} \\text{ (700-400 nm)}', context: 'Red to violet', neet_frequency: 'medium' },
        ],
        specialCases: [
          '400 nm (violet): E = 3.1 eV',
          '500 nm (green): E = 2.48 eV',
          '700 nm (red): E = 1.77 eV',
        ],
        dimensionalCheck: '[hc] = [E][λ] = eV·nm',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking intensity affects KE of photoelectrons',
        correct: 'Intensity affects NUMBER of electrons only, not their KE. KE_max depends solely on FREQUENCY. Doubling intensity doubles current, not KE.',
        whyItHappens: 'Classical wave intuition - brighter light should give more energy per electron',
        neetExample: 'NEET 2020: Effect of doubling intensity on KE_max and saturation current',
      },
      {
        mistake: 'Using λ > λ₀ condition for emission',
        correct: 'For emission: ν > ν₀ means λ < λ₀. Wavelength must be LESS than threshold wavelength.',
        whyItHappens: 'Frequency and wavelength have inverse relationship',
        neetExample: 'NEET 2019: Will red light (700 nm) cause emission if λ₀ = 500 nm?',
      },
      {
        mistake: 'Wrong sign in Einstein equation rearrangement',
        correct: 'KE_max = hν - φ (NOT hν + φ). Work function is subtracted because energy is used up in overcoming barrier.',
        whyItHappens: 'Sign errors in algebraic manipulation',
        neetExample: 'NEET 2021: Calculate KE_max given ν and φ',
      },
      {
        mistake: 'Thinking V₀ vs ν slope depends on metal',
        correct: 'Slope = h/e is UNIVERSAL (same for all metals). Only the intercept (-φ/e) is different for different metals.',
        whyItHappens: 'Not recognizing universal constants',
        neetExample: 'NEET 2022: Compare V₀ vs ν graphs for two different metals',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate KE from frequency and work function', difficulty: 'medium' },
      { type: 'numerical', description: 'Find threshold frequency/wavelength from work function', difficulty: 'easy' },
      { type: 'numerical', description: 'Stopping potential problems', difficulty: 'medium' },
      { type: 'graphical', description: 'V₀ vs ν graph interpretation', difficulty: 'medium' },
      { type: 'conceptual', description: 'Effect of changing intensity/frequency', difficulty: 'easy' },
      { type: 'numerical', description: 'Compare two metals with different work functions', difficulty: 'medium' },
      { type: 'numerical', description: 'Photocurrent and saturation current', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Einstein equation numerical', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Threshold frequency/wavelength', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'V₀ vs ν graph analysis', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'Effect of intensity vs frequency', frequency: 'high', yearAsked: [2018, 2020, 2021, 2023] },
      { pattern: 'Stopping potential calculation', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Work function',
        analogy: 'Exit fee at parking lot',
        mapping: 'Must pay exit fee (φ) first, remaining money is what you leave with (KE)',
      },
      {
        concept: 'Intensity vs frequency',
        analogy: 'Many small coins vs few large bills',
        mapping: 'Many photons (intensity) gives more electrons. Higher energy photons (frequency) gives faster electrons.',
      },
      {
        concept: 'Threshold frequency',
        analogy: 'Minimum speed for roller coaster',
        mapping: 'Need minimum energy (frequency) to get over the hill (work function). Below threshold, nothing happens.',
      },
      {
        concept: 'Instantaneous emission',
        analogy: 'Bullet hitting target',
        mapping: 'Energy transfer is immediate - no accumulation time. Each photon is like a bullet delivering all energy at once.',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Wave-Particle Duality and de Broglie Hypothesis
  {
    id: 'de-broglie-hypothesis',
    name: 'de Broglie Hypothesis & Matter Waves',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "de Broglie proposed that all matter has wave-like properties. The wavelength associated with a moving particle is λ = h/p = h/mv. This was confirmed by electron diffraction experiments (Davisson-Germer). The de Broglie wavelength is significant only for microscopic particles (electrons, atoms) because for macroscopic objects it becomes negligibly small. For an electron accelerated through V volts: λ = 12.27/√V Å. Wave-particle duality is fundamental to quantum mechanics.",
      realWorldAnalogy: "Like ripples from a boat - a faster boat (higher momentum) creates smaller ripples (shorter wavelength). Everything has waves, but for large objects (ships), the ripples are too tiny to see. For tiny particles (electrons), the 'ripples' are measurable.",
      keyPoints: [
        "de Broglie wavelength: λ = h/p = h/mv",
        "Wave nature of matter confirmed by Davisson-Germer experiment (electron diffraction)",
        "λ = h/√(2mK) when kinetic energy K is given",
        "For electron through V volts: λ = h/√(2meV) = 12.27/√V Å",
        "λ ∝ 1/√m: heavier particles have shorter wavelength",
        "λ ∝ 1/√K: higher energy particles have shorter wavelength",
        "Macroscopic objects have λ ~ 10⁻³⁵ m (undetectable)",
        "Electron at 100 eV: λ ≈ 1.23 Å (comparable to atomic spacing)",
        "Wave-particle duality: all matter exhibits both wave and particle properties",
        "Complementarity: wave and particle properties never observed simultaneously",
      ],
      prerequisites: ['photoelectric-effect'],
      ncertReference: "NCERT Class 12, Chapter 11, Section 11.7-11.9",
    },
    
    formulas: [
      {
        id: 'de-broglie-wavelength',
        name: 'de Broglie Wavelength',
        category: 'base',
        formula: 'λ = h/p = h/mv',
        latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv}',
        description: 'Wavelength associated with moving particle',
        variables: [
          { symbol: 'λ', meaning: 'de Broglie wavelength', unit: 'm', typical_values: '10⁻¹⁰ to 10⁻¹² m (electrons)' },
          { symbol: 'p', meaning: 'Momentum', unit: 'kg·m/s', typical_values: 'Depends on particle' },
          { symbol: 'm', meaning: 'Mass of particle', unit: 'kg', typical_values: '9.1 × 10⁻³¹ kg (electron)' },
          { symbol: 'v', meaning: 'Velocity', unit: 'm/s', typical_values: '10³ - 10⁷ m/s' },
          { symbol: 'h', meaning: "Planck's constant", unit: 'J·s', typical_values: '6.63 × 10⁻³⁴ J·s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'In terms of KE', latex: '\\lambda = \\frac{h}{\\sqrt{2mK}}', context: 'When kinetic energy K is given', neet_frequency: 'high' },
          { name: 'For accelerated electron', latex: '\\lambda = \\frac{h}{\\sqrt{2meV}} = \\frac{12.27}{\\sqrt{V}} \\text{ Å}', context: 'V in volts', neet_frequency: 'high' },
          { name: 'Thermal de Broglie', latex: '\\lambda = \\frac{h}{\\sqrt{3mkT}}', context: 'For thermal particles at temperature T', neet_frequency: 'medium' },
          { name: 'Ratio for same KE', latex: '\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{m_2}{m_1}}', context: 'For different particles with same KE', neet_frequency: 'high' },
        ],
        specialCases: [
          'λ ∝ 1/p: higher momentum → shorter wavelength',
          'λ ∝ 1/√m: heavier particle → shorter wavelength (for same v)',
          'λ ∝ 1/√K: higher energy → shorter wavelength',
          'Electron at 100V: λ ≈ 1.227 Å',
          'Electron at 150V: λ ≈ 1.0 Å',
        ],
        dimensionalCheck: '[λ] = [h]/[p] = J·s/(kg·m/s) = m',
      },
      {
        id: 'electron-accelerated',
        name: 'Electron Accelerated Through Potential',
        category: 'derived',
        formula: 'λ = 12.27/√V Å = 1.227/√V nm',
        latex: '\\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ Å} = \\frac{1.227}{\\sqrt{V}} \\text{ nm}',
        description: 'de Broglie wavelength of electron accelerated through V volts',
        variables: [
          { symbol: 'λ', meaning: 'de Broglie wavelength', unit: 'Å or nm', typical_values: '0.1-10 Å' },
          { symbol: 'V', meaning: 'Accelerating potential', unit: 'V', typical_values: '10-10000 V' },
        ],
        derivedFrom: 'de-broglie-wavelength',
        applications: [
          { name: 'At V = 100 V', latex: '\\lambda = \\frac{12.27}{\\sqrt{100}} = 1.227 \\text{ Å}', context: 'Common calculation', neet_frequency: 'high' },
          { name: 'At V = 54 V', latex: '\\lambda = \\frac{12.27}{\\sqrt{54}} = 1.67 \\text{ Å}', context: 'Davisson-Germer value', neet_frequency: 'medium' },
          { name: 'Electron microscope', latex: 'V = 10^4 \\text{ V} \\Rightarrow \\lambda \\approx 0.12 \\text{ Å}', context: 'Very short wavelength for imaging', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Derivation: eV = ½mv² → v = √(2eV/m) → λ = h/mv',
          'λ decreases with increasing V',
          'For proton: λ = 0.286/√V Å (due to larger mass)',
        ],
        dimensionalCheck: '[λ] = Å (10⁻¹⁰ m)',
      },
      {
        id: 'comparing-particles',
        name: 'Comparing de Broglie Wavelengths',
        category: 'derived',
        formula: 'λ₁/λ₂ = p₂/p₁ = √(m₂K₂/m₁K₁)',
        latex: '\\frac{\\lambda_1}{\\lambda_2} = \\frac{p_2}{p_1} = \\sqrt{\\frac{m_2 K_2}{m_1 K_1}}',
        description: 'Ratio of wavelengths for different particles',
        variables: [
          { symbol: 'λ₁, λ₂', meaning: 'de Broglie wavelengths', unit: 'm', typical_values: 'Ratio compared' },
          { symbol: 'm₁, m₂', meaning: 'Masses', unit: 'kg', typical_values: 'e, p, α, etc.' },
          { symbol: 'K₁, K₂', meaning: 'Kinetic energies', unit: 'J', typical_values: 'eV usually' },
        ],
        derivedFrom: 'de-broglie-wavelength',
        applications: [
          { name: 'Same KE, different mass', latex: '\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} \\approx 43', context: 'Electron vs proton', neet_frequency: 'high' },
          { name: 'Same momentum', latex: '\\lambda_1 = \\lambda_2', context: 'λ depends only on p', neet_frequency: 'high' },
          { name: 'Same velocity', latex: '\\frac{\\lambda_1}{\\lambda_2} = \\frac{m_2}{m_1}', context: 'Heavier has shorter λ', neet_frequency: 'medium' },
        ],
        specialCases: [
          'For same KE: λ ∝ 1/√m (lighter particle has longer λ)',
          'For same velocity: λ ∝ 1/m',
          'For same momentum: λ is same for all particles',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
      {
        id: 'photon-vs-particle',
        name: 'Photon vs Material Particle Comparison',
        category: 'comparison',
        formula: 'Photon: E = pc, Particle: E = p²/2m',
        latex: '\\text{Photon: } E = pc, \\quad \\text{Particle: } E = \\frac{p^2}{2m}',
        description: 'Energy-momentum relations differ for photons and particles',
        variables: [
          { symbol: 'E', meaning: 'Energy', unit: 'J or eV', typical_values: 'Varies' },
          { symbol: 'p', meaning: 'Momentum', unit: 'kg·m/s', typical_values: 'Varies' },
          { symbol: 'c', meaning: 'Speed of light', unit: 'm/s', typical_values: '3 × 10⁸ m/s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For same λ', latex: 'E_{photon} = pc = \\frac{hc}{\\lambda}, \\quad E_{particle} = \\frac{h^2}{2m\\lambda^2}', context: 'Photon energy >> particle energy', neet_frequency: 'high' },
          { name: 'Ratio for same λ', latex: '\\frac{E_{photon}}{E_{electron}} = \\frac{2mc\\lambda}{h}', context: 'Photon has much more energy', neet_frequency: 'medium' },
        ],
        specialCases: [
          'For same wavelength: photon energy >> electron energy',
          'Photon has zero rest mass but has momentum',
          'For electron: E = ½mv² (non-relativistic)',
        ],
        dimensionalCheck: '[E] = J or eV',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using λ = h/mv for photon',
        correct: 'Photon has no rest mass. For photon: λ = h/p = hc/E. Cannot use λ = h/mv.',
        whyItHappens: 'Applying particle formula to massless photon',
        neetExample: 'NEET 2020: Compare momentum of photon and electron with same wavelength',
      },
      {
        mistake: 'Forgetting √V dependence in electron formula',
        correct: 'λ = 12.27/√V Å. If V is quadrupled, λ is halved (not quartered).',
        whyItHappens: 'Missing the square root in the formula',
        neetExample: 'NEET 2019: New wavelength when accelerating voltage is doubled',
      },
      {
        mistake: 'Confusing mass dependence at same KE vs same velocity',
        correct: 'Same KE: λ ∝ 1/√m. Same velocity: λ ∝ 1/m. Different dependencies!',
        whyItHappens: 'Not deriving relationship properly for each case',
        neetExample: 'NEET 2021: Compare λ of electron and proton with same KE',
      },
      {
        mistake: 'Thinking macroscopic objects have observable wave properties',
        correct: 'A 1 kg object at 1 m/s has λ ≈ 10⁻³⁴ m - far too small to detect. Wave nature is only significant for microscopic particles.',
        whyItHappens: 'Not calculating actual wavelength for large objects',
        neetExample: 'NEET 2022: Why don\'t we observe wave nature of a cricket ball?',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'de Broglie wavelength from velocity/momentum', difficulty: 'easy' },
      { type: 'numerical', description: 'Wavelength of electron accelerated through V volts', difficulty: 'medium' },
      { type: 'numerical', description: 'Compare wavelengths of different particles', difficulty: 'medium' },
      { type: 'conceptual', description: 'Davisson-Germer experiment significance', difficulty: 'easy' },
      { type: 'numerical', description: 'Photon vs electron wavelength comparison', difficulty: 'medium' },
      { type: 'conceptual', description: 'Wave-particle duality explanation', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'de Broglie wavelength calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Electron accelerated through potential', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022, 2023] },
      { pattern: 'Compare λ of electron, proton, alpha', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022] },
      { pattern: 'Effect of changing V on wavelength', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
      { pattern: 'Davisson-Germer experiment', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'de Broglie wavelength',
        analogy: 'Ripples from boat',
        mapping: 'Faster boat (higher momentum) makes smaller ripples (shorter wavelength)',
      },
      {
        concept: 'Wave-particle duality',
        analogy: 'Person being both student and employee',
        mapping: 'Same person, different roles in different contexts. Particle in some experiments, wave in others.',
      },
      {
        concept: 'Macroscopic λ too small',
        analogy: 'Ant-sized ripples from ship',
        mapping: 'A massive ship (macroscopic object) creates such tiny "quantum ripples" that they\'re practically nonexistent',
      },
      {
        concept: 'Electron diffraction',
        analogy: 'Light diffraction through slit',
        mapping: 'Just as light creates diffraction pattern (proving wave nature), electrons do too when λ ~ slit size',
      },
    ],
    
    questions: [],
  },
];
