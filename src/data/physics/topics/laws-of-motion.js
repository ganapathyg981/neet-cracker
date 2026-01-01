// Laws of Motion - 2% weightage (Tier 3)
// NCERT Class 11, Chapter 5

export const lawsOfMotionTopics = [
      {
        id: "newtons-first-law",
        name: "Newton's First Law and Inertia",
        weightage: 0.2,
        difficulty: "easy",
        theory: {
          summary: "Newton's First Law: A body remains at rest or in uniform motion unless acted upon by a net external force. Inertia is the tendency to resist change in state of motion. Mass is a measure of inertia. This law defines inertial reference frames.",
          realWorldAnalogy: "Passengers lurch forward when bus brakes suddenly - their bodies tend to continue moving (inertia). Objects slide on dashboard when car turns. Tablecloth trick works because of inertia.",
          keyPoints: [
            "First Law: No net force → no change in velocity",
            "Inertia: resistance to change in motion",
            "Mass = measure of inertia (more mass = more inertia)",
            "Inertial frame: where first law holds",
            "Non-inertial frame: accelerating frame (pseudo forces appear)",
            "First law is NOT a special case of second law"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "first-law-condition",
            name: "First Law Condition",
            category: "base",
            formula: "F_net = 0 ⟹ a = 0",
            latex: "\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0",
            description: "Zero net force implies zero acceleration",
            variables: [
              {
                symbol: "F_net",
                meaning: "Net external force",
                unit: "N",
                typical_values: "0 for equilibrium"
              },
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "0 for constant velocity"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Equilibrium can be static (v=0) or dynamic (v=const)", "First law defines what \"no force\" means"],
            dimensionalCheck: "[F] = N, [a] = m/s²",
          },
          {
            id: "static-equilibrium",
            name: "Static equilibrium",
            category: "derived",
            formula: "\\vec{v} = 0, \\vec{a} = 0",
            latex: "\\vec{v} = 0, \\vec{a} = 0",
            description: "Object at rest",
            variables: [],
            derivedFrom: "first-law-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N, [a] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "dynamic-equilibrium",
            name: "Dynamic equilibrium",
            category: "derived",
            formula: "\\vec{v} = \\text{const}, \\vec{a} = 0",
            latex: "\\vec{v} = \\text{const}, \\vec{a} = 0",
            description: "Constant velocity motion",
            variables: [],
            derivedFrom: "first-law-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N, [a] = m/s²",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking first law is just F=ma with F=0",
            correct: "First law defines inertial frames and the concept of force. It's foundational, not derived from second law.",
            whyItHappens: "Viewing first law as special case",
            neetExample: "NEET 2019: Significance of Newton's first law"
          },
          {
            mistake: "Confusing inertia with momentum",
            correct: "Inertia is a property (resistance to change), momentum is a quantity (mv). Inertia ∝ mass only.",
            whyItHappens: "Both relate to \"amount of motion\"",
            neetExample: "NEET 2020: Which has more inertia - 10 kg at rest or 5 kg moving?"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Inertia comparisons",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Inertial vs non-inertial frames",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Inertia concepts",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Identifying inertial frames",
            frequency: "low",
            yearAsked: [2019]
          }
        ],
        analogies: [
          {
            concept: "Inertia",
            analogy: "Heavy vs light suitcase",
            mapping: "Heavy suitcase harder to start moving and harder to stop - more inertia"
          }
        ],
        questions: [],
      },
      {
        id: "newtons-second-law",
        name: "Newton's Second Law",
        weightage: 0.3,
        difficulty: "medium",
        theory: {
          summary: "F⃗ = ma⃗ relates force, mass, and acceleration. Force causes acceleration proportional to force and inversely proportional to mass. More precisely: F⃗ = dp⃗/dt (rate of change of momentum). This is the workhorse equation of mechanics.",
          realWorldAnalogy: "Same engine accelerates light car faster than heavy truck. Pushing shopping cart: more force = more acceleration; loaded cart needs more force for same acceleration.",
          keyPoints: [
            "F⃗ = ma⃗ (force = mass × acceleration)",
            "More general: F⃗ = dp⃗/dt (rate of change of momentum)",
            "Force and acceleration are in same direction",
            "1 Newton = force to accelerate 1 kg by 1 m/s²",
            "For variable mass: F = m(dv/dt) + v(dm/dt)",
            "Apply separately in x, y, z directions"
          ],
          prerequisites: ["newtons-first-law"]
        },
        formulas: [
          {
            id: "second-law",
            name: "Newton's Second Law",
            category: "base",
            formula: "F = ma",
            latex: "\\vec{F} = m\\vec{a}",
            description: "Fundamental equation relating force, mass, and acceleration",
            variables: [
              {
                symbol: "F",
                meaning: "Net external force",
                unit: "N",
                typical_values: "1-1000 N typically"
              },
              {
                symbol: "m",
                meaning: "Mass",
                unit: "kg",
                typical_values: "0.1-100 kg typically"
              },
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "0-10 m/s² typically"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["F = 0 ⟹ a = 0 (first law)", "Vector equation: direction of F = direction of a"],
            dimensionalCheck: "[F] = [m][a] = kg⋅m/s² = N",
          },
          {
            id: "momentum-form",
            name: "Momentum Form of Second Law",
            category: "derived",
            formula: "F = dp/dt",
            latex: "\\vec{F} = \\frac{d\\vec{p}}{dt}",
            description: "Force as rate of change of momentum",
            variables: [
              {
                symbol: "p",
                meaning: "Momentum",
                unit: "kg⋅m/s",
                typical_values: "p = mv"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["More fundamental than F = ma", "Valid for variable mass systems"],
            dimensionalCheck: "[dp/dt] = kg⋅m/s² = N",
          },
          {
            id: "component-form",
            name: "Component form",
            category: "derived",
            formula: "F_x = ma_x, F_y = ma_y",
            latex: "F_x = ma_x, F_y = ma_y",
            description: "Apply in each direction",
            variables: [],
            derivedFrom: "second-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [m][a] = kg⋅m/s² = N",
            neet_frequency: "high",
          },
          {
            id: "weight",
            name: "Weight",
            category: "derived",
            formula: "W = mg",
            latex: "W = mg",
            description: "Force due to gravity",
            variables: [],
            derivedFrom: "second-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [m][a] = kg⋅m/s² = N",
            neet_frequency: "high",
          },
          {
            id: "constant-mass",
            name: "Constant mass",
            category: "derived",
            formula: "F = m\\frac{dv}{dt} = ma",
            latex: "F = m\\frac{dv}{dt} = ma",
            description: "Reduces to F = ma",
            variables: [],
            derivedFrom: "momentum-form",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[dp/dt] = kg⋅m/s² = N",
            neet_frequency: "high",
          },
          {
            id: "variable-mass-rocket",
            name: "Variable mass (rocket)",
            category: "derived",
            formula: "F = m\\frac{dv}{dt} + v\\frac{dm}{dt}",
            latex: "F = m\\frac{dv}{dt} + v\\frac{dm}{dt}",
            description: "Rocket equation",
            variables: [],
            derivedFrom: "momentum-form",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[dp/dt] = kg⋅m/s² = N",
            neet_frequency: "low",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using F = ma when mass changes",
            correct: "Use F = dp/dt = m(dv/dt) + v(dm/dt) for variable mass.",
            whyItHappens: "Not recognizing variable mass situation",
            neetExample: "NEET 2021: Rocket propulsion problem"
          },
          {
            mistake: "Forgetting to consider all forces",
            correct: "F in F = ma is the NET force. Include weight, normal, friction, tension, etc.",
            whyItHappens: "Missing some forces in free body diagram",
            neetExample: "NEET 2020: Block on incline with friction"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Direct F = ma problems",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Multiple forces on body",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Connected bodies",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Net force calculations",
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
            pattern: "Momentum-impulse relation",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "F = ma",
            analogy: "Pushing shopping carts",
            mapping: "Same push accelerates empty cart more than full one. Bigger push = more acceleration."
          }
        ],
        questions: [],
      },
      {
        id: "newtons-third-law",
        name: "Newton's Third Law",
        weightage: 0.2,
        difficulty: "easy",
        theory: {
          summary: "For every action, there is an equal and opposite reaction. F_AB = -F_BA. Action-reaction pairs act on DIFFERENT bodies, so they don't cancel. They are simultaneous, equal in magnitude, opposite in direction, same type of force.",
          realWorldAnalogy: "Walking: you push Earth backward, Earth pushes you forward. Rocket exhaust pushes gas down, gas pushes rocket up. Swimming: push water back, water pushes you forward.",
          keyPoints: [
            "Action-reaction pairs are equal and opposite",
            "They act on DIFFERENT bodies (never cancel)",
            "Same type of force (both gravitational, or both contact, etc.)",
            "Simultaneous - neither causes the other",
            "F_12 = -F_21 always",
            "Valid even when bodies are accelerating"
          ],
          prerequisites: ["newtons-second-law"]
        },
        formulas: [
          {
            id: "third-law",
            name: "Newton's Third Law",
            category: "base",
            formula: "F_AB = -F_BA",
            latex: "\\vec{F}_{AB} = -\\vec{F}_{BA}",
            description: "Action-reaction pair relationship",
            variables: [
              {
                symbol: "F_AB",
                meaning: "Force on A by B",
                unit: "N",
                typical_values: "Depends on interaction"
              },
              {
                symbol: "F_BA",
                meaning: "Force on B by A",
                unit: "N",
                typical_values: "Equal magnitude to F_AB"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Always true, even for accelerating systems", "Pairs don't cancel - they're on different bodies"],
            dimensionalCheck: "[F] = N",
          },
          {
            id: "normal-force",
            name: "Normal force",
            category: "derived",
            formula: "N_{ground on block} = -N_{block on ground}",
            latex: "N_{ground on block} = -N_{block on ground}",
            description: "Contact force pair",
            variables: [],
            derivedFrom: "third-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          },
          {
            id: "gravitational",
            name: "Gravitational",
            category: "derived",
            formula: "F_{Earth on apple} = -F_{apple on Earth}",
            latex: "F_{Earth on apple} = -F_{apple on Earth}",
            description: "Gravitational pair",
            variables: [],
            derivedFrom: "third-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking action-reaction pairs cancel",
            correct: "They act on DIFFERENT bodies, so they can't cancel. Only forces on SAME body can cancel.",
            whyItHappens: "Forgetting forces are on different objects",
            neetExample: "NEET 2020: Why doesn't horse and cart stay stationary if horse pulls cart and cart pulls horse?"
          },
          {
            mistake: "Confusing N and W as action-reaction pair",
            correct: "N and W act on SAME body (the block). They're not a third-law pair. W's pair is block pulling Earth.",
            whyItHappens: "Both are vertical forces on same body",
            neetExample: "NEET 2019: Identify action-reaction pair for book on table"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Identify action-reaction pairs",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Explain motion using third law",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Identifying action-reaction pairs",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021
            ]
          },
          {
            pattern: "Horse-cart paradox",
            frequency: "medium",
            yearAsked: [2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Third law pairs",
            analogy: "Two people on ice pushing each other",
            mapping: "Both slide apart - each experiences force from the other. Forces equal, accelerations differ by mass."
          }
        ],
        questions: [],
      },
      {
        id: "free-body-diagrams",
        name: "Free Body Diagrams",
        weightage: 0.2,
        difficulty: "medium",
        theory: {
          summary: "FBD shows all forces acting on a body. Isolate the body, draw ALL external forces: weight (always down), normal (perpendicular to surface), friction (opposing motion), tension (along string), applied forces. Then apply ΣF = ma.",
          realWorldAnalogy: "Like listing all influences on a decision - you need to account for everything pushing/pulling to predict the outcome.",
          keyPoints: [
            "Isolate the body of interest",
            "Draw weight (mg) at center, pointing down",
            "Normal force perpendicular to contact surface",
            "Friction parallel to surface, opposing relative motion",
            "Tension along the string, away from body",
            "Only EXTERNAL forces on the body (not forces body exerts)"
          ],
          prerequisites: ["newtons-second-law"]
        },
        formulas: [
          {
            id: "equilibrium-conditions",
            name: "Equilibrium Conditions",
            category: "base",
            formula: "ΣFx = 0, ΣFy = 0",
            latex: "\\sum F_x = 0, \\quad \\sum F_y = 0",
            description: "Force balance for equilibrium",
            variables: [
              {
                symbol: "ΣFx",
                meaning: "Sum of x-components",
                unit: "N",
                typical_values: "0 for equilibrium"
              },
              {
                symbol: "ΣFy",
                meaning: "Sum of y-components",
                unit: "N",
                typical_values: "0 for equilibrium"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["For equilibrium: a = 0, so ΣF = 0", "Apply to x and y separately"],
            dimensionalCheck: "[ΣF] = N",
          },
          {
            id: "on-horizontal-surface",
            name: "On horizontal surface",
            category: "derived",
            formula: "N = mg",
            latex: "N = mg",
            description: "Vertical equilibrium",
            variables: [],
            derivedFrom: "equilibrium-conditions",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΣF] = N",
            neet_frequency: "high",
          },
          {
            id: "on-incline",
            name: "On incline",
            category: "derived",
            formula: "N = mg\\cos\\theta",
            latex: "N = mg\\cos\\theta",
            description: "Perpendicular to incline",
            variables: [],
            derivedFrom: "equilibrium-conditions",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΣF] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Including reaction forces on other bodies",
            correct: "FBD shows only forces ON the body, not forces BY the body on others.",
            whyItHappens: "Confusing action-reaction pairs",
            neetExample: "NEET 2020: FBD of block on table - don't include force on table"
          },
          {
            mistake: "Drawing N equal to mg always",
            correct: "N = mg only on horizontal surface with no other vertical forces. On incline: N = mg cos θ.",
            whyItHappens: "Memorizing without understanding",
            neetExample: "NEET 2019: Normal force on inclined plane"
          },
          {
            mistake: "Wrong direction of friction",
            correct: "Friction opposes RELATIVE motion (or tendency). Static friction direction depends on what would happen without it.",
            whyItHappens: "Not analyzing motion tendency",
            neetExample: "NEET 2021: Direction of friction on block pushed up incline"
          }
        ],
        variations: [
          {
            type: "diagrammatic",
            description: "Draw FBD for given situation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Calculate forces using FBD",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "FBD analysis",
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
            pattern: "Force identification",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "FBD",
            analogy: "Influences on a person's decision",
            mapping: "List all external factors (forces) to predict outcome (motion)"
          }
        ],
        questions: [],
      },
      {
        id: "friction",
        name: "Friction",
        weightage: 0.3,
        difficulty: "medium",
        theory: {
          summary: "Friction opposes relative motion. Static friction adjusts up to maximum fs_max = μsN. Kinetic friction is constant fk = μkN. Always μs > μk. Angle of friction tan θ = μ. Angle of repose = angle of friction for impending motion on incline.",
          realWorldAnalogy: "Pushing a heavy box: it doesn't move initially (static friction matches your push), but once moving, it's easier to keep moving (kinetic friction less than static).",
          keyPoints: [
            "Static friction: fs ≤ μsN (adjustable, up to maximum)",
            "Kinetic friction: fk = μkN (constant)",
            "μs > μk (harder to start than maintain motion)",
            "Friction is independent of contact area",
            "Friction ∝ Normal force",
            "Angle of repose: tan θ = μs (incline angle for impending slip)"
          ],
          prerequisites: ["free-body-diagrams"]
        },
        formulas: [
          {
            id: "static-friction",
            name: "Static Friction",
            category: "base",
            formula: "fs ≤ μs N",
            latex: "f_s \\leq \\mu_s N",
            description: "Friction before sliding begins",
            variables: [
              {
                symbol: "fs",
                meaning: "Static friction",
                unit: "N",
                typical_values: "0 to μsN"
              },
              {
                symbol: "μs",
                meaning: "Coefficient of static friction",
                unit: "dimensionless",
                typical_values: "0.1 to 1.0"
              },
              {
                symbol: "N",
                meaning: "Normal force",
                unit: "N",
                typical_values: "Depends on weight and other forces"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["fs is self-adjusting (matches applied force up to max)", "fs can be zero if no tendency to slide"],
            dimensionalCheck: "[f] = [μ][N] = N",
          },
          {
            id: "kinetic-friction",
            name: "Kinetic Friction",
            category: "base",
            formula: "fk = μk N",
            latex: "f_k = \\mu_k N",
            description: "Friction during sliding",
            variables: [
              {
                symbol: "fk",
                meaning: "Kinetic friction",
                unit: "N",
                typical_values: "Constant once sliding"
              },
              {
                symbol: "μk",
                meaning: "Coefficient of kinetic friction",
                unit: "dimensionless",
                typical_values: "0.1 to 0.8"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["fk is constant (doesn't depend on velocity)", "μk < μs always"],
            dimensionalCheck: "[fk] = N",
          },
          {
            id: "angle-of-friction",
            name: "Angle of Friction",
            category: "derived",
            formula: "tan λ = μ",
            latex: "\\tan\\lambda = \\mu",
            description: "Angle between normal and resultant contact force",
            variables: [
              {
                symbol: "λ",
                meaning: "Angle of friction",
                unit: "degrees",
                typical_values: "tan⁻¹(μ)"
              }
            ],
            derivedFrom: "static-friction",
            applications: [],
            specialCases: ["Angle of repose = Angle of friction", "If incline angle > angle of repose, block slides"],
            dimensionalCheck: "Dimensionless (angle)",
          },
          {
            id: "maximum-static-friction",
            name: "Maximum static friction",
            category: "derived",
            formula: "f_{s,max} = \\mu_s N",
            latex: "f_{s,max} = \\mu_s N",
            description: "Just before sliding",
            variables: [],
            derivedFrom: "static-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = [μ][N] = N",
            neet_frequency: "high",
          },
          {
            id: "angle-of-repose",
            name: "Angle of repose",
            category: "derived",
            formula: "\\tan\\theta = \\mu_s",
            latex: "\\tan\\theta = \\mu_s",
            description: "Incline angle for impending slip",
            variables: [],
            derivedFrom: "static-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = [μ][N] = N",
            neet_frequency: "high",
          },
          {
            id: "deceleration-due-to-friction",
            name: "Deceleration due to friction",
            category: "derived",
            formula: "a = \\mu_k g",
            latex: "a = \\mu_k g",
            description: "Sliding on horizontal surface",
            variables: [],
            derivedFrom: "kinetic-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[fk] = N",
            neet_frequency: "high",
          },
          {
            id: "stopping-distance",
            name: "Stopping distance",
            category: "derived",
            formula: "s = \\frac{v^2}{2\\mu_k g}",
            latex: "s = \\frac{v^2}{2\\mu_k g}",
            description: "From v² = 2as",
            variables: [],
            derivedFrom: "kinetic-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[fk] = N",
            neet_frequency: "high",
          },
          {
            id: "angle-of-repose-2",
            name: "Angle of repose",
            category: "derived",
            formula: "\\theta_{repose} = \\tan^{-1}(\\mu_s)",
            latex: "\\theta_{repose} = \\tan^{-1}(\\mu_s)",
            description: "Max incline angle without sliding",
            variables: [],
            derivedFrom: "angle-of-friction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless (angle)",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using fk formula when object is stationary",
            correct: "If object is not sliding, use fs ≤ μsN. Static friction adjusts to match applied force.",
            whyItHappens: "Using kinetic formula universally",
            neetExample: "NEET 2020: Force needed to just start motion vs maintain motion"
          },
          {
            mistake: "Thinking friction always equals μN",
            correct: "For static friction, f ≤ μsN. It could be zero if no force applied. Only use fk = μkN during sliding.",
            whyItHappens: "Not understanding self-adjusting nature of static friction",
            neetExample: "NEET 2019: Friction on block at rest on horizontal surface"
          },
          {
            mistake: "Wrong normal force on incline",
            correct: "On incline, N = mg cos θ (not mg). This affects friction calculation.",
            whyItHappens: "Using horizontal surface formula",
            neetExample: "NEET 2021: Friction on block on 30° incline"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate friction force",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Motion on rough incline",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Angle of repose problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Static vs kinetic friction",
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
            pattern: "Angle of repose",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Motion on rough incline",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Static vs kinetic friction",
            analogy: "Pushing furniture",
            mapping: "Hard to start moving (static), easier once sliding (kinetic)"
          }
        ],
        questions: [],
      },
      {
        id: "motion-inclined-plane",
        name: "Motion on Inclined Plane",
        weightage: 0.2,
        difficulty: "medium",
        theory: {
          summary: "On incline: take axes parallel and perpendicular to incline. Forces: mg sin θ (down the incline), mg cos θ (into incline, balanced by N). With friction: a = g(sin θ - μ cos θ) for motion down, a = g(sin θ + μ cos θ) retardation for motion up.",
          realWorldAnalogy: "Sliding down a playground slide: gravity pulls you down, friction and the slide push back. Steeper slide = faster acceleration (more sin θ).",
          keyPoints: [
            "Component along incline: mg sin θ",
            "Component perpendicular: mg cos θ = N",
            "Frictionless: a = g sin θ",
            "With friction (down): a = g(sin θ - μk cos θ)",
            "With friction (up): retardation = g(sin θ + μk cos θ)",
            "Block remains stationary if mg sin θ ≤ μs mg cos θ (i.e., θ ≤ angle of repose)"
          ],
          prerequisites: ["friction"]
        },
        formulas: [
          {
            id: "acceleration-incline",
            name: "Acceleration on Incline",
            category: "derived",
            formula: "a = g sin θ (frictionless)",
            latex: "a = g\\sin\\theta",
            description: "Acceleration down frictionless incline",
            variables: [
              {
                symbol: "θ",
                meaning: "Incline angle",
                unit: "degrees",
                typical_values: "15° to 60°"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["a = 0 when θ = angle of repose (impending motion)", "a is same for all masses (like free fall)"],
            dimensionalCheck: "[a] = [g] = m/s²",
          },
          {
            id: "normal-force-incline",
            name: "Normal Force on Incline",
            category: "derived",
            formula: "N = mg cos θ",
            latex: "N = mg\\cos\\theta",
            description: "Normal force on inclined surface",
            variables: [
              {
                symbol: "N",
                meaning: "Normal force",
                unit: "N",
                typical_values: "Less than mg"
              }
            ],
            derivedFrom: "equilibrium-conditions",
            applications: [],
            specialCases: ["N decreases as θ increases", "N = 0 when θ = 90° (vertical surface)", "N = mg when θ = 0° (horizontal)"],
            dimensionalCheck: "[N] = N",
          },
          {
            id: "with-friction-down",
            name: "With friction (down)",
            category: "derived",
            formula: "a = g(\\sin\\theta - \\mu_k\\cos\\theta)",
            latex: "a = g(\\sin\\theta - \\mu_k\\cos\\theta)",
            description: "Moving down rough incline",
            variables: [],
            derivedFrom: "acceleration-incline",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [g] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "with-friction-up",
            name: "With friction (up)",
            category: "derived",
            formula: "a = g(\\sin\\theta + \\mu_k\\cos\\theta)",
            latex: "a = g(\\sin\\theta + \\mu_k\\cos\\theta)",
            description: "Retardation when moving up",
            variables: [],
            derivedFrom: "acceleration-incline",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [g] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "friction-on-incline",
            name: "Friction on incline",
            category: "derived",
            formula: "f = \\mu mg\\cos\\theta",
            latex: "f = \\mu mg\\cos\\theta",
            description: "Friction depends on N",
            variables: [],
            derivedFrom: "normal-force-incline",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[N] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using a = g sin θ when there is friction",
            correct: "With friction: a = g(sin θ ∓ μ cos θ). Minus for down motion, plus for up motion.",
            whyItHappens: "Ignoring friction in calculation",
            neetExample: "NEET 2020: Block sliding down rough incline"
          },
          {
            mistake: "Wrong direction of friction on incline",
            correct: "Friction opposes motion: up the incline when sliding down, down the incline when pushed up.",
            whyItHappens: "Not analyzing motion direction",
            neetExample: "NEET 2019: Block pushed up rough incline"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Acceleration on incline",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Time to slide down incline",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Minimum angle for motion",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Acceleration on rough incline",
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
            pattern: "Condition for motion on incline",
            frequency: "medium",
            yearAsked: [2019, 2021]
          }
        ],
        analogies: [
          {
            concept: "Components on incline",
            analogy: "Tilted table",
            mapping: "Ball rolls because of sin θ component, presses table because of cos θ component"
          }
        ],
        questions: [],
      },
      {
        id: "tension-strings",
        name: "Tension in Strings",
        weightage: 0.2,
        difficulty: "medium",
        theory: {
          summary: "Tension is pulling force transmitted through string. For massless string, tension is same throughout. For string with mass, tension varies. In pulley problems, use FBD for each body and constraint equations.",
          realWorldAnalogy: "Tug of war rope: tension is the pulling force. Light rope has same tension throughout. Heavy rope would have more tension at the top (supporting weight below).",
          keyPoints: [
            "Tension pulls along the string, away from body",
            "Massless string: tension same throughout",
            "String with mass: tension varies along length",
            "Inextensible string: acceleration constraint (same acceleration magnitude for connected bodies)",
            "Multiple pulleys: analyze each pulley separately",
            "For Atwood machine: a = (m₁-m₂)g/(m₁+m₂), T = 2m₁m₂g/(m₁+m₂)"
          ],
          prerequisites: ["free-body-diagrams"]
        },
        formulas: [
          {
            id: "atwood-machine",
            name: "Atwood Machine",
            category: "derived",
            formula: "a = (m₁-m₂)g/(m₁+m₂)",
            latex: "a = \\frac{(m_1 - m_2)g}{m_1 + m_2}",
            description: "Acceleration in Atwood machine",
            variables: [
              {
                symbol: "a",
                meaning: "Acceleration of system",
                unit: "m/s²",
                typical_values: "Less than g"
              },
              {
                symbol: "m₁",
                meaning: "Heavier mass",
                unit: "kg",
                typical_values: "m₁ > m₂"
              },
              {
                symbol: "m₂",
                meaning: "Lighter mass",
                unit: "kg",
                typical_values: "m₂ < m₁"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["If m₁ = m₂: a = 0, T = mg", "If m₂ = 0: a = g (free fall)", "T is always between m₁g and m₂g"],
            dimensionalCheck: "[a] = [g] = m/s²",
          },
          {
            id: "pulley-constraint",
            name: "Pulley Constraint",
            category: "base",
            formula: "x₁ + x₂ = constant (for inextensible string)",
            latex: "x_1 + x_2 = L = \\text{const} \\Rightarrow a_1 = a_2",
            description: "Acceleration constraint for connected bodies",
            variables: [
              {
                symbol: "x₁, x₂",
                meaning: "Positions of connected masses",
                unit: "m",
                typical_values: "Variable"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For movable pulley, constraint changes", "Acceleration constraint from differentiating length constraint twice"],
            dimensionalCheck: "[x] = m",
          },
          {
            id: "tension-in-string",
            name: "Tension in string",
            category: "derived",
            formula: "T = \\frac{2m_1m_2g}{m_1 + m_2}",
            latex: "T = \\frac{2m_1m_2g}{m_1 + m_2}",
            description: "Common tension in Atwood machine",
            variables: [],
            derivedFrom: "atwood-machine",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [g] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "simple-pulley",
            name: "Simple pulley",
            category: "derived",
            formula: "a_1 = a_2 = a",
            latex: "a_1 = a_2 = a",
            description: "Same magnitude acceleration",
            variables: [],
            derivedFrom: "pulley-constraint",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = m",
            neet_frequency: "high",
          },
          {
            id: "movable-pulley",
            name: "Movable pulley",
            category: "derived",
            formula: "a_1 = 2a_2",
            latex: "a_1 = 2a_2",
            description: "Pulley moves with mass",
            variables: [],
            derivedFrom: "pulley-constraint",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Assuming T = mg for hanging mass",
            correct: "T = mg only if mass is in equilibrium. If accelerating, T = m(g ± a).",
            whyItHappens: "Confusing equilibrium with accelerated motion",
            neetExample: "NEET 2020: Tension when elevator accelerates"
          },
          {
            mistake: "Wrong acceleration constraint for complex pulleys",
            correct: "Derive constraint from string length. For movable pulley, a₁ may not equal a₂.",
            whyItHappens: "Using simple constraint universally",
            neetExample: "NEET 2021: Two pulleys connected system"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Atwood machine problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Block-pulley systems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Multiple pulley systems",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Atwood machine",
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
            pattern: "Block-pulley on table",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Tension in massless string",
            analogy: "Chain links",
            mapping: "Each link pulls the next with same force - tension transmits unchanged through light string"
          }
        ],
        questions: [],
      },
      {
        id: "apparent-weight-lift",
        name: "Apparent Weight and Lift Problems",
        weightage: 0.1,
        difficulty: "medium",
        theory: {
          summary: "Apparent weight is normal force experienced. In accelerating lift: W' = m(g ± a). Lift accelerating up: W' = m(g+a) > W. Lift accelerating down: W' = m(g-a) < W. Free fall: W' = 0 (weightlessness). These are experienced as feeling heavier or lighter.",
          realWorldAnalogy: "Elevator: you feel heavier when going up starts, lighter when going down starts. Roller coaster drops give weightlessness feeling. Astronauts in orbit are in continuous free fall.",
          keyPoints: [
            "Apparent weight = Normal force on person",
            "Lift accelerating up: W' = m(g + a) > mg",
            "Lift accelerating down: W' = m(g - a) < mg",
            "Constant velocity: W' = mg (normal weight)",
            "Free fall (a = g): W' = 0 (weightlessness)",
            "Lift falling faster than g: N would be negative (person floats)"
          ],
          prerequisites: ["free-body-diagrams"]
        },
        formulas: [
          {
            id: "apparent-weight",
            name: "Apparent Weight in Lift",
            category: "derived",
            formula: "W' = m(g ± a)",
            latex: "W' = m(g \\pm a)",
            description: "Weight felt in accelerating reference frame",
            variables: [
              {
                symbol: "W'",
                meaning: "Apparent weight",
                unit: "N",
                typical_values: "More or less than mg"
              },
              {
                symbol: "a",
                meaning: "Acceleration of lift",
                unit: "m/s²",
                typical_values: "1-3 m/s² for elevators"
              }
            ],
            derivedFrom: "second-law",
            applications: [],
            specialCases: ["Constant velocity: apparent = actual weight", "a = g: apparent weight = 0", "a > g: person would float (lose contact)"],
            dimensionalCheck: "[W'] = N",
          },
          {
            id: "going-up-or-slowing-while-going-down",
            name: "Going up (or slowing while going down)",
            category: "derived",
            formula: "W' = m(g + a)",
            latex: "W' = m(g + a)",
            description: "Feel heavier",
            variables: [],
            derivedFrom: "apparent-weight",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W'] = N",
            neet_frequency: "high",
          },
          {
            id: "going-down-or-slowing-while-going-up",
            name: "Going down (or slowing while going up)",
            category: "derived",
            formula: "W' = m(g - a)",
            latex: "W' = m(g - a)",
            description: "Feel lighter",
            variables: [],
            derivedFrom: "apparent-weight",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W'] = N",
            neet_frequency: "high",
          },
          {
            id: "free-fall",
            name: "Free fall",
            category: "derived",
            formula: "W' = 0",
            latex: "W' = 0",
            description: "Weightlessness",
            variables: [],
            derivedFrom: "apparent-weight",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W'] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing direction of motion with direction of acceleration",
            correct: "What matters is acceleration direction, not velocity. Going up but slowing → accelerating down → feel lighter.",
            whyItHappens: "Mixing up velocity and acceleration",
            neetExample: "NEET 2020: Apparent weight when lift slows while going up"
          },
          {
            mistake: "Thinking weightlessness means no gravity",
            correct: "In weightlessness (free fall), gravity still acts but normal force is zero.",
            whyItHappens: "Confusing sensation with physics",
            neetExample: "NEET 2019: Astronaut in orbiting space station"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apparent weight calculation",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Direction of motion vs acceleration",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Spring scale reading in lift",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Apparent weight in accelerating lift",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Weightlessness condition",
            frequency: "medium",
            yearAsked: [2019, 2021]
          }
        ],
        analogies: [
          {
            concept: "Apparent weight",
            analogy: "Elevator experience",
            mapping: "Stomach \"drops\" when elevator accelerates down - you feel lighter"
          }
        ],
        questions: [],
      },
      {
        id: "connected-bodies",
        name: "Connected Bodies and Constraint Motion",
        weightage: 0.2,
        difficulty: "hard",
        theory: {
          summary: "When bodies are connected by strings over pulleys, their motions are constrained. Key: string length is constant. Differentiate twice to get acceleration constraint. Use FBD for each body and solve simultaneous equations.",
          realWorldAnalogy: "Like a seesaw - when one side goes down, other goes up. Or elevator counterweight - cable length is fixed, so movements are related.",
          keyPoints: [
            "String length = constant → velocity and acceleration constraints",
            "For simple pulley: a₁ = a₂ (same magnitude)",
            "For movable pulley: a₁ = 2a₂ (one moves twice as fast)",
            "Write FBD for each body separately",
            "Use constraint equation with Newton's second law",
            "Direction conventions must be consistent"
          ],
          prerequisites: ["tension-strings"]
        },
        formulas: [
          {
            id: "constraint-equations",
            name: "Constraint Equations",
            category: "base",
            formula: "String length = constant",
            latex: "\\sum \\text{(lengths)} = L = \\text{const}",
            description: "Constraint from inextensible string",
            variables: [],
            derivedFrom: null,
            applications: [],
            specialCases: ["Differentiate length equation twice for acceleration constraint", "Account for pulley motion if pulley moves"],
            dimensionalCheck: "[L] = m",
          },
          {
            id: "simple-pulley",
            name: "Simple pulley",
            category: "derived",
            formula: "a_1 + a_2 = 0 \\text{ (opposite directions)}",
            latex: "a_1 + a_2 = 0 \\text{ (opposite directions)}",
            description: "One up, other down",
            variables: [],
            derivedFrom: "constraint-equations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = m",
            neet_frequency: "high",
          },
          {
            id: "movable-pulley",
            name: "Movable pulley",
            category: "derived",
            formula: "a_P = \\frac{a_1 + a_2}{2}",
            latex: "a_P = \\frac{a_1 + a_2}{2}",
            description: "Pulley acceleration is average",
            variables: [],
            derivedFrom: "constraint-equations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Wrong signs in constraint equations",
            correct: "Be consistent with direction convention. If both move in positive direction, use same sign.",
            whyItHappens: "Inconsistent sign convention",
            neetExample: "NEET 2021: Three-body pulley system"
          },
          {
            mistake: "Forgetting pulley acceleration when pulley moves",
            correct: "If pulley is not fixed, include its motion in constraint equation.",
            whyItHappens: "Treating movable pulley as fixed",
            neetExample: "NEET 2020: Block attached to movable pulley"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Two-body pulley systems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Block on table with hanging mass",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Complex pulley arrangements",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Block-pulley on table",
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
            pattern: "Movable pulley problems",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Constraint",
            analogy: "Bicycle chain",
            mapping: "Fixed chain length means front sprocket and rear sprocket motions are linked"
          }
        ],
        questions: [],
      },
      {
        id: "pseudo-forces",
        name: "Pseudo Forces (Non-Inertial Frames)",
        weightage: 0.1,
        difficulty: "hard",
        theory: {
          summary: "In non-inertial (accelerating) frames, fictitious pseudo forces appear. Pseudo force F = -ma₀ (opposite to frame's acceleration). Centrifugal force is a pseudo force in rotating frame. Newton's laws directly apply only in inertial frames; in non-inertial frames, add pseudo forces.",
          realWorldAnalogy: "In braking car, you feel pushed forward - that's pseudo force (your inertia, seen from car's frame). In spinning ride, you feel pushed outward (centrifugal pseudo force).",
          keyPoints: [
            "Pseudo force = -ma₀ (opposite to frame acceleration)",
            "Only appears in non-inertial (accelerating) frames",
            "Centrifugal force = mω²r (outward, in rotating frame)",
            "After adding pseudo forces, Newton's laws work in non-inertial frame",
            "Pseudo forces have no reaction (not real forces)",
            "Observer in inertial frame sees no pseudo forces"
          ],
          prerequisites: ["newtons-second-law"]
        },
        formulas: [
          {
            id: "pseudo-force",
            name: "Pseudo Force",
            category: "base",
            formula: "F_pseudo = -ma₀",
            latex: "\\vec{F}_{pseudo} = -m\\vec{a}_0",
            description: "Fictitious force in non-inertial frame",
            variables: [
              {
                symbol: "F_pseudo",
                meaning: "Pseudo force",
                unit: "N",
                typical_values: "Depends on frame acceleration"
              },
              {
                symbol: "a₀",
                meaning: "Acceleration of reference frame",
                unit: "m/s²",
                typical_values: "Frame's acceleration"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["No reaction to pseudo force", "Direction opposite to frame's acceleration", "Disappears if you switch to inertial frame"],
            dimensionalCheck: "[F] = [m][a₀] = N",
          },
          {
            id: "in-accelerating-train",
            name: "In accelerating train",
            category: "derived",
            formula: "F_{pseudo} = ma_{train}",
            latex: "F_{pseudo} = ma_{train}",
            description: "Backward force felt",
            variables: [],
            derivedFrom: "pseudo-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [m][a₀] = N",
            neet_frequency: "high",
          },
          {
            id: "centrifugal-force",
            name: "Centrifugal force",
            category: "derived",
            formula: "F = m\\omega^2 r",
            latex: "F = m\\omega^2 r",
            description: "In rotating frame, outward",
            variables: [],
            derivedFrom: "pseudo-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [m][a₀] = N",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using pseudo forces in inertial frame",
            correct: "Pseudo forces exist ONLY in non-inertial frames. In inertial frame, use only real forces.",
            whyItHappens: "Not identifying the reference frame",
            neetExample: "NEET 2020: Analysis from ground vs from accelerating car"
          },
          {
            mistake: "Looking for reaction to pseudo force",
            correct: "Pseudo forces have no reaction. They're not real forces - just a mathematical convenience.",
            whyItHappens: "Applying Newton's third law incorrectly",
            neetExample: "NEET 2019: Centrifugal force reaction?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Motion in accelerating frame",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Identify pseudo forces",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Equilibrium in non-inertial frame",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Pseudo force in accelerating lift/train",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Centrifugal force problems",
            frequency: "medium",
            yearAsked: [2018, 2021]
          }
        ],
        analogies: [
          {
            concept: "Pseudo force",
            analogy: "Braking in car",
            mapping: "Feel pushed forward when car brakes - from car's view, there's a forward pseudo force"
          }
        ],
        questions: [],
      }
    ];