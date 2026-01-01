// Work, Energy and Power - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 6

export const workEnergyPowerTopics = [
      {
        id: "work-done",
        name: "Work Done by a Force",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Work = Force × displacement × cos θ. W = F⃗ · d⃗ = Fd cos θ. Work is scalar but can be positive, negative, or zero. Positive when force and displacement in same direction. Negative when opposite. Zero when perpendicular (θ = 90°).",
          realWorldAnalogy: "Pushing a box: work done depends on how far it moves, not how hard you push. Carrying books horizontally does no work against gravity (displacement ⊥ to weight). Lowering books = negative work by you, positive by gravity.",
          keyPoints: [
            "W = F⃗ · d⃗ = Fd cos θ",
            "Work is scalar with sign",
            "θ is angle between F and d",
            "Positive work: force helps motion",
            "Negative work: force opposes motion",
            "Zero work: force ⊥ to displacement (or d = 0 or F = 0)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "work-constant-force",
            name: "Work by Constant Force",
            category: "base",
            formula: "W = Fd cos θ = F⃗ · d⃗",
            latex: "W = Fd\\cos\\theta = \\vec{F} \\cdot \\vec{d}",
            description: "Work done by constant force over displacement",
            variables: [
              {
                symbol: "W",
                meaning: "Work done",
                unit: "J (Joule)",
                typical_values: "1-1000 J typically"
              },
              {
                symbol: "F",
                meaning: "Force magnitude",
                unit: "N",
                typical_values: "1-100 N"
              },
              {
                symbol: "d",
                meaning: "Displacement magnitude",
                unit: "m",
                typical_values: "0.1-10 m"
              },
              {
                symbol: "θ",
                meaning: "Angle between F and d",
                unit: "degrees",
                typical_values: "0° to 180°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["1 Joule = 1 N × 1 m", "Normal force does no work on horizontal surface (⊥ to motion)", "Centripetal force does no work (always ⊥ to velocity)"],
            dimensionalCheck: "[W] = [F][d] = N⋅m = J",
          },
          {
            id: "work-variable-force",
            name: "Work by Variable Force",
            category: "derived",
            formula: "W = ∫ F⃗ · dr⃗",
            latex: "W = \\int \\vec{F} \\cdot d\\vec{r} = \\int F_x\\, dx",
            description: "Work done by force that varies with position",
            variables: [
              {
                symbol: "∫F dx",
                meaning: "Area under F-x graph",
                unit: "J",
                typical_values: "Calculated from integral"
              }
            ],
            derivedFrom: "work-constant-force",
            applications: [],
            specialCases: ["For spring: W = ½kx² (from equilibrium)", "Area positive above x-axis, negative below"],
            dimensionalCheck: "[W] = J",
          },
          {
            id: "same-direction-0",
            name: "Same direction (θ=0°)",
            category: "derived",
            formula: "W = Fd",
            latex: "W = Fd",
            description: "Maximum positive work",
            variables: [],
            derivedFrom: "work-constant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [F][d] = N⋅m = J",
            neet_frequency: "high",
          },
          {
            id: "opposite-direction-180",
            name: "Opposite direction (θ=180°)",
            category: "derived",
            formula: "W = -Fd",
            latex: "W = -Fd",
            description: "Maximum negative work",
            variables: [],
            derivedFrom: "work-constant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [F][d] = N⋅m = J",
            neet_frequency: "high",
          },
          {
            id: "perpendicular-90",
            name: "Perpendicular (θ=90°)",
            category: "derived",
            formula: "W = 0",
            latex: "W = 0",
            description: "No work done",
            variables: [],
            derivedFrom: "work-constant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [F][d] = N⋅m = J",
            neet_frequency: "high",
          },
          {
            id: "spring-force",
            name: "Spring force",
            category: "derived",
            formula: "W = \\frac{1}{2}kx^2",
            latex: "W = \\frac{1}{2}kx^2",
            description: "Work to stretch/compress spring by x",
            variables: [],
            derivedFrom: "work-variable-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J",
            neet_frequency: "high",
          },
          {
            id: "from-f-x-graph",
            name: "From F-x graph",
            category: "derived",
            formula: "W = \\text{Area under F-x curve}",
            latex: "W = \\text{Area under F-x curve}",
            description: "Graphical method",
            variables: [],
            derivedFrom: "work-variable-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Calculating work using distance instead of displacement",
            correct: "Work uses displacement (vector). For circular path returning to start, displacement = 0, work by constant force = 0.",
            whyItHappens: "Confusing distance and displacement",
            neetExample: "NEET 2020: Work done by gravity for round trip"
          },
          {
            mistake: "Using wrong angle in W = Fd cos θ",
            correct: "θ is angle between force and displacement, not with horizontal or any other reference.",
            whyItHappens: "Misidentifying the angle",
            neetExample: "NEET 2019: Work done pulling at angle to horizontal"
          },
          {
            mistake: "Thinking normal force always does zero work",
            correct: "Normal force does zero work only when displacement is along the surface. If surface moves (like in elevator), N does work.",
            whyItHappens: "Overgeneralizing from common cases",
            neetExample: "NEET 2021: Work by normal force in elevator"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Work by constant force at angle",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Work from F-x graph",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Sign of work done",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Work at angle to displacement",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Work from force-displacement graph",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Work by various forces (gravity, friction, normal)",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Sign of work",
            analogy: "Bank account",
            mapping: "Positive work = deposit (adds energy). Negative work = withdrawal (removes energy)."
          }
        ],
        questions: [],
      },
      {
        id: "kinetic-energy",
        name: "Kinetic Energy",
        weightage: 0.4,
        difficulty: "easy",
        theory: {
          summary: "KE = ½mv² is energy due to motion. Always positive (scalar). Depends on speed squared, so doubling speed gives 4× KE. Relation with momentum: KE = p²/2m. Work-energy theorem: net work = change in KE.",
          realWorldAnalogy: "Faster car has more KE (more damage in crash). Truck at same speed as car has more KE (more mass). Stopping distance ∝ v² because KE ∝ v².",
          keyPoints: [
            "KE = ½mv² (always ≥ 0)",
            "KE ∝ v² (double speed = 4× KE)",
            "KE = p²/2m (relation with momentum)",
            "SI unit: Joule (J)",
            "Work-energy theorem: W_net = ΔKE",
            "Scalar quantity (no direction)"
          ],
          prerequisites: ["work-done"]
        },
        formulas: [
          {
            id: "kinetic-energy-formula",
            name: "Kinetic Energy",
            category: "base",
            formula: "KE = ½mv²",
            latex: "KE = \\frac{1}{2}mv^2",
            description: "Energy possessed by object due to motion",
            variables: [
              {
                symbol: "KE",
                meaning: "Kinetic energy",
                unit: "J",
                typical_values: "Always ≥ 0"
              },
              {
                symbol: "m",
                meaning: "Mass",
                unit: "kg",
                typical_values: "0.1-100 kg"
              },
              {
                symbol: "v",
                meaning: "Speed",
                unit: "m/s",
                typical_values: "1-100 m/s"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["KE = 0 when v = 0", "Same KE for same |v| regardless of direction", "Doubling v → 4× KE"],
            dimensionalCheck: "[KE] = [m][v²] = kg⋅m²/s² = J",
          },
          {
            id: "ke-momentum-relation",
            name: "KE-Momentum Relation",
            category: "derived",
            formula: "KE = p²/2m",
            latex: "KE = \\frac{p^2}{2m}",
            description: "Kinetic energy in terms of momentum",
            variables: [
              {
                symbol: "p",
                meaning: "Momentum",
                unit: "kg⋅m/s",
                typical_values: "mv"
              }
            ],
            derivedFrom: "kinetic-energy-formula",
            applications: [],
            specialCases: ["At same p: lighter body has more KE", "At same KE: heavier body has more p"],
            dimensionalCheck: "[p²/m] = kg⋅m²/s² = J",
          },
          {
            id: "in-terms-of-momentum",
            name: "In terms of momentum",
            category: "derived",
            formula: "KE = \\frac{p^2}{2m}",
            latex: "KE = \\frac{p^2}{2m}",
            description: "Using p = mv",
            variables: [],
            derivedFrom: "kinetic-energy-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[KE] = [m][v²] = kg⋅m²/s² = J",
            neet_frequency: "high",
          },
          {
            id: "stopping-distance",
            name: "Stopping distance",
            category: "derived",
            formula: "s \\propto v^2",
            latex: "s \\propto v^2",
            description: "From W = ΔKE = -μmgs",
            variables: [],
            derivedFrom: "kinetic-energy-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[KE] = [m][v²] = kg⋅m²/s² = J",
            neet_frequency: "high",
          },
          {
            id: "comparison-at-same-momentum",
            name: "Comparison at same momentum",
            category: "derived",
            formula: "KE \\propto \\frac{1}{m}",
            latex: "KE \\propto \\frac{1}{m}",
            description: "Lighter body has more KE for same p",
            variables: [],
            derivedFrom: "ke-momentum-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p²/m] = kg⋅m²/s² = J",
            neet_frequency: "high",
          },
          {
            id: "comparison-at-same-ke",
            name: "Comparison at same KE",
            category: "derived",
            formula: "p \\propto \\sqrt{m}",
            latex: "p \\propto \\sqrt{m}",
            description: "Heavier body has more momentum for same KE",
            variables: [],
            derivedFrom: "ke-momentum-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p²/m] = kg⋅m²/s² = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking KE doubles when speed doubles",
            correct: "KE ∝ v². Doubling speed gives 4× KE, not 2×.",
            whyItHappens: "Forgetting the squared relationship",
            neetExample: "NEET 2020: Ratio of KE when speed is doubled"
          },
          {
            mistake: "Comparing KE and momentum incorrectly",
            correct: "Same momentum doesn't mean same KE. Use KE = p²/2m to compare.",
            whyItHappens: "Not using the relationship formula",
            neetExample: "NEET 2019: Two bodies with same momentum, which has more KE?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate KE from mass and velocity",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "KE-momentum problems",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Effect of changing v or m on KE",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "KE ratio problems",
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
            pattern: "KE-momentum relation",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Stopping distance relation with KE",
            frequency: "medium",
            yearAsked: [2018, 2021]
          }
        ],
        analogies: [
          {
            concept: "KE ∝ v²",
            analogy: "Car stopping distance",
            mapping: "At 60 km/h vs 30 km/h, stopping distance is 4× longer (4× KE to dissipate)"
          }
        ],
        questions: [],
      },
      {
        id: "potential-energy",
        name: "Potential Energy",
        weightage: 0.4,
        difficulty: "medium",
        theory: {
          summary: "PE is stored energy due to position or configuration. Gravitational PE = mgh (height above reference). Elastic PE = ½kx² (spring). PE is defined for conservative forces only. Reference point is arbitrary (only ΔPE matters).",
          realWorldAnalogy: "Water in elevated tank has gravitational PE (can do work flowing down). Stretched bow has elastic PE (can do work releasing arrow). Bank savings = potential to spend.",
          keyPoints: [
            "Gravitational PE: U = mgh (h above reference)",
            "Elastic PE: U = ½kx² (spring stretched/compressed by x)",
            "PE is relative (only changes matter physically)",
            "PE defined only for conservative forces",
            "F = -dU/dx (force from PE function)",
            "At equilibrium: dU/dx = 0"
          ],
          prerequisites: ["work-done"]
        },
        formulas: [
          {
            id: "gravitational-pe",
            name: "Gravitational Potential Energy",
            category: "base",
            formula: "U = mgh",
            latex: "U = mgh",
            description: "PE due to height in uniform gravitational field",
            variables: [
              {
                symbol: "U",
                meaning: "Gravitational PE",
                unit: "J",
                typical_values: "Can be +ve or -ve"
              },
              {
                symbol: "h",
                meaning: "Height above reference",
                unit: "m",
                typical_values: "Measured from chosen zero"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Reference point arbitrary (usually ground = 0)", "PE can be negative (below reference)", "Only ΔU has physical significance"],
            dimensionalCheck: "[U] = [m][g][h] = J",
          },
          {
            id: "elastic-pe",
            name: "Elastic Potential Energy",
            category: "base",
            formula: "U = ½kx²",
            latex: "U = \\frac{1}{2}kx^2",
            description: "PE stored in stretched/compressed spring",
            variables: [
              {
                symbol: "U",
                meaning: "Elastic PE",
                unit: "J",
                typical_values: "Always ≥ 0"
              },
              {
                symbol: "k",
                meaning: "Spring constant",
                unit: "N/m",
                typical_values: "10-1000 N/m"
              },
              {
                symbol: "x",
                meaning: "Extension/compression",
                unit: "m",
                typical_values: "0.01-0.5 m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["U = 0 at natural length (x = 0)", "Same PE for compression and extension of same |x|", "U ∝ x² (not x)"],
            dimensionalCheck: "[U] = [k][x²] = N⋅m = J",
          },
          {
            id: "force-from-pe",
            name: "Force from Potential Energy",
            category: "derived",
            formula: "F = -dU/dx",
            latex: "F = -\\frac{dU}{dx}",
            description: "Conservative force as negative gradient of PE",
            variables: [
              {
                symbol: "F",
                meaning: "Conservative force",
                unit: "N",
                typical_values: "Derived from U(x)"
              },
              {
                symbol: "dU/dx",
                meaning: "Rate of change of PE",
                unit: "N",
                typical_values: "Slope of U-x curve"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Force points toward lower PE", "At equilibrium, F = 0, so dU/dx = 0", "Stable equilibrium: minimum PE"],
            dimensionalCheck: "[F] = [U]/[x] = J/m = N",
          },
          {
            id: "change-in-pe",
            name: "Change in PE",
            category: "derived",
            formula: "\\Delta U = mg(h_2 - h_1) = mg\\Delta h",
            latex: "\\Delta U = mg(h_2 - h_1) = mg\\Delta h",
            description: "Independent of path",
            variables: [],
            derivedFrom: "gravitational-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [m][g][h] = J",
            neet_frequency: "high",
          },
          {
            id: "work-by-gravity",
            name: "Work by gravity",
            category: "derived",
            formula: "W_g = -\\Delta U = -mg\\Delta h",
            latex: "W_g = -\\Delta U = -mg\\Delta h",
            description: "Negative of PE change",
            variables: [],
            derivedFrom: "gravitational-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [m][g][h] = J",
            neet_frequency: "high",
          },
          {
            id: "work-by-spring",
            name: "Work by spring",
            category: "derived",
            formula: "W_s = -\\Delta U = \\frac{1}{2}k(x_1^2 - x_2^2)",
            latex: "W_s = -\\Delta U = \\frac{1}{2}k(x_1^2 - x_2^2)",
            description: "From x₁ to x₂",
            variables: [],
            derivedFrom: "elastic-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [k][x²] = N⋅m = J",
            neet_frequency: "high",
          },
          {
            id: "between-two-extensions",
            name: "Between two extensions",
            category: "derived",
            formula: "W = \\frac{1}{2}k(x_1^2 - x_2^2)",
            latex: "W = \\frac{1}{2}k(x_1^2 - x_2^2)",
            description: "Not ½k(x₁-x₂)²",
            variables: [],
            derivedFrom: "elastic-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [k][x²] = N⋅m = J",
            neet_frequency: "high",
          },
          {
            id: "spring-force",
            name: "Spring force",
            category: "derived",
            formula: "F = -\\frac{d}{dx}(\\frac{1}{2}kx^2) = -kx",
            latex: "F = -\\frac{d}{dx}(\\frac{1}{2}kx^2) = -kx",
            description: "Hooke's law from PE",
            variables: [],
            derivedFrom: "force-from-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [U]/[x] = J/m = N",
            neet_frequency: "medium",
          },
          {
            id: "equilibrium",
            name: "Equilibrium",
            category: "derived",
            formula: "\\frac{dU}{dx} = 0",
            latex: "\\frac{dU}{dx} = 0",
            description: "Force is zero at equilibrium",
            variables: [],
            derivedFrom: "force-from-pe",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [U]/[x] = J/m = N",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using U = ½k(x₂-x₁)² for work between two extensions",
            correct: "Work = ½k(x₁² - x₂²), not ½k(x₁-x₂)². PE is ½kx² from equilibrium.",
            whyItHappens: "Confusing change in x with x values",
            neetExample: "NEET 2020: Work to stretch spring from x₁ to x₂"
          },
          {
            mistake: "Forgetting PE is relative",
            correct: "PE value depends on reference. Only ΔPE has physical meaning.",
            whyItHappens: "Treating PE as absolute",
            neetExample: "NEET 2019: Different PE with different reference points"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Gravitational PE calculation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Spring PE problems",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Force from U-x graph",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Spring PE calculations",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Gravitational PE change",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Work done by/against spring",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Potential energy",
            analogy: "Bank savings",
            mapping: "Money saved (PE) can be converted to spending (KE) when needed"
          }
        ],
        questions: [],
      },
      {
        id: "work-energy-theorem",
        name: "Work-Energy Theorem",
        weightage: 0.4,
        difficulty: "medium",
        theory: {
          summary: "Net work done on a body equals change in its kinetic energy: W_net = ΔKE = ½mv² - ½mu². This is a powerful problem-solving tool - avoids need for detailed force analysis. Applies to work by ALL forces combined.",
          realWorldAnalogy: "Speeding up a car: engine does work that increases KE. Braking: friction does negative work that decreases KE. Final speed depends on net work.",
          keyPoints: [
            "W_net = ΔKE = ½mv² - ½mu²",
            "W_net = work by all forces combined",
            "If W_net > 0: speed increases",
            "If W_net < 0: speed decreases",
            "If W_net = 0: speed unchanged",
            "Useful when forces and displacements are complex"
          ],
          prerequisites: ["kinetic-energy"]
        },
        formulas: [
          {
            id: "work-energy-theorem-formula",
            name: "Work-Energy Theorem",
            category: "base",
            formula: "W_net = ΔKE = ½mv² - ½mu²",
            latex: "W_{net} = \\Delta KE = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2",
            description: "Net work equals change in kinetic energy",
            variables: [
              {
                symbol: "W_net",
                meaning: "Net work by all forces",
                unit: "J",
                typical_values: "Sum of all works"
              },
              {
                symbol: "u",
                meaning: "Initial speed",
                unit: "m/s",
                typical_values: "Given"
              },
              {
                symbol: "v",
                meaning: "Final speed",
                unit: "m/s",
                typical_values: "To find or given"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["If starting from rest: v = √(2W/m)", "If coming to rest: W = -½mu²", "Works for any path (not just straight line)"],
            dimensionalCheck: "[W] = [KE] = J",
          },
          {
            id: "finding-final-speed",
            name: "Finding final speed",
            category: "derived",
            formula: "v = \\sqrt{u^2 + \\frac{2W_{net}}{m}}",
            latex: "v = \\sqrt{u^2 + \\frac{2W_{net}}{m}}",
            description: "From work and initial speed",
            variables: [],
            derivedFrom: "work-energy-theorem-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [KE] = J",
            neet_frequency: "high",
          },
          {
            id: "stopping-distance",
            name: "Stopping distance",
            category: "derived",
            formula: "s = \\frac{mu^2}{2F}",
            latex: "s = \\frac{mu^2}{2F}",
            description: "From u to rest by force F",
            variables: [],
            derivedFrom: "work-energy-theorem-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [KE] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using W = Fd when force is not constant",
            correct: "For variable force, integrate or use work-energy theorem directly with ΔKE.",
            whyItHappens: "Applying constant force formula universally",
            neetExample: "NEET 2020: Work by spring force over extension"
          },
          {
            mistake: "Forgetting to include all forces in W_net",
            correct: "W_net includes gravity, friction, normal, applied force, etc. - ALL forces.",
            whyItHappens: "Missing some forces",
            neetExample: "NEET 2021: Block sliding on rough incline"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find final velocity using W-E theorem",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Stopping distance problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Multiple forces problems",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Finding speed from work done",
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
            pattern: "Stopping distance",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Work-energy theorem",
            analogy: "Bank balance change",
            mapping: "Net deposits - withdrawals = change in balance. Net work = change in KE."
          }
        ],
        questions: [],
      },
      {
        id: "conservation-energy",
        name: "Conservation of Mechanical Energy",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "When only conservative forces act, total mechanical energy (KE + PE) is conserved: E = KE + PE = constant. For gravity: ½mv₁² + mgh₁ = ½mv₂² + mgh₂. If non-conservative forces (friction) act: ΔE = W_nc.",
          realWorldAnalogy: "Roller coaster: at top (high PE, low KE), at bottom (low PE, high KE), total energy same (ignoring friction). Pendulum swings back to same height (energy conserved).",
          keyPoints: [
            "E = KE + PE = constant (conservative forces only)",
            "½mv₁² + U₁ = ½mv₂² + U₂",
            "For gravity: ½mv² + mgh = constant",
            "For spring: ½mv² + ½kx² = constant",
            "With friction: ΔE = W_friction (< 0)",
            "Non-conservative forces dissipate energy"
          ],
          prerequisites: ["potential-energy", "work-energy-theorem"]
        },
        formulas: [
          {
            id: "energy-conservation",
            name: "Conservation of Mechanical Energy",
            category: "base",
            formula: "KE₁ + PE₁ = KE₂ + PE₂",
            latex: "\\frac{1}{2}mv_1^2 + U_1 = \\frac{1}{2}mv_2^2 + U_2",
            description: "Total mechanical energy is constant",
            variables: [
              {
                symbol: "KE",
                meaning: "Kinetic energy",
                unit: "J",
                typical_values: "½mv²"
              },
              {
                symbol: "PE",
                meaning: "Potential energy",
                unit: "J",
                typical_values: "mgh or ½kx²"
              }
            ],
            derivedFrom: "work-energy-theorem",
            applications: [],
            specialCases: ["Valid only for conservative forces", "Reference point must be consistent", "Mass cancels in free fall problems"],
            dimensionalCheck: "[E] = J",
          },
          {
            id: "energy-with-friction",
            name: "Energy with Non-Conservative Forces",
            category: "derived",
            formula: "ΔE = W_nc",
            latex: "E_2 - E_1 = W_{nc}",
            description: "Energy change due to non-conservative work",
            variables: [
              {
                symbol: "W_nc",
                meaning: "Work by non-conservative forces",
                unit: "J",
                typical_values: "Usually negative (friction)"
              }
            ],
            derivedFrom: "energy-conservation",
            applications: [],
            specialCases: ["Friction always reduces mechanical energy", "Energy \"lost\" becomes heat"],
            dimensionalCheck: "[W_nc] = J",
          },
          {
            id: "free-fall-from-height-h",
            name: "Free fall from height h",
            category: "derived",
            formula: "v = \\sqrt{2gh}",
            latex: "v = \\sqrt{2gh}",
            description: "PE converts to KE",
            variables: [],
            derivedFrom: "energy-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = J",
            neet_frequency: "high",
          },
          {
            id: "pendulum-at-lowest-point",
            name: "Pendulum at lowest point",
            category: "derived",
            formula: "v = \\sqrt{2gL(1-\\cos\\theta)}",
            latex: "v = \\sqrt{2gL(1-\\cos\\theta)}",
            description: "Height = L(1-cos θ)",
            variables: [],
            derivedFrom: "energy-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = J",
            neet_frequency: "high",
          },
          {
            id: "spring-block",
            name: "Spring-block",
            category: "derived",
            formula: "v_{max} = x_{max}\\sqrt{\\frac{k}{m}}",
            latex: "v_{max} = x_{max}\\sqrt{\\frac{k}{m}}",
            description: "At equilibrium position",
            variables: [],
            derivedFrom: "energy-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = J",
            neet_frequency: "high",
          },
          {
            id: "with-friction",
            name: "With friction",
            category: "derived",
            formula: "E_2 = E_1 - f \\cdot d",
            latex: "E_2 = E_1 - f \\cdot d",
            description: "Energy lost to friction",
            variables: [],
            derivedFrom: "energy-with-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W_nc] = J",
            neet_frequency: "high",
          },
          {
            id: "work-by-friction",
            name: "Work by friction",
            category: "derived",
            formula: "W_f = -\\mu m g d",
            latex: "W_f = -\\mu m g d",
            description: "Negative work",
            variables: [],
            derivedFrom: "energy-with-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W_nc] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using energy conservation when friction is present",
            correct: "With friction, use E₂ - E₁ = W_friction. Friction does negative work.",
            whyItHappens: "Forgetting non-conservative forces",
            neetExample: "NEET 2020: Block sliding down rough incline"
          },
          {
            mistake: "Inconsistent reference for PE",
            correct: "Choose one reference point and use it for all PE calculations.",
            whyItHappens: "Changing reference mid-problem",
            neetExample: "NEET 2019: Ball thrown up from balcony"
          },
          {
            mistake: "Confusing height in pendulum problems",
            correct: "Height of pendulum bob = L(1 - cos θ) from lowest point, not Lθ or L sin θ.",
            whyItHappens: "Using wrong geometry",
            neetExample: "NEET 2021: Speed of pendulum at lowest point"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Speed at different heights (free fall)",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Spring-block oscillations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "With friction (energy loss)",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Speed at height problems",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Pendulum problems",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Spring energy problems",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Energy conservation",
            analogy: "Water in connected tanks",
            mapping: "Total water constant - level in one tank rises as other falls"
          }
        ],
        questions: [],
      },
      {
        id: "power",
        name: "Power",
        weightage: 0.3,
        difficulty: "medium",
        theory: {
          summary: "Power is rate of doing work: P = dW/dt = W/t for constant power. Also P = F⃗ · v⃗ = Fv cos θ. SI unit: Watt (W) = J/s. 1 HP = 746 W. Power measures how fast energy is transferred or work is done.",
          realWorldAnalogy: "Same work climbing stairs: running up (high power) vs walking up (low power). Electric bill charges for energy (kWh), not power (kW). Car engine rated in HP.",
          keyPoints: [
            "P = W/t (average power)",
            "P = dW/dt (instantaneous power)",
            "P = F⃗ · v⃗ = Fv cos θ",
            "SI unit: Watt (W) = J/s",
            "1 HP = 746 W",
            "1 kWh = 3.6 × 10⁶ J (energy unit)"
          ],
          prerequisites: ["work-done"]
        },
        formulas: [
          {
            id: "power-formula",
            name: "Power",
            category: "base",
            formula: "P = W/t = Fv cos θ",
            latex: "P = \\frac{W}{t} = \\vec{F} \\cdot \\vec{v} = Fv\\cos\\theta",
            description: "Rate of doing work or energy transfer",
            variables: [
              {
                symbol: "P",
                meaning: "Power",
                unit: "W (Watt)",
                typical_values: "100-10000 W for machines"
              },
              {
                symbol: "W",
                meaning: "Work done",
                unit: "J",
                typical_values: "Energy transferred"
              },
              {
                symbol: "t",
                meaning: "Time",
                unit: "s",
                typical_values: "Duration"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At max velocity, driving force = resistance", "P = Fv applies at any instant", "1 HP = 746 W ≈ 750 W"],
            dimensionalCheck: "[P] = [W]/[t] = J/s = W",
          },
          {
            id: "energy-power-relation",
            name: "Energy-Power-Time Relation",
            category: "derived",
            formula: "E = Pt",
            latex: "E = P \\times t",
            description: "Energy from constant power over time",
            variables: [
              {
                symbol: "E",
                meaning: "Energy",
                unit: "J or kWh",
                typical_values: "Work done"
              }
            ],
            derivedFrom: "power-formula",
            applications: [],
            specialCases: ["kWh is energy, not power", "1 kWh = 1000 W × 3600 s = 3.6 MJ"],
            dimensionalCheck: "[E] = [P][t] = W⋅s = J",
          },
          {
            id: "for-constant-force",
            name: "For constant force",
            category: "derived",
            formula: "P = Fv",
            latex: "P = Fv",
            description: "F parallel to v",
            variables: [],
            derivedFrom: "power-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [W]/[t] = J/s = W",
            neet_frequency: "high",
          },
          {
            id: "maximum-velocity",
            name: "Maximum velocity",
            category: "derived",
            formula: "v_{max} = \\frac{P}{F_{resist}}",
            latex: "v_{max} = \\frac{P}{F_{resist}}",
            description: "When power equals resistance×v",
            variables: [],
            derivedFrom: "power-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [W]/[t] = J/s = W",
            neet_frequency: "high",
          },
          {
            id: "electricity-bill",
            name: "Electricity bill",
            category: "derived",
            formula: "E(kWh) = P(kW) \\times t(h)",
            latex: "E(kWh) = P(kW) \\times t(h)",
            description: "Commercial energy unit",
            variables: [],
            derivedFrom: "energy-power-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [P][t] = W⋅s = J",
            neet_frequency: "medium",
          },
          {
            id: "conversion",
            name: "Conversion",
            category: "derived",
            formula: "1 kWh = 3.6 \\times 10^6 J",
            latex: "1 kWh = 3.6 \\times 10^6 J",
            description: "kWh to Joules",
            variables: [],
            derivedFrom: "energy-power-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [P][t] = W⋅s = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using P = Fv when F and v are not parallel",
            correct: "Use P = Fv cos θ when angle exists between force and velocity.",
            whyItHappens: "Ignoring directional aspect",
            neetExample: "NEET 2020: Power when pulling at angle"
          },
          {
            mistake: "Confusing kWh (energy) with kW (power)",
            correct: "kW is power (rate). kWh is energy (power × time). Electricity is sold by energy (kWh).",
            whyItHappens: "Similar sounding units",
            neetExample: "NEET 2019: Calculate energy in kWh"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate power from force and velocity",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Maximum velocity from power",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Energy consumption problems",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Power from force and velocity",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Maximum velocity problems",
            frequency: "medium",
            yearAsked: [2019, 2021]
          },
          {
            pattern: "Unit conversions (HP, kWh)",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Power vs work",
            analogy: "Speed vs distance",
            mapping: "Fast car covers distance quickly (high power does work quickly)"
          }
        ],
        questions: [],
      },
      {
        id: "collisions",
        name: "Collisions",
        weightage: 0.5,
        difficulty: "hard",
        theory: {
          summary: "In collisions, momentum is always conserved (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂). Elastic collision: KE also conserved. Inelastic: KE not conserved. Perfectly inelastic: bodies stick together. Coefficient of restitution e = (v₂-v₁)/(u₁-u₂).",
          realWorldAnalogy: "Billiard balls: nearly elastic (bounce apart). Car crashes: inelastic (crumple, stick). Catching a ball: perfectly inelastic (ball and hand move together).",
          keyPoints: [
            "Momentum always conserved: Σmᵢuᵢ = Σmᵢvᵢ",
            "Elastic: KE conserved, e = 1",
            "Inelastic: KE not conserved, 0 < e < 1",
            "Perfectly inelastic: bodies stick, e = 0",
            "Coefficient of restitution: e = (v₂-v₁)/(u₁-u₂)",
            "In perfectly inelastic, max KE is lost"
          ],
          prerequisites: ["kinetic-energy", "conservation-energy"]
        },
        formulas: [
          {
            id: "momentum-conservation",
            name: "Momentum Conservation",
            category: "base",
            formula: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
            latex: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2",
            description: "Total momentum before = total momentum after",
            variables: [
              {
                symbol: "u₁, u₂",
                meaning: "Initial velocities",
                unit: "m/s",
                typical_values: "Before collision"
              },
              {
                symbol: "v₁, v₂",
                meaning: "Final velocities",
                unit: "m/s",
                typical_values: "After collision"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Always valid regardless of collision type", "Vector equation - apply component-wise in 2D"],
            dimensionalCheck: "[p] = kg⋅m/s",
          },
          {
            id: "elastic-collision",
            name: "Elastic Collision Formulas",
            category: "derived",
            formula: "v₁ = ((m₁-m₂)u₁ + 2m₂u₂)/(m₁+m₂)",
            latex: "v_1 = \\frac{(m_1-m_2)u_1 + 2m_2u_2}{m_1+m_2}",
            description: "Final velocity in 1D elastic collision",
            variables: [
              {
                symbol: "v₁",
                meaning: "Final velocity of mass 1",
                unit: "m/s",
                typical_values: "Calculated"
              }
            ],
            derivedFrom: "momentum-conservation",
            applications: [],
            specialCases: ["Equal masses at rest: complete exchange", "Heavy → light: light moves at ~2u₁", "Light → heavy: bounces back"],
            dimensionalCheck: "[v] = m/s",
          },
          {
            id: "coefficient-restitution",
            name: "Coefficient of Restitution",
            category: "derived",
            formula: "e = (v₂ - v₁)/(u₁ - u₂)",
            latex: "e = \\frac{v_2 - v_1}{u_1 - u_2}",
            description: "Ratio of separation to approach velocity",
            variables: [
              {
                symbol: "e",
                meaning: "Coefficient of restitution",
                unit: "dimensionless",
                typical_values: "0 ≤ e ≤ 1"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["e = 1: elastic (no KE loss)", "e = 0: perfectly inelastic (max KE loss)", "0 < e < 1: partially inelastic"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "ke-loss-collision",
            name: "KE Loss in Collision",
            category: "derived",
            formula: "ΔKE = ½μ(u₁-u₂)²(1-e²)",
            latex: "\\Delta KE = \\frac{1}{2}\\mu(u_1-u_2)^2(1-e^2)",
            description: "Kinetic energy lost in collision",
            variables: [
              {
                symbol: "μ",
                meaning: "Reduced mass",
                unit: "kg",
                typical_values: "m₁m₂/(m₁+m₂)"
              },
              {
                symbol: "ΔKE",
                meaning: "Energy lost",
                unit: "J",
                typical_values: "0 for elastic"
              }
            ],
            derivedFrom: "coefficient-restitution",
            applications: [],
            specialCases: ["Elastic: ΔKE = 0", "Perfectly inelastic: maximum KE loss"],
            dimensionalCheck: "[ΔKE] = J",
          },
          {
            id: "perfectly-inelastic",
            name: "Perfectly inelastic",
            category: "derived",
            formula: "v = \\frac{m_1u_1 + m_2u_2}{m_1 + m_2}",
            latex: "v = \\frac{m_1u_1 + m_2u_2}{m_1 + m_2}",
            description: "Bodies stick together",
            variables: [],
            derivedFrom: "momentum-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "equal-masses",
            name: "Equal masses",
            category: "derived",
            formula: "v_1 = u_2, v_2 = u_1",
            latex: "v_1 = u_2, v_2 = u_1",
            description: "Velocities exchange",
            variables: [],
            derivedFrom: "elastic-collision",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "high",
          },
          {
            id: "target-at-rest-mm",
            name: "Target at rest (m₂=m₁)",
            category: "derived",
            formula: "v_1 = 0, v_2 = u_1",
            latex: "v_1 = 0, v_2 = u_1",
            description: "Complete momentum transfer",
            variables: [],
            derivedFrom: "elastic-collision",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "high",
          },
          {
            id: "heavy-hits-light",
            name: "Heavy hits light",
            category: "derived",
            formula: "v_2 \\approx 2u_1",
            latex: "v_2 \\approx 2u_1",
            description: "m₁ >> m₂",
            variables: [],
            derivedFrom: "elastic-collision",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "elastic-collision-2",
            name: "Elastic collision",
            category: "derived",
            formula: "e = 1",
            latex: "e = 1",
            description: "Perfect bounce",
            variables: [],
            derivedFrom: "coefficient-restitution",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "perfectly-inelastic-2",
            name: "Perfectly inelastic",
            category: "derived",
            formula: "e = 0",
            latex: "e = 0",
            description: "No bounce, stick together",
            variables: [],
            derivedFrom: "coefficient-restitution",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "ball-bouncing-on-floor",
            name: "Ball bouncing on floor",
            category: "derived",
            formula: "e = \\sqrt{\\frac{h_2}{h_1}}",
            latex: "e = \\sqrt{\\frac{h_2}{h_1}}",
            description: "Heights after and before",
            variables: [],
            derivedFrom: "coefficient-restitution",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "perfectly-inelastic-3",
            name: "Perfectly inelastic",
            category: "derived",
            formula: "\\Delta KE = \\frac{1}{2}\\mu(u_1-u_2)^2",
            latex: "\\Delta KE = \\frac{1}{2}\\mu(u_1-u_2)^2",
            description: "e = 0, maximum loss",
            variables: [],
            derivedFrom: "ke-loss-collision",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΔKE] = J",
            neet_frequency: "high",
          },
          {
            id: "fraction-lost",
            name: "Fraction lost",
            category: "derived",
            formula: "\\frac{\\Delta KE}{KE_i} = 1 - e^2",
            latex: "\\frac{\\Delta KE}{KE_i} = 1 - e^2",
            description: "In CM frame",
            variables: [],
            derivedFrom: "ke-loss-collision",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΔKE] = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Assuming KE is always conserved in collisions",
            correct: "Momentum is always conserved. KE is conserved only in elastic collisions.",
            whyItHappens: "Confusing momentum and energy conservation",
            neetExample: "NEET 2020: KE after perfectly inelastic collision"
          },
          {
            mistake: "Wrong sign in e formula",
            correct: "e = (v₂-v₁)/(u₁-u₂). Note the order: separation velocity / approach velocity.",
            whyItHappens: "Getting numerator and denominator mixed up",
            neetExample: "NEET 2019: Calculate coefficient of restitution"
          },
          {
            mistake: "Using elastic collision formulas for inelastic",
            correct: "For inelastic, use e formula along with momentum conservation.",
            whyItHappens: "Applying elastic formulas universally",
            neetExample: "NEET 2021: Collision with given e value"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Elastic collision between two bodies",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Perfectly inelastic collision",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "KE loss calculations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Coefficient of restitution problems",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Velocity after elastic collision",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Perfectly inelastic collision",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "KE loss in collision",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          },
          {
            pattern: "Ball bouncing (e from heights)",
            frequency: "medium",
            yearAsked: [2019, 2022]
          }
        ],
        analogies: [
          {
            concept: "Types of collisions",
            analogy: "Balls of different materials",
            mapping: "Super ball: nearly elastic. Clay balls: perfectly inelastic (stick together)."
          }
        ],
        questions: [],
      }
    ];