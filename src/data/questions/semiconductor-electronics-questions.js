// Semiconductor Electronics Questions
// Chapter: semiconductor-electronics
// 18 curated NEET-style questions

export const semiconductorElectronicsQuestions = [
  {
    id: "semiconductor-pn-junction-01",
    text: "In forward bias, p-side is connected to:",
    options: [
      "Positive of battery",
      "Negative of battery",
      "Ground",
      "Floating"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Forward bias: p → positive terminal, n → negative. Reduces barrier, allows current",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "pn-junction",
    formulas: [
      "pn-junction"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "semiconductor-pn-junction-02",
    text: "Depletion region in forward bias:",
    options: [
      "Decreases",
      "Increases",
      "Remains same",
      "Disappears completely"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Forward bias reduces barrier potential → depletion width decreases",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "pn-junction",
    formulas: [
      "pn-junction"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "semiconductor-pn-junction-03",
    text: "Breakdown voltage is the voltage at which:",
    options: [
      "Reverse current increases sharply",
      "Forward current is max",
      "Diode stops working",
      "No current flows"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "In reverse bias, beyond breakdown voltage (Zener/avalanche), current increases dramatically",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "pn-junction",
    formulas: [
      "pn-junction"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "semiconductor-diode-equation-04",
    text: "Diode current-voltage relation is:",
    options: [
      "I = I₀(e^(V/V_T) - 1)",
      "I = V/R",
      "I = I₀V",
      "I = e^V"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Shockley equation: I = I₀(e^(qV/kT) - 1) where V_T = kT/q ≈ 26mV at room temp",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "pn-junction",
    formulas: [
      "diode-equation"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "semiconductor-diode-equation-05",
    text: "In forward bias (V >> V_T), diode current is approximately:",
    options: [
      "I ≈ I₀e^(V/V_T)",
      "I ≈ I₀",
      "I ≈ 0",
      "I ≈ V"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "For V >> 26mV: e^(V/V_T) >> 1, so I ≈ I₀e^(V/V_T) (exponential growth)",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "pn-junction",
    formulas: [
      "diode-equation"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "semiconductor-rectifier-06",
    text: "Half-wave rectifier conducts for:",
    options: [
      "One half of AC cycle",
      "Both halves",
      "No time",
      "Randomly"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "HWR: diode conducts only during positive half (if p-side toward AC source)",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "rectifier",
    formulas: [
      "rectifier"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "semiconductor-rectifier-07",
    text: "Full-wave rectifier uses:",
    options: [
      "2 diodes (center-tap) or 4 diodes (bridge)",
      "1 diode",
      "3 diodes",
      "6 diodes"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "FWR: 2 diodes with center-tap transformer OR 4 diodes in bridge configuration",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "rectifier",
    formulas: [
      "rectifier"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "semiconductor-rectifier-08",
    text: "Ripple factor indicates:",
    options: [
      "Amount of AC in rectified output",
      "DC voltage level",
      "Current rating",
      "Power dissipation"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Ripple factor = V_ac/V_dc in output. Lower is better (smoother DC)",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "rectifier",
    formulas: [
      "rectifier"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "semiconductor-transistor-current-gain-09",
    text: "Current gain β of transistor is:",
    options: [
      "β = I_C/I_B",
      "β = I_E/I_B",
      "β = I_B/I_C",
      "β = I_C/I_E"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "β = I_C/I_B (ratio of collector to base current). Typically 50-200",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-current-gain"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "semiconductor-transistor-current-gain-10",
    text: "If β = 100 and I_B = 20μA, collector current is:",
    options: [
      "2 mA",
      "200 μA",
      "20 mA",
      "0.2 mA"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "I_C = βI_B = 100×20×10⁻⁶ = 2×10⁻³ A = 2 mA",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-current-gain"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "semiconductor-transistor-current-gain-11",
    text: "Relation between α and β is:",
    options: [
      "α = β/(β+1)",
      "α = β",
      "α = 1/β",
      "α = β+1"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "α = I_C/I_E and β = I_C/I_B. Since I_E = I_B + I_C: α = β/(β+1)",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-current-gain"
    ],
    tags: [
      "neet-2020",
      "recall"
    ],
    year: 2020
  },
  {
    id: "semiconductor-transistor-amplifier-12",
    text: "In common emitter configuration, input is at:",
    options: [
      "Base",
      "Collector",
      "Emitter",
      "All"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "CE: input at base-emitter, output at collector-emitter. Emitter common to both",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-amplifier"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "semiconductor-transistor-amplifier-13",
    text: "Voltage gain of CE amplifier is approximately:",
    options: [
      "β×(R_C/R_in)",
      "β",
      "R_C/R_in",
      "1"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "A_v ≈ β(R_C/r_in) where R_C = collector resistance, r_in = input resistance",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-amplifier"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "semiconductor-transistor-amplifier-14",
    text: "Phase difference between input and output in CE amplifier is:",
    options: [
      "180°",
      "0°",
      "90°",
      "270°"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "CE amplifier inverts signal → 180° phase shift",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "transistor",
    formulas: [
      "transistor-amplifier"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "semiconductor-logic-gates-15",
    text: "AND gate gives output 1 when:",
    options: [
      "All inputs are 1",
      "At least one input is 1",
      "All inputs are 0",
      "Inputs are different"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "AND: Y = A·B. Output 1 only when ALL inputs are 1",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "logic-gates",
    formulas: [
      "logic-gates"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "semiconductor-logic-gates-16",
    text: "OR gate output is 0 when:",
    options: [
      "All inputs are 0",
      "At least one input is 0",
      "All inputs are 1",
      "Never"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "OR: Y = A+B. Output 0 only when ALL inputs are 0",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "logic-gates",
    formulas: [
      "logic-gates"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "semiconductor-logic-gates-17",
    text: "NOT gate is also called:",
    options: [
      "Inverter",
      "Buffer",
      "Multiplexer",
      "Decoder"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "NOT gate inverts input: Y = Ā. Also called inverter",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "logic-gates",
    formulas: [
      "logic-gates"
    ],
    tags: [
      "neet-2020",
      "recall"
    ],
    year: 2020
  },
  {
    id: "semiconductor-logic-gates-18",
    text: "NAND gate is equivalent to:",
    options: [
      "NOT(AND)",
      "NOT(OR)",
      "AND then OR",
      "OR then AND"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "NAND = NOT-AND. Y = (A·B)' = Ā + B̄ (De Morgan)",
    subject: "physics",
    chapter: "semiconductor-electronics",
    topic: "logic-gates",
    formulas: [
      "logic-gates"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  }
];