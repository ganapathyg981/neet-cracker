// Alternating Current - 4% weightage (Tier 2)
// NCERT Class 12, Chapter 7

export const alternatingCurrentTopics = [
  // Topic 1: Introduction to AC
  {
    id: 'intro-ac',
    name: 'Introduction to Alternating Current',
    weightage: 1,
    difficulty: 'easy',
    
    theory: {
      summary: "Alternating current varies sinusoidally with time: I = I₀ sin(ωt). Unlike DC, AC reverses direction periodically. AC has advantages in power transmission due to easy voltage transformation. Key quantities: peak value, RMS value, average value.",
      realWorldAnalogy: "Like a pendulum swinging back and forth - current flows one way, then reverses, repeating the cycle.",
      keyPoints: [
        "AC: I = I₀ sin(ωt), V = V₀ sin(ωt)",
        "Peak value I₀ = maximum current",
        "RMS value I_rms = I₀/√2 ≈ 0.707I₀",
        "Average value over half cycle = 2I₀/π ≈ 0.637I₀",
        "Average over full cycle = 0",
        "Frequency in India: 50 Hz, Period = 20 ms",
      ],
      prerequisites: [],
    },
    
    formulas: [
      {
        id: 'ac-equation',
        name: 'AC Current/Voltage',
        category: 'base',
        formula: 'I = I₀ sin(ωt), V = V₀ sin(ωt)',
        latex: 'I = I_0 \\sin(\\omega t), \\quad V = V_0 \\sin(\\omega t)',
        description: 'Instantaneous value of alternating current/voltage',
        variables: [
          { symbol: 'I₀', meaning: 'Peak current', unit: 'A', typical_values: '1-100 A' },
          { symbol: 'V₀', meaning: 'Peak voltage', unit: 'V', typical_values: '100-350 V' },
          { symbol: 'ω', meaning: 'Angular frequency', unit: 'rad/s', typical_values: '2πf' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For India mains', latex: '\\omega = 2\\pi \\times 50 = 100\\pi \\text{ rad/s}', context: '50 Hz frequency', neet_frequency: 'high' },
        ],
        specialCases: [
          'At t = 0: I = 0 (if phase = 0)',
          'At t = T/4: I = I₀ (maximum)',
        ],
        dimensionalCheck: '[I] = A, [V] = V',
      },
      {
        id: 'rms-value',
        name: 'RMS Value',
        category: 'base',
        formula: 'I_rms = I₀/√2, V_rms = V₀/√2',
        latex: 'I_{rms} = \\frac{I_0}{\\sqrt{2}}, \\quad V_{rms} = \\frac{V_0}{\\sqrt{2}}',
        description: 'Root mean square value - equivalent DC for heating effect',
        variables: [
          { symbol: 'I_rms', meaning: 'RMS current', unit: 'A', typical_values: '0.707I₀' },
          { symbol: 'V_rms', meaning: 'RMS voltage', unit: 'V', typical_values: '220V in India' },
        ],
        derivedFrom: 'ac-equation',
        applications: [
          { name: 'Mains voltage', latex: 'V_0 = V_{rms} \\times \\sqrt{2} = 220 \\times 1.414 \\approx 311V', context: 'Peak voltage from RMS', neet_frequency: 'high' },
          { name: 'Power formula', latex: 'P = I_{rms}^2 R = \\frac{V_{rms}^2}{R}', context: 'Use RMS for power', neet_frequency: 'high' },
        ],
        specialCases: [
          'RMS = DC equivalent for heating',
          'Meter readings show RMS values',
        ],
        dimensionalCheck: '[I_rms] = A',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing peak and RMS values',
        correct: 'RMS = Peak/√2. Household 220V is RMS; peak is 311V.',
        whyItHappens: 'Not distinguishing the two measures',
        neetExample: 'NEET 2020: Peak voltage when RMS is 220V',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Convert between peak and RMS', difficulty: 'easy' },
      { type: 'numerical', description: 'Average and RMS calculations', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Peak-RMS conversion', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'RMS value',
        analogy: 'Average temperature effect',
        mapping: 'RMS is like effective temperature that causes same heating as DC',
      },
    ],
    
    questions: [],
  },

  // Topic 2: AC Circuits
  {
    id: 'types-ac-circuits',
    name: 'Types of AC Circuits',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "In AC circuits, R, L, and C have different behaviors. In pure resistor: V and I in phase. In inductor: I lags V by 90°. In capacitor: I leads V by 90°. Reactance X_L = ωL, X_C = 1/ωC. Impedance Z = √(R² + (X_L - X_C)²).",
      realWorldAnalogy: "R is like a valve (constant resistance), L is like a flywheel (opposes change in current), C is like a tank (stores and releases charge).",
      keyPoints: [
        "Pure R: V = IR, V and I in phase",
        "Pure L: V = IX_L, I lags V by 90°, X_L = ωL",
        "Pure C: V = IX_C, I leads V by 90°, X_C = 1/ωC",
        "Series LCR: Z = √(R² + (X_L - X_C)²)",
        "Phase angle: tan φ = (X_L - X_C)/R",
        "Mnemonic: ELI the ICE man (E leads I in L, I leads E in C)",
      ],
      prerequisites: ['intro-ac'],
    },
    
    formulas: [
      {
        id: 'inductive-reactance',
        name: 'Inductive Reactance',
        category: 'base',
        formula: 'X_L = ωL = 2πfL',
        latex: 'X_L = \\omega L = 2\\pi fL',
        description: 'Opposition to AC by inductor',
        variables: [
          { symbol: 'X_L', meaning: 'Inductive reactance', unit: 'Ω', typical_values: '10-1000 Ω' },
          { symbol: 'L', meaning: 'Inductance', unit: 'H', typical_values: 'mH to H' },
          { symbol: 'ω', meaning: 'Angular frequency', unit: 'rad/s', typical_values: '100π rad/s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Current in inductor', latex: 'I = \\frac{V}{X_L} = \\frac{V}{\\omega L}', context: 'Pure inductor circuit', neet_frequency: 'high' },
          { name: 'At DC (f=0)', latex: 'X_L = 0', context: 'Inductor is short for DC', neet_frequency: 'medium' },
        ],
        specialCases: [
          'X_L ∝ f (increases with frequency)',
          'Current lags voltage by 90°',
        ],
        dimensionalCheck: '[X_L] = [ω][L] = rad/s × H = Ω',
      },
      {
        id: 'capacitive-reactance',
        name: 'Capacitive Reactance',
        category: 'base',
        formula: 'X_C = 1/(ωC) = 1/(2πfC)',
        latex: 'X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi fC}',
        description: 'Opposition to AC by capacitor',
        variables: [
          { symbol: 'X_C', meaning: 'Capacitive reactance', unit: 'Ω', typical_values: '10-1000 Ω' },
          { symbol: 'C', meaning: 'Capacitance', unit: 'F', typical_values: 'μF to mF' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Current in capacitor', latex: 'I = \\frac{V}{X_C} = \\omega CV', context: 'Pure capacitor circuit', neet_frequency: 'high' },
          { name: 'At DC (f=0)', latex: 'X_C = \\infty', context: 'Capacitor blocks DC', neet_frequency: 'medium' },
        ],
        specialCases: [
          'X_C ∝ 1/f (decreases with frequency)',
          'Current leads voltage by 90°',
        ],
        dimensionalCheck: '[X_C] = 1/([ω][C]) = 1/(rad/s × F) = Ω',
      },
      {
        id: 'impedance',
        name: 'Impedance of Series LCR',
        category: 'derived',
        formula: 'Z = √(R² + (X_L - X_C)²)',
        latex: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}',
        description: 'Total opposition to AC in series LCR circuit',
        variables: [
          { symbol: 'Z', meaning: 'Impedance', unit: 'Ω', typical_values: '10-1000 Ω' },
          { symbol: 'R', meaning: 'Resistance', unit: 'Ω', typical_values: '1-1000 Ω' },
        ],
        derivedFrom: 'inductive-reactance',
        applications: [
          { name: 'Current in LCR', latex: 'I = \\frac{V}{Z}', context: 'Ohm\'s law for AC', neet_frequency: 'high' },
          { name: 'At resonance', latex: 'Z_{min} = R', context: 'X_L = X_C', neet_frequency: 'high' },
        ],
        specialCases: [
          'If X_L > X_C: circuit is inductive',
          'If X_C > X_L: circuit is capacitive',
        ],
        dimensionalCheck: '[Z] = Ω',
      },
      {
        id: 'resonant-frequency',
        name: 'Resonant Frequency',
        category: 'derived',
        formula: 'f₀ = 1/(2π√LC)',
        latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
        description: 'Frequency at which X_L = X_C (resonance)',
        variables: [
          { symbol: 'f₀', meaning: 'Resonant frequency', unit: 'Hz', typical_values: '100-10000 Hz' },
        ],
        derivedFrom: 'impedance',
        applications: [
          { name: 'Angular frequency', latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}', context: 'Resonance condition', neet_frequency: 'high' },
          { name: 'At resonance', latex: 'I_{max} = \\frac{V}{R}', context: 'Maximum current', neet_frequency: 'high' },
        ],
        specialCases: [
          'At resonance: Z = R (minimum)',
          'Current maximum at resonance',
        ],
        dimensionalCheck: '[f] = 1/√([L][C]) = 1/√(H·F) = Hz',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Adding X_L and X_C directly for net reactance',
        correct: 'Net reactance = |X_L - X_C|. They subtract, not add.',
        whyItHappens: 'Treating both as positive resistances',
        neetExample: 'NEET 2020: Impedance of series LCR circuit',
      },
      {
        mistake: 'Wrong phase relationship (which leads/lags)',
        correct: 'ELI the ICE man: E leads I in L (inductor), I leads E in C (capacitor)',
        whyItHappens: 'Forgetting the mnemonic',
        neetExample: 'NEET 2019: Phase difference in LC circuit',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate reactance', difficulty: 'easy' },
      { type: 'numerical', description: 'Impedance of LCR circuit', difficulty: 'medium' },
      { type: 'numerical', description: 'Resonant frequency', difficulty: 'medium' },
      { type: 'conceptual', description: 'Phase relationships', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Impedance calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Resonant frequency', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Phase angle in circuits', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Inductive reactance',
        analogy: 'Heavy flywheel',
        mapping: 'Hard to start moving quickly (opposes change in current)',
      },
      {
        concept: 'Capacitive reactance',
        analogy: 'Water tank',
        mapping: 'Stores and releases charge, blocking steady flow (DC)',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Power in AC
  {
    id: 'power-factor',
    name: 'Power and Power Factor',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "In AC circuits, true power P = V_rms × I_rms × cos φ, where φ is phase angle. Power factor = cos φ = R/Z. For pure R: PF = 1, for pure L or C: PF = 0. Wattless current component = I sin φ doesn't contribute to power.",
      realWorldAnalogy: "Like pushing a shopping cart at an angle - only the forward component (cos φ) does useful work.",
      keyPoints: [
        "True power: P = VI cos φ (watts)",
        "Apparent power: S = VI (volt-amperes)",
        "Power factor: cos φ = P/S = R/Z",
        "Reactive power: Q = VI sin φ (VAR)",
        "Pure R: cos φ = 1, full power",
        "Pure L or C: cos φ = 0, zero power",
      ],
      prerequisites: ['types-ac-circuits'],
    },
    
    formulas: [
      {
        id: 'true-power',
        name: 'True Power in AC',
        category: 'base',
        formula: 'P = V_rms × I_rms × cos φ = I²R',
        latex: 'P = V_{rms} I_{rms} \\cos\\phi = I^2 R',
        description: 'Actual power consumed in AC circuit',
        variables: [
          { symbol: 'P', meaning: 'True/Real power', unit: 'W', typical_values: '1-10000 W' },
          { symbol: 'cos φ', meaning: 'Power factor', unit: 'dimensionless', typical_values: '0-1' },
          { symbol: 'φ', meaning: 'Phase angle', unit: 'rad', typical_values: '0-π/2' },
        ],
        derivedFrom: 'impedance',
        applications: [
          { name: 'At resonance', latex: 'P = \\frac{V^2}{R}', context: 'cos φ = 1', neet_frequency: 'high' },
          { name: 'In terms of Z', latex: 'P = I^2 Z \\cos\\phi', context: 'Alternative form', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Only R consumes power, not L or C',
          'Pure L or C: P = 0',
        ],
        dimensionalCheck: '[P] = V × A = W',
      },
      {
        id: 'power-factor',
        name: 'Power Factor',
        category: 'derived',
        formula: 'cos φ = R/Z',
        latex: '\\cos\\phi = \\frac{R}{Z}',
        description: 'Ratio of true power to apparent power',
        variables: [
          { symbol: 'cos φ', meaning: 'Power factor', unit: 'dimensionless', typical_values: '0-1' },
        ],
        derivedFrom: 'impedance',
        applications: [
          { name: 'From phase angle', latex: '\\tan\\phi = \\frac{X_L - X_C}{R}', context: 'Calculate φ first', neet_frequency: 'high' },
        ],
        specialCases: [
          'cos φ = 1: resistive (power factor correction not needed)',
          'cos φ < 1: lagging (inductive) or leading (capacitive)',
        ],
        dimensionalCheck: 'Dimensionless',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using P = VI directly for AC',
        correct: 'P = VI cos φ. The power factor must be included.',
        whyItHappens: 'Applying DC formula to AC',
        neetExample: 'NEET 2020: Power in AC circuit with given phase angle',
      },
      {
        mistake: 'Thinking L and C consume power',
        correct: 'Only R consumes power. L and C store and return energy.',
        whyItHappens: 'Not understanding energy storage vs dissipation',
        neetExample: 'NEET 2019: Power in pure inductor circuit',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate power in AC circuit', difficulty: 'medium' },
      { type: 'numerical', description: 'Power factor calculation', difficulty: 'easy' },
      { type: 'conceptual', description: 'Power in L and C', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Power factor calculation', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'Power in LCR circuit', frequency: 'medium', yearAsked: [2019, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Power factor',
        analogy: 'Pulling cart at angle',
        mapping: 'Only horizontal component does work, vertical is wasted',
      },
    ],
    
    questions: [],
  },

  // Topic 4: LCR Resonance
  {
    id: 'lcr-resonance',
    name: 'Resonance in LCR Circuits',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "At resonant frequency, XL = XC, so impedance Z = R (minimum) and current is maximum. Resonant frequency f₀ = 1/(2π√LC). Quality factor Q measures sharpness of resonance. Higher Q means sharper peak and better selectivity (used in tuning circuits).",
      realWorldAnalogy: "Like pushing a swing at its natural frequency - small pushes at the right timing give maximum amplitude. At resonance, the circuit 'swings' with maximum current.",
      keyPoints: [
        "Resonance condition: XL = XC or ωL = 1/ωC",
        "Resonant frequency: f₀ = 1/(2π√LC), ω₀ = 1/√LC",
        "At resonance: Z = R (minimum), I = V/R (maximum)",
        "Power factor at resonance: cos φ = 1 (unity)",
        "Phase angle at resonance: φ = 0 (V and I in phase)",
        "Quality factor: Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C)",
        "Bandwidth: Δf = f₀/Q",
      ],
      prerequisites: ['types-ac-circuits'],
    },
    
    formulas: [
      {
        id: 'resonant-freq',
        name: 'Resonant Frequency',
        category: 'base',
        formula: 'f₀ = 1/(2π√LC)',
        latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
        description: 'Frequency at which XL = XC and current is maximum',
        variables: [
          { symbol: 'f₀', meaning: 'Resonant frequency', unit: 'Hz', typical_values: '100-10⁶ Hz' },
          { symbol: 'L', meaning: 'Inductance', unit: 'H', typical_values: 'μH to H' },
          { symbol: 'C', meaning: 'Capacitance', unit: 'F', typical_values: 'pF to μF' },
        ],
        derivedFrom: 'impedance',
        applications: [
          { name: 'Angular frequency', latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}', context: 'In rad/s', neet_frequency: 'high' },
          { name: 'From XL = XC', latex: '\\omega L = \\frac{1}{\\omega C} \\Rightarrow \\omega^2 = \\frac{1}{LC}', context: 'Derivation', neet_frequency: 'high' },
        ],
        specialCases: [
          'f₀ independent of R',
          'Halving L or C doubles ω₀',
        ],
        dimensionalCheck: '[f₀] = 1/√(H·F) = Hz',
      },
      {
        id: 'quality-factor',
        name: 'Quality Factor (Q-factor)',
        category: 'derived',
        formula: 'Q = ω₀L/R = 1/(ω₀CR)',
        latex: 'Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 CR} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
        description: 'Measure of sharpness of resonance peak',
        variables: [
          { symbol: 'Q', meaning: 'Quality factor', unit: 'dimensionless', typical_values: '10-1000' },
        ],
        derivedFrom: 'resonant-freq',
        applications: [
          { name: 'Voltage magnification', latex: 'V_L = V_C = QV', context: 'At resonance, VL and VC are Q times source voltage', neet_frequency: 'high' },
          { name: 'Bandwidth', latex: '\\Delta f = \\frac{f_0}{Q}', context: 'Width of resonance curve', neet_frequency: 'medium' },
          { name: 'Energy factor', latex: 'Q = 2\\pi \\times \\frac{\\text{Energy stored}}{\\text{Energy lost per cycle}}', context: 'Physical meaning', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Higher Q = sharper resonance',
          'Q increases if R decreases',
        ],
        dimensionalCheck: 'Dimensionless',
      },
      {
        id: 'resonance-current',
        name: 'Current at Resonance',
        category: 'derived',
        formula: 'I_max = V/R',
        latex: 'I_{max} = \\frac{V}{R}',
        description: 'Maximum current when circuit is at resonance',
        variables: [
          { symbol: 'I_max', meaning: 'Maximum (resonant) current', unit: 'A', typical_values: 'mA to A' },
          { symbol: 'V', meaning: 'Source voltage (RMS)', unit: 'V', typical_values: '1-220 V' },
        ],
        derivedFrom: 'resonant-freq',
        applications: [
          { name: 'Impedance at resonance', latex: 'Z_{min} = R', context: 'Only resistance matters', neet_frequency: 'high' },
          { name: 'Power at resonance', latex: 'P_{max} = \\frac{V^2}{R}', context: 'Maximum power transfer', neet_frequency: 'high' },
        ],
        specialCases: [
          'At resonance, circuit behaves as pure resistor',
          'VL = VC (equal and opposite, cancel out)',
        ],
        dimensionalCheck: '[I] = [V]/[R] = A',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking VL = VC = 0 at resonance',
        correct: 'At resonance VL = VC = QV (can be >> V), but they cancel out (opposite phases).',
        whyItHappens: 'Confusing cancellation with zero value',
        neetExample: 'NEET 2020: Voltage across L and C at resonance',
      },
      {
        mistake: 'Thinking resonance depends on R',
        correct: 'f₀ = 1/(2π√LC) is independent of R. R only affects sharpness (Q).',
        whyItHappens: 'R is in the circuit',
        neetExample: 'NEET 2019: Effect of changing R on resonant frequency',
      },
      {
        mistake: 'Using wrong Q formula',
        correct: 'Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C). All three are equivalent at resonance.',
        whyItHappens: 'Multiple equivalent forms exist',
        neetExample: 'NEET 2021: Calculate Q factor of LCR circuit',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate resonant frequency', difficulty: 'easy' },
      { type: 'numerical', description: 'Q factor and bandwidth', difficulty: 'medium' },
      { type: 'numerical', description: 'Voltage across L and C at resonance', difficulty: 'medium' },
      { type: 'conceptual', description: 'Properties at resonance', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Resonant frequency calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Q factor and sharpness', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Current and impedance at resonance', frequency: 'high', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Resonance',
        analogy: 'Pushing swing at right frequency',
        mapping: 'Match natural frequency → maximum amplitude (current)',
      },
      {
        concept: 'Q factor',
        analogy: 'Bell ringing',
        mapping: 'High Q = bell rings long after struck; low Q = dampens quickly',
      },
    ],
    
    questions: [],
  },

  // Topic 5: Transformers
  {
    id: 'transformers',
    name: 'Transformers',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "Transformer changes AC voltage using mutual induction. Voltage ratio equals turns ratio: V₂/V₁ = N₂/N₁. For ideal transformer, power is conserved: V₁I₁ = V₂I₂. Step-up increases voltage (N₂ > N₁), step-down decreases it. Used in power transmission to reduce I²R losses.",
      realWorldAnalogy: "Like a gear system for electricity - gears trade speed for torque; transformers trade voltage for current, keeping power the same (ideally).",
      keyPoints: [
        "Voltage ratio: V₂/V₁ = N₂/N₁ = k (turns ratio)",
        "Current ratio: I₂/I₁ = N₁/N₂ = 1/k (inverse)",
        "Power conservation: V₁I₁ = V₂I₂ (ideal transformer)",
        "Step-up: N₂ > N₁ (voltage increases, current decreases)",
        "Step-down: N₂ < N₁ (voltage decreases, current increases)",
        "Works only with AC (needs changing flux)",
        "Efficiency: η = (output power)/(input power) × 100%",
      ],
      prerequisites: ['mutual-induction'],
    },
    
    formulas: [
      {
        id: 'transformer-ratio',
        name: 'Transformer Turns Ratio',
        category: 'base',
        formula: 'V₂/V₁ = N₂/N₁ = k',
        latex: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1} = k',
        description: 'Voltage ratio equals turns ratio in transformer',
        variables: [
          { symbol: 'V₁', meaning: 'Primary voltage', unit: 'V', typical_values: '220V mains' },
          { symbol: 'V₂', meaning: 'Secondary voltage', unit: 'V', typical_values: '6-440 V' },
          { symbol: 'N₁', meaning: 'Primary turns', unit: 'dimensionless', typical_values: '100-10000' },
          { symbol: 'N₂', meaning: 'Secondary turns', unit: 'dimensionless', typical_values: '10-10000' },
          { symbol: 'k', meaning: 'Turns ratio', unit: 'dimensionless', typical_values: '0.1-100' },
        ],
        derivedFrom: 'mutual-inductance',
        applications: [
          { name: 'Step-up', latex: 'k > 1 \\Rightarrow V_2 > V_1', context: 'Increases voltage', neet_frequency: 'high' },
          { name: 'Step-down', latex: 'k < 1 \\Rightarrow V_2 < V_1', context: 'Decreases voltage', neet_frequency: 'high' },
        ],
        specialCases: [
          'k = 1: isolation transformer (same voltage)',
          'Works only with AC, not DC',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
      {
        id: 'transformer-current',
        name: 'Transformer Current Relation',
        category: 'derived',
        formula: 'I₂/I₁ = N₁/N₂ = 1/k',
        latex: '\\frac{I_2}{I_1} = \\frac{N_1}{N_2} = \\frac{1}{k}',
        description: 'Current ratio is inverse of turns ratio (ideal transformer)',
        variables: [
          { symbol: 'I₁', meaning: 'Primary current', unit: 'A', typical_values: '0.1-10 A' },
          { symbol: 'I₂', meaning: 'Secondary current', unit: 'A', typical_values: '0.01-100 A' },
        ],
        derivedFrom: 'transformer-ratio',
        applications: [
          { name: 'Power conservation', latex: 'V_1 I_1 = V_2 I_2', context: 'Ideal transformer', neet_frequency: 'high' },
          { name: 'Step-up effect', latex: 'V \\uparrow \\Rightarrow I \\downarrow', context: 'Voltage up, current down', neet_frequency: 'high' },
        ],
        specialCases: [
          'Step-up: current decreases',
          'Step-down: current increases',
        ],
        dimensionalCheck: 'Dimensionless ratio',
      },
      {
        id: 'transformer-efficiency',
        name: 'Transformer Efficiency',
        category: 'derived',
        formula: 'η = (P_out/P_in) × 100%',
        latex: '\\eta = \\frac{P_{out}}{P_{in}} \\times 100\\% = \\frac{V_2 I_2 \\cos\\phi_2}{V_1 I_1 \\cos\\phi_1} \\times 100\\%',
        description: 'Ratio of output to input power',
        variables: [
          { symbol: 'η', meaning: 'Efficiency', unit: '%', typical_values: '90-99%' },
          { symbol: 'P_out', meaning: 'Output power', unit: 'W', typical_values: 'Slightly less than P_in' },
          { symbol: 'P_in', meaning: 'Input power', unit: 'W', typical_values: 'Total input' },
        ],
        derivedFrom: 'transformer-ratio',
        applications: [
          { name: 'Power loss', latex: 'P_{loss} = P_{in} - P_{out}', context: 'Copper + iron losses', neet_frequency: 'high' },
          { name: 'Real transformer', latex: '\\eta < 100\\%', context: 'Always some losses', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Ideal transformer: η = 100%',
          'Losses: copper (I²R), iron (hysteresis + eddy currents)',
        ],
        dimensionalCheck: '[η] = %',
      },
      {
        id: 'power-transmission',
        name: 'Power Transmission Loss',
        category: 'derived',
        formula: 'P_loss = I²R = P²R/V²',
        latex: 'P_{loss} = I^2 R = \\frac{P^2 R}{V^2}',
        description: 'Power lost in transmission lines',
        variables: [
          { symbol: 'P_loss', meaning: 'Power lost in lines', unit: 'W', typical_values: '1-5% of P' },
          { symbol: 'R', meaning: 'Resistance of lines', unit: 'Ω', typical_values: '1-100 Ω' },
          { symbol: 'P', meaning: 'Power transmitted', unit: 'W', typical_values: 'MW to GW' },
          { symbol: 'V', meaning: 'Transmission voltage', unit: 'V', typical_values: '11kV-765kV' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'High voltage advantage', latex: 'P_{loss} \\propto \\frac{1}{V^2}', context: 'Higher V → much lower loss', neet_frequency: 'high' },
          { name: 'Step-up for transmission', latex: 'V \\uparrow \\Rightarrow I \\downarrow \\Rightarrow I^2R \\downarrow', context: 'Why we use high voltage', neet_frequency: 'high' },
        ],
        specialCases: [
          'Double V → quarter the loss',
          'That\'s why power is transmitted at very high voltages',
        ],
        dimensionalCheck: '[P] = W',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking transformer works with DC',
        correct: 'Transformer needs changing flux (dΦ/dt ≠ 0). DC gives constant flux, so no induced EMF.',
        whyItHappens: 'Not connecting to Faraday\'s law',
        neetExample: 'NEET 2020: Why doesn\'t transformer work with DC?',
      },
      {
        mistake: 'Thinking step-up transformer increases power',
        correct: 'Power is conserved (ideally): P₁ = P₂. Step-up increases V but decreases I proportionally.',
        whyItHappens: 'Thinking more voltage = more power',
        neetExample: 'NEET 2019: Power in primary vs secondary',
      },
      {
        mistake: 'Wrong current-turns relationship',
        correct: 'I₂/I₁ = N₁/N₂ (inverse of voltage ratio). Step-up gives lower current.',
        whyItHappens: 'Confusing with voltage ratio',
        neetExample: 'NEET 2021: Current in secondary of step-up transformer',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Calculate secondary voltage/current', difficulty: 'easy' },
      { type: 'numerical', description: 'Transformer efficiency', difficulty: 'medium' },
      { type: 'numerical', description: 'Power loss in transmission', difficulty: 'medium' },
      { type: 'conceptual', description: 'Why transformers need AC', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Turns ratio calculations', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Power transmission losses', frequency: 'high', yearAsked: [2019, 2021, 2022] },
      { pattern: 'Transformer efficiency', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Transformer voltage-current trade',
        analogy: 'Gear ratio',
        mapping: 'Gears trade speed for torque; transformer trades voltage for current',
      },
      {
        concept: 'High voltage transmission',
        analogy: 'Thin straw for fast water',
        mapping: 'Same water flow (power) through thin straw (wire) needs high pressure (voltage)',
      },
    ],
    
    questions: [],
  },

  // Topic 6: LC Oscillations
  {
    id: 'lc-oscillations',
    name: 'LC Oscillations',
    weightage: 1,
    difficulty: 'medium',
    
    theory: {
      summary: "In an LC circuit, energy oscillates between capacitor (electric field) and inductor (magnetic field). Frequency of oscillation: f = 1/(2π√LC). This is electrical analog of mechanical SHM. Charge varies as q = q₀ cos(ωt) or q₀ sin(ωt). Total energy is constant (no resistance).",
      realWorldAnalogy: "Like a pendulum - energy swings between potential (capacitor, height) and kinetic (inductor, motion). At extremes, all energy in one form; at center, all in the other.",
      keyPoints: [
        "Oscillation frequency: f = 1/(2π√LC) (same as resonant frequency)",
        "Charge: q = q₀ cos(ωt + φ)",
        "Current: I = -ωq₀ sin(ωt + φ) = I₀ cos(ωt + φ + π/2)",
        "Energy in capacitor: UC = q²/2C",
        "Energy in inductor: UL = LI²/2",
        "Total energy: U = UC + UL = q₀²/2C = LI₀²/2 = constant",
        "Analogy: q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k (spring constant)",
      ],
      prerequisites: ['self-induction', 'types-ac-circuits'],
    },
    
    formulas: [
      {
        id: 'lc-oscillation-freq',
        name: 'LC Oscillation Frequency',
        category: 'base',
        formula: 'f = 1/(2π√LC)',
        latex: 'f = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad \\omega = \\frac{1}{\\sqrt{LC}}',
        description: 'Natural frequency of oscillation in LC circuit',
        variables: [
          { symbol: 'f', meaning: 'Oscillation frequency', unit: 'Hz', typical_values: 'kHz to MHz' },
          { symbol: 'ω', meaning: 'Angular frequency', unit: 'rad/s', typical_values: '10³-10⁸ rad/s' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Time period', latex: 'T = 2\\pi\\sqrt{LC}', context: 'Period of oscillation', neet_frequency: 'high' },
          { name: 'Radio tuning', latex: 'f = \\frac{1}{2\\pi\\sqrt{LC}}', context: 'Select radio station', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Same as resonant frequency in LCR circuit',
          'Independent of initial conditions',
        ],
        dimensionalCheck: '[f] = 1/√(H·F) = Hz',
      },
      {
        id: 'charge-current-lc',
        name: 'Charge and Current in LC Circuit',
        category: 'derived',
        formula: 'q = q₀ cos(ωt), I = -ωq₀ sin(ωt)',
        latex: 'q = q_0\\cos(\\omega t), \\quad I = -\\omega q_0 \\sin(\\omega t)',
        description: 'Variation of charge and current with time',
        variables: [
          { symbol: 'q', meaning: 'Charge on capacitor', unit: 'C', typical_values: 'μC to mC' },
          { symbol: 'q₀', meaning: 'Maximum charge', unit: 'C', typical_values: 'μC to mC' },
          { symbol: 'I', meaning: 'Current in circuit', unit: 'A', typical_values: 'mA to A' },
        ],
        derivedFrom: 'lc-oscillation-freq',
        applications: [
          { name: 'Maximum current', latex: 'I_0 = \\omega q_0 = \\frac{q_0}{\\sqrt{LC}}', context: 'Peak current value', neet_frequency: 'high' },
          { name: 'Phase difference', latex: 'I \\text{ leads } q \\text{ by } 90°', context: 'Current and charge out of phase', neet_frequency: 'medium' },
        ],
        specialCases: [
          'When q = q₀, I = 0 (all energy in C)',
          'When q = 0, I = I₀ (all energy in L)',
        ],
        dimensionalCheck: '[q] = C, [I] = A',
      },
      {
        id: 'energy-lc',
        name: 'Energy in LC Oscillations',
        category: 'derived',
        formula: 'U_total = q²/2C + LI²/2 = q₀²/2C',
        latex: 'U = \\frac{q^2}{2C} + \\frac{LI^2}{2} = \\frac{q_0^2}{2C} = \\frac{LI_0^2}{2} = \\text{constant}',
        description: 'Total energy alternates between capacitor and inductor',
        variables: [
          { symbol: 'U', meaning: 'Total energy', unit: 'J', typical_values: 'μJ to J' },
          { symbol: 'UC', meaning: 'Energy in capacitor', unit: 'J', typical_values: 'Varies with time' },
          { symbol: 'UL', meaning: 'Energy in inductor', unit: 'J', typical_values: 'Varies with time' },
        ],
        derivedFrom: 'charge-current-lc',
        applications: [
          { name: 'Energy conservation', latex: 'U_C + U_L = \\text{constant}', context: 'No energy lost (ideal)', neet_frequency: 'high' },
          { name: 'Relation', latex: '\\frac{q_0^2}{2C} = \\frac{LI_0^2}{2}', context: 'Max energies equal', neet_frequency: 'high' },
        ],
        specialCases: [
          'At t = 0 (if C fully charged): all energy in C',
          'At t = T/4: all energy in L',
        ],
        dimensionalCheck: '[U] = J',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking total energy oscillates',
        correct: 'Total energy U = UC + UL is CONSTANT. Only the distribution oscillates.',
        whyItHappens: 'Confusing individual energies with total',
        neetExample: 'NEET 2020: Total energy at different instants in LC circuit',
      },
      {
        mistake: 'Thinking I and q are in phase',
        correct: 'I leads q by 90° (or I = dq/dt). When q is max, I is zero and vice versa.',
        whyItHappens: 'Not distinguishing current from charge variation',
        neetExample: 'NEET 2019: Phase relationship between I and q',
      },
      {
        mistake: 'Using wrong analogy with SHM',
        correct: 'q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k. Get the correspondences right.',
        whyItHappens: 'Random pairing of quantities',
        neetExample: 'NEET 2021: Electrical analog of mass in SHM',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Frequency of LC oscillation', difficulty: 'easy' },
      { type: 'numerical', description: 'Maximum current from initial charge', difficulty: 'medium' },
      { type: 'numerical', description: 'Energy at different instants', difficulty: 'medium' },
      { type: 'conceptual', description: 'Analogy with SHM', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'LC oscillation frequency', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
      { pattern: 'Energy distribution', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
      { pattern: 'Analogy with mechanical SHM', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'LC oscillation',
        analogy: 'Pendulum/spring',
        mapping: 'Energy swings between PE (capacitor) and KE (inductor) like PE and KE in pendulum',
      },
      {
        concept: 'L ↔ m, 1/C ↔ k',
        analogy: 'Inertia and stiffness',
        mapping: 'L resists current change (like mass), 1/C resists charge (like spring constant)',
      },
    ],
    
    questions: [],
  },
];

