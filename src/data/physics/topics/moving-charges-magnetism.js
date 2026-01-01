// Moving Charges and Magnetism - 5% weightage (Tier 1)
// NCERT Class 12, Chapter 4

export const movingChargesMagnetismTopics = [
      {
        id: "biot-savart-law",
        name: "Biot-Savart's Law",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Biot-Savart law gives the magnetic field dB due to a small current element Idl. The field is perpendicular to both the current element and the position vector. It's the magnetic equivalent of Coulomb's law for electric fields.",
          realWorldAnalogy: "Like ripples from a moving stick in water - the current element creates circular magnetic field patterns around it.",
          keyPoints: [
            "dB = (μ₀/4π) × (Idl × r̂)/r²",
            "Direction: Right-hand rule (thumb = current, fingers = field)",
            "dB ⊥ both Idl and r",
            "μ₀ = 4π × 10⁻⁷ T·m/A (permeability of free space)",
            "Used to derive fields of wires, loops, solenoids"
          ],
          prerequisites: ["magnetic-field-basics"]
        },
        formulas: [
          {
            id: "biot-savart",
            name: "Biot-Savart Law",
            category: "base",
            formula: "dB = (μ₀/4π)(Idl sin θ)/r²",
            latex: "dB = \\frac{\\mu_0}{4\\pi} \\frac{I \\, dl \\sin\\theta}{r^2}",
            description: "Magnetic field due to current element",
            variables: [
              {
                symbol: "dB",
                meaning: "Magnetic field element",
                unit: "T",
                typical_values: "μT to mT"
              },
              {
                symbol: "μ₀",
                meaning: "Permeability of free space",
                unit: "T·m/A",
                typical_values: "4π × 10⁻⁷"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "1-10 A"
              },
              {
                symbol: "dl",
                meaning: "Current element length",
                unit: "m",
                typical_values: "Infinitesimal"
              },
              {
                symbol: "θ",
                meaning: "Angle between dl and r",
                unit: "rad",
                typical_values: "0 to π"
              },
              {
                symbol: "r",
                meaning: "Distance from element",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["dB = 0 when θ = 0 or π (along the wire)", "dB maximum when θ = 90°"],
            dimensionalCheck: "[B] = [μ₀][I][L]/[L²] = T·m/A × A/m = T",
          },
          {
            id: "field-straight-wire",
            name: "Field Due to Straight Wire",
            category: "derived",
            formula: "B = (μ₀I/4πr)(sin α + sin β)",
            latex: "B = \\frac{\\mu_0 I}{4\\pi r}(\\sin\\alpha + \\sin\\beta)",
            description: "Magnetic field at distance r from a finite straight wire",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "μT to mT"
              },
              {
                symbol: "r",
                meaning: "Perpendicular distance",
                unit: "m",
                typical_values: "cm to m"
              },
              {
                symbol: "α, β",
                meaning: "Angles from ends to point",
                unit: "rad",
                typical_values: "0 to π/2"
              }
            ],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: ["Direction by right-hand grip rule", "Concentric circles around wire"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "straight-wire",
            name: "Straight wire",
            category: "derived",
            formula: "B = \\frac{\\mu_0 I}{2\\pi r}",
            latex: "B = \\frac{\\mu_0 I}{2\\pi r}",
            description: "Infinite straight wire",
            variables: [],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][I][L]/[L²] = T·m/A × A/m = T",
            neet_frequency: "high",
          },
          {
            id: "at-center-of-loop",
            name: "At center of loop",
            category: "derived",
            formula: "B = \\frac{\\mu_0 I}{2R}",
            latex: "B = \\frac{\\mu_0 I}{2R}",
            description: "Circular loop radius R",
            variables: [],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][I][L]/[L²] = T·m/A × A/m = T",
            neet_frequency: "high",
          },
          {
            id: "on-axis-of-loop",
            name: "On axis of loop",
            category: "derived",
            formula: "B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}",
            latex: "B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}",
            description: "At distance x from center",
            variables: [],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][I][L]/[L²] = T·m/A × A/m = T",
            neet_frequency: "medium",
          },
          {
            id: "infinite-wire",
            name: "Infinite wire",
            category: "derived",
            formula: "B = \\frac{\\mu_0 I}{2\\pi r}",
            latex: "B = \\frac{\\mu_0 I}{2\\pi r}",
            description: "α = β = π/2",
            variables: [],
            derivedFrom: "field-straight-wire",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          },
          {
            id: "semi-infinite-wire",
            name: "Semi-infinite wire",
            category: "derived",
            formula: "B = \\frac{\\mu_0 I}{4\\pi r}",
            latex: "B = \\frac{\\mu_0 I}{4\\pi r}",
            description: "One end at the point",
            variables: [],
            derivedFrom: "field-straight-wire",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using sin θ = 1 always",
            correct: "sin θ varies along wire. For infinite wire, integration accounts for this.",
            whyItHappens: "Forgetting θ is angle between dl and r̂",
            neetExample: "NEET 2020: Field at corner of square loop"
          },
          {
            mistake: "Wrong direction using right-hand rule",
            correct: "Thumb along current, fingers curl in direction of B",
            whyItHappens: "Confusion between different right-hand rules",
            neetExample: "NEET 2019: Direction of B at point near wire"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Field due to straight wire",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field at center/axis of loop",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Direction of magnetic field",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Field due to infinite straight wire",
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
            pattern: "Field at center of circular loop",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Biot-Savart law",
            analogy: "Coulomb's law for magnetism",
            mapping: "Just as charge creates E, current element creates B"
          }
        ],
        questions: [],
      },
      {
        id: "magnetic-field-ring",
        name: "Magnetic Field Due to Current Carrying Ring",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "A circular loop carrying current creates a magnetic field maximum at its center: B = μ₀I/2R. On the axis, field decreases with distance. A coil of N turns has N times the field. The field pattern resembles that of a bar magnet (magnetic dipole).",
          realWorldAnalogy: "Like a single coil electromagnet - the loop creates north-south poles like a tiny bar magnet aligned along its axis.",
          keyPoints: [
            "At center: B = μ₀I/2R",
            "On axis: B = μ₀IR²/[2(R² + x²)^(3/2)]",
            "N turns: Multiply by N",
            "Direction: Right-hand curl rule (fingers = current, thumb = B at center)",
            "Magnetic moment: m = NIA"
          ],
          prerequisites: ["biot-savart-law"]
        },
        formulas: [
          {
            id: "field-center-loop",
            name: "Field at Center of Loop",
            category: "derived",
            formula: "B = μ₀I/2R",
            latex: "B = \\frac{\\mu_0 I}{2R}",
            description: "Magnetic field at center of circular loop",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "μT to mT"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "1-10 A"
              },
              {
                symbol: "R",
                meaning: "Radius of loop",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: ["B ∝ I, B ∝ 1/R", "Double current → double field"],
            dimensionalCheck: "[B] = [μ₀][I]/[R] = T",
          },
          {
            id: "field-axis-loop",
            name: "Field on Axis of Loop",
            category: "derived",
            formula: "B = μ₀IR²/[2(R² + x²)^(3/2)]",
            latex: "B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}",
            description: "Magnetic field at distance x on axis of loop",
            variables: [
              {
                symbol: "x",
                meaning: "Distance from center on axis",
                unit: "m",
                typical_values: "0 to several R"
              }
            ],
            derivedFrom: "biot-savart",
            applications: [],
            specialCases: ["Field along axis only (by symmetry)", "Decreases as 1/x³ at large distance (dipole behavior)"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "magnetic-moment",
            name: "Magnetic Moment of Loop",
            category: "base",
            formula: "m = NIA",
            latex: "m = NIA",
            description: "Magnetic dipole moment of current loop",
            variables: [
              {
                symbol: "m",
                meaning: "Magnetic moment",
                unit: "A·m²",
                typical_values: "10⁻³ to 1 A·m²"
              },
              {
                symbol: "N",
                meaning: "Number of turns",
                unit: "dimensionless",
                typical_values: "1 to 1000"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "1-10 A"
              },
              {
                symbol: "A",
                meaning: "Area of loop",
                unit: "m²",
                typical_values: "cm² to m²"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Direction: perpendicular to loop (right-hand rule)", "m = IA for single loop"],
            dimensionalCheck: "[m] = A·m²",
          },
          {
            id: "n-turn-coil",
            name: "N turn coil",
            category: "derived",
            formula: "B = \\frac{\\mu_0 NI}{2R}",
            latex: "B = \\frac{\\mu_0 NI}{2R}",
            description: "Coil of N turns",
            variables: [],
            derivedFrom: "field-center-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][I]/[R] = T",
            neet_frequency: "high",
          },
          {
            id: "two-coils-same-direction",
            name: "Two coils (same direction)",
            category: "derived",
            formula: "B_{net} = B_1 + B_2",
            latex: "B_{net} = B_1 + B_2",
            description: "Add for parallel currents",
            variables: [],
            derivedFrom: "field-center-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][I]/[R] = T",
            neet_frequency: "medium",
          },
          {
            id: "at-x-0",
            name: "At x = 0",
            category: "derived",
            formula: "B = \\frac{\\mu_0 I}{2R}",
            latex: "B = \\frac{\\mu_0 I}{2R}",
            description: "Reduces to center formula",
            variables: [],
            derivedFrom: "field-axis-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          },
          {
            id: "far-from-loop-x-r",
            name: "Far from loop (x >> R)",
            category: "derived",
            formula: "B \\approx \\frac{\\mu_0 IR^2}{2x^3} = \\frac{\\mu_0 m}{2\\pi x^3}",
            latex: "B \\approx \\frac{\\mu_0 IR^2}{2x^3} = \\frac{\\mu_0 m}{2\\pi x^3}",
            description: "Dipole field",
            variables: [],
            derivedFrom: "field-axis-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          },
          {
            id: "torque-in-field",
            name: "Torque in field",
            category: "derived",
            formula: "\\tau = mB\\sin\\theta",
            latex: "\\tau = mB\\sin\\theta",
            description: "Torque on loop in magnetic field",
            variables: [],
            derivedFrom: "magnetic-moment",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m] = A·m²",
            neet_frequency: "high",
          },
          {
            id: "potential-energy",
            name: "Potential energy",
            category: "derived",
            formula: "U = -mB\\cos\\theta = -\\vec{m} \\cdot \\vec{B}",
            latex: "U = -mB\\cos\\theta = -\\vec{m} \\cdot \\vec{B}",
            description: "Energy of dipole",
            variables: [],
            derivedFrom: "magnetic-moment",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m] = A·m²",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting to multiply by N for N-turn coil",
            correct: "B = μ₀NI/2R for N turns, not μ₀I/2R",
            whyItHappens: "Thinking of single loop formula only",
            neetExample: "NEET 2020: 10-turn coil field at center"
          },
          {
            mistake: "Using center formula for points on axis",
            correct: "Use B = μ₀IR²/[2(R² + x²)^(3/2)] for axis points",
            whyItHappens: "Not distinguishing x = 0 from x ≠ 0",
            neetExample: "NEET 2019: Field at distance R from center on axis"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Field at center of loop/coil",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field on axis at given distance",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Magnetic moment and torque",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Field at center of N-turn coil",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Field on axis of loop",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Magnetic moment calculation",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Current loop as dipole",
            analogy: "Tiny bar magnet",
            mapping: "Loop creates N-S poles like magnet, field lines similar"
          }
        ],
        questions: [],
      },
      {
        id: "amperes-law",
        name: "Ampere's Law and Its Applications",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Ampere's circuital law states that the line integral of B around a closed loop equals μ₀ times the enclosed current. Useful for systems with symmetry: infinite wire, solenoid, toroid. ∮B·dl = μ₀I_enclosed.",
          realWorldAnalogy: "Like Gauss's law for electricity - use symmetry to find field without complex integration. Choose the right 'Amperian loop' like choosing a Gaussian surface.",
          keyPoints: [
            "∮B·dl = μ₀I_enclosed",
            "Applies to any closed path (choose smart loop for symmetry)",
            "Solenoid: B = μ₀nI (inside), B ≈ 0 outside",
            "Toroid: B = μ₀NI/2πr (inside), B = 0 outside",
            "n = N/L = turns per unit length"
          ],
          prerequisites: ["biot-savart-law"]
        },
        formulas: [
          {
            id: "amperes-law",
            name: "Ampere's Circuital Law",
            category: "base",
            formula: "∮B·dl = μ₀I_enclosed",
            latex: "\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}",
            description: "Line integral of B around closed loop equals μ₀ times current through loop",
            variables: [
              {
                symbol: "∮B·dl",
                meaning: "Line integral of B",
                unit: "T·m",
                typical_values: "μ₀I"
              },
              {
                symbol: "I_enclosed",
                meaning: "Current passing through loop",
                unit: "A",
                typical_values: "Total current linked"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Current not through loop contributes 0", "Sign of I: right-hand rule with loop direction"],
            dimensionalCheck: "[B][L] = [μ₀][I] = T·m",
          },
          {
            id: "field-solenoid",
            name: "Field Inside Solenoid",
            category: "derived",
            formula: "B = μ₀nI",
            latex: "B = \\mu_0 n I = \\frac{\\mu_0 N I}{L}",
            description: "Uniform magnetic field inside a long solenoid",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field inside",
                unit: "T",
                typical_values: "mT to T"
              },
              {
                symbol: "n",
                meaning: "Turns per unit length",
                unit: "turns/m",
                typical_values: "100-10000 turns/m"
              },
              {
                symbol: "N",
                meaning: "Total number of turns",
                unit: "dimensionless",
                typical_values: "100-10000"
              },
              {
                symbol: "L",
                meaning: "Length of solenoid",
                unit: "m",
                typical_values: "0.1-1 m"
              }
            ],
            derivedFrom: "amperes-law",
            applications: [],
            specialCases: ["Field uniform inside (for long solenoid)", "Field ≈ 0 outside"],
            dimensionalCheck: "[B] = [μ₀][n][I] = T",
          },
          {
            id: "field-toroid",
            name: "Field Inside Toroid",
            category: "derived",
            formula: "B = μ₀NI/2πr",
            latex: "B = \\frac{\\mu_0 N I}{2\\pi r}",
            description: "Magnetic field inside a toroidal coil at radius r",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "mT"
              },
              {
                symbol: "N",
                meaning: "Total number of turns",
                unit: "dimensionless",
                typical_values: "100-10000"
              },
              {
                symbol: "r",
                meaning: "Radius from center of toroid",
                unit: "m",
                typical_values: "Inner to outer radius"
              }
            ],
            derivedFrom: "amperes-law",
            applications: [],
            specialCases: ["B = 0 outside toroid and in central hole", "Field confined within the coil"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "long-straight-wire",
            name: "Long straight wire",
            category: "derived",
            formula: "B(2\\pi r) = \\mu_0 I \\Rightarrow B = \\frac{\\mu_0 I}{2\\pi r}",
            latex: "B(2\\pi r) = \\mu_0 I \\Rightarrow B = \\frac{\\mu_0 I}{2\\pi r}",
            description: "Circular Amperian loop",
            variables: [],
            derivedFrom: "amperes-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B][L] = [μ₀][I] = T·m",
            neet_frequency: "high",
          },
          {
            id: "with-core",
            name: "With core",
            category: "derived",
            formula: "B = \\mu_0 \\mu_r n I",
            latex: "B = \\mu_0 \\mu_r n I",
            description: "Relative permeability μᵣ",
            variables: [],
            derivedFrom: "field-solenoid",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][n][I] = T",
            neet_frequency: "medium",
          },
          {
            id: "at-end-of-solenoid",
            name: "At end of solenoid",
            category: "derived",
            formula: "B = \\frac{\\mu_0 n I}{2}",
            latex: "B = \\frac{\\mu_0 n I}{2}",
            description: "Half of center value",
            variables: [],
            derivedFrom: "field-solenoid",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][n][I] = T",
            neet_frequency: "medium",
          },
          {
            id: "at-mean-radius",
            name: "At mean radius",
            category: "derived",
            formula: "B = \\frac{\\mu_0 N I}{2\\pi r_{mean}}",
            latex: "B = \\frac{\\mu_0 N I}{2\\pi r_{mean}}",
            description: "Average field value",
            variables: [],
            derivedFrom: "field-toroid",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using Ampere's law where there's no symmetry",
            correct: "Ampere's law always true but only useful when B·dl can be simplified",
            whyItHappens: "Applying law mechanically without checking symmetry",
            neetExample: "NEET 2019: When is Ampere's law most useful?"
          },
          {
            mistake: "Using B = μ₀nI for toroid",
            correct: "Toroid: B = μ₀NI/2πr. Solenoid: B = μ₀nI. Different formulas!",
            whyItHappens: "Confusing solenoid and toroid",
            neetExample: "NEET 2020: Field inside toroid vs solenoid"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Field in solenoid",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field in toroid",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "When to use Ampere's law",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Field inside solenoid",
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
            pattern: "Field inside toroid",
            frequency: "medium",
            yearAsked: [2019, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Ampere's law",
            analogy: "Gauss's law for magnetism",
            mapping: "Both use symmetry - Gauss uses surface, Ampere uses loop"
          }
        ],
        questions: [],
      },
      {
        id: "force-moving-charge",
        name: "Force on Moving Charge in Magnetic Field",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "A charge q moving with velocity v in magnetic field B experiences force F = qv × B. Force is perpendicular to both v and B, so it does no work (speed constant). This causes circular or helical motion depending on the angle of entry.",
          realWorldAnalogy: "Like a spinning ball curving in air - the sideways force (Magnus effect) is perpendicular to velocity, causing curved path without changing speed.",
          keyPoints: [
            "F = qvB sin θ (magnitude)",
            "Direction: Right-hand rule (v × B for +ve charge)",
            "F ⊥ v, so work done = 0, speed constant",
            "Circular motion: radius r = mv/qB",
            "Time period T = 2πm/qB (independent of v)",
            "Helical motion if v has component along B"
          ],
          prerequisites: ["magnetic-field-basics"]
        },
        formulas: [
          {
            id: "lorentz-force-magnetic",
            name: "Magnetic Lorentz Force",
            category: "base",
            formula: "F = qvB sin θ",
            latex: "\\vec{F} = q\\vec{v} \\times \\vec{B}",
            description: "Force on charge moving in magnetic field",
            variables: [
              {
                symbol: "F",
                meaning: "Magnetic force",
                unit: "N",
                typical_values: "pN to N"
              },
              {
                symbol: "q",
                meaning: "Charge",
                unit: "C",
                typical_values: "e = 1.6 × 10⁻¹⁹ C"
              },
              {
                symbol: "v",
                meaning: "Velocity of charge",
                unit: "m/s",
                typical_values: "10³ to 10⁸ m/s"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "mT to T"
              },
              {
                symbol: "θ",
                meaning: "Angle between v and B",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["F = 0 for stationary charge (v = 0)", "F perpendicular to v: no work done", "Negative charge: force opposite to v × B"],
            dimensionalCheck: "[F] = [q][v][B] = C × m/s × T = N",
          },
          {
            id: "circular-motion-charge",
            name: "Circular Motion in Magnetic Field",
            category: "derived",
            formula: "r = mv/qB",
            latex: "r = \\frac{mv}{qB}",
            description: "Radius of circular path when charge enters perpendicular to B",
            variables: [
              {
                symbol: "r",
                meaning: "Radius of circular path",
                unit: "m",
                typical_values: "mm to m"
              },
              {
                symbol: "m",
                meaning: "Mass of particle",
                unit: "kg",
                typical_values: "me = 9.1 × 10⁻³¹ kg"
              }
            ],
            derivedFrom: "lorentz-force-magnetic",
            applications: [],
            specialCases: ["r ∝ v: faster particles make larger circles", "T independent of v: all particles take same time per revolution"],
            dimensionalCheck: "[r] = [m][v]/[q][B] = kg × m/s / (C × T) = m",
          },
          {
            id: "kinetic-energy-magnetic",
            name: "Kinetic Energy in Magnetic Field",
            category: "derived",
            formula: "r = √(2mK)/qB",
            latex: "r = \\frac{\\sqrt{2mK}}{qB}",
            description: "Radius in terms of kinetic energy K",
            variables: [
              {
                symbol: "K",
                meaning: "Kinetic energy",
                unit: "J or eV",
                typical_values: "eV to MeV"
              }
            ],
            derivedFrom: "circular-motion-charge",
            applications: [],
            specialCases: ["r ∝ √K for same particle", "r ∝ √m for same K"],
            dimensionalCheck: "[r] = m",
          },
          {
            id: "perpendicular-entry",
            name: "Perpendicular entry",
            category: "derived",
            formula: "F = qvB",
            latex: "F = qvB",
            description: "θ = 90°, maximum force",
            variables: [],
            derivedFrom: "lorentz-force-magnetic",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [q][v][B] = C × m/s × T = N",
            neet_frequency: "high",
          },
          {
            id: "parallel-entry",
            name: "Parallel entry",
            category: "derived",
            formula: "F = 0",
            latex: "F = 0",
            description: "θ = 0° or 180°, no force",
            variables: [],
            derivedFrom: "lorentz-force-magnetic",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [q][v][B] = C × m/s × T = N",
            neet_frequency: "medium",
          },
          {
            id: "time-period",
            name: "Time period",
            category: "derived",
            formula: "T = \\frac{2\\pi m}{qB}",
            latex: "T = \\frac{2\\pi m}{qB}",
            description: "Independent of v!",
            variables: [],
            derivedFrom: "circular-motion-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = [m][v]/[q][B] = kg × m/s / (C × T) = m",
            neet_frequency: "high",
          },
          {
            id: "frequency",
            name: "Frequency",
            category: "derived",
            formula: "f = \\frac{qB}{2\\pi m}",
            latex: "f = \\frac{qB}{2\\pi m}",
            description: "Cyclotron frequency",
            variables: [],
            derivedFrom: "circular-motion-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = [m][v]/[q][B] = kg × m/s / (C × T) = m",
            neet_frequency: "high",
          },
          {
            id: "angular-velocity",
            name: "Angular velocity",
            category: "derived",
            formula: "\\omega = \\frac{qB}{m}",
            latex: "\\omega = \\frac{qB}{m}",
            description: "Cyclotron angular frequency",
            variables: [],
            derivedFrom: "circular-motion-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = [m][v]/[q][B] = kg × m/s / (C × T) = m",
            neet_frequency: "medium",
          },
          {
            id: "from-k-mv",
            name: "From K = ½mv²",
            category: "derived",
            formula: "r = \\frac{\\sqrt{2mK}}{qB}",
            latex: "r = \\frac{\\sqrt{2mK}}{qB}",
            description: "When K is given instead of v",
            variables: [],
            derivedFrom: "kinetic-energy-magnetic",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m",
            neet_frequency: "high",
          },
          {
            id: "for-accelerated-particles",
            name: "For accelerated particles",
            category: "derived",
            formula: "K = qV, \\text{ so } r = \\frac{\\sqrt{2mqV}}{qB}",
            latex: "K = qV, \\text{ so } r = \\frac{\\sqrt{2mqV}}{qB}",
            description: "Particle accelerated through V",
            variables: [],
            derivedFrom: "kinetic-energy-magnetic",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking speed changes in magnetic field",
            correct: "F ⊥ v, so work = 0. Speed is constant, only direction changes.",
            whyItHappens: "Confusing with electric field where speed changes",
            neetExample: "NEET 2020: Does KE change in magnetic field?"
          },
          {
            mistake: "Wrong direction for negative charge",
            correct: "For -ve charge, force is opposite to v × B (or use magnitude |q|)",
            whyItHappens: "Forgetting sign of charge affects direction",
            neetExample: "NEET 2019: Electron vs proton deflection in magnetic field"
          },
          {
            mistake: "Thinking T depends on speed",
            correct: "T = 2πm/qB is INDEPENDENT of v. This is key to cyclotron operation.",
            whyItHappens: "Intuition that faster particles should take different time",
            neetExample: "NEET 2021: Time period of electron in magnetic field"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Force on moving charge",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Radius and time period of circular motion",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Work done by magnetic force",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Cyclotron frequency and radius",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Radius of circular path",
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
            pattern: "Time period (independence of v)",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Comparison of different particles",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "No work by magnetic force",
            analogy: "Tight rope around pole",
            mapping: "Tension keeps object moving in circle but does no work (always perpendicular)"
          },
          {
            concept: "Cyclotron motion",
            analogy: "Ball on string in horizontal circle",
            mapping: "Force toward center, ball speeds up or slows down, but same period"
          }
        ],
        questions: [],
      },
      {
        id: "lorentz-force",
        name: "Lorentz Force and Velocity Selector",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Lorentz force is the total electromagnetic force on a charge: F = qE + qv×B. In a velocity selector, E and B are perpendicular; only particles with v = E/B pass through undeflected.",
          realWorldAnalogy: "Like a filter for particles - only those with the right 'speed ticket' pass through, others get deflected.",
          keyPoints: [
            "Total force: F = q(E + v×B)",
            "Velocity selector condition: qE = qvB → v = E/B",
            "Used in mass spectrometer to select velocity",
            "Cyclotron uses magnetic field for circular acceleration"
          ],
          prerequisites: ["force-moving-charge"]
        },
        formulas: [
          {
            id: "lorentz-total",
            name: "Total Lorentz Force",
            category: "base",
            formula: "F = q(E + v×B)",
            latex: "\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})",
            description: "Total electromagnetic force on moving charge",
            variables: [
              {
                symbol: "F",
                meaning: "Total force",
                unit: "N",
                typical_values: "Sum of both"
              },
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m",
                typical_values: "10³ to 10⁶ V/m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["If E = 0: only magnetic force", "If v = 0: only electric force"],
            dimensionalCheck: "[F] = N",
          },
          {
            id: "velocity-selector",
            name: "Velocity selector",
            category: "derived",
            formula: "v = \\frac{E}{B}",
            latex: "v = \\frac{E}{B}",
            description: "For undeflected path",
            variables: [],
            derivedFrom: "lorentz-total",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting electric force in Lorentz equation",
            correct: "Total force includes both qE and qv×B",
            whyItHappens: "Focusing only on magnetic part",
            neetExample: "NEET 2020: Velocity selector problem"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Velocity selector calculation",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Cyclotron operation",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Velocity selector v = E/B",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          }
        ],
        analogies: [],
        questions: [],
      },
      {
        id: "force-current-conductor",
        name: "Force on Current-Carrying Conductor",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "A current-carrying conductor in a magnetic field experiences a force F = BIL sin θ. This is because moving charges in the conductor experience Lorentz force. Direction given by Fleming's left-hand rule (Force, Field, Current = FBI). This principle is used in electric motors.",
          realWorldAnalogy: "Like a rope (wire) with water flowing through it (current) placed between two magnets - the rope gets pushed sideways. The force is perpendicular to both the flow and the magnetic field.",
          keyPoints: [
            "Force on conductor: F = BIL sin θ",
            "Maximum force when conductor ⊥ to field (θ = 90°)",
            "Zero force when conductor ∥ to field (θ = 0°)",
            "Direction: Fleming's left-hand rule (FBI)",
            "Force between parallel wires: attraction for same direction, repulsion for opposite",
            "Definition of Ampere: 1A causes 2 × 10⁻⁷ N/m between wires 1m apart"
          ],
          prerequisites: ["force-moving-charge"]
        },
        formulas: [
          {
            id: "force-conductor",
            name: "Force on Conductor in Magnetic Field",
            category: "base",
            formula: "F = BIL sin θ",
            latex: "F = BIL\\sin\\theta",
            description: "Force on a straight current-carrying conductor in uniform magnetic field",
            variables: [
              {
                symbol: "F",
                meaning: "Force on conductor",
                unit: "N",
                typical_values: "10⁻³ to 10 N"
              },
              {
                symbol: "B",
                meaning: "Magnetic field strength",
                unit: "T",
                typical_values: "0.01-1 T"
              },
              {
                symbol: "I",
                meaning: "Current in conductor",
                unit: "A",
                typical_values: "1-10 A"
              },
              {
                symbol: "L",
                meaning: "Length of conductor in field",
                unit: "m",
                typical_values: "0.1-1 m"
              },
              {
                symbol: "θ",
                meaning: "Angle between I and B",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: "lorentz-force-magnetic",
            applications: [],
            specialCases: ["F = 0 when conductor parallel to B (θ = 0°)", "Direction by Fleming's left-hand rule"],
            dimensionalCheck: "[F] = [B][I][L] = T × A × m = N",
          },
          {
            id: "force-parallel-wires",
            name: "Force Between Parallel Current-Carrying Wires",
            category: "derived",
            formula: "F/L = μ₀I₁I₂/2πd",
            latex: "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}",
            description: "Force per unit length between two long parallel wires",
            variables: [
              {
                symbol: "F/L",
                meaning: "Force per unit length",
                unit: "N/m",
                typical_values: "10⁻⁶ to 10⁻³ N/m"
              },
              {
                symbol: "I₁, I₂",
                meaning: "Currents in wires",
                unit: "A",
                typical_values: "1-10 A"
              },
              {
                symbol: "d",
                meaning: "Distance between wires",
                unit: "m",
                typical_values: "0.01-1 m"
              }
            ],
            derivedFrom: "force-conductor",
            applications: [],
            specialCases: ["Same direction → attract (like poles attract in magnetism!)", "Opposite direction → repel", "F ∝ 1/d (inverse with distance)"],
            dimensionalCheck: "[F/L] = [μ₀][I²]/[d] = T·m/A × A²/m = N/m",
          },
          {
            id: "perpendicular-field",
            name: "Perpendicular field",
            category: "derived",
            formula: "F = BIL",
            latex: "F = BIL",
            description: "θ = 90°, maximum force",
            variables: [],
            derivedFrom: "force-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [B][I][L] = T × A × m = N",
            neet_frequency: "high",
          },
          {
            id: "force-per-unit-length",
            name: "Force per unit length",
            category: "derived",
            formula: "f = BI",
            latex: "f = BI",
            description: "Force per meter of conductor",
            variables: [],
            derivedFrom: "force-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [B][I][L] = T × A × m = N",
            neet_frequency: "medium",
          },
          {
            id: "definition-of-ampere",
            name: "Definition of Ampere",
            category: "derived",
            formula: "F/L = 2 \\times 10^{-7} \\text{ N/m}",
            latex: "F/L = 2 \\times 10^{-7} \\text{ N/m}",
            description: "When I₁ = I₂ = 1 A, d = 1 m",
            variables: [],
            derivedFrom: "force-parallel-wires",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F/L] = [μ₀][I²]/[d] = T·m/A × A²/m = N/m",
            neet_frequency: "high",
          },
          {
            id: "same-direction-currents",
            name: "Same direction currents",
            category: "derived",
            formula: "F = \\text{attractive}",
            latex: "F = \\text{attractive}",
            description: "Wires attract each other",
            variables: [],
            derivedFrom: "force-parallel-wires",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F/L] = [μ₀][I²]/[d] = T·m/A × A²/m = N/m",
            neet_frequency: "high",
          },
          {
            id: "opposite-direction-currents",
            name: "Opposite direction currents",
            category: "derived",
            formula: "F = \\text{repulsive}",
            latex: "F = \\text{repulsive}",
            description: "Wires repel each other",
            variables: [],
            derivedFrom: "force-parallel-wires",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F/L] = [μ₀][I²]/[d] = T·m/A × A²/m = N/m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using wrong hand rule for force direction",
            correct: "Fleming's LEFT-hand rule for motor (Force): Index = B, Middle = I, Thumb = F",
            whyItHappens: "Confusing with right-hand rules",
            neetExample: "NEET 2019: Direction of force on wire in magnetic field"
          },
          {
            mistake: "Thinking same direction currents repel",
            correct: "Same direction currents ATTRACT (opposite to electric charges!)",
            whyItHappens: "Applying electrostatic analogy incorrectly",
            neetExample: "NEET 2020: Force between parallel wires"
          },
          {
            mistake: "Forgetting sin θ in force formula",
            correct: "F = BIL sin θ. Only perpendicular component of B causes force.",
            whyItHappens: "Assuming maximum force in all orientations",
            neetExample: "NEET 2021: Wire at 30° to magnetic field"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Force on wire in magnetic field",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Force between parallel wires",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Direction of force using hand rules",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Definition of Ampere problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Force on wire in magnetic field",
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
            pattern: "Force between parallel wires",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Attraction/repulsion of parallel currents",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Force on conductor",
            analogy: "Hose pipe in strong wind",
            mapping: "Current = water flow, magnetic field = wind, force pushes hose sideways"
          },
          {
            concept: "Parallel wires attracting",
            analogy: "Two boats moving in same direction",
            mapping: "Create currents that pull them together (Bernoulli effect)"
          }
        ],
        questions: [],
      },
      {
        id: "torque-current-loop",
        name: "Torque on Current Loop in Magnetic Field",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "A current loop in a magnetic field experiences a torque τ = NIAB sin θ = mB sin θ, where m = NIA is the magnetic dipole moment. The loop rotates to align its magnetic moment with the field. This is the principle behind electric motors and galvanometers.",
          realWorldAnalogy: "Like a compass needle aligning with Earth's field - the current loop has a magnetic moment that tries to align with the external field, causing rotation.",
          keyPoints: [
            "Torque: τ = NIAB sin θ = mB sin θ",
            "Magnetic dipole moment: m = NIA (direction by right-hand curl rule)",
            "Maximum torque when plane of loop ∥ to B (θ = 90°)",
            "Zero torque when plane ⊥ to B (θ = 0°, stable equilibrium)",
            "Potential energy: U = -mB cos θ",
            "Stable equilibrium: m ∥ B (U minimum)",
            "Unstable equilibrium: m anti-parallel to B (U maximum)"
          ],
          prerequisites: ["magnetic-field-ring", "force-current-conductor"]
        },
        formulas: [
          {
            id: "torque-loop",
            name: "Torque on Current Loop",
            category: "base",
            formula: "τ = NIAB sin θ",
            latex: "\\tau = NIAB\\sin\\theta = mB\\sin\\theta",
            description: "Torque on a current loop placed in uniform magnetic field",
            variables: [
              {
                symbol: "τ",
                meaning: "Torque on loop",
                unit: "N·m",
                typical_values: "10⁻⁶ to 10⁻² N·m"
              },
              {
                symbol: "N",
                meaning: "Number of turns",
                unit: "dimensionless",
                typical_values: "1-1000"
              },
              {
                symbol: "I",
                meaning: "Current in loop",
                unit: "A",
                typical_values: "0.01-10 A"
              },
              {
                symbol: "A",
                meaning: "Area of loop",
                unit: "m²",
                typical_values: "10⁻⁴ to 10⁻² m²"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "0.01-1 T"
              },
              {
                symbol: "θ",
                meaning: "Angle between m and B",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: "force-conductor",
            applications: [],
            specialCases: ["θ = 0: τ = 0 (stable equilibrium)", "θ = 180°: τ = 0 (unstable equilibrium)", "τ tends to decrease θ (align m with B)"],
            dimensionalCheck: "[τ] = [N][I][A][B] = A × m² × T = N·m",
          },
          {
            id: "potential-energy-dipole",
            name: "Potential Energy of Magnetic Dipole",
            category: "derived",
            formula: "U = -mB cos θ",
            latex: "U = -mB\\cos\\theta = -\\vec{m} \\cdot \\vec{B}",
            description: "Potential energy of magnetic dipole in external field",
            variables: [
              {
                symbol: "U",
                meaning: "Potential energy",
                unit: "J",
                typical_values: "10⁻⁶ to 10⁻³ J"
              },
              {
                symbol: "m",
                meaning: "Magnetic moment",
                unit: "A·m²",
                typical_values: "10⁻⁴ to 1 A·m²"
              }
            ],
            derivedFrom: "torque-loop",
            applications: [],
            specialCases: ["U = 0 when θ = 90°", "ΔU = 2mB for complete flip (0 to 180°)"],
            dimensionalCheck: "[U] = [m][B] = A·m² × T = J",
          },
          {
            id: "maximum-torque",
            name: "Maximum torque",
            category: "derived",
            formula: "\\tau_{max} = NIAB",
            latex: "\\tau_{max} = NIAB",
            description: "When θ = 90° (plane ∥ B)",
            variables: [],
            derivedFrom: "torque-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [N][I][A][B] = A × m² × T = N·m",
            neet_frequency: "high",
          },
          {
            id: "in-terms-of-moment",
            name: "In terms of moment",
            category: "derived",
            formula: "\\vec{\\tau} = \\vec{m} \\times \\vec{B}",
            latex: "\\vec{\\tau} = \\vec{m} \\times \\vec{B}",
            description: "Vector form",
            variables: [],
            derivedFrom: "torque-loop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [N][I][A][B] = A × m² × T = N·m",
            neet_frequency: "medium",
          },
          {
            id: "stable-position-0",
            name: "Stable position (θ = 0)",
            category: "derived",
            formula: "U_{min} = -mB",
            latex: "U_{min} = -mB",
            description: "m parallel to B",
            variables: [],
            derivedFrom: "potential-energy-dipole",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [m][B] = A·m² × T = J",
            neet_frequency: "high",
          },
          {
            id: "unstable-position-180",
            name: "Unstable position (θ = 180°)",
            category: "derived",
            formula: "U_{max} = +mB",
            latex: "U_{max} = +mB",
            description: "m anti-parallel to B",
            variables: [],
            derivedFrom: "potential-energy-dipole",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [m][B] = A·m² × T = J",
            neet_frequency: "medium",
          },
          {
            id: "work-to-rotate",
            name: "Work to rotate",
            category: "derived",
            formula: "W = \\Delta U = mB(\\cos\\theta_1 - \\cos\\theta_2)",
            latex: "W = \\Delta U = mB(\\cos\\theta_1 - \\cos\\theta_2)",
            description: "Work done by external agent",
            variables: [],
            derivedFrom: "potential-energy-dipole",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [m][B] = A·m² × T = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing θ = 0 means plane parallel to B",
            correct: "θ is angle between m and B. When θ = 0, m ∥ B, so plane ⊥ B",
            whyItHappens: "Confusing plane orientation with magnetic moment orientation",
            neetExample: "NEET 2020: When is torque maximum on coil?"
          },
          {
            mistake: "Getting wrong sign for potential energy",
            correct: "U = -mB cos θ. Minimum (stable) when m ∥ B (θ = 0)",
            whyItHappens: "Forgetting the negative sign",
            neetExample: "NEET 2019: Potential energy in stable vs unstable position"
          },
          {
            mistake: "Forgetting N (number of turns) in torque formula",
            correct: "τ = NIAB (not IAB). More turns = more torque.",
            whyItHappens: "Treating multi-turn coil as single loop",
            neetExample: "NEET 2021: Torque on 100-turn coil"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate torque on current loop",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Potential energy calculations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Work done to rotate loop",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Stable and unstable equilibrium",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Torque on coil in magnetic field",
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
            pattern: "Work done to rotate coil",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Equilibrium positions and stability",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Torque on current loop",
            analogy: "Compass needle in magnetic field",
            mapping: "Needle (like loop) rotates to align with field direction"
          },
          {
            concept: "Stable equilibrium",
            analogy: "Ball at bottom of bowl",
            mapping: "Loop at lowest energy position, disturbed it returns"
          }
        ],
        questions: [],
      },
      {
        id: "moving-coil-galvanometer",
        name: "Moving Coil Galvanometer",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "MCG measures current using torque on a coil in magnetic field. Deflection θ ∝ I. Current sensitivity = NAB/k (deflection per unit current). Radial magnetic field ensures linear scale. Can be converted to ammeter (low shunt) or voltmeter (high multiplier).",
          realWorldAnalogy: "Like a balance scale for current - the magnetic torque on coil balances spring torque, and deflection shows current strength.",
          keyPoints: [
            "Deflecting torque: τ = NIAB",
            "Restoring torque: τ' = kθ (k = spring constant)",
            "At equilibrium: NIAB = kθ → θ = (NAB/k)I",
            "Current sensitivity: SI = NAB/k (θ per unit I)",
            "Voltage sensitivity: SV = NAB/kR",
            "Radial field: B always perpendicular to coil, τ = NIAB (constant)",
            "Figure of merit: 1/SI (smaller = more sensitive)"
          ],
          prerequisites: ["torque-current-loop"]
        },
        formulas: [
          {
            id: "galvanometer-deflection",
            name: "Galvanometer Deflection",
            category: "base",
            formula: "θ = (NAB/k)I",
            latex: "\\theta = \\frac{NAB}{k}I",
            description: "Deflection of galvanometer needle for current I",
            variables: [
              {
                symbol: "θ",
                meaning: "Angular deflection",
                unit: "rad",
                typical_values: "0 to π/2"
              },
              {
                symbol: "N",
                meaning: "Number of turns",
                unit: "dimensionless",
                typical_values: "10-1000"
              },
              {
                symbol: "A",
                meaning: "Area of coil",
                unit: "m²",
                typical_values: "10⁻⁴ m²"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "0.1-0.5 T"
              },
              {
                symbol: "k",
                meaning: "Torsion constant",
                unit: "N·m/rad",
                typical_values: "10⁻⁷ to 10⁻⁵"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "μA to mA"
              }
            ],
            derivedFrom: "torque-loop",
            applications: [],
            specialCases: ["θ ∝ I (linear relationship)", "Higher NAB/k = more sensitive"],
            dimensionalCheck: "[θ] = [NAB/k][I] = rad",
          },
          {
            id: "galvanometer-ammeter",
            name: "Galvanometer to Ammeter Conversion",
            category: "derived",
            formula: "S = Ig·G/(I - Ig)",
            latex: "S = \\frac{I_g \\cdot G}{I - I_g}",
            description: "Shunt resistance to convert galvanometer to ammeter of range I",
            variables: [
              {
                symbol: "S",
                meaning: "Shunt resistance",
                unit: "Ω",
                typical_values: "Very small, < G"
              },
              {
                symbol: "G",
                meaning: "Galvanometer resistance",
                unit: "Ω",
                typical_values: "10-100 Ω"
              },
              {
                symbol: "Ig",
                meaning: "Full scale deflection current",
                unit: "A",
                typical_values: "mA"
              },
              {
                symbol: "I",
                meaning: "Desired ammeter range",
                unit: "A",
                typical_values: "1-10 A"
              }
            ],
            derivedFrom: "galvanometer-deflection",
            applications: [],
            specialCases: ["Shunt in parallel with galvanometer", "Most current bypasses through shunt", "Ammeter must have very low resistance"],
            dimensionalCheck: "[S] = Ω",
          },
          {
            id: "galvanometer-voltmeter",
            name: "Galvanometer to Voltmeter Conversion",
            category: "derived",
            formula: "R = V/Ig - G",
            latex: "R = \\frac{V}{I_g} - G",
            description: "High resistance in series to convert galvanometer to voltmeter",
            variables: [
              {
                symbol: "R",
                meaning: "Multiplier (high resistance)",
                unit: "Ω",
                typical_values: "kΩ to MΩ"
              },
              {
                symbol: "V",
                meaning: "Desired voltmeter range",
                unit: "V",
                typical_values: "1-100 V"
              }
            ],
            derivedFrom: "galvanometer-deflection",
            applications: [],
            specialCases: ["Multiplier in series with galvanometer", "Limits current to Ig at full voltage", "Voltmeter must have very high resistance"],
            dimensionalCheck: "[R] = Ω",
          },
          {
            id: "current-sensitivity",
            name: "Current sensitivity",
            category: "derived",
            formula: "S_I = \\frac{\\theta}{I} = \\frac{NAB}{k}",
            latex: "S_I = \\frac{\\theta}{I} = \\frac{NAB}{k}",
            description: "Deflection per ampere",
            variables: [],
            derivedFrom: "galvanometer-deflection",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = [NAB/k][I] = rad",
            neet_frequency: "high",
          },
          {
            id: "voltage-sensitivity",
            name: "Voltage sensitivity",
            category: "derived",
            formula: "S_V = \\frac{\\theta}{V} = \\frac{NAB}{kR}",
            latex: "S_V = \\frac{\\theta}{V} = \\frac{NAB}{kR}",
            description: "Deflection per volt",
            variables: [],
            derivedFrom: "galvanometer-deflection",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = [NAB/k][I] = rad",
            neet_frequency: "medium",
          },
          {
            id: "for-n-times-range",
            name: "For n times range",
            category: "derived",
            formula: "S = \\frac{G}{n-1}",
            latex: "S = \\frac{G}{n-1}",
            description: "When I = nIg",
            variables: [],
            derivedFrom: "galvanometer-ammeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = Ω",
            neet_frequency: "high",
          },
          {
            id: "effective-resistance",
            name: "Effective resistance",
            category: "derived",
            formula: "R_A = \\frac{SG}{S+G} \\approx S",
            latex: "R_A = \\frac{SG}{S+G} \\approx S",
            description: "Ammeter has low resistance",
            variables: [],
            derivedFrom: "galvanometer-ammeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[S] = Ω",
            neet_frequency: "medium",
          },
          {
            id: "for-n-times-range-2",
            name: "For n times range",
            category: "derived",
            formula: "R = (n-1)G",
            latex: "R = (n-1)G",
            description: "When V = nVg",
            variables: [],
            derivedFrom: "galvanometer-voltmeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = Ω",
            neet_frequency: "high",
          },
          {
            id: "effective-resistance-2",
            name: "Effective resistance",
            category: "derived",
            formula: "R_V = G + R",
            latex: "R_V = G + R",
            description: "Voltmeter has high resistance",
            variables: [],
            derivedFrom: "galvanometer-voltmeter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = Ω",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing shunt (ammeter) and multiplier (voltmeter) connections",
            correct: "Shunt is in PARALLEL (ammeter). Multiplier is in SERIES (voltmeter).",
            whyItHappens: "Not understanding why low/high resistance is needed",
            neetExample: "NEET 2020: Convert galvanometer to ammeter of 5A range"
          },
          {
            mistake: "Using wrong formula for shunt calculation",
            correct: "S = IgG/(I-Ig) or S = G/(n-1). Remember I is total ammeter range.",
            whyItHappens: "Confusing Ig (galvanometer current) with I (ammeter range)",
            neetExample: "NEET 2019: Shunt resistance for given ammeter range"
          },
          {
            mistake: "Thinking ammeter should have high resistance",
            correct: "Ammeter MUST have low resistance to not affect circuit. Voltmeter needs high R.",
            whyItHappens: "Not understanding ideal meter properties",
            neetExample: "NEET 2021: Why is shunt resistance small?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate shunt for ammeter conversion",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Calculate multiplier for voltmeter",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Current sensitivity problems",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Why radial field is used",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Shunt resistance calculation",
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
            pattern: "Multiplier resistance calculation",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Current/voltage sensitivity",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Galvanometer operation",
            analogy: "Weighing scale with spring",
            mapping: "Current creates torque, spring balances it, deflection shows value"
          },
          {
            concept: "Shunt for ammeter",
            analogy: "Bypass road for heavy traffic",
            mapping: "Most current takes the bypass (shunt), only small current through galvanometer"
          }
        ],
        questions: [],
      }
    ];