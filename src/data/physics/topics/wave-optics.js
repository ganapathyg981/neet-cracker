// Wave Optics - 2% weightage (Tier 3)
// NCERT Class 12, Chapter 10
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const waveOpticsTopics = [
      {
        id: "huygens-principle",
        name: "Huygens' Principle",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Huygens' principle states that every point on a wavefront acts as a secondary source of spherical wavelets. The new wavefront is the envelope of these secondary wavelets. This principle explains reflection, refraction, and is the foundation for understanding interference and diffraction. The principle elegantly derives Snell's law: n₁ sin θ₁ = n₂ sin θ₂.",
          realWorldAnalogy: "Like ripples in a pond - if you place multiple pebbles along a wave crest, each creates its own circular ripple. The overall wave pattern is formed by all these ripples combining.",
          keyPoints: [
            "Each point on wavefront is a source of secondary wavelets",
            "Secondary wavelets travel with same speed as original wave in that medium",
            "New wavefront is forward envelope (tangent) of all secondary wavelets",
            "Backward wavelets are ignored (Fresnel's modification)",
            "Explains reflection: angle of incidence = angle of reflection",
            "Explains refraction: sin θ₁/sin θ₂ = v₁/v₂ = n₂/n₁",
            "Wavefront shapes: Plane (parallel rays), Spherical (point source), Cylindrical (line source)"
          ],
          prerequisites: [],
          ncertReference: "NCERT Class 12, Chapter 10, Section 10.2-10.4"
        },
        formulas: [
          {
            id: "huygens-refraction",
            name: "Snell's Law from Huygens' Principle",
            category: "base",
            formula: "n₁ sin θ₁ = n₂ sin θ₂",
            latex: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
            description: "Derivation of Snell's law using Huygens' construction",
            variables: [
              {
                symbol: "n₁, n₂",
                meaning: "Refractive indices of media",
                unit: "dimensionless",
                typical_values: "1 (air), 1.5 (glass), 1.33 (water)"
              },
              {
                symbol: "θ₁",
                meaning: "Angle of incidence",
                unit: "degrees/rad",
                typical_values: "0° to 90°"
              },
              {
                symbol: "θ₂",
                meaning: "Angle of refraction",
                unit: "degrees/rad",
                typical_values: "0° to 90°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Light bends toward normal when entering denser medium", "Speed of light in medium: v = c/n", "Critical angle: sin θc = n₂/n₁ (for n₁ > n₂)"],
            dimensionalCheck: "Both sides dimensionless",
          },
          {
            id: "optical-path",
            name: "Optical Path Length",
            category: "base",
            formula: "Optical Path = n × Geometric Path",
            latex: "\\Delta_{optical} = n \\times d",
            description: "Effective path length considering refractive index",
            variables: [
              {
                symbol: "Δ_optical",
                meaning: "Optical path length",
                unit: "m",
                typical_values: "Greater than geometric path in dense media"
              },
              {
                symbol: "n",
                meaning: "Refractive index",
                unit: "dimensionless",
                typical_values: "> 1 for all media"
              },
              {
                symbol: "d",
                meaning: "Geometric path length",
                unit: "m",
                typical_values: "Actual distance traveled"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Optical path in air ≈ geometric path (n ≈ 1)", "Extra optical path when slab introduced: (n-1)t"],
            dimensionalCheck: "[Δ] = m",
          },
          {
            id: "wavefront-properties",
            name: "Wavefront Properties",
            category: "derived",
            formula: "Rays ⊥ Wavefront",
            latex: "\\text{Rays perpendicular to wavefront}",
            description: "Relationship between rays and wavefronts",
            variables: [
              {
                symbol: "Wavefront",
                meaning: "Surface of constant phase",
                unit: "surface",
                typical_values: "Plane, spherical, cylindrical"
              },
              {
                symbol: "Ray",
                meaning: "Direction of energy propagation",
                unit: "line",
                typical_values: "Perpendicular to wavefront"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Phase difference on wavefront = 0", "All points on wavefront have same amplitude"],
            dimensionalCheck: "Geometric concept",
          },
          {
            id: "velocity-ratio",
            name: "Velocity ratio",
            category: "derived",
            formula: "\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}",
            latex: "\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}",
            description: "Speed decreases in denser medium",
            variables: [],
            derivedFrom: "huygens-refraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Both sides dimensionless",
            neet_frequency: "high",
          },
          {
            id: "wavelength-change",
            name: "Wavelength change",
            category: "derived",
            formula: "\\lambda_2 = \\frac{\\lambda_1}{n}",
            latex: "\\lambda_2 = \\frac{\\lambda_1}{n}",
            description: "Wavelength decreases in denser medium",
            variables: [],
            derivedFrom: "huygens-refraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Both sides dimensionless",
            neet_frequency: "high",
          },
          {
            id: "frequency-unchanged",
            name: "Frequency unchanged",
            category: "derived",
            formula: "\\nu_1 = \\nu_2",
            latex: "\\nu_1 = \\nu_2",
            description: "Frequency is constant across media",
            variables: [],
            derivedFrom: "huygens-refraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Both sides dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "optical-path-difference",
            name: "Optical path difference",
            category: "derived",
            formula: "\\Delta = n_2 d_2 - n_1 d_1",
            latex: "\\Delta = n_2 d_2 - n_1 d_1",
            description: "For interference calculations",
            variables: [],
            derivedFrom: "optical-path",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δ] = m",
            neet_frequency: "high",
          },
          {
            id: "thin-film-interference",
            name: "Thin film interference",
            category: "derived",
            formula: "\\Delta = 2\\mu t",
            latex: "\\Delta = 2\\mu t",
            description: "For reflected light at normal incidence",
            variables: [],
            derivedFrom: "optical-path",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δ] = m",
            neet_frequency: "medium",
          },
          {
            id: "point-source",
            name: "Point source",
            category: "derived",
            formula: "\\text{Spherical wavefronts}",
            latex: "\\text{Spherical wavefronts}",
            description: "Intensity ∝ 1/r²",
            variables: [],
            derivedFrom: "wavefront-properties",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Geometric concept",
            neet_frequency: "medium",
          },
          {
            id: "at-large-distance",
            name: "At large distance",
            category: "derived",
            formula: "\\text{Plane wavefronts}",
            latex: "\\text{Plane wavefronts}",
            description: "From any source at infinity",
            variables: [],
            derivedFrom: "wavefront-properties",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Geometric concept",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking wavelength remains constant during refraction",
            correct: "Wavelength changes: λ₂ = λ₁/n. Only FREQUENCY remains constant during refraction.",
            whyItHappens: "Confusing frequency and wavelength conservation",
            neetExample: "NEET 2019: When light enters glass from air, what changes - frequency, wavelength, or speed?"
          },
          {
            mistake: "Forgetting optical path concept when slab is introduced",
            correct: "When glass slab of thickness t is introduced, extra optical path = (n-1)t, causing fringe shift.",
            whyItHappens: "Not considering that light travels slower in glass",
            neetExample: "NEET 2020: Fringe shift when glass slab inserted in YDSE"
          },
          {
            mistake: "Confusing wavefront shape for different sources",
            correct: "Point source → spherical wavefront. Line source → cylindrical. Distant source → plane wavefront.",
            whyItHappens: "Not visualizing the geometry correctly",
            neetExample: "NEET 2018: Wavefront from a point source at finite distance"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Identify wavefront shape for given source",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Optical path length calculations",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Explain refraction using Huygens principle",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Fringe shift due to introduction of glass slab",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Wavefront shape identification",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2023
            ]
          },
          {
            pattern: "Optical path and fringe shift",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Wavelength/frequency change in refraction",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Secondary wavelets",
            analogy: "Mexican wave in stadium",
            mapping: "Each person creates their own wave, overall pattern is the envelope of all waves"
          },
          {
            concept: "Refraction explanation",
            analogy: "Marching band entering mud",
            mapping: "One side slows down first, causing the line to bend toward the slower medium"
          }
        ],
        questions: [],
      },
      {
        id: "interference",
        name: "Interference of Light",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Interference occurs when two coherent light waves superpose. Constructive interference (bright fringe) when path difference = nλ, phase difference = 2nπ. Destructive interference (dark fringe) when path difference = (2n+1)λ/2, phase difference = (2n+1)π. Young's double slit experiment demonstrates wave nature of light. Fringe width β = λD/d is independent of order.",
          realWorldAnalogy: "Like ripples from two stones in a pond - where crests meet crests you get bigger waves (bright), where crests meet troughs they cancel (dark). The pattern depends on the spacing between stones and viewing distance.",
          keyPoints: [
            "Coherent sources: same frequency, constant phase difference",
            "Constructive interference: path difference = nλ (n = 0, 1, 2...)",
            "Destructive interference: path difference = (2n+1)λ/2",
            "Fringe width: β = λD/d (same for bright and dark fringes)",
            "Intensity: I = I₁ + I₂ + 2√(I₁I₂) cos φ",
            "For equal intensity sources: I = 4I₀ cos²(φ/2)",
            "Optical path = n × geometric path",
            "Central fringe is always bright (path difference = 0)",
            "Fringe visibility: V = (I_max - I_min)/(I_max + I_min)"
          ],
          prerequisites: ["huygens-principle"],
          ncertReference: "NCERT Class 12, Chapter 10, Section 10.5"
        },
        formulas: [
          {
            id: "path-difference",
            name: "Path Difference for Interference",
            category: "base",
            formula: "Δx = d sin θ ≈ dy/D",
            latex: "\\Delta x = d\\sin\\theta \\approx \\frac{dy}{D}",
            description: "Path difference between waves from two slits at point P on screen",
            variables: [
              {
                symbol: "Δx",
                meaning: "Path difference",
                unit: "m",
                typical_values: "nm to μm"
              },
              {
                symbol: "d",
                meaning: "Slit separation",
                unit: "m",
                typical_values: "0.1-1 mm"
              },
              {
                symbol: "D",
                meaning: "Screen distance",
                unit: "m",
                typical_values: "1-2 m"
              },
              {
                symbol: "y",
                meaning: "Distance from central fringe",
                unit: "m",
                typical_values: "mm to cm"
              },
              {
                symbol: "θ",
                meaning: "Angular position",
                unit: "rad",
                typical_values: "small angles"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Central fringe (n=0) is always bright at y=0", "Small angle approximation: sin θ ≈ tan θ ≈ y/D valid when d << D", "Angular position of nth bright: θ_n = nλ/d"],
            dimensionalCheck: "[Δx] = m",
          },
          {
            id: "fringe-width",
            name: "Fringe Width",
            category: "derived",
            formula: "β = λD/d",
            latex: "\\beta = \\frac{\\lambda D}{d}",
            description: "Distance between consecutive bright (or dark) fringes - constant across pattern",
            variables: [
              {
                symbol: "β",
                meaning: "Fringe width",
                unit: "m",
                typical_values: "mm"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "400-700 nm (visible)"
              },
              {
                symbol: "D",
                meaning: "Screen distance",
                unit: "m",
                typical_values: "1-2 m"
              },
              {
                symbol: "d",
                meaning: "Slit separation",
                unit: "m",
                typical_values: "0.1-1 mm"
              }
            ],
            derivedFrom: "path-difference",
            applications: [],
            specialCases: [
              "β ∝ λ (red fringes wider than violet)",
              "β ∝ D (fringes spread out at larger distance)",
              "β ∝ 1/d (closer slits give wider fringes)",
              "Fringe width same for all orders"
            ],
            dimensionalCheck: "[β] = [λ][D]/[d] = m",
          },
          {
            id: "intensity-interference",
            name: "Intensity in Interference",
            category: "derived",
            formula: "I = I₁ + I₂ + 2√(I₁I₂) cos φ",
            latex: "I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi",
            description: "Resultant intensity from two interfering waves with phase difference φ",
            variables: [
              {
                symbol: "I",
                meaning: "Resultant intensity",
                unit: "W/m²",
                typical_values: "0 to 4I₀"
              },
              {
                symbol: "I₁, I₂",
                meaning: "Individual intensities",
                unit: "W/m²",
                typical_values: "Usually equal"
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
            specialCases: ["For equal I₀: I_max = 4I₀, I_min = 0, perfect contrast", "Average intensity = I₁ + I₂ (energy conserved)", "For amplitude ratio r = a₁/a₂: I_max/I_min = (1+r)²/(1-r)²"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "thin-film-interference",
            name: "Thin Film Interference",
            category: "derived",
            formula: "2μt cos r = nλ (constructive) or (n+½)λ (destructive)",
            latex: "2\\mu t \\cos r = n\\lambda \\text{ or } \\left(n+\\frac{1}{2}\\right)\\lambda",
            description: "Conditions for interference in thin films - depends on phase change at reflection",
            variables: [
              {
                symbol: "μ",
                meaning: "Refractive index of film",
                unit: "dimensionless",
                typical_values: "1.3-1.5"
              },
              {
                symbol: "t",
                meaning: "Film thickness",
                unit: "m",
                typical_values: "nm to μm"
              },
              {
                symbol: "r",
                meaning: "Angle of refraction",
                unit: "rad",
                typical_values: "At normal incidence r=0"
              }
            ],
            derivedFrom: "optical-path",
            applications: [],
            specialCases: ["Phase change of π at reflection from denser medium", "No phase change at reflection from rarer medium", "Oil film on water shows colors due to varying thickness"],
            dimensionalCheck: "[2μt] = m = [λ]",
          },
          {
            id: "fringe-shift",
            name: "Fringe Shift due to Glass Slab",
            category: "derived",
            formula: "Shift = (μ-1)t × D/d = (μ-1)t × β/λ fringes",
            latex: "\\Delta y = \\frac{(\\mu - 1)t \\cdot D}{d} = (\\mu - 1)t \\cdot \\frac{\\beta}{\\lambda}",
            description: "Shift in fringe pattern when transparent slab placed in one path",
            variables: [
              {
                symbol: "Δy",
                meaning: "Lateral shift of fringes",
                unit: "m",
                typical_values: "mm"
              },
              {
                symbol: "μ",
                meaning: "Refractive index of slab",
                unit: "dimensionless",
                typical_values: "1.5 (glass)"
              },
              {
                symbol: "t",
                meaning: "Thickness of slab",
                unit: "m",
                typical_values: "μm to mm"
              }
            ],
            derivedFrom: "optical-path",
            applications: [],
            specialCases: ["Extra optical path introduced = (μ-1)t", "Fringe pattern shifts but width remains same", "Shift toward side where slab is placed"],
            dimensionalCheck: "[Δy] = m",
          },
          {
            id: "bright-fringe-position",
            name: "Bright fringe position",
            category: "derived",
            formula: "y_n = \\frac{n\\lambda D}{d}",
            latex: "y_n = \\frac{n\\lambda D}{d}",
            description: "n = 0, 1, 2... (constructive)",
            variables: [],
            derivedFrom: "path-difference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δx] = m",
            neet_frequency: "high",
          },
          {
            id: "dark-fringe-position",
            name: "Dark fringe position",
            category: "derived",
            formula: "y_n = \\frac{(2n+1)\\lambda D}{2d}",
            latex: "y_n = \\frac{(2n+1)\\lambda D}{2d}",
            description: "n = 0, 1, 2... (destructive)",
            variables: [],
            derivedFrom: "path-difference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δx] = m",
            neet_frequency: "high",
          },
          {
            id: "phase-difference",
            name: "Phase difference",
            category: "derived",
            formula: "\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
            latex: "\\phi = \\frac{2\\pi}{\\lambda}\\Delta x",
            description: "Relation between path and phase",
            variables: [],
            derivedFrom: "path-difference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δx] = m",
            neet_frequency: "high",
          },
          {
            id: "in-medium-of-refractive-index",
            name: "In medium of refractive index μ",
            category: "derived",
            formula: "\\beta' = \\frac{\\lambda D}{\\mu d} = \\frac{\\beta}{\\mu}",
            latex: "\\beta' = \\frac{\\lambda D}{\\mu d} = \\frac{\\beta}{\\mu}",
            description: "Wavelength decreases, β decreases",
            variables: [],
            derivedFrom: "fringe-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[β] = [λ][D]/[d] = m",
            neet_frequency: "high",
          },
          {
            id: "angular-fringe-width",
            name: "Angular fringe width",
            category: "derived",
            formula: "\\theta_\\beta = \\frac{\\lambda}{d}",
            latex: "\\theta_\\beta = \\frac{\\lambda}{d}",
            description: "Independent of screen distance D",
            variables: [],
            derivedFrom: "fringe-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[β] = [λ][D]/[d] = m",
            neet_frequency: "medium",
          },
          {
            id: "number-of-fringes-in-width-w",
            name: "Number of fringes in width w",
            category: "derived",
            formula: "N = \\frac{w}{\\beta} = \\frac{wd}{\\lambda D}",
            latex: "N = \\frac{w}{\\beta} = \\frac{wd}{\\lambda D}",
            description: "Count visible fringes",
            variables: [],
            derivedFrom: "fringe-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[β] = [λ][D]/[d] = m",
            neet_frequency: "medium",
          },
          {
            id: "maximum-intensity",
            name: "Maximum intensity",
            category: "derived",
            formula: "I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2",
            latex: "I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2",
            description: "φ = 0, 2π, 4π... (constructive)",
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
            description: "φ = π, 3π, 5π... (destructive)",
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
            formula: "I = 4I_0\\cos^2\\left(\\frac{\\phi}{2}\\right)",
            latex: "I = 4I_0\\cos^2\\left(\\frac{\\phi}{2}\\right)",
            description: "I₁ = I₂ = I₀",
            variables: [],
            derivedFrom: "intensity-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "intensity-ratio",
            name: "Intensity ratio",
            category: "derived",
            formula: "\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2",
            latex: "\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2",
            description: "For unequal sources",
            variables: [],
            derivedFrom: "intensity-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "at-normal-incidence",
            name: "At normal incidence",
            category: "derived",
            formula: "2\\mu t = n\\lambda",
            latex: "2\\mu t = n\\lambda",
            description: "cos r = 1",
            variables: [],
            derivedFrom: "thin-film-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[2μt] = m = [λ]",
            neet_frequency: "high",
          },
          {
            id: "colors-in-soap-bubble",
            name: "Colors in soap bubble",
            category: "derived",
            formula: "\\text{Different t gives different colors}",
            latex: "\\text{Different t gives different colors}",
            description: "White light → colors",
            variables: [],
            derivedFrom: "thin-film-interference",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[2μt] = m = [λ]",
            neet_frequency: "medium",
          },
          {
            id: "number-of-fringes-shifted",
            name: "Number of fringes shifted",
            category: "derived",
            formula: "n = \\frac{(\\mu-1)t}{\\lambda}",
            latex: "n = \\frac{(\\mu-1)t}{\\lambda}",
            description: "How many fringes move",
            variables: [],
            derivedFrom: "fringe-shift",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δy] = m",
            neet_frequency: "high",
          },
          {
            id: "direction-of-shift",
            name: "Direction of shift",
            category: "derived",
            formula: "\\text{Toward the slab}",
            latex: "\\text{Toward the slab}",
            description: "Central fringe moves toward inserted slab",
            variables: [],
            derivedFrom: "fringe-shift",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δy] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using path difference = nλ for dark fringes",
            correct: "Bright fringes: Δx = nλ. Dark fringes: Δx = (2n+1)λ/2. Never mix them!",
            whyItHappens: "Confusing constructive and destructive conditions",
            neetExample: "NEET 2020: Position of 3rd dark fringe from center"
          },
          {
            mistake: "Forgetting fringe width changes in medium",
            correct: "In medium of refractive index μ: β' = β/μ. Wavelength decreases so fringes get closer.",
            whyItHappens: "Not accounting for wavelength change in medium",
            neetExample: "NEET 2019: YDSE apparatus immersed in water - find new fringe width"
          },
          {
            mistake: "Taking intensity ratio instead of amplitude ratio",
            correct: "I ∝ a². If slit widths are in ratio 1:4, amplitudes in ratio 1:2, intensities 1:4.",
            whyItHappens: "Mixing up amplitude and intensity relationships",
            neetExample: "NEET 2021: If slit widths are 4:9, find I_max:I_min"
          },
          {
            mistake: "Assuming central fringe is always at center of screen",
            correct: "Central fringe (where Δx = 0) shifts when glass slab is introduced. It moves toward slab side.",
            whyItHappens: "Not understanding optical path change",
            neetExample: "NEET 2022: Direction of shift when glass slab placed in front of one slit"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Fringe width calculation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Position of nth bright/dark fringe",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Intensity ratio I_max/I_min problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Fringe shift due to glass slab",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "What happens if wavelength/distance/slit separation changes",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "YDSE in medium - find new fringe width",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Fringe width calculation and dependencies",
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
            pattern: "Intensity ratio problems",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Effect of immersing in liquid",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Fringe shift due to glass slab",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          },
          {
            pattern: "Position of nth fringe",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Interference pattern",
            analogy: "Two speakers playing same note",
            mapping: "Walk around and find loud (constructive) and quiet (destructive) spots - the pattern depends on speaker separation"
          },
          {
            concept: "Coherent sources requirement",
            analogy: "Two drummers",
            mapping: "For stable pattern, drummers must beat at same rate (frequency) and maintain rhythm (constant phase)"
          },
          {
            concept: "Fringe width",
            analogy: "Shadow of fence",
            mapping: "Wider gaps (d small) cast more spread shadows (β large), and further screen (D large) means bigger projection"
          }
        ],
        questions: [],
      },
      {
        id: "diffraction",
        name: "Diffraction of Light",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Diffraction is the bending of light around obstacles or spreading through small apertures. Single slit Fraunhofer diffraction produces a central maximum (twice as wide as secondary maxima) with minima at a sin θ = nλ (n = 1, 2, 3...). Note: n=0 is NOT a minimum but the central bright. The central maximum contains about 84% of total intensity. Angular width of central maximum = 2λ/a. Diffraction is significant when slit width is comparable to wavelength.",
          realWorldAnalogy: "Like water waves spreading after passing through a harbor entrance - the narrower the entrance, the more the waves spread. Light spreads out similarly through narrow slit.",
          keyPoints: [
            "Condition for minima: a sin θ = nλ (n = 1, 2, 3... NOT zero!)",
            "Approximate maxima at: a sin θ = (2n+1)λ/2",
            "Central maximum width (angular) = 2λ/a",
            "Central maximum width (linear) = 2λD/a",
            "Central max is twice as wide as secondary maxima",
            "Intensity of secondary maxima decreases rapidly: I₁ ≈ 4.5% of I₀",
            "Diffraction important when a ~ λ (slit width comparable to wavelength)",
            "Fresnel diffraction: source/screen at finite distance",
            "Fraunhofer diffraction: source/screen at infinity (parallel rays)"
          ],
          prerequisites: ["huygens-principle"],
          ncertReference: "NCERT Class 12, Chapter 10, Section 10.6"
        },
        formulas: [
          {
            id: "single-slit-minima",
            name: "Single Slit Diffraction Minima",
            category: "base",
            formula: "a sin θ = nλ (n = 1, 2, 3...)",
            latex: "a\\sin\\theta = n\\lambda \\quad (n = 1, 2, 3...)",
            description: "Condition for dark fringes (minima) in single slit diffraction",
            variables: [
              {
                symbol: "a",
                meaning: "Slit width",
                unit: "m",
                typical_values: "0.1-1 mm"
              },
              {
                symbol: "θ",
                meaning: "Angle from central axis",
                unit: "rad",
                typical_values: "small angles"
              },
              {
                symbol: "n",
                meaning: "Order of minimum",
                unit: "dimensionless",
                typical_values: "1, 2, 3... (NOT 0)"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "400-700 nm"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["n = 0 is NOT a minimum - it gives central maximum!", "Narrower slit (smaller a) → wider diffraction pattern", "For small angles: sin θ ≈ θ, so θ_n = nλ/a"],
            dimensionalCheck: "[a][sin θ] = [nλ] = m",
          },
          {
            id: "central-max-width",
            name: "Width of Central Maximum",
            category: "derived",
            formula: "Angular width = 2λ/a, Linear width = 2λD/a",
            latex: "2\\theta_1 = \\frac{2\\lambda}{a}, \\quad w_0 = \\frac{2\\lambda D}{a}",
            description: "Width of the central bright fringe (between first minima on both sides)",
            variables: [
              {
                symbol: "θ₁",
                meaning: "Angle to first minimum",
                unit: "rad",
                typical_values: "mrad"
              },
              {
                symbol: "w₀",
                meaning: "Linear width of central max",
                unit: "m",
                typical_values: "mm to cm"
              },
              {
                symbol: "D",
                meaning: "Screen distance",
                unit: "m",
                typical_values: "1-2 m"
              }
            ],
            derivedFrom: "single-slit-minima",
            applications: [],
            specialCases: ["Central max width ∝ 1/a (narrower slit → wider pattern)", "Central max width ∝ λ (longer wavelength → wider pattern)", "Central max contains ~84% of total intensity"],
            dimensionalCheck: "[w] = m",
          },
          {
            id: "intensity-diffraction",
            name: "Intensity Distribution in Diffraction",
            category: "derived",
            formula: "I = I₀(sin β/β)² where β = (πa sin θ)/λ",
            latex: "I = I_0\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2, \\quad \\beta = \\frac{\\pi a\\sin\\theta}{\\lambda}",
            description: "Intensity at angle θ from central axis",
            variables: [
              {
                symbol: "I₀",
                meaning: "Central maximum intensity",
                unit: "W/m²",
                typical_values: "Maximum value"
              },
              {
                symbol: "β",
                meaning: "Phase parameter",
                unit: "rad",
                typical_values: "nπ at minima"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Minima when β = nπ (n ≠ 0)", "Central max at β = 0 uses limit: (sin β/β) → 1"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "resolving-power",
            name: "Resolving Power (Rayleigh Criterion)",
            category: "derived",
            formula: "θ_min = 1.22λ/D",
            latex: "\\theta_{min} = \\frac{1.22\\lambda}{D}",
            description: "Minimum angular separation for two objects to be just resolved",
            variables: [
              {
                symbol: "θ_min",
                meaning: "Minimum resolvable angle",
                unit: "rad",
                typical_values: "μrad to mrad"
              },
              {
                symbol: "D",
                meaning: "Diameter of aperture",
                unit: "m",
                typical_values: "cm (telescope), mm (eye)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Larger aperture → better resolution (smaller θ_min)", "Shorter wavelength → better resolution", "For human eye: D ≈ 2mm in bright light"],
            dimensionalCheck: "[θ] = rad",
          },
          {
            id: "first-minimum-position",
            name: "First minimum position",
            category: "derived",
            formula: "\\sin\\theta_1 = \\frac{\\lambda}{a}",
            latex: "\\sin\\theta_1 = \\frac{\\lambda}{a}",
            description: "n = 1, defines edge of central max",
            variables: [],
            derivedFrom: "single-slit-minima",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a][sin θ] = [nλ] = m",
            neet_frequency: "high",
          },
          {
            id: "linear-position-of-minimum",
            name: "Linear position of minimum",
            category: "derived",
            formula: "y_n = \\frac{n\\lambda D}{a}",
            latex: "y_n = \\frac{n\\lambda D}{a}",
            description: "On screen at distance D",
            variables: [],
            derivedFrom: "single-slit-minima",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a][sin θ] = [nλ] = m",
            neet_frequency: "high",
          },
          {
            id: "secondary-maxima-approx",
            name: "Secondary maxima (approx)",
            category: "derived",
            formula: "a\\sin\\theta \\approx \\left(n+\\frac{1}{2}\\right)\\lambda",
            latex: "a\\sin\\theta \\approx \\left(n+\\frac{1}{2}\\right)\\lambda",
            description: "Between minima",
            variables: [],
            derivedFrom: "single-slit-minima",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[a][sin θ] = [nλ] = m",
            neet_frequency: "medium",
          },
          {
            id: "secondary-maxima-width",
            name: "Secondary maxima width",
            category: "derived",
            formula: "w_{secondary} = \\frac{\\lambda D}{a} = \\frac{w_0}{2}",
            latex: "w_{secondary} = \\frac{\\lambda D}{a} = \\frac{w_0}{2}",
            description: "Half of central max width",
            variables: [],
            derivedFrom: "central-max-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[w] = m",
            neet_frequency: "high",
          },
          {
            id: "comparison",
            name: "Comparison",
            category: "derived",
            formula: "\\text{Central max} = 2 \\times \\text{secondary max width}",
            latex: "\\text{Central max} = 2 \\times \\text{secondary max width}",
            description: "Key NEET fact",
            variables: [],
            derivedFrom: "central-max-width",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[w] = m",
            neet_frequency: "high",
          },
          {
            id: "at-minima",
            name: "At minima",
            category: "derived",
            formula: "I = 0 \\text{ when } \\beta = n\\pi",
            latex: "I = 0 \\text{ when } \\beta = n\\pi",
            description: "sin β = 0",
            variables: [],
            derivedFrom: "intensity-diffraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "medium",
          },
          {
            id: "relative-intensities",
            name: "Relative intensities",
            category: "derived",
            formula: "I_1 : I_2 : I_3 \\approx 1 : 0.045 : 0.016",
            latex: "I_1 : I_2 : I_3 \\approx 1 : 0.045 : 0.016",
            description: "Central vs secondary",
            variables: [],
            derivedFrom: "intensity-diffraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "medium",
          },
          {
            id: "limit-of-resolution",
            name: "Limit of resolution",
            category: "derived",
            formula: "d_{min} = f \\cdot \\theta_{min} = \\frac{1.22f\\lambda}{D}",
            latex: "d_{min} = f \\cdot \\theta_{min} = \\frac{1.22f\\lambda}{D}",
            description: "Minimum separation in image",
            variables: [],
            derivedFrom: "resolving-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = rad",
            neet_frequency: "medium",
          },
          {
            id: "resolving-power-2",
            name: "Resolving power",
            category: "derived",
            formula: "R = \\frac{1}{\\theta_{min}} = \\frac{D}{1.22\\lambda}",
            latex: "R = \\frac{1}{\\theta_{min}} = \\frac{D}{1.22\\lambda}",
            description: "Ability to distinguish close objects",
            variables: [],
            derivedFrom: "resolving-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[θ] = rad",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing diffraction minima with interference minima formulas",
            correct: "Single slit diffraction: a sin θ = nλ for MINIMA (n=1,2,3...). Double slit interference: d sin θ = (n+½)λ for minima.",
            whyItHappens: "Similar looking formulas for different phenomena",
            neetExample: "NEET 2020: Position of first minimum in single slit diffraction"
          },
          {
            mistake: "Thinking a sin θ = nλ gives maxima in diffraction",
            correct: "This formula gives MINIMA! Maxima are approximately at a sin θ = (2n+1)λ/2",
            whyItHappens: "Confusing with double slit bright fringe formula",
            neetExample: "NEET 2019: Why is there no central dark fringe in diffraction?"
          },
          {
            mistake: "Using n=0 in diffraction minima formula",
            correct: "n starts from 1 for diffraction minima! n=0 gives central maximum, not minimum.",
            whyItHappens: "Force of habit from interference where n can be 0",
            neetExample: "NEET 2021: Number of minima on each side of central max"
          },
          {
            mistake: "Thinking wider slit gives wider diffraction pattern",
            correct: "Opposite is true! Narrower slit gives WIDER diffraction pattern. w ∝ 1/a",
            whyItHappens: "Counter-intuitive relationship",
            neetExample: "NEET 2022: Effect of halving slit width on central max width"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Width of central maximum",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Position of nth minimum",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare interference and diffraction",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Effect of changing slit width",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Resolving power of telescope/eye",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Central maximum width calculation",
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
            pattern: "Position of minima",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Effect of slit width on pattern",
            frequency: "medium",
            yearAsked: [2018, 2020, 2021]
          },
          {
            pattern: "Difference between interference and diffraction",
            frequency: "medium",
            yearAsked: [2019, 2022]
          }
        ],
        analogies: [
          {
            concept: "Diffraction spreading",
            analogy: "Sound around corner",
            mapping: "Sound spreads around corners because wavelength is comparable to obstacle size. Light does same through narrow slits."
          },
          {
            concept: "Slit width effect",
            analogy: "Squeezing toothpaste",
            mapping: "Narrower opening causes more spreading (harder to control direction) - narrower slit spreads light more"
          },
          {
            concept: "Central maximum dominance",
            analogy: "Spotlight",
            mapping: "Most light concentrated in central bright region, side lobes are much weaker"
          }
        ],
        questions: [],
      },
      {
        id: "polarization",
        name: "Polarization of Light",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Polarization is the phenomenon where light vibrations are restricted to a particular direction. Unpolarized light has vibrations in all planes. Plane polarized light vibrates in one plane. Polarization can occur by: (1) Reflection at Brewster's angle (tan θ_B = n), (2) Refraction through polaroids, (3) Scattering (sky appears blue and polarized), (4) Double refraction in crystals. Malus's Law: I = I₀ cos²θ gives intensity after analyzer.",
          realWorldAnalogy: "Like a rope wave passing through a fence - if the wave is vertical and fence slats are vertical, it passes through. If slats are horizontal, wave is blocked. Polaroid sunglasses work similarly to reduce glare.",
          keyPoints: [
            "Light is transverse wave - polarization proves this",
            "Unpolarized light: E vibrates in all planes perpendicular to propagation",
            "Plane polarized: E vibrates in single plane",
            "Polaroid passes half intensity: I = I₀/2 for unpolarized input",
            "Malus's Law: I = I₀ cos²θ (θ = angle between polarizer & analyzer axes)",
            "Brewster's angle: tan θ_B = n (reflected light fully polarized)",
            "At Brewster's angle: θ_B + θ_r = 90° (reflected ⊥ refracted)",
            "Sky blue due to Rayleigh scattering ∝ 1/λ⁴",
            "Scattered light is polarized"
          ],
          prerequisites: ["huygens-principle"],
          ncertReference: "NCERT Class 12, Chapter 10, Section 10.7"
        },
        formulas: [
          {
            id: "malus-law",
            name: "Malus's Law",
            category: "base",
            formula: "I = I₀ cos²θ",
            latex: "I = I_0 \\cos^2\\theta",
            description: "Intensity of polarized light after passing through analyzer",
            variables: [
              {
                symbol: "I",
                meaning: "Transmitted intensity",
                unit: "W/m²",
                typical_values: "0 to I₀"
              },
              {
                symbol: "I₀",
                meaning: "Incident polarized intensity",
                unit: "W/m²",
                typical_values: "Input intensity"
              },
              {
                symbol: "θ",
                meaning: "Angle between polarizer and analyzer",
                unit: "degrees",
                typical_values: "0° to 90°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["For unpolarized light through polarizer: I = I₀/2 first", "Two polaroids at 45° to each other: I = I₀/4", "Three polaroids at 0°, 45°, 90°: I = I₀/8 (not zero!)"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "brewster-angle",
            name: "Brewster's Angle",
            category: "base",
            formula: "tan θ_B = n = n₂/n₁",
            latex: "\\tan\\theta_B = n = \\frac{n_2}{n_1}",
            description: "Angle of incidence at which reflected light is completely plane polarized",
            variables: [
              {
                symbol: "θ_B",
                meaning: "Brewster angle (polarizing angle)",
                unit: "degrees",
                typical_values: "53° for glass (n=1.5)"
              },
              {
                symbol: "n",
                meaning: "Refractive index of second medium",
                unit: "dimensionless",
                typical_values: "1.5 (glass), 1.33 (water)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At Brewster angle, reflected ray perpendicular to refracted ray", "Reflected light is fully polarized (E parallel to surface)", "Refracted light is partially polarized"],
            dimensionalCheck: "tan θ = dimensionless",
          },
          {
            id: "polaroid-transmission",
            name: "Polaroid Transmission",
            category: "derived",
            formula: "I = I₀/2 (unpolarized through polaroid)",
            latex: "I = \\frac{I_0}{2}",
            description: "Intensity of unpolarized light after passing through a polaroid",
            variables: [
              {
                symbol: "I₀",
                meaning: "Incident unpolarized intensity",
                unit: "W/m²",
                typical_values: "Natural light"
              },
              {
                symbol: "I",
                meaning: "Transmitted intensity",
                unit: "W/m²",
                typical_values: "I₀/2"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Average of all directions cos²θ = 1/2", "First polaroid reduces intensity to half", "Inserting polaroid between crossed polaroids allows some light through"],
            dimensionalCheck: "[I] = W/m²",
          },
          {
            id: "rayleigh-scattering",
            name: "Rayleigh Scattering",
            category: "derived",
            formula: "I ∝ 1/λ⁴",
            latex: "I_{scattered} \\propto \\frac{1}{\\lambda^4}",
            description: "Intensity of scattered light varies inversely with fourth power of wavelength",
            variables: [
              {
                symbol: "I",
                meaning: "Scattered intensity",
                unit: "W/m²",
                typical_values: "Blue >> Red"
              },
              {
                symbol: "λ",
                meaning: "Wavelength",
                unit: "m",
                typical_values: "400nm (blue) to 700nm (red)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Scattered light is polarized (90° to incident direction)", "Valid when particle size << wavelength", "Moon appears white because no atmosphere"],
            dimensionalCheck: "[I] ∝ 1/[λ]⁴",
          },
          {
            id: "parallel-axes-0",
            name: "Parallel axes (θ = 0°)",
            category: "derived",
            formula: "I = I_0",
            latex: "I = I_0",
            description: "Maximum transmission",
            variables: [],
            derivedFrom: "malus-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "crossed-axes-90",
            name: "Crossed axes (θ = 90°)",
            category: "derived",
            formula: "I = 0",
            latex: "I = 0",
            description: "No transmission (extinction)",
            variables: [],
            derivedFrom: "malus-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "at-45",
            name: "At 45°",
            category: "derived",
            formula: "I = I_0/2",
            latex: "I = I_0/2",
            description: "Half intensity transmitted",
            variables: [],
            derivedFrom: "malus-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "at-60",
            name: "At 60°",
            category: "derived",
            formula: "I = I_0/4",
            latex: "I = I_0/4",
            description: "Quarter intensity",
            variables: [],
            derivedFrom: "malus-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "medium",
          },
          {
            id: "for-glass-n15",
            name: "For glass (n=1.5)",
            category: "derived",
            formula: "\\theta_B = \\tan^{-1}(1.5) \\approx 57°",
            latex: "\\theta_B = \\tan^{-1}(1.5) \\approx 57°",
            description: "Common NEET value",
            variables: [],
            derivedFrom: "brewster-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "tan θ = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "reflected-refracted",
            name: "Reflected ⊥ refracted",
            category: "derived",
            formula: "\\theta_B + \\theta_r = 90°",
            latex: "\\theta_B + \\theta_r = 90°",
            description: "Key relationship",
            variables: [],
            derivedFrom: "brewster-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "tan θ = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "relation-to-critical-angle",
            name: "Relation to critical angle",
            category: "derived",
            formula: "\\tan\\theta_B = \\frac{1}{\\sin\\theta_c}",
            latex: "\\tan\\theta_B = \\frac{1}{\\sin\\theta_c}",
            description: "For same interface",
            variables: [],
            derivedFrom: "brewster-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "tan θ = dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "two-polaroids",
            name: "Two polaroids",
            category: "derived",
            formula: "I = \\frac{I_0}{2}\\cos^2\\theta",
            latex: "I = \\frac{I_0}{2}\\cos^2\\theta",
            description: "Unpolarized → P1 → P2",
            variables: [],
            derivedFrom: "polaroid-transmission",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "crossed-polaroids",
            name: "Crossed polaroids",
            category: "derived",
            formula: "I = 0",
            latex: "I = 0",
            description: "θ = 90° gives extinction",
            variables: [],
            derivedFrom: "polaroid-transmission",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "high",
          },
          {
            id: "adding-third-polaroid",
            name: "Adding third polaroid",
            category: "derived",
            formula: "I = \\frac{I_0}{8}",
            latex: "I = \\frac{I_0}{8}",
            description: "At 0°, 45°, 90° orientation",
            variables: [],
            derivedFrom: "polaroid-transmission",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] = W/m²",
            neet_frequency: "medium",
          },
          {
            id: "blue-sky",
            name: "Blue sky",
            category: "derived",
            formula: "\\frac{I_{blue}}{I_{red}} = \\left(\\frac{700}{400}\\right)^4 \\approx 9",
            latex: "\\frac{I_{blue}}{I_{red}} = \\left(\\frac{700}{400}\\right)^4 \\approx 9",
            description: "Blue scattered 9× more than red",
            variables: [],
            derivedFrom: "rayleigh-scattering",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] ∝ 1/[λ]⁴",
            neet_frequency: "high",
          },
          {
            id: "red-sunset",
            name: "Red sunset",
            category: "derived",
            formula: "\\text{Blue scattered away, red remains}",
            latex: "\\text{Blue scattered away, red remains}",
            description: "Long path through atmosphere",
            variables: [],
            derivedFrom: "rayleigh-scattering",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[I] ∝ 1/[λ]⁴",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting that unpolarized light through polaroid gives I₀/2, not I₀",
            correct: "Polaroid passes only one component of unpolarized light, so intensity becomes I₀/2 first, then Malus's law applies for subsequent polaroids.",
            whyItHappens: "Jumping directly to Malus's law without first step",
            neetExample: "NEET 2020: Unpolarized light through two polaroids at 60°"
          },
          {
            mistake: "Thinking crossed polaroids always give zero output",
            correct: "Insert a third polaroid at 45° between crossed polaroids and light passes! I = I₀/8",
            whyItHappens: "Not realizing intermediate polaroid rotates polarization",
            neetExample: "NEET 2019: Effect of inserting polaroid between crossed polarizers"
          },
          {
            mistake: "Confusing Brewster angle with critical angle",
            correct: "Brewster: tan θ_B = n (polarization). Critical: sin θ_c = 1/n (total internal reflection). Both are different concepts.",
            whyItHappens: "Both involve refractive index but different phenomena",
            neetExample: "NEET 2021: Calculate Brewster angle for glass of n = 1.5"
          },
          {
            mistake: "Wrong reason for sky being blue",
            correct: "Rayleigh scattering (I ∝ 1/λ⁴) scatters blue more than red. NOT because air is blue!",
            whyItHappens: "Misconception about scattering mechanism",
            neetExample: "NEET 2022: Why is sky blue during day but red at sunset?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Malus's law - intensity after analyzer",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Brewster's angle calculation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Multiple polaroids intensity",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Polarization proves transverse nature",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Explain blue sky and red sunset",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Rayleigh scattering intensity ratio",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Malus's law numerical",
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
            pattern: "Brewster angle calculation",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Unpolarized through two polaroids",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2023
            ]
          },
          {
            pattern: "Blue sky/red sunset explanation",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          },
          {
            pattern: "Crossed polaroids with middle polaroid",
            frequency: "medium",
            yearAsked: [2019, 2022, 2023]
          }
        ],
        analogies: [
          {
            concept: "Polarization",
            analogy: "Rope through fence slats",
            mapping: "Vertical rope wave passes through vertical slats, blocked by horizontal slats"
          },
          {
            concept: "Polaroid sunglasses",
            analogy: "Venetian blinds",
            mapping: "Block light from certain directions (horizontal glare from roads) while allowing others"
          },
          {
            concept: "Crossed polaroids",
            analogy: "Two perpendicular fences",
            mapping: "Vertical wave blocked by first horizontal fence, nothing to pass through second"
          },
          {
            concept: "Rayleigh scattering",
            analogy: "Small balls bouncing off net",
            mapping: "Smaller balls (shorter λ blue) bounce more often than larger balls (longer λ red)"
          }
        ],
        questions: [],
      }
    ];