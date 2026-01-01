// Electromagnetic Waves - 3% weightage (Tier 2)
// NCERT Class 12, Chapter 8

export const electromagneticWavesTopics = [
      {
        id: "em-spectrum-properties",
        name: "Electromagnetic Spectrum and Wave Properties",
        weightage: 3,
        difficulty: "medium",
        theory: {
          summary: "Electromagnetic waves are self-propagating oscillations of electric and magnetic fields, traveling at speed c = 3×10⁸ m/s in vacuum. E and B are perpendicular to each other and to propagation direction. The EM spectrum ranges from radio waves (longest λ) to gamma rays (shortest λ). Maxwell's equations predict these waves, with displacement current as key concept.",
          realWorldAnalogy: "Like ripples on a pond, but in 3D space with both electric and magnetic 'ripples' supporting each other as they travel. No medium needed - they travel through empty space.",
          keyPoints: [
            "EM waves don't need medium (travel in vacuum)",
            "Speed in vacuum: c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s",
            "E ⊥ B ⊥ direction of propagation (transverse wave)",
            "E/B = c (ratio of amplitudes)",
            "Spectrum: Radio < Microwave < IR < Visible < UV < X-ray < Gamma",
            "Energy: E = hf (increases with frequency)",
            "Displacement current: Id = ε₀(dΦE/dt)",
            "All EM waves travel at same speed c in vacuum"
          ],
          prerequisites: ["faradays-laws", "amperes-law"]
        },
        formulas: [
          {
            id: "speed-em-waves",
            name: "Speed of Electromagnetic Waves",
            category: "base",
            formula: "c = 1/√(μ₀ε₀) = fλ",
            latex: "c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = f\\lambda = 3 \\times 10^8 \\text{ m/s}",
            description: "Speed of EM waves in vacuum derived from Maxwell's equations",
            variables: [
              {
                symbol: "c",
                meaning: "Speed of light in vacuum",
                unit: "m/s",
                typical_values: "3 × 10⁸ m/s"
              },
              {
                symbol: "μ₀",
                meaning: "Permeability of free space",
                unit: "H/m",
                typical_values: "4π × 10⁻⁷"
              },
              {
                symbol: "ε₀",
                meaning: "Permittivity of free space",
                unit: "F/m",
                typical_values: "8.85 × 10⁻¹²"
              },
              {
                symbol: "f",
                meaning: "Frequency",
                unit: "Hz",
                typical_values: "10³ to 10²⁰ Hz"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "10⁻¹² to 10⁶ m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["c is same for all EM waves in vacuum", "Frequency doesn't change in different media, wavelength does"],
            dimensionalCheck: "[c] = 1/√([H/m][F/m]) = m/s",
          },
          {
            id: "em-field-relation",
            name: "E and B Field Relation",
            category: "base",
            formula: "E/B = c, E₀/B₀ = c",
            latex: "\\frac{E}{B} = c, \\quad \\frac{E_0}{B_0} = c",
            description: "Ratio of electric and magnetic field amplitudes in EM wave",
            variables: [
              {
                symbol: "E",
                meaning: "Electric field",
                unit: "V/m",
                typical_values: "Varies with source"
              },
              {
                symbol: "B",
                meaning: "Magnetic field",
                unit: "T",
                typical_values: "E/c"
              },
              {
                symbol: "E₀, B₀",
                meaning: "Amplitude of fields",
                unit: "V/m, T",
                typical_values: "Peak values"
              }
            ],
            derivedFrom: "speed-em-waves",
            applications: [],
            specialCases: ["E and B are in phase (reach maxima together)", "E and B perpendicular to each other and to direction of travel"],
            dimensionalCheck: "[E/B] = (V/m)/(T) = (V/m)/(V·s/m²) = m/s = [c]",
          },
          {
            id: "displacement-current",
            name: "Displacement Current",
            category: "base",
            formula: "Id = ε₀(dΦE/dt)",
            latex: "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}",
            description: "Current-like term due to changing electric flux (Maxwell's addition)",
            variables: [
              {
                symbol: "Id",
                meaning: "Displacement current",
                unit: "A",
                typical_values: "Same as conduction current"
              },
              {
                symbol: "ΦE",
                meaning: "Electric flux",
                unit: "V·m",
                typical_values: "Depends on field"
              },
              {
                symbol: "dΦE/dt",
                meaning: "Rate of change of electric flux",
                unit: "V·m/s",
                typical_values: "Varies"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Displacement current = conduction current (continuity)", "Allows changing E field to produce B field"],
            dimensionalCheck: "[Id] = [ε₀][E][A]/[t] = A",
          },
          {
            id: "em-wave-intensity",
            name: "Intensity of EM Wave",
            category: "derived",
            formula: "I = ½ε₀cE₀² = E₀²/(2μ₀c)",
            latex: "I = \\frac{1}{2}\\varepsilon_0 c E_0^2 = \\frac{E_0^2}{2\\mu_0 c} = \\frac{c B_0^2}{2\\mu_0}",
            description: "Energy carried by EM wave per unit area per unit time",
            variables: [
              {
                symbol: "I",
                meaning: "Intensity",
                unit: "W/m²",
                typical_values: "Sunlight: ~1400 W/m²"
              }
            ],
            derivedFrom: "em-field-relation",
            applications: [],
            specialCases: ["I ∝ E₀² ∝ B₀²", "Energy equally divided between E and B fields"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "em-momentum",
            name: "Momentum of EM Waves",
            category: "derived",
            formula: "p = E/c = U/c",
            latex: "p = \\frac{E}{c} = \\frac{U}{c}",
            description: "EM waves carry momentum even though they have no mass",
            variables: [
              {
                symbol: "p",
                meaning: "Momentum",
                unit: "kg·m/s",
                typical_values: "Very small"
              },
              {
                symbol: "U",
                meaning: "Energy of wave",
                unit: "J",
                typical_values: "Varies"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Pressure on absorbing surface = I/c", "Pressure on reflecting surface = 2I/c"],
            dimensionalCheck: "[p] = [E]/[c] = J/(m/s) = kg·m/s",
          },
          {
            id: "in-medium",
            name: "In medium",
            category: "derived",
            formula: "v = \\frac{c}{n} = \\frac{1}{\\sqrt{\\mu \\varepsilon}}",
            latex: "v = \\frac{c}{n} = \\frac{1}{\\sqrt{\\mu \\varepsilon}}",
            description: "n = refractive index",
            variables: [],
            derivedFrom: "speed-em-waves",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[c] = 1/√([H/m][F/m]) = m/s",
            neet_frequency: "high",
          },
          {
            id: "wave-equation",
            name: "Wave equation",
            category: "derived",
            formula: "c = f\\lambda",
            latex: "c = f\\lambda",
            description: "Fundamental wave relation",
            variables: [],
            derivedFrom: "speed-em-waves",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[c] = 1/√([H/m][F/m]) = m/s",
            neet_frequency: "high",
          },
          {
            id: "wave-equation-2",
            name: "Wave equation",
            category: "derived",
            formula: "E = E_0\\sin(kx - \\omega t), B = B_0\\sin(kx - \\omega t)",
            latex: "E = E_0\\sin(kx - \\omega t), B = B_0\\sin(kx - \\omega t)",
            description: "In phase",
            variables: [],
            derivedFrom: "em-field-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E/B] = (V/m)/(T) = (V/m)/(V·s/m²) = m/s = [c]",
            neet_frequency: "high",
          },
          {
            id: "direction",
            name: "Direction",
            category: "derived",
            formula: "\\vec{E} \\times \\vec{B} \\parallel \\vec{c}",
            latex: "\\vec{E} \\times \\vec{B} \\parallel \\vec{c}",
            description: "Cross product gives direction of propagation",
            variables: [],
            derivedFrom: "em-field-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E/B] = (V/m)/(T) = (V/m)/(V·s/m²) = m/s = [c]",
            neet_frequency: "medium",
          },
          {
            id: "in-capacitor",
            name: "In capacitor",
            category: "derived",
            formula: "I_d = \\varepsilon_0 A \\frac{dE}{dt}",
            latex: "I_d = \\varepsilon_0 A \\frac{dE}{dt}",
            description: "Between capacitor plates",
            variables: [],
            derivedFrom: "displacement-current",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Id] = [ε₀][E][A]/[t] = A",
            neet_frequency: "high",
          },
          {
            id: "modified-amperes-law",
            name: "Modified Ampere's law",
            category: "derived",
            formula: "\\oint B \\cdot dl = \\mu_0(I_c + I_d)",
            latex: "\\oint B \\cdot dl = \\mu_0(I_c + I_d)",
            description: "Includes displacement current",
            variables: [],
            derivedFrom: "displacement-current",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Id] = [ε₀][E][A]/[t] = A",
            neet_frequency: "high",
          },
          {
            id: "energy-density",
            name: "Energy density",
            category: "derived",
            formula: "u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}",
            latex: "u = \\varepsilon_0 E^2 = \\frac{B^2}{\\mu_0}",
            description: "Energy per unit volume",
            variables: [],
            derivedFrom: "em-wave-intensity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "medium",
          },
          {
            id: "average-intensity",
            name: "Average intensity",
            category: "derived",
            formula: "I_{avg} = \\frac{1}{2}\\varepsilon_0 c E_0^2",
            latex: "I_{avg} = \\frac{1}{2}\\varepsilon_0 c E_0^2",
            description: "Time-averaged",
            variables: [],
            derivedFrom: "em-wave-intensity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "radiation-pressure-absorbing",
            name: "Radiation pressure (absorbing)",
            category: "derived",
            formula: "P = \\frac{I}{c}",
            latex: "P = \\frac{I}{c}",
            description: "Pressure on absorbing surface",
            variables: [],
            derivedFrom: "em-momentum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = [E]/[c] = J/(m/s) = kg·m/s",
            neet_frequency: "high",
          },
          {
            id: "radiation-pressure-reflecting",
            name: "Radiation pressure (reflecting)",
            category: "derived",
            formula: "P = \\frac{2I}{c}",
            latex: "P = \\frac{2I}{c}",
            description: "Double for perfect reflection",
            variables: [],
            derivedFrom: "em-momentum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[p] = [E]/[c] = J/(m/s) = kg·m/s",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking EM waves need a medium",
            correct: "EM waves can travel through vacuum. They are self-sustaining E and B field oscillations.",
            whyItHappens: "Generalizing from sound waves",
            neetExample: "NEET 2020: How do EM waves propagate through vacuum?"
          },
          {
            mistake: "Thinking frequency changes in different media",
            correct: "Frequency remains constant. Speed and wavelength change: v = fλ, so λ changes.",
            whyItHappens: "Confusing wavelength and frequency behavior",
            neetExample: "NEET 2019: Light enters glass from air, what remains constant?"
          },
          {
            mistake: "Wrong order of EM spectrum",
            correct: "RMIVUXG: Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma (increasing frequency)",
            whyItHappens: "Not memorizing the order",
            neetExample: "NEET 2021: Arrange EM waves in order of frequency"
          },
          {
            mistake: "Confusing radiation pressure for absorption vs reflection",
            correct: "Absorption: P = I/c. Reflection: P = 2I/c (double because momentum change is 2p).",
            whyItHappens: "Not considering momentum change direction",
            neetExample: "NEET 2020: Radiation pressure on a mirror vs black surface"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Speed of EM waves from μ₀ and ε₀",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "E and B amplitude ratio",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Intensity and radiation pressure",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "EM spectrum order and properties",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Displacement current problems",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Speed of EM waves (c = 1/√μ₀ε₀)",
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
            pattern: "EM spectrum order and properties",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "E/B = c relation",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          },
          {
            pattern: "Displacement current",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          },
          {
            pattern: "Radiation pressure",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        emSpectrum: [
          {
            type: "Radio waves",
            wavelength: "> 0.1 m",
            frequency: "< 3 × 10⁹ Hz",
            source: "Oscillating circuits, accelerated charges",
            uses: "Radio, TV broadcasting, communication",
            neetFocus: "Longest wavelength, lowest frequency"
          },
          {
            type: "Microwaves",
            wavelength: "0.1 m - 1 mm",
            frequency: "3 × 10⁹ - 3 × 10¹¹ Hz",
            source: "Klystron, magnetron",
            uses: "Microwave ovens, radar, satellite communication",
            neetFocus: "Used for cooking (water molecules resonate)"
          },
          {
            type: "Infrared (IR)",
            wavelength: "1 mm - 700 nm",
            frequency: "3 × 10¹¹ - 4 × 10¹⁴ Hz",
            source: "Hot bodies, sun, heaters",
            uses: "Night vision, remote controls, thermal imaging",
            neetFocus: "Heat radiation, greenhouse effect"
          },
          {
            type: "Visible light",
            wavelength: "700 nm - 400 nm",
            frequency: "4 × 10¹⁴ - 7.5 × 10¹⁴ Hz",
            source: "Sun, lamps, excited atoms",
            uses: "Vision, photography, illumination",
            neetFocus: "VIBGYOR (Red 700nm to Violet 400nm)"
          },
          {
            type: "Ultraviolet (UV)",
            wavelength: "400 nm - 10 nm",
            frequency: "7.5 × 10¹⁴ - 3 × 10¹⁶ Hz",
            source: "Sun, arc lamps, gas discharge",
            uses: "Sterilization, vitamin D synthesis, LASIK",
            neetFocus: "Causes skin cancer, used for sterilization"
          },
          {
            type: "X-rays",
            wavelength: "10 nm - 0.01 nm",
            frequency: "3 × 10¹⁶ - 3 × 10¹⁹ Hz",
            source: "X-ray tubes (decelerated electrons)",
            uses: "Medical imaging, crystallography",
            neetFocus: "Penetrate soft tissue, absorbed by bones"
          },
          {
            type: "Gamma rays",
            wavelength: "< 0.01 nm",
            frequency: "> 3 × 10¹⁹ Hz",
            source: "Radioactive nuclei, nuclear reactions",
            uses: "Cancer treatment, sterilization",
            neetFocus: "Highest energy, most penetrating"
          }
        ],
        analogies: [
          {
            concept: "EM wave propagation",
            analogy: "Leapfrog game",
            mapping: "Changing E creates B, changing B creates E - they leapfrog through space"
          },
          {
            concept: "E/B = c",
            analogy: "Partner dance",
            mapping: "E and B always in sync, maintaining fixed ratio as they travel together"
          },
          {
            concept: "Displacement current",
            analogy: "Virtual current",
            mapping: "Changing E field acts like a current, completing the circuit in capacitor gap"
          }
        ],
        questions: [],
      }
    ];