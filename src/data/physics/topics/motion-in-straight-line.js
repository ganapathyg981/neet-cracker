// Motion in a Straight Line - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 3

export const motionInStraightLineTopics = [
      {
        id: "distance-displacement",
        name: "Distance, Displacement and Position",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "Position defines location relative to origin. Distance is total path length (scalar, always positive). Displacement is shortest path from initial to final position (vector, can be zero/negative). Distance ≥ |Displacement|. For straight line motion without direction change, distance = |displacement|.",
          realWorldAnalogy: "Walking around a park and returning to start: distance covered is large but displacement is zero. GPS shows displacement (straight line), odometer shows distance.",
          keyPoints: [
            "Position is measured from origin with sign convention",
            "Distance = total path length (scalar, always ≥ 0)",
            "Displacement = final position - initial position (vector)",
            "Distance ≥ |Displacement|, equality only for unidirectional motion",
            "For round trip: distance ≠ 0, but displacement = 0",
            "SI unit: metre (m)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "displacement-formula",
            name: "Displacement",
            category: "base",
            formula: "Δx = x₂ - x₁",
            latex: "\\Delta x = x_2 - x_1",
            description: "Change in position from initial to final point",
            variables: [
              {
                symbol: "Δx",
                meaning: "Displacement",
                unit: "m",
                typical_values: "Can be +ve, -ve, or 0"
              },
              {
                symbol: "x₁",
                meaning: "Initial position",
                unit: "m",
                typical_values: "Depends on choice of origin"
              },
              {
                symbol: "x₂",
                meaning: "Final position",
                unit: "m",
                typical_values: "Depends on motion"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Displacement can be negative (motion in -ve direction)", "For circular path returning to start: Δx = 0"],
            dimensionalCheck: "[Δx] = L = m",
          },
          {
            id: "one-way-motion",
            name: "One-way motion",
            category: "derived",
            formula: "|\\Delta x| = \\text{Distance}",
            latex: "|\\Delta x| = \\text{Distance}",
            description: "No direction change",
            variables: [],
            derivedFrom: "displacement-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δx] = L = m",
            neet_frequency: "medium",
          },
          {
            id: "round-trip",
            name: "Round trip",
            category: "derived",
            formula: "\\Delta x = 0, \\text{ Distance} \\neq 0",
            latex: "\\Delta x = 0, \\text{ Distance} \\neq 0",
            description: "Return to start",
            variables: [],
            derivedFrom: "displacement-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δx] = L = m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing distance with displacement magnitude",
            correct: "Distance ≥ |Displacement|. They are equal ONLY for unidirectional motion.",
            whyItHappens: "Both seem to measure \"how far\" something moved",
            neetExample: "NEET 2019: A particle moves 3m east then 4m north. Find distance and displacement."
          },
          {
            mistake: "Thinking displacement cannot be negative",
            correct: "Displacement is a vector. It can be negative, positive, or zero depending on direction.",
            whyItHappens: "Confusing with distance which is always positive",
            neetExample: "NEET 2020: Displacement when moving from x=5m to x=2m"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate distance and displacement for given path",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Compare distance and displacement for various motions",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find position from displacement",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Distance vs displacement for multi-step motion",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Displacement for circular/curved path",
            frequency: "medium",
            yearAsked: [2019, 2020]
          }
        ],
        analogies: [
          {
            concept: "Distance vs Displacement",
            analogy: "Taxi fare vs crow flight distance",
            mapping: "Taxi fare based on odometer (distance), helicopter would fly straight (displacement)"
          }
        ],
        questions: [],
      },
      {
        id: "speed-velocity",
        name: "Speed and Velocity",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "Speed is rate of change of distance (scalar). Velocity is rate of change of displacement (vector). Average speed = total distance/total time. Average velocity = displacement/time. Instantaneous values are limits as Δt → 0. Average speed ≥ |Average velocity|.",
          realWorldAnalogy: "Car speedometer shows instantaneous speed. Average speed for a trip = total km/total hours. If you return home, average velocity is zero but average speed isn't.",
          keyPoints: [
            "Average speed = Total distance / Total time",
            "Average velocity = Displacement / Time",
            "Instantaneous velocity = dx/dt (derivative of position)",
            "Speed is magnitude of velocity for instantaneous values",
            "Average speed ≥ |Average velocity|",
            "SI unit: m/s (or km/h)"
          ],
          prerequisites: ["distance-displacement"]
        },
        formulas: [
          {
            id: "average-speed",
            name: "Average Speed",
            category: "base",
            formula: "v_avg = Total distance / Total time",
            latex: "v_{avg} = \\frac{\\text{Total distance}}{\\text{Total time}} = \\frac{s}{t}",
            description: "Rate of covering distance over a journey",
            variables: [
              {
                symbol: "v_avg",
                meaning: "Average speed",
                unit: "m/s",
                typical_values: "1-30 m/s for everyday motion"
              },
              {
                symbol: "s",
                meaning: "Total distance",
                unit: "m",
                typical_values: "Always positive"
              },
              {
                symbol: "t",
                meaning: "Total time",
                unit: "s",
                typical_values: "Always positive"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For equal distances: use harmonic mean", "For equal times: use arithmetic mean"],
            dimensionalCheck: "[v] = L/T = m/s",
          },
          {
            id: "average-velocity",
            name: "Average Velocity",
            category: "base",
            formula: "v̄ = Δx/Δt",
            latex: "\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_2 - x_1}{t_2 - t_1}",
            description: "Rate of change of displacement",
            variables: [
              {
                symbol: "v̄",
                meaning: "Average velocity",
                unit: "m/s",
                typical_values: "Can be +ve, -ve, or 0"
              },
              {
                symbol: "Δx",
                meaning: "Displacement",
                unit: "m",
                typical_values: "Net change in position"
              },
              {
                symbol: "Δt",
                meaning: "Time interval",
                unit: "s",
                typical_values: "Always positive"
              }
            ],
            derivedFrom: "displacement-formula",
            applications: [],
            specialCases: ["For round trip: average velocity = 0", "Can be negative (motion in -ve direction)"],
            dimensionalCheck: "[v] = L/T = m/s",
          },
          {
            id: "instantaneous-velocity",
            name: "Instantaneous Velocity",
            category: "derived",
            formula: "v = lim(Δt→0) Δx/Δt = dx/dt",
            latex: "v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}",
            description: "Velocity at a specific instant",
            variables: [
              {
                symbol: "v",
                meaning: "Instantaneous velocity",
                unit: "m/s",
                typical_values: "Value at specific time"
              },
              {
                symbol: "dx/dt",
                meaning: "Derivative of position",
                unit: "m/s",
                typical_values: "Slope of x-t curve"
              }
            ],
            derivedFrom: "average-velocity",
            applications: [],
            specialCases: ["Magnitude of instantaneous velocity = instantaneous speed", "Slope of tangent to x-t curve"],
            dimensionalCheck: "[v] = L/T = m/s",
          },
          {
            id: "two-equal-distances-at-different-speeds",
            name: "Two equal distances at different speeds",
            category: "derived",
            formula: "v_{avg} = \\frac{2v_1v_2}{v_1 + v_2}",
            latex: "v_{avg} = \\frac{2v_1v_2}{v_1 + v_2}",
            description: "Harmonic mean",
            variables: [],
            derivedFrom: "average-speed",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = L/T = m/s",
            neet_frequency: "high",
          },
          {
            id: "two-equal-times-at-different-speeds",
            name: "Two equal times at different speeds",
            category: "derived",
            formula: "v_{avg} = \\frac{v_1 + v_2}{2}",
            latex: "v_{avg} = \\frac{v_1 + v_2}{2}",
            description: "Arithmetic mean",
            variables: [],
            derivedFrom: "average-speed",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = L/T = m/s",
            neet_frequency: "high",
          },
          {
            id: "from-x-t-graph",
            name: "From x-t graph",
            category: "derived",
            formula: "\\bar{v} = \\text{slope of chord}",
            latex: "\\bar{v} = \\text{slope of chord}",
            description: "Secant line on position-time graph",
            variables: [],
            derivedFrom: "average-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = L/T = m/s",
            neet_frequency: "high",
          },
          {
            id: "from-x-t-graph-2",
            name: "From x-t graph",
            category: "derived",
            formula: "v = \\text{slope of tangent}",
            latex: "v = \\text{slope of tangent}",
            description: "Tangent at a point",
            variables: [],
            derivedFrom: "instantaneous-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = L/T = m/s",
            neet_frequency: "high",
          },
          {
            id: "given-x-ft",
            name: "Given x = f(t)",
            category: "derived",
            formula: "v = \\frac{d}{dt}[f(t)]",
            latex: "v = \\frac{d}{dt}[f(t)]",
            description: "Differentiate position function",
            variables: [],
            derivedFrom: "instantaneous-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = L/T = m/s",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using arithmetic mean for average speed of equal distances",
            correct: "For equal distances at different speeds, use HARMONIC mean: 2v₁v₂/(v₁+v₂)",
            whyItHappens: "Defaulting to simple average",
            neetExample: "NEET 2021: A car travels half distance at 40 km/h and half at 60 km/h. Find average speed."
          },
          {
            mistake: "Confusing average speed with average velocity magnitude",
            correct: "Average speed = distance/time, |Average velocity| = |displacement|/time. These are NOT equal.",
            whyItHappens: "Speed is magnitude of velocity only for instantaneous values",
            neetExample: "NEET 2020: Compare average speed and average velocity for round trip"
          },
          {
            mistake: "Using arithmetic mean for unequal distances",
            correct: "For distances d₁ at v₁ and d₂ at v₂: v_avg = (d₁+d₂)/(d₁/v₁ + d₂/v₂)",
            whyItHappens: "Not properly adding times",
            neetExample: "NEET 2019: Average speed for two-part journey"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Average speed for multi-part journey",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Instantaneous velocity from position function",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Velocity from x-t graph",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Average speed for equal distances (harmonic mean)",
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
            pattern: "Velocity from x-t graph",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Average speed vs average velocity",
            frequency: "medium",
            yearAsked: [2018, 2021]
          }
        ],
        analogies: [
          {
            concept: "Average speed formula selection",
            analogy: "Time spent matters",
            mapping: "Equal distances: you spend more time at lower speed (harmonic). Equal times: straightforward average (arithmetic)."
          }
        ],
        questions: [],
      },
      {
        id: "acceleration-uam",
        name: "Acceleration and Kinematic Equations",
        weightage: 1.5,
        difficulty: "medium",
        theory: {
          summary: "Acceleration is rate of change of velocity (a = dv/dt). For uniform acceleration, kinematic equations apply. The three equations connect u, v, a, s, t without requiring calculus. Graphical analysis: v-t graph slope gives acceleration, area gives displacement. Acceleration can be positive (speeding up) or negative (slowing down).",
          realWorldAnalogy: "A car accelerating from stop sign: speedometer reading increases at constant rate for uniform acceleration. Braking is negative acceleration (deceleration).",
          keyPoints: [
            "a = dv/dt = d²x/dt² (first and second derivative)",
            "For constant a: v = u + at",
            "For constant a: s = ut + ½at²",
            "For constant a: v² = u² + 2as",
            "Area under v-t graph = displacement",
            "Slope of v-t graph = acceleration"
          ],
          prerequisites: ["speed-velocity"]
        },
        formulas: [
          {
            id: "acceleration-definition",
            name: "Acceleration",
            category: "base",
            formula: "a = dv/dt = Δv/Δt",
            latex: "a = \\frac{dv}{dt} = \\frac{v - u}{t}",
            description: "Rate of change of velocity",
            variables: [
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "g ≈ 10 m/s² for gravity"
              },
              {
                symbol: "v",
                meaning: "Final velocity",
                unit: "m/s",
                typical_values: "After time t"
              },
              {
                symbol: "u",
                meaning: "Initial velocity",
                unit: "m/s",
                typical_values: "At t = 0"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Positive a: velocity increasing (not necessarily speeding up)", "Negative a: velocity decreasing (deceleration when slowing)", "a = 0: uniform velocity"],
            dimensionalCheck: "[a] = L/T² = m/s²",
          },
          {
            id: "first-equation",
            name: "First Equation of Motion",
            category: "base",
            formula: "v = u + at",
            latex: "v = u + at",
            description: "Velocity after time t under constant acceleration",
            variables: [
              {
                symbol: "v",
                meaning: "Final velocity",
                unit: "m/s",
                typical_values: "Can be +ve or -ve"
              },
              {
                symbol: "u",
                meaning: "Initial velocity",
                unit: "m/s",
                typical_values: "Given or 0"
              },
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "Constant value"
              },
              {
                symbol: "t",
                meaning: "Time",
                unit: "s",
                typical_values: "Always ≥ 0"
              }
            ],
            derivedFrom: "acceleration-definition",
            applications: [],
            specialCases: ["If u = 0: v = at", "If v = 0: t = -u/a (time to stop)", "Does not involve displacement s"],
            dimensionalCheck: "[v] = [u] + [a][t] = m/s",
          },
          {
            id: "second-equation",
            name: "Second Equation of Motion",
            category: "derived",
            formula: "s = ut + ½at²",
            latex: "s = ut + \\frac{1}{2}at^2",
            description: "Displacement in time t under constant acceleration",
            variables: [
              {
                symbol: "s",
                meaning: "Displacement",
                unit: "m",
                typical_values: "Can be +ve or -ve"
              },
              {
                symbol: "u",
                meaning: "Initial velocity",
                unit: "m/s",
                typical_values: "Given"
              },
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "Constant"
              },
              {
                symbol: "t",
                meaning: "Time",
                unit: "s",
                typical_values: "≥ 0"
              }
            ],
            derivedFrom: "first-equation",
            applications: [],
            specialCases: ["If u = 0: s = ½at² (parabolic motion)", "If a = 0: s = ut (uniform motion)", "Does not involve final velocity v"],
            dimensionalCheck: "[s] = [u][t] + [a][t²] = m",
          },
          {
            id: "third-equation",
            name: "Third Equation of Motion",
            category: "derived",
            formula: "v² = u² + 2as",
            latex: "v^2 = u^2 + 2as",
            description: "Relates velocities and displacement without time",
            variables: [
              {
                symbol: "v",
                meaning: "Final velocity",
                unit: "m/s",
                typical_values: "Speed at end"
              },
              {
                symbol: "u",
                meaning: "Initial velocity",
                unit: "m/s",
                typical_values: "Speed at start"
              },
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "Constant"
              },
              {
                symbol: "s",
                meaning: "Displacement",
                unit: "m",
                typical_values: "Net displacement"
              }
            ],
            derivedFrom: "first-equation",
            applications: [],
            specialCases: ["Time-independent equation", "Useful when time is not given/needed", "Stopping distance ∝ u² (doubling speed → 4× stopping distance)"],
            dimensionalCheck: "[v²] = [u²] + [a][s] = m²/s²",
          },
          {
            id: "nth-second-displacement",
            name: "Displacement in nth Second",
            category: "derived",
            formula: "sₙ = u + a(n - ½)",
            latex: "s_n = u + a\\left(n - \\frac{1}{2}\\right)",
            description: "Displacement during the nth second of motion",
            variables: [
              {
                symbol: "sₙ",
                meaning: "Displacement in nth second",
                unit: "m",
                typical_values: "For integer n"
              },
              {
                symbol: "n",
                meaning: "nth second",
                unit: "s",
                typical_values: "1, 2, 3..."
              }
            ],
            derivedFrom: "second-equation",
            applications: [],
            specialCases: ["From rest: s₁:s₂:s₃... = 1:3:5:7... (odd numbers)", "Total s in n seconds: s₁:s₂:... = 1:4:9... (perfect squares)"],
            dimensionalCheck: "[sₙ] = m",
          },
          {
            id: "from-v-t-graph",
            name: "From v-t graph",
            category: "derived",
            formula: "a = \\text{slope of v-t graph}",
            latex: "a = \\text{slope of v-t graph}",
            description: "Tangent slope",
            variables: [],
            derivedFrom: "acceleration-definition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = L/T² = m/s²",
            neet_frequency: "high",
          },
          {
            id: "time-to-stop",
            name: "Time to stop",
            category: "derived",
            formula: "t = \\frac{v - u}{a} = \\frac{-u}{a}",
            latex: "t = \\frac{v - u}{a} = \\frac{-u}{a}",
            description: "When v = 0",
            variables: [],
            derivedFrom: "first-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [u] + [a][t] = m/s",
            neet_frequency: "high",
          },
          {
            id: "velocity-at-time-t",
            name: "Velocity at time t",
            category: "derived",
            formula: "v = u + at",
            latex: "v = u + at",
            description: "Direct substitution",
            variables: [],
            derivedFrom: "first-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [u] + [a][t] = m/s",
            neet_frequency: "high",
          },
          {
            id: "from-rest",
            name: "From rest",
            category: "derived",
            formula: "s = \\frac{1}{2}at^2",
            latex: "s = \\frac{1}{2}at^2",
            description: "When u = 0",
            variables: [],
            derivedFrom: "second-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[s] = [u][t] + [a][t²] = m",
            neet_frequency: "high",
          },
          {
            id: "displacement-in-nth-second",
            name: "Displacement in nth second",
            category: "derived",
            formula: "s_n = u + a(n - \\frac{1}{2})",
            latex: "s_n = u + a(n - \\frac{1}{2})",
            description: "For integer n",
            variables: [],
            derivedFrom: "second-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[s] = [u][t] + [a][t²] = m",
            neet_frequency: "high",
          },
          {
            id: "stopping-distance",
            name: "Stopping distance",
            category: "derived",
            formula: "s = \\frac{-u^2}{2a} = \\frac{u^2}{2|a|}",
            latex: "s = \\frac{-u^2}{2a} = \\frac{u^2}{2|a|}",
            description: "When v = 0",
            variables: [],
            derivedFrom: "third-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v²] = [u²] + [a][s] = m²/s²",
            neet_frequency: "high",
          },
          {
            id: "from-rest-2",
            name: "From rest",
            category: "derived",
            formula: "v^2 = 2as",
            latex: "v^2 = 2as",
            description: "When u = 0",
            variables: [],
            derivedFrom: "third-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v²] = [u²] + [a][s] = m²/s²",
            neet_frequency: "high",
          },
          {
            id: "from-rest-3",
            name: "From rest",
            category: "derived",
            formula: "s_n = a\\left(n - \\frac{1}{2}\\right)",
            latex: "s_n = a\\left(n - \\frac{1}{2}\\right)",
            description: "u = 0",
            variables: [],
            derivedFrom: "nth-second-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[sₙ] = m",
            neet_frequency: "high",
          },
          {
            id: "ratio-of-displacements",
            name: "Ratio of displacements",
            category: "derived",
            formula: "s_1 : s_2 : s_3 = 1 : 3 : 5",
            latex: "s_1 : s_2 : s_3 = 1 : 3 : 5",
            description: "From rest, successive seconds",
            variables: [],
            derivedFrom: "nth-second-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[sₙ] = m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using equations when acceleration is not constant",
            correct: "Kinematic equations v = u + at, s = ut + ½at², v² = u² + 2as are ONLY valid for constant acceleration.",
            whyItHappens: "Applying formulas blindly without checking conditions",
            neetExample: "NEET 2020: Particle with varying acceleration - use calculus, not kinematic equations"
          },
          {
            mistake: "Confusing displacement in nth second with total displacement",
            correct: "sₙ is displacement DURING nth second. Total displacement after n seconds = ut + ½at².",
            whyItHappens: "Misunderstanding \"in nth second\" vs \"in n seconds\"",
            neetExample: "NEET 2021: Find displacement in 3rd second vs displacement in 3 seconds"
          },
          {
            mistake: "Forgetting sign conventions",
            correct: "Choose positive direction. If motion reverses, displacement can be negative. Deceleration is negative a.",
            whyItHappens: "Not setting up coordinate system properly",
            neetExample: "NEET 2019: Ball thrown up with initial velocity 20 m/s, find position after 3s"
          },
          {
            mistake: "Using distance formula for displacement in nth second",
            correct: "sₙ = u + a(n-½) gives displacement, not distance. For distance when direction changes, split the motion.",
            whyItHappens: "Not recognizing that direction might change within the nth second",
            neetExample: "NEET 2022: Distance covered in 3rd second by ball thrown up"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find missing variable using kinematic equations",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Displacement in nth second problems",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Interpret v-t and a-t graphs",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Two-body problems (catch-up, collision)",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Displacement in nth second (ratio 1:3:5:7...)",
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
            pattern: "Stopping distance problems",
            frequency: "high",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "v-t graph analysis",
            frequency: "high",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Motion with direction change",
            frequency: "medium",
            yearAsked: [2019, 2020]
          }
        ],
        analogies: [
          {
            concept: "Choosing the right equation",
            analogy: "Each equation missing one variable",
            mapping: "v = u + at (no s), s = ut + ½at² (no v), v² = u² + 2as (no t). Pick equation based on what's given."
          },
          {
            concept: "Ratio 1:3:5:7",
            analogy: "Odd number pattern",
            mapping: "Like filling rows of seats: 1st row gets 1, 2nd gets 3, 3rd gets 5... Total after n rows follows n²."
          }
        ],
        questions: [],
      },
      {
        id: "free-fall-gravity",
        name: "Free Fall and Motion Under Gravity",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Free fall is motion under gravity alone (a = g ≈ 9.8 m/s² or 10 m/s²). All kinematic equations apply with a = ±g. For upward throw: a = -g. Time of ascent = time of descent (for same level). Maximum height = u²/2g. At maximum height, v = 0 but a = g (still acting).",
          realWorldAnalogy: "A ball thrown up slows down going up (gravity pulls down), stops momentarily at top, then speeds up coming down. Galileo proved all objects fall at same rate in vacuum.",
          keyPoints: [
            "g = 9.8 m/s² ≈ 10 m/s² (take as given in problem)",
            "Dropped object: u = 0, a = g (downward +ve)",
            "Thrown up: a = -g (taking upward as +ve)",
            "At maximum height: v = 0 (but a ≠ 0)",
            "Time of flight for vertical throw: T = 2u/g",
            "Maximum height: H = u²/2g"
          ],
          prerequisites: ["acceleration-uam"]
        },
        formulas: [
          {
            id: "free-fall-equations",
            name: "Free Fall Equations",
            category: "derived",
            formula: "v = gt, h = ½gt², v² = 2gh",
            latex: "v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v^2 = 2gh",
            description: "Kinematic equations for object dropped from rest",
            variables: [
              {
                symbol: "g",
                meaning: "Acceleration due to gravity",
                unit: "m/s²",
                typical_values: "9.8 or 10"
              },
              {
                symbol: "h",
                meaning: "Height fallen",
                unit: "m",
                typical_values: "Depends on drop height"
              },
              {
                symbol: "v",
                meaning: "Velocity after falling",
                unit: "m/s",
                typical_values: "Increases with h"
              }
            ],
            derivedFrom: "second-equation",
            applications: [],
            specialCases: ["Time to fall ∝ √h (not h)", "Final velocity ∝ √h", "Independent of mass"],
            dimensionalCheck: "[v] = [g][t] = m/s",
          },
          {
            id: "vertical-throw-up",
            name: "Vertical Throw Upward",
            category: "derived",
            formula: "H = u²/2g, T = 2u/g",
            latex: "H_{max} = \\frac{u^2}{2g}, \\quad T = \\frac{2u}{g}",
            description: "Maximum height and time of flight for vertical projection",
            variables: [
              {
                symbol: "H",
                meaning: "Maximum height",
                unit: "m",
                typical_values: "Depends on u"
              },
              {
                symbol: "T",
                meaning: "Total time of flight",
                unit: "s",
                typical_values: "Time to return"
              },
              {
                symbol: "u",
                meaning: "Initial upward velocity",
                unit: "m/s",
                typical_values: "Given"
              }
            ],
            derivedFrom: "third-equation",
            applications: [],
            specialCases: ["At H_max: v = 0 but a = g (not zero)", "Time of ascent = Time of descent (for same level)", "Speed at any height is same going up and down"],
            dimensionalCheck: "[H] = [u²]/[g] = m",
          },
          {
            id: "relative-motion-free-fall",
            name: "Relative Motion in Free Fall",
            category: "derived",
            formula: "Relative acceleration = 0 for two freely falling bodies",
            latex: "a_{rel} = g - g = 0",
            description: "Two objects in free fall have zero relative acceleration",
            variables: [
              {
                symbol: "a_rel",
                meaning: "Relative acceleration",
                unit: "m/s²",
                typical_values: "0"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Separation between two free-falling objects ∝ time", "Relative velocity remains constant"],
            dimensionalCheck: "Dimensionless (0)",
          },
          {
            id: "time-to-fall-height-h",
            name: "Time to fall height h",
            category: "derived",
            formula: "t = \\sqrt{\\frac{2h}{g}}",
            latex: "t = \\sqrt{\\frac{2h}{g}}",
            description: "Dropping from rest",
            variables: [],
            derivedFrom: "free-fall-equations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [g][t] = m/s",
            neet_frequency: "high",
          },
          {
            id: "velocity-on-hitting-ground",
            name: "Velocity on hitting ground",
            category: "derived",
            formula: "v = \\sqrt{2gh}",
            latex: "v = \\sqrt{2gh}",
            description: "Independent of mass",
            variables: [],
            derivedFrom: "free-fall-equations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [g][t] = m/s",
            neet_frequency: "high",
          },
          {
            id: "time-to-reach-max-height",
            name: "Time to reach max height",
            category: "derived",
            formula: "t_{up} = \\frac{u}{g}",
            latex: "t_{up} = \\frac{u}{g}",
            description: "Half of total time",
            variables: [],
            derivedFrom: "vertical-throw-up",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[H] = [u²]/[g] = m",
            neet_frequency: "high",
          },
          {
            id: "velocity-at-height-h",
            name: "Velocity at height h",
            category: "derived",
            formula: "v = \\sqrt{u^2 - 2gh}",
            latex: "v = \\sqrt{u^2 - 2gh}",
            description: "During ascent or descent",
            variables: [],
            derivedFrom: "vertical-throw-up",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[H] = [u²]/[g] = m",
            neet_frequency: "high",
          },
          {
            id: "separation-increases-uniformly",
            name: "Separation increases uniformly",
            category: "derived",
            formula: "\\Delta s = \\Delta u \\cdot t",
            latex: "\\Delta s = \\Delta u \\cdot t",
            description: "Separation ∝ t",
            variables: [],
            derivedFrom: "relative-motion-free-fall",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless (0)",
            neet_frequency: "medium",
          },
          {
            id: "objects-dropped-at-interval",
            name: "Objects dropped at interval",
            category: "derived",
            formula: "s_{rel} = v_{rel} \\cdot t",
            latex: "s_{rel} = v_{rel} \\cdot t",
            description: "Relative velocity stays constant",
            variables: [],
            derivedFrom: "relative-motion-free-fall",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless (0)",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking acceleration is zero at maximum height",
            correct: "At maximum height, velocity v = 0 but acceleration a = g ≠ 0. Gravity always acts.",
            whyItHappens: "Confusing v = 0 with a = 0",
            neetExample: "NEET 2020: What is acceleration of ball at highest point of vertical throw?"
          },
          {
            mistake: "Wrong sign convention for motion",
            correct: "Choose one direction as positive consistently. If upward is +ve, then a = -g for thrown ball.",
            whyItHappens: "Not being consistent with signs",
            neetExample: "NEET 2019: Ball thrown up with 20 m/s, find height after 3 seconds"
          },
          {
            mistake: "Forgetting that time of flight formula is for returning to SAME level",
            correct: "T = 2u/g is for returning to initial height. For different landing height, solve quadratic.",
            whyItHappens: "Using formula without checking conditions",
            neetExample: "NEET 2021: Ball thrown from building top, find time to reach ground"
          },
          {
            mistake: "Confusing velocity and speed at a given height",
            correct: "Velocity can be +ve (up) or -ve (down), but speed is magnitude. At same height, speed is same.",
            whyItHappens: "Vector vs scalar confusion",
            neetExample: "NEET 2022: Compare velocities of ball at height h going up vs coming down"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Maximum height and time of flight",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Object dropped/thrown from building",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Two objects released at interval",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Acceleration at various points",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Maximum height and time of flight",
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
            pattern: "Velocity at given height",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Objects dropped at time intervals",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          },
          {
            pattern: "Motion from height (building/cliff)",
            frequency: "medium",
            yearAsked: [2019, 2022]
          }
        ],
        analogies: [
          {
            concept: "Acceleration at top",
            analogy: "Ball on string swung in vertical circle",
            mapping: "Even when ball is momentarily at rest at top, tension (like gravity) still pulls it down"
          },
          {
            concept: "Equal speeds at same height",
            analogy: "Roller coaster",
            mapping: "Same speed at same height whether going up or down (ignoring friction)"
          }
        ],
        questions: [],
      }
    ];