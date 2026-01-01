// Semiconductor Electronics Questions
// Generated: 2026-01-01T07:48:17.824Z
// Total: 60 questions

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
    "topic": "pn-junction",
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
    "topic": "pn-junction",
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
    "topic": "pn-junction",
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
    "topic": "pn-junction",
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
    "topic": "pn-junction",
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
    "topic": "rectifier",
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
    "topic": "rectifier",
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
    "topic": "rectifier",
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
    "topic": "transistor",
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
    "topic": "transistor",
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
    "topic": "transistor",
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
    "topic": "transistor",
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
    "topic": "transistor",
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
    "topic": "transistor",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
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
    "topic": "devices",
    "formulas": [
      "voltage-amplification"
    ],
    "tags": [
      "neet-2023",
      "recall"
    ],
    "year": 2023
  }
];
