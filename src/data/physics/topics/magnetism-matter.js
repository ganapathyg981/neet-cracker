// Magnetism and Matter - 1% weightage (Tier 3)
// NCERT Class 12, Chapter 5

export const magnetismMatterTopics = [
      {
        id: "bar-magnet-dipole",
        name: "Bar Magnet as Magnetic Dipole",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "A bar magnet behaves as a magnetic dipole with magnetic moment m = pole strength × length = qm × 2l. The field pattern is similar to electric dipole. Unlike electric charges, magnetic monopoles don't exist - every magnet has both N and S poles. Magnetic field lines form closed loops.",
          realWorldAnalogy: "Like a battery with + and - terminals that can never be separated - cut a magnet in half and you get two complete magnets, each with N and S poles.",
          keyPoints: [
            "Magnetic dipole moment: m = qm × 2l (qm = pole strength)",
            "SI unit of m: A·m² or J/T",
            "Magnetic monopoles don't exist (unlike electric charges)",
            "Field lines: closed loops from N to S outside, S to N inside",
            "Bar magnet ≈ solenoid (same field pattern)",
            "Equivalent solenoid: m = NIA"
          ],
          prerequisites: ["magnetic-field-basics"]
        },
        formulas: [
          {
            id: "magnetic-dipole-moment",
            name: "Magnetic Dipole Moment",
            category: "base",
            formula: "m = qm × 2l",
            latex: "m = q_m \\times 2l",
            description: "Magnetic moment of bar magnet in terms of pole strength and length",
            variables: [
              {
                symbol: "m",
                meaning: "Magnetic dipole moment",
                unit: "A·m²",
                typical_values: "0.1-10 A·m²"
              },
              {
                symbol: "qm",
                meaning: "Pole strength",
                unit: "A·m",
                typical_values: "Depends on magnet"
              },
              {
                symbol: "2l",
                meaning: "Magnetic length",
                unit: "m",
                typical_values: "0.8-0.9 of geometric length"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Magnetic length ≈ 5/6 of geometric length", "m direction: S to N inside magnet"],
            dimensionalCheck: "[m] = A·m",
          },
          {
            id: "axial-field-magnet",
            name: "Axial Field of Bar Magnet",
            category: "derived",
            formula: "B_axial = (μ₀/4π)(2m/r³)",
            latex: "B_{axial} = \\frac{\\mu_0}{4\\pi} \\frac{2m}{r^3}",
            description: "Magnetic field on the axial line (end-on position) of bar magnet",
            variables: [
              {
                symbol: "B_axial",
                meaning: "Field on axis",
                unit: "T",
                typical_values: "μT to mT"
              },
              {
                symbol: "r",
                meaning: "Distance from center",
                unit: "m",
                typical_values: "r >> l for this formula"
              }
            ],
            derivedFrom: "magnetic-dipole-moment",
            applications: [],
            specialCases: ["B_axial = 2 × B_equatorial (at same distance)", "Field direction: along m (N-pole direction)"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "equatorial-field-magnet",
            name: "Equatorial Field of Bar Magnet",
            category: "derived",
            formula: "B_eq = (μ₀/4π)(m/r³)",
            latex: "B_{eq} = \\frac{\\mu_0}{4\\pi} \\frac{m}{r^3}",
            description: "Magnetic field on equatorial line (broadside-on position) of bar magnet",
            variables: [
              {
                symbol: "B_eq",
                meaning: "Field on equatorial line",
                unit: "T",
                typical_values: "μT to mT"
              }
            ],
            derivedFrom: "magnetic-dipole-moment",
            applications: [],
            specialCases: ["B_eq = ½ × B_axial (at same distance)", "Field direction: opposite to m (S-pole direction)"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "equivalent-current-loop",
            name: "Equivalent current loop",
            category: "derived",
            formula: "m = NIA",
            latex: "m = NIA",
            description: "Current loop equivalent to bar magnet",
            variables: [],
            derivedFrom: "magnetic-dipole-moment",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m] = A·m",
            neet_frequency: "high",
          },
          {
            id: "torque-in-field",
            name: "Torque in field",
            category: "derived",
            formula: "\\tau = mB\\sin\\theta",
            latex: "\\tau = mB\\sin\\theta",
            description: "Same as current loop",
            variables: [],
            derivedFrom: "magnetic-dipole-moment",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[m] = A·m",
            neet_frequency: "high",
          },
          {
            id: "exact-formula",
            name: "Exact formula",
            category: "derived",
            formula: "B = \\frac{\\mu_0}{4\\pi} \\frac{2mr}{(r^2-l^2)^2}",
            latex: "B = \\frac{\\mu_0}{4\\pi} \\frac{2mr}{(r^2-l^2)^2}",
            description: "When r not >> l",
            variables: [],
            derivedFrom: "axial-field-magnet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\text{Along } \\vec{m}",
            latex: "\\text{Along } \\vec{m}",
            description: "Same direction as dipole moment",
            variables: [],
            derivedFrom: "axial-field-magnet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          },
          {
            id: "exact-formula-2",
            name: "Exact formula",
            category: "derived",
            formula: "B = \\frac{\\mu_0}{4\\pi} \\frac{m}{(r^2+l^2)^{3/2}}",
            latex: "B = \\frac{\\mu_0}{4\\pi} \\frac{m}{(r^2+l^2)^{3/2}}",
            description: "When r not >> l",
            variables: [],
            derivedFrom: "equatorial-field-magnet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          },
          {
            id: "direction-2",
            name: "Direction",
            category: "derived",
            formula: "\\text{Opposite to } \\vec{m}",
            latex: "\\text{Opposite to } \\vec{m}",
            description: "Antiparallel to dipole moment",
            variables: [],
            derivedFrom: "equatorial-field-magnet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing axial and equatorial field magnitudes",
            correct: "B_axial = 2 × B_equatorial at same distance. Axial is TWICE equatorial.",
            whyItHappens: "Not remembering the factor of 2 relationship",
            neetExample: "NEET 2020: Compare fields at equal distances on axis and equator"
          },
          {
            mistake: "Wrong direction of equatorial field",
            correct: "Equatorial field is OPPOSITE to magnetic moment direction (S to N)",
            whyItHappens: "Confusing with axial field direction",
            neetExample: "NEET 2019: Direction of B at equatorial point"
          },
          {
            mistake: "Using approximate formula when r is comparable to l",
            correct: "Use exact formula with (r²-l²)² or (r²+l²)^(3/2) when r is not >> l",
            whyItHappens: "Always applying the simpler far-field formula",
            neetExample: "NEET 2021: Field at point close to bar magnet"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate axial field of bar magnet",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Calculate equatorial field",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare axial and equatorial fields",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Torque on bar magnet in external field",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Ratio of axial to equatorial field",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Field at given distance on axis",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Bar magnet equivalent to solenoid",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Magnetic dipole",
            analogy: "Electric dipole",
            mapping: "Similar field patterns, but magnetic field lines are always closed loops"
          },
          {
            concept: "No magnetic monopoles",
            analogy: "Inseparable N-S",
            mapping: "Like trying to have only one end of a stick - impossible"
          }
        ],
        questions: [],
      },
      {
        id: "earths-magnetism",
        name: "Earth's Magnetism",
        weightage: 1,
        difficulty: "easy",
        theory: {
          summary: "Earth behaves as a giant bar magnet with magnetic south near geographic north. Earth's field has three elements: declination (angle between geographic and magnetic meridian), dip/inclination (angle of field with horizontal), and horizontal component BH. At poles, dip = 90°; at equator, dip = 0°.",
          realWorldAnalogy: "Like having a giant bar magnet buried inside Earth, but tilted about 11° from Earth's axis - that's why compass doesn't point to true north.",
          keyPoints: [
            "Geographic north ≈ Magnetic south (poles reversed!)",
            "Magnetic axis tilted ~11° from geographic axis",
            "Declination (θ): angle between geographic and magnetic meridians",
            "Dip/Inclination (δ): angle of B with horizontal plane",
            "Horizontal component: BH = B cos δ",
            "Vertical component: BV = B sin δ",
            "At magnetic equator: δ = 0°, B = BH",
            "At magnetic poles: δ = 90°, BH = 0"
          ],
          prerequisites: ["bar-magnet-dipole"]
        },
        formulas: [
          {
            id: "earth-field-components",
            name: "Components of Earth's Field",
            category: "base",
            formula: "BH = B cos δ, BV = B sin δ",
            latex: "B_H = B\\cos\\delta, \\quad B_V = B\\sin\\delta",
            description: "Horizontal and vertical components of Earth's magnetic field",
            variables: [
              {
                symbol: "BH",
                meaning: "Horizontal component",
                unit: "T",
                typical_values: "~25-40 μT"
              },
              {
                symbol: "BV",
                meaning: "Vertical component",
                unit: "T",
                typical_values: "~25-60 μT"
              },
              {
                symbol: "B",
                meaning: "Total Earth's field",
                unit: "T",
                typical_values: "~25-65 μT"
              },
              {
                symbol: "δ",
                meaning: "Angle of dip/inclination",
                unit: "degrees",
                typical_values: "0° at equator, 90° at poles"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At equator: δ = 0°, BV = 0, B = BH", "At poles: δ = 90°, BH = 0, B = BV"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "apparent-dip",
            name: "Apparent Dip",
            category: "derived",
            formula: "tan δ' = tan δ / cos θ",
            latex: "\\tan\\delta' = \\frac{\\tan\\delta}{\\cos\\theta}",
            description: "Dip measured when dip circle not in magnetic meridian",
            variables: [
              {
                symbol: "δ'",
                meaning: "Apparent dip",
                unit: "degrees",
                typical_values: "> true dip"
              },
              {
                symbol: "δ",
                meaning: "True dip",
                unit: "degrees",
                typical_values: "Actual dip value"
              },
              {
                symbol: "θ",
                meaning: "Angle from magnetic meridian",
                unit: "degrees",
                typical_values: "0-90°"
              }
            ],
            derivedFrom: "earth-field-components",
            applications: [],
            specialCases: ["Apparent dip always ≥ true dip", "True dip only measured in magnetic meridian plane"],
            dimensionalCheck: "Dimensionless ratio",
          },
          {
            id: "two-apparent-dips",
            name: "Relation Between Two Apparent Dips",
            category: "derived",
            formula: "cot²δ = cot²δ₁ + cot²δ₂",
            latex: "\\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2",
            description: "True dip from two perpendicular apparent dips",
            variables: [
              {
                symbol: "δ",
                meaning: "True dip",
                unit: "degrees",
                typical_values: "To be found"
              },
              {
                symbol: "δ₁, δ₂",
                meaning: "Apparent dips in perpendicular planes",
                unit: "degrees",
                typical_values: "Measured values"
              }
            ],
            derivedFrom: "apparent-dip",
            applications: [],
            specialCases: ["Only valid for perpendicular planes", "Both δ₁ and δ₂ > δ"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "total-field",
            name: "Total field",
            category: "derived",
            formula: "B = \\sqrt{B_H^2 + B_V^2}",
            latex: "B = \\sqrt{B_H^2 + B_V^2}",
            description: "From components",
            variables: [],
            derivedFrom: "earth-field-components",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          },
          {
            id: "tan-of-dip",
            name: "Tan of dip",
            category: "derived",
            formula: "\\tan\\delta = \\frac{B_V}{B_H}",
            latex: "\\tan\\delta = \\frac{B_V}{B_H}",
            description: "Find dip from components",
            variables: [],
            derivedFrom: "earth-field-components",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          },
          {
            id: "in-magnetic-meridian",
            name: "In magnetic meridian",
            category: "derived",
            formula: "\\delta' = \\delta",
            latex: "\\delta' = \\delta",
            description: "θ = 0°, apparent = true",
            variables: [],
            derivedFrom: "apparent-dip",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "perpendicular-to-meridian",
            name: "Perpendicular to meridian",
            category: "derived",
            formula: "\\delta' = 90°",
            latex: "\\delta' = 90°",
            description: "θ = 90°, dip appears vertical",
            variables: [],
            derivedFrom: "apparent-dip",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "medium",
          },
          {
            id: "finding-true-dip",
            name: "Finding true dip",
            category: "derived",
            formula: "\\delta = \\cot^{-1}\\sqrt{\\cot^2\\delta_1 + \\cot^2\\delta_2}",
            latex: "\\delta = \\cot^{-1}\\sqrt{\\cot^2\\delta_1 + \\cot^2\\delta_2}",
            description: "When two perpendicular measurements given",
            variables: [],
            derivedFrom: "two-apparent-dips",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking geographic north is magnetic north",
            correct: "Geographic north has magnetic SOUTH pole nearby. Magnet N-pole points to geographic north.",
            whyItHappens: "Confusing terminology",
            neetExample: "NEET 2020: Which magnetic pole is near geographic north?"
          },
          {
            mistake: "Confusing dip with declination",
            correct: "Declination: horizontal angle between meridians. Dip: vertical angle with ground.",
            whyItHappens: "Both are angles related to Earth's magnetism",
            neetExample: "NEET 2019: At a place, declination is 30° and dip is 45°, find BH"
          },
          {
            mistake: "Using BH = B sin δ instead of B cos δ",
            correct: "BH = B cos δ, BV = B sin δ. Horizontal uses cosine, vertical uses sine.",
            whyItHappens: "Mixing up components",
            neetExample: "NEET 2021: Given dip and total field, find horizontal component"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find BH and BV from B and dip",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find total field from components",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Apparent dip problems",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Variation of dip from equator to poles",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Components of Earth's field",
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
            pattern: "Dip at equator vs poles",
            frequency: "medium",
            yearAsked: [2019, 2021]
          },
          {
            pattern: "Apparent dip problems",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Earth as bar magnet",
            analogy: "Tilted magnet inside Earth",
            mapping: "Like a bar magnet buried at center, tilted 11° from axis"
          },
          {
            concept: "Dip angle",
            analogy: "Diving angle of field line",
            mapping: "Like angle at which a thrown ball would enter ground"
          }
        ],
        questions: [],
      },
      {
        id: "magnetic-properties-materials",
        name: "Magnetic Properties of Materials",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Materials are classified by magnetic susceptibility χ: Diamagnetic (χ < 0, small), Paramagnetic (χ > 0, small), Ferromagnetic (χ >> 0, very large). Diamagnetic materials are weakly repelled, paramagnetic weakly attracted, ferromagnetic strongly attracted by magnets.",
          realWorldAnalogy: "Diamagnetic is like a shy person moving away from crowd (repelled). Paramagnetic is like curious person moving slightly toward. Ferromagnetic is like fan rushing enthusiastically toward celebrity.",
          keyPoints: [
            "Diamagnetic: χ < 0, μr < 1, repelled by magnet (Cu, Bi, H₂O, NaCl)",
            "Paramagnetic: χ > 0 (small), μr > 1, weakly attracted (Al, Na, O₂, Pt)",
            "Ferromagnetic: χ >> 0, μr >> 1, strongly attracted (Fe, Co, Ni, Gd)",
            "Susceptibility χ = I/H (I = intensity of magnetization)",
            "Relative permeability μr = 1 + χ",
            "Curie temperature: above this, ferromagnetic → paramagnetic",
            "Diamagnetism is universal but weak"
          ],
          prerequisites: ["bar-magnet-dipole"]
        },
        formulas: [
          {
            id: "magnetic-susceptibility",
            name: "Magnetic Susceptibility",
            category: "base",
            formula: "χ = I/H = μr - 1",
            latex: "\\chi = \\frac{I}{H} = \\mu_r - 1",
            description: "Measure of how much a material gets magnetized in an applied field",
            variables: [
              {
                symbol: "χ",
                meaning: "Magnetic susceptibility",
                unit: "dimensionless",
                typical_values: "-10⁻⁵ to 10⁵"
              },
              {
                symbol: "I",
                meaning: "Intensity of magnetization",
                unit: "A/m",
                typical_values: "Varies widely"
              },
              {
                symbol: "H",
                meaning: "Magnetizing field intensity",
                unit: "A/m",
                typical_values: "10-10⁶ A/m"
              },
              {
                symbol: "μr",
                meaning: "Relative permeability",
                unit: "dimensionless",
                typical_values: "0.99-10⁵"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["χ = 0 for vacuum (μr = 1)", "χ > 0: material enhances field", "χ < 0: material opposes field"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "curie-law",
            name: "Curie's Law (Paramagnetic)",
            category: "derived",
            formula: "χ = C/T",
            latex: "\\chi = \\frac{C}{T}",
            description: "Temperature dependence of paramagnetic susceptibility",
            variables: [
              {
                symbol: "C",
                meaning: "Curie constant",
                unit: "K",
                typical_values: "Material specific"
              },
              {
                symbol: "T",
                meaning: "Absolute temperature",
                unit: "K",
                typical_values: "Above 0 K"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["χ ∝ 1/T for paramagnetic materials", "Thermal agitation opposes alignment"],
            dimensionalCheck: "[χ] = [C]/[T] = K/K = dimensionless",
          },
          {
            id: "curie-weiss-law",
            name: "Curie-Weiss Law (Ferromagnetic)",
            category: "derived",
            formula: "χ = C/(T - Tc)",
            latex: "\\chi = \\frac{C}{T - T_c}",
            description: "Susceptibility of ferromagnetic material above Curie temperature",
            variables: [
              {
                symbol: "Tc",
                meaning: "Curie temperature",
                unit: "K",
                typical_values: "Fe: 1043K, Ni: 631K, Co: 1394K"
              }
            ],
            derivedFrom: "curie-law",
            applications: [],
            specialCases: ["Below Tc: material is ferromagnetic", "Above Tc: material becomes paramagnetic"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "diamagnetic",
            name: "Diamagnetic",
            category: "derived",
            formula: "\\chi \\approx -10^{-5}",
            latex: "\\chi \\approx -10^{-5}",
            description: "Small negative value",
            variables: [],
            derivedFrom: "magnetic-susceptibility",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "paramagnetic",
            name: "Paramagnetic",
            category: "derived",
            formula: "\\chi \\approx 10^{-5} \\text{ to } 10^{-3}",
            latex: "\\chi \\approx 10^{-5} \\text{ to } 10^{-3}",
            description: "Small positive value",
            variables: [],
            derivedFrom: "magnetic-susceptibility",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "ferromagnetic",
            name: "Ferromagnetic",
            category: "derived",
            formula: "\\chi \\approx 10^3 \\text{ to } 10^5",
            latex: "\\chi \\approx 10^3 \\text{ to } 10^5",
            description: "Very large positive",
            variables: [],
            derivedFrom: "magnetic-susceptibility",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "at-higher-t",
            name: "At higher T",
            category: "derived",
            formula: "\\chi \\downarrow",
            latex: "\\chi \\downarrow",
            description: "Susceptibility decreases with temperature",
            variables: [],
            derivedFrom: "curie-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[χ] = [C]/[T] = K/K = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "above-tc",
            name: "Above Tc",
            category: "derived",
            formula: "\\text{Ferromagnetic} \\rightarrow \\text{Paramagnetic}",
            latex: "\\text{Ferromagnetic} \\rightarrow \\text{Paramagnetic}",
            description: "Loses permanent magnetism",
            variables: [],
            derivedFrom: "curie-weiss-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "at-t-tc",
            name: "At T = Tc",
            category: "derived",
            formula: "\\chi \\rightarrow \\infty",
            latex: "\\chi \\rightarrow \\infty",
            description: "Transition point",
            variables: [],
            derivedFrom: "curie-weiss-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking all materials are either attracted or unaffected by magnets",
            correct: "Diamagnetic materials are REPELLED (weakly). All materials show magnetic response.",
            whyItHappens: "Only familiar with paramagnetic/ferromagnetic attraction",
            neetExample: "NEET 2020: What happens to bismuth near a strong magnet?"
          },
          {
            mistake: "Confusing Curie law with Curie-Weiss law",
            correct: "Curie: χ = C/T (paramagnetic). Curie-Weiss: χ = C/(T-Tc) (ferromagnetic above Tc)",
            whyItHappens: "Similar names and formulas",
            neetExample: "NEET 2019: χ vs T graph for ferromagnetic material"
          },
          {
            mistake: "Thinking diamagnetic susceptibility depends on temperature",
            correct: "Diamagnetic χ is nearly temperature-independent. Only para and ferro depend on T.",
            whyItHappens: "Generalizing temperature dependence to all materials",
            neetExample: "NEET 2021: Which material's χ is temperature independent?"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Classify materials as dia/para/ferromagnetic",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find μr from χ",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Effect of temperature on different materials",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Curie law calculations",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Classification of magnetic materials",
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
            pattern: "Curie temperature concept",
            frequency: "high",
            yearAsked: [2019, 2020, 2021]
          },
          {
            pattern: "χ and μr relationship",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Three types of magnetic materials",
            analogy: "People and celebrity",
            mapping: "Diamagnetic = avoids, Paramagnetic = curious approach, Ferromagnetic = fan rush"
          },
          {
            concept: "Curie temperature",
            analogy: "Melting point for magnetism",
            mapping: "Just as ice melts to water, ferromagnet becomes paramagnetic above Tc"
          }
        ],
        questions: [],
      },
      {
        id: "magnetization-intensity",
        name: "Magnetization and Magnetic Intensity",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Magnetization I (or M) is magnetic moment per unit volume. Magnetic intensity H is the magnetizing field that would exist in vacuum. In a material: B = μ₀(H + I) = μ₀μrH. The H-field depends only on free currents, while B includes material response.",
          realWorldAnalogy: "H is like how hard you push to magnetize (external effort). I is how much the material responds (internal alignment). B is the total effect (push + response).",
          keyPoints: [
            "Intensity of magnetization: I = M/V = magnetic moment per unit volume",
            "Magnetic intensity: H = B/μ₀ - I = nI (for solenoid)",
            "Relation: B = μ₀(H + I) = μ₀H(1 + χ) = μ₀μrH",
            "In vacuum: I = 0, so B = μ₀H",
            "SI unit of H: A/m (same as I)",
            "SI unit of B: Tesla",
            "Permeability: μ = μ₀μr = μ₀(1 + χ)"
          ],
          prerequisites: ["magnetic-properties-materials"]
        },
        formulas: [
          {
            id: "intensity-magnetization",
            name: "Intensity of Magnetization",
            category: "base",
            formula: "I = M/V = m/V",
            latex: "I = \\frac{M_{total}}{V}",
            description: "Magnetic moment developed per unit volume of material",
            variables: [
              {
                symbol: "I",
                meaning: "Intensity of magnetization",
                unit: "A/m",
                typical_values: "0 to 10⁶ A/m"
              },
              {
                symbol: "M",
                meaning: "Total magnetic moment",
                unit: "A·m²",
                typical_values: "Depends on sample"
              },
              {
                symbol: "V",
                meaning: "Volume of material",
                unit: "m³",
                typical_values: "Sample volume"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["I = 0 for unmagnetized material", "I = χH (linear relation for weak fields)"],
            dimensionalCheck: "[I] = [M]/[V] = A·m²/m³ = A/m",
          },
          {
            id: "b-h-relation",
            name: "B-H Relation in Materials",
            category: "base",
            formula: "B = μ₀(H + I) = μ₀μrH",
            latex: "B = \\mu_0(H + I) = \\mu_0\\mu_r H",
            description: "Relation between B, H, and I in magnetic material",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field (induction)",
                unit: "T",
                typical_values: "mT to T"
              },
              {
                symbol: "H",
                meaning: "Magnetic intensity",
                unit: "A/m",
                typical_values: "Depends on source"
              },
              {
                symbol: "μ",
                meaning: "Permeability of material",
                unit: "H/m",
                typical_values: "μ₀μr"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Diamagnetic: B < μ₀H (μr < 1)", "Paramagnetic: B > μ₀H slightly (μr > 1)", "Ferromagnetic: B >> μ₀H (μr >> 1)"],
            dimensionalCheck: "[B] = [μ₀][H] = T",
          },
          {
            id: "permeability-relation",
            name: "Permeability Relations",
            category: "derived",
            formula: "μ = μ₀μr = μ₀(1 + χ)",
            latex: "\\mu = \\mu_0\\mu_r = \\mu_0(1 + \\chi)",
            description: "Absolute permeability in terms of relative permeability and susceptibility",
            variables: [
              {
                symbol: "μ",
                meaning: "Absolute permeability",
                unit: "H/m",
                typical_values: "~μ₀ to 10⁵μ₀"
              },
              {
                symbol: "μ₀",
                meaning: "Permeability of free space",
                unit: "H/m",
                typical_values: "4π × 10⁻⁷"
              },
              {
                symbol: "μr",
                meaning: "Relative permeability",
                unit: "dimensionless",
                typical_values: "0.99 to 10⁵"
              }
            ],
            derivedFrom: "b-h-relation",
            applications: [],
            specialCases: ["Diamagnetic: μr ≈ 0.99999 (slightly less than 1)", "Paramagnetic: μr ≈ 1.00001 (slightly more than 1)", "Ferromagnetic: μr can be 10³ to 10⁵"],
            dimensionalCheck: "[μ] = H/m",
          },
          {
            id: "in-terms-of-pole-strength",
            name: "In terms of pole strength",
            category: "derived",
            formula: "I = \\frac{q_m}{A}",
            latex: "I = \\frac{q_m}{A}",
            description: "Pole strength per unit area",
            variables: [],
            derivedFrom: "intensity-magnetization",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = [M]/[V] = A·m²/m³ = A/m",
            neet_frequency: "medium",
          },
          {
            id: "maximum-for-ferromagnet",
            name: "Maximum for ferromagnet",
            category: "derived",
            formula: "I_{sat}",
            latex: "I_{sat}",
            description: "Saturation magnetization",
            variables: [],
            derivedFrom: "intensity-magnetization",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = [M]/[V] = A·m²/m³ = A/m",
            neet_frequency: "medium",
          },
          {
            id: "in-vacuum",
            name: "In vacuum",
            category: "derived",
            formula: "B = \\mu_0 H",
            latex: "B = \\mu_0 H",
            description: "I = 0",
            variables: [],
            derivedFrom: "b-h-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][H] = T",
            neet_frequency: "high",
          },
          {
            id: "inside-solenoid-core",
            name: "Inside solenoid core",
            category: "derived",
            formula: "B = \\mu_0\\mu_r nI",
            latex: "B = \\mu_0\\mu_r nI",
            description: "μr times vacuum field",
            variables: [],
            derivedFrom: "b-h-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = [μ₀][H] = T",
            neet_frequency: "high",
          },
          {
            id: "from-susceptibility",
            name: "From susceptibility",
            category: "derived",
            formula: "\\mu_r = 1 + \\chi",
            latex: "\\mu_r = 1 + \\chi",
            description: "Relating μr and χ",
            variables: [],
            derivedFrom: "permeability-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[μ] = H/m",
            neet_frequency: "high",
          },
          {
            id: "for-iron-core",
            name: "For iron core",
            category: "derived",
            formula: "B = \\mu_r \\times B_0",
            latex: "B = \\mu_r \\times B_0",
            description: "Field enhancement in core",
            variables: [],
            derivedFrom: "permeability-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[μ] = H/m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing B and H",
            correct: "H is magnetizing field (cause), B is magnetic induction (effect). B = μH.",
            whyItHappens: "Both are called \"magnetic field\" loosely",
            neetExample: "NEET 2020: Relation between B, H, and I"
          },
          {
            mistake: "Forgetting μ₀ in B = μ₀(H + I)",
            correct: "B = μ₀(H + I), not B = H + I. The μ₀ factor is essential.",
            whyItHappens: "Simplifying the formula incorrectly",
            neetExample: "NEET 2019: Find B given H and I"
          },
          {
            mistake: "Thinking H inside a material equals H in vacuum",
            correct: "H remains same (determined by free currents), but B changes with material.",
            whyItHappens: "Not distinguishing H and B behavior in materials",
            neetExample: "NEET 2021: H and B in solenoid with iron core"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find B from H and χ",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Calculate μr from susceptibility",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Difference between B and H",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "B = μ₀(H + I) applications",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "μr and χ relationship",
            frequency: "high",
            yearAsked: [2019, 2020, 2023]
          },
          {
            pattern: "Field in solenoid with core",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "H and I contributing to B",
            analogy: "Salary and bonus making total income",
            mapping: "H is base effort, I is material contribution, B is total result"
          }
        ],
        questions: [],
      },
      {
        id: "hysteresis",
        name: "Hysteresis and B-H Curve",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Hysteresis is the lagging of B behind H in ferromagnetic materials. The B-H curve forms a loop showing retentivity (B at H=0) and coercivity (H needed to make B=0). Energy loss per cycle equals area of loop. Soft iron: narrow loop (transformers). Steel: wide loop (permanent magnets).",
          realWorldAnalogy: "Like elastic band that doesn't return exactly to original length after stretching - the magnetization 'remembers' its history and lags behind the applied field.",
          keyPoints: [
            "Retentivity (Br): B remaining when H reduced to zero",
            "Coercivity (Hc): H needed to reduce B to zero (reverse field)",
            "Saturation: B reaches maximum, further H increase gives no more B",
            "Hysteresis loss: energy lost per cycle = area of B-H loop",
            "Soft magnetic: low Hc, narrow loop (easy to magnetize/demagnetize)",
            "Hard magnetic: high Hc, wide loop (good for permanent magnets)",
            "Hysteresis loss ∝ frequency (transformers use soft iron)"
          ],
          prerequisites: ["magnetization-intensity"]
        },
        formulas: [
          {
            id: "hysteresis-loss",
            name: "Hysteresis Loss",
            category: "base",
            formula: "Energy loss per cycle = Area of B-H loop",
            latex: "W = \\oint H \\, dB = \\text{Area of hysteresis loop}",
            description: "Energy dissipated as heat per cycle of magnetization",
            variables: [
              {
                symbol: "W",
                meaning: "Energy loss per unit volume per cycle",
                unit: "J/m³",
                typical_values: "Depends on material"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Wider loop = more energy loss", "Loss ∝ frequency of AC"],
            dimensionalCheck: "[W] = J/m³",
          },
          {
            id: "retentivity-coercivity",
            name: "Retentivity and Coercivity",
            category: "base",
            formula: "Br = B at H = 0, Hc = H at B = 0",
            latex: "B_r = B|_{H=0}, \\quad H_c = H|_{B=0}",
            description: "Key parameters from hysteresis loop",
            variables: [
              {
                symbol: "Br",
                meaning: "Retentivity/Remanence",
                unit: "T",
                typical_values: "0.1-1.5 T"
              },
              {
                symbol: "Hc",
                meaning: "Coercivity",
                unit: "A/m",
                typical_values: "10-10⁶ A/m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Steel: Br ~ 1T, Hc ~ 5000 A/m (hard)", "Soft iron: Br ~ 1.4T, Hc ~ 100 A/m (soft)"],
            dimensionalCheck: "[Br] = T, [Hc] = A/m",
          },
          {
            id: "power-loss",
            name: "Power loss",
            category: "derived",
            formula: "P = W \\times f \\times V",
            latex: "P = W \\times f \\times V",
            description: "f = frequency, V = volume",
            variables: [],
            derivedFrom: "hysteresis-loss",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J/m³",
            neet_frequency: "medium",
          },
          {
            id: "minimize-loss",
            name: "Minimize loss",
            category: "derived",
            formula: "\\text{Use soft iron (narrow loop)}",
            latex: "\\text{Use soft iron (narrow loop)}",
            description: "For transformers, motors",
            variables: [],
            derivedFrom: "hysteresis-loss",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J/m³",
            neet_frequency: "high",
          },
          {
            id: "permanent-magnet",
            name: "Permanent magnet",
            category: "derived",
            formula: "B_r \\uparrow, H_c \\uparrow",
            latex: "B_r \\uparrow, H_c \\uparrow",
            description: "High retentivity and coercivity",
            variables: [],
            derivedFrom: "retentivity-coercivity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Br] = T, [Hc] = A/m",
            neet_frequency: "high",
          },
          {
            id: "electromagnet-core",
            name: "Electromagnet core",
            category: "derived",
            formula: "B_r \\downarrow, H_c \\downarrow",
            latex: "B_r \\downarrow, H_c \\downarrow",
            description: "Low values for easy demagnetization",
            variables: [],
            derivedFrom: "retentivity-coercivity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Br] = T, [Hc] = A/m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing retentivity with coercivity",
            correct: "Retentivity: B left when H = 0. Coercivity: H needed to make B = 0 (demagnetize).",
            whyItHappens: "Both are properties of the loop",
            neetExample: "NEET 2020: Which property is high for permanent magnets?"
          },
          {
            mistake: "Thinking soft magnetic means weak magnet",
            correct: "Soft = easy to magnetize/demagnetize. Can still have high B. Steel is \"hard\" not \"strong\".",
            whyItHappens: "Confusing magnetic hardness with strength",
            neetExample: "NEET 2019: Why soft iron for transformer cores?"
          },
          {
            mistake: "Not recognizing that hysteresis loop area = energy loss",
            correct: "Area of B-H loop gives energy lost per unit volume per cycle as heat.",
            whyItHappens: "Not connecting geometry to physics",
            neetExample: "NEET 2021: Material with least hysteresis loss"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Interpret B-H hysteresis curve",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Material selection for applications",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Compare soft and hard magnetic materials",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Material for permanent magnet vs electromagnet",
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
            pattern: "Retentivity and coercivity definitions",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Hysteresis loss minimization",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Hysteresis",
            analogy: "Elastic band with memory",
            mapping: "Band doesn't return to original size - magnetization lags and remembers"
          },
          {
            concept: "Hard vs soft magnetic",
            analogy: "Memory foam vs spring mattress",
            mapping: "Memory foam retains shape (hard magnetic), spring returns quickly (soft magnetic)"
          }
        ],
        questions: [],
      },
      {
        id: "permanent-electromagnets",
        name: "Permanent Magnets and Electromagnets",
        weightage: 1,
        difficulty: "easy",
        theory: {
          summary: "Permanent magnets retain magnetization without external field (high retentivity, high coercivity). Made from steel, alnico, or rare-earth alloys. Electromagnets can be switched on/off using current, need soft iron core (low hysteresis loss). Choice depends on application requirements.",
          realWorldAnalogy: "Permanent magnet is like a battery that never dies - always ready. Electromagnet is like a flashlight - powerful when on but can be turned off.",
          keyPoints: [
            "Permanent magnet: high Br, high Hc, wide hysteresis loop",
            "Materials: Steel, Alnico (Al-Ni-Co), Rare-earth (Nd-Fe-B, Sm-Co)",
            "Electromagnet: soft iron core, can be switched on/off",
            "Soft iron: low Hc, high μr, narrow loop (low hysteresis loss)",
            "Applications differ based on need for permanent vs controllable field",
            "Neodymium magnets are strongest permanent magnets"
          ],
          prerequisites: ["hysteresis"]
        },
        formulas: [
          {
            id: "electromagnet-field",
            name: "Electromagnet Field Strength",
            category: "derived",
            formula: "B = μ₀μrnI",
            latex: "B = \\mu_0\\mu_r nI",
            description: "Field inside solenoid with ferromagnetic core",
            variables: [
              {
                symbol: "B",
                meaning: "Magnetic field in core",
                unit: "T",
                typical_values: "0.1-2 T"
              },
              {
                symbol: "μr",
                meaning: "Relative permeability of core",
                unit: "dimensionless",
                typical_values: "1000-10000 for soft iron"
              },
              {
                symbol: "n",
                meaning: "Turns per unit length",
                unit: "turns/m",
                typical_values: "100-10000"
              },
              {
                symbol: "I",
                meaning: "Current",
                unit: "A",
                typical_values: "0.1-10 A"
              }
            ],
            derivedFrom: "b-h-relation",
            applications: [],
            specialCases: ["Without core: B = μ₀nI (much weaker)", "Soft iron core can give μr ~ 5000"],
            dimensionalCheck: "[B] = T",
          },
          {
            id: "field-enhancement",
            name: "Field enhancement",
            category: "derived",
            formula: "B_{core} = \\mu_r \\times B_{air}",
            latex: "B_{core} = \\mu_r \\times B_{air}",
            description: "Core multiplies field by μr",
            variables: [],
            derivedFrom: "electromagnet-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "high",
          },
          {
            id: "lifting-electromagnet",
            name: "Lifting electromagnet",
            category: "derived",
            formula: "F \\propto B^2",
            latex: "F \\propto B^2",
            description: "Force increases with B²",
            variables: [],
            derivedFrom: "electromagnet-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = T",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using steel for electromagnet core",
            correct: "Electromagnets need SOFT iron (low Hc) to demagnetize when current stops.",
            whyItHappens: "Thinking steel is better because it's \"stronger\"",
            neetExample: "NEET 2020: Why soft iron for electromagnets?"
          },
          {
            mistake: "Thinking permanent magnets are always stronger than electromagnets",
            correct: "Electromagnets can be made stronger with more current. MRI uses very strong electromagnets.",
            whyItHappens: "Generalizing from everyday experience",
            neetExample: "NEET 2019: Compare permanent and electromagnets"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Material choice for different applications",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Advantages/disadvantages of permanent vs electromagnets",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field with and without core",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Material for permanent magnet",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Material for electromagnet core",
            frequency: "high",
            yearAsked: [2019, 2020, 2023]
          },
          {
            pattern: "Comparing permanent and electromagnets",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Permanent vs electromagnet",
            analogy: "Tattoo vs temporary ink",
            mapping: "Permanent is always there, electromagnet can be switched on/off"
          }
        ],
        questions: [],
      }
    ];