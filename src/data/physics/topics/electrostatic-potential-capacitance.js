// Electrostatic Potential and Capacitance - 5% weightage (Tier 1)
// NCERT Class 12, Chapter 2

export const electrostaticPotentialTopics = [
      {
        id: "electrostatic-potential",
        name: "Electrostatic Potential/Potential Difference",
        weightage: 2,
        difficulty: "medium",
        theory: {
          summary: "Electric potential at a point is the work done per unit positive charge in bringing a test charge from infinity to that point. V = W/q = kQ/r for a point charge. Potential difference drives current flow. Potential is a scalar quantity.",
          realWorldAnalogy: "Like height on a hill - potential is the 'height' in the electric field. Charges naturally flow from high potential to low potential, like water flowing downhill.",
          keyPoints: [
            "V = W/q₀ = work done per unit charge from infinity",
            "For point charge: V = kQ/r = Q/(4πε₀r)",
            "Potential is scalar - algebraic addition of potentials",
            "Potential difference: V_AB = V_A - V_B = W_AB/q",
            "Electric field E = -dV/dr (field points toward decreasing V)",
            "SI unit: Volt (V) = J/C"
          ],
          prerequisites: ["coulombs-law", "electric-field"]
        },
        formulas: [
          {
            id: "potential-point-charge",
            name: "Potential Due to Point Charge",
            category: "base",
            formula: "V = kQ/r",
            latex: "V = \\frac{kQ}{r} = \\frac{Q}{4\\pi\\varepsilon_0 r}",
            description: "Electric potential at distance r from a point charge Q",
            variables: [
              {
                symbol: "V",
                meaning: "Electric potential",
                unit: "V (Volt)",
                typical_values: "100-10⁶ V"
              },
              {
                symbol: "k",
                meaning: "Coulomb constant",
                unit: "N·m²/C²",
                typical_values: "9 × 10⁹"
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
            derivedFrom: null,
            applications: [],
            specialCases: ["+ve charge: V > 0 (positive potential)", "-ve charge: V < 0 (negative potential)", "V = 0 at infinity"],
            dimensionalCheck: "[V] = [k][Q]/[r] = (N·m²/C²)(C)/m = J/C = V",
          },
          {
            id: "potential-difference",
            name: "Potential Difference",
            category: "base",
            formula: "V_AB = V_A - V_B = -∫E·dr",
            latex: "V_{AB} = V_A - V_B = -\\int_B^A \\vec{E} \\cdot d\\vec{r}",
            description: "Work done per unit charge in moving from B to A",
            variables: [
              {
                symbol: "V_AB",
                meaning: "Potential difference A to B",
                unit: "V",
                typical_values: "1-1000 V"
              },
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m or N/C",
                typical_values: "10-10⁶ V/m"
              }
            ],
            derivedFrom: "potential-point-charge",
            applications: [],
            specialCases: ["W > 0 when +ve charge moves from high V to low V", "Conservative field: Work independent of path"],
            dimensionalCheck: "[V] = V",
          },
          {
            id: "field-potential-relation",
            name: "Relation Between E and V",
            category: "base",
            formula: "E = -dV/dr",
            latex: "E = -\\frac{dV}{dr}",
            description: "Electric field is negative gradient of potential",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m",
                typical_values: "10-10⁶ V/m"
              },
              {
                symbol: "dV/dr",
                meaning: "Potential gradient",
                unit: "V/m",
                typical_values: "Rate of V change"
              }
            ],
            derivedFrom: "potential-difference",
            applications: [],
            specialCases: ["E points in direction of decreasing V", "Equipotential surface ⊥ field lines"],
            dimensionalCheck: "[E] = [V]/[r] = V/m",
          },
          {
            id: "potential-energy",
            name: "Electrostatic Potential Energy",
            category: "derived",
            formula: "U = kq₁q₂/r",
            latex: "U = \\frac{kq_1q_2}{r} = qV",
            description: "Potential energy of a system of charges",
            variables: [
              {
                symbol: "U",
                meaning: "Potential energy",
                unit: "J",
                typical_values: "μJ to J"
              },
              {
                symbol: "q₁, q₂",
                meaning: "Charges",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "r",
                meaning: "Separation between charges",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: "potential-point-charge",
            applications: [],
            specialCases: ["Like charges: U > 0 (repulsion)", "Unlike charges: U < 0 (attraction)"],
            dimensionalCheck: "[U] = [k][q²]/[r] = J",
          },
          {
            id: "multiple-charges",
            name: "Multiple charges",
            category: "derived",
            formula: "V = k\\sum_i \\frac{Q_i}{r_i}",
            latex: "V = k\\sum_i \\frac{Q_i}{r_i}",
            description: "Algebraic sum of potentials",
            variables: [],
            derivedFrom: "potential-point-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [k][Q]/[r] = (N·m²/C²)(C)/m = J/C = V",
            neet_frequency: "high",
          },
          {
            id: "at-center-of-ring",
            name: "At center of ring",
            category: "derived",
            formula: "V = \\frac{kQ}{\\sqrt{R^2 + x^2}}",
            latex: "V = \\frac{kQ}{\\sqrt{R^2 + x^2}}",
            description: "Ring of charge Q at distance x from center",
            variables: [],
            derivedFrom: "potential-point-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = [k][Q]/[r] = (N·m²/C²)(C)/m = J/C = V",
            neet_frequency: "medium",
          },
          {
            id: "uniform-field",
            name: "Uniform field",
            category: "derived",
            formula: "V_{AB} = Ed",
            latex: "V_{AB} = Ed",
            description: "V = Ed between parallel plates",
            variables: [],
            derivedFrom: "potential-difference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = V",
            neet_frequency: "high",
          },
          {
            id: "work-done",
            name: "Work done",
            category: "derived",
            formula: "W = q(V_A - V_B)",
            latex: "W = q(V_A - V_B)",
            description: "Work to move charge q",
            variables: [],
            derivedFrom: "potential-difference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[V] = V",
            neet_frequency: "high",
          },
          {
            id: "for-point-charge",
            name: "For point charge",
            category: "derived",
            formula: "E = \\frac{kQ}{r^2} = -\\frac{d}{dr}\\left(\\frac{kQ}{r}\\right)",
            latex: "E = \\frac{kQ}{r^2} = -\\frac{d}{dr}\\left(\\frac{kQ}{r}\\right)",
            description: "Derivative gives E",
            variables: [],
            derivedFrom: "field-potential-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [V]/[r] = V/m",
            neet_frequency: "medium",
          },
          {
            id: "from-vxyz",
            name: "From V(x,y,z)",
            category: "derived",
            formula: "E_x = -\\frac{\\partial V}{\\partial x}, \\text{etc.}",
            latex: "E_x = -\\frac{\\partial V}{\\partial x}, \\text{etc.}",
            description: "Component-wise derivative",
            variables: [],
            derivedFrom: "field-potential-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [V]/[r] = V/m",
            neet_frequency: "low",
          },
          {
            id: "three-charges",
            name: "Three charges",
            category: "derived",
            formula: "U = k\\left(\\frac{q_1q_2}{r_{12}} + \\frac{q_2q_3}{r_{23}} + \\frac{q_1q_3}{r_{13}}\\right)",
            latex: "U = k\\left(\\frac{q_1q_2}{r_{12}} + \\frac{q_2q_3}{r_{23}} + \\frac{q_1q_3}{r_{13}}\\right)",
            description: "Sum of all pairs",
            variables: [],
            derivedFrom: "potential-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [k][q²]/[r] = J",
            neet_frequency: "high",
          },
          {
            id: "n-charges",
            name: "n charges",
            category: "derived",
            formula: "U = \\frac{1}{2}\\sum_{i \\neq j} \\frac{kq_iq_j}{r_{ij}}",
            latex: "U = \\frac{1}{2}\\sum_{i \\neq j} \\frac{kq_iq_j}{r_{ij}}",
            description: "Factor 1/2 avoids double counting",
            variables: [],
            derivedFrom: "potential-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [k][q²]/[r] = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Treating potential as a vector (adding with direction)",
            correct: "Potential is SCALAR - add algebraically with signs, not vectorially",
            whyItHappens: "Confusing E (vector) with V (scalar)",
            neetExample: "NEET 2020: Potential at midpoint of two charges +Q and -Q"
          },
          {
            mistake: "Wrong sign in E = -dV/dr (using +dV/dr)",
            correct: "Negative sign essential - E points toward decreasing V",
            whyItHappens: "Forgetting the negative sign in the relation",
            neetExample: "NEET 2019: Find E from given V(r)"
          },
          {
            mistake: "Confusing potential V with potential energy U",
            correct: "V = U/q. Potential is per unit charge; PE is for specific charge.",
            whyItHappens: "Similar names and related concepts",
            neetExample: "NEET 2021: Distinguish V and U in problems"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Potential due to point charges",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Potential due to charge distribution",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Potential energy of charge system",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "E-V relationship and equipotential surfaces",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Potential at a point due to multiple charges",
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
            pattern: "Potential energy of charge configuration",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "E-V relationship problems",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Electric potential",
            analogy: "Height on a hill",
            mapping: "High V = hilltop, low V = valley. Charges roll downhill like balls."
          },
          {
            concept: "Equipotential surface",
            analogy: "Contour lines on map",
            mapping: "No work to move along contour (equipotential) - same \"height\""
          }
        ],
        questions: [],
      },
      {
        id: "equipotential-surface",
        name: "Equipotential Surface",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "An equipotential surface is a surface where potential has the same value at all points. No work is done when a charge moves along an equipotential surface. Electric field is always perpendicular to equipotential surfaces and points from higher to lower potential.",
          realWorldAnalogy: "Like contour lines on a topographic map showing same elevation - walking along a contour requires no uphill/downhill work. Field lines are like the steepest descent paths.",
          keyPoints: [
            "All points on equipotential surface have same V",
            "Work done along equipotential = 0",
            "E ⊥ equipotential surface everywhere",
            "Equipotentials never intersect",
            "For point charge: concentric spheres",
            "For uniform field: parallel planes"
          ],
          prerequisites: ["electrostatic-potential"]
        },
        formulas: [
          {
            id: "work-equipotential",
            name: "Work on Equipotential Surface",
            category: "base",
            formula: "W = 0 (along equipotential)",
            latex: "W = q(V_f - V_i) = 0 \\text{ (since } V_f = V_i\\text{)}",
            description: "No work done moving charge along equipotential surface",
            variables: [
              {
                symbol: "W",
                meaning: "Work done",
                unit: "J",
                typical_values: "0"
              },
              {
                symbol: "V_f, V_i",
                meaning: "Final and initial potentials",
                unit: "V",
                typical_values: "Equal"
              }
            ],
            derivedFrom: "potential-difference",
            applications: [],
            specialCases: ["Path independence - any path on surface gives W = 0"],
            dimensionalCheck: "[W] = J",
          },
          {
            id: "field-perpendicular",
            name: "Field Perpendicular to Equipotential",
            category: "base",
            formula: "E ⊥ equipotential surface",
            latex: "\\vec{E} \\perp \\text{equipotential surface}",
            description: "Electric field lines are always perpendicular to equipotential surfaces",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m",
                typical_values: "Points perpendicular"
              }
            ],
            derivedFrom: "field-potential-relation",
            applications: [],
            specialCases: ["Crowded equipotentials = strong field", "Sparse equipotentials = weak field"],
            dimensionalCheck: "[E] = V/m",
          },
          {
            id: "moving-charge-on-sphere",
            name: "Moving charge on sphere",
            category: "derived",
            formula: "W = 0",
            latex: "W = 0",
            description: "Moving around point charge at constant r",
            variables: [],
            derivedFrom: "work-equipotential",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = J",
            neet_frequency: "medium",
          },
          {
            id: "conductor-surface",
            name: "Conductor surface",
            category: "derived",
            formula: "V = \\text{constant on conductor}",
            latex: "V = \\text{constant on conductor}",
            description: "Conductor is an equipotential surface",
            variables: [],
            derivedFrom: "field-perpendicular",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = V/m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking equipotential surfaces can intersect",
            correct: "Impossible - a point can't have two different potentials",
            whyItHappens: "Comparing to other curves that can intersect",
            neetExample: "NEET 2019: Why don't equipotential surfaces intersect?"
          },
          {
            mistake: "Drawing E parallel to equipotential",
            correct: "E is ALWAYS perpendicular to equipotential surface",
            whyItHappens: "Confusing field lines with equipotential lines",
            neetExample: "NEET 2020: Draw equipotentials and field lines for dipole"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Shape of equipotentials for various charge configs",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Work done along equipotential",
            difficulty: "easy"
          },
          {
            type: "graphical",
            description: "Draw equipotentials and field lines",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Properties of equipotential surfaces",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "E-equipotential perpendicularity",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Equipotential surface",
            analogy: "Sea level",
            mapping: "Water finds its level - everywhere on ocean surface has same gravitational potential"
          }
        ],
        questions: [],
      },
      {
        id: "capacitance",
        name: "Capacitance and Capacitors",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Capacitance is the ability to store charge. C = Q/V. For parallel plate capacitor, C = ε₀A/d. Capacitors can be combined in series or parallel. Energy stored U = ½CV² = ½QV = Q²/2C. Dielectric increases capacitance by factor K.",
          realWorldAnalogy: "Like a water tank - capacitance is tank size (how much it can hold), voltage is water level (pressure), charge is amount of water stored.",
          keyPoints: [
            "C = Q/V (charge per unit voltage)",
            "Parallel plate: C = ε₀A/d = ε₀εᵣA/d (with dielectric)",
            "Series: 1/C_eq = 1/C₁ + 1/C₂ + ...",
            "Parallel: C_eq = C₁ + C₂ + ...",
            "Energy: U = ½CV² = ½QV = Q²/2C",
            "SI unit: Farad (F) = C/V"
          ],
          prerequisites: ["electrostatic-potential"]
        },
        formulas: [
          {
            id: "capacitance-def",
            name: "Capacitance Definition",
            category: "base",
            formula: "C = Q/V",
            latex: "C = \\frac{Q}{V}",
            description: "Ratio of charge stored to potential difference",
            variables: [
              {
                symbol: "C",
                meaning: "Capacitance",
                unit: "F (Farad)",
                typical_values: "pF to mF"
              },
              {
                symbol: "Q",
                meaning: "Charge stored",
                unit: "C",
                typical_values: "μC to mC"
              },
              {
                symbol: "V",
                meaning: "Potential difference",
                unit: "V",
                typical_values: "1-1000 V"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["C depends only on geometry, not on Q or V", "1 F is very large; most capacitors are μF, nF, pF"],
            dimensionalCheck: "[C] = [Q]/[V] = C/V = F",
          },
          {
            id: "parallel-plate",
            name: "Parallel Plate Capacitor",
            category: "derived",
            formula: "C = ε₀A/d",
            latex: "C = \\frac{\\varepsilon_0 A}{d}",
            description: "Capacitance of parallel plate capacitor with air/vacuum",
            variables: [
              {
                symbol: "C",
                meaning: "Capacitance",
                unit: "F",
                typical_values: "pF to μF"
              },
              {
                symbol: "ε₀",
                meaning: "Permittivity of free space",
                unit: "F/m",
                typical_values: "8.85 × 10⁻¹² F/m"
              },
              {
                symbol: "A",
                meaning: "Area of plates",
                unit: "m²",
                typical_values: "cm² to m²"
              },
              {
                symbol: "d",
                meaning: "Separation between plates",
                unit: "m",
                typical_values: "mm to cm"
              }
            ],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: ["Increasing A increases C", "Increasing d decreases C", "Dielectric always increases C"],
            dimensionalCheck: "[C] = [ε₀][A]/[d] = (F/m)(m²)/m = F",
          },
          {
            id: "capacitors-series",
            name: "Capacitors in Series",
            category: "derived",
            formula: "1/C_eq = 1/C₁ + 1/C₂ + ...",
            latex: "\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots",
            description: "Equivalent capacitance of capacitors connected in series",
            variables: [
              {
                symbol: "C_eq",
                meaning: "Equivalent capacitance",
                unit: "F",
                typical_values: "Less than smallest C"
              }
            ],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: ["Same charge Q on all capacitors in series", "Voltage divides: V₁/V₂ = C₂/C₁", "C_eq < smallest individual C"],
            dimensionalCheck: "[C] = F",
          },
          {
            id: "capacitors-parallel",
            name: "Capacitors in Parallel",
            category: "derived",
            formula: "C_eq = C₁ + C₂ + ...",
            latex: "C_{eq} = C_1 + C_2 + \\cdots",
            description: "Equivalent capacitance of capacitors connected in parallel",
            variables: [
              {
                symbol: "C_eq",
                meaning: "Equivalent capacitance",
                unit: "F",
                typical_values: "Sum of all C"
              }
            ],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: ["Same voltage V across all capacitors in parallel", "Charge divides: Q₁/Q₂ = C₁/C₂", "C_eq > largest individual C"],
            dimensionalCheck: "[C] = F",
          },
          {
            id: "energy-capacitor",
            name: "Energy Stored in Capacitor",
            category: "base",
            formula: "U = ½CV² = ½QV = Q²/2C",
            latex: "U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}",
            description: "Energy stored in electric field of charged capacitor",
            variables: [
              {
                symbol: "U",
                meaning: "Stored energy",
                unit: "J",
                typical_values: "μJ to J"
              },
              {
                symbol: "C",
                meaning: "Capacitance",
                unit: "F",
                typical_values: "pF to mF"
              },
              {
                symbol: "V",
                meaning: "Voltage",
                unit: "V",
                typical_values: "1-1000 V"
              },
              {
                symbol: "Q",
                meaning: "Charge",
                unit: "C",
                typical_values: "μC to mC"
              }
            ],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: ["Choose formula based on what is constant", "Battery connected: V constant, use ½CV²", "Isolated: Q constant, use Q²/2C"],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J",
          },
          {
            id: "dielectric-effect",
            name: "Effect of Dielectric",
            category: "derived",
            formula: "C = KC₀",
            latex: "C = KC_0",
            description: "Capacitance increases by factor K when dielectric inserted",
            variables: [
              {
                symbol: "K",
                meaning: "Dielectric constant",
                unit: "dimensionless",
                typical_values: "1 (air) to 80 (water)"
              },
              {
                symbol: "C₀",
                meaning: "Capacitance without dielectric",
                unit: "F",
                typical_values: "ε₀A/d"
              }
            ],
            derivedFrom: "parallel-plate",
            applications: [],
            specialCases: ["K ≥ 1 always (K = 1 for vacuum)", "Dielectric reduces E by factor K"],
            dimensionalCheck: "[K] = dimensionless, [C] = F",
          },
          {
            id: "finding-q",
            name: "Finding Q",
            category: "derived",
            formula: "Q = CV",
            latex: "Q = CV",
            description: "Charge for given C and V",
            variables: [],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = [Q]/[V] = C/V = F",
            neet_frequency: "high",
          },
          {
            id: "spherical-capacitor",
            name: "Spherical capacitor",
            category: "derived",
            formula: "C = 4\\pi\\varepsilon_0 R",
            latex: "C = 4\\pi\\varepsilon_0 R",
            description: "Isolated sphere of radius R",
            variables: [],
            derivedFrom: "capacitance-def",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = [Q]/[V] = C/V = F",
            neet_frequency: "medium",
          },
          {
            id: "with-dielectric",
            name: "With dielectric",
            category: "derived",
            formula: "C = \\frac{K\\varepsilon_0 A}{d} = KC_0",
            latex: "C = \\frac{K\\varepsilon_0 A}{d} = KC_0",
            description: "Dielectric constant K",
            variables: [],
            derivedFrom: "parallel-plate",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = [ε₀][A]/[d] = (F/m)(m²)/m = F",
            neet_frequency: "high",
          },
          {
            id: "partially-filled",
            name: "Partially filled",
            category: "derived",
            formula: "C = \\frac{\\varepsilon_0 A}{d - t + t/K}",
            latex: "C = \\frac{\\varepsilon_0 A}{d - t + t/K}",
            description: "Dielectric of thickness t",
            variables: [],
            derivedFrom: "parallel-plate",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = [ε₀][A]/[d] = (F/m)(m²)/m = F",
            neet_frequency: "high",
          },
          {
            id: "two-capacitors",
            name: "Two capacitors",
            category: "derived",
            formula: "C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}",
            latex: "C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}",
            description: "Product over sum",
            variables: [],
            derivedFrom: "capacitors-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = F",
            neet_frequency: "high",
          },
          {
            id: "n-identical-capacitors",
            name: "n identical capacitors",
            category: "derived",
            formula: "C_{eq} = \\frac{C}{n}",
            latex: "C_{eq} = \\frac{C}{n}",
            description: "All same value C",
            variables: [],
            derivedFrom: "capacitors-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = F",
            neet_frequency: "medium",
          },
          {
            id: "n-identical-capacitors-2",
            name: "n identical capacitors",
            category: "derived",
            formula: "C_{eq} = nC",
            latex: "C_{eq} = nC",
            description: "All same value C",
            variables: [],
            derivedFrom: "capacitors-parallel",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[C] = F",
            neet_frequency: "medium",
          },
          {
            id: "energy-density",
            name: "Energy density",
            category: "derived",
            formula: "u = \\frac{1}{2}\\varepsilon_0 E^2",
            latex: "u = \\frac{1}{2}\\varepsilon_0 E^2",
            description: "Energy per unit volume",
            variables: [],
            derivedFrom: "energy-capacitor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J",
            neet_frequency: "medium",
          },
          {
            id: "with-dielectric-2",
            name: "With dielectric",
            category: "derived",
            formula: "U = \\frac{1}{2}K\\varepsilon_0 E^2 \\times \\text{Vol}",
            latex: "U = \\frac{1}{2}K\\varepsilon_0 E^2 \\times \\text{Vol}",
            description: "Energy in dielectric",
            variables: [],
            derivedFrom: "energy-capacitor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[U] = [C][V²] = F·V² = J",
            neet_frequency: "medium",
          },
          {
            id: "battery-connected-v-constant",
            name: "Battery connected (V constant)",
            category: "derived",
            formula: "C \\uparrow, Q \\uparrow, U \\uparrow",
            latex: "C \\uparrow, Q \\uparrow, U \\uparrow",
            description: "Q and U increase by K",
            variables: [],
            derivedFrom: "dielectric-effect",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[K] = dimensionless, [C] = F",
            neet_frequency: "high",
          },
          {
            id: "isolated-q-constant",
            name: "Isolated (Q constant)",
            category: "derived",
            formula: "C \\uparrow, V \\downarrow, U \\downarrow",
            latex: "C \\uparrow, V \\downarrow, U \\downarrow",
            description: "V decreases, U decreases by 1/K",
            variables: [],
            derivedFrom: "dielectric-effect",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[K] = dimensionless, [C] = F",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using parallel formula for series capacitors",
            correct: "Series: 1/C = 1/C₁ + 1/C₂ (like parallel resistors). Parallel: C = C₁ + C₂",
            whyItHappens: "Opposite to resistors! Confusing the two",
            neetExample: "NEET 2020: Equivalent capacitance of series-parallel combination"
          },
          {
            mistake: "Not considering what is constant when dielectric is inserted",
            correct: "Battery connected: V constant. Isolated: Q constant. Effects are different!",
            whyItHappens: "Not analyzing the circuit condition",
            neetExample: "NEET 2019: Dielectric inserted with battery vs isolated capacitor"
          },
          {
            mistake: "Using wrong energy formula for the situation",
            correct: "Use ½CV² when V constant, Q²/2C when Q constant",
            whyItHappens: "Not identifying the constant quantity",
            neetExample: "NEET 2021: Energy change when dielectric inserted"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Series-parallel capacitor combinations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Energy stored in capacitor",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Effect of dielectric insertion",
            difficulty: "hard"
          },
          {
            type: "conceptual",
            description: "What happens when dielectric is inserted?",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Equivalent capacitance calculation",
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
            pattern: "Energy stored in capacitor",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Effect of dielectric insertion",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          }
        ],
        analogies: [
          {
            concept: "Capacitance",
            analogy: "Water tank size",
            mapping: "Bigger tank (C) holds more water (Q) at same pressure (V)"
          },
          {
            concept: "Series vs parallel",
            analogy: "Tanks in line vs side by side",
            mapping: "In line: same flow, less capacity. Side by side: same pressure, more capacity"
          }
        ],
        questions: [],
      },
      {
        id: "electrostatics-conductor",
        name: "Electrostatics of Conductor",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "In electrostatic equilibrium, the electric field inside a conductor is zero, all charge resides on the surface, and the surface is an equipotential. Electric field just outside is perpendicular to surface with magnitude σ/ε₀.",
          realWorldAnalogy: "Like free water in a container settling to the lowest energy configuration - charges on conductor redistribute to cancel internal fields and reach equilibrium.",
          keyPoints: [
            "E_inside = 0 in electrostatic equilibrium",
            "All excess charge on surface",
            "Surface is equipotential (V = constant)",
            "E just outside = σ/ε₀ (perpendicular to surface)",
            "Charge density higher at sharp points (corona discharge)",
            "Shielding: Faraday cage blocks external fields"
          ],
          prerequisites: ["electrostatic-potential", "gauss-law"]
        },
        formulas: [
          {
            id: "field-inside-conductor",
            name: "Field Inside Conductor",
            category: "base",
            formula: "E = 0 inside conductor",
            latex: "E_{inside} = 0",
            description: "Electric field inside a conductor in electrostatic equilibrium is zero",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m",
                typical_values: "0 inside"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Only in electrostatic equilibrium", "Free charges redistribute to cancel field"],
            dimensionalCheck: "[E] = V/m",
          },
          {
            id: "field-surface-conductor",
            name: "Field Just Outside Conductor",
            category: "base",
            formula: "E = σ/ε₀",
            latex: "E = \\frac{\\sigma}{\\varepsilon_0}",
            description: "Electric field just outside conductor surface",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field magnitude",
                unit: "V/m",
                typical_values: "10-10⁶ V/m"
              },
              {
                symbol: "σ",
                meaning: "Surface charge density",
                unit: "C/m²",
                typical_values: "μC/m² to mC/m²"
              },
              {
                symbol: "ε₀",
                meaning: "Permittivity",
                unit: "F/m",
                typical_values: "8.85 × 10⁻¹²"
              }
            ],
            derivedFrom: "gauss-law",
            applications: [],
            specialCases: ["Outward for +ve charge, inward for -ve", "Higher σ at points of high curvature (sharp points)"],
            dimensionalCheck: "[E] = [σ]/[ε₀] = (C/m²)/(F/m) = V/m",
          },
          {
            id: "induced-charge",
            name: "Induced Charge Distribution",
            category: "derived",
            formula: "Q_inner = -q, Q_outer = Q + q",
            latex: "Q_{inner} = -q, \\quad Q_{outer} = Q + q",
            description: "Charge induced on inner and outer surfaces of hollow conductor",
            variables: [
              {
                symbol: "q",
                meaning: "Charge inside cavity",
                unit: "C",
                typical_values: "Point charge in cavity"
              },
              {
                symbol: "Q",
                meaning: "Net charge on conductor",
                unit: "C",
                typical_values: "Charge on conductor"
              }
            ],
            derivedFrom: "field-inside-conductor",
            applications: [],
            specialCases: ["Inner surface charge exactly cancels charge in cavity for E = 0", "Outer charge = net charge of system"],
            dimensionalCheck: "[Q] = C",
          },
          {
            id: "faraday-cage",
            name: "Faraday cage",
            category: "derived",
            formula: "E = 0 \\text{ inside cage}",
            latex: "E = 0 \\text{ inside cage}",
            description: "Shielding from external fields",
            variables: [],
            derivedFrom: "field-inside-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = V/m",
            neet_frequency: "medium",
          },
          {
            id: "hollow-conductor",
            name: "Hollow conductor",
            category: "derived",
            formula: "E = 0 \\text{ in cavity if no charge inside}",
            latex: "E = 0 \\text{ in cavity if no charge inside}",
            description: "Shielding works",
            variables: [],
            derivedFrom: "field-inside-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = V/m",
            neet_frequency: "medium",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E} \\perp \\text{surface}",
            latex: "\\vec{E} \\perp \\text{surface}",
            description: "Always perpendicular to surface",
            variables: [],
            derivedFrom: "field-surface-conductor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [σ]/[ε₀] = (C/m²)/(F/m) = V/m",
            neet_frequency: "high",
          },
          {
            id: "uncharged-conductor",
            name: "Uncharged conductor",
            category: "derived",
            formula: "Q_{inner} = -q, Q_{outer} = +q",
            latex: "Q_{inner} = -q, Q_{outer} = +q",
            description: "Q = 0",
            variables: [],
            derivedFrom: "induced-charge",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = C",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking E ≠ 0 inside conductor when external field is applied",
            correct: "Even with external field, E = 0 inside in equilibrium. Charges redistribute to cancel external field.",
            whyItHappens: "Not understanding charge redistribution",
            neetExample: "NEET 2020: Field inside conductor in external field"
          },
          {
            mistake: "Forgetting that field is perpendicular to conductor surface",
            correct: "If E had parallel component, charges would move along surface (not equilibrium)",
            whyItHappens: "Not connecting equilibrium to direction",
            neetExample: "NEET 2019: Direction of E near conductor surface"
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
            description: "Induced charge on concentric shells",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Faraday cage and shielding",
            difficulty: "easy"
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
            pattern: "Induced charge on hollow conductor",
            frequency: "high",
            yearAsked: [
              2019,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Field just outside conductor surface",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "E = 0 inside conductor",
            analogy: "Calm inside a storm shelter",
            mapping: "Charges form a shield (on surface) protecting interior from fields"
          }
        ],
        questions: [],
      }
    ];