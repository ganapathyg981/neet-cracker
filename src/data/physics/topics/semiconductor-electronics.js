// Semiconductor Electronics - 5% weightage (Tier 1)
// NCERT Class 12, Chapter 14
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const semiconductorElectronicsTopics = [
  // Topic 1: Semiconductors and PN Junction
  {
    id: 'pn-junction-diode',
    name: 'Semiconductors & PN Junction Diode',
    weightage: 2,
    difficulty: 'medium',
    
    theory: {
      summary: "Semiconductors have conductivity between metals and insulators, with a small band gap (~1 eV). Intrinsic semiconductors (pure Si, Ge) have n_e = n_h. Doping creates extrinsic semiconductors: n-type (pentavalent dopant, electrons majority) and p-type (trivalent dopant, holes majority). A PN junction forms when p and n types are joined. A depletion region forms at the junction with built-in potential barrier (~0.7V Si, ~0.3V Ge). Forward bias reduces barrier → current flows. Reverse bias increases barrier → negligible current (only leakage current I₀).",
      realWorldAnalogy: "A PN junction is like a one-way door with a spring. In forward bias, you push the door open easily. In reverse bias, you're pushing against the spring - very hard to open. The spring force is the barrier potential.",
      keyPoints: [
        "Band gap: Si ~1.1 eV, Ge ~0.7 eV, Diamond ~5.4 eV",
        "Intrinsic semiconductor: n_e = n_h = n_i (pure material)",
        "n-type: Pentavalent dopant (P, As, Sb) → electrons are majority carriers",
        "p-type: Trivalent dopant (B, Al, Ga, In) → holes are majority carriers",
        "Mass action law: n_e × n_h = n_i² (constant at given T)",
        "Depletion region: Region near junction devoid of free charges",
        "Barrier potential: ~0.7V (Si), ~0.3V (Ge) - built-in electric field",
        "Forward bias: +ve to p, -ve to n → depletion width decreases → current flows",
        "Reverse bias: +ve to n, -ve to p → depletion width increases → negligible current",
        "Diode equation: I = I₀(e^(eV/kT) - 1)",
        "Dynamic/AC resistance: r_d = dV/dI ≈ 26mV/I (at room temperature)",
        "Breakdown: Zener (low V, heavy doping) or Avalanche (high V)",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 12, Chapter 14, Section 14.1-14.5",
    },
    
    formulas: [
      {
        id: 'carrier-concentration',
        name: 'Carrier Concentration',
        category: 'base',
        formula: 'n_e × n_h = n_i²',
        latex: 'n_e \\times n_h = n_i^2',
        description: 'Mass action law - product of carrier concentrations is constant',
        variables: [
          { symbol: 'n_e', meaning: 'Electron concentration', unit: 'm⁻³', typical_values: '10¹⁶ - 10²² m⁻³' },
          { symbol: 'n_h', meaning: 'Hole concentration', unit: 'm⁻³', typical_values: '10¹⁶ - 10²² m⁻³' },
          { symbol: 'n_i', meaning: 'Intrinsic carrier concentration', unit: 'm⁻³', typical_values: '~10¹⁶ m⁻³ for Si at 300K' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Intrinsic semiconductor', latex: 'n_e = n_h = n_i', context: 'Pure material', neet_frequency: 'high' },
          { name: 'n-type', latex: 'n_e \\gg n_h, \\quad n_e \\approx N_D', context: 'Donor concentration', neet_frequency: 'high' },
          { name: 'p-type', latex: 'n_h \\gg n_e, \\quad n_h \\approx N_A', context: 'Acceptor concentration', neet_frequency: 'high' },
        ],
        specialCases: [
          'n_i increases with temperature exponentially',
          'In n-type: electrons are majority, holes are minority',
          'In p-type: holes are majority, electrons are minority',
        ],
        dimensionalCheck: '[n] = m⁻³',
      },
      {
        id: 'conductivity',
        name: 'Conductivity of Semiconductor',
        category: 'derived',
        formula: 'σ = e(n_eμ_e + n_hμ_h)',
        latex: '\\sigma = e(n_e \\mu_e + n_h \\mu_h)',
        description: 'Total conductivity from both carrier types',
        variables: [
          { symbol: 'σ', meaning: 'Conductivity', unit: 'S/m (Ω⁻¹m⁻¹)', typical_values: '10⁻⁴ to 10² S/m' },
          { symbol: 'μ_e', meaning: 'Electron mobility', unit: 'm²/V·s', typical_values: '0.135 m²/V·s for Si' },
          { symbol: 'μ_h', meaning: 'Hole mobility', unit: 'm²/V·s', typical_values: '0.048 m²/V·s for Si' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Resistivity', latex: '\\rho = 1/\\sigma', context: 'Inverse of conductivity', neet_frequency: 'medium' },
          { name: 'n-type dominated', latex: '\\sigma \\approx e n_e \\mu_e', context: 'When n_e >> n_h', neet_frequency: 'medium' },
        ],
        specialCases: [
          'μ_e > μ_h always (electrons more mobile)',
          'Conductivity increases with temperature',
          'Doping increases conductivity significantly',
        ],
        dimensionalCheck: '[σ] = S/m',
      },
      {
        id: 'diode-equation',
        name: 'Diode Current Equation',
        category: 'base',
        formula: 'I = I₀(e^(eV/kT) - 1)',
        latex: 'I = I_0\\left(e^{\\frac{eV}{kT}} - 1\\right)',
        description: 'Current through diode as function of applied voltage',
        variables: [
          { symbol: 'I', meaning: 'Diode current', unit: 'A', typical_values: 'mA in forward bias' },
          { symbol: 'I₀', meaning: 'Reverse saturation current', unit: 'A', typical_values: 'nA to μA' },
          { symbol: 'V', meaning: 'Applied voltage', unit: 'V', typical_values: '-V_breakdown to +0.7V' },
          { symbol: 'k', meaning: 'Boltzmann constant', unit: 'J/K', typical_values: '1.38 × 10⁻²³ J/K' },
          { symbol: 'T', meaning: 'Temperature', unit: 'K', typical_values: '300 K (room temp)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Forward bias (V >> kT/e)', latex: 'I \\approx I_0 e^{eV/kT}', context: 'Exponential growth', neet_frequency: 'medium' },
          { name: 'Reverse bias (V < 0)', latex: 'I \\approx -I_0', context: 'Small reverse saturation', neet_frequency: 'medium' },
          { name: 'Thermal voltage', latex: 'V_T = \\frac{kT}{e} \\approx 26 \\text{ mV at 300K}', context: 'Important parameter', neet_frequency: 'medium' },
        ],
        specialCases: [
          'At V = 0: I = 0',
          'kT/e ≈ 26 mV at room temperature',
          'I₀ doubles for every 10°C rise in temperature',
        ],
        dimensionalCheck: '[I] = A',
      },
      {
        id: 'barrier-potential',
        name: 'Barrier Potential',
        category: 'base',
        formula: 'V_bi ≈ 0.7V (Si), 0.3V (Ge)',
        latex: 'V_{bi} \\approx 0.7V \\text{ (Si)}, \\quad 0.3V \\text{ (Ge)}',
        description: 'Built-in potential across depletion region',
        variables: [
          { symbol: 'V_bi', meaning: 'Built-in/barrier potential', unit: 'V', typical_values: '0.3-0.7 V' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Cut-in voltage', latex: 'V_{knee} \\approx V_{bi}', context: 'Voltage to start forward conduction', neet_frequency: 'high' },
          { name: 'Temperature dependence', latex: '\\frac{dV_{bi}}{dT} \\approx -2 \\text{ mV/°C}', context: 'Decreases with temperature', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Must overcome barrier for significant forward current',
          'Si diode drops ~0.7V when conducting',
          'Ge diode drops ~0.3V when conducting',
        ],
        dimensionalCheck: '[V] = V',
      },
      {
        id: 'depletion-width',
        name: 'Depletion Region Width',
        category: 'derived',
        formula: 'W ∝ √(V_bi + V_R)',
        latex: 'W \\propto \\sqrt{V_{bi} + V_R}',
        description: 'Width of depletion region depends on bias',
        variables: [
          { symbol: 'W', meaning: 'Depletion width', unit: 'm', typical_values: '0.1-10 μm' },
          { symbol: 'V_R', meaning: 'Reverse bias voltage', unit: 'V', typical_values: '0-100 V' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Forward bias effect', latex: 'W \\downarrow \\text{ (decreases)}', context: 'Barrier reduced', neet_frequency: 'high' },
          { name: 'Reverse bias effect', latex: 'W \\uparrow \\text{ (increases)}', context: 'Barrier increased', neet_frequency: 'high' },
          { name: 'Junction capacitance', latex: 'C \\propto 1/W \\propto 1/\\sqrt{V_R}', context: 'Varactor diode principle', neet_frequency: 'medium' },
        ],
        specialCases: [
          'More reverse bias → wider depletion region',
          'Forward bias narrows depletion region',
          'At breakdown, depletion region cannot widen further',
        ],
        dimensionalCheck: '[W] = m',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing forward and reverse bias connections',
        correct: 'Forward bias: +ve terminal to p-side, -ve to n-side (like battery + to p). Reverse: opposite.',
        whyItHappens: 'Not remembering which terminal connects where',
        neetExample: 'NEET 2020: Identify forward/reverse bias from circuit diagram',
      },
      {
        mistake: 'Thinking electrons are majority in p-type',
        correct: 'In p-type: HOLES are majority (from trivalent dopant). In n-type: ELECTRONS are majority (from pentavalent dopant).',
        whyItHappens: 'Confusing n-type and p-type characteristics',
        neetExample: 'NEET 2019: Majority carriers in p-type semiconductor',
      },
      {
        mistake: 'Assuming zero current in reverse bias',
        correct: 'Small reverse saturation current I₀ flows due to minority carriers. It\'s small but not zero.',
        whyItHappens: 'Oversimplifying ideal diode model',
        neetExample: 'NEET 2021: Current in reverse biased diode',
      },
      {
        mistake: 'Confusing barrier potential with applied voltage',
        correct: 'Barrier potential is BUILT-IN (without external voltage). Applied voltage adds to or subtracts from it.',
        whyItHappens: 'Not understanding intrinsic vs applied potentials',
        neetExample: 'NEET 2022: Effect of forward bias on barrier potential',
      },
      {
        mistake: 'Wrong dopant type for n-type and p-type',
        correct: 'n-type: Group V (pentavalent) - P, As, Sb. p-type: Group III (trivalent) - B, Al, Ga, In.',
        whyItHappens: 'Mixing up dopant groups',
        neetExample: 'NEET 2023: Which dopant creates n-type silicon?',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Identify n-type or p-type from dopant', difficulty: 'easy' },
      { type: 'conceptual', description: 'Forward vs reverse bias characteristics', difficulty: 'easy' },
      { type: 'conceptual', description: 'Majority and minority carriers', difficulty: 'easy' },
      { type: 'graphical', description: 'I-V characteristics of diode', difficulty: 'medium' },
      { type: 'conceptual', description: 'Effect of temperature on semiconductor', difficulty: 'medium' },
      { type: 'numerical', description: 'Carrier concentration using mass action law', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Forward/reverse bias identification', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Barrier potential values (Si vs Ge)', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022] },
      { pattern: 'Dopants for n-type and p-type', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022, 2023] },
      { pattern: 'Majority/minority carriers', frequency: 'high', yearAsked: [2019, 2020, 2021, 2023] },
      { pattern: 'Depletion region behavior', frequency: 'medium', yearAsked: [2018, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'PN junction',
        analogy: 'One-way valve (check valve)',
        mapping: 'Current flows easily in one direction (forward), blocked in other (reverse)',
      },
      {
        concept: 'Barrier potential',
        analogy: 'Hill to climb',
        mapping: 'Forward bias helps push over hill (reduces barrier), reverse bias makes hill higher',
      },
      {
        concept: 'Depletion region',
        analogy: 'No-man\'s land between territories',
        mapping: 'Region where both carriers have diffused away, creating an insulating layer',
      },
      {
        concept: 'n-type doping',
        analogy: 'Adding extra marbles to a grid',
        mapping: 'Pentavalent atoms bring extra electron - like adding an extra marble that\'s free to move',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Diode Applications
  {
    id: 'diode-applications',
    name: 'Diode Applications: Rectifiers & Special Diodes',
    weightage: 2,
    difficulty: 'medium',
    
    theory: {
      summary: "Diodes have many applications: (1) Rectifiers convert AC to DC - half-wave uses one diode (f_out = f_in), full-wave uses 2 or 4 diodes (f_out = 2f_in). (2) Zener diode operates in reverse breakdown for voltage regulation - maintains constant V_Z across load. (3) Photodiode operates in reverse bias - light generates current. (4) LED operates in forward bias - current produces light (color depends on bandgap). (5) Solar cell converts light to electricity. The bridge rectifier (4 diodes) is most efficient full-wave rectifier.",
      realWorldAnalogy: "Rectifier is like a one-way traffic system on a two-way road - only allows traffic in one direction. Zener diode is like a pressure relief valve - opens at set pressure to maintain constant pressure. LED is like a glow stick - converts electrical energy directly to light.",
      keyPoints: [
        "Half-wave rectifier: 1 diode, output frequency = input frequency",
        "Full-wave rectifier: 2 or 4 diodes, f_out = 2f_in",
        "Bridge rectifier: 4 diodes, no center-tap transformer needed",
        "Ripple factor: measure of AC component in DC output",
        "Filter capacitor reduces ripple (smooths output)",
        "Zener diode: operates in reverse breakdown, V_Z constant",
        "Zener used as voltage regulator (constant output voltage)",
        "Photodiode: reverse biased, current ∝ light intensity",
        "LED: forward biased, emits light, color depends on E_g",
        "LED wavelength: λ = hc/E_g ≈ 1240/E_g(eV) nm",
        "Solar cell: light generates electron-hole pairs → current",
      ],
      prerequisites: ['pn-junction-diode'],
      ncertReference: "NCERT Class 12, Chapter 14, Section 14.6-14.8",
    },
    
    formulas: [
      {
        id: 'rectifier-frequency',
        name: 'Rectifier Output Frequency',
        category: 'base',
        formula: 'f_half = f_in, f_full = 2f_in',
        latex: 'f_{half} = f_{in}, \\quad f_{full} = 2f_{in}',
        description: 'Output ripple frequency of rectified signal',
        variables: [
          { symbol: 'f_half', meaning: 'Half-wave output frequency', unit: 'Hz', typical_values: 'Same as input (50 Hz)' },
          { symbol: 'f_full', meaning: 'Full-wave output frequency', unit: 'Hz', typical_values: 'Double input (100 Hz)' },
          { symbol: 'f_in', meaning: 'Input AC frequency', unit: 'Hz', typical_values: '50 Hz (India), 60 Hz (US)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'India mains (50 Hz)', latex: 'f_{full} = 2 \\times 50 = 100 \\text{ Hz}', context: 'Full-wave output', neet_frequency: 'high' },
          { name: 'Half-wave', latex: 'f_{out} = 50 \\text{ Hz}', context: 'Same as input', neet_frequency: 'high' },
          { name: 'Bridge rectifier', latex: 'f_{out} = 2f_{in}', context: 'Also full-wave', neet_frequency: 'high' },
        ],
        specialCases: [
          'Half-wave: one pulse per input cycle',
          'Full-wave: two pulses per input cycle (both halves used)',
          'Higher frequency → easier to filter to pure DC',
        ],
        dimensionalCheck: '[f] = Hz',
      },
      {
        id: 'rectifier-efficiency',
        name: 'Rectifier Efficiency',
        category: 'derived',
        formula: 'η = P_DC/P_AC',
        latex: '\\eta = \\frac{P_{DC}}{P_{AC}}',
        description: 'Ratio of DC power output to AC power input',
        variables: [
          { symbol: 'η', meaning: 'Rectifier efficiency', unit: '%', typical_values: '40.6% (half), 81.2% (full)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Half-wave', latex: '\\eta_{max} = 40.6\\%', context: 'Without filter', neet_frequency: 'medium' },
          { name: 'Full-wave', latex: '\\eta_{max} = 81.2\\%', context: 'Double of half-wave', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Full-wave twice as efficient as half-wave',
          'Practical efficiency lower due to diode drops',
          'Bridge has 2 diode drops per path',
        ],
        dimensionalCheck: 'Dimensionless ratio (×100 for %)',
      },
      {
        id: 'zener-regulation',
        name: 'Zener Voltage Regulator',
        category: 'base',
        formula: 'V_out = V_Z (constant)',
        latex: 'V_{out} = V_Z \\text{ (constant)}',
        description: 'Zener diode maintains constant output voltage',
        variables: [
          { symbol: 'V_Z', meaning: 'Zener breakdown voltage', unit: 'V', typical_values: '3-30 V (common values)' },
          { symbol: 'V_out', meaning: 'Regulated output voltage', unit: 'V', typical_values: 'Equal to V_Z' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Series resistance', latex: 'R_S = \\frac{V_{in} - V_Z}{I_Z + I_L}', context: 'Current limiting resistor', neet_frequency: 'medium' },
          { name: 'Load current', latex: 'I_L = \\frac{V_Z}{R_L}', context: 'Current through load', neet_frequency: 'medium' },
          { name: 'Zener current', latex: 'I_Z = I_S - I_L', context: 'Current through Zener', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Zener must be reverse biased for regulation',
          'V_in must exceed V_Z for regulation',
          'Series resistor essential to limit current',
        ],
        dimensionalCheck: '[V] = V',
      },
      {
        id: 'led-wavelength',
        name: 'LED Emission Wavelength',
        category: 'derived',
        formula: 'λ = hc/E_g = 1240/E_g(eV) nm',
        latex: '\\lambda = \\frac{hc}{E_g} = \\frac{1240}{E_g(eV)} \\text{ nm}',
        description: 'Wavelength of LED emission depends on bandgap',
        variables: [
          { symbol: 'λ', meaning: 'Wavelength of emitted light', unit: 'nm', typical_values: '400-700 nm (visible)' },
          { symbol: 'E_g', meaning: 'Bandgap energy', unit: 'eV', typical_values: '1.8-3.5 eV' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Red LED', latex: '\\lambda \\approx 650 nm, E_g \\approx 1.9 eV', context: 'GaAsP', neet_frequency: 'medium' },
          { name: 'Green LED', latex: '\\lambda \\approx 550 nm, E_g \\approx 2.3 eV', context: 'GaP', neet_frequency: 'medium' },
          { name: 'Blue LED', latex: '\\lambda \\approx 450 nm, E_g \\approx 2.8 eV', context: 'GaN', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Larger bandgap → shorter wavelength (blue/violet)',
          'Smaller bandgap → longer wavelength (red/IR)',
          'White LED: blue LED + phosphor coating',
        ],
        dimensionalCheck: '[λ] = nm',
      },
      {
        id: 'solar-cell',
        name: 'Solar Cell Parameters',
        category: 'derived',
        formula: 'P = V_oc × I_sc × FF',
        latex: 'P_{max} = V_{oc} \\times I_{sc} \\times FF',
        description: 'Maximum power from solar cell',
        variables: [
          { symbol: 'V_oc', meaning: 'Open circuit voltage', unit: 'V', typical_values: '0.5-0.7 V per cell' },
          { symbol: 'I_sc', meaning: 'Short circuit current', unit: 'A', typical_values: 'Depends on area, light intensity' },
          { symbol: 'FF', meaning: 'Fill factor', unit: 'dimensionless', typical_values: '0.7-0.85' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Efficiency', latex: '\\eta = \\frac{P_{out}}{P_{in}} = \\frac{V_{oc} I_{sc} FF}{P_{sun}}', context: 'Typically 15-25%', neet_frequency: 'low' },
        ],
        specialCases: [
          'Made from Si, GaAs, or thin film materials',
          'Works like reverse-biased photodiode with no external bias',
          'I_sc ∝ light intensity',
        ],
        dimensionalCheck: '[P] = W',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Wrong output frequency for full-wave rectifier',
        correct: 'Full-wave output frequency = 2 × input frequency. For 50 Hz input, output is 100 Hz, not 50 Hz.',
        whyItHappens: 'Not understanding that both half-cycles are rectified',
        neetExample: 'NEET 2020: Output frequency of bridge rectifier with 50 Hz input',
      },
      {
        mistake: 'Operating Zener diode in forward bias',
        correct: 'Zener diode must be REVERSE biased for voltage regulation. In forward bias, it behaves like normal diode.',
        whyItHappens: 'Treating it like normal diode',
        neetExample: 'NEET 2019: Correct biasing for Zener voltage regulator',
      },
      {
        mistake: 'Confusing LED and photodiode operation',
        correct: 'LED: FORWARD bias → light OUT. Photodiode: REVERSE bias, light IN → current OUT. Opposite processes!',
        whyItHappens: 'Both involve light, but opposite directions',
        neetExample: 'NEET 2021: Biasing of photodiode for operation',
      },
      {
        mistake: 'Thinking LED color depends on current',
        correct: 'LED color depends on BANDGAP of material, not current. Current affects brightness, not color.',
        whyItHappens: 'Confusing color and intensity',
        neetExample: 'NEET 2022: What determines LED color?',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Rectifier output frequency calculation', difficulty: 'easy' },
      { type: 'conceptual', description: 'Zener diode as voltage regulator', difficulty: 'medium' },
      { type: 'conceptual', description: 'LED vs photodiode: biasing and operation', difficulty: 'easy' },
      { type: 'numerical', description: 'LED wavelength from bandgap', difficulty: 'medium' },
      { type: 'conceptual', description: 'Components of rectifier circuit', difficulty: 'easy' },
      { type: 'conceptual', description: 'Full-wave vs half-wave comparison', difficulty: 'easy' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Rectifier output frequency', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Zener diode voltage regulation', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022, 2023] },
      { pattern: 'LED and photodiode operation', frequency: 'high', yearAsked: [2018, 2020, 2021, 2022] },
      { pattern: 'Half-wave vs full-wave comparison', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
      { pattern: 'Bridge rectifier circuit', frequency: 'medium', yearAsked: [2019, 2021, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Rectifier',
        analogy: 'One-way street from two-way',
        mapping: 'Converts alternating (two-way) traffic to one-direction flow',
      },
      {
        concept: 'Zener diode',
        analogy: 'Pressure relief valve',
        mapping: 'Opens at set pressure (voltage), maintains constant pressure regardless of input',
      },
      {
        concept: 'LED',
        analogy: 'Glowstick',
        mapping: 'Energy input produces light. Color depends on the chemicals (bandgap) inside.',
      },
      {
        concept: 'Photodiode',
        analogy: 'Solar-powered water pump',
        mapping: 'Light energy creates flow (current). More light = more flow.',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Logic Gates and Digital Electronics
  {
    id: 'logic-gates',
    name: 'Logic Gates & Digital Electronics',
    weightage: 1,
    difficulty: 'easy',
    
    theory: {
      summary: "Logic gates perform Boolean operations on binary inputs (0 or 1). Basic gates: AND (both high → high), OR (any high → high), NOT (inverts). Derived gates: NAND (NOT-AND), NOR (NOT-OR), XOR (exclusive OR - different → high), XNOR (same → high). NAND and NOR are universal gates - any other gate can be built using only NAND gates OR only NOR gates. Truth tables define gate behavior. De Morgan's theorems: (A+B)' = A'B' and (AB)' = A'+B' help simplify circuits.",
      realWorldAnalogy: "AND gate is like a series switch circuit - both switches must be ON for light to glow. OR gate is like parallel switches - either one ON lights the bulb. Universal gates (NAND/NOR) are like LEGO blocks - you can build any structure using just one type.",
      keyPoints: [
        "Binary: 0 (LOW, ~0V) and 1 (HIGH, ~5V)",
        "AND: Y = A·B (output 1 only when ALL inputs are 1)",
        "OR: Y = A+B (output 1 when ANY input is 1)",
        "NOT: Y = A' = Ā (inverts input)",
        "NAND: Y = (A·B)' (opposite of AND)",
        "NOR: Y = (A+B)' (opposite of OR)",
        "XOR: Y = A⊕B = A'B + AB' (different inputs → 1)",
        "XNOR: Y = (A⊕B)' = AB + A'B' (same inputs → 1)",
        "Universal gates: NAND and NOR can make any other gate",
        "De Morgan: (A+B)' = A'·B' and (AB)' = A'+B'",
        "Boolean laws: A+0=A, A·1=A, A+A'=1, A·A'=0",
        "NAND = NOT + AND, so NOT = NAND with inputs tied together",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 12, Chapter 14, Section 14.9",
    },
    
    formulas: [
      {
        id: 'basic-gates',
        name: 'Basic Gate Operations',
        category: 'base',
        formula: 'AND, OR, NOT',
        latex: 'Y_{AND} = A \\cdot B, \\quad Y_{OR} = A + B, \\quad Y_{NOT} = \\bar{A}',
        description: 'Fundamental Boolean operations',
        variables: [
          { symbol: 'A, B', meaning: 'Binary inputs', unit: 'dimensionless', typical_values: '0 or 1' },
          { symbol: 'Y', meaning: 'Output', unit: 'dimensionless', typical_values: '0 or 1' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'AND truth table', latex: '0 \\cdot 0 = 0, 0 \\cdot 1 = 0, 1 \\cdot 0 = 0, 1 \\cdot 1 = 1', context: 'Only 1·1=1', neet_frequency: 'high' },
          { name: 'OR truth table', latex: '0+0=0, 0+1=1, 1+0=1, 1+1=1', context: 'Only 0+0=0', neet_frequency: 'high' },
          { name: 'NOT truth table', latex: "0' = 1, 1' = 0", context: 'Inverts input', neet_frequency: 'high' },
        ],
        specialCases: [
          'AND: Think of it as multiplication',
          'OR: Think of it as addition (but 1+1=1 not 2)',
          'NOT: Flips the bit',
        ],
        dimensionalCheck: 'Dimensionless (binary)',
      },
      {
        id: 'derived-gates',
        name: 'Derived Gates',
        category: 'derived',
        formula: 'NAND, NOR, XOR, XNOR',
        latex: 'Y_{NAND} = \\overline{A \\cdot B}, \\quad Y_{NOR} = \\overline{A + B}, \\quad Y_{XOR} = A \\oplus B',
        description: 'Gates built from basic gates',
        variables: [
          { symbol: 'NAND', meaning: 'NOT-AND', unit: 'gate', typical_values: '0 only when both 1' },
          { symbol: 'NOR', meaning: 'NOT-OR', unit: 'gate', typical_values: '1 only when both 0' },
          { symbol: 'XOR', meaning: 'Exclusive OR', unit: 'gate', typical_values: '1 when inputs differ' },
        ],
        derivedFrom: 'basic-gates',
        applications: [
          { name: 'NAND truth table', latex: '\\overline{1 \\cdot 1} = 0, \\text{ all others } = 1', context: 'Opposite of AND', neet_frequency: 'high' },
          { name: 'NOR truth table', latex: '\\overline{0+0} = 1, \\text{ all others } = 0', context: 'Opposite of OR', neet_frequency: 'high' },
          { name: 'XOR truth table', latex: '0 \\oplus 0 = 0, 0 \\oplus 1 = 1, 1 \\oplus 0 = 1, 1 \\oplus 1 = 0', context: 'Different = 1', neet_frequency: 'medium' },
        ],
        specialCases: [
          'NAND: Universal gate',
          'NOR: Universal gate',
          'XOR: Used in addition circuits (half-adder)',
          'XNOR: Same inputs give 1 (equality checker)',
        ],
        dimensionalCheck: 'Dimensionless (binary)',
      },
      {
        id: 'de-morgans',
        name: "De Morgan's Theorems",
        category: 'base',
        formula: '(A+B)\' = A\'·B\', (A·B)\' = A\'+B\'',
        latex: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B}, \\quad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
        description: 'Laws for converting between AND/OR with inversions',
        variables: [
          { symbol: 'A, B', meaning: 'Boolean variables', unit: 'dimensionless', typical_values: '0 or 1' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'NOR = AND of NOTs', latex: '\\overline{A+B} = \\bar{A} \\cdot \\bar{B}', context: 'First theorem', neet_frequency: 'high' },
          { name: 'NAND = OR of NOTs', latex: '\\overline{A \\cdot B} = \\bar{A} + \\bar{B}', context: 'Second theorem', neet_frequency: 'high' },
        ],
        specialCases: [
          'Useful for circuit simplification',
          'Break the bar, change the sign',
          'Helps prove NAND/NOR are universal',
        ],
        dimensionalCheck: 'Dimensionless',
      },
      {
        id: 'universal-gates',
        name: 'Universal Gates',
        category: 'derived',
        formula: 'NAND or NOR can create any gate',
        latex: '\\text{NOT from NAND: } \\overline{A \\cdot A} = \\bar{A}',
        description: 'Building all gates from only NAND or only NOR',
        variables: [
          { symbol: 'Universal', meaning: 'Can build any logic', unit: 'concept', typical_values: 'NAND, NOR' },
        ],
        derivedFrom: 'de-morgans',
        applications: [
          { name: 'NOT from NAND', latex: 'Y = \\overline{A \\cdot A} = \\bar{A}', context: 'Connect both inputs together', neet_frequency: 'high' },
          { name: 'AND from NAND', latex: 'Y = \\overline{\\overline{A \\cdot B}} = A \\cdot B', context: 'NAND followed by NOT', neet_frequency: 'high' },
          { name: 'OR from NAND', latex: 'Y = \\overline{\\bar{A} \\cdot \\bar{B}} = A + B', context: 'NOT inputs then NAND', neet_frequency: 'high' },
          { name: 'NOT from NOR', latex: 'Y = \\overline{A + A} = \\bar{A}', context: 'Connect both inputs together', neet_frequency: 'medium' },
        ],
        specialCases: [
          'NAND: 2 NANDs make AND, 3 NANDs make OR',
          'NOR: 2 NORs make OR, 3 NORs make AND',
          'Any combinational circuit buildable with just one type',
        ],
        dimensionalCheck: 'Logic operations',
      },
      {
        id: 'boolean-laws',
        name: 'Boolean Algebra Laws',
        category: 'base',
        formula: 'A+0=A, A·1=A, A+A\'=1, A·A\'=0',
        latex: 'A+0=A, \\quad A \\cdot 1=A, \\quad A+\\bar{A}=1, \\quad A \\cdot \\bar{A}=0',
        description: 'Fundamental Boolean algebra identities',
        variables: [
          { symbol: 'A', meaning: 'Boolean variable', unit: 'dimensionless', typical_values: '0 or 1' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Identity laws', latex: 'A+0=A, A \\cdot 1=A', context: '0 is identity for OR, 1 for AND', neet_frequency: 'medium' },
          { name: 'Complement laws', latex: 'A+\\bar{A}=1, A \\cdot \\bar{A}=0', context: 'Variable and complement', neet_frequency: 'medium' },
          { name: 'Idempotent', latex: 'A+A=A, A \\cdot A=A', context: 'Repeated variable', neet_frequency: 'low' },
        ],
        specialCases: [
          'A + 1 = 1 (always true with 1)',
          'A · 0 = 0 (always false with 0)',
          'Double complement: (A\')\'= A',
        ],
        dimensionalCheck: 'Boolean algebra',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing NAND and NOR outputs',
        correct: 'NAND: output 0 ONLY when both inputs are 1. NOR: output 1 ONLY when both inputs are 0. They are complements of AND and OR.',
        whyItHappens: 'Similar names, easy to mix up',
        neetExample: 'NEET 2020: Complete truth table for NAND gate',
      },
      {
        mistake: 'Forgetting that NAND/NOR are universal',
        correct: 'ANY logic gate can be built using only NAND gates OR only NOR gates. This is why they are called "universal."',
        whyItHappens: 'Not understanding universality concept',
        neetExample: 'NEET 2019: Build OR gate using only NAND gates',
      },
      {
        mistake: 'Wrong XOR output for same inputs',
        correct: 'XOR gives 0 when inputs are SAME, 1 when DIFFERENT. XNOR is opposite.',
        whyItHappens: 'Confusing XOR with OR',
        neetExample: 'NEET 2021: Output of XOR when both inputs are 1',
      },
      {
        mistake: 'Misapplying De Morgan\'s theorems',
        correct: '(A+B)\' = A\'·B\' (break bar, change + to ·). (A·B)\' = A\'+B\' (break bar, change · to +). The operation changes!',
        whyItHappens: 'Not remembering to change the operation',
        neetExample: 'NEET 2022: Simplify (A·B·C)\' using De Morgan',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Identify gate from truth table', difficulty: 'easy' },
      { type: 'conceptual', description: 'Complete truth table for given gate', difficulty: 'easy' },
      { type: 'conceptual', description: 'Write Boolean expression for circuit', difficulty: 'medium' },
      { type: 'conceptual', description: 'Build gate using universal gates', difficulty: 'medium' },
      { type: 'conceptual', description: 'Apply De Morgan\'s theorem', difficulty: 'medium' },
      { type: 'conceptual', description: 'Identify universal gate combinations', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Truth table identification', frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'NAND/NOR as universal gates', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Boolean expression from circuit', frequency: 'medium', yearAsked: [2018, 2021, 2022, 2023] },
      { pattern: 'De Morgan\'s theorem application', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'XOR/XNOR gate behavior', frequency: 'medium', yearAsked: [2018, 2020, 2021] },
    ],
    
    analogies: [
      {
        concept: 'AND gate',
        analogy: 'Series switches',
        mapping: 'Both switches must be closed (1) for light to turn on (output 1)',
      },
      {
        concept: 'OR gate',
        analogy: 'Parallel switches',
        mapping: 'Either switch closed (1) turns on light (output 1)',
      },
      {
        concept: 'NOT gate',
        analogy: 'Normally closed switch',
        mapping: 'Press (input 1) to turn off light (output 0)',
      },
      {
        concept: 'Universal gates',
        analogy: 'LEGO building blocks',
        mapping: 'Any structure can be built from just one type of block (NAND or NOR)',
      },
      {
        concept: 'XOR gate',
        analogy: 'Hallway with two switches',
        mapping: 'Light on when switches are in DIFFERENT positions - either one flips the light',
      },
    ],
    
    questions: [],
  },
];
