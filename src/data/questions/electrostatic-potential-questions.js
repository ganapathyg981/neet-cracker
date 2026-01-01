// Electrostatic Potential & Capacitance Questions
// Chapter: electrostatic-potential
// 16 curated NEET-style questions

export const electrostaticPotentialQuestions = [
  {
    id: "elec-pot-capacitance-01",
    text: "Capacitance of a conductor is defined as:",
    options: [
      "C = Q/V",
      "C = QV",
      "C = V/Q",
      "C = Q+V"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C = Q/V (charge per unit potential). Unit: Farad (F) = C/V",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "capacitance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "elec-pot-capacitance-02",
    text: "A capacitor has 100 μC charge at 50 V. Its capacitance is:",
    options: [
      "2 μF",
      "5 μF",
      "0.5 μF",
      "200 μF"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C = Q/V = 100×10⁻⁶/50 = 2×10⁻⁶ F = 2 μF",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "capacitance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "elec-pot-capacitance-03",
    text: "Capacitance depends on:",
    options: [
      "Geometry and dielectric only",
      "Charge and voltage",
      "Current",
      "Temperature only"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "C depends on geometry (size, shape, separation) and dielectric material, NOT on Q or V",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "capacitance"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "elec-pot-parallel-plate-capacitor-04",
    text: "Capacitance of parallel plate capacitor is:",
    options: [
      "C = ε₀A/d",
      "C = ε₀d/A",
      "C = A/ε₀d",
      "C = ε₀Ad"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C = ε₀A/d where A = area, d = separation. C ∝ A, C ∝ 1/d",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-plate-capacitor"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "elec-pot-parallel-plate-capacitor-05",
    text: "If plate separation is doubled, capacitance becomes:",
    options: [
      "Half",
      "Double",
      "Four times",
      "One-fourth"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C ∝ 1/d. If d → 2d, then C → C/2",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-plate-capacitor"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "elec-pot-parallel-plate-capacitor-06",
    text: "A parallel plate capacitor has A=0.01m², d=1mm. Capacitance is: (ε₀=8.85×10⁻¹²)",
    options: [
      "88.5 pF",
      "8.85 pF",
      "885 pF",
      "0.885 pF"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "C = (8.85×10⁻¹²×0.01)/(1×10⁻³) = 88.5×10⁻¹² F = 88.5 pF",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-plate-capacitor"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "elec-pot-parallel-plate-capacitor-07",
    text: "Inserting dielectric (K) between plates multiplies capacitance by:",
    options: [
      "K",
      "1/K",
      "K²",
      "√K"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C' = KC where K is dielectric constant (relative permittivity)",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-plate-capacitor"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "elec-pot-series-capacitance-08",
    text: "Equivalent capacitance of capacitors in series:",
    options: [
      "1/C_eq = 1/C₁ + 1/C₂ + ...",
      "C_eq = C₁ + C₂ + ...",
      "C_eq = C₁C₂/(C₁+C₂)",
      "Both A and C"
    ],
    correct: 3,
    difficulty: "easy",
    explanation: "Series: 1/C_eq = 1/C₁ + 1/C₂ + ... (like parallel resistors). For two: C_eq = C₁C₂/(C₁+C₂)",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "series-capacitance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "elec-pot-series-capacitance-09",
    text: "Two capacitors 4μF and 6μF in series give:",
    options: [
      "2.4 μF",
      "10 μF",
      "5 μF",
      "24 μF"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C_eq = C₁C₂/(C₁+C₂) = 4×6/(4+6) = 24/10 = 2.4 μF",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "series-capacitance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "elec-pot-series-capacitance-10",
    text: "In series, charge on each capacitor is:",
    options: [
      "Same",
      "Different",
      "Proportional to C",
      "Zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Series → same charge Q on all capacitors (charge conservation)",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "series-capacitance"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "elec-pot-parallel-capacitance-11",
    text: "Capacitors in parallel have equivalent:",
    options: [
      "C_eq = C₁ + C₂ + C₃ + ...",
      "1/C_eq = 1/C₁ + 1/C₂ + ...",
      "C_eq = C₁C₂/C₃",
      "C_eq = 1/ΣC"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Parallel: C_eq = C₁ + C₂ + ... (like series resistors)",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-capacitance"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "elec-pot-parallel-capacitance-12",
    text: "Three capacitors 2μF, 3μF, 5μF in parallel give:",
    options: [
      "10 μF",
      "0.97 μF",
      "30 μF",
      "1 μF"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "C_eq = 2+3+5 = 10 μF",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-capacitance"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "elec-pot-parallel-capacitance-13",
    text: "In parallel, voltage across each capacitor is:",
    options: [
      "Same",
      "Different",
      "Proportional to C",
      "Inversely proportional to C"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Parallel → connected to same two points → same voltage",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "capacitors",
    formulas: [
      "parallel-capacitance"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "elec-pot-energy-capacitor-14",
    text: "Energy stored in capacitor is:",
    options: [
      "U = (1/2)CV² = Q²/(2C)",
      "U = CV²",
      "U = Q²/C",
      "U = QV"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "U = (1/2)QV = (1/2)CV² = Q²/(2C). Work done to charge capacitor",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "energy-capacitor",
    formulas: [
      "energy-capacitor"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "elec-pot-energy-capacitor-15",
    text: "A 10μF capacitor charged to 100V stores energy:",
    options: [
      "0.05 J",
      "0.1 J",
      "0.5 J",
      "1 J"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "U = (1/2)CV² = (1/2)×10×10⁻⁶×100² = 0.05 J = 50 mJ",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "energy-capacitor",
    formulas: [
      "energy-capacitor"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "elec-pot-energy-capacitor-16",
    text: "If voltage across capacitor is doubled, energy becomes:",
    options: [
      "4 times",
      "2 times",
      "Unchanged",
      "Half"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "U ∝ V². If V → 2V, then U → 4U",
    subject: "physics",
    chapter: "electrostatic-potential",
    topic: "energy-capacitor",
    formulas: [
      "energy-capacitor"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  }
];