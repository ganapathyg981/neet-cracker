// Current Electricity Questions
// Chapter: current-electricity
// 40 curated NEET-style questions

export const currentElectricityQuestions = [
  {
    id: "current-elec-ohms-law-01",
    text: "Ohm's law states that V is proportional to I when:",
    options: [
      "Temperature is constant",
      "Resistance varies",
      "Current is AC",
      "Voltage is high"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "V = IR (V ∝ I) only when R is constant, which requires constant temperature",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "ohms-law"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "current-elec-ohms-law-02",
    text: "A resistor of 10 Ω carries current 2 A. Potential difference across it is:",
    options: [
      "20 V",
      "5 V",
      "12 V",
      "8 V"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "V = IR = 2×10 = 20 V",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "ohms-law"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-ohms-law-03",
    text: "If voltage across resistor is doubled, current becomes:",
    options: [
      "Double",
      "Half",
      "Four times",
      "Unchanged"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "V = IR. If V → 2V and R constant, then I → 2I",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "ohms-law"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "current-elec-ohms-law-04",
    text: "A conductor obeys Ohm's law when its V-I graph is:",
    options: [
      "Straight line through origin",
      "Curved",
      "Horizontal line",
      "Vertical line"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Ohmic conductor: V ∝ I → straight line. Slope = R",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "ohms-law"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-series-resistance-05",
    text: "Equivalent resistance of resistors in series is:",
    options: [
      "R_eq = R₁ + R₂ + R₃ + ...",
      "1/R_eq = 1/R₁ + 1/R₂ + ...",
      "R_eq = R₁R₂/(R₁+R₂)",
      "R_eq = √(R₁R₂)"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Series: same current, voltages add. R_eq = R₁ + R₂ + R₃ + ...",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "series-resistance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-series-resistance-06",
    text: "Three resistors 2Ω, 3Ω, 5Ω in series have equivalent resistance:",
    options: [
      "10 Ω",
      "1 Ω",
      "0.97 Ω",
      "30 Ω"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "R_eq = 2+3+5 = 10 Ω",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "series-resistance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-series-resistance-07",
    text: "In series combination, current through each resistor is:",
    options: [
      "Same",
      "Different",
      "Zero",
      "Infinite"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Series → same current path → same current through all",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "series-resistance"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "current-elec-series-resistance-08",
    text: "Two equal resistors R in series give equivalent:",
    options: [
      "2R",
      "R/2",
      "R",
      "4R"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "R_eq = R + R = 2R",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "series-resistance"
    ],
    tags: [
      "neet-2021",
      "numerical"
    ],
    year: 2021
  },
  {
    id: "current-elec-parallel-resistance-09",
    text: "Equivalent resistance of resistors in parallel:",
    options: [
      "1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...",
      "R_eq = R₁ + R₂ + R₃",
      "R_eq = R₁R₂R₃",
      "1/R_eq = R₁ + R₂"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Parallel: same voltage, currents add. 1/R_eq = 1/R₁ + 1/R₂ + ...",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "parallel-resistance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-parallel-resistance-10",
    text: "Two resistors 6Ω and 3Ω in parallel give:",
    options: [
      "2 Ω",
      "9 Ω",
      "4.5 Ω",
      "18 Ω"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. R_eq = 2 Ω",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "parallel-resistance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-parallel-resistance-11",
    text: "Two equal resistors R in parallel give:",
    options: [
      "R/2",
      "2R",
      "R",
      "R/4"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "1/R_eq = 1/R + 1/R = 2/R. R_eq = R/2",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "parallel-resistance"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "current-elec-parallel-resistance-12",
    text: "In parallel, equivalent resistance is always:",
    options: [
      "Less than smallest individual R",
      "Greater than largest R",
      "Equal to average",
      "Sum of all R"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "R_eq < R_min (adding parallel paths decreases total resistance)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "parallel-resistance"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-parallel-resistance-13",
    text: "Voltage across resistors in parallel is:",
    options: [
      "Same",
      "Different",
      "Proportional to R",
      "Zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Parallel → connected at same two points → same voltage",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "parallel-resistance"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "current-elec-kirchhoff-current-law-14",
    text: "Kirchhoff's current law (junction rule) states:",
    options: [
      "ΣI_in = ΣI_out (charge conservation)",
      "ΣV = 0",
      "ΣIR = ΣE",
      "I₁ = I₂"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "KCL: sum of currents entering junction = sum leaving (charge conservation)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-current-law"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-kirchhoff-current-law-15",
    text: "At a junction, currents 3A and 2A enter, and 4A leaves. Fourth current is:",
    options: [
      "1 A leaving",
      "1 A entering",
      "5 A leaving",
      "5 A entering"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "I_in = I_out: 3+2 = 4+I. I = 1 A leaving",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-current-law"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-kirchhoff-current-law-16",
    text: "KCL is based on conservation of:",
    options: [
      "Electric charge",
      "Energy",
      "Momentum",
      "Mass"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Current = charge/time. KCL ensures no charge accumulates at junction",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-current-law"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "current-elec-kirchhoff-voltage-law-17",
    text: "Kirchhoff's voltage law (loop rule) states:",
    options: [
      "ΣV = 0 around closed loop",
      "ΣI = 0",
      "ΣR = 0",
      "ΣE = ΣIR"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "KVL: algebraic sum of potential changes around any closed loop = 0 (energy conservation)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-voltage-law"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-kirchhoff-voltage-law-18",
    text: "In a loop with 12V battery and resistors with voltage drops 5V and 4V, third resistor has drop:",
    options: [
      "3 V",
      "21 V",
      "1 V",
      "16 V"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "ΣV = 0: 12 - 5 - 4 - V₃ = 0. V₃ = 3 V",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-voltage-law"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-kirchhoff-voltage-law-19",
    text: "KVL is based on conservation of:",
    options: [
      "Energy",
      "Charge",
      "Current",
      "Resistance"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Potential = energy/charge. Loop sum = 0 ensures energy conservation",
    subject: "physics",
    chapter: "current-electricity",
    topic: "kirchhoff-laws",
    formulas: [
      "kirchhoff-voltage-law"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "current-elec-wheatstone-balance-20",
    text: "Wheatstone bridge is balanced when:",
    options: [
      "P/Q = R/S",
      "P+Q = R+S",
      "PQ = RS",
      "P-Q = R-S"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Balance condition: P/Q = R/S or PS = QR (no current through galvanometer)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "wheatstone-bridge",
    formulas: [
      "wheatstone-balance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-wheatstone-balance-21",
    text: "In balanced Wheatstone bridge with P=10Ω, Q=20Ω, R=15Ω, value of S is:",
    options: [
      "30 Ω",
      "15 Ω",
      "7.5 Ω",
      "45 Ω"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "P/Q = R/S: 10/20 = 15/S. S = 15×20/10 = 30 Ω",
    subject: "physics",
    chapter: "current-electricity",
    topic: "wheatstone-bridge",
    formulas: [
      "wheatstone-balance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-wheatstone-balance-22",
    text: "At balance, current through galvanometer in Wheatstone bridge is:",
    options: [
      "Zero",
      "Maximum",
      "Equal to main current",
      "Infinite"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Balance → potential at B = potential at D → no current through BD",
    subject: "physics",
    chapter: "current-electricity",
    topic: "wheatstone-bridge",
    formulas: [
      "wheatstone-balance"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "current-elec-wheatstone-balance-23",
    text: "Wheatstone bridge is most sensitive when all four resistances are:",
    options: [
      "Of same order",
      "Very different",
      "Infinite",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Maximum sensitivity when all R are comparable (same order of magnitude)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "wheatstone-bridge",
    formulas: [
      "wheatstone-balance"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-shunt-resistance-24",
    text: "Shunt resistance is connected in:",
    options: [
      "Parallel with galvanometer",
      "Series with galvanometer",
      "Across battery",
      "None"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Shunt in parallel with G to bypass most current, converting G to ammeter",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "shunt-resistance"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "current-elec-shunt-resistance-25",
    text: "Formula for shunt resistance is:",
    options: [
      "S = I_g G/(I - I_g)",
      "S = IG/I_g",
      "S = (I-I_g)/I_g G",
      "S = I_g/IG"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "S = I_g G/(I-I_g) where I_g through galvanometer, (I-I_g) through shunt",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "shunt-resistance"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "current-elec-shunt-resistance-26",
    text: "To convert galvanometer (G=100Ω, I_g=1mA) to ammeter of range 1A, shunt needed:",
    options: [
      "0.1 Ω",
      "100 Ω",
      "10 Ω",
      "1000 Ω"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "S = I_g G/(I-I_g) = (0.001×100)/(1-0.001) = 0.1/0.999 ≈ 0.1 Ω",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "shunt-resistance"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "current-elec-shunt-resistance-27",
    text: "Shunt resistance is always:",
    options: [
      "Very small compared to G",
      "Very large",
      "Equal to G",
      "Infinite"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "S << G to bypass most current through shunt (low resistance path)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "shunt-resistance"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-multiplier-resistance-28",
    text: "High resistance in series with galvanometer converts it to:",
    options: [
      "Voltmeter",
      "Ammeter",
      "Battery",
      "Resistor"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Series high resistance limits current for given voltage → voltmeter",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "multiplier-resistance"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "current-elec-multiplier-resistance-29",
    text: "Formula for multiplier resistance is:",
    options: [
      "R = (V/I_g) - G",
      "R = V×I_g - G",
      "R = G/(V-I_g)",
      "R = V/I_g + G"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "V = I_g(G+R). So R = V/I_g - G",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "multiplier-resistance"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "current-elec-multiplier-resistance-30",
    text: "To measure 10V with galvanometer (G=50Ω, I_g=2mA), series resistance needed:",
    options: [
      "4950 Ω",
      "5000 Ω",
      "50 Ω",
      "5050 Ω"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "R = V/I_g - G = 10/0.002 - 50 = 5000 - 50 = 4950 Ω",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "multiplier-resistance"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "current-elec-multiplier-resistance-31",
    text: "Multiplier resistance is:",
    options: [
      "Very high compared to G",
      "Very low",
      "Equal to G",
      "Zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "R >> G to limit current and extend voltage range",
    subject: "physics",
    chapter: "current-electricity",
    topic: "measuring-instruments",
    formulas: [
      "multiplier-resistance"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-rc-charging-32",
    text: "In RC circuit, charge during charging is given by:",
    options: [
      "Q = Q₀(1 - e^(-t/RC))",
      "Q = Q₀e^(-t/RC)",
      "Q = Q₀(1 + e^(-t/RC))",
      "Q = Q₀t/RC"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Q = Q₀(1-e^(-t/τ)) where τ=RC. Exponential buildup from 0 to Q₀",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-charging"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-rc-charging-33",
    text: "Time constant of RC circuit is:",
    options: [
      "τ = RC",
      "τ = R/C",
      "τ = C/R",
      "τ = 1/RC"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "τ = RC. Unit: Ω×F = seconds. Measure of how fast circuit responds",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-charging"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "current-elec-rc-charging-34",
    text: "After time t = RC, capacitor charges to:",
    options: [
      "63% of Q₀",
      "50% of Q₀",
      "100% of Q₀",
      "37% of Q₀"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "At t=τ: Q = Q₀(1-e⁻¹) = Q₀(1-0.37) = 0.63Q₀ = 63%",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-charging"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "current-elec-rc-charging-35",
    text: "In RC circuit, current during charging:",
    options: [
      "Decreases exponentially from max",
      "Increases exponentially",
      "Remains constant",
      "Is zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "I = I₀e^(-t/RC). Maximum at t=0, decays exponentially to zero",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-charging"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "current-elec-rc-charging-36",
    text: "For practical purposes, capacitor is fully charged after:",
    options: [
      "5τ (99.3%)",
      "τ",
      "2τ",
      "10τ"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "After 5τ: Q = Q₀(1-e⁻⁵) ≈ 0.993Q₀ ≈ 99.3% (considered fully charged)",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-charging"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "current-elec-rc-discharging-37",
    text: "During discharging, charge on capacitor varies as:",
    options: [
      "Q = Q₀e^(-t/RC)",
      "Q = Q₀(1-e^(-t/RC))",
      "Q = Q₀t",
      "Q = Q₀/t"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Q = Q₀e^(-t/τ). Exponential decay from Q₀ to 0",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-discharging"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "current-elec-rc-discharging-38",
    text: "After time t = RC during discharge, charge remaining is:",
    options: [
      "37% of Q₀",
      "63% of Q₀",
      "50% of Q₀",
      "0% of Q₀"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "At t=τ: Q = Q₀e⁻¹ = 0.37Q₀ = 37%",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-discharging"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "current-elec-rc-discharging-39",
    text: "Half-life of RC discharging circuit is:",
    options: [
      "0.69 RC",
      "RC",
      "2 RC",
      "0.5 RC"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "Q = Q₀/2 when e^(-t/RC) = 1/2. Solving: t = 0.693RC",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-discharging"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "current-elec-rc-discharging-40",
    text: "Current during discharge is in direction:",
    options: [
      "Opposite to charging",
      "Same as charging",
      "Zero",
      "Perpendicular"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "During discharge, capacitor drives current in reverse direction",
    subject: "physics",
    chapter: "current-electricity",
    topic: "rc-circuit",
    formulas: [
      "rc-discharging"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  }
];
