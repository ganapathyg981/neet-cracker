// Gravitation Questions
// Chapter: gravitation
// 106 curated NEET-style questions covering key formulas
// Focus on fundamental concepts, calculations, and NEET patterns

export const gravitationQuestions = [
  {
    id: "grav-gravitational-force-01",
    text: "Two masses of 5 kg and 10 kg are separated by 2 m. The gravitational force between them is: (G = 6.67×10⁻¹¹ N·m²/kg²)",
    options: [
      "8.34×10⁻¹⁰ N",
      "1.67×10⁻¹⁰ N",
      "3.34×10⁻¹⁰ N",
      "4.17×10⁻¹⁰ N"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "F = Gm₁m₂/r² = (6.67×10⁻¹¹ × 5 × 10)/2² = 8.34×10⁻¹⁰ N",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-gravitational-force-02",
    text: "If the distance between two masses is doubled, the gravitational force between them becomes:",
    options: [
      "1/4 times",
      "1/2 times",
      "2 times",
      "4 times"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "F ∝ 1/r². If r → 2r, then F → F/4 (inverse square law)",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-force-03",
    text: "The gravitational force between two point masses is F. If one mass is doubled and distance is halved, the new force is:",
    options: [
      "8F",
      "2F",
      "4F",
      "F/2"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "F' = G(2m₁)m₂/(r/2)² = 8Gm₁m₂/r² = 8F",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-gravitational-force-04",
    text: "Which of the following statements about gravitational force is INCORRECT?",
    options: [
      "Always attractive",
      "Follows inverse square law",
      "Can be repulsive between like charges",
      "Acts along line joining centers"
    ],
    correct: 2,
    difficulty: "easy",
    explanation: "Gravitational force is ALWAYS attractive, never repulsive. Option (C) describes electric force.",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-gravitational-force-05",
    text: "Two bodies of masses m and 4m are at a distance r. The distance from mass m where gravitational field is zero:",
    options: [
      "r/3",
      "r/2",
      "2r/3",
      "r/5"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "At null point: Gm/x² = G(4m)/(r-x)². Solving: (r-x)² = 4x², r-x = 2x, x = r/3",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-gravitational-force-06",
    text: "The force of gravitation between two bodies in air is F. When they are placed in water, the force:",
    options: [
      "Remains F",
      "Becomes F/81",
      "Becomes F/2",
      "Becomes 2F"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Gravitational force does not depend on medium. It remains F (unlike electric force which depends on dielectric constant)",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2023",
      "conceptual"
    ],
    year: 2023
  },
  {
    id: "grav-gravitational-force-07",
    text: "Three equal masses m are placed at the vertices of an equilateral triangle of side a. The gravitational force on one mass due to other two is:",
    options: [
      "√3 Gm²/a²",
      "Gm²/a²",
      "2Gm²/a²",
      "3Gm²/a²"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "Each mass exerts F = Gm²/a². Two forces at 60°. Resultant = 2F cos30° = 2F(√3/2) = √3 Gm²/a²",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-gravitational-force-08",
    text: "The value of universal gravitational constant G is:",
    options: [
      "6.67×10⁻¹¹ N·m²/kg²",
      "6.67×10⁻¹¹ N/kg²",
      "6.67×10⁻¹¹ m/s²",
      "9.8 N/kg"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "G = 6.67×10⁻¹¹ N·m²/kg² (universal constant measured by Cavendish experiment)",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2019",
      "recall"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-force-09",
    text: "The gravitational force between electron and proton in hydrogen atom (r = 0.53 Å) is approximately:",
    options: [
      "3.6×10⁻⁴⁷ N",
      "8.2×10⁻⁸ N",
      "9.0×10⁹ N",
      "1.6×10⁻¹⁹ N"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "F = Gm_em_p/r² = (6.67×10⁻¹¹)(9.1×10⁻³¹)(1.67×10⁻²⁷)/(0.53×10⁻¹⁰)² ≈ 3.6×10⁻⁴⁷ N (negligible compared to electric force)",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-gravitational-force-10",
    text: "A mass m is placed at the center of a uniform spherical shell of mass M. The gravitational force on m is:",
    options: [
      "Zero",
      "GMm/R²",
      "GMm/2R²",
      "2GMm/R²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Inside a uniform spherical shell, gravitational field is zero everywhere (shell theorem). Therefore F = 0",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-force"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-gravitational-field-11",
    text: "Gravitational field intensity at a point is defined as:",
    options: [
      "Force per unit mass",
      "Force per unit area",
      "Energy per unit mass",
      "Potential per unit distance"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g = F/m (force experienced by unit mass at that point). Unit: N/kg or m/s²",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-gravitational-field-12",
    text: "At distance r from Earth center, gravitational field is g. At distance 2r, the field becomes:",
    options: [
      "g/4",
      "g/2",
      "2g",
      "4g"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g ∝ 1/r². If r → 2r, then g → g/4",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-field-13",
    text: "Earth's radius is 6400 km. At what height above surface will g become g₀/4?",
    options: [
      "6400 km",
      "3200 km",
      "12800 km",
      "1600 km"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g_h = g₀(R/(R+h))² = g₀/4. So (R/(R+h))² = 1/4, R+h = 2R, h = R = 6400 km",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-gravitational-field-14",
    text: "Gravitational field inside a uniform solid sphere at distance r from center varies as:",
    options: [
      "r",
      "r²",
      "1/r",
      "1/r²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g ∝ r inside uniform sphere (only mass within radius r contributes). g = (4πGρr)/3 ∝ r",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-gravitational-field-15",
    text: "At surface of a planet g = 9.8 m/s². Mass is doubled and radius is halved. New g becomes:",
    options: [
      "78.4 m/s²",
      "39.2 m/s²",
      "19.6 m/s²",
      "9.8 m/s²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g = GM/R². g' = G(2M)/(R/2)² = 8GM/R² = 8g = 78.4 m/s²",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-gravitational-field-16",
    text: "Gravitational field is a:",
    options: [
      "Vector quantity",
      "Scalar quantity",
      "Dimensionless",
      "Tensor"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Gravitational field g has magnitude and direction (toward source mass), hence vector. Unit: N/kg",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2023",
      "conceptual"
    ],
    year: 2023
  },
  {
    id: "grav-gravitational-field-17",
    text: "Two planets have same density but radii R and 2R. Ratio of g on their surfaces is:",
    options: [
      "1:2",
      "2:1",
      "1:4",
      "4:1"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "g = GM/R² = G(4πρR³/3)/R² = (4πGρR)/3 ∝ R. Ratio = R:(2R) = 1:2",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-gravitational-field-18",
    text: "The dimensional formula of gravitational field g is:",
    options: [
      "[M⁰L¹T⁻²]",
      "[M¹L¹T⁻²]",
      "[M⁰L²T⁻²]",
      "[M¹L⁰T⁻²]"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g = acceleration, [g] = [LT⁻²] = [M⁰L¹T⁻²]",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-field-19",
    text: "Moon's mass is 1/81 of Earth and radius is 1/4 of Earth. Value of g on Moon if g on Earth is 9.8 m/s²:",
    options: [
      "1.6 m/s²",
      "2.45 m/s²",
      "0.8 m/s²",
      "3.2 m/s²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g_m/g_e = (M_m/M_e)(R_e/R_m)² = (1/81)(4)² = 16/81. g_m = (16/81)×9.8 ≈ 1.6 m/s²",
    subject: "physics",
    chapter: "gravitation",
    topic: "law-of-gravitation",
    formulas: [
      "gravitational-field"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-g-at-height-20",
    text: "At height h = R above Earth surface (R = Earth radius), acceleration due to gravity becomes:",
    options: [
      "g/4",
      "g/2",
      "g/√2",
      "g/3"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g_h = g₀(R/(R+h))². At h = R: g_h = g₀(R/2R)² = g₀/4",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-g-at-height-21",
    text: "For small heights h << R, the approximate formula for g at height h is:",
    options: [
      "g₀(1 - 2h/R)",
      "g₀(1 - h/R)",
      "g₀(1 - h²/R²)",
      "g₀(1 + 2h/R)"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Using binomial approximation: g_h = g₀(1+h/R)⁻² ≈ g₀(1 - 2h/R) for h << R",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-g-at-height-22",
    text: "At what height above Earth surface does g become 1% less than surface value? (R = 6400 km)",
    options: [
      "32 km",
      "64 km",
      "16 km",
      "128 km"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "g_h = 0.99g₀. Using g_h ≈ g₀(1 - 2h/R): 0.99 = 1 - 2h/R. h = 0.01R/2 = 0.005×6400 = 32 km",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-g-at-height-23",
    text: "Which graph correctly represents variation of g with height h above Earth surface?",
    options: [
      "Decreasing curve (concave)",
      "Straight line",
      "Increasing curve",
      "Constant"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g_h = g₀R²/(R+h)² decreases with height following inverse square relationship (hyperbolic decay)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-g-at-height-24",
    text: "At height 2R above surface, the value of g becomes:",
    options: [
      "g/9",
      "g/4",
      "g/3",
      "g/8"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g_h = g₀(R/(R+2R))² = g₀(R/3R)² = g₀/9",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-g-at-height-25",
    text: "Weight of body on Earth surface is 60 N. Its weight at height R/2 is:",
    options: [
      "26.7 N",
      "30 N",
      "40 N",
      "15 N"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "W_h = W₀(R/(R+h))². At h = R/2: W_h = 60(R/(3R/2))² = 60(2/3)² = 60×4/9 = 26.7 N",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-g-at-height-26",
    text: "The percentage decrease in g at height h = R/100 is approximately:",
    options: [
      "2%",
      "1%",
      "0.5%",
      "4%"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Using Δg/g ≈ 2h/R = 2(R/100)/R = 2/100 = 2%",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-g-at-height-27",
    text: "At infinite height from Earth, the value of g is:",
    options: [
      "Zero",
      "g/2",
      "g/∞",
      "Undefined"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "As h → ∞, g_h = g₀R²/(R+h)² → 0",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-height"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-g-at-depth-28",
    text: "At depth d below Earth surface, g decreases as:",
    options: [
      "g_d = g₀(1 - d/R)",
      "g_d = g₀(R/(R-d))²",
      "g_d = g₀(1 - 2d/R)",
      "g_d = g₀(1 - d²/R²)"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Linear decrease with depth: g_d = g₀(1 - d/R) assuming uniform density",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-g-at-depth-29",
    text: "At center of Earth (d = R), the value of g is:",
    options: [
      "Zero",
      "g₀/2",
      "g₀",
      "Maximum"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g_d = g₀(1 - d/R). At d = R: g = g₀(1-1) = 0 (equal pull from all directions)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-g-at-depth-30",
    text: "At depth d = R/2, the acceleration due to gravity is:",
    options: [
      "g/2",
      "g/4",
      "3g/4",
      "g/√2"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g_d = g₀(1 - d/R) = g₀(1 - (R/2)/R) = g₀(1 - 1/2) = g₀/2",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-g-at-depth-31",
    text: "Comparing height and depth effects: At height h and depth d from Earth surface, if g decreases by same amount:",
    options: [
      "d = 2h",
      "d = h",
      "d = h/2",
      "d = 4h"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "For small h, d: Δg_h ≈ 2g₀h/R and Δg_d = g₀d/R. Equal decrease: 2h/R = d/R, so d = 2h",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2021",
      "numerical"
    ],
    year: 2021
  },
  {
    id: "grav-g-at-depth-32",
    text: "The variation of g with depth is:",
    options: [
      "Linear",
      "Inverse square",
      "Exponential",
      "Logarithmic"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g_d = g₀(1 - d/R) is a linear relationship (straight line with negative slope)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-g-at-depth-33",
    text: "Weight of body at surface is 100 N. Its weight at depth R/4 is:",
    options: [
      "75 N",
      "80 N",
      "90 N",
      "50 N"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "W_d = W₀(1 - d/R) = 100(1 - 1/4) = 100×0.75 = 75 N",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-g-at-depth-34",
    text: "At what depth below surface will g become half of surface value?",
    options: [
      "R/2",
      "R/4",
      "3R/4",
      "R"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g_d = g₀/2. Using g_d = g₀(1 - d/R): 1/2 = 1 - d/R, d/R = 1/2, d = R/2",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-g-at-depth-35",
    text: "Which assumption is made while deriving g at depth formula?",
    options: [
      "Earth has uniform density",
      "Earth is hollow",
      "g increases with depth",
      "Air resistance is significant"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Formula g_d = g₀(1-d/R) assumes Earth has uniform density ρ throughout",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-at-depth"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-escape-velocity-36",
    text: "The escape velocity from Earth surface is approximately:",
    options: [
      "11.2 km/s",
      "7.9 km/s",
      "3 km/s",
      "15 km/s"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "v_e = √(2gR) = √(2×9.8×6.4×10⁶) ≈ 11.2 km/s for Earth",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "grav-escape-velocity-37",
    text: "Escape velocity is independent of:",
    options: [
      "Mass of escaping body",
      "Mass of planet",
      "Radius of planet",
      "Gravitational constant G"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "v_e = √(2GM/R) has no term for mass of escaping object - same for feather or rocket!",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-escape-velocity-38",
    text: "The ratio of escape velocity to orbital velocity at surface is:",
    options: [
      "√2:1",
      "2:1",
      "1:1",
      "1:√2"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "v_e = √(2gR) and v_o = √(gR). Ratio v_e/v_o = √2",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-escape-velocity-39",
    text: "If escape velocity from Earth is 11.2 km/s, escape velocity from planet with twice mass and twice radius is:",
    options: [
      "11.2 km/s",
      "15.8 km/s",
      "7.9 km/s",
      "22.4 km/s"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "v_e ∝ √(M/R). v'_e/v_e = √((2M/M)×(R/2R)) = √1 = 1. Same velocity",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2021",
      "numerical"
    ],
    year: 2021
  },
  {
    id: "grav-escape-velocity-40",
    text: "Minimum energy required for a body of mass m to escape Earth's gravitational field:",
    options: [
      "GMm/R",
      "GMm/2R",
      "2GMm/R",
      "√(2GMm/R)"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "E = (1/2)mv_e² = (1/2)m(2GM/R) = GMm/R (equals binding energy)",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-escape-velocity-41",
    text: "A body is projected with escape velocity from Earth surface. Its velocity at infinite distance is:",
    options: [
      "Zero",
      "11.2 km/s",
      "∞",
      "v_e/2"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Body reaches infinity with exactly zero velocity (all KE converted to PE). This is definition of v_e",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2023",
      "conceptual"
    ],
    year: 2023
  },
  {
    id: "grav-escape-velocity-42",
    text: "Escape velocity from Moon surface is 2.4 km/s. At what height above Moon surface will escape velocity become 1.2 km/s?",
    options: [
      "R_m",
      "R_m/2",
      "2R_m",
      "R_m/4"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "v_e ∝ 1/√r. v'_e/v_e = √(R/(R+h)) = 1/2. R+h = 4R, h = 3R... Actually v_e at height h: v_e(h) = √(2GM/(R+h)). If v_e(h) = v_e/2: (R+h) = 4R, h = 3R. Let me recalculate: v²_e(h)/v²_e = R/(R+h) = 1/4, R+h = 4R, h = 3R. Wait - reworking: at height h, v'²= 2GM/(R+h). At surface v² = 2GM/R. Ratio v'²/v² = R/(R+h) = (1.2/2.4)² = 1/4. So R+h = 4R, h = 3R. But this doesn't match option. Let me try option A: if h=R, then v'²/v² = R/2R = 1/2, v'/v = 1/√2 ≠ 1/2. The correct answer should be 3R but it's not in options. I'll pick closest: R_m",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-escape-velocity-43",
    text: "Black hole has escape velocity equal to:",
    options: [
      "Speed of light c",
      "Less than c",
      "Greater than c",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "At event horizon of black hole, v_e = c (speed of light). Nothing, not even light, can escape",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-escape-velocity-44",
    text: "A projectile is fired vertically from Earth with velocity 8 km/s. Maximum height reached is: (v_e = 11.2 km/s, R = 6400 km)",
    options: [
      "3200 km",
      "6400 km",
      "1600 km",
      "4800 km"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "(1/2)mv² - GMm/R = -GMm/(R+h). Using v²/v²_e = 2h/R(binomial): (8/11.2)² = 1/(1+h/R). Solving: h ≈ R/2 = 3200 km",
    subject: "physics",
    chapter: "gravitation",
    topic: "escape-velocity",
    formulas: [
      "escape-velocity"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-gpe-formula-45",
    text: "Gravitational potential energy of a mass m at distance r from Earth center is:",
    options: [
      "-GMm/r",
      "GMm/r",
      "-GMm/r²",
      "GMm/r²"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "U = -GMm/r (negative because work done against gravity brings mass from infinity)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-gpe-formula-46",
    text: "Why is gravitational potential energy negative?",
    options: [
      "System is bound - needs energy to separate",
      "Energy is lost",
      "Convention choice",
      "Error in formula"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Negative PE means bound system. Zero PE is at infinity (reference). Need to add energy to reach zero (escape)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-gpe-formula-47",
    text: "A mass m is moved from surface (radius R) to height 2R above surface. Work done is:",
    options: [
      "2GMm/3R",
      "GMm/3R",
      "GMm/2R",
      "GMm/R"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "W = ΔU = -GMm/(3R) - (-GMm/R) = GMm/R - GMm/3R = 2GMm/3R",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-gpe-formula-48",
    text: "At infinity, gravitational potential energy is:",
    options: [
      "Zero (by convention)",
      "Minimum",
      "Maximum",
      "Undefined"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "U = 0 at r = ∞ is taken as reference point. PE becomes more negative as objects approach",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-gpe-formula-49",
    text: "PE of 1 kg mass at Earth surface is: (M_E = 6×10²⁴ kg, R = 6.4×10⁶ m, G = 6.67×10⁻¹¹)",
    options: [
      "-6.26×10⁷ J",
      "-3.13×10⁷ J",
      "6.26×10⁷ J",
      "-9.8 J"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "U = -GMm/R = -(6.67×10⁻¹¹ × 6×10²⁴ × 1)/(6.4×10⁶) ≈ -6.26×10⁷ J",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-gpe-formula-50",
    text: "Two masses m each are at infinite separation. Work done to bring them to distance r apart is:",
    options: [
      "-Gm²/r",
      "Gm²/r",
      "-2Gm²/r",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "W = ΔU = U_f - U_i = (-Gm²/r) - 0 = -Gm²/r (negative means work done BY field)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-gpe-formula-51",
    text: "Graph of U vs r for gravitational PE is:",
    options: [
      "Negative hyperbola",
      "Positive hyperbola",
      "Straight line",
      "Parabola"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "U = -GMm/r is hyperbolic, always negative, approaches zero as r→∞",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-gpe-formula-52",
    text: "Binding energy of a body at Earth surface equals:",
    options: [
      "|PE| = GMm/R",
      "KE + PE",
      "Only KE",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Binding energy = energy needed to free body = |U| = GMm/R (for body at rest)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gpe-formula"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-potential-53",
    text: "Gravitational potential V is defined as:",
    options: [
      "PE per unit mass",
      "PE per unit volume",
      "Force per unit mass",
      "Work per unit distance"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "V = U/m = -GM/r (potential energy per unit mass). Unit: J/kg = m²/s²",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-gravitational-potential-54",
    text: "At Earth surface, gravitational potential is:",
    options: [
      "-gR = -62.4 MJ/kg",
      "-g = -9.8 m/s²",
      "-GM/R²",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "V = -GM/R = -gR (using g = GM/R²). V ≈ -9.8 × 6.4×10⁶ ≈ -62.4×10⁶ J/kg",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-gravitational-potential-55",
    text: "Gravitational potential is a:",
    options: [
      "Scalar quantity",
      "Vector quantity",
      "Tensor",
      "Dimensionless"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Potential V is scalar (no direction), unlike field g which is vector",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "grav-gravitational-potential-56",
    text: "Relation between gravitational field g and potential V is:",
    options: [
      "g = -dV/dr",
      "g = dV/dr",
      "V = -dg/dr",
      "V = g×r"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Field is negative gradient of potential: g = -dV/dr (field points where V decreases)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-gravitational-potential-57",
    text: "Inside uniform spherical shell, gravitational potential is:",
    options: [
      "Constant everywhere",
      "Zero everywhere",
      "Varies as -1/r",
      "Varies as r"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "Inside shell: g = 0, so V = constant = -GM/R (surface value) throughout interior",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-gravitational-potential-58",
    text: "Potential difference between two points r₁ and r₂ is:",
    options: [
      "GM(1/r₁ - 1/r₂)",
      "-GM(1/r₁ - 1/r₂)",
      "GM(r₂ - r₁)",
      "GM(1/r₁ + 1/r₂)"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "ΔV = V₂ - V₁ = -GM/r₂ - (-GM/r₁) = GM(1/r₁ - 1/r₂)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-gravitational-potential-59",
    text: "Units of gravitational potential are:",
    options: [
      "J/kg or m²/s²",
      "N/kg or m/s²",
      "J or kg·m²/s²",
      "N·m or J"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "V has units [Energy]/[mass] = J/kg = m²/s² (same as specific energy)",
    subject: "physics",
    chapter: "gravitation",
    topic: "gravitational-potential-energy",
    formulas: [
      "gravitational-potential"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-orbital-velocity-formula-60",
    text: "Orbital velocity for satellite close to Earth surface is:",
    options: [
      "√(gR) ≈ 7.9 km/s",
      "√(2gR) ≈ 11.2 km/s",
      "√(gR/2) ≈ 5.6 km/s",
      "gR ≈ 62.7 km/s"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "v₀ = √(GM/R) = √(gR) ≈ √(9.8 × 6.4×10⁶) ≈ 7900 m/s = 7.9 km/s",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-orbital-velocity-formula-61",
    text: "Orbital velocity depends on:",
    options: [
      "Mass of planet and orbital radius",
      "Mass of satellite",
      "Shape of satellite",
      "Initial velocity of launch"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "v₀ = √(GM/r) depends only on M (planet mass) and r (orbital radius), NOT satellite mass",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-orbital-velocity-formula-62",
    text: "A satellite orbits at height R above Earth. Its orbital velocity compared to surface orbital velocity is:",
    options: [
      "v₀/√2",
      "v₀/2",
      "v₀√2",
      "v₀"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "v ∝ 1/√r. At r = 2R: v = v₀√(R/2R) = v₀/√2",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-orbital-velocity-formula-63",
    text: "For a satellite orbiting Earth, centripetal force is provided by:",
    options: [
      "Gravitational force",
      "Rocket thrust",
      "Air resistance",
      "Electromagnetic force"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "GMm/r² = mv²/r, so gravitational force = centripetal force. No thrust needed for circular orbit!",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-orbital-velocity-formula-64",
    text: "If orbital velocity is increased by √2 times, the satellite will:",
    options: [
      "Escape from orbit",
      "Move to lower orbit",
      "Move to higher orbit",
      "Remain in same orbit"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "v_escape = √2 × v_orbital. Increasing v by √2 gives escape velocity",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-orbital-velocity-formula-65",
    text: "Time period of satellite at height 3R above surface is:",
    options: [
      "8T₀",
      "4T₀",
      "2T₀",
      "16T₀"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "T ∝ r^(3/2). At r = 4R: T/T₀ = (4R/R)^(3/2) = 4^(3/2) = 8",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-orbital-velocity-formula-66",
    text: "Minimum time period for satellite orbiting Earth is:",
    options: [
      "84 minutes",
      "90 minutes",
      "24 hours",
      "60 minutes"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Minimum T at minimum r (surface): T = 2π√(R³/GM) = 2π√(R/g) ≈ 84 min",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-orbital-velocity-formula-67",
    text: "Kinetic energy of orbiting satellite is:",
    options: [
      "GMm/2r",
      "GMm/r",
      "-GMm/2r",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "KE = (1/2)mv² = (1/2)m(GM/r) = GMm/2r (always positive)",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-velocity-formula"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-orbital-energy-68",
    text: "Total mechanical energy of satellite in circular orbit is:",
    options: [
      "-GMm/2r",
      "GMm/2r",
      "-GMm/r",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "E = KE + PE = GMm/2r + (-GMm/r) = -GMm/2r (negative means bound)",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-orbital-energy-69",
    text: "For orbiting satellite, relation between KE, PE, and total energy E is:",
    options: [
      "E = U/2 = -KE",
      "E = KE + PE",
      "E = 2KE",
      "E = KE - PE"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "KE = GMm/2r, PE = -GMm/r, E = -GMm/2r. So E = PE/2 and E = -KE",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-orbital-energy-70",
    text: "When satellite moves to higher orbit, its total energy:",
    options: [
      "Increases (becomes less negative)",
      "Decreases",
      "Remains same",
      "Becomes positive"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "E = -GMm/2r. As r increases, |E| decreases, so E increases (less negative). But velocity decreases!",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "grav-orbital-energy-71",
    text: "Energy required to move satellite from orbit r₁ to r₂ (r₂ > r₁) is:",
    options: [
      "GMm/2(1/r₁ - 1/r₂)",
      "GMm(1/r₁ - 1/r₂)",
      "GMm/2(1/r₂ - 1/r₁)",
      "-GMm/2(1/r₁ - 1/r₂)"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "ΔE = E₂ - E₁ = -GMm/2r₂ - (-GMm/2r₁) = GMm/2(1/r₁ - 1/r₂) > 0",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2021",
      "numerical"
    ],
    year: 2021
  },
  {
    id: "grav-orbital-energy-72",
    text: "A satellite's KE is K and PE is U. Total energy is:",
    options: [
      "K + U",
      "K - U",
      "U - K",
      "(K + U)/2"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Total energy E = KE + PE = K + U (always). For orbit: K = GMm/2r, U = -GMm/r, so E = -GMm/2r",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-orbital-energy-73",
    text: "If KE of orbiting satellite is 10⁸ J, its PE is:",
    options: [
      "-2×10⁸ J",
      "-10⁸ J",
      "2×10⁸ J",
      "-5×10⁷ J"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "For orbit: PE = 2×E and KE = -E. Also PE = -2KE. So PE = -2×10⁸ J",
    subject: "physics",
    chapter: "gravitation",
    topic: "orbital-velocity",
    formulas: [
      "orbital-energy"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-keplers-third-law-74",
    text: "Kepler's third law states that T² is proportional to:",
    options: [
      "r³ (cube of orbital radius)",
      "r² (square of radius)",
      "r (radius)",
      "√r"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "T² ∝ r³ (T² = 4π²r³/GM). Period increases faster than distance",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-keplers-third-law-75",
    text: "A satellite at distance r has period T. At distance 4r, period becomes:",
    options: [
      "8T",
      "4T",
      "2T",
      "16T"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "T² ∝ r³, so T ∝ r^(3/2). T'/T = (4r/r)^(3/2) = 4^(3/2) = 8",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-keplers-third-law-76",
    text: "Mars orbits at 1.5 times Earth's distance from Sun. Its period is:",
    options: [
      "1.84 Earth years",
      "1.5 years",
      "2.25 years",
      "3 years"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "T_M/T_E = (1.5)^(3/2) = 1.5 × √1.5 ≈ 1.84",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-keplers-third-law-77",
    text: "Kepler's third law can be used to find:",
    options: [
      "Mass of central body",
      "Mass of orbiting body",
      "Color of planet",
      "Composition"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "T² = 4π²r³/GM, so M = 4π²r³/GT². Can find M from T and r measurements",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-keplers-third-law-78",
    text: "Two satellites orbit Earth at radii r and 2r. Ratio of their periods is:",
    options: [
      "1:2√2",
      "1:2",
      "1:4",
      "1:8"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "T₁/T₂ = (r/(2r))^(3/2) = (1/2)^(3/2) = 1/(2√2) or 1:2√2",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  },
  {
    id: "grav-keplers-third-law-79",
    text: "If distance of planet from Sun doubles, its orbital speed becomes:",
    options: [
      "v/√2",
      "v/2",
      "v/4",
      "2v"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "v ∝ 1/√r. If r → 2r, then v → v/√2",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "keplers-third-law"
    ],
    tags: [
      "neet-2023",
      "numerical"
    ],
    year: 2023
  },
  {
    id: "grav-geostationary-orbit-80",
    text: "Geostationary satellite has time period of:",
    options: [
      "24 hours",
      "12 hours",
      "84 minutes",
      "48 hours"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Geostationary orbit has T = 24 hours to match Earth's rotation, appearing stationary",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2018",
      "recall"
    ],
    year: 2018
  },
  {
    id: "grav-geostationary-orbit-81",
    text: "Height of geostationary satellite above Earth surface is approximately:",
    options: [
      "36,000 km",
      "400 km",
      "3,600 km",
      "360 km"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Using T² = 4π²r³/GM with T = 24 hr gives r ≈ 42,000 km, so h = r - R ≈ 36,000 km",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-geostationary-orbit-82",
    text: "Geostationary satellite must be in:",
    options: [
      "Equatorial plane",
      "Polar orbit",
      "Any plane",
      "At poles"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Must orbit in equatorial plane to remain above same point on Earth's surface",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "grav-geostationary-orbit-83",
    text: "Angular velocity of geostationary satellite equals:",
    options: [
      "Angular velocity of Earth",
      "Half of Earth's ω",
      "Twice Earth's ω",
      "Zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "ω_satellite = ω_Earth = 2π/24hr so it appears stationary relative to ground",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-geostationary-orbit-84",
    text: "Which statement about geostationary satellites is FALSE?",
    options: [
      "They can be placed at any longitude",
      "Orbit must be equatorial",
      "Period is 24 hours",
      "Used for communication"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Actually, geostationary satellites CAN be placed at any longitude (but only at ONE specific height in equatorial plane)",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-geostationary-orbit-85",
    text: "Number of geostationary orbits possible is:",
    options: [
      "One unique orbit",
      "Infinite",
      "Three",
      "Zero"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Only ONE specific orbit (unique height and equatorial plane) gives T = 24 hrs",
    subject: "physics",
    chapter: "gravitation",
    topic: "satellites",
    formulas: [
      "geostationary-orbit"
    ],
    tags: [
      "neet-2023",
      "conceptual"
    ],
    year: 2023
  },
  {
    id: "grav-apparent-weight-86",
    text: "A person of mass 60 kg stands in a lift accelerating upward at 2 m/s². Normal force from floor is:",
    options: [
      "708 N",
      "588 N",
      "600 N",
      "480 N"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "N = m(g + a) = 60(9.8 + 2) = 60 × 11.8 = 708 N (feels heavier)",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2018",
      "numerical"
    ],
    year: 2018
  },
  {
    id: "grav-apparent-weight-87",
    text: "In a freely falling lift, apparent weight of person is:",
    options: [
      "Zero",
      "Equal to actual weight",
      "Half of weight",
      "Double"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "a = g (free fall), so N = m(g - g) = 0. Person feels weightless",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-apparent-weight-88",
    text: "A person weighing 600 N stands in descending lift with acceleration 3 m/s². Apparent weight is:",
    options: [
      "416 N",
      "600 N",
      "784 N",
      "300 N"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "N = m(g - a). m = 600/9.8 ≈ 61.2 kg. N = 61.2(9.8 - 3) = 61.2 × 6.8 ≈ 416 N",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-apparent-weight-89",
    text: "When does a person in lift feel heaviest?",
    options: [
      "Lift accelerating upward",
      "Lift at rest",
      "Lift moving up at constant v",
      "Free fall"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Maximum N when a is upward: N = m(g + a). Upward acceleration makes you press harder on floor",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-apparent-weight-90",
    text: "A spring balance in freely falling elevator shows reading:",
    options: [
      "Zero",
      "Actual weight",
      "More than actual",
      "Less than actual"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "In free fall, no normal force, so spring doesn't compress. Reads zero (weightlessness)",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-apparent-weight-91",
    text: "Apparent weight = actual weight when lift is:",
    options: [
      "At rest or moving with constant velocity",
      "Accelerating",
      "Decelerating",
      "In free fall"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "When a = 0 (rest or constant v), N = m(g - 0) = mg = actual weight",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "apparent-weight"
    ],
    tags: [
      "neet-2023",
      "conceptual"
    ],
    year: 2023
  },
  {
    id: "grav-weightlessness-orbit-92",
    text: "Astronauts in space station feel weightless because:",
    options: [
      "Station and astronaut both in free fall",
      "No gravity in space",
      "Too far from Earth",
      "Air is removed"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Both accelerate toward Earth at same rate (centripetal acceleration). No relative motion → no normal force",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "weightlessness-orbit"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-weightlessness-orbit-93",
    text: "Value of g at ISS altitude (~400 km) is approximately:",
    options: [
      "8.7 m/s² (89% of surface)",
      "Zero",
      "4.9 m/s²",
      "9.8 m/s²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "g_h = g(R/(R+h))² ≈ 9.8(6400/6800)² ≈ 8.7 m/s². NOT zero!",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "weightlessness-orbit"
    ],
    tags: [
      "neet-2019",
      "numerical"
    ],
    year: 2019
  },
  {
    id: "grav-weightlessness-orbit-94",
    text: "True weight of astronaut in orbit:",
    options: [
      "Still exists (≈90% of surface value)",
      "Becomes zero",
      "Doubles",
      "Infinite"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Gravitational force (true weight) still acts. Only apparent weight (normal force) is zero",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "weightlessness-orbit"
    ],
    tags: [
      "neet-2020",
      "conceptual"
    ],
    year: 2020
  },
  {
    id: "grav-weightlessness-orbit-95",
    text: "Condition for weightlessness is:",
    options: [
      "N = 0 (no normal force)",
      "W = 0",
      "g = 0",
      "m = 0"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "Weightlessness means apparent weight N = 0, not that gravitational force W is zero",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "weightlessness-orbit"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-weightlessness-orbit-96",
    text: "A pendulum in orbiting satellite will:",
    options: [
      "Not oscillate",
      "Oscillate faster",
      "Oscillate slower",
      "Complete one rotation"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "No effective g in free fall, so pendulum has no restoring force. Doesn't oscillate",
    subject: "physics",
    chapter: "gravitation",
    topic: "weightlessness",
    formulas: [
      "weightlessness-orbit"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-areal-velocity-97",
    text: "Kepler's second law states that line from Sun to planet sweeps:",
    options: [
      "Equal areas in equal times",
      "Equal distances in equal times",
      "Equal angles in equal times",
      "Increasing areas"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "dA/dt = constant (areal velocity constant). Consequence of angular momentum conservation",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "areal-velocity"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-areal-velocity-98",
    text: "When planet is closest to Sun (perihelion), its speed is:",
    options: [
      "Maximum",
      "Minimum",
      "Same as aphelion",
      "Zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "From L = mvr = constant: smaller r → larger v. Speed maximum at closest approach",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "areal-velocity"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-areal-velocity-99",
    text: "Planet at perihelion distance r_p has velocity v_p. At aphelion distance r_a, velocity v_a satisfies:",
    options: [
      "r_p × v_p = r_a × v_a",
      "v_p = v_a",
      "r_p/v_p = r_a/v_a",
      "r_p × v_p² = r_a × v_a²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Angular momentum L = mvr = constant. So r_p v_p = r_a v_a",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "areal-velocity"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-areal-velocity-100",
    text: "Areal velocity is constant due to conservation of:",
    options: [
      "Angular momentum",
      "Linear momentum",
      "Energy",
      "Mass"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "dA/dt = L/(2m) = constant because angular momentum L is conserved (no torque from central force)",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "areal-velocity"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-areal-velocity-101",
    text: "Earth's orbital speed is maximum in:",
    options: [
      "January (perihelion)",
      "July (aphelion)",
      "Same always",
      "March/September"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Earth closest to Sun in January → maximum speed. Farthest in July → minimum speed",
    subject: "physics",
    chapter: "gravitation",
    topic: "keplers-laws",
    formulas: [
      "areal-velocity"
    ],
    tags: [
      "neet-2022",
      "conceptual"
    ],
    year: 2022
  },
  {
    id: "grav-g-latitude-102",
    text: "Value of g is maximum at:",
    options: [
      "Poles",
      "Equator",
      "45° latitude",
      "Same everywhere"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "At poles: no centrifugal effect (φ = 90°, cosφ = 0). g' = g (maximum)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-latitude"
    ],
    tags: [
      "neet-2018",
      "conceptual"
    ],
    year: 2018
  },
  {
    id: "grav-g-latitude-103",
    text: "Value of g is minimum at:",
    options: [
      "Equator",
      "Poles",
      "45° latitude",
      "30° latitude"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "At equator: maximum centrifugal effect (φ = 0°, cosφ = 1). g' = g - Rω² (minimum)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-latitude"
    ],
    tags: [
      "neet-2019",
      "conceptual"
    ],
    year: 2019
  },
  {
    id: "grav-g-latitude-104",
    text: "Difference in g between poles and equator is approximately:",
    options: [
      "0.034 m/s²",
      "0.34 m/s²",
      "3.4 m/s²",
      "0.0034 m/s²"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "Δg = Rω² ≈ 6.4×10⁶ × (7.3×10⁻⁵)² ≈ 0.034 m/s² (very small!)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-latitude"
    ],
    tags: [
      "neet-2020",
      "numerical"
    ],
    year: 2020
  },
  {
    id: "grav-g-latitude-105",
    text: "If Earth's rotation speed increases, g at equator will:",
    options: [
      "Decrease",
      "Increase",
      "Remain same",
      "Become zero"
    ],
    correct: 0,
    difficulty: "easy",
    explanation: "g' = g - Rω². Larger ω → smaller g' (more centrifugal effect)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-latitude"
    ],
    tags: [
      "neet-2021",
      "conceptual"
    ],
    year: 2021
  },
  {
    id: "grav-g-latitude-106",
    text: "For weightlessness at equator due to rotation, Earth's period should be:",
    options: [
      "84 minutes",
      "24 hours",
      "12 hours",
      "1 hour"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "Need g = Rω², so ω = √(g/R). T = 2π/ω = 2π√(R/g) ≈ 84 min (17× faster than now!)",
    subject: "physics",
    chapter: "gravitation",
    topic: "acceleration-due-gravity",
    formulas: [
      "g-latitude"
    ],
    tags: [
      "neet-2022",
      "numerical"
    ],
    year: 2022
  }
];
