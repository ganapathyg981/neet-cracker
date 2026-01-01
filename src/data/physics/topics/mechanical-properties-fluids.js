// Mechanical Properties of Fluids - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 10

export const mechanicalPropertiesFluidsTopics = [
      {
        id: "pressure-pascals-law",
        name: "Pressure and Pascal's Law",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Pressure is force per unit area (P = F/A). In fluids, pressure acts equally in all directions. Pascal's law: pressure applied to enclosed fluid transmits equally throughout. Hydraulic systems use this: F₁/A₁ = F₂/A₂. Pressure increases with depth: P = P₀ + ρgh (hydrostatic pressure).",
          realWorldAnalogy: "Hydraulic car jack - small force on small piston creates large force on large piston. Like multiplying force using fluid pressure, similar to how a lever works.",
          keyPoints: [
            "Pressure: P = F/A (force perpendicular to area)",
            "SI unit: Pascal (Pa) = N/m²",
            "1 atm = 101325 Pa ≈ 10⁵ Pa",
            "Pascal's law: pressure transmits equally in enclosed fluid",
            "Hydraulic press: F₁/A₁ = F₂/A₂ (mechanical advantage)",
            "Hydrostatic pressure: P = P₀ + ρgh (increases with depth)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "pressure-formula",
            name: "Pressure",
            category: "base",
            formula: "P = F/A",
            latex: "P = \\frac{F}{A}",
            description: "Force per unit area perpendicular to surface",
            variables: [
              {
                symbol: "P",
                meaning: "Pressure",
                unit: "Pa or N/m²",
                typical_values: "10⁵ Pa (atm)"
              },
              {
                symbol: "F",
                meaning: "Force (perpendicular)",
                unit: "N",
                typical_values: "1-10⁶ N"
              },
              {
                symbol: "A",
                meaning: "Area",
                unit: "m²",
                typical_values: "10⁻⁴-1 m²"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Pressure is scalar (acts equally in all directions in fluid)", "1 atm = 76 cm Hg = 10.3 m water column"],
            dimensionalCheck: "[P] = [F]/[A] = N/m² = Pa",
          },
          {
            id: "hydrostatic-pressure",
            name: "Hydrostatic Pressure",
            category: "derived",
            formula: "P = P₀ + ρgh",
            latex: "P = P_0 + \\rho gh",
            description: "Pressure at depth h in a fluid",
            variables: [
              {
                symbol: "P",
                meaning: "Pressure at depth",
                unit: "Pa",
                typical_values: ">P₀"
              },
              {
                symbol: "P₀",
                meaning: "Pressure at surface",
                unit: "Pa",
                typical_values: "10⁵ Pa"
              },
              {
                symbol: "ρ",
                meaning: "Fluid density",
                unit: "kg/m³",
                typical_values: "1000 kg/m³ (water)"
              },
              {
                symbol: "h",
                meaning: "Depth below surface",
                unit: "m",
                typical_values: "0.1-100 m"
              }
            ],
            derivedFrom: "pressure-formula",
            applications: [],
            specialCases: ["Pressure depends on depth, not container shape", "Same depth = same pressure (horizontal planes)"],
            dimensionalCheck: "[P] = [ρ][g][h] = kg/m³ × m/s² × m = Pa",
          },
          {
            id: "hydraulic-press",
            name: "Hydraulic Press",
            category: "derived",
            formula: "F₁/A₁ = F₂/A₂",
            latex: "\\frac{F_1}{A_1} = \\frac{F_2}{A_2}",
            description: "Pascal's law application: force multiplication",
            variables: [
              {
                symbol: "F₁",
                meaning: "Input force (small piston)",
                unit: "N",
                typical_values: "Small force"
              },
              {
                symbol: "A₁",
                meaning: "Small piston area",
                unit: "m²",
                typical_values: "Small area"
              },
              {
                symbol: "F₂",
                meaning: "Output force (large piston)",
                unit: "N",
                typical_values: "Large force"
              },
              {
                symbol: "A₂",
                meaning: "Large piston area",
                unit: "m²",
                typical_values: "Large area"
              }
            ],
            derivedFrom: "pressure-formula",
            applications: [],
            specialCases: ["Force multiplied, distance divided (work conserved)", "Pressure same throughout connected fluid"],
            dimensionalCheck: "[F]/[A] = Pa (same on both sides)",
          },
          {
            id: "atmospheric-pressure",
            name: "Atmospheric pressure",
            category: "derived",
            formula: "P_{atm} \\approx 10^5 \\text{ Pa}",
            latex: "P_{atm} \\approx 10^5 \\text{ Pa}",
            description: "Pressure of air at sea level",
            variables: [],
            derivedFrom: "pressure-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [F]/[A] = N/m² = Pa",
            neet_frequency: "high",
          },
          {
            id: "mercury-barometer",
            name: "Mercury barometer",
            category: "derived",
            formula: "P_{atm} = \\rho_{Hg} g h = 76 \\text{ cm Hg}",
            latex: "P_{atm} = \\rho_{Hg} g h = 76 \\text{ cm Hg}",
            description: "Height of mercury column",
            variables: [],
            derivedFrom: "pressure-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [F]/[A] = N/m² = Pa",
            neet_frequency: "high",
          },
          {
            id: "gauge-pressure",
            name: "Gauge pressure",
            category: "derived",
            formula: "P_{gauge} = P - P_{atm} = \\rho gh",
            latex: "P_{gauge} = P - P_{atm} = \\rho gh",
            description: "Pressure above atmospheric",
            variables: [],
            derivedFrom: "hydrostatic-pressure",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρ][g][h] = kg/m³ × m/s² × m = Pa",
            neet_frequency: "high",
          },
          {
            id: "absolute-pressure",
            name: "Absolute pressure",
            category: "derived",
            formula: "P_{abs} = P_{atm} + \\rho gh",
            latex: "P_{abs} = P_{atm} + \\rho gh",
            description: "Total pressure",
            variables: [],
            derivedFrom: "hydrostatic-pressure",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρ][g][h] = kg/m³ × m/s² × m = Pa",
            neet_frequency: "high",
          },
          {
            id: "pressure-difference",
            name: "Pressure difference",
            category: "derived",
            formula: "\\Delta P = \\rho g \\Delta h",
            latex: "\\Delta P = \\rho g \\Delta h",
            description: "Between two depths",
            variables: [],
            derivedFrom: "hydrostatic-pressure",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρ][g][h] = kg/m³ × m/s² × m = Pa",
            neet_frequency: "high",
          },
          {
            id: "mechanical-advantage",
            name: "Mechanical advantage",
            category: "derived",
            formula: "MA = \\frac{F_2}{F_1} = \\frac{A_2}{A_1}",
            latex: "MA = \\frac{F_2}{F_1} = \\frac{A_2}{A_1}",
            description: "Force multiplication",
            variables: [],
            derivedFrom: "hydraulic-press",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F]/[A] = Pa (same on both sides)",
            neet_frequency: "high",
          },
          {
            id: "distance-trade-off",
            name: "Distance trade-off",
            category: "derived",
            formula: "d_1 A_1 = d_2 A_2",
            latex: "d_1 A_1 = d_2 A_2",
            description: "Work conservation",
            variables: [],
            derivedFrom: "hydraulic-press",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F]/[A] = Pa (same on both sides)",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing gauge pressure with absolute pressure",
            correct: "Gauge = P - Pₐₜₘ (what gauges read). Absolute = P₀ + ρgh (true pressure)",
            whyItHappens: "Pressure gauges read zero at atmospheric pressure",
            neetExample: "NEET 2020: Pressure at 10m depth in water"
          },
          {
            mistake: "Thinking pressure depends on container shape",
            correct: "Pressure at depth h is ρgh regardless of container shape (hydrostatic paradox)",
            whyItHappens: "Intuition that wider containers have more pressure",
            neetExample: "NEET 2019: Pressure in connected containers of different shapes"
          },
          {
            mistake: "Forgetting P₀ in absolute pressure calculation",
            correct: "P_abs = P₀ + ρgh. Don't forget atmospheric pressure P₀",
            whyItHappens: "Focusing only on depth contribution",
            neetExample: "NEET 2021: Absolute pressure at bottom of tank"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Pressure at given depth",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Hydraulic press force calculation",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Gauge vs absolute pressure",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Barometer height problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Hydrostatic pressure calculation",
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
            pattern: "Hydraulic press problems",
            frequency: "medium",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Atmospheric pressure and barometer",
            frequency: "high",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Hydraulic press",
            analogy: "Lever for fluids",
            mapping: "Small force on small area = large force on large area, like small effort on long lever arm"
          },
          {
            concept: "Hydrostatic pressure",
            analogy: "Weight of fluid column above",
            mapping: "Deeper = more fluid above = more weight pressing down = more pressure"
          }
        ],
        questions: [],
      },
      {
        id: "buoyancy-archimedes",
        name: "Buoyancy and Archimedes' Principle",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Buoyant force is the upward force on submerged object equal to weight of displaced fluid. Archimedes' principle: F_b = ρ_fluid × V_displaced × g. Object floats if ρ_object < ρ_fluid, sinks if ρ_object > ρ_fluid. Floating objects displace their own weight of fluid.",
          realWorldAnalogy: "Ice floats because it's less dense than water. A ship floats by displacing enough water to equal its weight - making a steel ship lighter than the water it displaces.",
          keyPoints: [
            "Buoyant force: F_b = ρ_fluid × g × V_displaced",
            "Acts at center of buoyancy (center of displaced fluid)",
            "Float: ρ_object < ρ_fluid, Sink: ρ_object > ρ_fluid",
            "Floating: weight = buoyant force (V_submerged/V_total = ρ_object/ρ_fluid)",
            "Apparent weight = W - F_b = ρ_object × g × V - ρ_fluid × g × V",
            "Loss of weight in fluid = weight of displaced fluid"
          ],
          prerequisites: ["pressure-pascals-law"]
        },
        formulas: [
          {
            id: "buoyant-force",
            name: "Buoyant Force",
            category: "base",
            formula: "F_b = ρ_fluid × g × V_displaced",
            latex: "F_b = \\rho_{fluid} \\cdot g \\cdot V_{displaced}",
            description: "Upward force on submerged body (Archimedes' principle)",
            variables: [
              {
                symbol: "F_b",
                meaning: "Buoyant force",
                unit: "N",
                typical_values: "Up to weight of body"
              },
              {
                symbol: "ρ_fluid",
                meaning: "Fluid density",
                unit: "kg/m³",
                typical_values: "1000 kg/m³ (water)"
              },
              {
                symbol: "V_displaced",
                meaning: "Volume of fluid displaced",
                unit: "m³",
                typical_values: "Submerged volume"
              }
            ],
            derivedFrom: "hydrostatic-pressure",
            applications: [],
            specialCases: ["In vacuum: F_b = 0", "In denser fluid: more buoyancy"],
            dimensionalCheck: "[F_b] = [ρ][g][V] = kg/m³ × m/s² × m³ = N",
          },
          {
            id: "floating-condition",
            name: "Floating Condition",
            category: "derived",
            formula: "V_submerged/V_total = ρ_object/ρ_fluid",
            latex: "\\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}",
            description: "Fraction of floating body submerged",
            variables: [
              {
                symbol: "V_sub",
                meaning: "Submerged volume",
                unit: "m³",
                typical_values: "Part of total"
              },
              {
                symbol: "V_total",
                meaning: "Total volume",
                unit: "m³",
                typical_values: "Object volume"
              }
            ],
            derivedFrom: "buoyant-force",
            applications: [],
            specialCases: ["If ρ_obj = ρ_fluid: just submerged (neutral buoyancy)", "If ρ_obj > ρ_fluid: sinks"],
            dimensionalCheck: "Dimensionless ratio",
          },
          {
            id: "relative-density",
            name: "Relative Density (Specific Gravity)",
            category: "derived",
            formula: "RD = ρ_substance/ρ_water",
            latex: "RD = \\frac{\\rho_{substance}}{\\rho_{water}} = \\frac{W_{air}}{W_{air} - W_{water}}",
            description: "Density relative to water",
            variables: [
              {
                symbol: "RD",
                meaning: "Relative density",
                unit: "dimensionless",
                typical_values: "0.5-20"
              },
              {
                symbol: "W_air",
                meaning: "Weight in air",
                unit: "N",
                typical_values: "True weight"
              },
              {
                symbol: "W_water",
                meaning: "Apparent weight in water",
                unit: "N",
                typical_values: "Less than W_air"
              }
            ],
            derivedFrom: "buoyant-force",
            applications: [],
            specialCases: ["RD < 1: floats in water", "RD > 1: sinks in water", "RD has no units"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "fully-submerged",
            name: "Fully submerged",
            category: "derived",
            formula: "F_b = \\rho_f g V_{object}",
            latex: "F_b = \\rho_f g V_{object}",
            description: "V_displaced = V_object",
            variables: [],
            derivedFrom: "buoyant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F_b] = [ρ][g][V] = kg/m³ × m/s² × m³ = N",
            neet_frequency: "high",
          },
          {
            id: "floating-body",
            name: "Floating body",
            category: "derived",
            formula: "F_b = mg = \\rho_f g V_{submerged}",
            latex: "F_b = mg = \\rho_f g V_{submerged}",
            description: "Equilibrium",
            variables: [],
            derivedFrom: "buoyant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F_b] = [ρ][g][V] = kg/m³ × m/s² × m³ = N",
            neet_frequency: "high",
          },
          {
            id: "apparent-weight",
            name: "Apparent weight",
            category: "derived",
            formula: "W_{app} = W - F_b = (\\rho_{obj} - \\rho_f)gV",
            latex: "W_{app} = W - F_b = (\\rho_{obj} - \\rho_f)gV",
            description: "Weight in fluid",
            variables: [],
            derivedFrom: "buoyant-force",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F_b] = [ρ][g][V] = kg/m³ × m/s² × m³ = N",
            neet_frequency: "high",
          },
          {
            id: "ice-in-water",
            name: "Ice in water",
            category: "derived",
            formula: "\\frac{V_{sub}}{V} = \\frac{917}{1000} \\approx 0.92",
            latex: "\\frac{V_{sub}}{V} = \\frac{917}{1000} \\approx 0.92",
            description: "92% submerged",
            variables: [],
            derivedFrom: "floating-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "wood-in-water",
            name: "Wood in water",
            category: "derived",
            formula: "\\frac{V_{sub}}{V} = \\frac{\\rho_{wood}}{1000}",
            latex: "\\frac{V_{sub}}{V} = \\frac{\\rho_{wood}}{1000}",
            description: "Depends on wood type",
            variables: [],
            derivedFrom: "floating-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "medium",
          },
          {
            id: "find-density",
            name: "Find density",
            category: "derived",
            formula: "\\rho = RD \\times 1000 \\text{ kg/m}^3",
            latex: "\\rho = RD \\times 1000 \\text{ kg/m}^3",
            description: "From relative density",
            variables: [],
            derivedFrom: "relative-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "from-weights",
            name: "From weights",
            category: "derived",
            formula: "RD = \\frac{W}{W - W_w} = \\frac{W}{\\text{loss in water}}",
            latex: "RD = \\frac{W}{W - W_w} = \\frac{W}{\\text{loss in water}}",
            description: "Experimental method",
            variables: [],
            derivedFrom: "relative-density",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using object volume when partially submerged",
            correct: "Use V_displaced (submerged volume), not total volume for floating bodies",
            whyItHappens: "Not distinguishing between submerged and total volume",
            neetExample: "NEET 2020: Buoyant force on floating ice"
          },
          {
            mistake: "Thinking buoyant force depends on depth",
            correct: "F_b = ρgV depends only on displaced volume, not how deep. Same V = same F_b",
            whyItHappens: "Confusing with pressure increase with depth",
            neetExample: "NEET 2019: Buoyancy at different depths"
          },
          {
            mistake: "Forgetting apparent weight can be negative",
            correct: "If ρ_object < ρ_fluid, apparent weight is negative (net upward force)",
            whyItHappens: "Not considering objects lighter than fluid",
            neetExample: "NEET 2021: Tension in string holding submerged balloon"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate buoyant force",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Fraction submerged for floating body",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Apparent weight in fluid",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Relative density from weights",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Buoyant force calculation",
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
            pattern: "Fraction submerged problems",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Apparent weight in liquid",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Buoyant force",
            analogy: "Pushing a beach ball underwater",
            mapping: "The ball pushes back up with force equal to weight of water it displaces"
          },
          {
            concept: "Floating",
            analogy: "Load in a boat",
            mapping: "More load = sink deeper = displace more water = more buoyancy until balanced"
          }
        ],
        questions: [],
      },
      {
        id: "fluid-flow-continuity",
        name: "Fluid Flow and Equation of Continuity",
        weightage: 0,
        difficulty: "medium",
        theory: {
          summary: "Streamline flow is smooth, orderly flow where velocity at each point is constant. Equation of continuity: A₁v₁ = A₂v₂ for incompressible fluids. Volume flow rate Q = Av = constant. Turbulent flow occurs above critical velocity. Reynolds number determines flow type.",
          realWorldAnalogy: "Water flowing through a garden hose - squeeze the end (reduce area) and water speeds up. Same amount of water must pass through per second.",
          keyPoints: [
            "Streamline: path followed by fluid particle",
            "Equation of continuity: A₁v₁ = A₂v₂ (mass conservation)",
            "Volume flow rate: Q = Av (m³/s)",
            "Smaller cross-section = higher velocity",
            "Reynolds number: Re = ρvD/η (flow type indicator)",
            "Re < 2000: laminar, Re > 3000: turbulent"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "continuity-equation",
            name: "Equation of Continuity",
            category: "base",
            formula: "A₁v₁ = A₂v₂",
            latex: "A_1 v_1 = A_2 v_2",
            description: "Mass conservation in fluid flow",
            variables: [
              {
                symbol: "A₁, A₂",
                meaning: "Cross-sectional areas",
                unit: "m²",
                typical_values: "10⁻⁴ to 1 m²"
              },
              {
                symbol: "v₁, v₂",
                meaning: "Flow velocities",
                unit: "m/s",
                typical_values: "0.1 to 10 m/s"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Valid for incompressible, steady flow", "Narrower section = faster flow"],
            dimensionalCheck: "[A][v] = m² × m/s = m³/s",
          },
          {
            id: "volume-flow-rate",
            name: "Volume Flow Rate",
            category: "derived",
            formula: "Q = Av",
            latex: "Q = Av",
            description: "Volume of fluid passing through per unit time",
            variables: [
              {
                symbol: "Q",
                meaning: "Volume flow rate",
                unit: "m³/s",
                typical_values: "10⁻⁶ to 1 m³/s"
              },
              {
                symbol: "A",
                meaning: "Cross-sectional area",
                unit: "m²",
                typical_values: "10⁻⁴ to 1 m²"
              },
              {
                symbol: "v",
                meaning: "Flow velocity",
                unit: "m/s",
                typical_values: "0.1 to 10 m/s"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Q = constant along streamline (continuity)", "1 L/s = 10⁻³ m³/s"],
            dimensionalCheck: "[Q] = m³/s",
          },
          {
            id: "reynolds-number",
            name: "Reynolds Number",
            category: "derived",
            formula: "Re = ρvD/η",
            latex: "Re = \\frac{\\rho v D}{\\eta}",
            description: "Dimensionless number indicating flow type",
            variables: [
              {
                symbol: "Re",
                meaning: "Reynolds number",
                unit: "dimensionless",
                typical_values: "100 to 10⁶"
              },
              {
                symbol: "D",
                meaning: "Characteristic dimension (diameter)",
                unit: "m",
                typical_values: "0.01 to 1 m"
              },
              {
                symbol: "η",
                meaning: "Dynamic viscosity",
                unit: "Pa·s",
                typical_values: "10⁻³ Pa·s (water)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["2000 < Re < 3000: transition region", "Higher viscosity favors laminar flow"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "velocity-ratio",
            name: "Velocity ratio",
            category: "derived",
            formula: "\\frac{v_2}{v_1} = \\frac{A_1}{A_2}",
            latex: "\\frac{v_2}{v_1} = \\frac{A_1}{A_2}",
            description: "Inverse proportionality",
            variables: [],
            derivedFrom: "continuity-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A][v] = m² × m/s = m³/s",
            neet_frequency: "high",
          },
          {
            id: "circular-pipes",
            name: "Circular pipes",
            category: "derived",
            formula: "\\pi r_1^2 v_1 = \\pi r_2^2 v_2",
            latex: "\\pi r_1^2 v_1 = \\pi r_2^2 v_2",
            description: "v ∝ 1/r²",
            variables: [],
            derivedFrom: "continuity-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A][v] = m² × m/s = m³/s",
            neet_frequency: "high",
          },
          {
            id: "mass-flow-rate",
            name: "Mass flow rate",
            category: "derived",
            formula: "\\dot{m} = \\rho Q = \\rho A v",
            latex: "\\dot{m} = \\rho Q = \\rho A v",
            description: "For compressible fluids",
            variables: [],
            derivedFrom: "volume-flow-rate",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = m³/s",
            neet_frequency: "medium",
          },
          {
            id: "time-to-fill-tank",
            name: "Time to fill tank",
            category: "derived",
            formula: "t = \\frac{V}{Q}",
            latex: "t = \\frac{V}{Q}",
            description: "V = volume of tank",
            variables: [],
            derivedFrom: "volume-flow-rate",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = m³/s",
            neet_frequency: "medium",
          },
          {
            id: "laminar-flow",
            name: "Laminar flow",
            category: "derived",
            formula: "Re < 2000",
            latex: "Re < 2000",
            description: "Smooth, orderly flow",
            variables: [],
            derivedFrom: "reynolds-number",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "turbulent-flow",
            name: "Turbulent flow",
            category: "derived",
            formula: "Re > 3000",
            latex: "Re > 3000",
            description: "Chaotic, mixing flow",
            variables: [],
            derivedFrom: "reynolds-number",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "critical-velocity",
            name: "Critical velocity",
            category: "derived",
            formula: "v_c = \\frac{2000 \\eta}{\\rho D}",
            latex: "v_c = \\frac{2000 \\eta}{\\rho D}",
            description: "Transition point",
            variables: [],
            derivedFrom: "reynolds-number",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking velocity decreases in narrower section",
            correct: "A₁v₁ = A₂v₂: smaller A means larger v. Velocity increases in constriction",
            whyItHappens: "Intuition that narrow = restricted = slower",
            neetExample: "NEET 2020: Velocity in narrower pipe section"
          },
          {
            mistake: "Applying continuity to compressible flow without density",
            correct: "For gases: ρ₁A₁v₁ = ρ₂A₂v₂. Density can change.",
            whyItHappens: "Assuming all fluids are incompressible",
            neetExample: "NEET 2019: Flow of air vs water"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply continuity equation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Calculate volume flow rate",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Reynolds number calculation",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Identify laminar vs turbulent flow",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Continuity equation problems",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2023
            ]
          },
          {
            pattern: "Flow rate calculations",
            frequency: "medium",
            yearAsked: [2019, 2022, 2023]
          },
          {
            pattern: "Reynolds number and flow type",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Continuity equation",
            analogy: "Traffic on highway narrowing",
            mapping: "Cars must speed up in narrow section (fewer lanes) to maintain same flow rate"
          },
          {
            concept: "Streamline flow",
            analogy: "Lanes on highway",
            mapping: "Each car follows its lane smoothly, no overtaking or lane changing"
          }
        ],
        questions: [],
      },
      {
        id: "bernoullis-principle",
        name: "Bernoulli's Principle",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Bernoulli's equation: P + ½ρv² + ρgh = constant along a streamline. Higher velocity means lower pressure. Applications include airplane lift, venturi effect, and spray guns. Derived from conservation of energy in fluid flow.",
          realWorldAnalogy: "Blow between two papers - they come together because fast air creates low pressure. Same principle keeps airplanes flying.",
          keyPoints: [
            "Bernoulli's equation: P + ½ρv² + ρgh = constant",
            "P = static pressure, ½ρv² = dynamic pressure, ρgh = pressure head",
            "Higher velocity → lower static pressure",
            "Valid for ideal, incompressible, non-viscous fluid",
            "Torricelli's theorem: v = √(2gh) for efflux velocity",
            "Applications: lift, venturi, atomizer, Magnus effect"
          ],
          prerequisites: ["fluid-flow-continuity", "pressure-pascals-law"]
        },
        formulas: [
          {
            id: "bernoullis-equation",
            name: "Bernoulli's Equation",
            category: "base",
            formula: "P + ½ρv² + ρgh = constant",
            latex: "P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}",
            description: "Conservation of energy in fluid flow",
            variables: [
              {
                symbol: "P",
                meaning: "Static pressure",
                unit: "Pa",
                typical_values: "10⁵ Pa"
              },
              {
                symbol: "½ρv²",
                meaning: "Dynamic pressure",
                unit: "Pa",
                typical_values: "0 to 10⁴ Pa"
              },
              {
                symbol: "ρgh",
                meaning: "Pressure head",
                unit: "Pa",
                typical_values: "Height dependent"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Each term has units of pressure (Pa)", "Sum is constant along streamline only"],
            dimensionalCheck: "[P] = [ρv²] = [ρgh] = Pa",
          },
          {
            id: "torricellis-theorem",
            name: "Torricelli's Theorem",
            category: "derived",
            formula: "v = √(2gh)",
            latex: "v = \\sqrt{2gh}",
            description: "Efflux velocity from a hole at depth h",
            variables: [
              {
                symbol: "v",
                meaning: "Efflux velocity",
                unit: "m/s",
                typical_values: "1-20 m/s"
              },
              {
                symbol: "h",
                meaning: "Height of liquid above hole",
                unit: "m",
                typical_values: "0.1-10 m"
              }
            ],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: ["Same as free fall from height h", "Valid for small hole (A_hole << A_tank)"],
            dimensionalCheck: "[v] = √[gh] = m/s",
          },
          {
            id: "venturi-meter",
            name: "Venturi Effect",
            category: "derived",
            formula: "v₂ = √(2ΔP/ρ(1 - (A₂/A₁)²))",
            latex: "v_2 = \\sqrt{\\frac{2\\Delta P}{\\rho\\left(1 - \\left(\\frac{A_2}{A_1}\\right)^2\\right)}}",
            description: "Velocity in constricted section from pressure drop",
            variables: [
              {
                symbol: "ΔP",
                meaning: "Pressure difference",
                unit: "Pa",
                typical_values: "10²-10⁴ Pa"
              },
              {
                symbol: "A₁, A₂",
                meaning: "Wide and narrow areas",
                unit: "m²",
                typical_values: "A₂ < A₁"
              }
            ],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: ["Pressure lowest at narrowest point", "Basis for flow measurement devices"],
            dimensionalCheck: "[v] = √[P/ρ] = m/s",
          },
          {
            id: "airplane-lift",
            name: "Lift Force",
            category: "derived",
            formula: "F = ½ρv²ACₗ",
            latex: "F = \\frac{1}{2}\\rho (v_{bottom}^2 - v_{top}^2) A",
            description: "Lift on airfoil due to pressure difference",
            variables: [
              {
                symbol: "F",
                meaning: "Lift force",
                unit: "N",
                typical_values: "Equals weight for level flight"
              },
              {
                symbol: "A",
                meaning: "Wing area",
                unit: "m²",
                typical_values: "10-500 m²"
              }
            ],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: ["Curved top = faster flow = lower pressure", "Lift must equal weight for level flight"],
            dimensionalCheck: "[F] = [ρ][v²][A] = N",
          },
          {
            id: "horizontal-flow",
            name: "Horizontal flow",
            category: "derived",
            formula: "P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2",
            latex: "P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2",
            description: "h constant",
            variables: [],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρv²] = [ρgh] = Pa",
            neet_frequency: "high",
          },
          {
            id: "at-rest",
            name: "At rest",
            category: "derived",
            formula: "P_1 + \\rho g h_1 = P_2 + \\rho g h_2",
            latex: "P_1 + \\rho g h_1 = P_2 + \\rho g h_2",
            description: "v = 0 (hydrostatics)",
            variables: [],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρv²] = [ρgh] = Pa",
            neet_frequency: "high",
          },
          {
            id: "pressure-difference",
            name: "Pressure difference",
            category: "derived",
            formula: "P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)",
            latex: "P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)",
            description: "Same height",
            variables: [],
            derivedFrom: "bernoullis-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [ρv²] = [ρgh] = Pa",
            neet_frequency: "high",
          },
          {
            id: "range-of-liquid-jet",
            name: "Range of liquid jet",
            category: "derived",
            formula: "R = v \\times t = 2\\sqrt{h(H-h)}",
            latex: "R = v \\times t = 2\\sqrt{h(H-h)}",
            description: "Horizontal distance",
            variables: [],
            derivedFrom: "torricellis-theorem",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √[gh] = m/s",
            neet_frequency: "high",
          },
          {
            id: "maximum-range",
            name: "Maximum range",
            category: "derived",
            formula: "R_{max} = H \\text{ when } h = H/2",
            latex: "R_{max} = H \\text{ when } h = H/2",
            description: "Hole at mid-height",
            variables: [],
            derivedFrom: "torricellis-theorem",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √[gh] = m/s",
            neet_frequency: "high",
          },
          {
            id: "time-to-empty",
            name: "Time to empty",
            category: "derived",
            formula: "t = \\frac{A}{a}\\sqrt{\\frac{2H}{g}}",
            latex: "t = \\frac{A}{a}\\sqrt{\\frac{2H}{g}}",
            description: "A=tank area, a=hole area",
            variables: [],
            derivedFrom: "torricellis-theorem",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √[gh] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "venturi-meter-2",
            name: "Venturi meter",
            category: "derived",
            formula: "Q = A_2 \\sqrt{\\frac{2\\Delta P}{\\rho(1-(A_2/A_1)^2)}}",
            latex: "Q = A_2 \\sqrt{\\frac{2\\Delta P}{\\rho(1-(A_2/A_1)^2)}}",
            description: "Flow rate measurement",
            variables: [],
            derivedFrom: "venturi-meter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √[P/ρ] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "atomizerspray",
            name: "Atomizer/spray",
            category: "derived",
            formula: "",
            latex: "",
            description: "Fast air creates low P, draws liquid up",
            variables: [],
            derivedFrom: "venturi-meter",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √[P/ρ] = m/s",
            neet_frequency: "low",
          },
          {
            id: "pressure-difference-2",
            name: "Pressure difference",
            category: "derived",
            formula: "P_{bottom} - P_{top} = \\frac{1}{2}\\rho(v_t^2 - v_b^2)",
            latex: "P_{bottom} - P_{top} = \\frac{1}{2}\\rho(v_t^2 - v_b^2)",
            description: "Higher v on top",
            variables: [],
            derivedFrom: "airplane-lift",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [ρ][v²][A] = N",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking Bernoulli applies to all fluids",
            correct: "Bernoulli requires ideal fluid: incompressible, non-viscous, steady streamline flow",
            whyItHappens: "Not checking conditions of applicability",
            neetExample: "NEET 2020: When Bernoulli equation is valid"
          },
          {
            mistake: "Forgetting height term in Bernoulli equation",
            correct: "Include ρgh term unless flow is horizontal (h₁ = h₂)",
            whyItHappens: "Assuming horizontal flow always",
            neetExample: "NEET 2019: Flow through pipe at different heights"
          },
          {
            mistake: "Confusing static and dynamic pressure",
            correct: "P is static (measured by stationary gauge). ½ρv² is dynamic (due to motion). Total = P + ½ρv²",
            whyItHappens: "Not understanding pressure components",
            neetExample: "NEET 2021: Pressure measured by Pitot tube"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply Bernoulli equation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Torricelli efflux velocity",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Range of liquid jet",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Explain lift on airplane",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Bernoulli's equation problems",
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
            pattern: "Torricelli's theorem",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Range of efflux liquid",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Bernoulli's principle",
            analogy: "Fast river is shallow",
            mapping: "Where river narrows and speeds up, water level drops (pressure decreases)"
          },
          {
            concept: "Airplane lift",
            analogy: "Blowing over paper",
            mapping: "Fast air above curved surface = low pressure = paper rises"
          }
        ],
        questions: [],
      },
      {
        id: "viscosity",
        name: "Viscosity",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Viscosity is internal friction in fluids. Viscous force F = ηA(dv/dx). Stokes' law gives drag on sphere: F = 6πηrv. Terminal velocity reached when drag equals weight. Poiseuille's equation describes flow through pipe. SI unit of viscosity: Pa·s or poiseuille.",
          realWorldAnalogy: "Honey is more viscous than water - harder to pour because layers resist sliding past each other. Like friction between fluid layers.",
          keyPoints: [
            "Coefficient of viscosity: η (eta)",
            "Newton's viscosity: F = ηA(dv/dx)",
            "SI unit: Pa·s (or N·s/m²), CGS: poise (1 Pa·s = 10 poise)",
            "Stokes' law: F = 6πηrv (for sphere in fluid)",
            "Terminal velocity: v_t = 2r²(ρ_s - ρ_f)g/9η",
            "Poiseuille's equation: Q = πPr⁴/8ηL"
          ],
          prerequisites: ["fluid-flow-continuity"]
        },
        formulas: [
          {
            id: "newtons-viscosity",
            name: "Newton's Law of Viscosity",
            category: "base",
            formula: "F = ηA(dv/dx)",
            latex: "F = \\eta A \\frac{dv}{dx}",
            description: "Viscous force between fluid layers",
            variables: [
              {
                symbol: "F",
                meaning: "Viscous force",
                unit: "N",
                typical_values: "10⁻⁶ to 1 N"
              },
              {
                symbol: "η",
                meaning: "Coefficient of viscosity",
                unit: "Pa·s",
                typical_values: "10⁻³ (water) to 1 (honey)"
              },
              {
                symbol: "A",
                meaning: "Contact area between layers",
                unit: "m²",
                typical_values: "10⁻⁴ to 1 m²"
              },
              {
                symbol: "dv/dx",
                meaning: "Velocity gradient",
                unit: "s⁻¹",
                typical_values: "1 to 10³ s⁻¹"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["η ∝ T (gases), η ∝ 1/T (liquids)", "Ideal fluid has η = 0"],
            dimensionalCheck: "[η] = [F]/([A][dv/dx]) = Pa·s",
          },
          {
            id: "stokes-law",
            name: "Stokes' Law",
            category: "derived",
            formula: "F = 6πηrv",
            latex: "F = 6\\pi\\eta rv",
            description: "Viscous drag on a sphere moving through fluid",
            variables: [
              {
                symbol: "F",
                meaning: "Drag force",
                unit: "N",
                typical_values: "Opposes motion"
              },
              {
                symbol: "r",
                meaning: "Radius of sphere",
                unit: "m",
                typical_values: "10⁻⁶ to 10⁻² m"
              },
              {
                symbol: "v",
                meaning: "Velocity of sphere",
                unit: "m/s",
                typical_values: "10⁻³ to 1 m/s"
              }
            ],
            derivedFrom: "newtons-viscosity",
            applications: [],
            specialCases: ["Valid for slow, laminar flow (Re < 1)", "F ∝ r (not r²)"],
            dimensionalCheck: "[F] = [η][r][v] = N",
          },
          {
            id: "terminal-velocity",
            name: "Terminal Velocity",
            category: "derived",
            formula: "v_t = 2r²(ρ_s - ρ_f)g/9η",
            latex: "v_t = \\frac{2r^2(\\rho_s - \\rho_f)g}{9\\eta}",
            description: "Constant velocity when drag equals net weight",
            variables: [
              {
                symbol: "v_t",
                meaning: "Terminal velocity",
                unit: "m/s",
                typical_values: "10⁻³ to 10 m/s"
              },
              {
                symbol: "ρ_s",
                meaning: "Sphere density",
                unit: "kg/m³",
                typical_values: "1000-8000 kg/m³"
              },
              {
                symbol: "ρ_f",
                meaning: "Fluid density",
                unit: "kg/m³",
                typical_values: "1000 kg/m³ (water)"
              }
            ],
            derivedFrom: "stokes-law",
            applications: [],
            specialCases: ["At terminal velocity: weight = buoyancy + drag", "If ρ_s < ρ_f: sphere rises (v_t negative)"],
            dimensionalCheck: "[v_t] = [r²][ρ][g]/[η] = m/s",
          },
          {
            id: "poiseuilles-equation",
            name: "Poiseuille's Equation",
            category: "derived",
            formula: "Q = πPr⁴/8ηL",
            latex: "Q = \\frac{\\pi P r^4}{8\\eta L}",
            description: "Volume flow rate through cylindrical pipe",
            variables: [
              {
                symbol: "Q",
                meaning: "Volume flow rate",
                unit: "m³/s",
                typical_values: "10⁻⁶ to 10⁻³ m³/s"
              },
              {
                symbol: "P",
                meaning: "Pressure difference",
                unit: "Pa",
                typical_values: "10² to 10⁵ Pa"
              },
              {
                symbol: "r",
                meaning: "Pipe radius",
                unit: "m",
                typical_values: "10⁻³ to 10⁻¹ m"
              },
              {
                symbol: "L",
                meaning: "Pipe length",
                unit: "m",
                typical_values: "0.1 to 10 m"
              }
            ],
            derivedFrom: "newtons-viscosity",
            applications: [],
            specialCases: ["Q ∝ r⁴ (halving radius → 16× less flow)", "Used in blood flow analysis"],
            dimensionalCheck: "[Q] = [P][r⁴]/([η][L]) = m³/s",
          },
          {
            id: "shear-stress",
            name: "Shear stress",
            category: "derived",
            formula: "\\tau = \\eta \\frac{dv}{dx}",
            latex: "\\tau = \\eta \\frac{dv}{dx}",
            description: "Force per unit area",
            variables: [],
            derivedFrom: "newtons-viscosity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[η] = [F]/([A][dv/dx]) = Pa·s",
            neet_frequency: "medium",
          },
          {
            id: "viscosity-formula",
            name: "Viscosity formula",
            category: "derived",
            formula: "\\eta = \\frac{F}{A(dv/dx)}",
            latex: "\\eta = \\frac{F}{A(dv/dx)}",
            description: "Definition",
            variables: [],
            derivedFrom: "newtons-viscosity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[η] = [F]/([A][dv/dx]) = Pa·s",
            neet_frequency: "high",
          },
          {
            id: "terminal-velocity-2",
            name: "Terminal velocity",
            category: "derived",
            formula: "v_t = \\frac{2r^2(\\rho_s - \\rho_f)g}{9\\eta}",
            latex: "v_t = \\frac{2r^2(\\rho_s - \\rho_f)g}{9\\eta}",
            description: "Falling sphere",
            variables: [],
            derivedFrom: "stokes-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [η][r][v] = N",
            neet_frequency: "high",
          },
          {
            id: "rising-bubble",
            name: "Rising bubble",
            category: "derived",
            formula: "v_t = \\frac{2r^2(\\rho_f - \\rho_b)g}{9\\eta}",
            latex: "v_t = \\frac{2r^2(\\rho_f - \\rho_b)g}{9\\eta}",
            description: "ρ_b < ρ_f",
            variables: [],
            derivedFrom: "stokes-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[F] = [η][r][v] = N",
            neet_frequency: "medium",
          },
          {
            id: "proportionality",
            name: "Proportionality",
            category: "derived",
            formula: "v_t \\propto r^2",
            latex: "v_t \\propto r^2",
            description: "Larger sphere falls faster",
            variables: [],
            derivedFrom: "terminal-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v_t] = [r²][ρ][g]/[η] = m/s",
            neet_frequency: "high",
          },
          {
            id: "in-denser-fluid",
            name: "In denser fluid",
            category: "derived",
            formula: "v_t \\downarrow",
            latex: "v_t \\downarrow",
            description: "Buoyancy increases",
            variables: [],
            derivedFrom: "terminal-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v_t] = [r²][ρ][g]/[η] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "flow-rate-proportionality",
            name: "Flow rate proportionality",
            category: "derived",
            formula: "Q \\propto r^4",
            latex: "Q \\propto r^4",
            description: "Strong dependence on radius",
            variables: [],
            derivedFrom: "poiseuilles-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = [P][r⁴]/([η][L]) = m³/s",
            neet_frequency: "high",
          },
          {
            id: "fluid-resistance",
            name: "Fluid resistance",
            category: "derived",
            formula: "R = \\frac{8\\eta L}{\\pi r^4}",
            latex: "R = \\frac{8\\eta L}{\\pi r^4}",
            description: "Like electrical resistance",
            variables: [],
            derivedFrom: "poiseuilles-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = [P][r⁴]/([η][L]) = m³/s",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using Stokes law beyond its validity",
            correct: "Stokes' law valid only for slow, laminar flow (Re < 1). At high speeds, use drag ∝ v²",
            whyItHappens: "Not checking Reynolds number condition",
            neetExample: "NEET 2020: When is Stokes law applicable?"
          },
          {
            mistake: "Forgetting buoyancy in terminal velocity",
            correct: "Net downward force = weight - buoyancy = (ρ_s - ρ_f)Vg, not just weight",
            whyItHappens: "Ignoring fluid displaced by sphere",
            neetExample: "NEET 2019: Terminal velocity of steel ball in water vs glycerin"
          },
          {
            mistake: "Wrong power for r in Poiseuille equation",
            correct: "Q ∝ r⁴ (fourth power!). Halving r reduces flow 16 times.",
            whyItHappens: "Mixing up with other r dependencies",
            neetExample: "NEET 2021: Effect of artery radius on blood flow"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate terminal velocity",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Apply Stokes law",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Poiseuille flow rate",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Factors affecting viscosity",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Terminal velocity calculation",
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
            pattern: "Stokes' law problems",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          },
          {
            pattern: "Poiseuille equation (Q ∝ r⁴)",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Viscosity",
            analogy: "Friction between cards in deck",
            mapping: "Sliding one card over others meets resistance - like fluid layers sliding past each other"
          },
          {
            concept: "Terminal velocity",
            analogy: "Skydiver reaching constant speed",
            mapping: "Initially accelerates, then air drag balances weight and speed becomes constant"
          }
        ],
        questions: [],
      },
      {
        id: "surface-tension",
        name: "Surface Tension and Capillarity",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Surface tension (T) is force per unit length on liquid surface. Causes liquids to minimize surface area. T = F/L = Surface energy/Area. Capillary rise: h = 2T cos θ/(ρgr). Meniscus concave for wetting liquids (water in glass), convex for non-wetting (mercury in glass). Pressure inside drop: excess P = 2T/R.",
          realWorldAnalogy: "Water beads up on a waxed car because surface tension makes drops spherical (minimum surface area). Insects walk on water because surface tension acts like a stretched membrane.",
          keyPoints: [
            "Surface tension: T = F/L (force per unit length)",
            "SI unit: N/m or J/m²",
            "Surface energy = T × surface area",
            "Excess pressure: 2T/R (drop), 4T/R (bubble)",
            "Capillary rise: h = 2T cos θ/(ρgr)",
            "Angle of contact: θ < 90° (wetting), θ > 90° (non-wetting)"
          ],
          prerequisites: ["pressure-pascals-law"]
        },
        formulas: [
          {
            id: "surface-tension-formula",
            name: "Surface Tension",
            category: "base",
            formula: "T = F/L",
            latex: "T = \\frac{F}{L}",
            description: "Force per unit length on liquid surface",
            variables: [
              {
                symbol: "T",
                meaning: "Surface tension",
                unit: "N/m",
                typical_values: "0.02-0.07 N/m"
              },
              {
                symbol: "F",
                meaning: "Force along surface",
                unit: "N",
                typical_values: "10⁻⁵ to 10⁻² N"
              },
              {
                symbol: "L",
                meaning: "Length of surface",
                unit: "m",
                typical_values: "cm to m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["T decreases with temperature", "Soap reduces T (surfactant effect)"],
            dimensionalCheck: "[T] = [F]/[L] = N/m = J/m²",
          },
          {
            id: "excess-pressure-drop",
            name: "Excess Pressure in Drop/Bubble",
            category: "derived",
            formula: "ΔP = 2T/R (drop), 4T/R (bubble)",
            latex: "\\Delta P = \\frac{2T}{R} \\text{ (drop)}, \\quad \\Delta P = \\frac{4T}{R} \\text{ (bubble)}",
            description: "Pressure inside drop/bubble exceeds outside pressure",
            variables: [
              {
                symbol: "ΔP",
                meaning: "Excess pressure inside",
                unit: "Pa",
                typical_values: "10-1000 Pa"
              },
              {
                symbol: "R",
                meaning: "Radius of drop/bubble",
                unit: "m",
                typical_values: "10⁻³ to 10⁻² m"
              }
            ],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: ["Smaller drop/bubble = higher internal pressure", "Why small bubbles merge into larger ones"],
            dimensionalCheck: "[ΔP] = [T]/[R] = Pa",
          },
          {
            id: "capillary-rise",
            name: "Capillary Rise",
            category: "derived",
            formula: "h = 2T cos θ/(ρgr)",
            latex: "h = \\frac{2T\\cos\\theta}{\\rho gr}",
            description: "Height of liquid rise/depression in capillary tube",
            variables: [
              {
                symbol: "h",
                meaning: "Capillary rise",
                unit: "m",
                typical_values: "1-10 cm"
              },
              {
                symbol: "θ",
                meaning: "Contact angle",
                unit: "degrees",
                typical_values: "0° (water-glass) to 140° (mercury-glass)"
              },
              {
                symbol: "r",
                meaning: "Tube radius",
                unit: "m",
                typical_values: "0.1-1 mm"
              }
            ],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: ["h > 0 for θ < 90° (wetting), h < 0 for θ > 90° (non-wetting)", "h ∝ 1/r: narrower tube = higher rise"],
            dimensionalCheck: "[h] = [T]/([ρ][g][r]) = m",
          },
          {
            id: "work-to-form-drop",
            name: "Work to Form Drop",
            category: "derived",
            formula: "W = T × ΔA = 4πR²T (single drop)",
            latex: "W = T \\times 4\\pi R^2",
            description: "Work done to create surface of a drop",
            variables: [
              {
                symbol: "W",
                meaning: "Work done",
                unit: "J",
                typical_values: "10⁻⁸ to 10⁻⁵ J"
              },
              {
                symbol: "A",
                meaning: "Surface area",
                unit: "m²",
                typical_values: "4πR²"
              }
            ],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: ["Splitting releases energy if area decreases", "Surface energy = work stored"],
            dimensionalCheck: "[W] = [T][A] = J",
          },
          {
            id: "force-on-wire",
            name: "Force on wire",
            category: "derived",
            formula: "F = 2TL",
            latex: "F = 2TL",
            description: "Wire pulling soap film (2 surfaces)",
            variables: [],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = [F]/[L] = N/m = J/m²",
            neet_frequency: "high",
          },
          {
            id: "surface-energy",
            name: "Surface energy",
            category: "derived",
            formula: "E = T \\times A",
            latex: "E = T \\times A",
            description: "Energy = T × area",
            variables: [],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = [F]/[L] = N/m = J/m²",
            neet_frequency: "high",
          },
          {
            id: "work-to-increase-area",
            name: "Work to increase area",
            category: "derived",
            formula: "W = T \\Delta A",
            latex: "W = T \\Delta A",
            description: "Creating new surface",
            variables: [],
            derivedFrom: "surface-tension-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = [F]/[L] = N/m = J/m²",
            neet_frequency: "high",
          },
          {
            id: "liquid-drop-in-air",
            name: "Liquid drop in air",
            category: "derived",
            formula: "\\Delta P = \\frac{2T}{R}",
            latex: "\\Delta P = \\frac{2T}{R}",
            description: "One surface",
            variables: [],
            derivedFrom: "excess-pressure-drop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΔP] = [T]/[R] = Pa",
            neet_frequency: "high",
          },
          {
            id: "soap-bubble-in-air",
            name: "Soap bubble in air",
            category: "derived",
            formula: "\\Delta P = \\frac{4T}{R}",
            latex: "\\Delta P = \\frac{4T}{R}",
            description: "Two surfaces (inside + outside)",
            variables: [],
            derivedFrom: "excess-pressure-drop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΔP] = [T]/[R] = Pa",
            neet_frequency: "high",
          },
          {
            id: "air-bubble-in-liquid",
            name: "Air bubble in liquid",
            category: "derived",
            formula: "\\Delta P = \\frac{2T}{R}",
            latex: "\\Delta P = \\frac{2T}{R}",
            description: "One surface",
            variables: [],
            derivedFrom: "excess-pressure-drop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ΔP] = [T]/[R] = Pa",
            neet_frequency: "medium",
          },
          {
            id: "water-in-glass-0",
            name: "Water in glass (θ ≈ 0°)",
            category: "derived",
            formula: "h = \\frac{2T}{\\rho gr}",
            latex: "h = \\frac{2T}{\\rho gr}",
            description: "Rises, concave meniscus",
            variables: [],
            derivedFrom: "capillary-rise",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[h] = [T]/([ρ][g][r]) = m",
            neet_frequency: "high",
          },
          {
            id: "mercury-in-glass-140",
            name: "Mercury in glass (θ ≈ 140°)",
            category: "derived",
            formula: "h = \\frac{2T\\cos 140°}{\\rho gr} < 0",
            latex: "h = \\frac{2T\\cos 140°}{\\rho gr} < 0",
            description: "Depresses, convex meniscus",
            variables: [],
            derivedFrom: "capillary-rise",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[h] = [T]/([ρ][g][r]) = m",
            neet_frequency: "medium",
          },
          {
            id: "proportionality",
            name: "Proportionality",
            category: "derived",
            formula: "h \\propto \\frac{1}{r}",
            latex: "h \\propto \\frac{1}{r}",
            description: "Narrower tube = higher rise",
            variables: [],
            derivedFrom: "capillary-rise",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[h] = [T]/([ρ][g][r]) = m",
            neet_frequency: "high",
          },
          {
            id: "splitting-drop",
            name: "Splitting drop",
            category: "derived",
            formula: "W = 4\\pi T(nR_2^2 - R_1^2)",
            latex: "W = 4\\pi T(nR_2^2 - R_1^2)",
            description: "One → many drops",
            variables: [],
            derivedFrom: "work-to-form-drop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [T][A] = J",
            neet_frequency: "medium",
          },
          {
            id: "coalescing-drops",
            name: "Coalescing drops",
            category: "derived",
            formula: "W = 4\\pi T(R_3^2 - R_1^2 - R_2^2)",
            latex: "W = 4\\pi T(R_3^2 - R_1^2 - R_2^2)",
            description: "Energy released (negative W)",
            variables: [],
            derivedFrom: "work-to-form-drop",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[W] = [T][A] = J",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using 2T/R for soap bubble",
            correct: "Soap bubble has 2 surfaces (inner and outer), so ΔP = 4T/R, not 2T/R",
            whyItHappens: "Not counting both surfaces of bubble",
            neetExample: "NEET 2020: Pressure inside soap bubble"
          },
          {
            mistake: "Forgetting cos θ in capillary formula",
            correct: "h = 2T cos θ/(ρgr). For non-wetting liquids (θ > 90°), cos θ is negative → depression",
            whyItHappens: "Assuming water-glass case for all liquids",
            neetExample: "NEET 2019: Mercury in glass capillary"
          },
          {
            mistake: "Wrong direction of surface tension force",
            correct: "Surface tension acts tangent to surface, along the surface, not perpendicular",
            whyItHappens: "Confusing with pressure (which acts perpendicular)",
            neetExample: "NEET 2021: Direction of surface tension on wire frame"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Excess pressure in drop/bubble",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Capillary rise calculation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Work to form drops",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Meniscus shape and contact angle",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Excess pressure in bubble/drop",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2021,
              2023
            ]
          },
          {
            pattern: "Capillary rise problems",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Surface energy and work",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Surface tension",
            analogy: "Stretched rubber membrane",
            mapping: "Liquid surface behaves like elastic membrane under tension - resists stretching"
          },
          {
            concept: "Capillary rise",
            analogy: "Paper towel absorbing water",
            mapping: "Water climbs up the narrow fibers due to surface tension, like climbing up capillary tubes"
          }
        ],
        questions: [],
      }
    ];