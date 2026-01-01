// Oscillations - 3% weightage (Tier 2)
// NCERT Class 11, Chapter 14

export const oscillationsTopics = [
      {
        id: "simple-harmonic-motion",
        name: "Simple Harmonic Motion (SHM)",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Simple Harmonic Motion (SHM) is periodic motion where restoring force is proportional to displacement: F = -kx. The motion is sinusoidal with displacement x = A sin(ωt + φ). Key parameters are amplitude (A), angular frequency (ω), time period (T), and phase (φ).",
          realWorldAnalogy: "A child on a swing - the further from center, the stronger the pull back. The swing naturally oscillates at its own rhythm (natural frequency).",
          keyPoints: [
            "F = -kx (restoring force proportional to displacement)",
            "a = -ω²x (acceleration proportional to displacement)",
            "x = A sin(ωt + φ) or x = A cos(ωt + φ)",
            "ω = 2πf = 2π/T (angular frequency)",
            "v_max = Aω at mean position, v = 0 at extremes",
            "a_max = Aω² at extremes, a = 0 at mean position"
          ],
          prerequisites: ["periodic-motion-basics"]
        },
        formulas: [
          {
            id: "displacement-shm",
            name: "Displacement in SHM",
            category: "base",
            formula: "x = A sin(ωt + φ)",
            latex: "x = A \\sin(\\omega t + \\phi)",
            description: "Position of particle as function of time",
            variables: [
              {
                symbol: "x",
                meaning: "Displacement from mean",
                unit: "m",
                typical_values: "-A to +A"
              },
              {
                symbol: "A",
                meaning: "Amplitude",
                unit: "m",
                typical_values: "cm to m"
              },
              {
                symbol: "ω",
                meaning: "Angular frequency",
                unit: "rad/s",
                typical_values: "1-100 rad/s"
              },
              {
                symbol: "φ",
                meaning: "Initial phase",
                unit: "rad",
                typical_values: "0 to 2π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At t = 0: x = A sin φ", "At t = T/4: x = A (if φ = 0)"],
            dimensionalCheck: "[x] = [A] = m",
          },
          {
            id: "velocity-shm",
            name: "Velocity in SHM",
            category: "derived",
            formula: "v = Aω cos(ωt + φ) = ω√(A² - x²)",
            latex: "v = A\\omega\\cos(\\omega t + \\phi) = \\omega\\sqrt{A^2 - x^2}",
            description: "Velocity of particle in SHM",
            variables: [
              {
                symbol: "v",
                meaning: "Velocity",
                unit: "m/s",
                typical_values: "-v_max to +v_max"
              },
              {
                symbol: "v_max",
                meaning: "Maximum velocity",
                unit: "m/s",
                typical_values: "Aω"
              }
            ],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: ["v = 0 at x = ±A (extremes)", "v = ±v_max at x = 0 (mean)"],
            dimensionalCheck: "[v] = [A][ω] = m × rad/s = m/s",
          },
          {
            id: "acceleration-shm",
            name: "Acceleration in SHM",
            category: "derived",
            formula: "a = -Aω² sin(ωt + φ) = -ω²x",
            latex: "a = -A\\omega^2\\sin(\\omega t + \\phi) = -\\omega^2 x",
            description: "Acceleration is proportional to displacement, opposite in direction",
            variables: [
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "-a_max to +a_max"
              },
              {
                symbol: "a_max",
                meaning: "Maximum acceleration",
                unit: "m/s²",
                typical_values: "Aω²"
              }
            ],
            derivedFrom: "velocity-shm",
            applications: [],
            specialCases: ["a = 0 at x = 0 (mean position)", "a and x always opposite in sign"],
            dimensionalCheck: "[a] = [ω²][x] = s⁻² × m = m/s²",
          },
          {
            id: "time-period-shm",
            name: "Time Period of SHM",
            category: "base",
            formula: "T = 2π/ω = 2π√(m/k)",
            latex: "T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{m}{k}}",
            description: "Time for one complete oscillation",
            variables: [
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "0.1-10 s"
              },
              {
                symbol: "m",
                meaning: "Mass",
                unit: "kg",
                typical_values: "0.01-10 kg"
              },
              {
                symbol: "k",
                meaning: "Spring constant",
                unit: "N/m",
                typical_values: "1-1000 N/m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["T independent of amplitude A", "T ∝ √m, T ∝ 1/√k"],
            dimensionalCheck: "[T] = 2π/[ω] = 1/(rad/s) = s",
          },
          {
            id: "energy-shm",
            name: "Energy in SHM",
            category: "derived",
            formula: "E = KE + PE = ½kA² = constant",
            latex: "E = KE + PE = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2",
            description: "Total mechanical energy is constant in SHM",
            variables: [
              {
                symbol: "E",
                meaning: "Total energy",
                unit: "J",
                typical_values: "Constant"
              },
              {
                symbol: "KE",
                meaning: "Kinetic energy",
                unit: "J",
                typical_values: "0 to E"
              },
              {
                symbol: "PE",
                meaning: "Potential energy",
                unit: "J",
                typical_values: "0 to E"
              }
            ],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: ["At x = 0: KE = max, PE = 0", "At x = ±A: KE = 0, PE = max", "E ∝ A²"],
            dimensionalCheck: "[E] = [k][A²] = N/m × m² = J",
          },
          {
            id: "from-mean-position",
            name: "From mean position",
            category: "derived",
            formula: "x = A\\sin(\\omega t)",
            latex: "x = A\\sin(\\omega t)",
            description: "φ = 0, starts from center moving +ve",
            variables: [],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = [A] = m",
            neet_frequency: "high",
          },
          {
            id: "from-extreme",
            name: "From extreme",
            category: "derived",
            formula: "x = A\\cos(\\omega t)",
            latex: "x = A\\cos(\\omega t)",
            description: "φ = π/2, starts from +A",
            variables: [],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x] = [A] = m",
            neet_frequency: "high",
          },
          {
            id: "maximum-velocity",
            name: "Maximum velocity",
            category: "derived",
            formula: "v_{max} = A\\omega",
            latex: "v_{max} = A\\omega",
            description: "At mean position (x = 0)",
            variables: [],
            derivedFrom: "velocity-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [A][ω] = m × rad/s = m/s",
            neet_frequency: "high",
          },
          {
            id: "at-half-amplitude",
            name: "At half amplitude",
            category: "derived",
            formula: "v = \\omega\\sqrt{A^2 - A^2/4} = \\frac{\\sqrt{3}}{2}A\\omega",
            latex: "v = \\omega\\sqrt{A^2 - A^2/4} = \\frac{\\sqrt{3}}{2}A\\omega",
            description: "When x = A/2",
            variables: [],
            derivedFrom: "velocity-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [A][ω] = m × rad/s = m/s",
            neet_frequency: "medium",
          },
          {
            id: "maximum-acceleration",
            name: "Maximum acceleration",
            category: "derived",
            formula: "a_{max} = A\\omega^2",
            latex: "a_{max} = A\\omega^2",
            description: "At extremes (x = ±A)",
            variables: [],
            derivedFrom: "acceleration-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [ω²][x] = s⁻² × m = m/s²",
            neet_frequency: "high",
          },
          {
            id: "at-x-a2",
            name: "At x = A/2",
            category: "derived",
            formula: "a = -\\frac{A\\omega^2}{2}",
            latex: "a = -\\frac{A\\omega^2}{2}",
            description: "Half of maximum",
            variables: [],
            derivedFrom: "acceleration-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a] = [ω²][x] = s⁻² × m = m/s²",
            neet_frequency: "medium",
          },
          {
            id: "frequency",
            name: "Frequency",
            category: "derived",
            formula: "f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}",
            latex: "f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}",
            description: "Oscillations per second",
            variables: [],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = 2π/[ω] = 1/(rad/s) = s",
            neet_frequency: "high",
          },
          {
            id: "angular-frequency",
            name: "Angular frequency",
            category: "derived",
            formula: "\\omega = \\sqrt{\\frac{k}{m}}",
            latex: "\\omega = \\sqrt{\\frac{k}{m}}",
            description: "From spring constant and mass",
            variables: [],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = 2π/[ω] = 1/(rad/s) = s",
            neet_frequency: "high",
          },
          {
            id: "ke-at-position-x",
            name: "KE at position x",
            category: "derived",
            formula: "KE = \\frac{1}{2}m\\omega^2(A^2 - x^2)",
            latex: "KE = \\frac{1}{2}m\\omega^2(A^2 - x^2)",
            description: "Kinetic energy",
            variables: [],
            derivedFrom: "energy-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [k][A²] = N/m × m² = J",
            neet_frequency: "high",
          },
          {
            id: "pe-at-position-x",
            name: "PE at position x",
            category: "derived",
            formula: "PE = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}kx^2",
            latex: "PE = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}kx^2",
            description: "Potential energy",
            variables: [],
            derivedFrom: "energy-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [k][A²] = N/m × m² = J",
            neet_frequency: "high",
          },
          {
            id: "at-x-a2-2",
            name: "At x = A/√2",
            category: "derived",
            formula: "KE = PE = \\frac{E}{2}",
            latex: "KE = PE = \\frac{E}{2}",
            description: "Energy equally divided",
            variables: [],
            derivedFrom: "energy-shm",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [k][A²] = N/m × m² = J",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing amplitude with displacement",
            correct: "Amplitude A is the maximum displacement. Displacement x varies from -A to +A",
            whyItHappens: "Both have same units, used interchangeably in casual speech",
            neetExample: "NEET 2020: Particle at x = A/2, find velocity as fraction of v_max"
          },
          {
            mistake: "Wrong phase for starting position",
            correct: "From mean moving +ve: φ = 0, sin. From +A: φ = π/2 or use cos. From -A: φ = -π/2",
            whyItHappens: "Not matching initial conditions to equation",
            neetExample: "NEET 2019: Write equation if particle starts from x = +A"
          },
          {
            mistake: "Thinking KE = PE at x = A/2",
            correct: "KE = PE when x = A/√2 (not A/2)",
            whyItHappens: "Intuitive guess that half amplitude means half energy",
            neetExample: "NEET 2021: Where is energy half KE and half PE?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find v, a at given x or t",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Energy at different positions",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Time to reach certain position",
            difficulty: "hard"
          },
          {
            type: "graphical",
            description: "x-t, v-t, a-t graphs",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Velocity at given position",
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
            pattern: "Energy problems in SHM",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Phase and initial conditions",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "SHM motion",
            analogy: "Shadow of circular motion",
            mapping: "Uniform circular motion projected on diameter gives SHM"
          },
          {
            concept: "Energy exchange",
            analogy: "Roller coaster",
            mapping: "KE ↔ PE conversion like height ↔ speed on roller coaster"
          }
        ],
        questions: [],
      },
      {
        id: "spring-block-system",
        name: "Time Period of Spring Block System",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Mass attached to spring executes SHM with T = 2π√(m/k). For springs in series, effective k decreases. For springs in parallel, k adds. Vertical spring has same T as horizontal, just equilibrium position shifts.",
          realWorldAnalogy: "Car suspension - heavier car (more m) bounces slower, stiffer springs (more k) bounce faster.",
          keyPoints: [
            "Horizontal spring: T = 2π√(m/k)",
            "Vertical spring: Same T, equilibrium at x₀ = mg/k",
            "Springs in series: 1/k_eq = 1/k₁ + 1/k₂",
            "Springs in parallel: k_eq = k₁ + k₂",
            "Reduced mass for two masses: μ = m₁m₂/(m₁+m₂)"
          ],
          prerequisites: ["simple-harmonic-motion"]
        },
        formulas: [
          {
            id: "spring-time-period",
            name: "Spring-Mass Time Period",
            category: "base",
            formula: "T = 2π√(m/k)",
            latex: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
            description: "Time period of spring-mass oscillator",
            variables: [
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "0.1-5 s"
              },
              {
                symbol: "m",
                meaning: "Mass attached",
                unit: "kg",
                typical_values: "0.01-10 kg"
              },
              {
                symbol: "k",
                meaning: "Spring constant",
                unit: "N/m",
                typical_values: "1-1000 N/m"
              }
            ],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: ["T independent of amplitude", "T independent of g (same in space)"],
            dimensionalCheck: "[T] = √([m]/[k]) = √(kg/(N/m)) = √(kg·m/N) = s",
          },
          {
            id: "springs-series",
            name: "Springs in Series",
            category: "derived",
            formula: "1/k_eq = 1/k₁ + 1/k₂",
            latex: "\\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2}",
            description: "Equivalent spring constant when springs are in series",
            variables: [
              {
                symbol: "k_eq",
                meaning: "Equivalent spring constant",
                unit: "N/m",
                typical_values: "Less than smallest k"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Series makes system softer (lower k, longer T)", "Same force through all springs"],
            dimensionalCheck: "[k] = N/m",
          },
          {
            id: "springs-parallel",
            name: "Springs in Parallel",
            category: "derived",
            formula: "k_eq = k₁ + k₂",
            latex: "k_{eq} = k_1 + k_2",
            description: "Equivalent spring constant when springs are in parallel",
            variables: [
              {
                symbol: "k_eq",
                meaning: "Equivalent spring constant",
                unit: "N/m",
                typical_values: "Sum of all k"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Parallel makes system stiffer (higher k, shorter T)", "Same extension in all springs"],
            dimensionalCheck: "[k] = N/m",
          },
          {
            id: "angular-frequency",
            name: "Angular frequency",
            category: "derived",
            formula: "\\omega = \\sqrt{\\frac{k}{m}}",
            latex: "\\omega = \\sqrt{\\frac{k}{m}}",
            description: "Derived quantity",
            variables: [],
            derivedFrom: "spring-time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([m]/[k]) = √(kg/(N/m)) = √(kg·m/N) = s",
            neet_frequency: "high",
          },
          {
            id: "two-springs",
            name: "Two springs",
            category: "derived",
            formula: "k_{eq} = \\frac{k_1 k_2}{k_1 + k_2}",
            latex: "k_{eq} = \\frac{k_1 k_2}{k_1 + k_2}",
            description: "Product over sum",
            variables: [],
            derivedFrom: "springs-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[k] = N/m",
            neet_frequency: "high",
          },
          {
            id: "n-identical-springs",
            name: "n identical springs",
            category: "derived",
            formula: "k_{eq} = \\frac{k}{n}",
            latex: "k_{eq} = \\frac{k}{n}",
            description: "Each spring k",
            variables: [],
            derivedFrom: "springs-series",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[k] = N/m",
            neet_frequency: "medium",
          },
          {
            id: "n-identical-springs-2",
            name: "n identical springs",
            category: "derived",
            formula: "k_{eq} = nk",
            latex: "k_{eq} = nk",
            description: "Each spring k",
            variables: [],
            derivedFrom: "springs-parallel",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[k] = N/m",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Adding k for series (like parallel resistors)",
            correct: "Series springs: 1/k_eq = 1/k₁ + 1/k₂ (reciprocals add, opposite of resistors)",
            whyItHappens: "Remembering resistor rules, springs are opposite",
            neetExample: "NEET 2020: Two springs k and 2k in series"
          },
          {
            mistake: "Thinking vertical spring has different T",
            correct: "T = 2π√(m/k) same for vertical and horizontal. Only equilibrium position differs.",
            whyItHappens: "Thinking gravity affects time period",
            neetExample: "NEET 2019: Time period of vertical spring oscillation"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "T for spring-mass system",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Springs in series/parallel",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Cut spring problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Time period of spring-mass",
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
            pattern: "Springs in series/parallel",
            frequency: "high",
            yearAsked: [2019, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Springs in series",
            analogy: "Two weak people pulling rope",
            mapping: "Combined pulling power is less than either alone - easier to stretch"
          }
        ],
        questions: [],
      },
      {
        id: "time-period-pendulum",
        name: "Time Period of Pendulum",
        weightage: 0,
        difficulty: "medium",
        theory: {
          summary: "Simple pendulum executes SHM for small angles with T = 2π√(L/g). Time period depends on length and gravity, not on mass or amplitude (for small angles). Affected by altitude, depth, and accelerating frames.",
          realWorldAnalogy: "Grandfather clock - longer pendulum swings slower. Works the same regardless of bob weight.",
          keyPoints: [
            "T = 2π√(L/g) for small angles (θ < 5°)",
            "Independent of mass and amplitude",
            "ω = √(g/L)",
            "g effective changes in accelerating frames",
            "Second's pendulum: T = 2s, L ≈ 1m"
          ],
          prerequisites: ["simple-harmonic-motion"]
        },
        formulas: [
          {
            id: "pendulum-time-period",
            name: "Simple Pendulum Time Period",
            category: "base",
            formula: "T = 2π√(L/g)",
            latex: "T = 2\\pi\\sqrt{\\frac{L}{g}}",
            description: "Time period of simple pendulum for small oscillations",
            variables: [
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "1-5 s"
              },
              {
                symbol: "L",
                meaning: "Length of pendulum",
                unit: "m",
                typical_values: "0.1-2 m"
              },
              {
                symbol: "g",
                meaning: "Acceleration due to gravity",
                unit: "m/s²",
                typical_values: "9.8 m/s²"
              }
            ],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: ["In free fall: g_eff = 0, T → ∞ (no oscillation)", "T ∝ √L, T ∝ 1/√g"],
            dimensionalCheck: "[T] = √([L]/[g]) = √(m/(m/s²)) = s",
          },
          {
            id: "g-effective",
            name: "Effective g in Non-Inertial Frames",
            category: "derived",
            formula: "g_eff = g ± a",
            latex: "g_{eff} = g \\pm a",
            description: "Modified gravity in accelerating reference frames",
            variables: [
              {
                symbol: "g_eff",
                meaning: "Effective gravity",
                unit: "m/s²",
                typical_values: "0 to 20 m/s²"
              },
              {
                symbol: "a",
                meaning: "Acceleration of frame",
                unit: "m/s²",
                typical_values: "1-10 m/s²"
              }
            ],
            derivedFrom: "pendulum-time-period",
            applications: [],
            specialCases: ["Up acceleration: +, Down acceleration: -", "Free fall: g_eff = 0"],
            dimensionalCheck: "[g] = m/s²",
          },
          {
            id: "seconds-pendulum",
            name: "Second's pendulum",
            category: "derived",
            formula: "L = \\frac{gT^2}{4\\pi^2} \\approx 1m",
            latex: "L = \\frac{gT^2}{4\\pi^2} \\approx 1m",
            description: "T = 2s pendulum",
            variables: [],
            derivedFrom: "pendulum-time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([L]/[g]) = √(m/(m/s²)) = s",
            neet_frequency: "high",
          },
          {
            id: "in-elevator-up",
            name: "In elevator (up)",
            category: "derived",
            formula: "g_{eff} = g + a, T \\downarrow",
            latex: "g_{eff} = g + a, T \\downarrow",
            description: "Accelerating upward",
            variables: [],
            derivedFrom: "pendulum-time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([L]/[g]) = √(m/(m/s²)) = s",
            neet_frequency: "high",
          },
          {
            id: "in-elevator-down",
            name: "In elevator (down)",
            category: "derived",
            formula: "g_{eff} = g - a, T \\uparrow",
            latex: "g_{eff} = g - a, T \\uparrow",
            description: "Accelerating downward",
            variables: [],
            derivedFrom: "pendulum-time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([L]/[g]) = √(m/(m/s²)) = s",
            neet_frequency: "high",
          },
          {
            id: "horizontal-acceleration",
            name: "Horizontal acceleration",
            category: "derived",
            formula: "g_{eff} = \\sqrt{g^2 + a^2}",
            latex: "g_{eff} = \\sqrt{g^2 + a^2}",
            description: "Car/train accelerating",
            variables: [],
            derivedFrom: "g-effective",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[g] = m/s²",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using amplitude in pendulum formula",
            correct: "T = 2π√(L/g) - no amplitude term (for small angles)",
            whyItHappens: "Expecting amplitude to affect period like in general SHM",
            neetExample: "NEET 2020: Effect of doubling amplitude on T"
          },
          {
            mistake: "Not considering effective g in non-inertial frames",
            correct: "In accelerating elevator/vehicle, use g_eff in formula",
            whyItHappens: "Using standard g everywhere",
            neetExample: "NEET 2019: Pendulum in elevator accelerating upward"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate T for given L",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Pendulum in accelerating frame",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Change in T with L or g",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Simple pendulum time period",
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
            pattern: "Effective g problems",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Pendulum period",
            analogy: "Clock accuracy",
            mapping: "Grandfather clocks use long pendulums for slow, accurate swings"
          }
        ],
        questions: [],
      },
      {
        id: "shm-graphs",
        name: "SHM Graphs and Phase Relations",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "In SHM, displacement, velocity, and acceleration vary sinusoidally with different phase relationships. Velocity leads displacement by π/2 (90°). Acceleration leads velocity by π/2 (or is opposite to displacement). Understanding these graphs is crucial for NEET.",
          realWorldAnalogy: "Like a race on a circular track - position, speed, and acceleration at different times follow predictable patterns that repeat every lap (period).",
          keyPoints: [
            "x = A sin(ωt): displacement vs time is sine wave",
            "v = Aω cos(ωt): velocity leads x by π/2 (90°)",
            "a = -Aω² sin(ωt): acceleration opposite to x (180° phase diff)",
            "v-x graph: ellipse (v²/(Aω)² + x²/A² = 1)",
            "a-x graph: straight line with negative slope (a = -ω²x)",
            "All graphs have same time period T"
          ],
          prerequisites: ["simple-harmonic-motion"]
        },
        formulas: [
          {
            id: "phase-relations",
            name: "Phase Relations in SHM",
            category: "base",
            formula: "v leads x by π/2, a leads v by π/2",
            latex: "\\phi_v - \\phi_x = \\frac{\\pi}{2}, \\quad \\phi_a - \\phi_v = \\frac{\\pi}{2}",
            description: "Phase differences between displacement, velocity, and acceleration",
            variables: [
              {
                symbol: "φ_x",
                meaning: "Phase of displacement",
                unit: "rad",
                typical_values: "Reference"
              },
              {
                symbol: "φ_v",
                meaning: "Phase of velocity",
                unit: "rad",
                typical_values: "φ_x + π/2"
              },
              {
                symbol: "φ_a",
                meaning: "Phase of acceleration",
                unit: "rad",
                typical_values: "φ_x + π"
              }
            ],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: ["x and a are 180° out of phase (opposite)", "v is 90° ahead of x"],
            dimensionalCheck: "Phases in radians",
          },
          {
            id: "vx-graph",
            name: "Velocity-Displacement Graph",
            category: "derived",
            formula: "v² + ω²x² = ω²A²",
            latex: "\\frac{v^2}{(A\\omega)^2} + \\frac{x^2}{A^2} = 1",
            description: "Equation of v-x curve is an ellipse",
            variables: [
              {
                symbol: "v",
                meaning: "Velocity",
                unit: "m/s",
                typical_values: "-Aω to +Aω"
              },
              {
                symbol: "x",
                meaning: "Displacement",
                unit: "m",
                typical_values: "-A to +A"
              }
            ],
            derivedFrom: "velocity-shm",
            applications: [],
            specialCases: ["Ellipse shape (not circle unless ω = 1)", "Clockwise motion if x = A sin(ωt)"],
            dimensionalCheck: "Dimensionless equation",
          },
          {
            id: "ax-graph",
            name: "Acceleration-Displacement Graph",
            category: "derived",
            formula: "a = -ω²x",
            latex: "a = -\\omega^2 x",
            description: "a vs x is a straight line through origin with negative slope",
            variables: [
              {
                symbol: "a",
                meaning: "Acceleration",
                unit: "m/s²",
                typical_values: "-Aω² to +Aω²"
              }
            ],
            derivedFrom: "acceleration-shm",
            applications: [],
            specialCases: ["Straight line with negative slope", "Passes through origin", "Slope = -ω²"],
            dimensionalCheck: "[a]/[x] = m/s² / m = s⁻² = [ω²]",
          },
          {
            id: "when-x-0",
            name: "When x = 0",
            category: "derived",
            formula: "v = \\pm v_{max}, a = 0",
            latex: "v = \\pm v_{max}, a = 0",
            description: "At mean position",
            variables: [],
            derivedFrom: "phase-relations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Phases in radians",
            neet_frequency: "high",
          },
          {
            id: "when-x-a",
            name: "When x = ±A",
            category: "derived",
            formula: "v = 0, a = \\mp a_{max}",
            latex: "v = 0, a = \\mp a_{max}",
            description: "At extreme positions",
            variables: [],
            derivedFrom: "phase-relations",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Phases in radians",
            neet_frequency: "high",
          },
          {
            id: "semi-major-axis",
            name: "Semi-major axis",
            category: "derived",
            formula: "v_{max} = A\\omega",
            latex: "v_{max} = A\\omega",
            description: "Along v-axis",
            variables: [],
            derivedFrom: "vx-graph",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless equation",
            neet_frequency: "high",
          },
          {
            id: "semi-minor-axis",
            name: "Semi-minor axis",
            category: "derived",
            formula: "x_{max} = A",
            latex: "x_{max} = A",
            description: "Along x-axis",
            variables: [],
            derivedFrom: "vx-graph",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless equation",
            neet_frequency: "high",
          },
          {
            id: "slope",
            name: "Slope",
            category: "derived",
            formula: "\\text{slope} = -\\omega^2 = -\\frac{4\\pi^2}{T^2}",
            latex: "\\text{slope} = -\\omega^2 = -\\frac{4\\pi^2}{T^2}",
            description: "Find ω from graph",
            variables: [],
            derivedFrom: "ax-graph",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a]/[x] = m/s² / m = s⁻² = [ω²]",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking v-x graph is a circle",
            correct: "v-x graph is an ellipse with semi-axes A and Aω. Circle only if ω = 1 rad/s.",
            whyItHappens: "Simplification in some textbooks",
            neetExample: "NEET 2020: Shape of v-x graph in SHM"
          },
          {
            mistake: "Wrong phase relation between a and x",
            correct: "a and x are 180° out of phase (opposite signs). When x is max, a is min (negative max).",
            whyItHappens: "Forgetting the negative sign in a = -ω²x",
            neetExample: "NEET 2019: When x = +A, what is acceleration?"
          }
        ],
        variations: [
          {
            type: "graphical",
            description: "Identify correct x-t, v-t, a-t graph",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Find ω from a-x graph slope",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Phase difference between quantities",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Identify SHM from graphs",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Phase relations",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2023
            ]
          },
          {
            pattern: "a-x graph analysis",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Phase relations",
            analogy: "Race: position, speed, acceleration",
            mapping: "Maximum speed at center, zero speed at turns - 90° phase shift"
          }
        ],
        questions: [],
      },
      {
        id: "physical-pendulum",
        name: "Physical (Compound) Pendulum",
        weightage: 0.5,
        difficulty: "hard",
        theory: {
          summary: "A physical pendulum is any rigid body oscillating about a horizontal axis. T = 2π√(I/mgd) where I is moment of inertia about axis and d is distance from axis to center of mass. Equivalent length L_eq = I/(md).",
          realWorldAnalogy: "A swinging door, a baseball bat, or any real-world pendulum that isn't just a point mass on a string. The distribution of mass matters.",
          keyPoints: [
            "T = 2π√(I/mgd) for physical pendulum",
            "I = moment of inertia about pivot",
            "d = distance from pivot to center of mass",
            "Equivalent simple pendulum length: L_eq = I/(md)",
            "For uniform rod pivoted at end: T = 2π√(2L/3g)",
            "Uses parallel axis theorem: I = I_cm + md²"
          ],
          prerequisites: ["time-period-pendulum", "rotational-motion-basics"]
        },
        formulas: [
          {
            id: "physical-pendulum-period",
            name: "Physical Pendulum Time Period",
            category: "base",
            formula: "T = 2π√(I/mgd)",
            latex: "T = 2\\pi\\sqrt{\\frac{I}{mgd}}",
            description: "Time period of physical pendulum for small oscillations",
            variables: [
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "0.5-5 s"
              },
              {
                symbol: "I",
                meaning: "Moment of inertia about pivot",
                unit: "kg·m²",
                typical_values: "Depends on shape"
              },
              {
                symbol: "m",
                meaning: "Mass of pendulum",
                unit: "kg",
                typical_values: "0.1-10 kg"
              },
              {
                symbol: "d",
                meaning: "Distance from pivot to CM",
                unit: "m",
                typical_values: "0.1-1 m"
              }
            ],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: ["For simple pendulum: I = mL², d = L, so T = 2π√(L/g)", "T depends on axis position"],
            dimensionalCheck: "[T] = √([I]/[m][g][d]) = √(kg·m²/(kg·m/s²·m)) = s ✓",
          },
          {
            id: "rod-pendulum",
            name: "Uniform Rod as Pendulum",
            category: "derived",
            formula: "T = 2π√(2L/3g) (pivoted at end)",
            latex: "T = 2\\pi\\sqrt{\\frac{2L}{3g}}",
            description: "Time period of uniform rod pivoted at one end",
            variables: [
              {
                symbol: "L",
                meaning: "Length of rod",
                unit: "m",
                typical_values: "0.5-2 m"
              }
            ],
            derivedFrom: "physical-pendulum-period",
            applications: [],
            specialCases: ["d = L/2 for rod pivoted at end", "L_eq = 2L/3 < L"],
            dimensionalCheck: "[T] = s",
          },
          {
            id: "ring-disc-pendulum",
            name: "Ring and Disc Pendulums",
            category: "derived",
            formula: "Ring: T = 2π√(2R/g), Disc: T = 2π√(3R/2g)",
            latex: "T_{ring} = 2\\pi\\sqrt{\\frac{2R}{g}}, \\quad T_{disc} = 2\\pi\\sqrt{\\frac{3R}{2g}}",
            description: "Time periods when pivoted at edge",
            variables: [
              {
                symbol: "R",
                meaning: "Radius",
                unit: "m",
                typical_values: "0.1-0.5 m"
              }
            ],
            derivedFrom: "physical-pendulum-period",
            applications: [],
            specialCases: ["Ring pivoted at rim: I = mR² + mR² = 2mR²", "Disc pivoted at rim: I = mR²/2 + mR² = 3mR²/2"],
            dimensionalCheck: "[T] = s",
          },
          {
            id: "using-parallel-axis",
            name: "Using parallel axis",
            category: "derived",
            formula: "I = I_{cm} + md^2",
            latex: "I = I_{cm} + md^2",
            description: "Find I about pivot",
            variables: [],
            derivedFrom: "physical-pendulum-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([I]/[m][g][d]) = √(kg·m²/(kg·m/s²·m)) = s ✓",
            neet_frequency: "high",
          },
          {
            id: "equivalent-length",
            name: "Equivalent length",
            category: "derived",
            formula: "L_{eq} = \\frac{I}{md}",
            latex: "L_{eq} = \\frac{I}{md}",
            description: "Compare to simple pendulum",
            variables: [],
            derivedFrom: "physical-pendulum-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([I]/[m][g][d]) = √(kg·m²/(kg·m/s²·m)) = s ✓",
            neet_frequency: "high",
          },
          {
            id: "i-for-rod-at-end",
            name: "I for rod at end",
            category: "derived",
            formula: "I = \\frac{mL^2}{3}",
            latex: "I = \\frac{mL^2}{3}",
            description: "Using parallel axis theorem",
            variables: [],
            derivedFrom: "rod-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "high",
          },
          {
            id: "equivalent-length-2",
            name: "Equivalent length",
            category: "derived",
            formula: "L_{eq} = \\frac{2L}{3}",
            latex: "L_{eq} = \\frac{2L}{3}",
            description: "Less than actual length",
            variables: [],
            derivedFrom: "rod-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "medium",
          },
          {
            id: "ring-i-2mr",
            name: "Ring (I = 2mR²)",
            category: "derived",
            formula: "L_{eq} = 2R",
            latex: "L_{eq} = 2R",
            description: "Pivoted at rim",
            variables: [],
            derivedFrom: "ring-disc-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "medium",
          },
          {
            id: "disc-i-3mr2",
            name: "Disc (I = 3mR²/2)",
            category: "derived",
            formula: "L_{eq} = \\frac{3R}{2}",
            latex: "L_{eq} = \\frac{3R}{2}",
            description: "Pivoted at rim",
            variables: [],
            derivedFrom: "ring-disc-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using I_cm instead of I about pivot",
            correct: "Must use I = I_cm + md² (parallel axis theorem) for I about pivot.",
            whyItHappens: "Forgetting that axis is not at center of mass",
            neetExample: "NEET 2020: Time period of rod pivoted at one end"
          },
          {
            mistake: "Confusing d (distance to CM) with length L",
            correct: "For rod pivoted at end: d = L/2, not L. For rod pivoted at center: d = 0 (won't oscillate).",
            whyItHappens: "Not identifying center of mass correctly",
            neetExample: "NEET 2019: Physical pendulum with off-center pivot"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Time period of rod pendulum",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Equivalent length calculation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Ring/disc pendulum",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Rod pendulum time period",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Equivalent simple pendulum length",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Physical vs simple pendulum",
            analogy: "Swinging a bat vs a ball on string",
            mapping: "Bat's mass distribution affects swing period; ball on string is ideal point mass"
          }
        ],
        questions: [],
      },
      {
        id: "damped-oscillations",
        name: "Damped Oscillations",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Real oscillations lose energy to friction/resistance, causing amplitude to decay exponentially. Amplitude: A(t) = A₀e^(-bt/2m). Three regimes: underdamped (oscillates), critically damped (fastest return), overdamped (slow return, no oscillation).",
          realWorldAnalogy: "Car shock absorbers are designed to be critically damped - return to rest quickly without bouncing. A swing gradually stops if not pushed (underdamped).",
          keyPoints: [
            "Damping force: F = -bv (opposes motion)",
            "Amplitude decays: A(t) = A₀e^(-bt/2m)",
            "Energy decays: E(t) = E₀e^(-bt/m)",
            "Underdamped: b < 2√(km) - oscillates with decreasing amplitude",
            "Critically damped: b = 2√(km) - fastest return to equilibrium",
            "Overdamped: b > 2√(km) - slow return, no oscillation",
            "Quality factor: Q = mω₀/b (higher Q = less damping)"
          ],
          prerequisites: ["simple-harmonic-motion"]
        },
        formulas: [
          {
            id: "damped-amplitude",
            name: "Amplitude Decay in Damped SHM",
            category: "base",
            formula: "A(t) = A₀e^(-bt/2m)",
            latex: "A(t) = A_0 e^{-bt/2m} = A_0 e^{-\\gamma t}",
            description: "Amplitude decreases exponentially with time",
            variables: [
              {
                symbol: "A(t)",
                meaning: "Amplitude at time t",
                unit: "m",
                typical_values: "Decreasing"
              },
              {
                symbol: "A₀",
                meaning: "Initial amplitude",
                unit: "m",
                typical_values: "Given"
              },
              {
                symbol: "b",
                meaning: "Damping coefficient",
                unit: "kg/s",
                typical_values: "Depends on medium"
              },
              {
                symbol: "γ",
                meaning: "Damping constant = b/2m",
                unit: "s⁻¹",
                typical_values: "γ = b/2m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For no damping (b = 0): A = A₀ (constant)", "Amplitude never becomes exactly zero"],
            dimensionalCheck: "[A] = m",
          },
          {
            id: "damped-energy",
            name: "Energy Decay in Damped SHM",
            category: "derived",
            formula: "E(t) = E₀e^(-bt/m)",
            latex: "E(t) = E_0 e^{-bt/m}",
            description: "Total energy decreases exponentially",
            variables: [
              {
                symbol: "E(t)",
                meaning: "Energy at time t",
                unit: "J",
                typical_values: "Decreasing"
              },
              {
                symbol: "E₀",
                meaning: "Initial energy",
                unit: "J",
                typical_values: "½kA₀²"
              }
            ],
            derivedFrom: "damped-amplitude",
            applications: [],
            specialCases: ["Energy decays at twice the rate of amplitude", "E ∝ A²"],
            dimensionalCheck: "[E] = J",
          },
          {
            id: "quality-factor",
            name: "Quality Factor",
            category: "derived",
            formula: "Q = mω₀/b = ω₀τ/2",
            latex: "Q = \\frac{m\\omega_0}{b} = \\frac{\\omega_0 \\tau}{2}",
            description: "Measure of how underdamped an oscillator is",
            variables: [
              {
                symbol: "Q",
                meaning: "Quality factor",
                unit: "dimensionless",
                typical_values: "10-1000 for mechanical"
              },
              {
                symbol: "ω₀",
                meaning: "Natural angular frequency",
                unit: "rad/s",
                typical_values: "√(k/m)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["High Q = low damping (many oscillations before stopping)", "Low Q = heavy damping (few oscillations)"],
            dimensionalCheck: "Q is dimensionless",
          },
          {
            id: "half-life-of-amplitude",
            name: "Half-life of amplitude",
            category: "derived",
            formula: "t_{1/2} = \\frac{2m\\ln 2}{b}",
            latex: "t_{1/2} = \\frac{2m\\ln 2}{b}",
            description: "Time for A to halve",
            variables: [],
            derivedFrom: "damped-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "medium",
          },
          {
            id: "relaxation-time",
            name: "Relaxation time",
            category: "derived",
            formula: "\\tau = \\frac{2m}{b}",
            latex: "\\tau = \\frac{2m}{b}",
            description: "Time for A to become A₀/e",
            variables: [],
            derivedFrom: "damped-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "medium",
          },
          {
            id: "since-e-a",
            name: "Since E ∝ A²",
            category: "derived",
            formula: "E(t) = E_0 e^{-2\\gamma t}",
            latex: "E(t) = E_0 e^{-2\\gamma t}",
            description: "Energy decays twice as fast as amplitude",
            variables: [],
            derivedFrom: "damped-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = J",
            neet_frequency: "medium",
          },
          {
            id: "energy-loss-per-cycle",
            name: "Energy loss per cycle",
            category: "derived",
            formula: "\\frac{\\Delta E}{E} = \\frac{2\\pi}{Q}",
            latex: "\\frac{\\Delta E}{E} = \\frac{2\\pi}{Q}",
            description: "Fraction of energy lost per cycle",
            variables: [],
            derivedFrom: "quality-factor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Q is dimensionless",
            neet_frequency: "low",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing amplitude decay rate with energy decay rate",
            correct: "Amplitude: A ∝ e^(-γt). Energy: E ∝ e^(-2γt). Energy decays twice as fast.",
            whyItHappens: "Not remembering E ∝ A²",
            neetExample: "NEET 2020: If amplitude halves, energy becomes 1/4"
          },
          {
            mistake: "Thinking damping increases frequency",
            correct: "Damping slightly decreases frequency: ω_d = √(ω₀² - γ²) < ω₀",
            whyItHappens: "Confusing damping effects",
            neetExample: "NEET 2019: Effect of damping on frequency"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Amplitude after n oscillations",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Types of damping",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Energy decay calculation",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Amplitude decay",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Types of damping",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Damped oscillation",
            analogy: "Swing without pushing",
            mapping: "Swing gradually loses amplitude due to air resistance and friction"
          },
          {
            concept: "Critical damping",
            analogy: "Door closer mechanism",
            mapping: "Door returns to closed position quickly without bouncing back"
          }
        ],
        questions: [],
      },
      {
        id: "forced-oscillations-resonance",
        name: "Forced Oscillations and Resonance",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "When external periodic force is applied to an oscillator, it oscillates at the driving frequency. Amplitude is maximum when driving frequency equals natural frequency - this is resonance. Resonance can cause dramatic amplitude increase.",
          realWorldAnalogy: "Pushing a child on swing - push at the right frequency (natural frequency) and amplitude builds up. Soldiers break step on bridges to avoid resonance-induced collapse.",
          keyPoints: [
            "Driven oscillator oscillates at driving frequency ω_d",
            "Amplitude depends on how close ω_d is to ω₀",
            "Resonance when ω_d = ω₀ (maximum amplitude)",
            "At resonance, A_max = F₀/(bω₀)",
            "Sharpness of resonance depends on damping (Q factor)",
            "Low damping = sharp resonance peak, high damping = broad peak"
          ],
          prerequisites: ["damped-oscillations"]
        },
        formulas: [
          {
            id: "resonance-amplitude",
            name: "Amplitude in Forced Oscillation",
            category: "base",
            formula: "A = F₀/m / √((ω₀² - ω_d²)² + (bω_d/m)²)",
            latex: "A = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega_d^2)^2 + (b\\omega_d/m)^2}}",
            description: "Steady-state amplitude of forced oscillator",
            variables: [
              {
                symbol: "A",
                meaning: "Steady-state amplitude",
                unit: "m",
                typical_values: "Depends on conditions"
              },
              {
                symbol: "F₀",
                meaning: "Amplitude of driving force",
                unit: "N",
                typical_values: "Given"
              },
              {
                symbol: "ω_d",
                meaning: "Driving angular frequency",
                unit: "rad/s",
                typical_values: "Given"
              },
              {
                symbol: "ω₀",
                meaning: "Natural angular frequency",
                unit: "rad/s",
                typical_values: "√(k/m)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["A → ∞ as b → 0 at resonance (undamped)", "A decreases as ω_d moves away from ω₀"],
            dimensionalCheck: "[A] = m",
          },
          {
            id: "resonance-condition",
            name: "Resonance Condition",
            category: "base",
            formula: "ω_d = ω₀ = √(k/m)",
            latex: "\\omega_d = \\omega_0 = \\sqrt{\\frac{k}{m}}",
            description: "Resonance occurs when driving frequency equals natural frequency",
            variables: [
              {
                symbol: "ω_d",
                meaning: "Driving frequency for resonance",
                unit: "rad/s",
                typical_values: "Equal to ω₀"
              }
            ],
            derivedFrom: "resonance-amplitude",
            applications: [],
            specialCases: ["Maximum amplitude at resonance", "Maximum energy transfer at resonance"],
            dimensionalCheck: "[ω] = rad/s",
          },
          {
            id: "resonance-width",
            name: "Sharpness of Resonance",
            category: "derived",
            formula: "Δω = b/m = ω₀/Q",
            latex: "\\Delta\\omega = \\frac{b}{m} = \\frac{\\omega_0}{Q}",
            description: "Width of resonance curve at half maximum power",
            variables: [
              {
                symbol: "Δω",
                meaning: "Bandwidth",
                unit: "rad/s",
                typical_values: "Small for high Q"
              },
              {
                symbol: "Q",
                meaning: "Quality factor",
                unit: "dimensionless",
                typical_values: "10-1000"
              }
            ],
            derivedFrom: "quality-factor",
            applications: [],
            specialCases: ["Q = ω₀/Δω (can find Q from resonance curve)", "Higher Q means more selective resonance"],
            dimensionalCheck: "[Δω] = rad/s",
          },
          {
            id: "at-resonance-d",
            name: "At resonance (ω_d = ω₀)",
            category: "derived",
            formula: "A_{res} = \\frac{F_0}{b\\omega_0}",
            latex: "A_{res} = \\frac{F_0}{b\\omega_0}",
            description: "Maximum amplitude",
            variables: [],
            derivedFrom: "resonance-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "high",
          },
          {
            id: "frequency-form",
            name: "Frequency form",
            category: "derived",
            formula: "f_d = f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
            latex: "f_d = f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}",
            description: "In Hz",
            variables: [],
            derivedFrom: "resonance-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ω] = rad/s",
            neet_frequency: "high",
          },
          {
            id: "maximum-energy-transfer",
            name: "Maximum energy transfer",
            category: "derived",
            formula: "\\text{Power } \\propto A^2 \\omega_d^2",
            latex: "\\text{Power } \\propto A^2 \\omega_d^2",
            description: "At resonance",
            variables: [],
            derivedFrom: "resonance-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ω] = rad/s",
            neet_frequency: "medium",
          },
          {
            id: "high-q-system",
            name: "High Q system",
            category: "derived",
            formula: "\\text{Sharp peak, narrow } \\Delta\\omega",
            latex: "\\text{Sharp peak, narrow } \\Delta\\omega",
            description: "Low damping",
            variables: [],
            derivedFrom: "resonance-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δω] = rad/s",
            neet_frequency: "medium",
          },
          {
            id: "low-q-system",
            name: "Low Q system",
            category: "derived",
            formula: "\\text{Broad peak, large } \\Delta\\omega",
            latex: "\\text{Broad peak, large } \\Delta\\omega",
            description: "High damping",
            variables: [],
            derivedFrom: "resonance-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δω] = rad/s",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking resonance frequency depends on driving force amplitude",
            correct: "Resonance frequency = natural frequency ω₀ = √(k/m), independent of F₀.",
            whyItHappens: "Confusing amplitude with frequency",
            neetExample: "NEET 2020: What determines resonance frequency?"
          },
          {
            mistake: "Thinking higher damping gives sharper resonance",
            correct: "Higher damping gives broader, flatter resonance peak. Low damping = sharp resonance.",
            whyItHappens: "Counterintuitive relationship",
            neetExample: "NEET 2019: Effect of damping on resonance curve"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Resonance conditions and effects",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Resonance frequency calculation",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Resonance curve interpretation",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Resonance condition",
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
            pattern: "Effect of damping on resonance",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Resonance",
            analogy: "Pushing swing at right timing",
            mapping: "Push when swing is at extreme (same frequency) = maximum amplitude build-up"
          },
          {
            concept: "Avoiding resonance",
            analogy: "Soldiers breaking step on bridge",
            mapping: "Marching in step could match bridge's natural frequency and cause dangerous oscillations"
          }
        ],
        questions: [],
      },
      {
        id: "angular-shm",
        name: "Angular SHM and Torsional Pendulum",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Angular SHM occurs when restoring torque is proportional to angular displacement: τ = -κθ. For torsional pendulum, T = 2π√(I/κ) where κ is torsional constant and I is moment of inertia. Similar to linear SHM with angular quantities.",
          realWorldAnalogy: "A watch balance wheel oscillates back and forth - it's a torsional oscillator. Twisting a wire and releasing it shows angular SHM.",
          keyPoints: [
            "Restoring torque: τ = -κθ (proportional to angle)",
            "Angular acceleration: α = -(κ/I)θ = -ω²θ",
            "Time period: T = 2π√(I/κ)",
            "Angular frequency: ω = √(κ/I)",
            "θ = θ₀ sin(ωt + φ) for angular displacement",
            "Analogous to linear SHM: κ ↔ k, I ↔ m, θ ↔ x"
          ],
          prerequisites: ["simple-harmonic-motion", "rotational-motion-basics"]
        },
        formulas: [
          {
            id: "torsional-pendulum",
            name: "Torsional Pendulum Time Period",
            category: "base",
            formula: "T = 2π√(I/κ)",
            latex: "T = 2\\pi\\sqrt{\\frac{I}{\\kappa}}",
            description: "Time period of torsional oscillation",
            variables: [
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "0.5-5 s"
              },
              {
                symbol: "I",
                meaning: "Moment of inertia about axis",
                unit: "kg·m²",
                typical_values: "10⁻⁴ to 10⁻¹ kg·m²"
              },
              {
                symbol: "κ",
                meaning: "Torsional constant",
                unit: "N·m/rad",
                typical_values: "Depends on wire"
              }
            ],
            derivedFrom: "time-period-shm",
            applications: [],
            specialCases: ["Analogous to spring: κ ↔ k, I ↔ m", "Used to measure I experimentally"],
            dimensionalCheck: "[T] = √([I]/[κ]) = √(kg·m²/(N·m/rad)) = s ✓",
          },
          {
            id: "angular-displacement",
            name: "Angular Displacement in Angular SHM",
            category: "derived",
            formula: "θ = θ₀ sin(ωt + φ)",
            latex: "\\theta = \\theta_0 \\sin(\\omega t + \\phi)",
            description: "Angular position as function of time",
            variables: [
              {
                symbol: "θ",
                meaning: "Angular displacement",
                unit: "rad",
                typical_values: "-θ₀ to +θ₀"
              },
              {
                symbol: "θ₀",
                meaning: "Angular amplitude",
                unit: "rad",
                typical_values: "Small angles"
              }
            ],
            derivedFrom: "displacement-shm",
            applications: [],
            specialCases: ["All linear SHM formulas apply with angular quantities", "Ω_max = θ₀ω at θ = 0"],
            dimensionalCheck: "[θ] = rad",
          },
          {
            id: "angular-energy",
            name: "Energy in Angular SHM",
            category: "derived",
            formula: "E = ½κθ₀² = ½Iω²θ₀²",
            latex: "E = \\frac{1}{2}\\kappa\\theta_0^2 = \\frac{1}{2}I\\omega^2\\theta_0^2",
            description: "Total energy in torsional oscillation",
            variables: [
              {
                symbol: "E",
                meaning: "Total energy",
                unit: "J",
                typical_values: "Constant"
              },
              {
                symbol: "θ₀",
                meaning: "Angular amplitude",
                unit: "rad",
                typical_values: "Given"
              }
            ],
            derivedFrom: "energy-shm",
            applications: [],
            specialCases: ["E ∝ θ₀² (like E ∝ A²)", "KE + PE = constant"],
            dimensionalCheck: "[E] = [κ][θ²] = N·m/rad × rad² = J ✓",
          },
          {
            id: "angular-frequency",
            name: "Angular frequency",
            category: "derived",
            formula: "\\omega = \\sqrt{\\frac{\\kappa}{I}}",
            latex: "\\omega = \\sqrt{\\frac{\\kappa}{I}}",
            description: "Analogous to √(k/m)",
            variables: [],
            derivedFrom: "torsional-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([I]/[κ]) = √(kg·m²/(N·m/rad)) = s ✓",
            neet_frequency: "high",
          },
          {
            id: "find-i",
            name: "Find I",
            category: "derived",
            formula: "I = \\frac{\\kappa T^2}{4\\pi^2}",
            latex: "I = \\frac{\\kappa T^2}{4\\pi^2}",
            description: "Determine moment of inertia",
            variables: [],
            derivedFrom: "torsional-pendulum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = √([I]/[κ]) = √(kg·m²/(N·m/rad)) = s ✓",
            neet_frequency: "medium",
          },
          {
            id: "angular-velocity",
            name: "Angular velocity",
            category: "derived",
            formula: "\\Omega = \\theta_0 \\omega \\cos(\\omega t + \\phi)",
            latex: "\\Omega = \\theta_0 \\omega \\cos(\\omega t + \\phi)",
            description: "dθ/dt",
            variables: [],
            derivedFrom: "angular-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = rad",
            neet_frequency: "medium",
          },
          {
            id: "angular-acceleration",
            name: "Angular acceleration",
            category: "derived",
            formula: "\\alpha = -\\theta_0 \\omega^2 \\sin(\\omega t + \\phi) = -\\omega^2 \\theta",
            latex: "\\alpha = -\\theta_0 \\omega^2 \\sin(\\omega t + \\phi) = -\\omega^2 \\theta",
            description: "d²θ/dt²",
            variables: [],
            derivedFrom: "angular-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = rad",
            neet_frequency: "medium",
          },
          {
            id: "ke-in-angular-shm",
            name: "KE in angular SHM",
            category: "derived",
            formula: "KE = \\frac{1}{2}I\\Omega^2",
            latex: "KE = \\frac{1}{2}I\\Omega^2",
            description: "Rotational kinetic energy",
            variables: [],
            derivedFrom: "angular-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [κ][θ²] = N·m/rad × rad² = J ✓",
            neet_frequency: "medium",
          },
          {
            id: "pe-in-angular-shm",
            name: "PE in angular SHM",
            category: "derived",
            formula: "PE = \\frac{1}{2}\\kappa\\theta^2",
            latex: "PE = \\frac{1}{2}\\kappa\\theta^2",
            description: "Elastic potential energy",
            variables: [],
            derivedFrom: "angular-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = [κ][θ²] = N·m/rad × rad² = J ✓",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using mass m instead of moment of inertia I",
            correct: "For angular SHM, use I (moment of inertia), not m. T = 2π√(I/κ), not √(m/κ).",
            whyItHappens: "Direct substitution from linear SHM formula",
            neetExample: "NEET 2020: Time period of torsional pendulum"
          },
          {
            mistake: "Confusing κ (torsional constant) with k (spring constant)",
            correct: "κ has units N·m/rad (torque per angle), k has units N/m (force per length).",
            whyItHappens: "Similar symbols and analogous roles",
            neetExample: "NEET 2019: Calculate κ from given time period and I"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Time period of torsional pendulum",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Find moment of inertia from oscillation",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Linear vs angular SHM analogy",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Torsional pendulum time period",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Angular SHM analogy",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Torsional pendulum",
            analogy: "Watch balance wheel",
            mapping: "Wheel twists back and forth at its natural frequency, keeping time"
          },
          {
            concept: "Linear vs angular SHM",
            analogy: "Translation vs rotation",
            mapping: "m → I, k → κ, x → θ, v → Ω, F → τ"
          }
        ],
        questions: [],
      }
    ];