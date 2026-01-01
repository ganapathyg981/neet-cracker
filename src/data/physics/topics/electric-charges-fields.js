// Electric Charges and Fields - 3% weightage (Tier 2)
// NCERT Class 12, Chapter 1

export const electricChargesFieldsTopics = [
      {
        id: "electric-charge-properties",
        name: "Electric Charge and Its Properties",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "Electric charge is a fundamental property of matter. Charges are of two types: positive and negative. Like charges repel, unlike charges attract. Charge is quantized (q = ne) and conserved. The SI unit is Coulomb (C).",
          realWorldAnalogy: "Charge is like money in two currencies - positive and negative. You can transfer between accounts (objects) but total balance (charge) stays same. Minimum transaction is 1 coin (electron charge).",
          keyPoints: [
            "Two types: positive (+) and negative (−)",
            "Like charges repel, unlike charges attract",
            "Charge is quantized: q = ne (n = integer)",
            "Minimum charge = e = 1.6 × 10⁻¹⁹ C",
            "Charge is conserved in all processes",
            "Charge is invariant (same in all frames)",
            "Charge is additive (algebraic sum)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "charge-quantization",
            name: "Quantization of Charge",
            category: "base",
            formula: "q = ne",
            latex: "q = ne, \\quad n = 0, \\pm 1, \\pm 2, \\pm 3...",
            description: "Charge exists only in integral multiples of electronic charge",
            variables: [
              {
                symbol: "q",
                meaning: "Total charge",
                unit: "C (Coulomb)",
                typical_values: "μC to mC in problems"
              },
              {
                symbol: "n",
                meaning: "Number of excess/deficit electrons",
                unit: "dimensionless",
                typical_values: "Integer"
              },
              {
                symbol: "e",
                meaning: "Electronic charge",
                unit: "C",
                typical_values: "1.6 × 10⁻¹⁹ C"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Electron: q = -e = -1.6 × 10⁻¹⁹ C", "Proton: q = +e = +1.6 × 10⁻¹⁹ C", "Quarks have fractional charge (e/3, 2e/3) but don't exist free"],
            dimensionalCheck: "[q] = C",
          },
          {
            id: "number-of-electrons",
            name: "Number of electrons",
            category: "derived",
            formula: "n = \\frac{q}{e}",
            latex: "n = \\frac{q}{e}",
            description: "Finding electron count",
            variables: [],
            derivedFrom: "charge-quantization",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "high",
          },
          {
            id: "charge-on-ion",
            name: "Charge on ion",
            category: "derived",
            formula: "q = \\pm Ze",
            latex: "q = \\pm Ze",
            description: "Z = atomic number for fully ionized",
            variables: [],
            derivedFrom: "charge-quantization",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking charge can be created or destroyed",
            correct: "Charge is conserved. When you charge a body, electrons transfer (not created).",
            whyItHappens: "Confusion with charging by friction",
            neetExample: "NEET 2019: Conservation of charge in charging processes"
          },
          {
            mistake: "Forgetting charge is quantized",
            correct: "Charge must be q = ne. Answers like q = 2.4e or q = 0.5e are impossible.",
            whyItHappens: "Treating charge as continuous quantity",
            neetExample: "NEET 2020: Which of these charges is possible?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find number of electrons for given charge",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Properties of electric charge",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Electron count from charge",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Properties of charge",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Quantization",
            analogy: "Currency coins",
            mapping: "Cannot have half a coin - charge cannot be fractional of e"
          }
        ],
        questions: [],
      },
      {
        id: "coulombs-law",
        name: "Coulomb's Law",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Coulomb's law states that force between two point charges is directly proportional to product of charges and inversely proportional to square of distance: F = kq₁q₂/r². The constant k = 9 × 10⁹ N·m²/C². Force is along the line joining charges.",
          realWorldAnalogy: "Like gravity between masses, but for charges. Unlike gravity (always attractive), electric force can be attractive or repulsive. And it's much stronger than gravity!",
          keyPoints: [
            "F = kq₁q₂/r² = q₁q₂/(4πε₀r²)",
            "k = 1/(4πε₀) = 9 × 10⁹ N·m²/C²",
            "ε₀ = 8.85 × 10⁻¹² C²/(N·m²)",
            "Force is along line joining charges (central force)",
            "Obeys Newton's third law (F₁₂ = -F₂₁)",
            "Superposition: F_net = ΣF_i (vector sum)",
            "In medium: F = kq₁q₂/(εᵣr²) = F₀/εᵣ"
          ],
          prerequisites: ["electric-charge-properties"]
        },
        formulas: [
          {
            id: "coulomb-force",
            name: "Coulomb's Law",
            category: "base",
            formula: "F = kq₁q₂/r²",
            latex: "F = \\frac{kq_1q_2}{r^2} = \\frac{q_1q_2}{4\\pi\\varepsilon_0 r^2}",
            description: "Electrostatic force between two point charges",
            variables: [
              {
                symbol: "F",
                meaning: "Force magnitude",
                unit: "N",
                typical_values: "μN to N"
              },
              {
                symbol: "k",
                meaning: "Coulomb constant",
                unit: "N·m²/C²",
                typical_values: "9 × 10⁹"
              },
              {
                symbol: "q₁, q₂",
                meaning: "Charges",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "r",
                meaning: "Distance between charges",
                unit: "m",
                typical_values: "cm to m"
              },
              {
                symbol: "ε₀",
                meaning: "Permittivity of free space",
                unit: "C²/(N·m²)",
                typical_values: "8.85 × 10⁻¹²"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["F > 0 (repulsive) if charges have same sign", "F < 0 (attractive) if charges have opposite signs", "F ∝ 1/r² (inverse square law)"],
            dimensionalCheck: "[F] = [k][q²]/[r²] = (N·m²/C²)(C²)/m² = N ✓",
          },
          {
            id: "superposition",
            name: "Principle of Superposition",
            category: "base",
            formula: "F_net = F₁ + F₂ + F₃ + ... (vector sum)",
            latex: "\\vec{F}_{net} = \\sum_i \\vec{F}_i = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...",
            description: "Net force on a charge is vector sum of individual forces",
            variables: [
              {
                symbol: "F_net",
                meaning: "Resultant force",
                unit: "N",
                typical_values: "Depends on geometry"
              },
              {
                symbol: "F_i",
                meaning: "Force due to ith charge",
                unit: "N",
                typical_values: "Individual forces"
              }
            ],
            derivedFrom: "coulomb-force",
            applications: [],
            specialCases: ["Forces are vectors - add using parallelogram law", "Each force independent of others"],
            dimensionalCheck: "[F] = N",
          },
          {
            id: "force-equilibrium",
            name: "Equilibrium of Charges",
            category: "derived",
            formula: "Position for third charge equilibrium",
            latex: "\\text{For }q_3\\text{ between }q_1, q_2: \\frac{q_1}{x^2} = \\frac{q_2}{(d-x)^2}",
            description: "Finding position where net force on a charge is zero",
            variables: [
              {
                symbol: "x",
                meaning: "Distance from q₁",
                unit: "m",
                typical_values: "Between 0 and d"
              },
              {
                symbol: "d",
                meaning: "Distance between q₁ and q₂",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: "superposition",
            applications: [],
            specialCases: ["Equilibrium point closer to smaller charge", "For opposite charges: equilibrium outside the charges", "For like charges: equilibrium between them"],
            dimensionalCheck: "[x] = m",
          },
          {
            id: "force-in-medium",
            name: "Force in medium",
            category: "derived",
            formula: "F = \\frac{kq_1q_2}{\\varepsilon_r r^2} = \\frac{F_0}{\\varepsilon_r}",
            latex: "F = \\frac{kq_1q_2}{\\varepsilon_r r^2} = \\frac{F_0}{\\varepsilon_r}",
            description: "εᵣ = dielectric constant",
            variables: [],
            derivedFrom: "coulomb-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [k][q²]/[r²] = (N·m²/C²)(C²)/m² = N ✓",
            neet_frequency: "high",
          },
          {
            id: "vector-form",
            name: "Vector form",
            category: "derived",
            formula: "\\vec{F}_{12} = \\frac{kq_1q_2}{r^2}\\hat{r}_{12}",
            latex: "\\vec{F}_{12} = \\frac{kq_1q_2}{r^2}\\hat{r}_{12}",
            description: "Direction from 1 to 2",
            variables: [],
            derivedFrom: "coulomb-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [k][q²]/[r²] = (N·m²/C²)(C²)/m² = N ✓",
            neet_frequency: "medium",
          },
          {
            id: "two-forces-at-angle",
            name: "Two forces at angle θ",
            category: "derived",
            formula: "F = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos\\theta}",
            latex: "F = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos\\theta}",
            description: "Vector addition",
            variables: [],
            derivedFrom: "superposition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          },
          {
            id: "equilibrium",
            name: "Equilibrium",
            category: "derived",
            formula: "\\vec{F}_{net} = 0",
            latex: "\\vec{F}_{net} = 0",
            description: "Forces balance",
            variables: [],
            derivedFrom: "superposition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = N",
            neet_frequency: "high",
          },
          {
            id: "equal-charges",
            name: "Equal charges",
            category: "derived",
            formula: "x = \\frac{d}{2}",
            latex: "x = \\frac{d}{2}",
            description: "Midpoint for q₁ = q₂",
            variables: [],
            derivedFrom: "force-equilibrium",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = m",
            neet_frequency: "high",
          },
          {
            id: "unequal-charges",
            name: "Unequal charges",
            category: "derived",
            formula: "x = \\frac{d}{1 + \\sqrt{q_2/q_1}}",
            latex: "x = \\frac{d}{1 + \\sqrt{q_2/q_1}}",
            description: "Closer to smaller charge",
            variables: [],
            derivedFrom: "force-equilibrium",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting to use vector addition for forces",
            correct: "Forces are vectors. Use components or parallelogram law, not simple addition.",
            whyItHappens: "Treating force magnitude as the force",
            neetExample: "NEET 2020: Net force on charge due to two other charges at angle"
          },
          {
            mistake: "Not considering direction for attractive/repulsive",
            correct: "Like charges: force away from each other. Unlike: toward each other.",
            whyItHappens: "Only calculating magnitude, ignoring direction",
            neetExample: "NEET 2019: Direction of force on charge in an arrangement"
          },
          {
            mistake: "Forgetting dielectric effect on force",
            correct: "In medium: F = F₀/εᵣ (force reduces by factor of εᵣ)",
            whyItHappens: "Using vacuum formula in medium",
            neetExample: "NEET 2021: Force between charges in water vs air"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Force between two charges",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Force with multiple charges (superposition)",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Equilibrium position problems",
            difficulty: "hard"
          },
          {
            type: "numerical",
            description: "Effect of medium on force",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Direct Coulomb law application",
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
            pattern: "Superposition with 3+ charges",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Equilibrium position",
            frequency: "medium",
            yearAsked: [
              2018,
              2020,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Coulomb's law",
            analogy: "Newton's gravitation for charges",
            mapping: "F ∝ q₁q₂/r² just like F ∝ m₁m₂/r², but with charge instead of mass"
          },
          {
            concept: "Superposition",
            analogy: "Adding debts and credits",
            mapping: "Each force acts independently, just add them (as vectors)"
          }
        ],
        questions: [],
      },
      {
        id: "electric-field",
        name: "Electric Field and Field Lines",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Electric field is force per unit positive test charge: E = F/q₀ = kQ/r² for point charge. Field lines represent direction of force on positive charge. They start from positive and end on negative charges, never cross, and are denser where field is stronger.",
          realWorldAnalogy: "Electric field is like wind - you don't see it but feel its effect. A charged particle in an electric field feels force just like a leaf in wind. Field lines are like wind flow patterns.",
          keyPoints: [
            "E = F/q₀ (force per unit positive charge)",
            "E = kQ/r² for point charge (radially outward for +ve)",
            "SI unit: N/C or V/m",
            "Vector quantity - has magnitude and direction",
            "Field lines: tangent gives direction, density gives magnitude",
            "Field lines never cross each other",
            "Superposition: E_net = ΣE_i (vector sum)"
          ],
          prerequisites: ["coulombs-law"]
        },
        formulas: [
          {
            id: "electric-field-point",
            name: "Electric Field of Point Charge",
            category: "base",
            formula: "E = kQ/r²",
            latex: "E = \\frac{kQ}{r^2} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}",
            description: "Electric field magnitude at distance r from point charge Q",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field magnitude",
                unit: "N/C or V/m",
                typical_values: "10-10⁶ N/C"
              },
              {
                symbol: "Q",
                meaning: "Source charge",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "r",
                meaning: "Distance from charge",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: "coulomb-force",
            applications: [],
            specialCases: ["E points away from +Q, toward -Q", "E = 0 at infinity", "E ∝ 1/r² (inverse square law)"],
            dimensionalCheck: "[E] = [k][Q]/[r²] = N/C ✓",
          },
          {
            id: "field-ring",
            name: "Electric Field on Axis of Ring",
            category: "derived",
            formula: "E = kQx/(R² + x²)^(3/2)",
            latex: "E = \\frac{kQx}{(R^2 + x^2)^{3/2}}",
            description: "Electric field at distance x from center of uniformly charged ring on its axis",
            variables: [
              {
                symbol: "E",
                meaning: "Field along axis",
                unit: "N/C",
                typical_values: "Along axis"
              },
              {
                symbol: "Q",
                meaning: "Total charge on ring",
                unit: "C",
                typical_values: "Given"
              },
              {
                symbol: "R",
                meaning: "Radius of ring",
                unit: "m",
                typical_values: "Given"
              },
              {
                symbol: "x",
                meaning: "Distance from center on axis",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: ["E = 0 at center of ring", "E_max at x = R/√2"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "field-disk",
            name: "Electric Field of Uniformly Charged Disk",
            category: "derived",
            formula: "E = (σ/2ε₀)[1 - x/√(R² + x²)]",
            latex: "E = \\frac{\\sigma}{2\\varepsilon_0}\\left[1 - \\frac{x}{\\sqrt{R^2 + x^2}}\\right]",
            description: "Field on axis of uniformly charged disk",
            variables: [
              {
                symbol: "σ",
                meaning: "Surface charge density",
                unit: "C/m²",
                typical_values: "μC/m²"
              },
              {
                symbol: "R",
                meaning: "Disk radius",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: "field-ring",
            applications: [],
            specialCases: ["For x << R: E → σ/(2ε₀) (infinite sheet)", "For x >> R: E → kQ/x² (point charge)"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "field-infinite-sheet",
            name: "Electric Field of Infinite Sheet",
            category: "derived",
            formula: "E = σ/(2ε₀)",
            latex: "E = \\frac{\\sigma}{2\\varepsilon_0}",
            description: "Electric field due to infinite uniformly charged sheet (non-conducting)",
            variables: [
              {
                symbol: "σ",
                meaning: "Surface charge density",
                unit: "C/m²",
                typical_values: "μC/m²"
              }
            ],
            derivedFrom: "gauss-law",
            applications: [],
            specialCases: ["E is constant - doesn't depend on distance", "Direction perpendicular to sheet"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "force-on-charge-q",
            name: "Force on charge q",
            category: "derived",
            formula: "F = qE",
            latex: "F = qE",
            description: "Force = charge × field",
            variables: [],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [k][Q]/[r²] = N/C ✓",
            neet_frequency: "high",
          },
          {
            id: "vector-form",
            name: "Vector form",
            category: "derived",
            formula: "\\vec{E} = \\frac{kQ}{r^2}\\hat{r}",
            latex: "\\vec{E} = \\frac{kQ}{r^2}\\hat{r}",
            description: "Radial direction",
            variables: [],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [k][Q]/[r²] = N/C ✓",
            neet_frequency: "medium",
          },
          {
            id: "at-center-x0",
            name: "At center (x=0)",
            category: "derived",
            formula: "E = 0",
            latex: "E = 0",
            description: "Fields cancel by symmetry",
            variables: [],
            derivedFrom: "field-ring",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "maximum-e",
            name: "Maximum E",
            category: "derived",
            formula: "E_{max} \\text{ at } x = \\frac{R}{\\sqrt{2}}",
            latex: "E_{max} \\text{ at } x = \\frac{R}{\\sqrt{2}}",
            description: "Derivative = 0",
            variables: [],
            derivedFrom: "field-ring",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "medium",
          },
          {
            id: "far-from-ring-x-r",
            name: "Far from ring (x >> R)",
            category: "derived",
            formula: "E \\approx \\frac{kQ}{x^2}",
            latex: "E \\approx \\frac{kQ}{x^2}",
            description: "Acts like point charge",
            variables: [],
            derivedFrom: "field-ring",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "medium",
          },
          {
            id: "very-close-x-0",
            name: "Very close (x → 0)",
            category: "derived",
            formula: "E \\approx \\frac{\\sigma}{2\\varepsilon_0}",
            latex: "E \\approx \\frac{\\sigma}{2\\varepsilon_0}",
            description: "Like infinite sheet",
            variables: [],
            derivedFrom: "field-disk",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "far-away-x-r",
            name: "Far away (x >> R)",
            category: "derived",
            formula: "E \\approx \\frac{kQ}{x^2}",
            latex: "E \\approx \\frac{kQ}{x^2}",
            description: "Like point charge",
            variables: [],
            derivedFrom: "field-disk",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "medium",
          },
          {
            id: "two-parallel-sheets",
            name: "Two parallel sheets",
            category: "derived",
            formula: "E_{between} = \\frac{\\sigma}{\\varepsilon_0}, E_{outside} = 0",
            latex: "E_{between} = \\frac{\\sigma}{\\varepsilon_0}, E_{outside} = 0",
            description: "Opposite charges",
            variables: [],
            derivedFrom: "field-infinite-sheet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "same-charge-sheets",
            name: "Same charge sheets",
            category: "derived",
            formula: "E_{between} = 0, E_{outside} = \\frac{\\sigma}{\\varepsilon_0}",
            latex: "E_{between} = 0, E_{outside} = \\frac{\\sigma}{\\varepsilon_0}",
            description: "Like charges",
            variables: [],
            derivedFrom: "field-infinite-sheet",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing field of non-conducting vs conducting sheet",
            correct: "Non-conducting sheet: E = σ/(2ε₀). Conductor surface: E = σ/ε₀.",
            whyItHappens: "Two similar formulas with factor of 2 difference",
            neetExample: "NEET 2020: Field due to infinite non-conducting sheet"
          },
          {
            mistake: "Wrong direction of electric field",
            correct: "Field points away from positive charge, toward negative charge.",
            whyItHappens: "Confusing with force direction on negative test charge",
            neetExample: "NEET 2019: Direction of E between two charges"
          },
          {
            mistake: "Forgetting E = 0 at center of ring",
            correct: "At center of uniformly charged ring, E = 0 by symmetry.",
            whyItHappens: "Using formula without checking special case",
            neetExample: "NEET 2021: Field at center of charged ring"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Field of point charge",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field on ring axis",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Field of infinite sheet/parallel sheets",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Properties of field lines",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Field due to point charges",
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
            pattern: "Ring axis field",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Infinite sheet field",
            frequency: "medium",
            yearAsked: [
              2018,
              2020,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Electric field",
            analogy: "Gravity field around Earth",
            mapping: "Just as g = F/m, we have E = F/q"
          },
          {
            concept: "Field lines",
            analogy: "Wind flow patterns",
            mapping: "Denser lines = stronger field, like stronger wind in narrow passages"
          }
        ],
        questions: [],
      },
      {
        id: "electric-dipole",
        name: "Electric Dipole",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Electric dipole is a system of two equal and opposite charges separated by small distance. Dipole moment p = q × 2a (direction from -q to +q). Field on axis: E = 2kp/r³. Field on equator: E = kp/r³. In uniform field, dipole experiences torque τ = pE sinθ.",
          realWorldAnalogy: "A bar magnet has N and S poles - similarly, dipole has +q and -q. Water molecule is a natural dipole (bent shape makes O slightly negative, H's positive).",
          keyPoints: [
            "Dipole moment: p = q × 2a (unit: C·m)",
            "Direction: from -q to +q",
            "Axial field: E_a = 2kp/r³ (along p)",
            "Equatorial field: E_e = kp/r³ (opposite to p)",
            "E_axial = 2 × E_equatorial (same distance)",
            "Torque in field: τ = p × E = pE sinθ",
            "PE in field: U = -p·E = -pE cosθ"
          ],
          prerequisites: ["electric-field"]
        },
        formulas: [
          {
            id: "dipole-moment",
            name: "Electric Dipole Moment",
            category: "base",
            formula: "p = q × 2a",
            latex: "p = q \\times 2a",
            description: "Magnitude of dipole moment",
            variables: [
              {
                symbol: "p",
                meaning: "Dipole moment",
                unit: "C·m",
                typical_values: "10⁻³⁰ C·m for molecules"
              },
              {
                symbol: "q",
                meaning: "Magnitude of each charge",
                unit: "C",
                typical_values: "Given"
              },
              {
                symbol: "2a",
                meaning: "Separation between charges",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Dipole is point dipole when r >> 2a", "Vector quantity - has direction"],
            dimensionalCheck: "[p] = C·m",
          },
          {
            id: "dipole-axial-field",
            name: "Electric Field on Dipole Axis",
            category: "derived",
            formula: "E_a = 2kp/r³",
            latex: "E_a = \\frac{2kp}{r^3} = \\frac{p}{2\\pi\\varepsilon_0 r^3}",
            description: "Field at distance r from center on the axis (for r >> 2a)",
            variables: [
              {
                symbol: "E_a",
                meaning: "Axial field",
                unit: "N/C",
                typical_values: "Along dipole direction"
              },
              {
                symbol: "r",
                meaning: "Distance from center",
                unit: "m",
                typical_values: "r >> 2a"
              }
            ],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: ["E ∝ 1/r³ (faster decay than point charge)", "Direction along dipole axis (same as p)"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "dipole-equatorial-field",
            name: "Electric Field on Dipole Equator",
            category: "derived",
            formula: "E_e = kp/r³",
            latex: "E_e = \\frac{kp}{r^3} = \\frac{p}{4\\pi\\varepsilon_0 r^3}",
            description: "Field at distance r from center on perpendicular bisector (for r >> 2a)",
            variables: [
              {
                symbol: "E_e",
                meaning: "Equatorial field",
                unit: "N/C",
                typical_values: "Opposite to p"
              }
            ],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: ["E ∝ 1/r³", "Direction opposite to dipole moment"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "dipole-torque",
            name: "Torque on Dipole in Uniform Field",
            category: "derived",
            formula: "τ = pE sinθ",
            latex: "\\tau = pE\\sin\\theta = |\\vec{p} \\times \\vec{E}|",
            description: "Torque experienced by dipole in uniform electric field",
            variables: [
              {
                symbol: "τ",
                meaning: "Torque",
                unit: "N·m",
                typical_values: "Depends on p, E, θ"
              },
              {
                symbol: "θ",
                meaning: "Angle between p and E",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["τ = 0 when p ∥ E (stable) or p antiparallel E (unstable)", "Torque tries to align p with E"],
            dimensionalCheck: "[τ] = [p][E] = C·m × N/C = N·m ✓",
          },
          {
            id: "dipole-potential-energy",
            name: "Potential Energy of Dipole in Field",
            category: "derived",
            formula: "U = -pE cosθ = -p·E",
            latex: "U = -pE\\cos\\theta = -\\vec{p} \\cdot \\vec{E}",
            description: "Potential energy of dipole in uniform electric field",
            variables: [
              {
                symbol: "U",
                meaning: "Potential energy",
                unit: "J",
                typical_values: "-pE to +pE"
              }
            ],
            derivedFrom: "dipole-torque",
            applications: [],
            specialCases: ["U = 0 when θ = 90°", "Work to rotate 90° to 180° = pE", "Work to rotate 0° to 180° = 2pE"],
            dimensionalCheck: "[U] = [p][E] = J",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\vec{p}: -q \\rightarrow +q",
            latex: "\\vec{p}: -q \\rightarrow +q",
            description: "Points from negative to positive",
            variables: [],
            derivedFrom: "dipole-moment",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = C·m",
            neet_frequency: "high",
          },
          {
            id: "exact-formula",
            name: "Exact formula",
            category: "derived",
            formula: "E = \\frac{2kpr}{(r^2 - a^2)^2}",
            latex: "E = \\frac{2kpr}{(r^2 - a^2)^2}",
            description: "General case",
            variables: [],
            derivedFrom: "dipole-axial-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "low",
          },
          {
            id: "direction-2",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E}_a \\parallel \\vec{p}",
            latex: "\\vec{E}_a \\parallel \\vec{p}",
            description: "Same direction as p",
            variables: [],
            derivedFrom: "dipole-axial-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "ratio",
            name: "Ratio",
            category: "derived",
            formula: "E_a = 2E_e",
            latex: "E_a = 2E_e",
            description: "At same distance r",
            variables: [],
            derivedFrom: "dipole-equatorial-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "direction-3",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E}_e \\text{ opposite to } \\vec{p}",
            latex: "\\vec{E}_e \\text{ opposite to } \\vec{p}",
            description: "Antiparallel to p",
            variables: [],
            derivedFrom: "dipole-equatorial-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "maximum-torque",
            name: "Maximum torque",
            category: "derived",
            formula: "\\tau_{max} = pE \\text{ when } \\theta = 90°",
            latex: "\\tau_{max} = pE \\text{ when } \\theta = 90°",
            description: "Perpendicular to field",
            variables: [],
            derivedFrom: "dipole-torque",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [p][E] = C·m × N/C = N·m ✓",
            neet_frequency: "high",
          },
          {
            id: "equilibrium",
            name: "Equilibrium",
            category: "derived",
            formula: "\\tau = 0 \\text{ when } \\theta = 0° \\text{ or } 180°",
            latex: "\\tau = 0 \\text{ when } \\theta = 0° \\text{ or } 180°",
            description: "Parallel or antiparallel",
            variables: [],
            derivedFrom: "dipole-torque",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = [p][E] = C·m × N/C = N·m ✓",
            neet_frequency: "high",
          },
          {
            id: "minimum-pe",
            name: "Minimum PE",
            category: "derived",
            formula: "U_{min} = -pE \\text{ when } \\theta = 0°",
            latex: "U_{min} = -pE \\text{ when } \\theta = 0°",
            description: "Stable equilibrium",
            variables: [],
            derivedFrom: "dipole-potential-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [p][E] = J",
            neet_frequency: "high",
          },
          {
            id: "maximum-pe",
            name: "Maximum PE",
            category: "derived",
            formula: "U_{max} = +pE \\text{ when } \\theta = 180°",
            latex: "U_{max} = +pE \\text{ when } \\theta = 180°",
            description: "Unstable equilibrium",
            variables: [],
            derivedFrom: "dipole-potential-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [p][E] = J",
            neet_frequency: "high",
          },
          {
            id: "work-to-rotate",
            name: "Work to rotate",
            category: "derived",
            formula: "W = U_f - U_i = pE(\\cos\\theta_i - \\cos\\theta_f)",
            latex: "W = U_f - U_i = pE(\\cos\\theta_i - \\cos\\theta_f)",
            description: "Work done by field",
            variables: [],
            derivedFrom: "dipole-potential-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [p][E] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Wrong direction of dipole moment",
            correct: "p points from -q to +q (NOT from + to -)",
            whyItHappens: "Intuition suggests + as origin",
            neetExample: "NEET 2020: Direction of dipole moment for given charge arrangement"
          },
          {
            mistake: "Confusing axial and equatorial field formulas",
            correct: "Axial: E = 2kp/r³ (along p). Equatorial: E = kp/r³ (opposite to p). Axial is 2× equatorial.",
            whyItHappens: "Similar formulas with factor 2 difference",
            neetExample: "NEET 2019: Ratio of axial to equatorial field at same distance"
          },
          {
            mistake: "Forgetting net force on dipole in uniform field is zero",
            correct: "Uniform field: only torque, no net force. Non-uniform field: both force and torque.",
            whyItHappens: "Thinking any field causes translation",
            neetExample: "NEET 2021: Motion of dipole in uniform vs non-uniform field"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Field on axis/equator of dipole",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Torque on dipole in field",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Work to rotate dipole",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Stable vs unstable equilibrium",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Axial vs equatorial field ratio",
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
            pattern: "Torque on dipole",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Work to rotate dipole",
            frequency: "medium",
            yearAsked: [
              2018,
              2021,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Dipole in field",
            analogy: "Compass needle in magnetic field",
            mapping: "Needle aligns with field, experiences torque if misaligned"
          },
          {
            concept: "Stable equilibrium",
            analogy: "Pendulum at bottom",
            mapping: "Lowest energy position, dipole aligned with field"
          }
        ],
        questions: [],
      },
      {
        id: "gauss-law",
        name: "Gauss's Law",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Gauss's law states that total electric flux through any closed surface equals enclosed charge divided by ε₀: Φ = q_enc/ε₀. It's powerful for finding E when symmetry exists (spherical, cylindrical, planar). Flux = ∫E·dA.",
          realWorldAnalogy: "Imagine counting arrows passing through a balloon. Gauss's law says this count depends only on what's inside the balloon (charge), not on the balloon's size or shape.",
          keyPoints: [
            "Electric flux: Φ = ∫E·dA = EA cosθ (uniform field)",
            "Gauss's law: Φ = q_enc/ε₀",
            "Useful when high symmetry exists",
            "Choose Gaussian surface to match symmetry",
            "E inside conductor = 0 (electrostatic equilibrium)",
            "Field just outside conductor = σ/ε₀"
          ],
          prerequisites: ["electric-field"]
        },
        formulas: [
          {
            id: "electric-flux",
            name: "Electric Flux",
            category: "base",
            formula: "Φ = ∫E·dA = EA cosθ",
            latex: "\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = EA\\cos\\theta",
            description: "Electric flux through a surface",
            variables: [
              {
                symbol: "Φ",
                meaning: "Electric flux",
                unit: "N·m²/C or V·m",
                typical_values: "q/ε₀"
              },
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "N/C",
                typical_values: "Given"
              },
              {
                symbol: "A",
                meaning: "Area of surface",
                unit: "m²",
                typical_values: "Given"
              },
              {
                symbol: "θ",
                meaning: "Angle between E and normal",
                unit: "rad",
                typical_values: "0 to π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Flux can be positive, negative, or zero", "Net flux through closed surface around charge = q/ε₀"],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
          },
          {
            id: "gauss-law-formula",
            name: "Gauss's Law",
            category: "base",
            formula: "Φ = ∮E·dA = q_enc/ε₀",
            latex: "\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enc}}{\\varepsilon_0}",
            description: "Total flux through closed surface equals enclosed charge over ε₀",
            variables: [
              {
                symbol: "q_enc",
                meaning: "Charge enclosed by surface",
                unit: "C",
                typical_values: "Sum of all charges inside"
              }
            ],
            derivedFrom: "coulomb-force",
            applications: [],
            specialCases: ["If E = constant and perpendicular: Φ = E × A", "External charges don't contribute to flux (they enter and exit)"],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = C/(C²·N⁻¹·m⁻²) = N·m²/C ✓",
          },
          {
            id: "field-sphere",
            name: "Field of Uniformly Charged Sphere",
            category: "derived",
            formula: "E = kQ/r² (outside), E = kQr/R³ (inside)",
            latex: "E = \\begin{cases} \\frac{kQ}{r^2} & r > R \\\\ \\frac{kQr}{R^3} & r < R \\end{cases}",
            description: "Electric field due to uniformly charged non-conducting sphere",
            variables: [
              {
                symbol: "R",
                meaning: "Radius of sphere",
                unit: "m",
                typical_values: "Given"
              },
              {
                symbol: "r",
                meaning: "Distance from center",
                unit: "m",
                typical_values: "Variable"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["Inside: E ∝ r (increases linearly)", "Outside: E ∝ 1/r² (like point charge)", "E is continuous at surface"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "field-line-charge",
            name: "Field of Infinite Line Charge",
            category: "derived",
            formula: "E = λ/(2πε₀r) = 2kλ/r",
            latex: "E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} = \\frac{2k\\lambda}{r}",
            description: "Electric field at distance r from infinite line charge",
            variables: [
              {
                symbol: "λ",
                meaning: "Linear charge density",
                unit: "C/m",
                typical_values: "μC/m"
              },
              {
                symbol: "r",
                meaning: "Perpendicular distance from line",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["E ∝ 1/r (not 1/r²)", "Cylindrical symmetry used"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "field-cylinder",
            name: "Field Inside and Outside Charged Cylinder",
            category: "derived",
            formula: "Inside: E = ρr/(2ε₀), Outside: E = λ/(2πε₀r)",
            latex: "E = \\begin{cases} \\frac{\\rho r}{2\\varepsilon_0} & r < R \\\\ \\frac{\\lambda}{2\\pi\\varepsilon_0 r} & r > R \\end{cases}",
            description: "Field of uniformly charged infinite cylinder (volume charge)",
            variables: [
              {
                symbol: "ρ",
                meaning: "Volume charge density",
                unit: "C/m³",
                typical_values: "Given"
              },
              {
                symbol: "λ",
                meaning: "Linear charge density = ρπR²",
                unit: "C/m",
                typical_values: "Derived"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["Inside: E ∝ r", "Outside: E ∝ 1/r"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "e-perpendicular-to-surface",
            name: "E perpendicular to surface",
            category: "derived",
            formula: "\\Phi = EA",
            latex: "\\Phi = EA",
            description: "θ = 0",
            variables: [],
            derivedFrom: "electric-flux",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
            neet_frequency: "high",
          },
          {
            id: "e-parallel-to-surface",
            name: "E parallel to surface",
            category: "derived",
            formula: "\\Phi = 0",
            latex: "\\Phi = 0",
            description: "θ = 90°",
            variables: [],
            derivedFrom: "electric-flux",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
            neet_frequency: "high",
          },
          {
            id: "point-charge",
            name: "Point charge",
            category: "derived",
            formula: "\\Phi = \\frac{q}{\\varepsilon_0}",
            latex: "\\Phi = \\frac{q}{\\varepsilon_0}",
            description: "Spherical Gaussian surface",
            variables: [],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = C/(C²·N⁻¹·m⁻²) = N·m²/C ✓",
            neet_frequency: "high",
          },
          {
            id: "no-charge-inside",
            name: "No charge inside",
            category: "derived",
            formula: "\\Phi = 0",
            latex: "\\Phi = 0",
            description: "Net flux is zero",
            variables: [],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = C/(C²·N⁻¹·m⁻²) = N·m²/C ✓",
            neet_frequency: "high",
          },
          {
            id: "at-surface-r-r",
            name: "At surface (r = R)",
            category: "derived",
            formula: "E = \\frac{kQ}{R^2}",
            latex: "E = \\frac{kQ}{R^2}",
            description: "Maximum for solid sphere",
            variables: [],
            derivedFrom: "field-sphere",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "at-center",
            name: "At center",
            category: "derived",
            formula: "E = 0",
            latex: "E = 0",
            description: "For uniformly charged sphere",
            variables: [],
            derivedFrom: "field-sphere",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E} \\perp \\text{line, radially outward}",
            latex: "\\vec{E} \\perp \\text{line, radially outward}",
            description: "For positive λ",
            variables: [],
            derivedFrom: "field-line-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "at-surface",
            name: "At surface",
            category: "derived",
            formula: "E = \\frac{\\rho R}{2\\varepsilon_0}",
            latex: "E = \\frac{\\rho R}{2\\varepsilon_0}",
            description: "Continuous at r = R",
            variables: [],
            derivedFrom: "field-cylinder",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Choosing wrong Gaussian surface",
            correct: "Surface must match symmetry: sphere for point/spherical, cylinder for line/cylindrical, box for plane.",
            whyItHappens: "Not recognizing the appropriate symmetry",
            neetExample: "NEET 2020: Apply Gauss law to find field of infinite wire"
          },
          {
            mistake: "Confusing enclosed charge with total charge",
            correct: "Only charge INSIDE the Gaussian surface contributes to flux.",
            whyItHappens: "Including external charges in calculation",
            neetExample: "NEET 2019: Flux through sphere not centered on point charge"
          },
          {
            mistake: "Wrong formula for field inside solid sphere",
            correct: "Inside solid sphere: E = kQr/R³ (linear in r). Inside shell: E = 0.",
            whyItHappens: "Confusing solid sphere with hollow shell",
            neetExample: "NEET 2021: Field inside uniformly charged solid sphere"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Flux through surface",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Field using Gauss law",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Field inside/outside sphere",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Choosing Gaussian surface",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Flux calculation",
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
            pattern: "Field of uniformly charged sphere",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Field of infinite wire/sheet",
            frequency: "medium",
            yearAsked: [
              2018,
              2020,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Electric flux",
            analogy: "Water flow through net",
            mapping: "More field lines through surface = more flux"
          },
          {
            concept: "Gauss's law",
            analogy: "Counting people entering/exiting room",
            mapping: "Net count depends only on people inside, not room size"
          }
        ],
        questions: [],
      },
      {
        id: "motion-in-electric-field",
        name: "Motion of Charged Particle in Electric Field",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "A charged particle in uniform electric field experiences constant force F = qE, causing constant acceleration a = qE/m. Motion is like projectile motion: straight line if initial velocity along E, parabolic if perpendicular. Work done by field = qEd.",
          realWorldAnalogy: "Like a ball thrown in gravity - the electric field provides constant acceleration. If you throw the ball sideways, it curves into a parabola. Same with charged particle in uniform E.",
          keyPoints: [
            "Force: F = qE (constant in uniform field)",
            "Acceleration: a = qE/m (constant)",
            "If v₀ ∥ E: straight line motion, uniformly accelerated",
            "If v₀ ⊥ E: parabolic path (like projectile)",
            "Work by field: W = qEd (d along field)",
            "KE change: ΔKE = qV = qEd"
          ],
          prerequisites: ["electric-field", "coulombs-law"]
        },
        formulas: [
          {
            id: "acceleration-field",
            name: "Acceleration in Electric Field",
            category: "base",
            formula: "a = qE/m = F/m",
            latex: "a = \\frac{qE}{m} = \\frac{F}{m}",
            description: "Constant acceleration of charged particle in uniform field",
            variables: [
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "10⁶ - 10¹² m/s²"
              },
              {
                symbol: "q",
                meaning: "Charge of particle",
                unit: "C",
                typical_values: "e for electron/proton"
              },
              {
                symbol: "m",
                meaning: "Mass of particle",
                unit: "kg",
                typical_values: "9.1 × 10⁻³¹ kg (electron)"
              }
            ],
            derivedFrom: "electric-field-point",
            applications: [],
            specialCases: ["Electron: a opposite to E (negative charge)", "Proton: a same direction as E", "a_e >> a_p (electron much lighter)"],
            dimensionalCheck: "[a] = [q][E]/[m] = m/s² ✓",
          },
          {
            id: "parabolic-path",
            name: "Parabolic Path in Electric Field",
            category: "derived",
            formula: "y = (qE/2mv₀²)x²",
            latex: "y = \\frac{qE}{2mv_0^2}x^2",
            description: "Trajectory when particle enters perpendicular to field",
            variables: [
              {
                symbol: "y",
                meaning: "Deflection in field direction",
                unit: "m",
                typical_values: "mm to cm"
              },
              {
                symbol: "x",
                meaning: "Distance traveled in initial direction",
                unit: "m",
                typical_values: "Length of field region"
              },
              {
                symbol: "v₀",
                meaning: "Initial velocity",
                unit: "m/s",
                typical_values: "10⁶ - 10⁸ m/s"
              }
            ],
            derivedFrom: "acceleration-field",
            applications: [],
            specialCases: ["Same as projectile motion equations", "x = v₀t, y = ½at²"],
            dimensionalCheck: "[y] = m",
          },
          {
            id: "kinetic-energy-change",
            name: "Kinetic Energy Change",
            category: "derived",
            formula: "ΔKE = qV = qEd = W",
            latex: "\\Delta KE = qV = qEd = W",
            description: "Change in kinetic energy equals work done by field",
            variables: [
              {
                symbol: "ΔKE",
                meaning: "Change in kinetic energy",
                unit: "J",
                typical_values: "eV for particles"
              },
              {
                symbol: "V",
                meaning: "Potential difference",
                unit: "V",
                typical_values: "100-10000 V"
              },
              {
                symbol: "d",
                meaning: "Displacement along field",
                unit: "m",
                typical_values: "mm to cm"
              }
            ],
            derivedFrom: "acceleration-field",
            applications: [],
            specialCases: ["Work done by field can be +ve or -ve", "If q > 0 moves opposite to E: W < 0 (slows down)"],
            dimensionalCheck: "[W] = [q][E][d] = J",
          },
          {
            id: "electron-acceleration",
            name: "Electron acceleration",
            category: "derived",
            formula: "a_e = \\frac{eE}{m_e}",
            latex: "a_e = \\frac{eE}{m_e}",
            description: "Opposite to E direction",
            variables: [],
            derivedFrom: "acceleration-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [q][E]/[m] = m/s² ✓",
            neet_frequency: "high",
          },
          {
            id: "proton-acceleration",
            name: "Proton acceleration",
            category: "derived",
            formula: "a_p = \\frac{eE}{m_p} = \\frac{a_e}{1836}",
            latex: "a_p = \\frac{eE}{m_p} = \\frac{a_e}{1836}",
            description: "Same direction as E",
            variables: [],
            derivedFrom: "acceleration-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [q][E]/[m] = m/s² ✓",
            neet_frequency: "medium",
          },
          {
            id: "deflection",
            name: "Deflection",
            category: "derived",
            formula: "y = \\frac{1}{2}at^2 = \\frac{qEL^2}{2mv_0^2}",
            latex: "y = \\frac{1}{2}at^2 = \\frac{qEL^2}{2mv_0^2}",
            description: "L = length of field region",
            variables: [],
            derivedFrom: "parabolic-path",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[y] = m",
            neet_frequency: "high",
          },
          {
            id: "exit-angle",
            name: "Exit angle",
            category: "derived",
            formula: "\\tan\\theta = \\frac{v_y}{v_x} = \\frac{qEL}{mv_0^2}",
            latex: "\\tan\\theta = \\frac{v_y}{v_x} = \\frac{qEL}{mv_0^2}",
            description: "Velocity direction at exit",
            variables: [],
            derivedFrom: "parabolic-path",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[y] = m",
            neet_frequency: "medium",
          },
          {
            id: "speed-from-rest",
            name: "Speed from rest",
            category: "derived",
            formula: "v = \\sqrt{\\frac{2qV}{m}}",
            latex: "v = \\sqrt{\\frac{2qV}{m}}",
            description: "Accelerated through V",
            variables: [],
            derivedFrom: "kinetic-energy-change",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [q][E][d] = J",
            neet_frequency: "high",
          },
          {
            id: "electron-volt",
            name: "Electron volt",
            category: "derived",
            formula: "1 \\text{ eV} = 1.6 \\times 10^{-19} \\text{ J}",
            latex: "1 \\text{ eV} = 1.6 \\times 10^{-19} \\text{ J}",
            description: "Energy unit",
            variables: [],
            derivedFrom: "kinetic-energy-change",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [q][E][d] = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Wrong direction of acceleration for electron",
            correct: "Electron (negative charge) accelerates OPPOSITE to E field direction.",
            whyItHappens: "Forgetting that F = qE has sign of q",
            neetExample: "NEET 2020: Electron in uniform electric field direction"
          },
          {
            mistake: "Using projectile formulas with g instead of qE/m",
            correct: "Replace g with qE/m (or a) in all projectile formulas.",
            whyItHappens: "Mechanical application of gravity formulas",
            neetExample: "NEET 2019: Range/height of charged particle in E field"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Acceleration calculation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Deflection in field region",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Speed after acceleration through V",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Electron acceleration",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Parabolic path deflection",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          },
          {
            pattern: "Velocity from potential difference",
            frequency: "high",
            yearAsked: [
              2018,
              2020,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Motion in E field",
            analogy: "Projectile motion in gravity",
            mapping: "g → qE/m, same equations apply"
          }
        ],
        questions: [],
      },
      {
        id: "continuous-charge-distribution",
        name: "Continuous Charge Distributions",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "For continuous charge distributions, we use charge densities: linear (λ = dq/dl), surface (σ = dq/dA), volume (ρ = dq/dV). To find field, integrate contributions from infinitesimal charge elements.",
          realWorldAnalogy: "Instead of counting individual students (point charges), we count students per meter of corridor (linear), per square meter of floor (surface), or per cubic meter of room (volume).",
          keyPoints: [
            "Linear charge density: λ = Q/L = dq/dl (C/m)",
            "Surface charge density: σ = Q/A = dq/dA (C/m²)",
            "Volume charge density: ρ = Q/V = dq/dV (C/m³)",
            "Total charge: Q = ∫λdl or ∫σdA or ∫ρdV",
            "Field by integration: E = ∫dE = ∫k(dq/r²)r̂"
          ],
          prerequisites: ["electric-field"]
        },
        formulas: [
          {
            id: "linear-density",
            name: "Linear Charge Density",
            category: "base",
            formula: "λ = Q/L = dq/dl",
            latex: "\\lambda = \\frac{Q}{L} = \\frac{dq}{dl}",
            description: "Charge per unit length for line charges",
            variables: [
              {
                symbol: "λ",
                meaning: "Linear charge density",
                unit: "C/m",
                typical_values: "μC/m"
              },
              {
                symbol: "Q",
                meaning: "Total charge",
                unit: "C",
                typical_values: "μC"
              },
              {
                symbol: "L",
                meaning: "Length",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["λ can be positive or negative", "For non-uniform: λ varies with position"],
            dimensionalCheck: "[λ] = C/m",
          },
          {
            id: "surface-density",
            name: "Surface Charge Density",
            category: "base",
            formula: "σ = Q/A = dq/dA",
            latex: "\\sigma = \\frac{Q}{A} = \\frac{dq}{dA}",
            description: "Charge per unit area for surface charges",
            variables: [
              {
                symbol: "σ",
                meaning: "Surface charge density",
                unit: "C/m²",
                typical_values: "μC/m²"
              },
              {
                symbol: "A",
                meaning: "Area",
                unit: "m²",
                typical_values: "cm² to m²"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["On conductor surface: σ = ε₀E", "σ higher at sharp points"],
            dimensionalCheck: "[σ] = C/m²",
          },
          {
            id: "volume-density",
            name: "Volume Charge Density",
            category: "base",
            formula: "ρ = Q/V = dq/dV",
            latex: "\\rho = \\frac{Q}{V} = \\frac{dq}{dV}",
            description: "Charge per unit volume for volume distributions",
            variables: [
              {
                symbol: "ρ",
                meaning: "Volume charge density",
                unit: "C/m³",
                typical_values: "μC/m³"
              },
              {
                symbol: "V",
                meaning: "Volume",
                unit: "m³",
                typical_values: "cm³ to m³"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For uniform distribution: ρ = constant", "Gauss law often easier than integration"],
            dimensionalCheck: "[ρ] = C/m³",
          },
          {
            id: "charge-element",
            name: "Charge element",
            category: "derived",
            formula: "dq = \\lambda \\, dl",
            latex: "dq = \\lambda \\, dl",
            description: "For integration",
            variables: [],
            derivedFrom: "linear-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[λ] = C/m",
            neet_frequency: "high",
          },
          {
            id: "total-charge-on-ring",
            name: "Total charge on ring",
            category: "derived",
            formula: "Q = \\lambda \\times 2\\pi R",
            latex: "Q = \\lambda \\times 2\\pi R",
            description: "Circumference",
            variables: [],
            derivedFrom: "linear-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[λ] = C/m",
            neet_frequency: "high",
          },
          {
            id: "charge-element-2",
            name: "Charge element",
            category: "derived",
            formula: "dq = \\sigma \\, dA",
            latex: "dq = \\sigma \\, dA",
            description: "For integration",
            variables: [],
            derivedFrom: "surface-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = C/m²",
            neet_frequency: "high",
          },
          {
            id: "sphere-surface",
            name: "Sphere surface",
            category: "derived",
            formula: "Q = \\sigma \\times 4\\pi R^2",
            latex: "Q = \\sigma \\times 4\\pi R^2",
            description: "Surface area",
            variables: [],
            derivedFrom: "surface-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[σ] = C/m²",
            neet_frequency: "high",
          },
          {
            id: "charge-element-3",
            name: "Charge element",
            category: "derived",
            formula: "dq = \\rho \\, dV",
            latex: "dq = \\rho \\, dV",
            description: "For integration",
            variables: [],
            derivedFrom: "volume-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ρ] = C/m³",
            neet_frequency: "medium",
          },
          {
            id: "sphere-volume",
            name: "Sphere volume",
            category: "derived",
            formula: "Q = \\rho \\times \\frac{4}{3}\\pi R^3",
            latex: "Q = \\rho \\times \\frac{4}{3}\\pi R^3",
            description: "Volume of sphere",
            variables: [],
            derivedFrom: "volume-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ρ] = C/m³",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing linear, surface, and volume densities",
            correct: "λ for wires (1D), σ for sheets/shells (2D), ρ for solid objects (3D).",
            whyItHappens: "Similar symbols and concepts",
            neetExample: "NEET 2020: Which density for uniformly charged sphere?"
          },
          {
            mistake: "Forgetting to integrate for total charge",
            correct: "Q = ∫dq. Use appropriate element (dl, dA, or dV) with correct density.",
            whyItHappens: "Using point charge formulas directly",
            neetExample: "NEET 2019: Total charge on non-uniformly charged rod"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate charge density",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Total charge from density",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Identify appropriate density type",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Charge from density",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Field of continuous distribution",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Charge density",
            analogy: "Population density",
            mapping: "People per km of road (linear), per km² of land (surface), per m³ of building (volume)"
          }
        ],
        questions: [],
      },
      {
        id: "electric-field-lines",
        name: "Properties of Electric Field Lines",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "Electric field lines are imaginary curves whose tangent at any point gives the direction of electric field. They originate from positive charges and terminate on negative charges. They never cross, and their density indicates field strength.",
          realWorldAnalogy: "Like iron filings around a magnet showing magnetic field pattern, field lines show electric field pattern. Denser lines = stronger field, like denser traffic = busier road.",
          keyPoints: [
            "Start from +ve charge, end on -ve charge",
            "Tangent gives direction of E at that point",
            "Never cross (E would have two directions)",
            "Denser lines = stronger field",
            "Perpendicular to conductor surface",
            "Continuous in charge-free region",
            "Number of lines ∝ charge magnitude"
          ],
          prerequisites: ["electric-field"]
        },
        formulas: [
          {
            id: "field-line-density",
            name: "Field Line Density and Field Strength",
            category: "base",
            formula: "E ∝ number of lines per unit area",
            latex: "E \\propto \\frac{\\text{number of lines}}{\\text{area } \\perp \\text{to lines}}",
            description: "Field strength is proportional to line density",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "N/C",
                typical_values: "Related to line density"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Lines spread out → field weakens", "Lines converge → field strengthens"],
            dimensionalCheck: "Qualitative relationship",
          },
          {
            id: "point-charge",
            name: "Point charge",
            category: "derived",
            formula: "\\text{Lines: radial, density} \\propto 1/r^2",
            latex: "\\text{Lines: radial, density} \\propto 1/r^2",
            description: "E ∝ 1/r²",
            variables: [],
            derivedFrom: "field-line-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Qualitative relationship",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking field lines can cross",
            correct: "Field lines NEVER cross. If they did, E would have two directions at that point.",
            whyItHappens: "Not understanding uniqueness of E at each point",
            neetExample: "NEET 2019: Why field lines don't intersect"
          },
          {
            mistake: "Drawing field lines starting from -ve charge",
            correct: "Lines start from +ve and end on -ve (or at infinity).",
            whyItHappens: "Confusion about convention",
            neetExample: "NEET 2020: Sketch field lines for dipole"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Properties of field lines",
            difficulty: "easy"
          },
          {
            type: "graphical",
            description: "Sketch field lines for charge configurations",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Properties of field lines",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Field line diagrams",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Field line density",
            analogy: "Traffic density on roads",
            mapping: "More cars per lane = busier road, more lines per area = stronger field"
          }
        ],
        questions: [],
      },
      {
        id: "conductors-electrostatics",
        name: "Conductors in Electrostatic Equilibrium",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "In electrostatic equilibrium, the electric field inside a conductor is zero. All excess charge resides on the surface. The surface is an equipotential, and the field just outside is perpendicular to the surface with magnitude σ/ε₀.",
          realWorldAnalogy: "Like water settling in a container to its lowest energy state, charges on a conductor redistribute until there's no internal electric field and the surface becomes equipotential.",
          keyPoints: [
            "E = 0 inside conductor (electrostatic equilibrium)",
            "All excess charge on surface",
            "Surface is equipotential",
            "E just outside = σ/ε₀ (perpendicular to surface)",
            "Charge density higher at points of high curvature",
            "Faraday cage: shields interior from external fields"
          ],
          prerequisites: ["electric-field", "gauss-law"]
        },
        formulas: [
          {
            id: "conductor-surface-field",
            name: "Field Just Outside Conductor",
            category: "base",
            formula: "E = σ/ε₀",
            latex: "E = \\frac{\\sigma}{\\varepsilon_0}",
            description: "Electric field just outside a charged conductor surface",
            variables: [
              {
                symbol: "σ",
                meaning: "Surface charge density",
                unit: "C/m²",
                typical_values: "Varies on surface"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["At sharp points: σ large → E large (corona discharge)", "At flat regions: σ smaller"],
            dimensionalCheck: "[E] = N/C",
          },
          {
            id: "hollow-conductor",
            name: "Charge Distribution on Hollow Conductor",
            category: "derived",
            formula: "Inner: -q (induced), Outer: Q + q",
            latex: "Q_{inner} = -q, \\quad Q_{outer} = Q + q",
            description: "Charge distribution when charge q is inside cavity of conductor with charge Q",
            variables: [
              {
                symbol: "q",
                meaning: "Charge inside cavity",
                unit: "C",
                typical_values: "Given"
              },
              {
                symbol: "Q",
                meaning: "Net charge on conductor",
                unit: "C",
                typical_values: "Given"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["Inner surface charge = -q (to make E = 0 in conductor)", "Outer surface = total charge of system"],
            dimensionalCheck: "[Q] = C",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E} \\perp \\text{surface}",
            latex: "\\vec{E} \\perp \\text{surface}",
            description: "Always perpendicular",
            variables: [],
            derivedFrom: "conductor-surface-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = N/C",
            neet_frequency: "high",
          },
          {
            id: "e-0-in-conductor",
            name: "E = 0 in conductor",
            category: "derived",
            formula: "q_{enc} = 0 \\text{ for Gaussian surface in conductor}",
            latex: "q_{enc} = 0 \\text{ for Gaussian surface in conductor}",
            description: "Determines induced charge",
            variables: [],
            derivedFrom: "hollow-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = C",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking E can exist inside conductor",
            correct: "In electrostatic equilibrium, E = 0 inside conductor. Free electrons redistribute to cancel any internal field.",
            whyItHappens: "Not understanding charge redistribution",
            neetExample: "NEET 2020: Field inside hollow charged conductor"
          },
          {
            mistake: "Confusing E = σ/ε₀ (conductor) with E = σ/2ε₀ (non-conducting sheet)",
            correct: "Conductor surface: σ/ε₀. Non-conducting sheet: σ/2ε₀ (field on both sides).",
            whyItHappens: "Factor of 2 difference, similar formulas",
            neetExample: "NEET 2019: Field just outside spherical conductor"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Properties of conductors in equilibrium",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Induced charge on hollow conductor",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Field outside conductor",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "E = 0 inside conductor",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Induced charges on shell",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "E = 0 inside",
            analogy: "Calm in eye of storm",
            mapping: "Charges on surface shield interior from field"
          }
        ],
        questions: [],
      },
      {
        id: "charging-methods",
        name: "Charging by Induction, Friction, and Conduction",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "Objects can be charged by friction (rubbing transfers electrons), conduction (contact with charged object), or induction (nearby charge causes polarization, then grounding removes some charge). Charge is always conserved in all methods.",
          realWorldAnalogy: "Rubbing balloon on hair (friction) makes hair stand. Touching doorknob after walking on carpet (conduction) gives shock. Lightning rod works by induction - attracts opposite charge from ground.",
          keyPoints: [
            "Friction: Electrons transfer between different materials",
            "Conduction: Direct contact, charge shares between objects",
            "Induction: No contact, charge separation by nearby charge",
            "In induction, grounding allows charge to flow in/out",
            "Induced charge can be opposite to inducing charge",
            "Total charge conserved in all methods"
          ],
          prerequisites: ["electric-charge-properties"]
        },
        formulas: [
          {
            id: "charge-sharing",
            name: "Charge Sharing by Conduction",
            category: "base",
            formula: "Final charge on each = (Q₁ + Q₂)/2 (identical conductors)",
            latex: "q_1' = q_2' = \\frac{Q_1 + Q_2}{2}",
            description: "When two identical conductors touch, charge distributes equally",
            variables: [
              {
                symbol: "Q₁, Q₂",
                meaning: "Initial charges",
                unit: "C",
                typical_values: "Given"
              },
              {
                symbol: "q₁', q₂'",
                meaning: "Final charges",
                unit: "C",
                typical_values: "Equal"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Identical spheres: charge divides equally", "Different sizes: larger sphere gets more charge"],
            dimensionalCheck: "[q] = C",
          },
          {
            id: "induction-charge",
            name: "Charge by Induction",
            category: "base",
            formula: "Induced charge magnitude ≤ inducing charge",
            latex: "|q_{induced}| \\leq |Q_{inducing}|",
            description: "Magnitude of induced charge limited by inducing charge",
            variables: [
              {
                symbol: "q_induced",
                meaning: "Charge induced on object",
                unit: "C",
                typical_values: "Opposite sign"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Induced charge has opposite sign", "Magnitude depends on geometry"],
            dimensionalCheck: "[q] = C",
          },
          {
            id: "unequal-sizes",
            name: "Unequal sizes",
            category: "derived",
            formula: "V_1 = V_2 \\Rightarrow \\frac{q_1'}{r_1} = \\frac{q_2'}{r_2}",
            latex: "V_1 = V_2 \\Rightarrow \\frac{q_1'}{r_1} = \\frac{q_2'}{r_2}",
            description: "Potential equalizes",
            variables: [],
            derivedFrom: "charge-sharing",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "medium",
          },
          {
            id: "grounding",
            name: "Grounding",
            category: "derived",
            formula: "q_{final} = -q_{induced}",
            latex: "q_{final} = -q_{induced}",
            description: "After removing ground and inducing charge",
            variables: [],
            derivedFrom: "induction-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[q] = C",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking induced charge equals inducing charge",
            correct: "Induced charge ≤ inducing charge. Depends on geometry and grounding.",
            whyItHappens: "Assuming equality",
            neetExample: "NEET 2020: Charge after induction process"
          },
          {
            mistake: "Wrong order in induction process",
            correct: "Steps: 1) Bring charged object near, 2) Ground, 3) Remove ground, 4) Remove charged object.",
            whyItHappens: "Not following proper sequence",
            neetExample: "NEET 2019: Final charge after induction"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Methods of charging",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Charge after contact",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Induction process steps",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Charge sharing between spheres",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Charging by induction",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Charging by friction",
            analogy: "Rubbing eraser on paper",
            mapping: "Tiny particles transfer - like electrons transferring"
          },
          {
            concept: "Induction",
            analogy: "Magnet organizing iron filings",
            mapping: "Charges separate without contact, like filings align without touching magnet"
          }
        ],
        questions: [],
      },
      {
        id: "electric-flux-properties",
        name: "Electric Flux and Its Properties",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Electric flux measures the total electric field passing through a surface. Φ = E·A·cosθ for uniform field. Positive flux means field lines exit, negative means enter. Total flux through closed surface depends only on enclosed charge.",
          realWorldAnalogy: "Flux is like counting raindrops through a window. More rain (stronger E), bigger window (larger A), window facing rain (cosθ) = more drops counted (more flux).",
          keyPoints: [
            "Φ = E·A·cosθ for uniform field",
            "Φ = ∫E·dA for non-uniform field",
            "Unit: N·m²/C or V·m",
            "Scalar quantity (can be +ve or -ve)",
            "Positive: field exits surface",
            "Negative: field enters surface",
            "Flux through closed surface: Φ = q_enc/ε₀"
          ],
          prerequisites: ["electric-field"]
        },
        formulas: [
          {
            id: "flux-uniform-field",
            name: "Flux Through Plane Surface",
            category: "base",
            formula: "Φ = EA cosθ = E·A",
            latex: "\\Phi = EA\\cos\\theta = \\vec{E} \\cdot \\vec{A}",
            description: "Electric flux through a plane surface in uniform field",
            variables: [
              {
                symbol: "Φ",
                meaning: "Electric flux",
                unit: "N·m²/C",
                typical_values: "Variable"
              },
              {
                symbol: "θ",
                meaning: "Angle between E and area normal",
                unit: "rad",
                typical_values: "0 to π"
              },
              {
                symbol: "A",
                meaning: "Area of surface",
                unit: "m²",
                typical_values: "Given"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["θ = 0: Φ = EA (maximum)", "θ = 90°: Φ = 0", "θ = 180°: Φ = -EA (into surface)"],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
          },
          {
            id: "flux-closed-surface",
            name: "Flux Through Closed Surface",
            category: "derived",
            formula: "Φ = q_enc/ε₀",
            latex: "\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enc}}{\\varepsilon_0}",
            description: "Total flux through closed surface equals enclosed charge over ε₀",
            variables: [
              {
                symbol: "q_enc",
                meaning: "Enclosed charge",
                unit: "C",
                typical_values: "Sum of charges inside"
              }
            ],
            derivedFrom: "gauss-law-formula",
            applications: [],
            specialCases: ["Flux independent of surface shape/size", "Only depends on enclosed charge"],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = N·m²/C",
          },
          {
            id: "e-perpendicular-to-surface",
            name: "E perpendicular to surface",
            category: "derived",
            formula: "\\Phi = EA",
            latex: "\\Phi = EA",
            description: "θ = 0, maximum flux",
            variables: [],
            derivedFrom: "flux-uniform-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
            neet_frequency: "high",
          },
          {
            id: "e-parallel-to-surface",
            name: "E parallel to surface",
            category: "derived",
            formula: "\\Phi = 0",
            latex: "\\Phi = 0",
            description: "θ = 90°, no flux",
            variables: [],
            derivedFrom: "flux-uniform-field",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [E][A] = N·m²/C",
            neet_frequency: "high",
          },
          {
            id: "external-charge",
            name: "External charge",
            category: "derived",
            formula: "\\Phi = 0",
            latex: "\\Phi = 0",
            description: "Charge outside closed surface",
            variables: [],
            derivedFrom: "flux-closed-surface",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = N·m²/C",
            neet_frequency: "high",
          },
          {
            id: "partial-enclosure",
            name: "Partial enclosure",
            category: "derived",
            formula: "\\Phi = \\frac{q}{2\\varepsilon_0}",
            latex: "\\Phi = \\frac{q}{2\\varepsilon_0}",
            description: "Half of charge enclosed",
            variables: [],
            derivedFrom: "flux-closed-surface",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Φ] = [q]/[ε₀] = N·m²/C",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing area vector direction",
            correct: "Area vector is perpendicular to surface, pointing outward for closed surface.",
            whyItHappens: "Not understanding vector nature of area",
            neetExample: "NEET 2020: Flux through tilted surface"
          },
          {
            mistake: "Including external charges in flux calculation",
            correct: "Only enclosed charges contribute to net flux through closed surface.",
            whyItHappens: "Not understanding Gauss law properly",
            neetExample: "NEET 2019: Flux when charge is outside the closed surface"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Flux through plane surface",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Flux through closed surface",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Sign of flux",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Flux calculation",
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
            pattern: "Flux and enclosed charge",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          }
        ],
        analogies: [
          {
            concept: "Electric flux",
            analogy: "Water flow through fishing net",
            mapping: "More water, bigger net, net facing flow = more water passes through"
          }
        ],
        questions: [],
      }
    ];