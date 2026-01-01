// Current Electricity - 10% weightage (Highest Priority)
// NCERT Class 12, Chapter 3

export const currentElectricityTopics = [
      {
        id: "kirchhoffs-laws",
        name: "Kirchhoff's Laws and Combination of Resistances",
        weightage: 4,
        difficulty: "medium",
        theory: {
          summary: "Kirchhoff's laws are fundamental rules for analyzing electrical circuits. The Junction Rule (KCL) states that the algebraic sum of currents at any junction is zero. The Loop Rule (KVL) states that the algebraic sum of potential differences in any closed loop is zero.",
          realWorldAnalogy: "Think of water flowing through pipes at a junction - water coming in must equal water going out (KCL). For KVL, imagine hiking around a mountain loop - you end up at the same height you started, so total elevation change is zero.",
          keyPoints: [
            "KCL (Junction Rule): ΣI = 0 at any junction - based on conservation of charge",
            "KVL (Loop Rule): ΣV = 0 in any closed loop - based on conservation of energy",
            "Series combination: R_eq = R₁ + R₂ + R₃ + ... (current same, voltage divides)",
            "Parallel combination: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... (voltage same, current divides)",
            "Sign convention: Potential drops across resistor in direction of current flow",
            "EMF is positive when traversed from - to + terminal"
          ],
          prerequisites: ["ohms-law-basics", "electric-current"]
        },
        formulas: [
          {
            id: "kcl",
            name: "Kirchhoff's Current Law (KCL)",
            category: "base",
            formula: "ΣI = 0",
            latex: "\\sum I_{in} = \\sum I_{out}",
            description: "At any junction in a circuit, the sum of currents entering equals the sum of currents leaving",
            variables: [
              {
                symbol: "I",
                meaning: "Electric current",
                unit: "A (Ampere)",
                typical_values: "mA to A in circuits"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At a simple junction with 2 branches: I_in = I_out", "For n branches meeting: I₁ + I₂ + ... = Iₙ"],
            dimensionalCheck: "[I] = A",
          },
          {
            id: "kvl",
            name: "Kirchhoff's Voltage Law (KVL)",
            category: "base",
            formula: "ΣV = 0",
            latex: "\\sum_{loop} V = 0",
            description: "The algebraic sum of all potential differences around any closed loop is zero",
            variables: [
              {
                symbol: "V",
                meaning: "Potential difference",
                unit: "V (Volt)",
                typical_values: "1-12V in typical circuits"
              },
              {
                symbol: "ε",
                meaning: "EMF of cell",
                unit: "V",
                typical_values: "1.5V (dry cell), 2V (lead-acid)"
              },
              {
                symbol: "IR",
                meaning: "Voltage drop across resistor",
                unit: "V",
                typical_values: "Depends on circuit"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For ideal cell (no internal resistance): ε = IR", "For real cell: ε = IR + Ir (where r is internal resistance)"],
            dimensionalCheck: "[V] = [ML²T⁻³A⁻¹]",
          },
          {
            id: "series-resistance",
            name: "Resistors in Series",
            category: "derived",
            formula: "R_eq = R₁ + R₂ + R₃ + ...",
            latex: "R_{eq} = R_1 + R_2 + R_3 + \\cdots + R_n",
            description: "Equivalent resistance of resistors connected in series (end to end)",
            variables: [
              {
                symbol: "R_eq",
                meaning: "Equivalent resistance",
                unit: "Ω (Ohm)",
                typical_values: "Sum of individual resistances"
              },
              {
                symbol: "R₁, R₂...",
                meaning: "Individual resistances",
                unit: "Ω",
                typical_values: "1Ω to MΩ range"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["Current is same through all resistors: I₁ = I₂ = I₃ = I", "Voltage divides: V₁/V₂ = R₁/R₂", "R_eq is always greater than the largest individual resistance"],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
          },
          {
            id: "parallel-resistance",
            name: "Resistors in Parallel",
            category: "derived",
            formula: "1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...",
            latex: "\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\cdots",
            description: "Equivalent resistance of resistors connected in parallel (same terminals)",
            variables: [
              {
                symbol: "R_eq",
                meaning: "Equivalent resistance",
                unit: "Ω",
                typical_values: "Less than smallest R"
              },
              {
                symbol: "R₁, R₂...",
                meaning: "Individual resistances",
                unit: "Ω",
                typical_values: "1Ω to MΩ"
              }
            ],
            derivedFrom: "kcl",
            applications: [],
            specialCases: ["Voltage is same across all resistors: V₁ = V₂ = V₃ = V", "Current divides: I₁/I₂ = R₂/R₁ (inversely proportional)", "R_eq is always less than the smallest individual resistance"],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
          },
          {
            id: "ohms-law",
            name: "Ohm's Law",
            category: "base",
            formula: "V = IR",
            latex: "V = IR",
            description: "The potential difference across a conductor is directly proportional to the current flowing through it, at constant temperature",
            variables: [
              {
                symbol: "V",
                meaning: "Potential difference",
                unit: "V (Volt)",
                typical_values: "1-220V"
              },
              {
                symbol: "I",
                meaning: "Electric current",
                unit: "A (Ampere)",
                typical_values: "mA to A"
              },
              {
                symbol: "R",
                meaning: "Resistance",
                unit: "Ω (Ohm)",
                typical_values: "1Ω to MΩ"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Valid only for ohmic conductors at constant temperature", "Not valid for semiconductors, electrolytes, discharge tubes"],
            dimensionalCheck: "[V] = [I][R] → V = A·Ω",
          },
          {
            id: "internal-resistance",
            name: "Cell with Internal Resistance",
            category: "derived",
            formula: "V = ε - Ir",
            latex: "V = \\varepsilon - Ir",
            description: "Terminal voltage of a cell is less than EMF due to voltage drop across internal resistance",
            variables: [
              {
                symbol: "V",
                meaning: "Terminal voltage",
                unit: "V",
                typical_values: "Less than EMF"
              },
              {
                symbol: "ε",
                meaning: "EMF of cell",
                unit: "V",
                typical_values: "1.5V, 2V, 9V typical"
              },
              {
                symbol: "I",
                meaning: "Current drawn",
                unit: "A",
                typical_values: "mA to A"
              },
              {
                symbol: "r",
                meaning: "Internal resistance",
                unit: "Ω",
                typical_values: "0.1Ω to few Ω"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["For ideal cell: r = 0, so V = ε always", "Terminal voltage decreases as current increases"],
            dimensionalCheck: "[V] = [ε] = [I][r]",
          },
          {
            id: "cells-series",
            name: "Cells in Series",
            category: "derived",
            formula: "ε_eq = ε₁ + ε₂ + ..., r_eq = r₁ + r₂ + ...",
            latex: "\\varepsilon_{eq} = \\sum \\varepsilon_i, \\quad r_{eq} = \\sum r_i",
            description: "When cells are connected in series (+ of one to - of next), EMFs add up",
            variables: [
              {
                symbol: "ε_eq",
                meaning: "Equivalent EMF",
                unit: "V",
                typical_values: "Sum of individual EMFs"
              },
              {
                symbol: "r_eq",
                meaning: "Equivalent internal resistance",
                unit: "Ω",
                typical_values: "Sum of individual r"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["Cells must be connected correctly (+ to -)", "If one cell is reversed: ε_eq = ε₁ - ε₂ (for 2 cells)"],
            dimensionalCheck: "[ε] = V, [r] = Ω",
          },
          {
            id: "cells-parallel",
            name: "Cells in Parallel",
            category: "derived",
            formula: "ε_eq = ε (same), 1/r_eq = 1/r₁ + 1/r₂ + ...",
            latex: "\\varepsilon_{eq} = \\varepsilon, \\quad \\frac{1}{r_{eq}} = \\sum \\frac{1}{r_i}",
            description: "When identical cells are connected in parallel, EMF remains same but internal resistance reduces",
            variables: [
              {
                symbol: "ε_eq",
                meaning: "Equivalent EMF",
                unit: "V",
                typical_values: "Same as single cell EMF"
              },
              {
                symbol: "r_eq",
                meaning: "Equivalent internal resistance",
                unit: "Ω",
                typical_values: "r/n for n identical cells"
              }
            ],
            derivedFrom: "kcl",
            applications: [],
            specialCases: ["Only works for identical cells", "Used when internal resistance is high compared to external R"],
            dimensionalCheck: "[ε] = V, [r] = Ω",
          },
          {
            id: "junction-current-distribution",
            name: "Junction current distribution",
            category: "derived",
            formula: "I_1 = I_2 + I_3",
            latex: "I_1 = I_2 + I_3",
            description: "When current splits at a junction",
            variables: [],
            derivedFrom: "kcl",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = A",
            neet_frequency: "high",
          },
          {
            id: "parallel-current-calculation",
            name: "Parallel current calculation",
            category: "derived",
            formula: "I_{total} = I_1 + I_2 + ... + I_n",
            latex: "I_{total} = I_1 + I_2 + ... + I_n",
            description: "Finding total current in parallel branches",
            variables: [],
            derivedFrom: "kcl",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = A",
            neet_frequency: "high",
          },
          {
            id: "single-loop-circuit",
            name: "Single loop circuit",
            category: "derived",
            formula: "\\varepsilon - IR_1 - IR_2 = 0",
            latex: "\\varepsilon - IR_1 - IR_2 = 0",
            description: "EMF equals sum of voltage drops",
            variables: [],
            derivedFrom: "kvl",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [ML²T⁻³A⁻¹]",
            neet_frequency: "high",
          },
          {
            id: "two-cell-circuit",
            name: "Two cell circuit",
            category: "derived",
            formula: "\\varepsilon_1 - \\varepsilon_2 = I(R_1 + R_2 + r_1 + r_2)",
            latex: "\\varepsilon_1 - \\varepsilon_2 = I(R_1 + R_2 + r_1 + r_2)",
            description: "Cells in series with internal resistance",
            variables: [],
            derivedFrom: "kvl",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [ML²T⁻³A⁻¹]",
            neet_frequency: "medium",
          },
          {
            id: "two-resistors-in-series",
            name: "Two resistors in series",
            category: "derived",
            formula: "R_{eq} = R_1 + R_2",
            latex: "R_{eq} = R_1 + R_2",
            description: "Simplest series combination",
            variables: [],
            derivedFrom: "series-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
            neet_frequency: "high",
          },
          {
            id: "n-identical-resistors",
            name: "n identical resistors",
            category: "derived",
            formula: "R_{eq} = nR",
            latex: "R_{eq} = nR",
            description: "When all resistors have same value R",
            variables: [],
            derivedFrom: "series-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
            neet_frequency: "medium",
          },
          {
            id: "two-resistors-in-parallel",
            name: "Two resistors in parallel",
            category: "derived",
            formula: "R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}",
            latex: "R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}",
            description: "Product over sum formula",
            variables: [],
            derivedFrom: "parallel-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
            neet_frequency: "high",
          },
          {
            id: "n-identical-resistors-2",
            name: "n identical resistors",
            category: "derived",
            formula: "R_{eq} = \\frac{R}{n}",
            latex: "R_{eq} = \\frac{R}{n}",
            description: "When all resistors have same value R",
            variables: [],
            derivedFrom: "parallel-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [ML²T⁻³A⁻²]",
            neet_frequency: "high",
          },
          {
            id: "current-calculation",
            name: "Current calculation",
            category: "derived",
            formula: "I = \\frac{V}{R}",
            latex: "I = \\frac{V}{R}",
            description: "Finding current when V and R are known",
            variables: [],
            derivedFrom: "ohms-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [I][R] → V = A·Ω",
            neet_frequency: "high",
          },
          {
            id: "resistance-calculation",
            name: "Resistance calculation",
            category: "derived",
            formula: "R = \\frac{V}{I}",
            latex: "R = \\frac{V}{I}",
            description: "Finding resistance from V-I data",
            variables: [],
            derivedFrom: "ohms-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [I][R] → V = A·Ω",
            neet_frequency: "high",
          },
          {
            id: "power-forms",
            name: "Power forms",
            category: "derived",
            formula: "P = I^2R = \\frac{V^2}{R} = VI",
            latex: "P = I^2R = \\frac{V^2}{R} = VI",
            description: "Power dissipation in resistor",
            variables: [],
            derivedFrom: "ohms-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [I][R] → V = A·Ω",
            neet_frequency: "high",
          },
          {
            id: "current-from-cell",
            name: "Current from cell",
            category: "derived",
            formula: "I = \\frac{\\varepsilon}{R + r}",
            latex: "I = \\frac{\\varepsilon}{R + r}",
            description: "Total current in circuit with external R",
            variables: [],
            derivedFrom: "internal-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [ε] = [I][r]",
            neet_frequency: "high",
          },
          {
            id: "maximum-current",
            name: "Maximum current",
            category: "derived",
            formula: "I_{max} = \\frac{\\varepsilon}{r}",
            latex: "I_{max} = \\frac{\\varepsilon}{r}",
            description: "When external resistance is zero (short circuit)",
            variables: [],
            derivedFrom: "internal-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [ε] = [I][r]",
            neet_frequency: "medium",
          },
          {
            id: "open-circuit",
            name: "Open circuit",
            category: "derived",
            formula: "V = \\varepsilon",
            latex: "V = \\varepsilon",
            description: "When no current flows, terminal voltage equals EMF",
            variables: [],
            derivedFrom: "internal-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [ε] = [I][r]",
            neet_frequency: "medium",
          },
          {
            id: "n-identical-cells-in-series",
            name: "n identical cells in series",
            category: "derived",
            formula: "\\varepsilon_{eq} = n\\varepsilon, \\quad r_{eq} = nr",
            latex: "\\varepsilon_{eq} = n\\varepsilon, \\quad r_{eq} = nr",
            description: "All cells same EMF and internal resistance",
            variables: [],
            derivedFrom: "cells-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = V, [r] = Ω",
            neet_frequency: "high",
          },
          {
            id: "current-with-external-r",
            name: "Current with external R",
            category: "derived",
            formula: "I = \\frac{n\\varepsilon}{R + nr}",
            latex: "I = \\frac{n\\varepsilon}{R + nr}",
            description: "n identical cells with external resistance R",
            variables: [],
            derivedFrom: "cells-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = V, [r] = Ω",
            neet_frequency: "high",
          },
          {
            id: "n-identical-cells-in-parallel",
            name: "n identical cells in parallel",
            category: "derived",
            formula: "\\varepsilon_{eq} = \\varepsilon, \\quad r_{eq} = \\frac{r}{n}",
            latex: "\\varepsilon_{eq} = \\varepsilon, \\quad r_{eq} = \\frac{r}{n}",
            description: "Same EMF, reduced internal resistance",
            variables: [],
            derivedFrom: "cells-parallel",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = V, [r] = Ω",
            neet_frequency: "high",
          },
          {
            id: "current-with-external-r-2",
            name: "Current with external R",
            category: "derived",
            formula: "I = \\frac{\\varepsilon}{R + r/n}",
            latex: "I = \\frac{\\varepsilon}{R + r/n}",
            description: "n identical cells parallel with external R",
            variables: [],
            derivedFrom: "cells-parallel",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = V, [r] = Ω",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing series and parallel formulas - using addition for parallel resistance",
            correct: "In parallel: 1/R_eq = 1/R₁ + 1/R₂ (reciprocals add). In series: R_eq = R₁ + R₂ (direct addition)",
            whyItHappens: "Students memorize formulas without understanding the physical basis - same current in series vs same voltage in parallel",
            neetExample: "NEET 2019: Two resistors when connected in series give 25Ω, in parallel give 6Ω. Find values."
          },
          {
            mistake: "Wrong sign convention in KVL - not considering direction of current flow",
            correct: "Moving in direction of current: -IR (drop). Moving against current: +IR. EMF: - to + is positive",
            whyItHappens: "Lack of practice with sign conventions and not drawing clear circuit diagrams",
            neetExample: "NEET 2020: Multi-loop circuit problem requiring proper sign convention"
          },
          {
            mistake: "Ignoring internal resistance of cells",
            correct: "Always use V = ε - Ir for real cells. Current I = ε/(R+r), not I = ε/R",
            whyItHappens: "Ideal cell assumption carried over inappropriately",
            neetExample: "NEET 2018: Cell with EMF 2V and internal resistance 1Ω connected to 4Ω. Find terminal voltage."
          },
          {
            mistake: "Adding EMFs of cells in parallel (treating like series)",
            correct: "Parallel identical cells: ε_eq = ε (same), only internal resistance reduces to r/n",
            whyItHappens: "Confusion between series and parallel cell combinations",
            neetExample: "NEET 2017: Three identical cells in parallel vs series - compare currents"
          },
          {
            mistake: "Applying Ohm's law to non-ohmic conductors",
            correct: "Ohm's law V=IR is only valid for ohmic conductors at constant temperature",
            whyItHappens: "Not recognizing that V-I graph must be linear for Ohm's law to apply",
            neetExample: "NEET 2021: Identify ohmic vs non-ohmic from V-I characteristics"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Finding equivalent resistance in series-parallel combinations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Multi-loop circuits using Kirchhoff's laws",
            difficulty: "hard"
          },
          {
            type: "conceptual",
            description: "Maximum power transfer theorem applications",
            difficulty: "hard"
          },
          {
            type: "graphical",
            description: "V-I characteristic interpretation for cells",
            difficulty: "medium"
          },
          {
            type: "application",
            description: "Calculating current distribution in parallel branches",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Mixed grouping of cells (series-parallel)",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Find equivalent resistance in series-parallel network",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Current through specific resistor using Kirchhoff's laws",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2023
            ]
          },
          {
            pattern: "Terminal voltage vs EMF problems",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Cells in series/parallel - find current",
            frequency: "high",
            yearAsked: [
              2017,
              2019,
              2020,
              2021
            ]
          },
          {
            pattern: "Power dissipated in resistor",
            frequency: "medium",
            yearAsked: [2018, 2019, 2022]
          }
        ],
        analogies: [
          {
            concept: "Electric current",
            analogy: "Water flowing through pipes",
            mapping: "Current = water flow rate, Voltage = water pressure, Resistance = pipe narrowness"
          },
          {
            concept: "KCL at junction",
            analogy: "Traffic at intersection",
            mapping: "Cars entering = cars leaving (no cars accumulate at junction)"
          },
          {
            concept: "KVL in loop",
            analogy: "Hiking around a mountain loop",
            mapping: "Total elevation gain = total elevation loss (return to starting height)"
          },
          {
            concept: "Internal resistance",
            analogy: "Battery as water pump with leaky pipe",
            mapping: "Pump pressure = EMF, leak = internal resistance causing pressure loss"
          }
        ],
        questions: [],
      },
      {
        id: "wheatstone-bridge",
        name: "Wheatstone Bridge and Symmetric Circuits",
        weightage: 3,
        difficulty: "medium",
        theory: {
          summary: "The Wheatstone bridge is a circuit of four resistances arranged in a quadrilateral with a galvanometer between two opposite corners. When the bridge is balanced (no current through galvanometer), the ratio of resistances satisfies P/Q = R/S. This principle is used for precise resistance measurements.",
          realWorldAnalogy: "Imagine a seesaw perfectly balanced with weights on both sides - the ratio of weights times their distances must be equal. Similarly, when the bridge is balanced, the voltage 'heights' at both galvanometer terminals are equal.",
          keyPoints: [
            "Balance condition: P/Q = R/S (no current through galvanometer)",
            "At balance, points B and D are at same potential (V_B = V_D)",
            "Galvanometer shows zero deflection when balanced",
            "Used for precise measurement of unknown resistance",
            "Meter bridge is a practical form using uniform wire",
            "Sensitivity highest when all four resistances are equal"
          ],
          prerequisites: ["kirchhoffs-laws", "ohms-law"]
        },
        formulas: [
          {
            id: "wheatstone-balance",
            name: "Wheatstone Bridge Balance Condition",
            category: "base",
            formula: "P/Q = R/S",
            latex: "\\frac{P}{Q} = \\frac{R}{S}",
            description: "When the bridge is balanced, the ratio of resistances in adjacent arms are equal",
            variables: [
              {
                symbol: "P, Q",
                meaning: "Resistances in ratio arms",
                unit: "Ω",
                typical_values: "1Ω to 1000Ω"
              },
              {
                symbol: "R",
                meaning: "Known standard resistance",
                unit: "Ω",
                typical_values: "Standard resistance box"
              },
              {
                symbol: "S",
                meaning: "Unknown resistance",
                unit: "Ω",
                typical_values: "To be determined"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["If P = Q, then R = S (equal ratio arms)", "Galvanometer can be replaced by any detector at balance"],
            dimensionalCheck: "Dimensionless ratio on both sides",
          },
          {
            id: "meter-bridge",
            name: "Meter Bridge Formula",
            category: "derived",
            formula: "S = R × (100-l)/l",
            latex: "S = R \\times \\frac{100-l}{l}",
            description: "In meter bridge, resistance is proportional to length of wire. Null point at length l from R side.",
            variables: [
              {
                symbol: "S",
                meaning: "Unknown resistance",
                unit: "Ω",
                typical_values: "To be determined"
              },
              {
                symbol: "R",
                meaning: "Known resistance",
                unit: "Ω",
                typical_values: "From resistance box"
              },
              {
                symbol: "l",
                meaning: "Balance length from R side",
                unit: "cm",
                typical_values: "30-70 cm ideal"
              },
              {
                symbol: "100-l",
                meaning: "Remaining length",
                unit: "cm",
                typical_values: "Complementary length"
              }
            ],
            derivedFrom: "wheatstone-balance",
            applications: [],
            specialCases: ["For l = 50 cm: R = S (equal resistances)", "End corrections may be needed for accurate measurements", "Best accuracy when l is around 50 cm"],
            dimensionalCheck: "[S] = [R] = Ω",
          },
          {
            id: "unbalanced-bridge",
            name: "Unbalanced Wheatstone Bridge",
            category: "derived",
            formula: "Use Kirchhoff's laws",
            latex: "I_G = \\frac{E(PS-QR)}{(P+Q)(R+S)G + PR(Q+S) + QS(P+R)}",
            description: "When bridge is not balanced, current flows through galvanometer. Complex formula rarely used directly.",
            variables: [
              {
                symbol: "I_G",
                meaning: "Galvanometer current",
                unit: "A",
                typical_values: "μA to mA"
              },
              {
                symbol: "G",
                meaning: "Galvanometer resistance",
                unit: "Ω",
                typical_values: "10-1000Ω"
              },
              {
                symbol: "E",
                meaning: "EMF of cell",
                unit: "V",
                typical_values: "1-10V"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["Usually problems involve balanced bridge only", "For unbalanced, apply KVL to each loop"],
            dimensionalCheck: "[I] = A",
          },
          {
            id: "symmetric-circuit",
            name: "Symmetric Circuit Simplification",
            category: "base",
            formula: "Identify equipotential points",
            latex: "V_A = V_B \\Rightarrow \\text{No current between A and B}",
            description: "In symmetric circuits, identify points at same potential - resistors between them can be removed or carry no current",
            variables: [
              {
                symbol: "V_A, V_B",
                meaning: "Potentials at symmetric points",
                unit: "V",
                typical_values: "Equal by symmetry"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Look for mirror symmetry about input-output axis", "Equal resistors from same node to symmetric points are in parallel"],
            dimensionalCheck: "[R] = Ω",
          },
          {
            id: "finding-unknown-resistance",
            name: "Finding unknown resistance",
            category: "derived",
            formula: "S = \\frac{Q \\cdot R}{P}",
            latex: "S = \\frac{Q \\cdot R}{P}",
            description: "When P, Q, R are known and bridge is balanced",
            variables: [],
            derivedFrom: "wheatstone-balance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio on both sides",
            neet_frequency: "high",
          },
          {
            id: "cross-multiplication-form",
            name: "Cross multiplication form",
            category: "derived",
            formula: "PS = QR",
            latex: "PS = QR",
            description: "Product of opposite arms are equal",
            variables: [],
            derivedFrom: "wheatstone-balance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio on both sides",
            neet_frequency: "high",
          },
          {
            id: "direct-calculation",
            name: "Direct calculation",
            category: "derived",
            formula: "S = R \\times \\frac{100-l}{l}",
            latex: "S = R \\times \\frac{100-l}{l}",
            description: "Finding unknown from balance point",
            variables: [],
            derivedFrom: "meter-bridge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = [R] = Ω",
            neet_frequency: "high",
          },
          {
            id: "ratio-form",
            name: "Ratio form",
            category: "derived",
            formula: "\\frac{R}{S} = \\frac{l}{100-l}",
            latex: "\\frac{R}{S} = \\frac{l}{100-l}",
            description: "Ratio equals length ratio",
            variables: [],
            derivedFrom: "meter-bridge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = [R] = Ω",
            neet_frequency: "high",
          },
          {
            id: "check-balance",
            name: "Check balance",
            category: "derived",
            formula: "I_G = 0 \\Rightarrow PS = QR",
            latex: "I_G = 0 \\Rightarrow PS = QR",
            description: "At balance, numerator becomes zero",
            variables: [],
            derivedFrom: "unbalanced-bridge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = A",
            neet_frequency: "low",
          },
          {
            id: "cube-resistance-face-diagonal",
            name: "Cube resistance (face diagonal)",
            category: "derived",
            formula: "R_{eq} = \\frac{3R}{4}",
            latex: "R_{eq} = \\frac{3R}{4}",
            description: "Between adjacent corners of resistor cube",
            variables: [],
            derivedFrom: "symmetric-circuit",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = Ω",
            neet_frequency: "medium",
          },
          {
            id: "cube-resistance-body-diagonal",
            name: "Cube resistance (body diagonal)",
            category: "derived",
            formula: "R_{eq} = \\frac{5R}{6}",
            latex: "R_{eq} = \\frac{5R}{6}",
            description: "Between opposite corners of resistor cube",
            variables: [],
            derivedFrom: "symmetric-circuit",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = Ω",
            neet_frequency: "medium",
          },
          {
            id: "cube-resistance-edge",
            name: "Cube resistance (edge)",
            category: "derived",
            formula: "R_{eq} = \\frac{7R}{12}",
            latex: "R_{eq} = \\frac{7R}{12}",
            description: "Between corners of same edge",
            variables: [],
            derivedFrom: "symmetric-circuit",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = Ω",
            neet_frequency: "low",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing which resistances are opposite in Wheatstone bridge",
            correct: "P and S are opposite (diagonal), Q and R are opposite. Balance: P/Q = R/S or PS = QR",
            whyItHappens: "Not drawing the bridge diagram correctly with P,Q,R,S positions",
            neetExample: "NEET 2019: Standard Wheatstone bridge problem with identification of arms"
          },
          {
            mistake: "Wrong length ratio in meter bridge - using l/(100-l) instead of (100-l)/l",
            correct: "S = R × (100-l)/l where l is measured from the side where R is connected",
            whyItHappens: "Confusion about which length corresponds to which resistance",
            neetExample: "NEET 2020: Meter bridge null point at 40 cm, find unknown resistance"
          },
          {
            mistake: "Not recognizing balanced bridge in complex circuits",
            correct: "At balance, galvanometer branch can be removed for equivalent resistance calculation",
            whyItHappens: "Not checking if P/Q = R/S before solving",
            neetExample: "NEET 2018: Find equivalent resistance when bridge is balanced"
          },
          {
            mistake: "Ignoring symmetry in symmetric circuits",
            correct: "Identify equipotential points first - no current flows between them",
            whyItHappens: "Trying to use Kirchhoff's laws directly without simplification",
            neetExample: "NEET 2021: Resistance of cube network between body diagonals"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find unknown resistance using Wheatstone bridge",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Meter bridge null point problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Equivalent resistance of balanced bridge",
            difficulty: "medium"
          },
          {
            type: "application",
            description: "Cube or complex symmetric network resistance",
            difficulty: "hard"
          },
          {
            type: "conceptual",
            description: "Effect of interchanging resistances on balance",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Meter bridge null point calculation",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Find unknown using balance condition",
            frequency: "high",
            yearAsked: [
              2017,
              2019,
              2021,
              2023
            ]
          },
          {
            pattern: "Equivalent resistance of balanced bridge",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Symmetric circuit (cube) problems",
            frequency: "low",
            yearAsked: [2019, 2022]
          }
        ],
        analogies: [
          {
            concept: "Balanced bridge",
            analogy: "Perfectly balanced seesaw",
            mapping: "Equal torque on both sides = equal voltage division in both arms"
          },
          {
            concept: "Equipotential points",
            analogy: "Same water level in connected containers",
            mapping: "No water flow between containers at same level = no current between equipotential points"
          }
        ],
        questions: [],
      },
      {
        id: "electrical-measuring-instruments",
        name: "Electrical Measuring Instruments",
        weightage: 2,
        difficulty: "medium",
        theory: {
          summary: "Potentiometer is used for measuring EMF and internal resistance without drawing current (null method). Ammeter measures current (connected in series, low resistance). Voltmeter measures voltage (connected in parallel, high resistance). Galvanometer is converted to ammeter by shunt and to voltmeter by high series resistance.",
          realWorldAnalogy: "Potentiometer is like balancing weights on a scale - when balanced, no movement occurs (no current). Converting galvanometer to ammeter is like adding a bypass road to handle heavy traffic.",
          keyPoints: [
            "Potentiometer: Null method, compares EMF without drawing current",
            "Ammeter: Low resistance, connected in series, full current passes through",
            "Voltmeter: High resistance, connected in parallel, negligible current drawn",
            "Shunt: Low resistance in parallel to convert galvanometer to ammeter",
            "Multiplier: High resistance in series to convert galvanometer to voltmeter",
            "Sensitivity of galvanometer: Current/deflection ratio"
          ],
          prerequisites: ["kirchhoffs-laws", "ohms-law"]
        },
        formulas: [
          {
            id: "potentiometer-principle",
            name: "Potentiometer Principle",
            category: "base",
            formula: "V ∝ l",
            latex: "V = \\phi l = \\frac{E}{L} \\times l",
            description: "Potential drop across a uniform wire is proportional to its length",
            variables: [
              {
                symbol: "V",
                meaning: "Potential drop",
                unit: "V",
                typical_values: "0 to E"
              },
              {
                symbol: "φ",
                meaning: "Potential gradient",
                unit: "V/m",
                typical_values: "E/L"
              },
              {
                symbol: "l",
                meaning: "Length of wire",
                unit: "m",
                typical_values: "0 to L"
              },
              {
                symbol: "E",
                meaning: "EMF of driver cell",
                unit: "V",
                typical_values: "2-10V"
              },
              {
                symbol: "L",
                meaning: "Total length of wire",
                unit: "m",
                typical_values: "1-10m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Wire must be uniform (constant cross-section and material)", "Driver cell EMF must be greater than EMF being measured"],
            dimensionalCheck: "[V] = [V/m][m] = V ✓",
          },
          {
            id: "potentiometer-emf-comparison",
            name: "EMF Comparison by Potentiometer",
            category: "derived",
            formula: "ε₁/ε₂ = l₁/l₂",
            latex: "\\frac{\\varepsilon_1}{\\varepsilon_2} = \\frac{l_1}{l_2}",
            description: "Ratio of EMFs of two cells equals ratio of their balancing lengths",
            variables: [
              {
                symbol: "ε₁, ε₂",
                meaning: "EMFs of cells",
                unit: "V",
                typical_values: "1-3V typical"
              },
              {
                symbol: "l₁, l₂",
                meaning: "Balancing lengths",
                unit: "cm",
                typical_values: "20-100 cm"
              }
            ],
            derivedFrom: "potentiometer-principle",
            applications: [],
            specialCases: ["Same potential gradient for both measurements", "No current drawn from cells being compared"],
            dimensionalCheck: "Dimensionless ratio on both sides",
          },
          {
            id: "potentiometer-internal-resistance",
            name: "Internal Resistance by Potentiometer",
            category: "derived",
            formula: "r = R(l₁-l₂)/l₂",
            latex: "r = R \\times \\frac{l_1 - l_2}{l_2}",
            description: "Internal resistance found by comparing balance lengths with switch open (l₁) and closed (l₂)",
            variables: [
              {
                symbol: "r",
                meaning: "Internal resistance of cell",
                unit: "Ω",
                typical_values: "0.1-5Ω"
              },
              {
                symbol: "R",
                meaning: "External resistance",
                unit: "Ω",
                typical_values: "1-100Ω"
              },
              {
                symbol: "l₁",
                meaning: "Balance length (open circuit)",
                unit: "cm",
                typical_values: "For EMF"
              },
              {
                symbol: "l₂",
                meaning: "Balance length (closed circuit)",
                unit: "cm",
                typical_values: "For terminal voltage"
              }
            ],
            derivedFrom: "potentiometer-principle",
            applications: [],
            specialCases: ["l₁ > l₂ always (EMF > terminal voltage)", "l₁ corresponds to EMF, l₂ to terminal voltage V = ε - Ir"],
            dimensionalCheck: "[r] = [R] = Ω",
          },
          {
            id: "galvanometer-to-ammeter",
            name: "Galvanometer to Ammeter (Shunt)",
            category: "derived",
            formula: "S = Ig×G/(I-Ig)",
            latex: "S = \\frac{I_g \\cdot G}{I - I_g}",
            description: "Shunt resistance required to convert galvanometer to ammeter of range I",
            variables: [
              {
                symbol: "S",
                meaning: "Shunt resistance",
                unit: "Ω",
                typical_values: "Very small, mΩ to Ω"
              },
              {
                symbol: "G",
                meaning: "Galvanometer resistance",
                unit: "Ω",
                typical_values: "10-1000Ω"
              },
              {
                symbol: "I_g",
                meaning: "Full scale deflection current",
                unit: "A",
                typical_values: "μA to mA"
              },
              {
                symbol: "I",
                meaning: "Desired ammeter range",
                unit: "A",
                typical_values: "1-10A typical"
              }
            ],
            derivedFrom: "kcl",
            applications: [],
            specialCases: ["S << G for good ammeter", "Most current bypasses through shunt", "Effective resistance = SG/(S+G) ≈ S"],
            dimensionalCheck: "[S] = Ω",
          },
          {
            id: "galvanometer-to-voltmeter",
            name: "Galvanometer to Voltmeter (Multiplier)",
            category: "derived",
            formula: "R = V/Ig - G",
            latex: "R = \\frac{V}{I_g} - G",
            description: "High resistance in series to convert galvanometer to voltmeter of range V",
            variables: [
              {
                symbol: "R",
                meaning: "Multiplier resistance",
                unit: "Ω",
                typical_values: "kΩ to MΩ"
              },
              {
                symbol: "V",
                meaning: "Desired voltmeter range",
                unit: "V",
                typical_values: "1-300V"
              },
              {
                symbol: "I_g",
                meaning: "Full scale deflection current",
                unit: "A",
                typical_values: "μA to mA"
              },
              {
                symbol: "G",
                meaning: "Galvanometer resistance",
                unit: "Ω",
                typical_values: "10-1000Ω"
              }
            ],
            derivedFrom: "ohms-law",
            applications: [],
            specialCases: ["R >> G for good voltmeter", "Voltmeter resistance should be very high", "Draws minimum current from circuit"],
            dimensionalCheck: "[R] = [V]/[I] = Ω",
          },
          {
            id: "potential-gradient",
            name: "Potential gradient",
            category: "derived",
            formula: "\\phi = \\frac{E}{L + \\frac{Rr}{R+r}}",
            latex: "\\phi = \\frac{E}{L + \\frac{Rr}{R+r}}",
            description: "When rheostat R is in circuit",
            variables: [],
            derivedFrom: "potentiometer-principle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [V/m][m] = V ✓",
            neet_frequency: "medium",
          },
          {
            id: "balance-length",
            name: "Balance length",
            category: "derived",
            formula: "\\varepsilon = \\phi \\times l",
            latex: "\\varepsilon = \\phi \\times l",
            description: "EMF of cell equals potential drop at balance",
            variables: [],
            derivedFrom: "potentiometer-principle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [V/m][m] = V ✓",
            neet_frequency: "high",
          },
          {
            id: "find-unknown-emf",
            name: "Find unknown EMF",
            category: "derived",
            formula: "\\varepsilon_2 = \\varepsilon_1 \\times \\frac{l_2}{l_1}",
            latex: "\\varepsilon_2 = \\varepsilon_1 \\times \\frac{l_2}{l_1}",
            description: "When one EMF is known",
            variables: [],
            derivedFrom: "potentiometer-emf-comparison",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio on both sides",
            neet_frequency: "high",
          },
          {
            id: "direct-formula",
            name: "Direct formula",
            category: "derived",
            formula: "r = R\\left(\\frac{l_1}{l_2} - 1\\right)",
            latex: "r = R\\left(\\frac{l_1}{l_2} - 1\\right)",
            description: "Alternative form",
            variables: [],
            derivedFrom: "potentiometer-internal-resistance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = [R] = Ω",
            neet_frequency: "high",
          },
          {
            id: "multiplication-factor",
            name: "Multiplication factor",
            category: "derived",
            formula: "n = \\frac{I}{I_g} = 1 + \\frac{G}{S}",
            latex: "n = \\frac{I}{I_g} = 1 + \\frac{G}{S}",
            description: "Range extension factor",
            variables: [],
            derivedFrom: "galvanometer-to-ammeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = Ω",
            neet_frequency: "high",
          },
          {
            id: "shunt-from-n",
            name: "Shunt from n",
            category: "derived",
            formula: "S = \\frac{G}{n-1}",
            latex: "S = \\frac{G}{n-1}",
            description: "When n is given",
            variables: [],
            derivedFrom: "galvanometer-to-ammeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = Ω",
            neet_frequency: "high",
          },
          {
            id: "multiplication-factor-2",
            name: "Multiplication factor",
            category: "derived",
            formula: "n = \\frac{V}{I_g \\cdot G} = 1 + \\frac{R}{G}",
            latex: "n = \\frac{V}{I_g \\cdot G} = 1 + \\frac{R}{G}",
            description: "Voltage range extension factor",
            variables: [],
            derivedFrom: "galvanometer-to-voltmeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [V]/[I] = Ω",
            neet_frequency: "medium",
          },
          {
            id: "total-resistance",
            name: "Total resistance",
            category: "derived",
            formula: "R_{total} = R + G = \\frac{V}{I_g}",
            latex: "R_{total} = R + G = \\frac{V}{I_g}",
            description: "Voltmeter resistance",
            variables: [],
            derivedFrom: "galvanometer-to-voltmeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [V]/[I] = Ω",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing shunt (parallel) and multiplier (series) connections",
            correct: "Ammeter: Shunt in parallel (bypass current). Voltmeter: Multiplier in series (drop voltage)",
            whyItHappens: "Not understanding the purpose - ammeter needs low R (parallel), voltmeter needs high R (series)",
            neetExample: "NEET 2019: Convert galvanometer of 100Ω to ammeter of 5A range"
          },
          {
            mistake: "Using wrong formula for internal resistance in potentiometer",
            correct: "r = R(l₁-l₂)/l₂ where l₁ is for EMF (open), l₂ is for terminal voltage (closed)",
            whyItHappens: "Confusion about which balance length corresponds to which condition",
            neetExample: "NEET 2020: Balance at 60cm (open) and 40cm (closed), R=5Ω, find r"
          },
          {
            mistake: "Forgetting that potentiometer needs driver EMF > cell EMF being measured",
            correct: "Balance point exists only if driver cell EMF > EMF being measured",
            whyItHappens: "Not understanding that potential drop cannot exceed total EMF",
            neetExample: "NEET 2018: Why null point not obtained when driver cell EMF too low?"
          },
          {
            mistake: "Calculating voltmeter reading without accounting for voltmeter resistance",
            correct: "Voltmeter draws some current, so actual reading = V × R_v/(R + R_v)",
            whyItHappens: "Assuming ideal voltmeter with infinite resistance",
            neetExample: "NEET 2021: Voltmeter of 1000Ω connected across 500Ω resistor"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate shunt resistance for ammeter conversion",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Calculate multiplier for voltmeter conversion",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Compare EMFs using potentiometer",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Find internal resistance using potentiometer",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Why potentiometer is better than voltmeter for EMF measurement",
            difficulty: "easy"
          },
          {
            type: "application",
            description: "Effect of non-ideal meters on circuit readings",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Shunt calculation for ammeter",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Multiplier calculation for voltmeter",
            frequency: "high",
            yearAsked: [
              2017,
              2019,
              2021,
              2023
            ]
          },
          {
            pattern: "EMF comparison by potentiometer",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Internal resistance by potentiometer",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Potentiometer null method",
            analogy: "Weighing balance",
            mapping: "At balance, no deflection = no current. Compares without disturbing the system."
          },
          {
            concept: "Shunt for ammeter",
            analogy: "Highway bypass for traffic",
            mapping: "Most traffic (current) takes bypass (shunt), only small fraction goes through town (galvanometer)"
          },
          {
            concept: "Multiplier for voltmeter",
            analogy: "Speed bump before toll booth",
            mapping: "High resistance limits current like speed bump limits car speed, allowing voltage measurement"
          }
        ],
        questions: [],
      },
      {
        id: "rc-circuit",
        name: "RC Circuit",
        weightage: 1,
        difficulty: "hard",
        theory: {
          summary: "RC circuits contain a resistor and capacitor. During charging, current decreases exponentially from maximum (E/R) to zero, while voltage across capacitor increases from zero to E. During discharging, both current and voltage decay exponentially. The time constant τ = RC determines the rate of change.",
          realWorldAnalogy: "Charging a capacitor is like filling a water tank through a pipe - initially water flows fast (high current) but slows down as tank fills (voltage builds up). The pipe width (resistance) and tank size (capacitance) determine how fast it fills.",
          keyPoints: [
            "Time constant τ = RC (seconds) - time to reach 63.2% of final value",
            "Charging: q = CE(1 - e^(-t/RC)), current decreases exponentially",
            "Discharging: q = q₀e^(-t/RC), both charge and current decay",
            "After 5τ, capacitor is considered fully charged/discharged (99.3%)",
            "Initial current (t=0): I₀ = E/R (capacitor acts as short circuit)",
            "Final state (t→∞): I = 0 (capacitor acts as open circuit)"
          ],
          prerequisites: ["kirchhoffs-laws", "capacitance-basics"]
        },
        formulas: [
          {
            id: "time-constant",
            name: "Time Constant",
            category: "base",
            formula: "τ = RC",
            latex: "\\tau = RC",
            description: "Time constant is the product of resistance and capacitance, determines rate of charging/discharging",
            variables: [
              {
                symbol: "τ",
                meaning: "Time constant",
                unit: "s",
                typical_values: "ms to s for typical circuits"
              },
              {
                symbol: "R",
                meaning: "Resistance",
                unit: "Ω",
                typical_values: "kΩ to MΩ"
              },
              {
                symbol: "C",
                meaning: "Capacitance",
                unit: "F",
                typical_values: "μF to mF"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["After t = τ: charge = 0.632 × final charge", "After t = 5τ: charge ≈ 0.993 × final charge (practically full)"],
            dimensionalCheck: "[τ] = [R][C] = Ω·F = s ✓",
          },
          {
            id: "charging-charge",
            name: "Charging: Charge on Capacitor",
            category: "derived",
            formula: "q = q₀(1 - e^(-t/RC))",
            latex: "q = q_0\\left(1 - e^{-t/RC}\\right) = CE\\left(1 - e^{-t/\\tau}\\right)",
            description: "Charge on capacitor increases exponentially during charging, approaching q₀ = CE",
            variables: [
              {
                symbol: "q",
                meaning: "Instantaneous charge",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "q₀",
                meaning: "Final charge = CE",
                unit: "C",
                typical_values: "CE"
              },
              {
                symbol: "t",
                meaning: "Time elapsed",
                unit: "s",
                typical_values: "0 to several τ"
              },
              {
                symbol: "E",
                meaning: "EMF of source",
                unit: "V",
                typical_values: "1-12V"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["At t = 0: q = 0 (capacitor uncharged)", "At t → ∞: q = CE (fully charged)"],
            dimensionalCheck: "[q] = [C][V] = C ✓",
          },
          {
            id: "charging-current",
            name: "Charging: Current in Circuit",
            category: "derived",
            formula: "i = (E/R)e^(-t/RC)",
            latex: "i = \\frac{E}{R}e^{-t/RC} = I_0 e^{-t/\\tau}",
            description: "Current starts at maximum I₀ = E/R and decays exponentially to zero",
            variables: [
              {
                symbol: "i",
                meaning: "Instantaneous current",
                unit: "A",
                typical_values: "mA"
              },
              {
                symbol: "I₀",
                meaning: "Initial current = E/R",
                unit: "A",
                typical_values: "E/R"
              },
              {
                symbol: "t",
                meaning: "Time elapsed",
                unit: "s",
                typical_values: "0 to several τ"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["At t = 0: i = E/R (maximum)", "At t → ∞: i = 0 (no current, fully charged)"],
            dimensionalCheck: "[i] = [V]/[Ω] = A ✓",
          },
          {
            id: "charging-voltage",
            name: "Charging: Voltage across Capacitor",
            category: "derived",
            formula: "V_C = E(1 - e^(-t/RC))",
            latex: "V_C = E\\left(1 - e^{-t/RC}\\right)",
            description: "Voltage across capacitor increases from zero to E during charging",
            variables: [
              {
                symbol: "V_C",
                meaning: "Voltage across capacitor",
                unit: "V",
                typical_values: "0 to E"
              },
              {
                symbol: "E",
                meaning: "EMF of source",
                unit: "V",
                typical_values: "1-12V"
              }
            ],
            derivedFrom: "charging-charge",
            applications: [],
            specialCases: ["At t = 0: V_C = 0, V_R = E", "At t → ∞: V_C = E, V_R = 0", "At any time: V_R + V_C = E (KVL)"],
            dimensionalCheck: "[V] = V",
          },
          {
            id: "discharging-charge",
            name: "Discharging: Charge on Capacitor",
            category: "derived",
            formula: "q = q₀e^(-t/RC)",
            latex: "q = q_0 e^{-t/RC}",
            description: "Charge decays exponentially from initial value q₀ to zero during discharging",
            variables: [
              {
                symbol: "q",
                meaning: "Instantaneous charge",
                unit: "C",
                typical_values: "Decreasing"
              },
              {
                symbol: "q₀",
                meaning: "Initial charge",
                unit: "C",
                typical_values: "CE if fully charged"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["At t = 0: q = q₀ (fully charged)", "At t → ∞: q = 0 (fully discharged)"],
            dimensionalCheck: "[q] = C",
          },
          {
            id: "discharging-current",
            name: "Discharging: Current in Circuit",
            category: "derived",
            formula: "i = -(q₀/RC)e^(-t/RC)",
            latex: "i = -\\frac{q_0}{RC}e^{-t/RC} = -I_0 e^{-t/\\tau}",
            description: "Current during discharge flows in opposite direction and decays exponentially",
            variables: [
              {
                symbol: "i",
                meaning: "Discharge current",
                unit: "A",
                typical_values: "Opposite to charging"
              },
              {
                symbol: "I₀",
                meaning: "Initial discharge current = q₀/RC",
                unit: "A",
                typical_values: "V₀/R"
              }
            ],
            derivedFrom: "kvl",
            applications: [],
            specialCases: ["Negative sign indicates opposite direction to charging", "Magnitude same formula as charging current"],
            dimensionalCheck: "[i] = A",
          },
          {
            id: "energy-stored",
            name: "Energy Stored in Capacitor",
            category: "base",
            formula: "U = ½CV² = ½q²/C = ½qV",
            latex: "U = \\frac{1}{2}CV^2 = \\frac{q^2}{2C} = \\frac{1}{2}qV",
            description: "Energy stored in the electric field of charged capacitor",
            variables: [
              {
                symbol: "U",
                meaning: "Stored energy",
                unit: "J (Joule)",
                typical_values: "μJ to mJ"
              },
              {
                symbol: "C",
                meaning: "Capacitance",
                unit: "F",
                typical_values: "μF to mF"
              },
              {
                symbol: "V",
                meaning: "Voltage across capacitor",
                unit: "V",
                typical_values: "1-100V"
              },
              {
                symbol: "q",
                meaning: "Charge on capacitor",
                unit: "C",
                typical_values: "μC to mC"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["When fully charged from EMF E: U = ½CE²", "Energy supplied by source = CE², half goes to capacitor, half to resistor"],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J ✓",
          },
          {
            id: "physical-meaning",
            name: "Physical meaning",
            category: "derived",
            formula: "\\tau = \\text{time to reach } 63.2\\% \\text{ of final value}",
            latex: "\\tau = \\text{time to reach } 63.2\\% \\text{ of final value}",
            description: "During charging",
            variables: [],
            derivedFrom: "time-constant",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [R][C] = Ω·F = s ✓",
            neet_frequency: "high",
          },
          {
            id: "during-discharge",
            name: "During discharge",
            category: "derived",
            formula: "\\tau = \\text{time for } 36.8\\% \\text{ to remain}",
            latex: "\\tau = \\text{time for } 36.8\\% \\text{ to remain}",
            description: "Charge drops to 1/e of initial",
            variables: [],
            derivedFrom: "time-constant",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [R][C] = Ω·F = s ✓",
            neet_frequency: "medium",
          },
          {
            id: "at-t",
            name: "At t = τ",
            category: "derived",
            formula: "q = CE(1 - e^{-1}) = 0.632 \\times CE",
            latex: "q = CE(1 - e^{-1}) = 0.632 \\times CE",
            description: "63.2% charged after one time constant",
            variables: [],
            derivedFrom: "charging-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = [C][V] = C ✓",
            neet_frequency: "high",
          },
          {
            id: "at-t-2",
            name: "At t = 2τ",
            category: "derived",
            formula: "q = CE(1 - e^{-2}) = 0.865 \\times CE",
            latex: "q = CE(1 - e^{-2}) = 0.865 \\times CE",
            description: "86.5% charged after 2τ",
            variables: [],
            derivedFrom: "charging-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = [C][V] = C ✓",
            neet_frequency: "medium",
          },
          {
            id: "at-t-3",
            name: "At t = τ",
            category: "derived",
            formula: "i = I_0 e^{-1} = 0.368 \\times I_0",
            latex: "i = I_0 e^{-1} = 0.368 \\times I_0",
            description: "Current drops to 36.8% after τ",
            variables: [],
            derivedFrom: "charging-current",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[i] = [V]/[Ω] = A ✓",
            neet_frequency: "high",
          },
          {
            id: "initial-current",
            name: "Initial current",
            category: "derived",
            formula: "i_0 = \\frac{E}{R}",
            latex: "i_0 = \\frac{E}{R}",
            description: "At t=0, capacitor acts as short circuit",
            variables: [],
            derivedFrom: "charging-current",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[i] = [V]/[Ω] = A ✓",
            neet_frequency: "high",
          },
          {
            id: "at-t-4",
            name: "At t = τ",
            category: "derived",
            formula: "V_C = 0.632E",
            latex: "V_C = 0.632E",
            description: "63.2% of final voltage",
            variables: [],
            derivedFrom: "charging-voltage",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = V",
            neet_frequency: "high",
          },
          {
            id: "voltage-across-r",
            name: "Voltage across R",
            category: "derived",
            formula: "V_R = E \\cdot e^{-t/RC}",
            latex: "V_R = E \\cdot e^{-t/RC}",
            description: "Drops exponentially from E to 0",
            variables: [],
            derivedFrom: "charging-voltage",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = V",
            neet_frequency: "medium",
          },
          {
            id: "at-t-5",
            name: "At t = τ",
            category: "derived",
            formula: "q = q_0 e^{-1} = 0.368 q_0",
            latex: "q = q_0 e^{-1} = 0.368 q_0",
            description: "36.8% of initial charge remains",
            variables: [],
            derivedFrom: "discharging-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "high",
          },
          {
            id: "half-life",
            name: "Half-life",
            category: "derived",
            formula: "t_{1/2} = \\tau \\ln 2 = 0.693 RC",
            latex: "t_{1/2} = \\tau \\ln 2 = 0.693 RC",
            description: "Time for charge to halve",
            variables: [],
            derivedFrom: "discharging-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "medium",
          },
          {
            id: "magnitude-at-t",
            name: "Magnitude at t = τ",
            category: "derived",
            formula: "|i| = I_0 e^{-1} = 0.368 I_0",
            latex: "|i| = I_0 e^{-1} = 0.368 I_0",
            description: "Current magnitude at τ",
            variables: [],
            derivedFrom: "discharging-current",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[i] = A",
            neet_frequency: "medium",
          },
          {
            id: "during-charging",
            name: "During charging",
            category: "derived",
            formula: "U = \\frac{1}{2}CE^2\\left(1-e^{-t/RC}\\right)^2",
            latex: "U = \\frac{1}{2}CE^2\\left(1-e^{-t/RC}\\right)^2",
            description: "Energy as function of time",
            variables: [],
            derivedFrom: "energy-stored",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J ✓",
            neet_frequency: "medium",
          },
          {
            id: "energy-dissipated-in-r",
            name: "Energy dissipated in R",
            category: "derived",
            formula: "E_{dissipated} = \\frac{1}{2}CE^2",
            latex: "E_{dissipated} = \\frac{1}{2}CE^2",
            description: "Half of supplied energy is lost in R during charging",
            variables: [],
            derivedFrom: "energy-stored",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J ✓",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using wrong exponential - e^(+t/RC) instead of e^(-t/RC)",
            correct: "Decay processes always use e^(-t/τ). Growth uses (1 - e^(-t/τ))",
            whyItHappens: "Sign confusion in exponential; decay must approach zero as t→∞",
            neetExample: "NEET 2019: Find charge after time t = 2RC during charging"
          },
          {
            mistake: "Confusing initial and final states of capacitor",
            correct: "Initially (t=0): uncharged capacitor acts as short circuit (wire). Finally (t→∞): acts as open circuit (break)",
            whyItHappens: "Not visualizing that current must be maximum initially when capacitor has no voltage",
            neetExample: "NEET 2020: Initial current when switch is closed in RC circuit"
          },
          {
            mistake: "Thinking 50% charge is reached at t = τ/2",
            correct: "At t = τ, charge is 63.2% (not 50%). For 50%, use t = τ × ln(2) = 0.693τ",
            whyItHappens: "Assuming linear relationship instead of exponential",
            neetExample: "NEET 2021: Time for capacitor to reach half its final charge"
          },
          {
            mistake: "Forgetting energy loss in resistor during charging",
            correct: "Energy from source = CE². Energy in capacitor = ½CE². Energy in R = ½CE²",
            whyItHappens: "Not accounting for power dissipation in resistance",
            neetExample: "NEET 2018: Energy dissipated in resistance during complete charging"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find charge/current at given time during charging",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Time constant and time for specific percentage charge",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Sketch charge/current vs time graphs",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Energy stored and dissipated in RC circuit",
            difficulty: "hard"
          },
          {
            type: "conceptual",
            description: "Initial and final behavior of capacitor in circuit",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Discharging problems with initial conditions",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Time constant calculation and meaning",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Charge at specific time during charging/discharging",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Initial current when switch closes",
            frequency: "medium",
            yearAsked: [2018, 2020, 2021]
          },
          {
            pattern: "Energy stored and energy dissipated",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Time constant τ",
            analogy: "Filling a bathtub",
            mapping: "τ = tank size × pipe restriction. Bigger tank or narrower pipe = longer fill time"
          },
          {
            concept: "Exponential charging",
            analogy: "Filling a balloon",
            mapping: "Initially easy to blow (high current), gets harder as it fills (current decreases)"
          },
          {
            concept: "Capacitor as open/short circuit",
            analogy: "Empty vs full water tank",
            mapping: "Empty tank: water flows freely (short). Full tank: no more flow (open)"
          }
        ],
        questions: [],
      }
    ];