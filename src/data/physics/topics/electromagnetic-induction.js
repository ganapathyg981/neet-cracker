// Electromagnetic Induction - 3% weightage (Tier 2)
// NCERT Class 12, Chapter 6

export const electromagneticInductionTopics = [
      {
        id: "faradays-laws",
        name: "Faraday's Laws of Electromagnetic Induction",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Faraday's first law: A changing magnetic flux through a circuit induces an EMF. Faraday's second law: The induced EMF equals the negative rate of change of magnetic flux. This is the foundation of generators, transformers, and all electromagnetic induction phenomena.",
          realWorldAnalogy: "Like squeezing a tube of toothpaste - the faster you squeeze (change flux), the more comes out (induced EMF). Lenz's law says the toothpaste 'resists' being squeezed.",
          keyPoints: [
            "First law: Changing magnetic flux induces EMF",
            "Second law: ε = -dΦ/dt (magnitude equals rate of flux change)",
            "Magnetic flux: Φ = B·A·cos θ = ∫B·dA",
            "Flux linkage for N turns: NΦ",
            "EMF induced = -N(dΦ/dt)",
            "Ways to change flux: change B, A, or θ",
            "Negative sign represents Lenz's law (opposition)"
          ],
          prerequisites: ["magnetic-field-basics"]
        },
        formulas: [
          {
            id: "magnetic-flux",
            name: "Magnetic Flux",
            category: "base",
            formula: "Φ = B·A cos θ",
            latex: "\\Phi = BA\\cos\\theta = \\vec{B} \\cdot \\vec{A}",
            description: "Magnetic flux through a surface of area A",
            variables: [
              {
                symbol: "Φ",
                meaning: "Magnetic flux",
                unit: "Wb (Weber)",
                typical_values: "mWb to Wb"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "0.01-1 T"
              },
              {
                symbol: "A",
                meaning: "Area of surface",
                unit: "m²",
                typical_values: "10⁻⁴ to 1 m²"
              },
              {
                symbol: "θ",
                meaning: "Angle between B and area normal",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["1 Wb = 1 T·m² = 1 V·s", "Flux is scalar (dot product of vectors)"],
            dimensionalCheck: "[Φ] = [B][A] = T·m² = Wb",
          },
          {
            id: "faraday-law-emf",
            name: "Faraday's Law of EMF",
            category: "base",
            formula: "ε = -N(dΦ/dt)",
            latex: "\\varepsilon = -N\\frac{d\\Phi}{dt}",
            description: "Induced EMF equals negative rate of change of flux linkage",
            variables: [
              {
                symbol: "ε",
                meaning: "Induced EMF",
                unit: "V",
                typical_values: "mV to kV"
              },
              {
                symbol: "N",
                meaning: "Number of turns",
                unit: "dimensionless",
                typical_values: "1-10000"
              },
              {
                symbol: "dΦ/dt",
                meaning: "Rate of change of flux",
                unit: "Wb/s",
                typical_values: "Varies"
              }
            ],
            derivedFrom: "magnetic-flux",
            applications: [],
            specialCases: ["ε = 0 if Φ is constant (no change)", "Faster change → larger EMF"],
            dimensionalCheck: "[ε] = [Φ]/[t] = Wb/s = V",
          },
          {
            id: "induced-charge",
            name: "Induced Charge",
            category: "derived",
            formula: "q = NΔΦ/R",
            latex: "q = \\frac{N\\Delta\\Phi}{R}",
            description: "Total charge induced when flux changes by ΔΦ",
            variables: [
              {
                symbol: "q",
                meaning: "Induced charge",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "R",
                meaning: "Resistance of circuit",
                unit: "Ω",
                typical_values: "1-1000 Ω"
              },
              {
                symbol: "ΔΦ",
                meaning: "Change in flux",
                unit: "Wb",
                typical_values: "Depends on change"
              }
            ],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: ["q is independent of time taken for change", "Same ΔΦ gives same q regardless of speed"],
            dimensionalCheck: "[q] = [Φ]/[R] = V·s/Ω = C",
          },
          {
            id: "perpendicular-field",
            name: "Perpendicular field",
            category: "derived",
            formula: "\\Phi = BA",
            latex: "\\Phi = BA",
            description: "θ = 0°, maximum flux",
            variables: [],
            derivedFrom: "magnetic-flux",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [B][A] = T·m² = Wb",
            neet_frequency: "high",
          },
          {
            id: "parallel-field",
            name: "Parallel field",
            category: "derived",
            formula: "\\Phi = 0",
            latex: "\\Phi = 0",
            description: "θ = 90°, zero flux",
            variables: [],
            derivedFrom: "magnetic-flux",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [B][A] = T·m² = Wb",
            neet_frequency: "medium",
          },
          {
            id: "average-emf",
            name: "Average EMF",
            category: "derived",
            formula: "\\varepsilon_{avg} = -N\\frac{\\Delta\\Phi}{\\Delta t}",
            latex: "\\varepsilon_{avg} = -N\\frac{\\Delta\\Phi}{\\Delta t}",
            description: "For finite time interval",
            variables: [],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [Φ]/[t] = Wb/s = V",
            neet_frequency: "high",
          },
          {
            id: "flux-changing-uniformly",
            name: "Flux changing uniformly",
            category: "derived",
            formula: "\\varepsilon = -N\\frac{\\Phi_2 - \\Phi_1}{t}",
            latex: "\\varepsilon = -N\\frac{\\Phi_2 - \\Phi_1}{t}",
            description: "Constant rate of change",
            variables: [],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [Φ]/[t] = Wb/s = V",
            neet_frequency: "high",
          },
          {
            id: "ballistic-galvanometer",
            name: "Ballistic galvanometer",
            category: "derived",
            formula: "q = \\frac{N(\\Phi_f - \\Phi_i)}{R}",
            latex: "q = \\frac{N(\\Phi_f - \\Phi_i)}{R}",
            description: "Measures total charge, not current",
            variables: [],
            derivedFrom: "induced-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = [Φ]/[R] = V·s/Ω = C",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking EMF is induced only when magnet moves",
            correct: "EMF is induced whenever FLUX changes - can be due to B, A, or θ changing.",
            whyItHappens: "Focusing on magnet motion only",
            neetExample: "NEET 2020: Coil rotates in uniform B field"
          },
          {
            mistake: "Forgetting N in the EMF formula for multi-turn coil",
            correct: "ε = -N(dΦ/dt), not just -dΦ/dt. Each turn contributes.",
            whyItHappens: "Treating multi-turn as single turn",
            neetExample: "NEET 2019: EMF in 100-turn coil"
          },
          {
            mistake: "Confusing flux with flux linkage",
            correct: "Flux Φ through one turn. Flux linkage = NΦ (total for N turns).",
            whyItHappens: "Using terms interchangeably",
            neetExample: "NEET 2021: Flux linkage of solenoid"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate induced EMF from flux change",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Find induced charge",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Conditions for EMF induction",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "EMF from rate of flux change",
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
            pattern: "Induced charge calculation",
            frequency: "medium",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Flux calculation through coil",
            frequency: "high",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Faraday's law",
            analogy: "Squeezing water from sponge",
            mapping: "Faster squeeze (flux change) = more water flow (EMF)"
          },
          {
            concept: "Flux as field lines",
            analogy: "Rain through window",
            mapping: "More rain (B), bigger window (A), perpendicular (θ=0) = more gets through"
          }
        ],
        questions: [],
      },
      {
        id: "lenzs-law",
        name: "Lenz's Law and Energy Conservation",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Lenz's law states that induced EMF always opposes the change that causes it. This is the negative sign in Faraday's law. It's a consequence of conservation of energy - if induced current aided the change, we'd get perpetual motion. The induced current creates a magnetic field opposing the flux change.",
          realWorldAnalogy: "Like inertia for magnetism - the system resists change. If you push a magnet toward a coil, the coil creates a field that pushes back, like a spring resisting compression.",
          keyPoints: [
            "Induced EMF opposes the CHANGE in flux, not the flux itself",
            "If flux increases → induced current creates opposing B",
            "If flux decreases → induced current creates supporting B",
            "Consequence of energy conservation",
            "Explains why we need to do work to generate electricity",
            "Eddy currents also follow Lenz's law"
          ],
          prerequisites: ["faradays-laws"]
        },
        formulas: [
          {
            id: "lenz-direction",
            name: "Lenz's Law Direction Rule",
            category: "base",
            formula: "ε = -dΦ/dt (negative sign = opposition)",
            latex: "\\varepsilon = -\\frac{d\\Phi}{dt}",
            description: "The negative sign represents opposition to flux change",
            variables: [
              {
                symbol: "-",
                meaning: "Opposition to change",
                unit: "N/A",
                typical_values: "Direction indicator"
              }
            ],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: ["Use right-hand rule to find current direction", "Induced current always acts to maintain status quo"],
            dimensionalCheck: "Direction determination",
          },
          {
            id: "work-against-lenz",
            name: "Work Done Against Induced EMF",
            category: "derived",
            formula: "W = ∫ε·I dt = q·ε",
            latex: "W = \\int \\varepsilon I \\, dt",
            description: "Work done by external agent against Lenz's law opposition",
            variables: [
              {
                symbol: "W",
                meaning: "Work done",
                unit: "J",
                typical_values: "mJ to J"
              }
            ],
            derivedFrom: "lenz-direction",
            applications: [],
            specialCases: ["No free energy - must do work to generate EMF", "Conservation of energy maintained"],
            dimensionalCheck: "[W] = J",
          },
          {
            id: "flux-increasing",
            name: "Flux increasing",
            category: "derived",
            formula: "B_{induced} \\text{ opposes } B_{external}",
            latex: "B_{induced} \\text{ opposes } B_{external}",
            description: "Creates field to reduce net flux",
            variables: [],
            derivedFrom: "lenz-direction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Direction determination",
            neet_frequency: "high",
          },
          {
            id: "flux-decreasing",
            name: "Flux decreasing",
            category: "derived",
            formula: "B_{induced} \\text{ supports } B_{external}",
            latex: "B_{induced} \\text{ supports } B_{external}",
            description: "Creates field to maintain flux",
            variables: [],
            derivedFrom: "lenz-direction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Direction determination",
            neet_frequency: "high",
          },
          {
            id: "generator-work",
            name: "Generator work",
            category: "derived",
            formula: "W_{mechanical} = W_{electrical}",
            latex: "W_{mechanical} = W_{electrical}",
            description: "Mechanical input → electrical output",
            variables: [],
            derivedFrom: "work-against-lenz",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking induced field opposes external field directly",
            correct: "Induced field opposes the CHANGE in flux, not the external field itself.",
            whyItHappens: "Misreading \"opposes the change\"",
            neetExample: "NEET 2020: N-pole approaching coil, direction of induced current"
          },
          {
            mistake: "Wrong direction using right-hand rule",
            correct: "First find direction of B_induced (opposite to change), then use RH rule for current.",
            whyItHappens: "Skipping the intermediate step",
            neetExample: "NEET 2019: Current direction when flux increases"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Direction of induced current",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Lenz's law as conservation of energy",
            difficulty: "easy"
          },
          {
            type: "application",
            description: "Magnet approaching/leaving coil",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Direction of induced current",
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
            pattern: "Lenz's law and energy conservation",
            frequency: "medium",
            yearAsked: [2019, 2021]
          }
        ],
        analogies: [
          {
            concept: "Lenz's law",
            analogy: "Spring resistance",
            mapping: "Push spring → it pushes back. Pull magnet toward coil → coil pushes back."
          },
          {
            concept: "Opposition to change",
            analogy: "Inertia",
            mapping: "Just as mass resists change in motion, induced current resists change in flux"
          }
        ],
        questions: [],
      },
      {
        id: "motional-emf",
        name: "Motional EMF",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "When a conductor moves through a magnetic field, an EMF is induced: ε = Blv (for perpendicular motion). This is due to magnetic force on free electrons in the moving conductor. The EMF causes current if circuit is complete, and power is generated at the expense of mechanical work.",
          realWorldAnalogy: "Like a snow plow collecting snow - as conductor moves through field, it 'sweeps' through magnetic flux, and the rate of sweeping determines the EMF.",
          keyPoints: [
            "Motional EMF: ε = Blv (l = length, v = velocity)",
            "Direction by Lenz's law or F = qv × B on electrons",
            "For rod of length l moving perpendicular to B: ε = Blv",
            "If rod rotates: ε varies with position",
            "Power: P = ε²/R = B²l²v²/R (dissipated as heat)",
            "Force needed: F = BIl = B²l²v/R (to maintain velocity)",
            "Motional EMF = rate of area swept × B"
          ],
          prerequisites: ["faradays-laws", "lenzs-law"]
        },
        formulas: [
          {
            id: "motional-emf-rod",
            name: "EMF in Moving Rod",
            category: "base",
            formula: "ε = Blv",
            latex: "\\varepsilon = Blv",
            description: "EMF induced in rod moving perpendicular to field and its length",
            variables: [
              {
                symbol: "ε",
                meaning: "Induced EMF",
                unit: "V",
                typical_values: "mV to V"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "0.1-1 T"
              },
              {
                symbol: "l",
                meaning: "Length of rod",
                unit: "m",
                typical_values: "0.1-1 m"
              },
              {
                symbol: "v",
                meaning: "Velocity of rod",
                unit: "m/s",
                typical_values: "1-10 m/s"
              }
            ],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: ["ε = 0 if v ∥ B or v ∥ l", "Maximum when v ⊥ B ⊥ l (mutually perpendicular)"],
            dimensionalCheck: "[ε] = [B][l][v] = T·m·m/s = V",
          },
          {
            id: "rotating-rod-emf",
            name: "EMF in Rotating Rod",
            category: "derived",
            formula: "ε = ½Bωl² = ½Bl²(2πf)",
            latex: "\\varepsilon = \\frac{1}{2}B\\omega l^2 = \\frac{1}{2}Bl^2(2\\pi f)",
            description: "EMF induced in rod rotating about one end in uniform field",
            variables: [
              {
                symbol: "ω",
                meaning: "Angular velocity",
                unit: "rad/s",
                typical_values: "10-100 rad/s"
              },
              {
                symbol: "l",
                meaning: "Length of rod",
                unit: "m",
                typical_values: "0.1-1 m"
              },
              {
                symbol: "f",
                meaning: "Frequency of rotation",
                unit: "Hz",
                typical_values: "1-50 Hz"
              }
            ],
            derivedFrom: "motional-emf-rod",
            applications: [],
            specialCases: ["EMF is DC (constant) for uniform rotation", "Center of rod can be used as pivot too"],
            dimensionalCheck: "[ε] = [B][ω][l²] = T·rad/s·m² = V",
          },
          {
            id: "force-on-moving-rod",
            name: "Force on Current-Carrying Moving Rod",
            category: "derived",
            formula: "F = BIl = B²l²v/R",
            latex: "F = BIl = \\frac{B^2l^2v}{R}",
            description: "Magnetic force on rod carrying induced current",
            variables: [
              {
                symbol: "F",
                meaning: "Magnetic force",
                unit: "N",
                typical_values: "mN to N"
              },
              {
                symbol: "I",
                meaning: "Induced current = ε/R",
                unit: "A",
                typical_values: "mA to A"
              },
              {
                symbol: "R",
                meaning: "Resistance of circuit",
                unit: "Ω",
                typical_values: "1-100 Ω"
              }
            ],
            derivedFrom: "motional-emf-rod",
            applications: [],
            specialCases: ["Force opposes motion (Lenz's law)", "External force needed to maintain constant v"],
            dimensionalCheck: "[F] = N",
          },
          {
            id: "general-case",
            name: "General case",
            category: "derived",
            formula: "\\varepsilon = Blv\\sin\\theta",
            latex: "\\varepsilon = Blv\\sin\\theta",
            description: "v at angle θ to B",
            variables: [],
            derivedFrom: "motional-emf-rod",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [B][l][v] = T·m·m/s = V",
            neet_frequency: "high",
          },
          {
            id: "rate-of-flux-cutting",
            name: "Rate of flux cutting",
            category: "derived",
            formula: "\\varepsilon = B\\frac{dA}{dt} = Blv",
            latex: "\\varepsilon = B\\frac{dA}{dt} = Blv",
            description: "Area swept per unit time",
            variables: [],
            derivedFrom: "motional-emf-rod",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [B][l][v] = T·m·m/s = V",
            neet_frequency: "high",
          },
          {
            id: "rotating-disc",
            name: "Rotating disc",
            category: "derived",
            formula: "\\varepsilon = \\frac{1}{2}B\\omega R^2",
            latex: "\\varepsilon = \\frac{1}{2}B\\omega R^2",
            description: "Disc of radius R",
            variables: [],
            derivedFrom: "rotating-rod-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [B][ω][l²] = T·rad/s·m² = V",
            neet_frequency: "high",
          },
          {
            id: "power-dissipated",
            name: "Power dissipated",
            category: "derived",
            formula: "P = Fv = \\frac{B^2l^2v^2}{R}",
            latex: "P = Fv = \\frac{B^2l^2v^2}{R}",
            description: "Mechanical power → electrical",
            variables: [],
            derivedFrom: "force-on-moving-rod",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          },
          {
            id: "terminal-velocity",
            name: "Terminal velocity",
            category: "derived",
            formula: "v_t = \\frac{mgR}{B^2l^2}",
            latex: "v_t = \\frac{mgR}{B^2l^2}",
            description: "When gravity balances magnetic force",
            variables: [],
            derivedFrom: "force-on-moving-rod",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using ε = Blv when v is not perpendicular to both B and l",
            correct: "ε = Blv sin θ where θ is angle between v and the perpendicular to both B and l.",
            whyItHappens: "Assuming perpendicular arrangement always",
            neetExample: "NEET 2020: Rod moving at angle to magnetic field"
          },
          {
            mistake: "Forgetting the ½ factor for rotating rod",
            correct: "For rod rotating about one end: ε = ½Bωl². The ½ comes from average velocity.",
            whyItHappens: "Using linear formula for rotating case",
            neetExample: "NEET 2019: EMF in rod rotating in magnetic field"
          },
          {
            mistake: "Wrong direction of induced EMF/current",
            correct: "Use Lenz's law or right-hand rule: force on positive charges gives EMF direction.",
            whyItHappens: "Not applying correct rule",
            neetExample: "NEET 2021: Polarity of ends of moving rod"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "EMF in rod moving in magnetic field",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Rotating rod/disc EMF",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Terminal velocity of falling rod",
            difficulty: "hard"
          },
          {
            type: "conceptual",
            description: "Direction of EMF using hand rules",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "EMF = Blv calculations",
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
            pattern: "Rotating rod EMF",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Power and force in moving rod",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Motional EMF",
            analogy: "Plowing through field",
            mapping: "Faster you plow (velocity), wider the plow (length), denser the field → more EMF"
          },
          {
            concept: "Rotating rod",
            analogy: "Fan blade sweeping air",
            mapping: "Outer parts move faster, sweep more area, contribute more to EMF"
          }
        ],
        questions: [],
      },
      {
        id: "self-induction",
        name: "Self-Induction and Inductance",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "When current in a coil changes, it induces an EMF in itself that opposes the change - this is self-induction. Self-inductance L relates flux linkage to current: NΦ = LI. Induced EMF: ε = -L(dI/dt). Unit of L is Henry (H). Inductance is like electrical inertia.",
          realWorldAnalogy: "Like a heavy flywheel that resists changes in rotation speed - an inductor resists changes in current. Takes time to speed up (current increase) and coasts when you stop pushing (back-EMF).",
          keyPoints: [
            "Self-inductance: L = NΦ/I (flux linkage per unit current)",
            "Self-induced EMF: ε = -L(dI/dt)",
            "Unit: 1 Henry = 1 Wb/A = 1 V·s/A",
            "For solenoid: L = μ₀n²Al = μ₀N²A/l",
            "Energy stored: U = ½LI²",
            "L depends on geometry, not on current",
            "Inductors oppose changes in current (electrical inertia)"
          ],
          prerequisites: ["faradays-laws"]
        },
        formulas: [
          {
            id: "self-inductance",
            name: "Self-Inductance",
            category: "base",
            formula: "L = NΦ/I",
            latex: "L = \\frac{N\\Phi}{I}",
            description: "Self-inductance defined as flux linkage per unit current",
            variables: [
              {
                symbol: "L",
                meaning: "Self-inductance",
                unit: "H (Henry)",
                typical_values: "μH to H"
              },
              {
                symbol: "N",
                meaning: "Number of turns",
                unit: "dimensionless",
                typical_values: "10-10000"
              },
              {
                symbol: "Φ",
                meaning: "Flux through each turn",
                unit: "Wb",
                typical_values: "μWb to mWb"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "0.1-10 A"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["L depends only on geometry and medium", "Adding core: L increases by factor μr"],
            dimensionalCheck: "[L] = [Φ]/[I] = Wb/A = H",
          },
          {
            id: "self-induced-emf",
            name: "Self-Induced EMF",
            category: "derived",
            formula: "ε = -L(dI/dt)",
            latex: "\\varepsilon = -L\\frac{dI}{dt}",
            description: "EMF induced in coil due to change in its own current",
            variables: [
              {
                symbol: "ε",
                meaning: "Self-induced EMF (back-EMF)",
                unit: "V",
                typical_values: "mV to kV"
              },
              {
                symbol: "dI/dt",
                meaning: "Rate of change of current",
                unit: "A/s",
                typical_values: "1-10⁶ A/s"
              }
            ],
            derivedFrom: "self-inductance",
            applications: [],
            specialCases: ["Back-EMF opposes current change", "Large L or fast change → large back-EMF (sparks when switching off)"],
            dimensionalCheck: "[ε] = [L][dI/dt] = H × A/s = V",
          },
          {
            id: "energy-inductor",
            name: "Energy Stored in Inductor",
            category: "derived",
            formula: "U = ½LI²",
            latex: "U = \\frac{1}{2}LI^2",
            description: "Energy stored in magnetic field of inductor",
            variables: [
              {
                symbol: "U",
                meaning: "Stored energy",
                unit: "J",
                typical_values: "mJ to J"
              }
            ],
            derivedFrom: "self-inductance",
            applications: [],
            specialCases: ["Energy stored in magnetic field, not in coil itself", "Compare with capacitor: U = ½CV²"],
            dimensionalCheck: "[U] = [L][I²] = H × A² = J",
          },
          {
            id: "solenoid",
            name: "Solenoid",
            category: "derived",
            formula: "L = \\mu_0 n^2 Al = \\frac{\\mu_0 N^2 A}{l}",
            latex: "L = \\mu_0 n^2 Al = \\frac{\\mu_0 N^2 A}{l}",
            description: "n = N/l",
            variables: [],
            derivedFrom: "self-inductance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = [Φ]/[I] = Wb/A = H",
            neet_frequency: "high",
          },
          {
            id: "with-core",
            name: "With core",
            category: "derived",
            formula: "L = \\mu_0\\mu_r n^2 Al",
            latex: "L = \\mu_0\\mu_r n^2 Al",
            description: "μr times air-core value",
            variables: [],
            derivedFrom: "self-inductance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = [Φ]/[I] = Wb/A = H",
            neet_frequency: "high",
          },
          {
            id: "dc-steady-state",
            name: "DC steady state",
            category: "derived",
            formula: "\\varepsilon = 0",
            latex: "\\varepsilon = 0",
            description: "dI/dt = 0, no back-EMF",
            variables: [],
            derivedFrom: "self-induced-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [L][dI/dt] = H × A/s = V",
            neet_frequency: "medium",
          },
          {
            id: "sudden-change",
            name: "Sudden change",
            category: "derived",
            formula: "\\varepsilon = -L\\frac{\\Delta I}{\\Delta t}",
            latex: "\\varepsilon = -L\\frac{\\Delta I}{\\Delta t}",
            description: "Can be very large for fast changes",
            variables: [],
            derivedFrom: "self-induced-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [L][dI/dt] = H × A/s = V",
            neet_frequency: "high",
          },
          {
            id: "energy-density",
            name: "Energy density",
            category: "derived",
            formula: "u = \\frac{B^2}{2\\mu_0}",
            latex: "u = \\frac{B^2}{2\\mu_0}",
            description: "Energy per unit volume",
            variables: [],
            derivedFrom: "energy-inductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [L][I²] = H × A² = J",
            neet_frequency: "high",
          },
          {
            id: "in-terms-of-b",
            name: "In terms of B",
            category: "derived",
            formula: "U = \\frac{B^2}{2\\mu_0} \\times \\text{Volume}",
            latex: "U = \\frac{B^2}{2\\mu_0} \\times \\text{Volume}",
            description: "For uniform field",
            variables: [],
            derivedFrom: "energy-inductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [L][I²] = H × A² = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking inductance depends on current",
            correct: "L = NΦ/I where Φ ∝ I, so L is independent of I. Depends only on geometry.",
            whyItHappens: "Seeing I in formula and thinking L changes with I",
            neetExample: "NEET 2020: How does doubling current affect inductance?"
          },
          {
            mistake: "Confusing U = ½LI² with U = ½CV²",
            correct: "For inductor: U = ½LI². For capacitor: U = ½CV². Don't mix them.",
            whyItHappens: "Similar formula structure",
            neetExample: "NEET 2019: Energy stored in inductor carrying 2A"
          },
          {
            mistake: "Forgetting back-EMF opposes change, not current itself",
            correct: "Back-EMF opposes increase in current (not current direction) and opposes decrease too.",
            whyItHappens: "Thinking opposition is always to current flow",
            neetExample: "NEET 2021: Direction of back-EMF when current increases/decreases"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate inductance of solenoid",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Self-induced EMF",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Energy stored in inductor",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Effect of core on inductance",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Inductance of solenoid",
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
            pattern: "Energy stored in inductor",
            frequency: "high",
            yearAsked: [2019, 2020, 2021]
          },
          {
            pattern: "Back-EMF calculation",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Self-inductance",
            analogy: "Flywheel inertia",
            mapping: "Heavy flywheel resists speed change; inductor resists current change"
          },
          {
            concept: "Energy in inductor",
            analogy: "Kinetic energy of flywheel",
            mapping: "U = ½Iω² for flywheel; U = ½LI² for inductor"
          }
        ],
        questions: [],
      },
      {
        id: "mutual-induction",
        name: "Mutual Induction",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "When current in one coil changes, it induces EMF in a nearby coil - this is mutual induction. Mutual inductance M relates the flux in one coil to current in another: Φ₂ = MI₁. The coefficient M is same for both directions (reciprocity). Transformers work on this principle.",
          realWorldAnalogy: "Like adjacent tuning forks - when one vibrates, it makes the other vibrate too through the shared medium. Similarly, changing current in one coil affects another through shared magnetic flux.",
          keyPoints: [
            "Mutual inductance: M = N₂Φ₂₁/I₁ = N₁Φ₁₂/I₂",
            "EMF induced in secondary: ε₂ = -M(dI₁/dt)",
            "M₁₂ = M₂₁ = M (reciprocity theorem)",
            "For coaxial solenoids: M = μ₀n₁n₂Al",
            "Coupling coefficient: k = M/√(L₁L₂), where 0 ≤ k ≤ 1",
            "Perfect coupling: M = √(L₁L₂) when k = 1",
            "Unit of M: Henry (same as self-inductance)"
          ],
          prerequisites: ["self-induction"]
        },
        formulas: [
          {
            id: "mutual-inductance",
            name: "Mutual Inductance",
            category: "base",
            formula: "M = N₂Φ₂₁/I₁",
            latex: "M = \\frac{N_2\\Phi_{21}}{I_1}",
            description: "Mutual inductance defined as flux linkage in coil 2 per unit current in coil 1",
            variables: [
              {
                symbol: "M",
                meaning: "Mutual inductance",
                unit: "H",
                typical_values: "μH to H"
              },
              {
                symbol: "Φ₂₁",
                meaning: "Flux through coil 2 due to coil 1",
                unit: "Wb",
                typical_values: "μWb to mWb"
              },
              {
                symbol: "N₂",
                meaning: "Turns in secondary coil",
                unit: "dimensionless",
                typical_values: "10-10000"
              },
              {
                symbol: "I₁",
                meaning: "Current in primary coil",
                unit: "A",
                typical_values: "0.1-10 A"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["M depends on geometry and relative position", "M = 0 if no flux links the two coils"],
            dimensionalCheck: "[M] = H",
          },
          {
            id: "mutual-induced-emf",
            name: "Mutually Induced EMF",
            category: "derived",
            formula: "ε₂ = -M(dI₁/dt)",
            latex: "\\varepsilon_2 = -M\\frac{dI_1}{dt}",
            description: "EMF induced in secondary coil due to changing current in primary",
            variables: [
              {
                symbol: "ε₂",
                meaning: "EMF induced in secondary",
                unit: "V",
                typical_values: "mV to kV"
              },
              {
                symbol: "dI₁/dt",
                meaning: "Rate of change of primary current",
                unit: "A/s",
                typical_values: "1-10⁶ A/s"
              }
            ],
            derivedFrom: "mutual-inductance",
            applications: [],
            specialCases: ["Negative sign: opposes change (Lenz's law)", "Used in transformers, induction coils"],
            dimensionalCheck: "[ε] = [M][dI/dt] = V",
          },
          {
            id: "coupling-coefficient",
            name: "Coupling Coefficient",
            category: "derived",
            formula: "k = M/√(L₁L₂)",
            latex: "k = \\frac{M}{\\sqrt{L_1 L_2}}",
            description: "Measure of how well two coils are magnetically coupled",
            variables: [
              {
                symbol: "k",
                meaning: "Coupling coefficient",
                unit: "dimensionless",
                typical_values: "0 to 1"
              },
              {
                symbol: "L₁, L₂",
                meaning: "Self-inductances of coils",
                unit: "H",
                typical_values: "μH to H"
              }
            ],
            derivedFrom: "mutual-inductance",
            applications: [],
            specialCases: ["k = 1 for ideal transformer", "k < 1 in practice due to flux leakage"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "two-coaxial-solenoids",
            name: "Two coaxial solenoids",
            category: "derived",
            formula: "M = \\mu_0 \\frac{N_1 N_2 A}{l}",
            latex: "M = \\mu_0 \\frac{N_1 N_2 A}{l}",
            description: "A = common area, l = length",
            variables: [],
            derivedFrom: "mutual-inductance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[M] = H",
            neet_frequency: "high",
          },
          {
            id: "with-core",
            name: "With core",
            category: "derived",
            formula: "M = \\mu_0\\mu_r \\frac{N_1 N_2 A}{l}",
            latex: "M = \\mu_0\\mu_r \\frac{N_1 N_2 A}{l}",
            description: "Core increases M",
            variables: [],
            derivedFrom: "mutual-inductance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[M] = H",
            neet_frequency: "medium",
          },
          {
            id: "reciprocity",
            name: "Reciprocity",
            category: "derived",
            formula: "\\varepsilon_1 = -M\\frac{dI_2}{dt}",
            latex: "\\varepsilon_1 = -M\\frac{dI_2}{dt}",
            description: "Same M in both directions",
            variables: [],
            derivedFrom: "mutual-induced-emf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = [M][dI/dt] = V",
            neet_frequency: "high",
          },
          {
            id: "perfect-coupling",
            name: "Perfect coupling",
            category: "derived",
            formula: "M = \\sqrt{L_1 L_2}",
            latex: "M = \\sqrt{L_1 L_2}",
            description: "k = 1, all flux links both coils",
            variables: [],
            derivedFrom: "coupling-coefficient",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "no-coupling",
            name: "No coupling",
            category: "derived",
            formula: "M = 0",
            latex: "M = 0",
            description: "k = 0, coils magnetically isolated",
            variables: [],
            derivedFrom: "coupling-coefficient",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking M₁₂ ≠ M₂₁",
            correct: "M₁₂ = M₂₁ = M (reciprocity). Mutual inductance is same in both directions.",
            whyItHappens: "Asymmetric coil arrangements seem different",
            neetExample: "NEET 2020: Mutual inductance of two coils"
          },
          {
            mistake: "Using M > √(L₁L₂) in calculations",
            correct: "Maximum M = √(L₁L₂) when k = 1. M cannot exceed this value.",
            whyItHappens: "Not checking physical limits",
            neetExample: "NEET 2019: Is given M physically possible?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate mutual inductance",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "EMF induced in secondary",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Coupling coefficient",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Factors affecting mutual inductance",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Mutual inductance of coaxial coils",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "EMF in secondary coil",
            frequency: "high",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Coupling coefficient",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Mutual induction",
            analogy: "Tuning forks resonating",
            mapping: "Vibration of one affects the other through shared medium (air/magnetic field)"
          }
        ],
        questions: [],
      },
      {
        id: "eddy-currents",
        name: "Eddy Currents and Applications",
        weightage: 1,
        difficulty: "easy",
        theory: {
          summary: "When a conductor moves through a magnetic field or is in a changing field, currents are induced throughout its volume - these are eddy currents. They cause heating (loss in transformers) but are useful for braking, induction heating, and electromagnetic damping. Laminated cores reduce eddy current losses.",
          realWorldAnalogy: "Like swirling water when you drag a paddle - the conductor 'stirs up' circular currents in response to flux changes. These eddies convert kinetic/magnetic energy to heat.",
          keyPoints: [
            "Eddy currents: induced currents in bulk conductors",
            "Follow Lenz's law: oppose the change causing them",
            "Cause I²R heating (eddy current losses)",
            "Reduced by laminating cores (thin insulated sheets)",
            "Applications: magnetic braking, induction furnace, speedometer",
            "Electromagnetic damping: eddy currents provide resistive force",
            "Skin effect: at high frequency, current flows near surface"
          ],
          prerequisites: ["faradays-laws", "lenzs-law"]
        },
        formulas: [
          {
            id: "eddy-current-loss",
            name: "Eddy Current Power Loss",
            category: "derived",
            formula: "P ∝ B²f²t²",
            latex: "P \\propto B^2 f^2 t^2",
            description: "Power loss due to eddy currents in a conductor",
            variables: [
              {
                symbol: "P",
                meaning: "Power loss",
                unit: "W",
                typical_values: "Watts to kW"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "0.1-1 T"
              },
              {
                symbol: "f",
                meaning: "Frequency of field change",
                unit: "Hz",
                typical_values: "50-60 Hz mains"
              },
              {
                symbol: "t",
                meaning: "Thickness of conductor",
                unit: "m",
                typical_values: "mm for laminations"
              }
            ],
            derivedFrom: "faraday-law-emf",
            applications: [],
            specialCases: ["Solid core: high eddy current losses", "Laminated core: losses greatly reduced"],
            dimensionalCheck: "[P] = W",
          },
          {
            id: "magnetic-braking-force",
            name: "Magnetic Braking",
            category: "derived",
            formula: "F ∝ v (braking force proportional to velocity)",
            latex: "F \\propto v",
            description: "Braking force on conductor due to eddy currents",
            variables: [
              {
                symbol: "F",
                meaning: "Braking force",
                unit: "N",
                typical_values: "Depends on system"
              },
              {
                symbol: "v",
                meaning: "Velocity of conductor",
                unit: "m/s",
                typical_values: "Moving object speed"
              }
            ],
            derivedFrom: "lenz-direction",
            applications: [],
            specialCases: ["F = 0 when v = 0 (no braking when stopped)", "Smoother than mechanical braking"],
            dimensionalCheck: "[F] = N",
          },
          {
            id: "reducing-losses",
            name: "Reducing losses",
            category: "derived",
            formula: "P \\propto t^2",
            latex: "P \\propto t^2",
            description: "Thinner laminations → lower loss",
            variables: [],
            derivedFrom: "eddy-current-loss",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = W",
            neet_frequency: "high",
          },
          {
            id: "transformer-cores",
            name: "Transformer cores",
            category: "derived",
            formula: "\\text{Use laminated iron}",
            latex: "\\text{Use laminated iron}",
            description: "Each sheet isolated",
            variables: [],
            derivedFrom: "eddy-current-loss",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = W",
            neet_frequency: "high",
          },
          {
            id: "train-brakes",
            name: "Train brakes",
            category: "derived",
            formula: "F = \\frac{B^2A^2v}{R}",
            latex: "F = \\frac{B^2A^2v}{R}",
            description: "Effective at high speed",
            variables: [],
            derivedFrom: "magnetic-braking-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "medium",
          },
          {
            id: "galvanometer-damping",
            name: "Galvanometer damping",
            category: "derived",
            formula: "\\text{Critical damping}",
            latex: "\\text{Critical damping}",
            description: "Prevents oscillations",
            variables: [],
            derivedFrom: "magnetic-braking-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking eddy currents are always harmful",
            correct: "Eddy currents are useful for braking, induction heating, damping. Only harmful in transformers.",
            whyItHappens: "Only learning about losses in transformers",
            neetExample: "NEET 2020: Application of eddy currents"
          },
          {
            mistake: "Not knowing why lamination reduces losses",
            correct: "Thin insulated sheets reduce the area for eddy current loops. P ∝ t² so thinner = less loss.",
            whyItHappens: "Memorizing without understanding mechanism",
            neetExample: "NEET 2019: Why are transformer cores laminated?"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Applications of eddy currents",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Why laminate transformer cores",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Electromagnetic damping mechanism",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Applications of eddy currents",
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
            pattern: "Reducing eddy current losses",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Magnetic braking principle",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Eddy currents",
            analogy: "Paddle in water",
            mapping: "Moving paddle creates swirling water; moving conductor in field creates swirling currents"
          },
          {
            concept: "Lamination",
            analogy: "Cutting highway into lanes",
            mapping: "Like barriers limiting traffic flow, lamination limits eddy current loops"
          }
        ],
        questions: [],
      }
    ];