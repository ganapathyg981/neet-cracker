// Waves - 1% weightage (Tier 3)
// NCERT Class 11, Chapter 15

export const wavesTopics = [
      {
        id: "wave-motion-basics",
        name: "Wave Motion and Types of Waves",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "A wave is a disturbance that transfers energy without transferring matter. Waves can be mechanical (need medium) or electromagnetic (don't need medium). They can be transverse (vibration ⊥ propagation) or longitudinal (vibration ∥ propagation).",
          realWorldAnalogy: "Stadium wave - people stand and sit, but no person moves around the stadium. The 'wave' travels, but people stay in place. Energy transfers, matter doesn't.",
          keyPoints: [
            "Wave transfers energy, not matter",
            "Mechanical waves need medium (sound, water waves)",
            "Electromagnetic waves don't need medium (light, radio)",
            "Transverse: vibration perpendicular to propagation (light, string waves)",
            "Longitudinal: vibration parallel to propagation (sound)",
            "v = fλ = λ/T (fundamental wave equation)"
          ],
          prerequisites: ["oscillations-basics"]
        },
        formulas: [
          {
            id: "wave-equation",
            name: "Fundamental Wave Equation",
            category: "base",
            formula: "v = fλ = λ/T",
            latex: "v = f\\lambda = \\frac{\\lambda}{T}",
            description: "Relation between wave speed, frequency, and wavelength",
            variables: [
              {
                symbol: "v",
                meaning: "Wave speed",
                unit: "m/s",
                typical_values: "340 m/s (sound), 3×10⁸ m/s (light)"
              },
              {
                symbol: "f",
                meaning: "Frequency",
                unit: "Hz",
                typical_values: "20-20000 Hz (audible)"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "mm to km"
              },
              {
                symbol: "T",
                meaning: "Time period",
                unit: "s",
                typical_values: "T = 1/f"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["v depends on medium, not frequency", "When wave enters new medium: f constant, λ and v change"],
            dimensionalCheck: "[v] = [f][λ] = Hz × m = m/s ✓",
          },
          {
            id: "wave-displacement",
            name: "Progressive Wave Equation",
            category: "base",
            formula: "y = A sin(kx - ωt) or y = A sin(ωt - kx)",
            latex: "y = A\\sin(kx - \\omega t + \\phi)",
            description: "Displacement of particle as function of position and time",
            variables: [
              {
                symbol: "y",
                meaning: "Displacement",
                unit: "m",
                typical_values: "-A to +A"
              },
              {
                symbol: "A",
                meaning: "Amplitude",
                unit: "m",
                typical_values: "mm to cm"
              },
              {
                symbol: "k",
                meaning: "Wave number",
                unit: "rad/m",
                typical_values: "k = 2π/λ"
              },
              {
                symbol: "ω",
                meaning: "Angular frequency",
                unit: "rad/s",
                typical_values: "ω = 2πf"
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
            specialCases: ["kx - ωt: wave travels in +x direction", "kx + ωt: wave travels in -x direction", "Particle velocity ≠ wave velocity"],
            dimensionalCheck: "Argument of sin is dimensionless",
          },
          {
            id: "wave-number",
            name: "Wave Number and Angular Frequency",
            category: "derived",
            formula: "k = 2π/λ, ω = 2πf = 2π/T",
            latex: "k = \\frac{2\\pi}{\\lambda}, \\quad \\omega = 2\\pi f = \\frac{2\\pi}{T}",
            description: "Wave number is spatial frequency, angular frequency is temporal frequency",
            variables: [
              {
                symbol: "k",
                meaning: "Wave number",
                unit: "rad/m",
                typical_values: "Depends on λ"
              },
              {
                symbol: "ω",
                meaning: "Angular frequency",
                unit: "rad/s",
                typical_values: "Depends on f"
              }
            ],
            derivedFrom: "wave-equation",
            applications: [],
            specialCases: ["k tells how many radians of phase change per meter", "ω tells how many radians of phase change per second"],
            dimensionalCheck: "[k] = rad/m, [ω] = rad/s",
          },
          {
            id: "find-wavelength",
            name: "Find wavelength",
            category: "derived",
            formula: "\\lambda = \\frac{v}{f}",
            latex: "\\lambda = \\frac{v}{f}",
            description: "If v and f known",
            variables: [],
            derivedFrom: "wave-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [f][λ] = Hz × m = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "find-frequency",
            name: "Find frequency",
            category: "derived",
            formula: "f = \\frac{v}{\\lambda}",
            latex: "f = \\frac{v}{\\lambda}",
            description: "If v and λ known",
            variables: [],
            derivedFrom: "wave-equation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = [f][λ] = Hz × m = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "wave-velocity-from-equation",
            name: "Wave velocity from equation",
            category: "derived",
            formula: "v = \\frac{\\omega}{k} = \\frac{\\lambda}{T}",
            latex: "v = \\frac{\\omega}{k} = \\frac{\\lambda}{T}",
            description: "Phase velocity",
            variables: [],
            derivedFrom: "wave-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Argument of sin is dimensionless",
            neet_frequency: "high",
          },
          {
            id: "direction-of-travel",
            name: "Direction of travel",
            category: "derived",
            formula: "kx - \\omega t: +x \\text{ dir}, \\quad kx + \\omega t: -x \\text{ dir}",
            latex: "kx - \\omega t: +x \\text{ dir}, \\quad kx + \\omega t: -x \\text{ dir}",
            description: "Sign determines direction",
            variables: [],
            derivedFrom: "wave-displacement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Argument of sin is dimensionless",
            neet_frequency: "high",
          },
          {
            id: "velocity-relation",
            name: "Velocity relation",
            category: "derived",
            formula: "v = \\frac{\\omega}{k}",
            latex: "v = \\frac{\\omega}{k}",
            description: "From wave equation",
            variables: [],
            derivedFrom: "wave-number",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[k] = rad/m, [ω] = rad/s",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing particle velocity with wave velocity",
            correct: "Wave velocity = λf. Particle velocity = dy/dt (depends on position in wave)",
            whyItHappens: "Both called \"velocity\"",
            neetExample: "NEET 2020: Maximum particle velocity in a wave"
          },
          {
            mistake: "Wrong direction from wave equation sign",
            correct: "y = A sin(kx - ωt) travels +x direction. y = A sin(kx + ωt) travels -x direction.",
            whyItHappens: "Sign convention confusion",
            neetExample: "NEET 2019: Direction of wave from given equation"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate v, f, or λ",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Identify wave type (transverse/longitudinal)",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Wave equation interpretation",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "v = fλ calculations",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Wave direction from equation",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Wave vs particle motion",
            analogy: "Domino chain",
            mapping: "Dominoes fall but don't travel. The pattern travels - that's the wave."
          }
        ],
        questions: [],
      },
      {
        id: "wave-speed-media",
        name: "Speed of Wave in Different Media",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Wave speed depends on medium properties. In strings: v = √(T/μ). In gases: v = √(γP/ρ) = √(γRT/M). Wave speed increases with tension and elasticity, decreases with density.",
          realWorldAnalogy: "Snapping a tight rope vs loose rope - tight rope (more tension) transmits the snap faster. Similarly, stiffer materials (higher elasticity) transmit sound faster.",
          keyPoints: [
            "Transverse wave in string: v = √(T/μ)",
            "Sound in gas: v = √(γP/ρ) = √(γRT/M)",
            "Sound in solid: v = √(Y/ρ) where Y is Young's modulus",
            "v in solid > v in liquid > v in gas (usually)",
            "v in gas ∝ √T (temperature effect)",
            "v in string ∝ √T (tension effect)"
          ],
          prerequisites: ["wave-motion-basics"]
        },
        formulas: [
          {
            id: "string-wave-speed",
            name: "Wave Speed in String",
            category: "base",
            formula: "v = √(T/μ)",
            latex: "v = \\sqrt{\\frac{T}{\\mu}}",
            description: "Speed of transverse wave in a stretched string",
            variables: [
              {
                symbol: "v",
                meaning: "Wave speed",
                unit: "m/s",
                typical_values: "10-1000 m/s"
              },
              {
                symbol: "T",
                meaning: "Tension in string",
                unit: "N",
                typical_values: "1-1000 N"
              },
              {
                symbol: "μ",
                meaning: "Linear mass density",
                unit: "kg/m",
                typical_values: "0.001-0.1 kg/m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For same material: v ∝ 1/√(cross-section area)", "Tighter string → higher pitch (music)"],
            dimensionalCheck: "[v] = √([T]/[μ]) = √(N/(kg/m)) = √(m²/s²) = m/s ✓",
          },
          {
            id: "sound-speed-gas",
            name: "Speed of Sound in Gas",
            category: "base",
            formula: "v = √(γP/ρ) = √(γRT/M)",
            latex: "v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}",
            description: "Speed of sound in an ideal gas",
            variables: [
              {
                symbol: "v",
                meaning: "Sound speed",
                unit: "m/s",
                typical_values: "340 m/s in air at 20°C"
              },
              {
                symbol: "γ",
                meaning: "Ratio Cp/Cv",
                unit: "dimensionless",
                typical_values: "1.4 for air"
              },
              {
                symbol: "P",
                meaning: "Pressure",
                unit: "Pa",
                typical_values: "10⁵ Pa"
              },
              {
                symbol: "ρ",
                meaning: "Density",
                unit: "kg/m³",
                typical_values: "1.2 kg/m³ for air"
              },
              {
                symbol: "M",
                meaning: "Molar mass",
                unit: "kg/mol",
                typical_values: "0.029 kg/mol for air"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["v in air at 0°C ≈ 331 m/s", "v increases by ~0.6 m/s per °C rise", "v is independent of pressure (P/ρ = RT/M = constant)"],
            dimensionalCheck: "[v] = √([P]/[ρ]) = √(Pa/(kg/m³)) = m/s ✓",
          },
          {
            id: "sound-temperature",
            name: "Speed of Sound vs Temperature",
            category: "derived",
            formula: "v_T = v_0√(T/273) ≈ v_0 + 0.6t",
            latex: "v_T = v_0\\sqrt{\\frac{T}{273}} \\approx 331 + 0.6t",
            description: "Speed of sound in air as function of temperature",
            variables: [
              {
                symbol: "v_T",
                meaning: "Speed at temperature T (K)",
                unit: "m/s",
                typical_values: "331-360 m/s"
              },
              {
                symbol: "v_0",
                meaning: "Speed at 0°C = 273K",
                unit: "m/s",
                typical_values: "331 m/s"
              },
              {
                symbol: "t",
                meaning: "Temperature in °C",
                unit: "°C",
                typical_values: "0-50°C"
              }
            ],
            derivedFrom: "sound-speed-gas",
            applications: [],
            specialCases: ["Linear approximation valid for small temperature changes", "For precise: use √(T) relationship"],
            dimensionalCheck: "[v] = m/s",
          },
          {
            id: "effect-of-tension",
            name: "Effect of tension",
            category: "derived",
            formula: "v \\propto \\sqrt{T}",
            latex: "v \\propto \\sqrt{T}",
            description: "Double T → v increases by √2",
            variables: [],
            derivedFrom: "string-wave-speed",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([T]/[μ]) = √(N/(kg/m)) = √(m²/s²) = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "effect-of",
            name: "Effect of μ",
            category: "derived",
            formula: "v \\propto \\frac{1}{\\sqrt{\\mu}}",
            latex: "v \\propto \\frac{1}{\\sqrt{\\mu}}",
            description: "Thicker string → slower",
            variables: [],
            derivedFrom: "string-wave-speed",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([T]/[μ]) = √(N/(kg/m)) = √(m²/s²) = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "in-terms-of-mass-and-length",
            name: "In terms of mass and length",
            category: "derived",
            formula: "v = \\sqrt{\\frac{TL}{m}}",
            latex: "v = \\sqrt{\\frac{TL}{m}}",
            description: "μ = m/L",
            variables: [],
            derivedFrom: "string-wave-speed",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([T]/[μ]) = √(N/(kg/m)) = √(m²/s²) = m/s ✓",
            neet_frequency: "medium",
          },
          {
            id: "temperature-effect",
            name: "Temperature effect",
            category: "derived",
            formula: "v \\propto \\sqrt{T}",
            latex: "v \\propto \\sqrt{T}",
            description: "At constant P, ρ changes with T",
            variables: [],
            derivedFrom: "sound-speed-gas",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([P]/[ρ]) = √(Pa/(kg/m³)) = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "effect-of-humidity",
            name: "Effect of humidity",
            category: "derived",
            formula: "v_{moist} > v_{dry}",
            latex: "v_{moist} > v_{dry}",
            description: "Moist air is less dense",
            variables: [],
            derivedFrom: "sound-speed-gas",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([P]/[ρ]) = √(Pa/(kg/m³)) = m/s ✓",
            neet_frequency: "medium",
          },
          {
            id: "compare-gases",
            name: "Compare gases",
            category: "derived",
            formula: "\\frac{v_1}{v_2} = \\sqrt{\\frac{\\gamma_1 M_2}{\\gamma_2 M_1}}",
            latex: "\\frac{v_1}{v_2} = \\sqrt{\\frac{\\gamma_1 M_2}{\\gamma_2 M_1}}",
            description: "At same T",
            variables: [],
            derivedFrom: "sound-speed-gas",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = √([P]/[ρ]) = √(Pa/(kg/m³)) = m/s ✓",
            neet_frequency: "high",
          },
          {
            id: "at-20c",
            name: "At 20°C",
            category: "derived",
            formula: "v = 331 + 0.6(20) = 343 \\text{ m/s}",
            latex: "v = 331 + 0.6(20) = 343 \\text{ m/s}",
            description: "Room temperature",
            variables: [],
            derivedFrom: "sound-temperature",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "high",
          },
          {
            id: "at-27c",
            name: "At 27°C",
            category: "derived",
            formula: "v = 331 + 0.6(27) \\approx 347 \\text{ m/s}",
            latex: "v = 331 + 0.6(27) \\approx 347 \\text{ m/s}",
            description: "Common exam temperature",
            variables: [],
            derivedFrom: "sound-temperature",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking sound speed increases with pressure",
            correct: "At constant T, v is independent of P. When P increases, ρ also increases proportionally.",
            whyItHappens: "Intuition says higher pressure = faster, but P/ρ stays constant",
            neetExample: "NEET 2020: Effect of doubling pressure on sound speed"
          },
          {
            mistake: "Confusing μ (linear mass density) with ρ (volume density)",
            correct: "μ = mass/length (kg/m) for strings. ρ = mass/volume (kg/m³) for gases.",
            whyItHappens: "Similar symbol, both are densities",
            neetExample: "NEET 2019: Wave speed in string given mass and length"
          },
          {
            mistake: "Using Celsius instead of Kelvin in v ∝ √T",
            correct: "v ∝ √T requires T in Kelvin. Or use approximate formula v ≈ 331 + 0.6t for °C.",
            whyItHappens: "Forgetting that temperature must be absolute",
            neetExample: "NEET 2021: Compare sound speed at 27°C and 127°C"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Wave speed in string",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Sound speed in gas",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Temperature effect on sound speed",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare speeds in different media",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "v = √(T/μ) for string",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Sound speed vs temperature",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Compare v in different gases",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Tension effect on wave speed",
            analogy: "Taut vs loose rope",
            mapping: "Tight rope snaps back faster - higher tension = faster wave"
          },
          {
            concept: "Temperature effect on sound",
            analogy: "Molecules as messenger runners",
            mapping: "Hotter gas = faster molecules = message delivered faster"
          }
        ],
        questions: [],
      },
      {
        id: "superposition-interference",
        name: "Superposition and Interference of Waves",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "When two waves meet, their displacements add (superposition). Constructive interference occurs when waves are in phase (path difference = nλ), destructive when out of phase (path difference = (n+½)λ). Resultant amplitude depends on individual amplitudes and phase difference.",
          realWorldAnalogy: "Two people shaking a rope from opposite ends - waves meet in middle. If they push together, big wave (constructive). If one pushes while other pulls, waves cancel (destructive).",
          keyPoints: [
            "Superposition: y = y₁ + y₂ (displacements add)",
            "Constructive: Δφ = 0, 2π, 4π... (path diff = nλ)",
            "Destructive: Δφ = π, 3π, 5π... (path diff = (n+½)λ)",
            "Resultant amplitude: A = √(A₁² + A₂² + 2A₁A₂cosφ)",
            "For equal amplitudes: A = 2A₀cos(φ/2)",
            "Phase difference: φ = (2π/λ) × path difference"
          ],
          prerequisites: ["wave-motion-basics"]
        },
        formulas: [
          {
            id: "resultant-amplitude",
            name: "Resultant Amplitude of Interference",
            category: "base",
            formula: "A = √(A₁² + A₂² + 2A₁A₂cosφ)",
            latex: "A = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos\\phi}",
            description: "Resultant amplitude when two waves of same frequency superpose",
            variables: [
              {
                symbol: "A",
                meaning: "Resultant amplitude",
                unit: "m",
                typical_values: "0 to A₁+A₂"
              },
              {
                symbol: "A₁, A₂",
                meaning: "Individual amplitudes",
                unit: "m",
                typical_values: "Given"
              },
              {
                symbol: "φ",
                meaning: "Phase difference",
                unit: "rad",
                typical_values: "0 to 2π"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For A₁ = A₂: A ranges from 0 to 2A₀", "Intensity ∝ A², so I_max/I_min = ((A₁+A₂)/(A₁-A₂))²"],
            dimensionalCheck: "[A] = m",
          },
          {
            id: "phase-path-relation",
            name: "Phase and Path Difference Relation",
            category: "base",
            formula: "φ = (2π/λ) × Δx",
            latex: "\\phi = \\frac{2\\pi}{\\lambda} \\times \\Delta x",
            description: "Phase difference corresponding to a given path difference",
            variables: [
              {
                symbol: "φ",
                meaning: "Phase difference",
                unit: "rad",
                typical_values: "0 to 2π per wavelength"
              },
              {
                symbol: "Δx",
                meaning: "Path difference",
                unit: "m",
                typical_values: "Fraction of λ"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "Given"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Path diff of λ → phase diff of 2π (full cycle)", "Path diff of λ/2 → phase diff of π (half cycle)"],
            dimensionalCheck: "φ is dimensionless (radians)",
          },
          {
            id: "intensity-interference",
            name: "Intensity in Interference",
            category: "derived",
            formula: "I = I₁ + I₂ + 2√(I₁I₂)cosφ",
            latex: "I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\phi",
            description: "Resultant intensity when two coherent waves interfere",
            variables: [
              {
                symbol: "I",
                meaning: "Resultant intensity",
                unit: "W/m²",
                typical_values: "0 to I_max"
              },
              {
                symbol: "I₁, I₂",
                meaning: "Individual intensities",
                unit: "W/m²",
                typical_values: "Given"
              }
            ],
            derivedFrom: "resultant-amplitude",
            applications: [],
            specialCases: ["I ∝ A²", "For equal I₀: I_max = 4I₀, I_min = 0"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "maximum-constructive",
            name: "Maximum (constructive)",
            category: "derived",
            formula: "A_{max} = A_1 + A_2 \\text{ when } \\phi = 0, 2\\pi...",
            latex: "A_{max} = A_1 + A_2 \\text{ when } \\phi = 0, 2\\pi...",
            description: "In phase",
            variables: [],
            derivedFrom: "resultant-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "high",
          },
          {
            id: "minimum-destructive",
            name: "Minimum (destructive)",
            category: "derived",
            formula: "A_{min} = |A_1 - A_2| \\text{ when } \\phi = \\pi, 3\\pi...",
            latex: "A_{min} = |A_1 - A_2| \\text{ when } \\phi = \\pi, 3\\pi...",
            description: "Out of phase",
            variables: [],
            derivedFrom: "resultant-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "high",
          },
          {
            id: "equal-amplitudes",
            name: "Equal amplitudes",
            category: "derived",
            formula: "A = 2A_0\\cos(\\phi/2)",
            latex: "A = 2A_0\\cos(\\phi/2)",
            description: "When A₁ = A₂ = A₀",
            variables: [],
            derivedFrom: "resultant-amplitude",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = m",
            neet_frequency: "high",
          },
          {
            id: "constructive",
            name: "Constructive",
            category: "derived",
            formula: "\\Delta x = n\\lambda \\Rightarrow \\phi = 2n\\pi",
            latex: "\\Delta x = n\\lambda \\Rightarrow \\phi = 2n\\pi",
            description: "n = 0, 1, 2...",
            variables: [],
            derivedFrom: "phase-path-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "φ is dimensionless (radians)",
            neet_frequency: "high",
          },
          {
            id: "destructive",
            name: "Destructive",
            category: "derived",
            formula: "\\Delta x = (n+\\frac{1}{2})\\lambda \\Rightarrow \\phi = (2n+1)\\pi",
            latex: "\\Delta x = (n+\\frac{1}{2})\\lambda \\Rightarrow \\phi = (2n+1)\\pi",
            description: "n = 0, 1, 2...",
            variables: [],
            derivedFrom: "phase-path-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "φ is dimensionless (radians)",
            neet_frequency: "high",
          },
          {
            id: "maximum-intensity",
            name: "Maximum intensity",
            category: "derived",
            formula: "I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2",
            latex: "I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2",
            description: "When φ = 0",
            variables: [],
            derivedFrom: "intensity-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "minimum-intensity",
            name: "Minimum intensity",
            category: "derived",
            formula: "I_{min} = (\\sqrt{I_1} - \\sqrt{I_2})^2",
            latex: "I_{min} = (\\sqrt{I_1} - \\sqrt{I_2})^2",
            description: "When φ = π",
            variables: [],
            derivedFrom: "intensity-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "equal-intensities",
            name: "Equal intensities",
            category: "derived",
            formula: "I = 4I_0\\cos^2(\\phi/2)",
            latex: "I = 4I_0\\cos^2(\\phi/2)",
            description: "When I₁ = I₂ = I₀",
            variables: [],
            derivedFrom: "intensity-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Adding intensities instead of amplitudes for interference",
            correct: "First find resultant amplitude, then I ∝ A². Or use I = I₁ + I₂ + 2√(I₁I₂)cosφ.",
            whyItHappens: "Energy conservation intuition - but interference redistributes energy",
            neetExample: "NEET 2020: Two waves of intensity I interfere, find I_max"
          },
          {
            mistake: "Wrong condition for constructive/destructive interference",
            correct: "Constructive: path diff = nλ (φ = 2nπ). Destructive: path diff = (n+½)λ (φ = (2n+1)π).",
            whyItHappens: "Mixing up the conditions",
            neetExample: "NEET 2019: Path difference for first destructive interference"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Resultant amplitude calculation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Path difference for constructive/destructive",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Intensity ratio problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Resultant amplitude from A₁, A₂, φ",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Constructive/destructive conditions",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "I_max/I_min ratio",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Constructive interference",
            analogy: "Synchronized swimmers",
            mapping: "Moving together creates bigger splash"
          },
          {
            concept: "Destructive interference",
            analogy: "Noise-canceling headphones",
            mapping: "Out-of-phase sound waves cancel each other"
          }
        ],
        questions: [],
      },
      {
        id: "standing-waves",
        name: "Standing Waves in Strings and Pipes",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Standing waves form when two waves of same frequency travel in opposite directions. Nodes (zero displacement) and antinodes (maximum displacement) form at fixed positions. In strings and pipes, only certain frequencies (harmonics) can form standing waves based on boundary conditions.",
          realWorldAnalogy: "Guitar string plucked in middle - the string vibrates but the ends stay fixed. The pattern doesn't travel along the string - it 'stands' in place.",
          keyPoints: [
            "Standing wave = superposition of two identical waves traveling opposite directions",
            "Nodes: points of zero displacement (Δφ = π)",
            "Antinodes: points of maximum displacement (Δφ = 0)",
            "Distance between adjacent nodes = λ/2",
            "Fixed end → node, free/open end → antinode",
            "Only resonant frequencies form standing waves"
          ],
          prerequisites: ["superposition-interference", "wave-speed-media"]
        },
        formulas: [
          {
            id: "string-harmonics",
            name: "Harmonics in String Fixed at Both Ends",
            category: "base",
            formula: "f_n = n(v/2L) = (n/2L)√(T/μ)",
            latex: "f_n = \\frac{nv}{2L} = \\frac{n}{2L}\\sqrt{\\frac{T}{\\mu}}, \\quad n = 1, 2, 3...",
            description: "Allowed frequencies for standing waves in a string with fixed ends",
            variables: [
              {
                symbol: "f_n",
                meaning: "Frequency of nth harmonic",
                unit: "Hz",
                typical_values: "100-1000 Hz"
              },
              {
                symbol: "n",
                meaning: "Harmonic number",
                unit: "dimensionless",
                typical_values: "1, 2, 3..."
              },
              {
                symbol: "L",
                meaning: "Length of string",
                unit: "m",
                typical_values: "0.1-2 m"
              },
              {
                symbol: "v",
                meaning: "Wave speed",
                unit: "m/s",
                typical_values: "√(T/μ)"
              }
            ],
            derivedFrom: "string-wave-speed",
            applications: [],
            specialCases: ["Fundamental has 1 antinode, 2 nodes (at ends)", "nth harmonic has n antinodes, (n+1) nodes"],
            dimensionalCheck: "[f] = Hz",
          },
          {
            id: "closed-pipe-harmonics",
            name: "Harmonics in Closed Pipe (One End Closed)",
            category: "base",
            formula: "f_n = n(v/4L), n = 1, 3, 5... (odd only)",
            latex: "f_n = \\frac{nv}{4L}, \\quad n = 1, 3, 5, 7...",
            description: "Only odd harmonics exist in a pipe closed at one end",
            variables: [
              {
                symbol: "f_n",
                meaning: "Frequency of nth harmonic",
                unit: "Hz",
                typical_values: "Odd multiples of f₁"
              },
              {
                symbol: "n",
                meaning: "Harmonic number (odd)",
                unit: "dimensionless",
                typical_values: "1, 3, 5, 7..."
              },
              {
                symbol: "L",
                meaning: "Length of pipe",
                unit: "m",
                typical_values: "0.1-2 m"
              }
            ],
            derivedFrom: "wave-equation",
            applications: [],
            specialCases: ["Node at closed end, antinode at open end", "Only odd harmonics: 1, 3, 5, 7...", "No even harmonics possible"],
            dimensionalCheck: "[f] = Hz",
          },
          {
            id: "open-pipe-harmonics",
            name: "Harmonics in Open Pipe (Both Ends Open)",
            category: "base",
            formula: "f_n = n(v/2L), n = 1, 2, 3...",
            latex: "f_n = \\frac{nv}{2L}, \\quad n = 1, 2, 3...",
            description: "All harmonics present in pipe open at both ends",
            variables: [
              {
                symbol: "f_n",
                meaning: "Frequency of nth harmonic",
                unit: "Hz",
                typical_values: "All multiples of f₁"
              },
              {
                symbol: "n",
                meaning: "Harmonic number",
                unit: "dimensionless",
                typical_values: "1, 2, 3, 4..."
              }
            ],
            derivedFrom: "wave-equation",
            applications: [],
            specialCases: ["Antinodes at both open ends", "All harmonics: 1, 2, 3, 4...", "Same as string fixed at both ends"],
            dimensionalCheck: "[f] = Hz",
          },
          {
            id: "sonometer-laws",
            name: "Laws of Vibrating Strings (Sonometer)",
            category: "derived",
            formula: "f ∝ 1/L, f ∝ √T, f ∝ 1/√μ",
            latex: "f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}} \\Rightarrow f \\propto \\frac{1}{L}, \\sqrt{T}, \\frac{1}{\\sqrt{\\mu}}",
            description: "Three laws governing frequency of vibrating strings",
            variables: [],
            derivedFrom: "string-harmonics",
            applications: [],
            specialCases: ["Used in sonometer experiments", "Explains guitar string tuning"],
            dimensionalCheck: "All relationships dimensionally consistent",
          },
          {
            id: "fundamental-frequency",
            name: "Fundamental frequency",
            category: "derived",
            formula: "f_1 = \\frac{v}{2L} = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}",
            latex: "f_1 = \\frac{v}{2L} = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}",
            description: "First harmonic (n=1)",
            variables: [],
            derivedFrom: "string-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "wavelength",
            name: "Wavelength",
            category: "derived",
            formula: "\\lambda_n = \\frac{2L}{n}",
            latex: "\\lambda_n = \\frac{2L}{n}",
            description: "nth harmonic wavelength",
            variables: [],
            derivedFrom: "string-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "ratio",
            name: "Ratio",
            category: "derived",
            formula: "f_1 : f_2 : f_3 = 1 : 2 : 3",
            latex: "f_1 : f_2 : f_3 = 1 : 2 : 3",
            description: "All harmonics present",
            variables: [],
            derivedFrom: "string-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "fundamental",
            name: "Fundamental",
            category: "derived",
            formula: "f_1 = \\frac{v}{4L}",
            latex: "f_1 = \\frac{v}{4L}",
            description: "Lowest frequency",
            variables: [],
            derivedFrom: "closed-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "next-harmonic",
            name: "Next harmonic",
            category: "derived",
            formula: "f_3 = \\frac{3v}{4L} = 3f_1",
            latex: "f_3 = \\frac{3v}{4L} = 3f_1",
            description: "Third harmonic (no second!)",
            variables: [],
            derivedFrom: "closed-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "wavelength-2",
            name: "Wavelength",
            category: "derived",
            formula: "\\lambda_n = \\frac{4L}{n}",
            latex: "\\lambda_n = \\frac{4L}{n}",
            description: "n = 1, 3, 5...",
            variables: [],
            derivedFrom: "closed-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "medium",
          },
          {
            id: "fundamental-2",
            name: "Fundamental",
            category: "derived",
            formula: "f_1 = \\frac{v}{2L}",
            latex: "f_1 = \\frac{v}{2L}",
            description: "Same formula as string",
            variables: [],
            derivedFrom: "open-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "compare-to-closed-pipe",
            name: "Compare to closed pipe",
            category: "derived",
            formula: "f_{open} = 2f_{closed}",
            latex: "f_{open} = 2f_{closed}",
            description: "Same length, fundamental",
            variables: [],
            derivedFrom: "open-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "high",
          },
          {
            id: "wavelength-3",
            name: "Wavelength",
            category: "derived",
            formula: "\\lambda_n = \\frac{2L}{n}",
            latex: "\\lambda_n = \\frac{2L}{n}",
            description: "Same as string",
            variables: [],
            derivedFrom: "open-pipe-harmonics",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f] = Hz",
            neet_frequency: "medium",
          },
          {
            id: "law-of-length",
            name: "Law of length",
            category: "derived",
            formula: "f \\propto \\frac{1}{L}",
            latex: "f \\propto \\frac{1}{L}",
            description: "At constant T, μ",
            variables: [],
            derivedFrom: "sonometer-laws",
            applications: [],
            specialCases: [],
            dimensionalCheck: "All relationships dimensionally consistent",
            neet_frequency: "high",
          },
          {
            id: "law-of-tension",
            name: "Law of tension",
            category: "derived",
            formula: "f \\propto \\sqrt{T}",
            latex: "f \\propto \\sqrt{T}",
            description: "At constant L, μ",
            variables: [],
            derivedFrom: "sonometer-laws",
            applications: [],
            specialCases: [],
            dimensionalCheck: "All relationships dimensionally consistent",
            neet_frequency: "high",
          },
          {
            id: "law-of-mass",
            name: "Law of mass",
            category: "derived",
            formula: "f \\propto \\frac{1}{\\sqrt{\\mu}}",
            latex: "f \\propto \\frac{1}{\\sqrt{\\mu}}",
            description: "At constant L, T",
            variables: [],
            derivedFrom: "sonometer-laws",
            applications: [],
            specialCases: [],
            dimensionalCheck: "All relationships dimensionally consistent",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting only odd harmonics in closed pipe",
            correct: "Closed pipe: 1, 3, 5... (v/4L, 3v/4L, 5v/4L). Open pipe: 1, 2, 3... (v/2L, v/L, 3v/2L).",
            whyItHappens: "Not understanding boundary conditions",
            neetExample: "NEET 2020: Second overtone frequency of closed pipe"
          },
          {
            mistake: "Confusing harmonic number with overtone number",
            correct: "Overtone = harmonic - 1 for open pipe. For closed pipe: 1st overtone = 3rd harmonic.",
            whyItHappens: "Different naming conventions",
            neetExample: "NEET 2019: First overtone of closed pipe = 3f₁"
          },
          {
            mistake: "Using v/4L for open pipe",
            correct: "Closed pipe: v/4L. Open pipe: v/2L. Open pipe fundamental is twice that of closed.",
            whyItHappens: "Mixing up the two formulas",
            neetExample: "NEET 2021: Compare fundamentals of open and closed pipes of same length"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Fundamental frequency of string/pipe",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Overtone frequencies",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Compare open and closed pipes",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Node and antinode positions",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Closed vs open pipe frequencies",
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
            pattern: "String harmonics calculation",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Overtone identification",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Harmonics in string",
            analogy: "Jumping rope modes",
            mapping: "Fundamental: one hump. Second harmonic: two humps, etc."
          },
          {
            concept: "Closed vs open pipe",
            analogy: "Blowing across bottle",
            mapping: "Closed bottle (one end): lower pitch. Open tube: higher pitch"
          }
        ],
        questions: [],
      },
      {
        id: "beats",
        name: "Beats Phenomenon",
        weightage: 0.5,
        difficulty: "easy",
        theory: {
          summary: "When two sound waves of slightly different frequencies superpose, the resultant intensity varies periodically - this is called beats. Beat frequency equals the difference of the two frequencies. Used to tune musical instruments.",
          realWorldAnalogy: "Two fans running at slightly different speeds - sometimes blades align (loud), sometimes they're offset (quiet). This alternating loud-quiet pattern is like beats in sound.",
          keyPoints: [
            "Beat frequency = |f₁ - f₂|",
            "Beats occur when two frequencies are close (within ~10 Hz)",
            "Resultant frequency = average of two frequencies",
            "Waxing and waning of sound intensity",
            "Used for tuning: beats disappear when f₁ = f₂",
            "Maximum beats heard: ~10 per second (beyond that, not distinguishable)"
          ],
          prerequisites: ["superposition-interference"]
        },
        formulas: [
          {
            id: "beat-frequency",
            name: "Beat Frequency",
            category: "base",
            formula: "f_beat = |f₁ - f₂|",
            latex: "f_{beat} = |f_1 - f_2|",
            description: "Number of beats heard per second",
            variables: [
              {
                symbol: "f_beat",
                meaning: "Beat frequency",
                unit: "Hz",
                typical_values: "1-10 Hz (audible)"
              },
              {
                symbol: "f₁, f₂",
                meaning: "Frequencies of two sources",
                unit: "Hz",
                typical_values: "Close values"
              }
            ],
            derivedFrom: "superposition-interference",
            applications: [],
            specialCases: ["f_beat = 0 when frequencies are equal", "Only distinguishable if f_beat < ~10 Hz"],
            dimensionalCheck: "[f_beat] = Hz",
          },
          {
            id: "beat-resultant",
            name: "Resultant Wave in Beats",
            category: "derived",
            formula: "y = 2A cos((f₁-f₂)πt) sin((f₁+f₂)πt)",
            latex: "y = 2A\\cos(2\\pi\\frac{f_1-f_2}{2}t)\\sin(2\\pi\\frac{f_1+f_2}{2}t)",
            description: "Resultant wave showing amplitude modulation",
            variables: [
              {
                symbol: "y",
                meaning: "Resultant displacement",
                unit: "m",
                typical_values: "-2A to 2A"
              },
              {
                symbol: "(f₁+f₂)/2",
                meaning: "Carrier frequency",
                unit: "Hz",
                typical_values: "Average frequency"
              }
            ],
            derivedFrom: "superposition-interference",
            applications: [],
            specialCases: ["Amplitude varies with cos((f₁-f₂)πt)", "Sound frequency is (f₁+f₂)/2"],
            dimensionalCheck: "[y] = m",
          },
          {
            id: "find-unknown-frequency",
            name: "Find unknown frequency",
            category: "derived",
            formula: "f_2 = f_1 \\pm f_{beat}",
            latex: "f_2 = f_1 \\pm f_{beat}",
            description: "Two possible values",
            variables: [],
            derivedFrom: "beat-frequency",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f_beat] = Hz",
            neet_frequency: "high",
          },
          {
            id: "tuning",
            name: "Tuning",
            category: "derived",
            formula: "f_{beat} = 0 \\Rightarrow f_1 = f_2",
            latex: "f_{beat} = 0 \\Rightarrow f_1 = f_2",
            description: "Perfect tune when beats vanish",
            variables: [],
            derivedFrom: "beat-frequency",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f_beat] = Hz",
            neet_frequency: "medium",
          },
          {
            id: "apparent-frequency-heard",
            name: "Apparent frequency heard",
            category: "derived",
            formula: "f = \\frac{f_1 + f_2}{2}",
            latex: "f = \\frac{f_1 + f_2}{2}",
            description: "Average of two",
            variables: [],
            derivedFrom: "beat-resultant",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[y] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting absolute value in beat frequency",
            correct: "f_beat = |f₁ - f₂|. Order doesn't matter - beat frequency is always positive.",
            whyItHappens: "Simple subtraction without considering sign",
            neetExample: "NEET 2020: Beats between 256 Hz and 260 Hz = 4 Hz"
          },
          {
            mistake: "Giving only one answer when asked for unknown frequency",
            correct: "If f_beat = 4 Hz and f₁ = 256 Hz, then f₂ = 252 Hz OR 260 Hz (two possibilities).",
            whyItHappens: "Forgetting that |f₁ - f₂| gives two solutions",
            neetExample: "NEET 2019: Unknown fork gives 5 beats with 440 Hz fork"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate beat frequency",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find unknown frequency from beats",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Effect of waxing/loading on tuning fork",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Beat frequency calculation",
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
            pattern: "Unknown frequency with two possibilities",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Loading/waxing effect on frequency",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Beats",
            analogy: "Two fans with slightly different speeds",
            mapping: "Sometimes blades align (constructive), sometimes oppose (destructive)"
          },
          {
            concept: "Tuning with beats",
            analogy: "Synchronizing pendulum clocks",
            mapping: "When frequencies match, they swing together perfectly - no beats"
          }
        ],
        questions: [],
      },
      {
        id: "doppler-effect",
        name: "Doppler Effect in Sound",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "When source or observer moves relative to medium, the observed frequency differs from source frequency. Approaching → higher frequency (blue shift). Receding → lower frequency (red shift). The Doppler formula accounts for both source and observer motion.",
          realWorldAnalogy: "Ambulance siren sounds higher-pitched when approaching (waves compressed) and lower when moving away (waves stretched). Racing car engine sound changes as it passes by.",
          keyPoints: [
            "Approaching: observed frequency increases",
            "Receding: observed frequency decreases",
            "f' = f(v ± v_o)/(v ∓ v_s)",
            "Upper signs for approach, lower for recede",
            "v = speed of sound, v_s = source speed, v_o = observer speed",
            "All speeds measured relative to medium (air)"
          ],
          prerequisites: ["wave-motion-basics", "wave-speed-media"]
        },
        formulas: [
          {
            id: "doppler-general",
            name: "General Doppler Effect Formula",
            category: "base",
            formula: "f' = f(v ± v_o)/(v ∓ v_s)",
            latex: "f' = f\\frac{v \\pm v_o}{v \\mp v_s}",
            description: "Apparent frequency when source and/or observer move",
            variables: [
              {
                symbol: "f'",
                meaning: "Observed/apparent frequency",
                unit: "Hz",
                typical_values: "Higher or lower than f"
              },
              {
                symbol: "f",
                meaning: "Source frequency",
                unit: "Hz",
                typical_values: "Given"
              },
              {
                symbol: "v",
                meaning: "Speed of sound in medium",
                unit: "m/s",
                typical_values: "340 m/s in air"
              },
              {
                symbol: "v_o",
                meaning: "Observer velocity",
                unit: "m/s",
                typical_values: "0-100 m/s"
              },
              {
                symbol: "v_s",
                meaning: "Source velocity",
                unit: "m/s",
                typical_values: "0-100 m/s"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Numerator: + for observer moving toward source", "Denominator: - for source moving toward observer", "v_s < v always (source slower than sound)"],
            dimensionalCheck: "[f'] = Hz",
          },
          {
            id: "doppler-approaching",
            name: "Both Approaching",
            category: "derived",
            formula: "f' = f(v + v_o)/(v - v_s)",
            latex: "f' = f\\frac{v + v_o}{v - v_s}",
            description: "When both source and observer approach each other",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: ["f' > f (apparent frequency higher)", "If v_s = v_o approaching: f' = f(v+v_o)/(v-v_o)"],
            dimensionalCheck: "[f'] = Hz",
          },
          {
            id: "doppler-receding",
            name: "Both Receding",
            category: "derived",
            formula: "f' = f(v - v_o)/(v + v_s)",
            latex: "f' = f\\frac{v - v_o}{v + v_s}",
            description: "When both source and observer move apart",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: ["f' < f (apparent frequency lower)"],
            dimensionalCheck: "[f'] = Hz",
          },
          {
            id: "doppler-wavelength",
            name: "Apparent Wavelength",
            category: "derived",
            formula: "λ' = λ(v ∓ v_s)/v = (v ∓ v_s)/f",
            latex: "\\lambda' = \\frac{v \\mp v_s}{f}",
            description: "Wavelength changes only due to source motion",
            variables: [
              {
                symbol: "λ'",
                meaning: "Apparent wavelength",
                unit: "m",
                typical_values: "Shorter or longer than λ"
              }
            ],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: ["Observer motion does NOT change wavelength in medium", "Only source motion changes λ"],
            dimensionalCheck: "[λ'] = m",
          },
          {
            id: "source-approaching-observer-stationary",
            name: "Source approaching, observer stationary",
            category: "derived",
            formula: "f' = f\\frac{v}{v - v_s}",
            latex: "f' = f\\frac{v}{v - v_s}",
            description: "f' > f",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "high",
          },
          {
            id: "source-receding-observer-stationary",
            name: "Source receding, observer stationary",
            category: "derived",
            formula: "f' = f\\frac{v}{v + v_s}",
            latex: "f' = f\\frac{v}{v + v_s}",
            description: "f' < f",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "high",
          },
          {
            id: "observer-approaching-source-stationary",
            name: "Observer approaching, source stationary",
            category: "derived",
            formula: "f' = f\\frac{v + v_o}{v}",
            latex: "f' = f\\frac{v + v_o}{v}",
            description: "f' > f",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "high",
          },
          {
            id: "observer-receding-source-stationary",
            name: "Observer receding, source stationary",
            category: "derived",
            formula: "f' = f\\frac{v - v_o}{v}",
            latex: "f' = f\\frac{v - v_o}{v}",
            description: "f' < f",
            variables: [],
            derivedFrom: "doppler-general",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "high",
          },
          {
            id: "maximum-shift",
            name: "Maximum shift",
            category: "derived",
            formula: "f'_{max} \\text{ when both approach}",
            latex: "f'_{max} \\text{ when both approach}",
            description: "Highest observed frequency",
            variables: [],
            derivedFrom: "doppler-approaching",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "medium",
          },
          {
            id: "minimum-shift",
            name: "Minimum shift",
            category: "derived",
            formula: "f'_{min} \\text{ when both recede}",
            latex: "f'_{min} \\text{ when both recede}",
            description: "Lowest observed frequency",
            variables: [],
            derivedFrom: "doppler-receding",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[f'] = Hz",
            neet_frequency: "medium",
          },
          {
            id: "source-approaching",
            name: "Source approaching",
            category: "derived",
            formula: "\\lambda' = \\frac{v - v_s}{f}",
            latex: "\\lambda' = \\frac{v - v_s}{f}",
            description: "Wavelength decreases",
            variables: [],
            derivedFrom: "doppler-wavelength",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[λ'] = m",
            neet_frequency: "medium",
          },
          {
            id: "source-receding",
            name: "Source receding",
            category: "derived",
            formula: "\\lambda' = \\frac{v + v_s}{f}",
            latex: "\\lambda' = \\frac{v + v_s}{f}",
            description: "Wavelength increases",
            variables: [],
            derivedFrom: "doppler-wavelength",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[λ'] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using wrong sign convention in Doppler formula",
            correct: "Rule: numerator + for observer approaching, denominator - for source approaching. Use SVSO: Source Velocity in denominator, Observer in numerator.",
            whyItHappens: "Complex sign convention",
            neetExample: "NEET 2020: Source moves toward stationary observer"
          },
          {
            mistake: "Confusing source and observer motion effects",
            correct: "Source motion changes wavelength. Observer motion changes frequency received. Effects are similar but physically different.",
            whyItHappens: "Both give frequency shift, so seem equivalent",
            neetExample: "NEET 2019: Why f' ≠ f even when v_s = v_o?"
          },
          {
            mistake: "Applying Doppler effect when there's no relative motion along line of sight",
            correct: "Doppler effect only for velocity component along source-observer line.",
            whyItHappens: "Not resolving velocity into components",
            neetExample: "NEET 2021: Source moves perpendicular to line joining source and observer"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Source moving, observer stationary",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Observer moving, source stationary",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Both source and observer moving",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Echo/reflection problems",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Source approaching/receding",
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
            pattern: "Observer approaching/receding",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Both moving same/opposite directions",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Approaching source",
            analogy: "Catching balls from a moving thrower",
            mapping: "Thrower running toward you → balls arrive faster (higher frequency)"
          },
          {
            concept: "Wavelength change",
            analogy: "Footprints of a running person",
            mapping: "Running forward → footprints closer together (shorter wavelength)"
          }
        ],
        questions: [],
      }
    ];