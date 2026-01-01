// SemiconductorElectronics Questions
// Updated: 2026-01-01T08:27:13.740Z
// Total: 102 questions

export const semiconductorElectronicsQuestions = [
  {
    "id": "semiconductor-pn-junction-01",
    "text": "In forward bias, p-side is connected to:",
    "options": [
      "Positive of battery",
      "Negative of battery",
      "Ground",
      "Floating"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Forward bias: p → positive terminal, n → negative. Reduces barrier, allows current",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "pn-junction"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-pn-junction-02",
    "text": "Depletion region in forward bias:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Disappears completely"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Forward bias reduces barrier potential → depletion width decreases",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "pn-junction"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-pn-junction-03",
    "text": "Breakdown voltage is the voltage at which:",
    "options": [
      "Reverse current increases sharply",
      "Forward current is max",
      "Diode stops working",
      "No current flows"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "In reverse bias, beyond breakdown voltage (Zener/avalanche), current increases dramatically",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "pn-junction"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-diode-equation-04",
    "text": "Diode current-voltage relation is:",
    "options": [
      "I = I₀(e^(V/V_T) - 1)",
      "I = V/R",
      "I = I₀V",
      "I = e^V"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Shockley equation: I = I₀(e^(qV/kT) - 1) where V_T = kT/q ≈ 26mV at room temp",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "diode-equation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-diode-equation-05",
    "text": "In forward bias (V >> V_T), diode current is approximately:",
    "options": [
      "I ≈ I₀e^(V/V_T)",
      "I ≈ I₀",
      "I ≈ 0",
      "I ≈ V"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "For V >> 26mV: e^(V/V_T) >> 1, so I ≈ I₀e^(V/V_T) (exponential growth)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "diode-equation"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-rectifier-06",
    "text": "Half-wave rectifier conducts for:",
    "options": [
      "One half of AC cycle",
      "Both halves",
      "No time",
      "Randomly"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "HWR: diode conducts only during positive half (if p-side toward AC source)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-rectifier-07",
    "text": "Full-wave rectifier uses:",
    "options": [
      "2 diodes (center-tap) or 4 diodes (bridge)",
      "1 diode",
      "3 diodes",
      "6 diodes"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "FWR: 2 diodes with center-tap transformer OR 4 diodes in bridge configuration",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-rectifier-08",
    "text": "Ripple factor indicates:",
    "options": [
      "Amount of AC in rectified output",
      "DC voltage level",
      "Current rating",
      "Power dissipation"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Ripple factor = V_ac/V_dc in output. Lower is better (smoother DC)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-transistor-current-gain-09",
    "text": "Current gain β of transistor is:",
    "options": [
      "β = I_C/I_B",
      "β = I_E/I_B",
      "β = I_B/I_C",
      "β = I_C/I_E"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "β = I_C/I_B (ratio of collector to base current). Typically 50-200",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-current-gain"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-transistor-current-gain-10",
    "text": "If β = 100 and I_B = 20μA, collector current is:",
    "options": [
      "2 mA",
      "200 μA",
      "20 mA",
      "0.2 mA"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "I_C = βI_B = 100×20×10⁻⁶ = 2×10⁻³ A = 2 mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-current-gain"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-transistor-current-gain-11",
    "text": "Relation between α and β is:",
    "options": [
      "α = β/(β+1)",
      "α = β",
      "α = 1/β",
      "α = β+1"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "α = I_C/I_E and β = I_C/I_B. Since I_E = I_B + I_C: α = β/(β+1)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-current-gain"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-transistor-amplifier-12",
    "text": "In common emitter configuration, input is at:",
    "options": [
      "Base",
      "Collector",
      "Emitter",
      "All"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "CE: input at base-emitter, output at collector-emitter. Emitter common to both",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-amplifier"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-transistor-amplifier-13",
    "text": "Voltage gain of CE amplifier is approximately:",
    "options": [
      "β×(R_C/R_in)",
      "β",
      "R_C/R_in",
      "1"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "A_v ≈ β(R_C/r_in) where R_C = collector resistance, r_in = input resistance",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-amplifier"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-transistor-amplifier-14",
    "text": "Phase difference between input and output in CE amplifier is:",
    "options": [
      "180°",
      "0°",
      "90°",
      "270°"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "CE amplifier inverts signal → 180° phase shift",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-amplifier"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-logic-gates-15",
    "text": "AND gate gives output 1 when:",
    "options": [
      "All inputs are 1",
      "At least one input is 1",
      "All inputs are 0",
      "Inputs are different"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "AND: Y = A·B. Output 1 only when ALL inputs are 1",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "logic-gates"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-logic-gates-16",
    "text": "OR gate output is 0 when:",
    "options": [
      "All inputs are 0",
      "At least one input is 0",
      "All inputs are 1",
      "Never"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "OR: Y = A+B. Output 0 only when ALL inputs are 0",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "logic-gates"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-logic-gates-17",
    "text": "NOT gate is also called:",
    "options": [
      "Inverter",
      "Buffer",
      "Multiplexer",
      "Decoder"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NOT gate inverts input: Y = Ā. Also called inverter",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "logic-gates"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-logic-gates-18",
    "text": "NAND gate is equivalent to:",
    "options": [
      "NOT(AND)",
      "NOT(OR)",
      "AND then OR",
      "OR then AND"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NAND = NOT-AND. Y = (A·B)' = Ā + B̄ (De Morgan)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "logic-gates"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-barrier-potential-01",
    "text": "Barrier potential in Si diode at 300K is approximately:",
    "options": [
      "0.7V",
      "0.3V",
      "1.0V",
      "0.5V"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Si: V_B≈0.7V, Ge: V_B≈0.3V at room temperature",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-barrier-potential-02",
    "text": "Barrier potential in Ge diode is:",
    "options": [
      "0.3V",
      "0.7V",
      "1.0V",
      "0V"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Ge has lower barrier ≈0.3V (vs Si 0.7V)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-barrier-potential-03",
    "text": "Barrier potential exists due to:",
    "options": [
      "Depletion region",
      "Forward bias",
      "Reverse bias",
      "External voltage"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Built-in potential across depletion region prevents carrier flow",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-barrier-potential-04",
    "text": "As temperature increases, barrier potential:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Higher T→more carriers→lower V_B (≈-2mV/°C for Si)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-barrier-potential-05",
    "text": "At 0K, barrier potential:",
    "options": [
      "Maximum",
      "Zero",
      "0.7V",
      "Negative"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "At absolute zero, V_B is maximum (no thermal carriers)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-barrier-potential-06",
    "text": "For conduction to start, applied voltage must be:",
    "options": [
      ">V_B",
      "<V_B",
      "=V_B/2",
      "Any value"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Forward bias must overcome barrier potential V_B",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "barrier-potential"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-07",
    "text": "Transistor α (alpha) is defined as:",
    "options": [
      "I_C/I_E",
      "I_C/I_B",
      "I_E/I_C",
      "I_B/I_E"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "α=I_C/I_E (collector current/emitter current)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-08",
    "text": "Typical value of α for transistor:",
    "options": [
      "0.95-0.99",
      "0.5-0.7",
      "1.0-1.5",
      "0.1-0.3"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "α=0.95-0.99 (close to 1, not exactly 1)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-09",
    "text": "If I_E=5mA and I_C=4.8mA, then α=",
    "options": [
      "0.96",
      "0.2",
      "1.04",
      "0.5"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "α=I_C/I_E=4.8/5=0.96",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-10",
    "text": "α<1 because:",
    "options": [
      "Some carriers recombine in base",
      "All carriers reach collector",
      "Base current is zero",
      "Emitter is reverse biased"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Small fraction lost in base due to recombination, so α<1",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-11",
    "text": "If α=0.98, what % of emitter current reaches collector?",
    "options": [
      "98%",
      "2%",
      "50%",
      "100%"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "α=0.98 means 98% of I_E becomes I_C",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-transistor-alpha-12",
    "text": "For α=0.95, if I_E=2mA, then I_C=",
    "options": [
      "1.9mA",
      "2mA",
      "0.1mA",
      "2.1mA"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "I_C=αI_E=0.95×2=1.9mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-alpha"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-transistor-beta-13",
    "text": "Transistor β (beta) is defined as:",
    "options": [
      "I_C/I_B",
      "I_C/I_E",
      "I_E/I_B",
      "I_B/I_C"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "β=I_C/I_B (current gain)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-transistor-beta-14",
    "text": "Typical value of β:",
    "options": [
      "50-200",
      "0.95-0.99",
      "1-5",
      "500-1000"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "β typically 50-200 (common values: 100, 150)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-transistor-beta-15",
    "text": "If I_B=20μA and I_C=2mA, then β=",
    "options": [
      "100",
      "0.01",
      "50",
      "200"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "β=I_C/I_B=2000/20=100",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-transistor-beta-16",
    "text": "Relation between α and β:",
    "options": [
      "β=α/(1-α)",
      "α=β/(1-β)",
      "α=β",
      "αβ=1"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "β=α/(1-α) or α=β/(1+β)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-transistor-beta-17",
    "text": "If α=0.98, then β=",
    "options": [
      "49",
      "0.98",
      "98",
      "25"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "β=0.98/(1-0.98)=0.98/0.02=49",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-transistor-beta-18",
    "text": "Higher β means:",
    "options": [
      "Better current amplification",
      "Lower gain",
      "More base current",
      "Less collector current"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "High β→large I_C for small I_B (good amplification)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "transistor-beta"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-19",
    "text": "Relation between α and β is:",
    "options": [
      "α=β/(1+β)",
      "α=β",
      "β=α",
      "α+β=1"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "α=β/(1+β) or β=α/(1-α)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-20",
    "text": "If β=99, find α:",
    "options": [
      "0.99",
      "99",
      "0.01",
      "1"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "α=β/(1+β)=99/100=0.99",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-21",
    "text": "If α=0.95, find β:",
    "options": [
      "19",
      "0.95",
      "20",
      "95"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "β=α/(1-α)=0.95/0.05=19",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-22",
    "text": "For α→1, β becomes:",
    "options": [
      "Very large",
      "Zero",
      "One",
      "Small"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "β=α/(1-α). As α→1, denominator→0, β→∞",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-23",
    "text": "α and β both are:",
    "options": [
      "Positive and <∞",
      "Negative",
      "Greater than 1",
      "Equal"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Both are positive ratios. α<1, β>1",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-alpha-beta-relation-24",
    "text": "If α increases from 0.95 to 0.98, β:",
    "options": [
      "Increases",
      "Decreases",
      "Same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "β∝α/(1-α). As α↑, (1-α)↓, so β↑",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "alpha-beta-relation"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-emitter-current-25",
    "text": "In transistor: I_E=",
    "options": [
      "I_B+I_C",
      "I_C-I_B",
      "I_B×I_C",
      "I_C/I_B"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Kirchhoff: I_E=I_B+I_C (emitter feeds both base and collector)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-emitter-current-26",
    "text": "If I_B=50μA and I_C=5mA, then I_E=",
    "options": [
      "5.05mA",
      "5mA",
      "4.95mA",
      "50μA"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "I_E=50μA+5mA=0.05+5=5.05mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-emitter-current-27",
    "text": "Emitter current is:",
    "options": [
      "Maximum",
      "Minimum",
      "Equal to I_C",
      "Equal to I_B"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "I_E is largest (sum of I_B and I_C)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-emitter-current-28",
    "text": "If α=0.98 and I_E=2mA, find I_B:",
    "options": [
      "0.04mA",
      "0.02mA",
      "1.96mA",
      "2mA"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "I_C=αI_E=1.96mA. I_B=I_E-I_C=2-1.96=0.04mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-emitter-current-29",
    "text": "In active mode, emitter-base junction is:",
    "options": [
      "Forward biased",
      "Reverse biased",
      "Unbiased",
      "Short circuit"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Active mode: E-B forward, C-B reverse",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2022",
      "recall"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-emitter-current-30",
    "text": "If I_E=10mA and α=0.95:",
    "options": [
      "I_C=9.5mA, I_B=0.5mA",
      "I_C=10mA, I_B=0",
      "I_C=5mA, I_B=5mA",
      "I_C=9.5mA, I_B=10.5mA"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "I_C=0.95×10=9.5mA. I_B=10-9.5=0.5mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "emitter-current"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-current-amplification-31",
    "text": "Current amplification factor in CE mode is:",
    "options": [
      "β",
      "α",
      "β+1",
      "1-α"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "CE mode: current gain = β = I_C/I_B",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-current-amplification-32",
    "text": "Current amplification in CB mode is:",
    "options": [
      "α",
      "β",
      "1",
      "β-1"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "CB mode: gain = α = I_C/I_E < 1",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-current-amplification-33",
    "text": "CE configuration provides:",
    "options": [
      "Maximum current gain",
      "Maximum voltage gain",
      "No gain",
      "α gain"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "CE: β>>1, highest current gain among configurations",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-current-amplification-34",
    "text": "If β=100, input I_B=10μA. Output I_C=",
    "options": [
      "1mA",
      "10μA",
      "100μA",
      "10mA"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "I_C=βI_B=100×10=1000μA=1mA",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-current-amplification-35",
    "text": "Small signal current gain h_fe equals:",
    "options": [
      "β",
      "α",
      "1/β",
      "1/α"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "h_fe = β (small signal current gain parameter)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2022",
      "recall"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-current-amplification-36",
    "text": "To amplify weak signals, we need:",
    "options": [
      "High β",
      "Low β",
      "β=1",
      "β<1"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "High β means large amplification of small base currents",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "current-amplification"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-37",
    "text": "Voltage gain A_v in CE amplifier:",
    "options": [
      "β×(R_L/R_{in})",
      "β",
      "α",
      "R_L/R_{in}"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "A_v = β×(R_L/R_{in}) for CE amplifier",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-38",
    "text": "To increase voltage gain:",
    "options": [
      "Increase R_L or decrease R_{in}",
      "Decrease R_L",
      "Increase R_{in}",
      "Use low β"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "A_v ∝ R_L and ∝ 1/R_{in}",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-39",
    "text": "If β=100, R_L=5kΩ, R_{in}=1kΩ. Voltage gain?",
    "options": [
      "500",
      "100",
      "5",
      "50"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "A_v=100×(5/1)=500",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-40",
    "text": "Voltage gain is:",
    "options": [
      "Ratio of output to input voltage",
      "Always greater than 1",
      "Equal to β",
      "Same as current gain"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "A_v = V_out/V_in (can be <1, =1, or >1)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-41",
    "text": "CE amplifier has phase shift between input and output:",
    "options": [
      "180°",
      "0°",
      "90°",
      "360°"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "CE configuration: 180° phase inversion",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2022",
      "recall"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-voltage-amplification-42",
    "text": "CC amplifier voltage gain is approximately:",
    "options": [
      "≈1 (unity)",
      ">>1",
      ">100",
      "<1"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "CC (emitter follower): A_v≈1, high current gain",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2023",
      "recall"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-01",
    "text": "Intrinsic semiconductor: n×p =",
    "options": [
      "n_i²",
      "constant",
      "n+p",
      "0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Mass action law: np=n_i² (constant at given T)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-02",
    "text": "At thermal equilibrium, if n increases by doping, p:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "np=constant. If n↑, then p↓",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-03",
    "text": "Intrinsic carrier concentration n_i increases with:",
    "options": [
      "Temperature",
      "Doping",
      "Size",
      "Pressure"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n_i ∝ T^(3/2) × e^(-E_g/2kT). Higher T → more n_i",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-04",
    "text": "Si at 300K: n_i≈10¹⁰/cm³. If n=10¹⁶/cm³, then p≈",
    "options": [
      "10⁴/cm³",
      "10¹⁰/cm³",
      "10¹⁶/cm³",
      "10²⁶/cm³"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "np=n_i². p=(10¹⁰)²/10¹⁶=10⁴/cm³",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-05",
    "text": "In n-type semiconductor:",
    "options": [
      "n>>p",
      "p>>n",
      "n=p",
      "n=0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n-type: electrons (n) are majority carriers",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-carrier-concentration-06",
    "text": "Pure Si: n=p=n_i. This is called:",
    "options": [
      "Intrinsic semiconductor",
      "n-type",
      "p-type",
      "Extrinsic"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Intrinsic: no doping, n=p=n_i",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "carrier-concentration"
    ],
    "tags": [
      "neet-2023",
      "recall"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-conductivity-07",
    "text": "Conductivity σ =",
    "options": [
      "neμ_e + peμ_h",
      "ne + pe",
      "μ_e×μ_h",
      "n+p"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "σ = neμ_e + peμ_h (both carriers contribute)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-conductivity-08",
    "text": "Intrinsic semiconductor: σ_i =",
    "options": [
      "n_i×e(μ_e+μ_h)",
      "n_i×e×μ_e",
      "n_i²e",
      "neμ_e"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n=p=n_i: σ=n_i×e(μ_e+μ_h)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-conductivity-09",
    "text": "As temperature increases, semiconductor conductivity:",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Higher T → more carriers (n_i↑) → σ↑ (negative temp coefficient)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-conductivity-10",
    "text": "Conductivity unit is:",
    "options": [
      "S/m or Ω⁻¹m⁻¹",
      "Ω·m",
      "A/V",
      "V/A"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "σ in siemens/meter (S/m) = (Ω·m)⁻¹",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-conductivity-11",
    "text": "Heavily doped n-type: conductivity mainly due to:",
    "options": [
      "Electrons",
      "Holes",
      "Both equally",
      "Neither"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n>>p: electron term dominates σ≈neμ_e",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-conductivity-12",
    "text": "If electron mobility doubles, conductivity:",
    "options": [
      "Doubles (if n-type)",
      "Halves",
      "Quadruples",
      "Unchanged"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "σ∝μ_e for n-type. If μ_e→2μ_e, σ→2σ",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "pn-junction-diode",
    "formulas": [
      "conductivity"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-13",
    "text": "Rectifier efficiency η =",
    "options": [
      "P_DC/P_AC",
      "P_AC/P_DC",
      "V_DC/V_AC",
      "I_DC/I_AC"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "η = DC power output / AC power input",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-14",
    "text": "Half-wave rectifier maximum efficiency:",
    "options": [
      "40.6%",
      "81.2%",
      "100%",
      "50%"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Half-wave: η_max = 40.6% (0.406)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-15",
    "text": "Full-wave rectifier maximum efficiency:",
    "options": [
      "81.2%",
      "40.6%",
      "100%",
      "50%"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Full-wave: η_max = 81.2% (0.812)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-16",
    "text": "Full-wave is more efficient than half-wave because:",
    "options": [
      "Uses both half-cycles",
      "Higher voltage",
      "Lower current",
      "Simpler circuit"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Full-wave utilizes both halves of AC, better efficiency",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-17",
    "text": "Ideal rectifier has efficiency:",
    "options": [
      "100%",
      "81.2%",
      "40.6%",
      "50%"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Ideal: no losses, η=100% (theoretical)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-rectifier-efficiency-18",
    "text": "If load resistance increases, efficiency:",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "η increases with R_L (less diode loss)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "rectifier-efficiency"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-zener-regulation-19",
    "text": "Zener diode in reverse bias operates in:",
    "options": [
      "Breakdown region",
      "Forward region",
      "Cut-off",
      "Saturation"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Zener: reverse biased in breakdown, constant voltage",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-zener-regulation-20",
    "text": "Zener voltage V_Z=6V. Output voltage across it:",
    "options": [
      "6V (constant)",
      "Varies with load",
      "12V",
      "0V"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "In breakdown: V_out=V_Z (regulated constant voltage)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-zener-regulation-21",
    "text": "Zener regulator: series resistance R_S purpose:",
    "options": [
      "Limit current",
      "Increase voltage",
      "Store energy",
      "Block DC"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "R_S drops excess voltage and limits current",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-zener-regulation-22",
    "text": "V_in=15V, V_Z=6V, I_L=10mA, I_Z(min)=5mA. Min R_S?",
    "options": [
      "600Ω",
      "900Ω",
      "150Ω",
      "1500Ω"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "R_S=(V_in-V_Z)/(I_L+I_Z)=(15-6)/(15mA)=600Ω",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-zener-regulation-23",
    "text": "Load current increases. Zener current:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "I_S=I_L+I_Z=const. If I_L↑, I_Z↓",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-zener-regulation-24",
    "text": "Zener diode maintains:",
    "options": [
      "Constant voltage",
      "Constant current",
      "Constant resistance",
      "Constant power"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Voltage regulator: maintains constant V_out",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "zener-regulation"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-led-wavelength-25",
    "text": "LED emission wavelength depends on:",
    "options": [
      "Bandgap E_g",
      "Applied voltage",
      "Current",
      "Size"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "λ = hc/E_g. Wavelength determined by bandgap",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-led-wavelength-26",
    "text": "Relation: λ =",
    "options": [
      "hc/E_g",
      "E_g/hc",
      "h/E_g",
      "E_g×λ"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Energy-wavelength: E=hc/λ, so λ=hc/E",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-led-wavelength-27",
    "text": "LED with E_g=2eV emits approximately:",
    "options": [
      "620nm (red)",
      "450nm (blue)",
      "950nm (IR)",
      "380nm (UV)"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "λ=1240/E_g(eV) = 1240/2 = 620nm (red)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-led-wavelength-28",
    "text": "For blue LED (450nm), bandgap should be:",
    "options": [
      "~2.75eV",
      "~2eV",
      "~1.5eV",
      "~1eV"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "E_g=1240/450≈2.75eV",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-led-wavelength-29",
    "text": "IR LED has bandgap:",
    "options": [
      "<1.5eV (lower)",
      "~3eV (higher)",
      "~2eV",
      "~5eV"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "IR has longer λ → lower E_g (<1.5eV)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-led-wavelength-30",
    "text": "Higher bandgap semiconductor emits:",
    "options": [
      "Shorter wavelength",
      "Longer wavelength",
      "Same wavelength",
      "No light"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "E_g↑ → λ↓ (inverse relation)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "diode-applications",
    "formulas": [
      "led-wavelength"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-basic-gates-31",
    "text": "AND gate output is 1 when:",
    "options": [
      "All inputs are 1",
      "Any input is 1",
      "All inputs are 0",
      "Any input is 0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "AND: Y=A·B (1 only if all inputs are 1)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-basic-gates-32",
    "text": "OR gate output is 0 when:",
    "options": [
      "All inputs are 0",
      "Any input is 1",
      "All inputs are 1",
      "Any input is 0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "OR: Y=A+B (0 only if all inputs are 0)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-basic-gates-33",
    "text": "NOT gate has ___ input(s):",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NOT: inverter, single input Y=Ā",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-basic-gates-34",
    "text": "NAND gate is:",
    "options": [
      "AND followed by NOT",
      "OR followed by NOT",
      "NOT followed by AND",
      "XOR"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NAND = NOT-AND: Y=A·B̄",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-basic-gates-35",
    "text": "Universal gates are:",
    "options": [
      "NAND, NOR",
      "AND, OR",
      "NOT, XOR",
      "AND, NOT"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "NAND and NOR can implement any Boolean function",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-basic-gates-36",
    "text": "XOR gate output is 1 when inputs are:",
    "options": [
      "Different",
      "Same",
      "Both 1",
      "Both 0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "XOR: Y=A⊕B (1 when inputs differ)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "basic-gates"
    ],
    "tags": [
      "neet-2023",
      "recall"
    ],
    "year": 2023
  },
  {
    "id": "semiconductor-electronics-de-morgans-37",
    "text": "De Morgan's theorem: (A·B)' =",
    "options": [
      "A'+B'",
      "A'·B'",
      "A+B",
      "AB"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NOT(AND) = OR of NOTs: (AB)'=A'+B'",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "semiconductor-electronics-de-morgans-38",
    "text": "De Morgan's theorem: (A+B)' =",
    "options": [
      "A'·B'",
      "A'+B'",
      "AB",
      "A+B"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "NOT(OR) = AND of NOTs: (A+B)'=A'·B'",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "semiconductor-electronics-de-morgans-39",
    "text": "NAND gate can be written as:",
    "options": [
      "A'+B' (NOR form)",
      "A·B",
      "A+B",
      "A'·B'"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "(AB)'=A'+B' (De Morgan)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "semiconductor-electronics-de-morgans-40",
    "text": "NOR gate can be written as:",
    "options": [
      "A'·B' (NAND form)",
      "A+B",
      "A'B'",
      "AB"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "(A+B)'=A'·B' (De Morgan)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "semiconductor-electronics-de-morgans-41",
    "text": "NOT(A AND B AND C) =",
    "options": [
      "A' OR B' OR C'",
      "A' AND B' AND C'",
      "ABC",
      "A+B+C"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "(ABC)'=A'+B'+C' (extend De Morgan)",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "semiconductor-electronics-de-morgans-42",
    "text": "De Morgan's laws help convert:",
    "options": [
      "AND↔OR with inversion",
      "AND to OR only",
      "OR to XOR",
      "NOT to AND"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "De Morgan: interconversion between AND/OR with complements",
    "subject": "physics",
    "chapter": "semiconductor-electronics",
    "topic": "logic-gates",
    "formulas": [
      "de-morgans"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  }
];
