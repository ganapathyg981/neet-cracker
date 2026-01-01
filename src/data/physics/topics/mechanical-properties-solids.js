// Mechanical Properties of Solids - 2% weightage (Tier 3)
// NCERT Class 11, Chapter 9

export const mechanicalPropertiesSolidsTopics = [
      {
        id: "stress-strain",
        name: "Stress and Strain",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Stress is the restoring force per unit area (σ = F/A). Strain is the fractional deformation (ε = ΔL/L). Stress causes strain. Hooke's law: within elastic limit, stress ∝ strain. Types: tensile, compressive, and shear. Stress has units of pressure, strain is dimensionless.",
          realWorldAnalogy: "Pulling a rubber band - the force you apply per unit area is stress, how much it stretches relative to original length is strain.",
          keyPoints: [
            "Stress σ = F/A (force per unit area)",
            "Longitudinal strain = ΔL/L (change in length / original length)",
            "Volume strain = ΔV/V (change in volume / original volume)",
            "Shear strain = θ ≈ tan θ = Δx/L (angle of deformation)",
            "Hooke's law: stress = E × strain (within elastic limit)",
            "SI unit: Stress - Pa (N/m²), Strain - dimensionless"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "stress-formula",
            name: "Stress",
            category: "base",
            formula: "σ = F/A",
            latex: "\\sigma = \\frac{F}{A}",
            description: "Internal restoring force per unit cross-sectional area",
            variables: [
              {
                symbol: "σ",
                meaning: "Stress",
                unit: "Pa or N/m²",
                typical_values: "10⁶ to 10⁹ Pa"
              },
              {
                symbol: "F",
                meaning: "Applied force",
                unit: "N",
                typical_values: "1 to 10⁶ N"
              },
              {
                symbol: "A",
                meaning: "Cross-sectional area",
                unit: "m²",
                typical_values: "10⁻⁶ to 10⁻² m²"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Same formula for all types, direction differs", "Stress is a tensor quantity (has direction associated with plane)"],
            dimensionalCheck: "[σ] = [F]/[A] = N/m² = Pa",
          },
          {
            id: "strain-formula",
            name: "Strain",
            category: "base",
            formula: "ε = ΔL/L or ΔV/V or θ",
            latex: "\\epsilon = \\frac{\\Delta L}{L}",
            description: "Fractional change in dimensions",
            variables: [
              {
                symbol: "ε",
                meaning: "Strain",
                unit: "dimensionless",
                typical_values: "10⁻⁴ to 10⁻¹"
              },
              {
                symbol: "ΔL",
                meaning: "Change in length",
                unit: "m",
                typical_values: "mm to cm"
              },
              {
                symbol: "L",
                meaning: "Original length",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Strain is dimensionless (ratio of same units)", "Can be expressed as percentage"],
            dimensionalCheck: "[ε] = dimensionless",
          },
          {
            id: "hookes-law",
            name: "Hooke's Law",
            category: "base",
            formula: "σ = E × ε",
            latex: "\\sigma = E \\times \\epsilon",
            description: "Within elastic limit, stress is proportional to strain",
            variables: [
              {
                symbol: "E",
                meaning: "Modulus of elasticity",
                unit: "Pa",
                typical_values: "10⁹ to 10¹¹ Pa"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Valid only within elastic limit", "E depends on material, not dimensions"],
            dimensionalCheck: "[E] = [σ]/[ε] = Pa",
          },
          {
            id: "tensile-stress",
            name: "Tensile stress",
            category: "derived",
            formula: "\\sigma = \\frac{F}{A}",
            latex: "\\sigma = \\frac{F}{A}",
            description: "Pulling/stretching",
            variables: [],
            derivedFrom: "stress-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = [F]/[A] = N/m² = Pa",
            neet_frequency: "high",
          },
          {
            id: "compressive-stress",
            name: "Compressive stress",
            category: "derived",
            formula: "\\sigma = \\frac{F}{A}",
            latex: "\\sigma = \\frac{F}{A}",
            description: "Pushing/compressing",
            variables: [],
            derivedFrom: "stress-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = [F]/[A] = N/m² = Pa",
            neet_frequency: "high",
          },
          {
            id: "shear-stress",
            name: "Shear stress",
            category: "derived",
            formula: "\\tau = \\frac{F_{tangential}}{A}",
            latex: "\\tau = \\frac{F_{tangential}}{A}",
            description: "Force parallel to surface",
            variables: [],
            derivedFrom: "stress-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = [F]/[A] = N/m² = Pa",
            neet_frequency: "medium",
          },
          {
            id: "longitudinal-strain",
            name: "Longitudinal strain",
            category: "derived",
            formula: "\\epsilon_L = \\frac{\\Delta L}{L}",
            latex: "\\epsilon_L = \\frac{\\Delta L}{L}",
            description: "Change in length",
            variables: [],
            derivedFrom: "strain-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "volume-strain",
            name: "Volume strain",
            category: "derived",
            formula: "\\epsilon_V = \\frac{\\Delta V}{V}",
            latex: "\\epsilon_V = \\frac{\\Delta V}{V}",
            description: "Change in volume",
            variables: [],
            derivedFrom: "strain-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "shear-strain",
            name: "Shear strain",
            category: "derived",
            formula: "\\gamma = \\theta \\approx \\frac{\\Delta x}{h}",
            latex: "\\gamma = \\theta \\approx \\frac{\\Delta x}{h}",
            description: "Angular deformation",
            variables: [],
            derivedFrom: "strain-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ε] = dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "force-on-wire",
            name: "Force on wire",
            category: "derived",
            formula: "F = \\frac{EA\\Delta L}{L}",
            latex: "F = \\frac{EA\\Delta L}{L}",
            description: "Tensile deformation",
            variables: [],
            derivedFrom: "hookes-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [σ]/[ε] = Pa",
            neet_frequency: "high",
          },
          {
            id: "spring-analogy",
            name: "Spring analogy",
            category: "derived",
            formula: "k = \\frac{EA}{L}",
            latex: "k = \\frac{EA}{L}",
            description: "Wire acts like spring",
            variables: [],
            derivedFrom: "hookes-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [σ]/[ε] = Pa",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing stress and pressure",
            correct: "Stress is internal restoring force/area, pressure is external force/area. Same units, different concepts.",
            whyItHappens: "Both have units of Pa",
            neetExample: "NEET 2020: Stress in a wire under tension"
          },
          {
            mistake: "Thinking strain has units",
            correct: "Strain = ΔL/L is dimensionless (length/length cancels)",
            whyItHappens: "Expecting all physical quantities to have units",
            neetExample: "NEET 2019: Units of strain"
          },
          {
            mistake: "Using Hooke's law beyond elastic limit",
            correct: "Hooke's law (σ ∝ ε) is valid only within elastic limit (proportional limit)",
            whyItHappens: "Overgeneralizing the law",
            neetExample: "NEET 2021: Stress-strain curve interpretation"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate stress in wire",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Calculate strain from elongation",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Types of stress and strain",
            difficulty: "easy"
          },
          {
            type: "graphical",
            description: "Stress-strain curve analysis",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Stress calculation",
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
            pattern: "Strain calculation",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Stress-strain curve regions",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Stress",
            analogy: "Pressure on a person in a crowd",
            mapping: "More people (force) in smaller area = more uncomfortable (stress)"
          },
          {
            concept: "Strain",
            analogy: "Stretching a rubber band",
            mapping: "Strain is how much longer it gets relative to original - 10% longer = 0.1 strain"
          }
        ],
        questions: [],
      },
      {
        id: "elastic-moduli",
        name: "Elastic Moduli",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Elastic modulus is ratio of stress to strain. Three types: Young's modulus (Y) for linear, Bulk modulus (B) for volumetric, and Shear modulus (G) for shape. All have units of Pa. Y = σ/ε, B = -P/(ΔV/V), G = τ/θ. Moduli are material properties, independent of dimensions.",
          realWorldAnalogy: "Young's modulus is like stiffness of a spring - higher Y means harder to stretch. Bulk modulus is how hard to squeeze (like compressing water vs air). Shear modulus is resistance to shape change (like shearing a deck of cards).",
          keyPoints: [
            "Young's modulus: Y = σ/ε = (F/A)/(ΔL/L) = FL/(AΔL)",
            "Bulk modulus: B = -P/(ΔV/V) = -PV/ΔV (pressure change)",
            "Shear modulus: G = τ/θ = (F/A)/θ",
            "All three have units of Pa (N/m²)",
            "Steel has high Y, rubber has low Y",
            "Incompressible fluids have infinite B"
          ],
          prerequisites: ["stress-strain"]
        },
        formulas: [
          {
            id: "youngs-modulus",
            name: "Young's Modulus",
            category: "base",
            formula: "Y = σ/ε = FL/(AΔL)",
            latex: "Y = \\frac{\\sigma}{\\epsilon} = \\frac{FL}{A\\Delta L}",
            description: "Ratio of tensile stress to tensile strain",
            variables: [
              {
                symbol: "Y",
                meaning: "Young's modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹² Pa"
              },
              {
                symbol: "F",
                meaning: "Applied force",
                unit: "N",
                typical_values: "1-10⁶ N"
              },
              {
                symbol: "L",
                meaning: "Original length",
                unit: "m",
                typical_values: "0.1-10 m"
              },
              {
                symbol: "A",
                meaning: "Cross-sectional area",
                unit: "m²",
                typical_values: "10⁻⁶-10⁻² m²"
              },
              {
                symbol: "ΔL",
                meaning: "Elongation",
                unit: "m",
                typical_values: "10⁻⁵-10⁻² m"
              }
            ],
            derivedFrom: "hookes-law",
            applications: [],
            specialCases: ["Y is material property, independent of dimensions", "Higher Y = stiffer material", "Rubber: ~10⁸ Pa, Steel: ~2×10¹¹ Pa"],
            dimensionalCheck: "[Y] = [stress]/[strain] = Pa",
          },
          {
            id: "bulk-modulus",
            name: "Bulk Modulus",
            category: "base",
            formula: "B = -P/(ΔV/V)",
            latex: "B = -\\frac{P}{\\Delta V/V} = -\\frac{PV}{\\Delta V}",
            description: "Ratio of pressure change to fractional volume change",
            variables: [
              {
                symbol: "B",
                meaning: "Bulk modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹¹ Pa"
              },
              {
                symbol: "P",
                meaning: "Pressure change",
                unit: "Pa",
                typical_values: "10⁵-10⁹ Pa"
              },
              {
                symbol: "ΔV",
                meaning: "Volume change",
                unit: "m³",
                typical_values: "Negative for compression"
              },
              {
                symbol: "V",
                meaning: "Original volume",
                unit: "m³",
                typical_values: "10⁻⁶-1 m³"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Negative sign: pressure increase causes volume decrease", "Water B ≈ 2.2 × 10⁹ Pa (nearly incompressible)", "Gases have low B (highly compressible)"],
            dimensionalCheck: "[B] = Pa",
          },
          {
            id: "shear-modulus",
            name: "Shear Modulus (Rigidity Modulus)",
            category: "base",
            formula: "G = τ/θ",
            latex: "G = \\frac{\\tau}{\\theta} = \\frac{F/A}{\\theta}",
            description: "Ratio of shear stress to shear strain",
            variables: [
              {
                symbol: "G",
                meaning: "Shear modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹¹ Pa"
              },
              {
                symbol: "τ",
                meaning: "Shear stress",
                unit: "Pa",
                typical_values: "F/A"
              },
              {
                symbol: "θ",
                meaning: "Shear strain (angle)",
                unit: "rad",
                typical_values: "10⁻⁵-10⁻¹ rad"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["G = 0 for fluids (cannot sustain shear stress)", "Related to Y and B by elasticity equations"],
            dimensionalCheck: "[G] = Pa",
          },
          {
            id: "elastic-energy",
            name: "Elastic Potential Energy",
            category: "derived",
            formula: "U = ½ × stress × strain × volume",
            latex: "U = \\frac{1}{2} \\sigma \\epsilon V = \\frac{1}{2} \\frac{F^2L}{AY} = \\frac{F\\Delta L}{2}",
            description: "Energy stored in elastically deformed body",
            variables: [
              {
                symbol: "U",
                meaning: "Elastic potential energy",
                unit: "J",
                typical_values: "10⁻³-10³ J"
              },
              {
                symbol: "V",
                meaning: "Volume of material",
                unit: "m³",
                typical_values: "AL"
              }
            ],
            derivedFrom: "youngs-modulus",
            applications: [],
            specialCases: ["Same as work done in stretching", "Area under force-extension graph"],
            dimensionalCheck: "[U] = J",
          },
          {
            id: "elongation-formula",
            name: "Elongation formula",
            category: "derived",
            formula: "\\Delta L = \\frac{FL}{AY}",
            latex: "\\Delta L = \\frac{FL}{AY}",
            description: "Find extension",
            variables: [],
            derivedFrom: "youngs-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Y] = [stress]/[strain] = Pa",
            neet_frequency: "high",
          },
          {
            id: "for-cylindrical-wire",
            name: "For cylindrical wire",
            category: "derived",
            formula: "Y = \\frac{4FL}{\\pi d^2 \\Delta L}",
            latex: "Y = \\frac{4FL}{\\pi d^2 \\Delta L}",
            description: "A = πd²/4",
            variables: [],
            derivedFrom: "youngs-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Y] = [stress]/[strain] = Pa",
            neet_frequency: "high",
          },
          {
            id: "energy-stored",
            name: "Energy stored",
            category: "derived",
            formula: "U = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} \\times V",
            latex: "U = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} \\times V",
            description: "Elastic PE",
            variables: [],
            derivedFrom: "youngs-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Y] = [stress]/[strain] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "compressibility",
            name: "Compressibility",
            category: "derived",
            formula: "K = \\frac{1}{B}",
            latex: "K = \\frac{1}{B}",
            description: "Inverse of bulk modulus",
            variables: [],
            derivedFrom: "bulk-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "volume-change",
            name: "Volume change",
            category: "derived",
            formula: "\\Delta V = -\\frac{PV}{B}",
            latex: "\\Delta V = -\\frac{PV}{B}",
            description: "Find compression",
            variables: [],
            derivedFrom: "bulk-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[B] = Pa",
            neet_frequency: "high",
          },
          {
            id: "lateral-displacement",
            name: "Lateral displacement",
            category: "derived",
            formula: "\\Delta x = \\frac{Fh}{AG}",
            latex: "\\Delta x = \\frac{Fh}{AG}",
            description: "h = height of block",
            variables: [],
            derivedFrom: "shear-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[G] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "for-small-angles",
            name: "For small angles",
            category: "derived",
            formula: "\\theta \\approx \\tan\\theta = \\frac{\\Delta x}{h}",
            latex: "\\theta \\approx \\tan\\theta = \\frac{\\Delta x}{h}",
            description: "Shear strain approximation",
            variables: [],
            derivedFrom: "shear-modulus",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[G] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "per-unit-volume",
            name: "Per unit volume",
            category: "derived",
            formula: "u = \\frac{U}{V} = \\frac{1}{2}\\sigma\\epsilon = \\frac{\\sigma^2}{2Y}",
            latex: "u = \\frac{U}{V} = \\frac{1}{2}\\sigma\\epsilon = \\frac{\\sigma^2}{2Y}",
            description: "Energy density",
            variables: [],
            derivedFrom: "elastic-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = J",
            neet_frequency: "high",
          },
          {
            id: "in-terms-of-force",
            name: "In terms of force",
            category: "derived",
            formula: "U = \\frac{1}{2}F\\Delta L = \\frac{F^2L}{2AY}",
            latex: "U = \\frac{1}{2}F\\Delta L = \\frac{F^2L}{2AY}",
            description: "Work done in stretching",
            variables: [],
            derivedFrom: "elastic-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking larger dimensions mean larger modulus",
            correct: "Moduli are material properties. Same material = same modulus regardless of size",
            whyItHappens: "Confusing intensive and extensive properties",
            neetExample: "NEET 2020: Compare Y of thin vs thick steel wires"
          },
          {
            mistake: "Forgetting negative sign in bulk modulus formula",
            correct: "B = -P/(ΔV/V). Negative ensures B is positive (ΔV is negative for compression)",
            whyItHappens: "Not considering that compression gives negative ΔV",
            neetExample: "NEET 2019: Volume change under pressure"
          },
          {
            mistake: "Using same formula for all three moduli",
            correct: "Y = σ/ε (linear), B = -P/(ΔV/V) (volume), G = τ/θ (shear). Different formulas!",
            whyItHappens: "Generalizing from one modulus",
            neetExample: "NEET 2021: Identify correct formula for each modulus"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate elongation using Y",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Calculate volume change using B",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Energy stored in stretched wire",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare moduli of different materials",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Young's modulus applications",
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
            pattern: "Elastic energy calculation",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Bulk modulus problems",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Young's modulus",
            analogy: "Spring constant for materials",
            mapping: "Higher Y = stiffer spring. Steel (high Y) like stiff spring, rubber (low Y) like loose spring"
          },
          {
            concept: "Bulk modulus",
            analogy: "Squeezing a balloon vs a rock",
            mapping: "Low B (balloon) = easy to compress. High B (rock) = hard to compress"
          }
        ],
        questions: [],
      },
      {
        id: "poissons-ratio",
        name: "Poisson's Ratio and Stress-Strain Curve",
        weightage: 0,
        difficulty: "medium",
        theory: {
          summary: "Poisson's ratio (σ) is ratio of lateral strain to longitudinal strain. For most materials, 0 < σ < 0.5. When stretched, materials get thinner (lateral contraction). Stress-strain curve shows proportional limit, elastic limit, yield point, ultimate strength, and breaking point. Beyond elastic limit, permanent deformation occurs.",
          realWorldAnalogy: "When you stretch a rubber band, it gets longer but also thinner. Poisson's ratio tells you how much thinner it gets relative to how much longer. The stress-strain curve is like a material's 'strength biography' - showing how it responds from gentle stretching to breaking.",
          keyPoints: [
            "Poisson's ratio: σ = -(lateral strain)/(longitudinal strain)",
            "Theoretical range: -1 to 0.5, typical: 0.2 to 0.4",
            "For incompressible material: σ = 0.5",
            "Stress-strain curve regions: proportional, elastic, plastic, fracture",
            "Elastic limit: max stress with complete recovery",
            "Yield point: where plastic deformation begins"
          ],
          prerequisites: ["stress-strain", "elastic-moduli"]
        },
        formulas: [
          {
            id: "poissons-ratio-formula",
            name: "Poisson's Ratio",
            category: "base",
            formula: "σ = -εlateral/εlongitudinal",
            latex: "\\sigma_P = -\\frac{\\epsilon_{lateral}}{\\epsilon_{longitudinal}} = -\\frac{\\Delta d/d}{\\Delta L/L}",
            description: "Ratio of lateral contraction to axial extension",
            variables: [
              {
                symbol: "σₚ",
                meaning: "Poisson's ratio",
                unit: "dimensionless",
                typical_values: "0.2 to 0.5"
              },
              {
                symbol: "εlateral",
                meaning: "Lateral strain",
                unit: "dimensionless",
                typical_values: "ΔD/D"
              },
              {
                symbol: "εlongitudinal",
                meaning: "Longitudinal strain",
                unit: "dimensionless",
                typical_values: "ΔL/L"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Negative sign: stretching causes thinning", "σₚ = 0.5 for incompressible materials (ΔV = 0)", "Steel ≈ 0.3, Rubber ≈ 0.5, Cork ≈ 0"],
            dimensionalCheck: "Dimensionless (ratio of strains)",
          },
          {
            id: "relation-moduli",
            name: "Relation Between Elastic Constants",
            category: "derived",
            formula: "Y = 2G(1 + σ) = 3B(1 - 2σ)",
            latex: "Y = 2G(1 + \\sigma_P) = 3B(1 - 2\\sigma_P)",
            description: "Relations connecting elastic moduli and Poisson ratio",
            variables: [
              {
                symbol: "Y",
                meaning: "Young's modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹¹ Pa"
              },
              {
                symbol: "G",
                meaning: "Shear modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹¹ Pa"
              },
              {
                symbol: "B",
                meaning: "Bulk modulus",
                unit: "Pa",
                typical_values: "10⁹-10¹¹ Pa"
              }
            ],
            derivedFrom: "poissons-ratio-formula",
            applications: [],
            specialCases: ["For σₚ = 0.5: B = ∞ (incompressible)", "Only 2 of the 4 constants are independent"],
            dimensionalCheck: "[Y] = [G] = [B] = Pa",
          },
          {
            id: "breaking-stress",
            name: "Breaking Stress",
            category: "derived",
            formula: "Breaking stress = F_breaking/A",
            latex: "\\sigma_{breaking} = \\frac{F_{breaking}}{A}",
            description: "Maximum stress a material can withstand before breaking",
            variables: [
              {
                symbol: "σbreaking",
                meaning: "Breaking stress",
                unit: "Pa",
                typical_values: "10⁷-10⁹ Pa"
              },
              {
                symbol: "Fbreaking",
                meaning: "Breaking load",
                unit: "N",
                typical_values: "Material dependent"
              }
            ],
            derivedFrom: "stress-formula",
            applications: [],
            specialCases: ["Material property, independent of dimensions", "Ductile materials show warning before breaking", "Brittle materials break suddenly"],
            dimensionalCheck: "[σ] = Pa",
          },
          {
            id: "diameter-change",
            name: "Diameter change",
            category: "derived",
            formula: "\\Delta d = -\\sigma_P \\cdot d \\cdot \\frac{\\Delta L}{L}",
            latex: "\\Delta d = -\\sigma_P \\cdot d \\cdot \\frac{\\Delta L}{L}",
            description: "Wire stretching",
            variables: [],
            derivedFrom: "poissons-ratio-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless (ratio of strains)",
            neet_frequency: "medium",
          },
          {
            id: "volume-change",
            name: "Volume change",
            category: "derived",
            formula: "\\frac{\\Delta V}{V} = \\epsilon_L(1 - 2\\sigma_P)",
            latex: "\\frac{\\Delta V}{V} = \\epsilon_L(1 - 2\\sigma_P)",
            description: "During stretching",
            variables: [],
            derivedFrom: "poissons-ratio-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless (ratio of strains)",
            neet_frequency: "medium",
          },
          {
            id: "find-g-from-y",
            name: "Find G from Y",
            category: "derived",
            formula: "G = \\frac{Y}{2(1+\\sigma_P)}",
            latex: "G = \\frac{Y}{2(1+\\sigma_P)}",
            description: "Given Y and σ",
            variables: [],
            derivedFrom: "relation-moduli",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Y] = [G] = [B] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "find-b-from-y",
            name: "Find B from Y",
            category: "derived",
            formula: "B = \\frac{Y}{3(1-2\\sigma_P)}",
            latex: "B = \\frac{Y}{3(1-2\\sigma_P)}",
            description: "Given Y and σ",
            variables: [],
            derivedFrom: "relation-moduli",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Y] = [G] = [B] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "maximum-load",
            name: "Maximum load",
            category: "derived",
            formula: "F_{max} = \\sigma_{breaking} \\times A",
            latex: "F_{max} = \\sigma_{breaking} \\times A",
            description: "Safe load design",
            variables: [],
            derivedFrom: "breaking-stress",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = Pa",
            neet_frequency: "high",
          },
          {
            id: "with-safety-factor",
            name: "With safety factor",
            category: "derived",
            formula: "F_{safe} = \\frac{\\sigma_{breaking} \\times A}{n}",
            latex: "F_{safe} = \\frac{\\sigma_{breaking} \\times A}{n}",
            description: "n = safety factor",
            variables: [],
            derivedFrom: "breaking-stress",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = Pa",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting negative sign in Poisson ratio definition",
            correct: "σₚ = -(lateral strain)/(longitudinal strain). Negative because they're opposite (stretch → thin)",
            whyItHappens: "Not considering the opposing nature of the strains",
            neetExample: "NEET 2020: Sign of lateral strain when wire is stretched"
          },
          {
            mistake: "Confusing elastic limit with proportional limit",
            correct: "Proportional limit: stress ∝ strain ends. Elastic limit: reversibility ends. Proportional < Elastic",
            whyItHappens: "Similar concepts, often close together on curve",
            neetExample: "NEET 2019: Difference between elastic and proportional limit"
          },
          {
            mistake: "Thinking volume always stays constant when stretched",
            correct: "Volume changes unless σₚ = 0.5. ΔV/V = ε(1 - 2σₚ)",
            whyItHappens: "Assuming incompressibility for all materials",
            neetExample: "NEET 2021: Volume change when wire is stretched"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate lateral strain from Poisson ratio",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Breaking load calculation",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Stress-strain curve interpretation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Relation between elastic constants",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Poisson's ratio problems",
            frequency: "medium",
            yearAsked: [
              2018,
              2019,
              2021,
              2023
            ]
          },
          {
            pattern: "Breaking stress/load",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Stress-strain curve regions",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Poisson's ratio",
            analogy: "Squeezing toothpaste tube",
            mapping: "Squeeze (compress) the tube and paste comes out the ends (lateral expansion)"
          },
          {
            concept: "Stress-strain curve",
            analogy: "Stretching a spring",
            mapping: "First it stretches proportionally, then it starts to deform, finally it breaks"
          }
        ],
        questions: [],
      }
    ];