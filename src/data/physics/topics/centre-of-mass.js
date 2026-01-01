// Centre of Mass & System of Particles - 2% weightage (Tier 3)
// NCERT Class 11, Chapter 7

export const centreOfMassTopics = [
      {
        id: "centre-of-mass-position",
        name: "Centre of Mass Position",
        weightage: 0.7,
        difficulty: "medium",
        theory: {
          summary: "Centre of mass (COM) is the average position weighted by mass. For discrete masses: x_cm = Σmᵢxᵢ/Σmᵢ. For continuous body: x_cm = ∫x dm/∫dm. COM of symmetric uniform body is at geometric center. COM doesn't have to be inside the body (e.g., ring).",
          realWorldAnalogy: "Balancing a ruler on finger: balance point is at COM. For uniform ruler, it's at center. For ruler with weights attached, balance point shifts toward heavier end.",
          keyPoints: [
            "x_cm = Σmᵢxᵢ/M (discrete masses)",
            "x_cm = ∫x dm/M (continuous body)",
            "COM of uniform body = geometric center",
            "COM can be outside the body (ring, L-shape)",
            "System behaves as if all mass is at COM for external forces",
            "Mv_cm = Σmᵢvᵢ (total momentum = M × v_cm)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "com-discrete",
            name: "COM of Discrete Masses",
            category: "base",
            formula: "x_cm = Σmᵢxᵢ/Σmᵢ",
            latex: "x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i} = \\frac{m_1x_1 + m_2x_2 + ...}{m_1 + m_2 + ...}",
            description: "Position of centre of mass for point masses",
            variables: [
              {
                symbol: "x_cm",
                meaning: "x-coordinate of COM",
                unit: "m",
                typical_values: "Weighted average"
              },
              {
                symbol: "mᵢ",
                meaning: "Individual masses",
                unit: "kg",
                typical_values: "Given"
              },
              {
                symbol: "xᵢ",
                meaning: "x-coordinates of masses",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For two masses: COM divides distance in inverse ratio of masses", "For equal masses: COM is at midpoint", "COM is closer to heavier mass"],
            dimensionalCheck: "[x_cm] = m",
          },
          {
            id: "com-continuous",
            name: "COM of Continuous Body",
            category: "derived",
            formula: "x_cm = ∫x dm/M",
            latex: "x_{cm} = \\frac{\\int x\\, dm}{M} = \\frac{1}{M}\\int x\\, dm",
            description: "COM for extended body using integration",
            variables: [
              {
                symbol: "dm",
                meaning: "Mass element",
                unit: "kg",
                typical_values: "λdx or σdA or ρdV"
              },
              {
                symbol: "M",
                meaning: "Total mass",
                unit: "kg",
                typical_values: "∫dm"
              }
            ],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: [
              "Uniform rod: COM at L/2",
              "Semicircular wire: 2R/π from center",
              "Semicircular disc: 4R/3π from center",
              "Hemisphere: 3R/8 from center"
            ],
            dimensionalCheck: "[x_cm] = m",
          },
          {
            id: "com-composite",
            name: "COM of Composite Bodies",
            category: "derived",
            formula: "x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂)",
            latex: "x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}",
            description: "COM of system of bodies using individual COMs",
            variables: [
              {
                symbol: "x₁, x₂",
                meaning: "COM positions of individual bodies",
                unit: "m",
                typical_values: "Known from geometry"
              }
            ],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: ["For cavity: treat as negative mass at cavity position", "COM shifts away from removed portion"],
            dimensionalCheck: "[x_cm] = m",
          },
          {
            id: "two-masses",
            name: "Two masses",
            category: "derived",
            formula: "x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}",
            latex: "x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}",
            description: "Divides line in ratio m₂:m₁",
            variables: [],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "distance-from-masses",
            name: "Distance from masses",
            category: "derived",
            formula: "r_1:r_2 = m_2:m_1",
            latex: "r_1:r_2 = m_2:m_1",
            description: "COM closer to heavier mass",
            variables: [],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "in-2d",
            name: "In 2D",
            category: "derived",
            formula: "y_{cm} = \\frac{\\sum m_iy_i}{\\sum m_i}",
            latex: "y_{cm} = \\frac{\\sum m_iy_i}{\\sum m_i}",
            description: "Apply separately for x, y",
            variables: [],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "uniform-rod",
            name: "Uniform rod",
            category: "derived",
            formula: "x_{cm} = L/2",
            latex: "x_{cm} = L/2",
            description: "At center",
            variables: [],
            derivedFrom: "com-continuous",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "semicircular-ring",
            name: "Semicircular ring",
            category: "derived",
            formula: "y_{cm} = \\frac{2R}{\\pi}",
            latex: "y_{cm} = \\frac{2R}{\\pi}",
            description: "From center, on axis of symmetry",
            variables: [],
            derivedFrom: "com-continuous",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "semicircular-disc",
            name: "Semicircular disc",
            category: "derived",
            formula: "y_{cm} = \\frac{4R}{3\\pi}",
            latex: "y_{cm} = \\frac{4R}{3\\pi}",
            description: "From center, on axis of symmetry",
            variables: [],
            derivedFrom: "com-continuous",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "cavity-in-body",
            name: "Cavity in body",
            category: "derived",
            formula: "x_{cm} = \\frac{Mx_1 - m_{cavity}x_2}{M - m_{cavity}}",
            latex: "x_{cm} = \\frac{Mx_1 - m_{cavity}x_2}{M - m_{cavity}}",
            description: "Subtract cavity contribution",
            variables: [],
            derivedFrom: "com-composite",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          },
          {
            id: "two-connected-bodies",
            name: "Two connected bodies",
            category: "derived",
            formula: "x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}",
            latex: "x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}",
            description: "Treat each body as point mass at its COM",
            variables: [],
            derivedFrom: "com-composite",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x_cm] = m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing COM formulas for discrete and continuous masses",
            correct: "For discrete: direct sum. For continuous: integrate with dm = ρdV or λdl.",
            whyItHappens: "Not distinguishing problem types",
            neetExample: "NEET 2020: COM of semicircular wire vs disc"
          },
          {
            mistake: "Wrong formula for body with cavity",
            correct: "Use x_cm = (Mx_full - m_cavity × x_cavity)/(M - m_cavity). Cavity acts like negative mass.",
            whyItHappens: "Not using subtraction method",
            neetExample: "NEET 2019: COM of disc with hole"
          },
          {
            mistake: "Thinking COM must be inside the body",
            correct: "COM can be outside for hollow or L-shaped bodies (e.g., ring, bent rod).",
            whyItHappens: "Intuition from solid bodies",
            neetExample: "NEET 2021: COM of ring or L-shaped wire"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "COM of two or more particles",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "COM of standard shapes (semicircle, hemisphere)",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "COM of body with cavity",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "COM of discrete masses",
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
            pattern: "COM of standard continuous bodies",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "COM with cavity problems",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Centre of mass",
            analogy: "Balance point",
            mapping: "Where you can balance an object on your fingertip - that's its COM"
          }
        ],
        questions: [],
      },
      {
        id: "motion-of-com",
        name: "Motion of Centre of Mass",
        weightage: 0.7,
        difficulty: "medium",
        theory: {
          summary: "COM moves as if all mass is concentrated there with all external forces acting on it. F_ext = Ma_cm. If F_ext = 0, v_cm = constant (COM doesn't accelerate). Internal forces don't affect COM motion. Useful for explosions, collisions, recoil.",
          realWorldAnalogy: "Firework exploding: fragments fly everywhere, but COM follows the same parabola as before explosion (gravity is only external force). Jumping from boat: boat recoils, but system COM doesn't move if no external horizontal force.",
          keyPoints: [
            "F_ext = Ma_cm (Newton's second law for COM)",
            "If F_ext = 0: v_cm = constant",
            "Internal forces don't change v_cm",
            "For explosion: COM continues original path",
            "Mv_cm = Σmᵢvᵢ = p_total",
            "If system starts at rest and F_ext = 0: COM stays at rest"
          ],
          prerequisites: ["centre-of-mass-position"]
        },
        formulas: [
          {
            id: "com-velocity",
            name: "Velocity of Centre of Mass",
            category: "base",
            formula: "v_cm = Σmᵢvᵢ/M",
            latex: "v_{cm} = \\frac{\\sum m_iv_i}{M} = \\frac{m_1v_1 + m_2v_2 + ...}{M}",
            description: "Velocity of COM in terms of particle velocities",
            variables: [
              {
                symbol: "v_cm",
                meaning: "Velocity of COM",
                unit: "m/s",
                typical_values: "Weighted average"
              },
              {
                symbol: "vᵢ",
                meaning: "Velocities of particles",
                unit: "m/s",
                typical_values: "Given"
              },
              {
                symbol: "M",
                meaning: "Total mass",
                unit: "kg",
                typical_values: "Σmᵢ"
              }
            ],
            derivedFrom: "com-discrete",
            applications: [],
            specialCases: ["If system at rest initially: Σmᵢvᵢ = 0 always", "v_cm constant if F_ext = 0"],
            dimensionalCheck: "[v_cm] = m/s",
          },
          {
            id: "com-acceleration",
            name: "Acceleration of Centre of Mass",
            category: "derived",
            formula: "a_cm = F_ext/M",
            latex: "a_{cm} = \\frac{F_{ext}}{M}",
            description: "COM acceleration depends only on external force",
            variables: [
              {
                symbol: "a_cm",
                meaning: "Acceleration of COM",
                unit: "m/s²",
                typical_values: "Depends on F_ext"
              },
              {
                symbol: "F_ext",
                meaning: "Net external force",
                unit: "N",
                typical_values: "Sum of all external forces"
              }
            ],
            derivedFrom: "com-velocity",
            applications: [],
            specialCases: ["Internal forces (explosion, collision) don't affect a_cm", "Only external forces count"],
            dimensionalCheck: "[a_cm] = m/s²",
          },
          {
            id: "com-conservation",
            name: "COM Position Conservation",
            category: "derived",
            formula: "m₁Δx₁ + m₂Δx₂ = 0 (if F_ext = 0)",
            latex: "m_1\\Delta x_1 + m_2\\Delta x_2 = 0",
            description: "COM position unchanged if no external force",
            variables: [
              {
                symbol: "Δx₁, Δx₂",
                meaning: "Displacements of masses",
                unit: "m",
                typical_values: "Opposite signs"
              }
            ],
            derivedFrom: "com-velocity",
            applications: [],
            specialCases: ["If initially at rest, COM stays at initial position", "Masses move in opposite directions"],
            dimensionalCheck: "[m][Δx] = kg⋅m",
          },
          {
            id: "two-body-system",
            name: "Two body system",
            category: "derived",
            formula: "v_{cm} = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}",
            latex: "v_{cm} = \\frac{m_1v_1 + m_2v_2}{m_1 + m_2}",
            description: "Two particles",
            variables: [],
            derivedFrom: "com-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v_cm] = m/s",
            neet_frequency: "high",
          },
          {
            id: "momentum-relation",
            name: "Momentum relation",
            category: "derived",
            formula: "Mv_{cm} = p_{total}",
            latex: "Mv_{cm} = p_{total}",
            description: "Total momentum",
            variables: [],
            derivedFrom: "com-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v_cm] = m/s",
            neet_frequency: "high",
          },
          {
            id: "no-external-force",
            name: "No external force",
            category: "derived",
            formula: "a_{cm} = 0, v_{cm} = const",
            latex: "a_{cm} = 0, v_{cm} = const",
            description: "COM moves uniformly",
            variables: [],
            derivedFrom: "com-acceleration",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a_cm] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "only-gravity",
            name: "Only gravity",
            category: "derived",
            formula: "a_{cm} = g",
            latex: "a_{cm} = g",
            description: "COM follows projectile path",
            variables: [],
            derivedFrom: "com-acceleration",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a_cm] = m/s²",
            neet_frequency: "high",
          },
          {
            id: "man-on-boat",
            name: "Man on boat",
            category: "derived",
            formula: "m_1d_1 = m_2d_2",
            latex: "m_1d_1 = m_2d_2",
            description: "Distances moved in opposite directions",
            variables: [],
            derivedFrom: "com-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m][Δx] = kg⋅m",
            neet_frequency: "high",
          },
          {
            id: "recoil-of-gun",
            name: "Recoil of gun",
            category: "derived",
            formula: "m_{bullet}v_{bullet} = m_{gun}v_{gun}",
            latex: "m_{bullet}v_{bullet} = m_{gun}v_{gun}",
            description: "Momentum conservation",
            variables: [],
            derivedFrom: "com-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m][Δx] = kg⋅m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking explosion changes COM velocity",
            correct: "Explosion is internal force. COM continues with same velocity (only external forces affect COM).",
            whyItHappens: "Focusing on fragments, not system",
            neetExample: "NEET 2020: Projectile explodes at highest point - where does COM land?"
          },
          {
            mistake: "Including internal forces in F_ext",
            correct: "F_ext includes only forces from outside the system. Internal forces cancel in pairs.",
            whyItHappens: "Not defining system boundary correctly",
            neetExample: "NEET 2019: Two masses connected by spring - COM motion"
          },
          {
            mistake: "Wrong direction for recoil displacement",
            correct: "If F_ext = 0 and COM was at rest, m₁Δx₁ + m₂Δx₂ = 0. Displacements have opposite signs.",
            whyItHappens: "Not considering vector nature",
            neetExample: "NEET 2021: Man walking on boat"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "COM velocity of two-body system",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Man-boat/plank problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Explosion and recoil problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "COM after explosion",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Man-boat problems",
            frequency: "high",
            yearAsked: [
              2019,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Recoil problems",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "COM motion unaffected by internal forces",
            analogy: "Firework",
            mapping: "Fragments scatter, but the \"ghost\" of original projectile (COM) continues same path"
          }
        ],
        questions: [],
      },
      {
        id: "momentum-impulse",
        name: "Linear Momentum and Impulse",
        weightage: 0.6,
        difficulty: "medium",
        theory: {
          summary: "Momentum p = mv (vector). Impulse J = ∫F dt = Δp (change in momentum). For constant force: J = FΔt. Conservation: if F_ext = 0, total momentum is conserved. Used in collision analysis, rocket propulsion, catching/hitting balls.",
          realWorldAnalogy: "Catching a ball: same momentum change whether you catch quickly (high force, short time) or slowly (low force, long time). Crumple zones in cars increase collision time, reducing force.",
          keyPoints: [
            "p = mv (momentum is vector)",
            "J = ∫F dt = Δp (impulse-momentum theorem)",
            "J = FΔt (for constant force)",
            "Conservation: Σp = constant (if F_ext = 0)",
            "Impulse = area under F-t graph",
            "Same impulse can be: high F × short t = low F × long t"
          ],
          prerequisites: ["motion-of-com"]
        },
        formulas: [
          {
            id: "momentum-formula",
            name: "Linear Momentum",
            category: "base",
            formula: "p = mv",
            latex: "\\vec{p} = m\\vec{v}",
            description: "Momentum as product of mass and velocity",
            variables: [
              {
                symbol: "p",
                meaning: "Momentum",
                unit: "kg⋅m/s",
                typical_values: "0.1-1000 kg⋅m/s"
              },
              {
                symbol: "m",
                meaning: "Mass",
                unit: "kg",
                typical_values: "0.1-100 kg"
              },
              {
                symbol: "v",
                meaning: "Velocity",
                unit: "m/s",
                typical_values: "1-100 m/s"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Momentum is vector (has direction)", "SI unit: kg⋅m/s or N⋅s", "p² = 2mKE"],
            dimensionalCheck: "[p] = [m][v] = kg⋅m/s",
          },
          {
            id: "impulse-formula",
            name: "Impulse",
            category: "base",
            formula: "J = ∫F dt = Δp",
            latex: "J = \\int F\\, dt = \\Delta p = p_f - p_i",
            description: "Impulse equals change in momentum",
            variables: [
              {
                symbol: "J",
                meaning: "Impulse",
                unit: "N⋅s = kg⋅m/s",
                typical_values: "Equals Δp"
              },
              {
                symbol: "Δp",
                meaning: "Change in momentum",
                unit: "kg⋅m/s",
                typical_values: "p_f - p_i"
              }
            ],
            derivedFrom: "momentum-formula",
            applications: [],
            specialCases: ["J = area under F-t curve", "Impulse and momentum have same units", "For ball bouncing: J = m(v₂ - v₁) with proper signs"],
            dimensionalCheck: "[J] = [F][t] = N⋅s = kg⋅m/s",
          },
          {
            id: "momentum-conservation",
            name: "Conservation of Momentum",
            category: "derived",
            formula: "Σpᵢ = Σpf (if F_ext = 0)",
            latex: "\\sum \\vec{p}_i = \\sum \\vec{p}_f",
            description: "Total momentum conserved in isolated system",
            variables: [],
            derivedFrom: "impulse-formula",
            applications: [],
            specialCases: ["Valid in all collisions (elastic or inelastic)", "Apply component-wise in 2D", "Valid even during collision when internal forces are large"],
            dimensionalCheck: "[p] = kg⋅m/s",
          },
          {
            id: "momentum-conservation-2",
            name: "Momentum conservation",
            category: "derived",
            formula: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2",
            latex: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2",
            description: "If F_ext = 0",
            variables: [],
            derivedFrom: "momentum-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = [m][v] = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "relation-with-ke",
            name: "Relation with KE",
            category: "derived",
            formula: "p = \\sqrt{2mKE}",
            latex: "p = \\sqrt{2mKE}",
            description: "Connecting momentum and energy",
            variables: [],
            derivedFrom: "momentum-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = [m][v] = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "constant-force",
            name: "Constant force",
            category: "derived",
            formula: "J = F\\Delta t",
            latex: "J = F\\Delta t",
            description: "Force × time",
            variables: [],
            derivedFrom: "impulse-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[J] = [F][t] = N⋅s = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "ball-hitting-wall",
            name: "Ball hitting wall",
            category: "derived",
            formula: "J = 2mv",
            latex: "J = 2mv",
            description: "If velocity reverses",
            variables: [],
            derivedFrom: "impulse-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[J] = [F][t] = N⋅s = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "average-force",
            name: "Average force",
            category: "derived",
            formula: "F_{avg} = \\frac{\\Delta p}{\\Delta t}",
            latex: "F_{avg} = \\frac{\\Delta p}{\\Delta t}",
            description: "From impulse-momentum",
            variables: [],
            derivedFrom: "impulse-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[J] = [F][t] = N⋅s = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "collision",
            name: "Collision",
            category: "derived",
            formula: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2",
            latex: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2",
            description: "Before = after",
            variables: [],
            derivedFrom: "momentum-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = kg⋅m/s",
            neet_frequency: "high",
          },
          {
            id: "explosionrecoil",
            name: "Explosion/recoil",
            category: "derived",
            formula: "0 = m_1v_1 + m_2v_2",
            latex: "0 = m_1v_1 + m_2v_2",
            description: "If initially at rest",
            variables: [],
            derivedFrom: "momentum-conservation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = kg⋅m/s",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting momentum is a vector",
            correct: "Momentum has direction. For ball bouncing back, Δp = m(v₂ - v₁) = m(-v - (+v)) = -2mv.",
            whyItHappens: "Treating momentum as scalar",
            neetExample: "NEET 2020: Impulse on ball bouncing off wall"
          },
          {
            mistake: "Using momentum conservation when F_ext ≠ 0",
            correct: "Momentum is conserved only if net external force is zero (or impulse of external force is negligible).",
            whyItHappens: "Not checking for external forces",
            neetExample: "NEET 2019: Momentum during collision on rough surface"
          },
          {
            mistake: "Confusing impulse with force",
            correct: "Impulse is force × time (J = FΔt). Same impulse can result from different F and Δt combinations.",
            whyItHappens: "Not considering time factor",
            neetExample: "NEET 2021: Why crumple zones reduce injury"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Impulse from force-time data",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Average force from momentum change",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Momentum conservation problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Impulse calculation",
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
            pattern: "Average force from momentum change",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Ball bouncing (impulse)",
            frequency: "high",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Impulse",
            analogy: "Catching eggs",
            mapping: "Same momentum change - catch gently (small F, long t) vs catch hard (large F, short t). Gentle = egg survives."
          }
        ],
        questions: [],
      }
    ];