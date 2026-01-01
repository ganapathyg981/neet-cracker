// Ray Optics and Optical Instruments - 6% weightage (Tier 1)
// NCERT Class 12, Chapter 9

export const rayOpticsTopics = [
      {
        id: "reflection-plane-mirror",
        name: "Reflection from Plane Mirror",
        weightage: 1,
        difficulty: "easy",
        theory: {
          summary: "When light falls on a plane mirror, it reflects following the laws of reflection: angle of incidence equals angle of reflection (∠i = ∠r), and incident ray, reflected ray, and normal all lie in the same plane. The image formed is virtual, erect, laterally inverted, and at the same distance behind the mirror as the object is in front.",
          realWorldAnalogy: "Like a ball bouncing off a wall - it rebounds at the same angle it approached. The wall acts like a mirror for the ball's path.",
          keyPoints: [
            "Laws of reflection: ∠i = ∠r and all rays in same plane",
            "Image distance = Object distance (measured from mirror)",
            "Image is virtual, erect, same size, laterally inverted",
            "Minimum mirror length = half object height for full image",
            "When mirror rotates by θ, reflected ray rotates by 2θ",
            "Velocity of image = negative of velocity of object (perpendicular to mirror)"
          ],
          prerequisites: ["basic-optics-concepts"]
        },
        formulas: [
          {
            id: "law-of-reflection",
            name: "Law of Reflection",
            category: "base",
            formula: "∠i = ∠r",
            latex: "\\angle i = \\angle r",
            description: "Angle of incidence equals angle of reflection, measured from normal",
            variables: [
              {
                symbol: "∠i",
                meaning: "Angle of incidence",
                unit: "degrees",
                typical_values: "0-90°"
              },
              {
                symbol: "∠r",
                meaning: "Angle of reflection",
                unit: "degrees",
                typical_values: "0-90°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Angles measured from normal, not surface", "For diffuse surfaces, law holds at each point"],
            dimensionalCheck: "[angle] = degrees or radians",
          },
          {
            id: "plane-mirror-image",
            name: "Image Formation in Plane Mirror",
            category: "base",
            formula: "Image distance = Object distance",
            latex: "d_i = d_o",
            description: "Image is formed at the same distance behind mirror as object is in front",
            variables: [
              {
                symbol: "d_i",
                meaning: "Image distance (behind mirror)",
                unit: "m",
                typical_values: "Same as d_o"
              },
              {
                symbol: "d_o",
                meaning: "Object distance (in front)",
                unit: "m",
                typical_values: "0.1-10 m"
              }
            ],
            derivedFrom: "law-of-reflection",
            applications: [],
            specialCases: ["Magnification = 1 (same size)", "Virtual image (cannot be captured on screen)"],
            dimensionalCheck: "[d] = m",
          },
          {
            id: "mirror-rotation",
            name: "Mirror Rotation Effect",
            category: "derived",
            formula: "Reflected ray rotates by 2θ when mirror rotates by θ",
            latex: "\\text{Rotation of reflected ray} = 2\\theta",
            description: "When mirror rotates by angle θ about axis in plane of mirror, reflected ray rotates by 2θ",
            variables: [
              {
                symbol: "θ",
                meaning: "Angle of mirror rotation",
                unit: "degrees",
                typical_values: "1-45°"
              },
              {
                symbol: "2θ",
                meaning: "Rotation of reflected ray",
                unit: "degrees",
                typical_values: "Twice mirror rotation"
              }
            ],
            derivedFrom: "law-of-reflection",
            applications: [],
            specialCases: ["Incident ray direction unchanged", "Used in optical lever for sensitivity"],
            dimensionalCheck: "[angle] = degrees",
          },
          {
            id: "multiple-mirrors",
            name: "Images in Multiple Plane Mirrors",
            category: "derived",
            formula: "n = (360°/θ) - 1",
            latex: "n = \\frac{360°}{\\theta} - 1",
            description: "Number of images formed by two plane mirrors at angle θ",
            variables: [
              {
                symbol: "n",
                meaning: "Number of images",
                unit: "dimensionless",
                typical_values: "1 to ∞"
              },
              {
                symbol: "θ",
                meaning: "Angle between mirrors",
                unit: "degrees",
                typical_values: "30-180°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["If 360/θ is odd, n depends on object position", "If 360/θ is even, n = (360/θ) - 1 always"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "minimum-mirror-length",
            name: "Minimum Mirror Length for Full Image",
            category: "derived",
            formula: "L_min = h/2",
            latex: "L_{min} = \\frac{h}{2}",
            description: "Minimum length of mirror required to see full image of a person",
            variables: [
              {
                symbol: "L_min",
                meaning: "Minimum mirror length",
                unit: "m",
                typical_values: "Half of height"
              },
              {
                symbol: "h",
                meaning: "Height of person",
                unit: "m",
                typical_values: "1.5-2 m"
              }
            ],
            derivedFrom: "plane-mirror-image",
            applications: [],
            specialCases: ["Independent of distance from mirror", "Mirror must be properly positioned (bottom at midpoint of eye-foot)"],
            dimensionalCheck: "[L] = m",
          },
          {
            id: "normal-incidence",
            name: "Normal incidence",
            category: "derived",
            formula: "i = r = 0°",
            latex: "i = r = 0°",
            description: "Light retraces its path",
            variables: [],
            derivedFrom: "law-of-reflection",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[angle] = degrees or radians",
            neet_frequency: "medium",
          },
          {
            id: "grazing-incidence",
            name: "Grazing incidence",
            category: "derived",
            formula: "i = r \\approx 90°",
            latex: "i = r \\approx 90°",
            description: "Light almost parallel to surface",
            variables: [],
            derivedFrom: "law-of-reflection",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[angle] = degrees or radians",
            neet_frequency: "low",
          },
          {
            id: "image-velocity",
            name: "Image velocity",
            category: "derived",
            formula: "v_i = -v_o",
            latex: "v_i = -v_o",
            description: "Object and image move opposite ways (perpendicular)",
            variables: [],
            derivedFrom: "plane-mirror-image",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = m",
            neet_frequency: "high",
          },
          {
            id: "relative-velocity",
            name: "Relative velocity",
            category: "derived",
            formula: "v_{rel} = 2v_o",
            latex: "v_{rel} = 2v_o",
            description: "Object and image approach/recede at 2v_o",
            variables: [],
            derivedFrom: "plane-mirror-image",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = m",
            neet_frequency: "medium",
          },
          {
            id: "galvanometer",
            name: "Galvanometer",
            category: "derived",
            formula: "\\text{Scale reading} \\propto 2\\theta",
            latex: "\\text{Scale reading} \\propto 2\\theta",
            description: "Used to amplify small rotations",
            variables: [],
            derivedFrom: "mirror-rotation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[angle] = degrees",
            neet_frequency: "medium",
          },
          {
            id: "mirrors-at-60",
            name: "Mirrors at 60°",
            category: "derived",
            formula: "n = \\frac{360}{60} - 1 = 5",
            latex: "n = \\frac{360}{60} - 1 = 5",
            description: "5 images formed",
            variables: [],
            derivedFrom: "multiple-mirrors",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "mirrors-at-90",
            name: "Mirrors at 90°",
            category: "derived",
            formula: "n = \\frac{360}{90} - 1 = 3",
            latex: "n = \\frac{360}{90} - 1 = 3",
            description: "3 images formed",
            variables: [],
            derivedFrom: "multiple-mirrors",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "parallel-mirrors",
            name: "Parallel mirrors",
            category: "derived",
            formula: "n = \\infty",
            latex: "n = \\infty",
            description: "Infinite images (θ → 0)",
            variables: [],
            derivedFrom: "multiple-mirrors",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "top-edge-position",
            name: "Top edge position",
            category: "derived",
            formula: "y_{top} = \\frac{H_{eye} + H_{head}}{2}",
            latex: "y_{top} = \\frac{H_{eye} + H_{head}}{2}",
            description: "Top of mirror at midpoint of eye-head",
            variables: [],
            derivedFrom: "minimum-mirror-length",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Measuring angle from surface instead of normal",
            correct: "Angles of incidence and reflection are always measured from normal, not from surface",
            whyItHappens: "Confusion between surface angle and normal angle",
            neetExample: "NEET 2020: If light hits at 30° to surface, what is reflection angle?"
          },
          {
            mistake: "Thinking minimum mirror size depends on distance",
            correct: "Minimum mirror length = h/2 regardless of how far you stand",
            whyItHappens: "Not understanding similar triangles geometry",
            neetExample: "NEET 2019: Find minimum mirror length to see full image"
          },
          {
            mistake: "Wrong formula for number of images when 360/θ is odd",
            correct: "When 360/θ is odd, n = 360/θ - 1 or 360/θ depending on object position",
            whyItHappens: "Not considering the special case when 360/θ is odd",
            neetExample: "NEET 2021: Images in mirrors at 72°"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find number of images in inclined mirrors",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Image velocity problems",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Properties of image in plane mirror",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Minimum mirror size calculations",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Number of images in inclined mirrors",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Image velocity problems",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Effect of mirror rotation",
            frequency: "medium",
            yearAsked: [2018, 2020]
          }
        ],
        analogies: [
          {
            concept: "Law of reflection",
            analogy: "Ball bouncing off wall",
            mapping: "Ball rebounds at same angle - like light reflecting"
          },
          {
            concept: "Image behind mirror",
            analogy: "Twin standing behind glass wall",
            mapping: "Image appears to be behind mirror at same distance as you are in front"
          }
        ],
        questions: [],
      },
      {
        id: "reflection-spherical-mirror",
        name: "Reflection from Spherical Mirror",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Spherical mirrors (concave and convex) follow the mirror formula 1/v + 1/u = 1/f and magnification m = -v/u = h'/h. Concave mirrors can form real or virtual images; convex mirrors always form virtual, erect, diminished images. Sign convention: distances measured from pole, +ve along incident light direction.",
          realWorldAnalogy: "Concave mirror is like a satellite dish collecting signals at focus. Convex mirror is like a car's side mirror - shows smaller but wider view ('objects in mirror are closer than they appear').",
          keyPoints: [
            "Mirror formula: 1/v + 1/u = 1/f",
            "Magnification: m = -v/u = h'/h",
            "For concave: f and R are negative (focus in front)",
            "For convex: f and R are positive (focus behind)",
            "R = 2f (radius of curvature = 2 × focal length)",
            "Power of mirror: P = 1/f (in diopters when f in meters)"
          ],
          prerequisites: ["reflection-plane-mirror"]
        },
        formulas: [
          {
            id: "mirror-formula",
            name: "Mirror Formula",
            category: "base",
            formula: "1/v + 1/u = 1/f",
            latex: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}",
            description: "Relates image distance (v), object distance (u), and focal length (f)",
            variables: [
              {
                symbol: "v",
                meaning: "Image distance from pole",
                unit: "m",
                typical_values: "-∞ to +∞"
              },
              {
                symbol: "u",
                meaning: "Object distance from pole",
                unit: "m",
                typical_values: "Always -ve (object in front)"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "-ve for concave, +ve for convex"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["u = ∞: v = f (parallel rays converge at focus)", "u = f: v = ∞ (image at infinity)", "u = 2f: v = 2f (same size image at C)"],
            dimensionalCheck: "[1/v] = [1/u] = [1/f] = m⁻¹",
          },
          {
            id: "magnification-mirror",
            name: "Magnification by Mirror",
            category: "base",
            formula: "m = -v/u = h'/h",
            latex: "m = -\\frac{v}{u} = \\frac{h'}{h}",
            description: "Ratio of image height to object height, or negative ratio of distances",
            variables: [
              {
                symbol: "m",
                meaning: "Magnification",
                unit: "dimensionless",
                typical_values: "Can be +ve or -ve"
              },
              {
                symbol: "h'",
                meaning: "Image height",
                unit: "m",
                typical_values: "+ve upward, -ve downward"
              },
              {
                symbol: "h",
                meaning: "Object height",
                unit: "m",
                typical_values: "+ve (upward from axis)"
              }
            ],
            derivedFrom: "mirror-formula",
            applications: [],
            specialCases: [
              "|m| > 1: magnified image",
              "|m| < 1: diminished image",
              "|m| = 1: same size (object at 2f)",
              "m > 0: erect image, m < 0: inverted image"
            ],
            dimensionalCheck: "Dimensionless ratio",
          },
          {
            id: "radius-focal-relation",
            name: "Radius and Focal Length Relation",
            category: "base",
            formula: "R = 2f",
            latex: "R = 2f",
            description: "Radius of curvature is twice the focal length for spherical mirrors",
            variables: [
              {
                symbol: "R",
                meaning: "Radius of curvature",
                unit: "m",
                typical_values: "0.1-2 m"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "R/2"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Valid only for paraxial rays (small aperture)", "For large aperture, spherical aberration occurs"],
            dimensionalCheck: "[R] = [f] = m",
          },
          {
            id: "mirror-power",
            name: "Power of Mirror",
            category: "derived",
            formula: "P = 1/f",
            latex: "P = \\frac{1}{f}",
            description: "Power of a mirror in diopters when f is in meters",
            variables: [
              {
                symbol: "P",
                meaning: "Power of mirror",
                unit: "D (diopter)",
                typical_values: "-5 to +5 D"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "0.1-2 m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Concave: P < 0 (converging)", "Convex: P > 0 (diverging)", "Note: Sign opposite to lens convention"],
            dimensionalCheck: "[P] = [1/f] = m⁻¹ = D",
          },
          {
            id: "concave-mirror-image",
            name: "Concave mirror image",
            category: "derived",
            formula: "v = \\frac{uf}{u - f}",
            latex: "v = \\frac{uf}{u - f}",
            description: "Finding image position",
            variables: [],
            derivedFrom: "mirror-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/u] = [1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "at-center-of-curvature",
            name: "At center of curvature",
            category: "derived",
            formula: "u = v = 2f",
            latex: "u = v = 2f",
            description: "Object at C gives image at C",
            variables: [],
            derivedFrom: "mirror-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/u] = [1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "at-focus",
            name: "At focus",
            category: "derived",
            formula: "v = \\infty",
            latex: "v = \\infty",
            description: "Object at focus, image at infinity",
            variables: [],
            derivedFrom: "mirror-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/u] = [1/f] = m⁻¹",
            neet_frequency: "medium",
          },
          {
            id: "virtual-image-convex",
            name: "Virtual image (convex)",
            category: "derived",
            formula: "m = +\\frac{f}{f-u}",
            latex: "m = +\\frac{f}{f-u}",
            description: "Always positive (erect)",
            variables: [],
            derivedFrom: "magnification-mirror",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "real-image-concave",
            name: "Real image (concave)",
            category: "derived",
            formula: "m = -\\frac{v}{u}",
            latex: "m = -\\frac{v}{u}",
            description: "Negative means inverted",
            variables: [],
            derivedFrom: "magnification-mirror",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "find-f-from-r",
            name: "Find f from R",
            category: "derived",
            formula: "f = \\frac{R}{2}",
            latex: "f = \\frac{R}{2}",
            description: "Given radius, find focal length",
            variables: [],
            derivedFrom: "radius-focal-relation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = [f] = m",
            neet_frequency: "high",
          },
          {
            id: "concave-mirror",
            name: "Concave mirror",
            category: "derived",
            formula: "P = -\\frac{1}{|f|}",
            latex: "P = -\\frac{1}{|f|}",
            description: "Negative power (converging)",
            variables: [],
            derivedFrom: "mirror-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [1/f] = m⁻¹ = D",
            neet_frequency: "medium",
          },
          {
            id: "convex-mirror",
            name: "Convex mirror",
            category: "derived",
            formula: "P = +\\frac{1}{|f|}",
            latex: "P = +\\frac{1}{|f|}",
            description: "Positive power (diverging)",
            variables: [],
            derivedFrom: "mirror-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = [1/f] = m⁻¹ = D",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Wrong sign convention - forgetting u is always negative",
            correct: "Object distance u is always negative (object in front of mirror). Use new Cartesian sign convention.",
            whyItHappens: "Confusion between different sign conventions",
            neetExample: "NEET 2020: Object at 30cm from concave mirror f=20cm, find image"
          },
          {
            mistake: "Confusing when image is real vs virtual",
            correct: "Concave: u > f gives real, u < f gives virtual. Convex: always virtual",
            whyItHappens: "Not understanding ray diagram behavior",
            neetExample: "NEET 2019: Nature of image for various object positions"
          },
          {
            mistake: "Wrong magnification sign interpretation",
            correct: "m > 0 means erect, m < 0 means inverted. |m| > 1 means magnified.",
            whyItHappens: "Not separating size and orientation in magnification",
            neetExample: "NEET 2021: Interpret m = -2 for concave mirror"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply mirror formula for various positions",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Find magnification and image characteristics",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Image formation for different object positions",
            difficulty: "easy"
          },
          {
            type: "graphical",
            description: "Draw ray diagrams for spherical mirrors",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Mirror formula application",
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
            pattern: "Image characteristics (real/virtual, magnification)",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Object at specific positions (F, C, infinity)",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Concave mirror focusing",
            analogy: "Satellite dish collecting signals",
            mapping: "Parallel rays (from satellite) converge at focus (receiver)"
          },
          {
            concept: "Convex mirror diverging",
            analogy: "Security mirror in store",
            mapping: "Shows wide area but smaller images - diverges light to cover more"
          }
        ],
        questions: [],
      },
      {
        id: "refraction-plane-surface",
        name: "Refraction from Plane Surface",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "When light passes from one medium to another, it bends due to change in speed. Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Light bends toward normal when entering denser medium and away from normal when entering rarer medium. Refractive index n = c/v = speed in vacuum/speed in medium.",
          realWorldAnalogy: "A marching band crossing from pavement to mud at an angle - the side that hits mud first slows down, causing the line to turn. Similarly, light bends when speed changes.",
          keyPoints: [
            "Snell's law: n₁ sin θ₁ = n₂ sin θ₂",
            "Refractive index: n = c/v = 1/sin(critical angle)",
            "Denser to rarer: bends away from normal",
            "Rarer to denser: bends toward normal",
            "Apparent depth = Real depth / n",
            "Lateral shift in glass slab: d = t × sin(i-r)/cos r"
          ],
          prerequisites: ["basic-optics-concepts"]
        },
        formulas: [
          {
            id: "snells-law",
            name: "Snell's Law",
            category: "base",
            formula: "n₁ sin θ₁ = n₂ sin θ₂",
            latex: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
            description: "Product of refractive index and sine of angle with normal is constant across interface",
            variables: [
              {
                symbol: "n₁, n₂",
                meaning: "Refractive indices of media",
                unit: "dimensionless",
                typical_values: "1-2.5"
              },
              {
                symbol: "θ₁",
                meaning: "Angle of incidence",
                unit: "degrees",
                typical_values: "0-90°"
              },
              {
                symbol: "θ₂",
                meaning: "Angle of refraction",
                unit: "degrees",
                typical_values: "0-90°"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["If n₂ > n₁: θ₂ < θ₁ (bends toward normal)", "If n₂ < n₁: θ₂ > θ₁ (bends away from normal)"],
            dimensionalCheck: "Both sides dimensionless",
          },
          {
            id: "refractive-index",
            name: "Refractive Index",
            category: "base",
            formula: "n = c/v",
            latex: "n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}",
            description: "Ratio of speed of light in vacuum to speed in medium",
            variables: [
              {
                symbol: "n",
                meaning: "Refractive index",
                unit: "dimensionless",
                typical_values: "Water 1.33, Glass 1.5"
              },
              {
                symbol: "c",
                meaning: "Speed of light in vacuum",
                unit: "m/s",
                typical_values: "3 × 10⁸ m/s"
              },
              {
                symbol: "v",
                meaning: "Speed of light in medium",
                unit: "m/s",
                typical_values: "c/n"
              },
              {
                symbol: "λ₀, λ",
                meaning: "Wavelength in vacuum and medium",
                unit: "m",
                typical_values: "λ = λ₀/n"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Frequency remains constant during refraction", "n ≥ 1 for all media (vacuum n = 1)"],
            dimensionalCheck: "[n] = dimensionless",
          },
          {
            id: "apparent-depth",
            name: "Apparent Depth",
            category: "derived",
            formula: "Apparent depth = Real depth / n",
            latex: "d_{app} = \\frac{d_{real}}{n}",
            description: "Objects in denser medium appear closer when viewed from rarer medium",
            variables: [
              {
                symbol: "d_app",
                meaning: "Apparent depth",
                unit: "m",
                typical_values: "Less than real depth"
              },
              {
                symbol: "d_real",
                meaning: "Real depth",
                unit: "m",
                typical_values: "0.1-10 m"
              },
              {
                symbol: "n",
                meaning: "Refractive index of denser medium",
                unit: "dimensionless",
                typical_values: "1.33-1.5"
              }
            ],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: ["Valid only for normal viewing (near-normal rays)", "Apparent depth < Real depth for n > 1"],
            dimensionalCheck: "[d] = m",
          },
          {
            id: "lateral-shift",
            name: "Lateral Shift in Glass Slab",
            category: "derived",
            formula: "d = t × sin(i-r)/cos r",
            latex: "d = t \\cdot \\frac{\\sin(i-r)}{\\cos r}",
            description: "Perpendicular shift of light ray passing through glass slab",
            variables: [
              {
                symbol: "d",
                meaning: "Lateral shift",
                unit: "m",
                typical_values: "Few mm typically"
              },
              {
                symbol: "t",
                meaning: "Thickness of slab",
                unit: "m",
                typical_values: "0.001-0.1 m"
              },
              {
                symbol: "i",
                meaning: "Angle of incidence",
                unit: "degrees",
                typical_values: "0-60°"
              },
              {
                symbol: "r",
                meaning: "Angle of refraction",
                unit: "degrees",
                typical_values: "Less than i in glass"
              }
            ],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: ["d = 0 for normal incidence (i = 0)", "Emergent ray parallel to incident ray (no net deviation)"],
            dimensionalCheck: "[d] = [t] = m",
          },
          {
            id: "multiple-slabs",
            name: "Apparent Shift for Multiple Slabs",
            category: "derived",
            formula: "Shift = Σtᵢ(1 - 1/nᵢ)",
            latex: "\\text{Total shift} = \\sum_{i} t_i \\left(1 - \\frac{1}{n_i}\\right)",
            description: "Net apparent shift when object viewed through multiple parallel slabs",
            variables: [
              {
                symbol: "tᵢ",
                meaning: "Thickness of ith slab",
                unit: "m",
                typical_values: "Individual thicknesses"
              },
              {
                symbol: "nᵢ",
                meaning: "RI of ith slab",
                unit: "dimensionless",
                typical_values: "1.33-1.7"
              }
            ],
            derivedFrom: "apparent-depth",
            applications: [],
            specialCases: ["Shifts add for multiple slabs", "Each slab contributes independently"],
            dimensionalCheck: "[shift] = m",
          },
          {
            id: "relative-refractive-index",
            name: "Relative refractive index",
            category: "derived",
            formula: "{}_{1}n_2 = \\frac{n_2}{n_1} = \\frac{\\sin\\theta_1}{\\sin\\theta_2}",
            latex: "{}_{1}n_2 = \\frac{n_2}{n_1} = \\frac{\\sin\\theta_1}{\\sin\\theta_2}",
            description: "RI of medium 2 w.r.t medium 1",
            variables: [],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Both sides dimensionless",
            neet_frequency: "high",
          },
          {
            id: "normal-incidence",
            name: "Normal incidence",
            category: "derived",
            formula: "\\theta_1 = \\theta_2 = 0",
            latex: "\\theta_1 = \\theta_2 = 0",
            description: "No bending when light enters normally",
            variables: [],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Both sides dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "speed-in-medium",
            name: "Speed in medium",
            category: "derived",
            formula: "v = \\frac{c}{n}",
            latex: "v = \\frac{c}{n}",
            description: "Light slows in denser medium",
            variables: [],
            derivedFrom: "refractive-index",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[n] = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "wavelength-in-medium",
            name: "Wavelength in medium",
            category: "derived",
            formula: "\\lambda = \\frac{\\lambda_0}{n}",
            latex: "\\lambda = \\frac{\\lambda_0}{n}",
            description: "Wavelength decreases, frequency unchanged",
            variables: [],
            derivedFrom: "refractive-index",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[n] = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "object-in-water",
            name: "Object in water",
            category: "derived",
            formula: "d_{app} = \\frac{d_{real}}{1.33}",
            latex: "d_{app} = \\frac{d_{real}}{1.33}",
            description: "Object appears 1/1.33 of actual depth",
            variables: [],
            derivedFrom: "apparent-depth",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = m",
            neet_frequency: "high",
          },
          {
            id: "shift-of-object",
            name: "Shift of object",
            category: "derived",
            formula: "\\text{Shift} = d_{real}\\left(1 - \\frac{1}{n}\\right)",
            latex: "\\text{Shift} = d_{real}\\left(1 - \\frac{1}{n}\\right)",
            description: "How much closer object appears",
            variables: [],
            derivedFrom: "apparent-depth",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = m",
            neet_frequency: "high",
          },
          {
            id: "approximate-formula",
            name: "Approximate formula",
            category: "derived",
            formula: "d \\approx t \\cdot i \\cdot \\left(1 - \\frac{1}{n}\\right)",
            latex: "d \\approx t \\cdot i \\cdot \\left(1 - \\frac{1}{n}\\right)",
            description: "For small angles (in radians)",
            variables: [],
            derivedFrom: "lateral-shift",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = [t] = m",
            neet_frequency: "medium",
          },
          {
            id: "maximum-shift",
            name: "Maximum shift",
            category: "derived",
            formula: "d_{max} = t",
            latex: "d_{max} = t",
            description: "When i = 90° (grazing incidence)",
            variables: [],
            derivedFrom: "lateral-shift",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[d] = [t] = m",
            neet_frequency: "low",
          },
          {
            id: "two-slabs",
            name: "Two slabs",
            category: "derived",
            formula: "\\text{Shift} = t_1(1-1/n_1) + t_2(1-1/n_2)",
            latex: "\\text{Shift} = t_1(1-1/n_1) + t_2(1-1/n_2)",
            description: "Additive shifts",
            variables: [],
            derivedFrom: "multiple-slabs",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[shift] = m",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing angle with normal vs angle with surface",
            correct: "Snell's law uses angles measured from normal, not from surface",
            whyItHappens: "Different conventions in different books",
            neetExample: "NEET 2019: Light at 30° to surface enters water, find refraction angle"
          },
          {
            mistake: "Thinking frequency changes during refraction",
            correct: "Frequency stays constant. Speed and wavelength change: v = fλ",
            whyItHappens: "Mixing up which quantities change",
            neetExample: "NEET 2020: Compare frequency, speed, wavelength in two media"
          },
          {
            mistake: "Using wrong formula for apparent depth",
            correct: "d_app = d_real/n, not d_real × n",
            whyItHappens: "Inverting the relationship",
            neetExample: "NEET 2021: Apparent position of object in water"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply Snell's law calculations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Apparent depth problems",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Lateral shift in glass slab",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Direction of bending at interface",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Snell's law application",
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
            pattern: "Apparent depth calculation",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Speed/wavelength change in refraction",
            frequency: "medium",
            yearAsked: [2018, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Refraction bending",
            analogy: "Marching band crossing grass to mud",
            mapping: "Side that hits mud first slows down, line turns toward normal"
          },
          {
            concept: "Apparent depth",
            analogy: "Stick in water looks bent",
            mapping: "Light from underwater bends at surface, making object appear higher"
          }
        ],
        questions: [],
      },
      {
        id: "total-internal-reflection",
        name: "Total Internal Reflection",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "When light travels from denser to rarer medium and angle of incidence exceeds critical angle, it undergoes total internal reflection - no refraction, all light reflects back. Critical angle: sin θc = 1/n. Applications include optical fibers, prisms, mirage, and diamond brilliance.",
          realWorldAnalogy: "Standing underwater looking up - at steep angles, the surface acts like a perfect mirror. Fish see a 'window' to the outside only within a cone of critical angle, surrounded by reflected underwater view.",
          keyPoints: [
            "Occurs only when light goes from denser to rarer medium",
            "Critical angle: sin θc = n₂/n₁ = 1/n (if n₂ = 1, air)",
            "For i > θc: total internal reflection",
            "For i < θc: both reflection and refraction occur",
            "At i = θc: refracted ray grazes along surface (r = 90°)",
            "Applications: Optical fiber, prism periscope, mirages, diamonds"
          ],
          prerequisites: ["refraction-plane-surface"]
        },
        formulas: [
          {
            id: "critical-angle",
            name: "Critical Angle",
            category: "base",
            formula: "sin θc = n₂/n₁ = 1/n",
            latex: "\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1}{n}",
            description: "Angle of incidence for which refracted ray grazes along interface",
            variables: [
              {
                symbol: "θc",
                meaning: "Critical angle",
                unit: "degrees",
                typical_values: "40-50° typically"
              },
              {
                symbol: "n₁",
                meaning: "RI of denser medium",
                unit: "dimensionless",
                typical_values: "> 1"
              },
              {
                symbol: "n₂",
                meaning: "RI of rarer medium",
                unit: "dimensionless",
                typical_values: "1 for air"
              },
              {
                symbol: "n",
                meaning: "Relative RI = n₁/n₂",
                unit: "dimensionless",
                typical_values: "> 1"
              }
            ],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: ["Higher n means smaller critical angle", "Exists only for denser to rarer transition"],
            dimensionalCheck: "[sin θ] = dimensionless",
          },
          {
            id: "tir-condition",
            name: "Condition for TIR",
            category: "base",
            formula: "i > θc and light from denser medium",
            latex: "i > \\theta_c \\text{ (light in denser medium)}",
            description: "Two conditions must be met for total internal reflection to occur",
            variables: [
              {
                symbol: "i",
                meaning: "Angle of incidence",
                unit: "degrees",
                typical_values: "Must exceed θc"
              },
              {
                symbol: "θc",
                meaning: "Critical angle",
                unit: "degrees",
                typical_values: "24-49° for common media"
              }
            ],
            derivedFrom: "critical-angle",
            applications: [],
            specialCases: ["Both conditions necessary", "If n₁ < n₂, TIR impossible (no critical angle)"],
            dimensionalCheck: "[angle] = degrees",
          },
          {
            id: "optical-fiber-acceptance",
            name: "Numerical Aperture of Optical Fiber",
            category: "derived",
            formula: "NA = sin α = √(n₁² - n₂²)",
            latex: "NA = \\sin\\alpha = \\sqrt{n_1^2 - n_2^2}",
            description: "Maximum acceptance angle for light to propagate in fiber",
            variables: [
              {
                symbol: "NA",
                meaning: "Numerical aperture",
                unit: "dimensionless",
                typical_values: "0.1-0.5"
              },
              {
                symbol: "α",
                meaning: "Acceptance angle (half-cone)",
                unit: "degrees",
                typical_values: "5-30°"
              },
              {
                symbol: "n₁",
                meaning: "RI of core",
                unit: "dimensionless",
                typical_values: "1.5-1.7"
              },
              {
                symbol: "n₂",
                meaning: "RI of cladding",
                unit: "dimensionless",
                typical_values: "Slightly less than n₁"
              }
            ],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: ["Larger NA means more light can enter", "Step-index vs graded-index fibers"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "glass-air-interface",
            name: "Glass-air interface",
            category: "derived",
            formula: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{1.5}\\right) \\approx 42°",
            latex: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{1.5}\\right) \\approx 42°",
            description: "Critical angle for glass",
            variables: [],
            derivedFrom: "critical-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[sin θ] = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "water-air-interface",
            name: "Water-air interface",
            category: "derived",
            formula: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{1.33}\\right) \\approx 49°",
            latex: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{1.33}\\right) \\approx 49°",
            description: "Critical angle for water",
            variables: [],
            derivedFrom: "critical-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[sin θ] = dimensionless",
            neet_frequency: "high",
          },
          {
            id: "diamond-air",
            name: "Diamond-air",
            category: "derived",
            formula: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{2.4}\\right) \\approx 24°",
            latex: "\\theta_c = \\sin^{-1}\\left(\\frac{1}{2.4}\\right) \\approx 24°",
            description: "Very small critical angle - why diamonds sparkle",
            variables: [],
            derivedFrom: "critical-angle",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[sin θ] = dimensionless",
            neet_frequency: "medium",
          },
          {
            id: "optical-fiber",
            name: "Optical fiber",
            category: "derived",
            formula: "i > \\theta_c \\text{ at core-cladding interface}",
            latex: "i > \\theta_c \\text{ at core-cladding interface}",
            description: "Light stays in fiber core",
            variables: [],
            derivedFrom: "tir-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[angle] = degrees",
            neet_frequency: "high",
          },
          {
            id: "prism-binoculars",
            name: "Prism binoculars",
            category: "derived",
            formula: "i = 45° > \\theta_c = 42°",
            latex: "i = 45° > \\theta_c = 42°",
            description: "TIR in 45-90-45 prism",
            variables: [],
            derivedFrom: "tir-condition",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[angle] = degrees",
            neet_frequency: "medium",
          },
          {
            id: "acceptance-cone",
            name: "Acceptance cone",
            category: "derived",
            formula: "2\\alpha = \\text{full acceptance angle}",
            latex: "2\\alpha = \\text{full acceptance angle}",
            description: "Light within this cone enters fiber",
            variables: [],
            derivedFrom: "optical-fiber-acceptance",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Forgetting TIR requires light going from denser to rarer medium",
            correct: "TIR only possible when n₁ > n₂ (denser to rarer). No critical angle exists otherwise.",
            whyItHappens: "Focusing only on angle condition, ignoring medium condition",
            neetExample: "NEET 2020: Can TIR occur for light going from water to glass?"
          },
          {
            mistake: "Using wrong value in critical angle formula",
            correct: "sin θc = n_rarer/n_denser = 1/n (relative index)",
            whyItHappens: "Inverting the ratio",
            neetExample: "NEET 2019: Calculate critical angle for glass (n=1.5)"
          },
          {
            mistake: "Thinking some refraction still occurs during TIR",
            correct: "At i > θc, there is ZERO refraction - ALL light reflects (100%)",
            whyItHappens: "Confusing partial reflection at i < θc with TIR at i > θc",
            neetExample: "NEET 2021: Fraction of light transmitted during TIR?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate critical angle for given media",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Identify conditions for TIR",
            difficulty: "easy"
          },
          {
            type: "application",
            description: "Optical fiber and prism problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Numerical aperture of optical fiber",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Critical angle calculation",
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
            pattern: "Conditions for TIR to occur",
            frequency: "high",
            yearAsked: [2019, 2020, 2021]
          },
          {
            pattern: "Applications (optical fiber, prism)",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Critical angle",
            analogy: "Fish's window to sky",
            mapping: "Fish sees sky only within critical angle cone; rest is mirror-like TIR"
          },
          {
            concept: "TIR in optical fiber",
            analogy: "Ball bouncing in a tube",
            mapping: "If angle steep enough, ball bounces instead of escaping through walls"
          }
        ],
        questions: [],
      },
      {
        id: "lens-formula",
        name: "Refraction through Lens",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Lenses refract light through two curved surfaces. Thin lens formula: 1/v - 1/u = 1/f. Convex (converging) lens has +ve f, concave (diverging) has -ve f. Lens maker's formula relates focal length to radii and refractive index. Power P = 1/f (in diopters).",
          realWorldAnalogy: "Convex lens acts like a magnifying glass - brings parallel rays together. Concave lens like spy-hole in door - spreads light out, making things look smaller.",
          keyPoints: [
            "Lens formula: 1/v - 1/u = 1/f",
            "Magnification: m = v/u = h'/h",
            "Lens maker's formula: 1/f = (n-1)(1/R₁ - 1/R₂)",
            "Power: P = 1/f (diopters when f in meters)",
            "Convex lens: f > 0, converging",
            "Concave lens: f < 0, diverging, always virtual image"
          ],
          prerequisites: ["refraction-plane-surface"]
        },
        formulas: [
          {
            id: "thin-lens-formula",
            name: "Thin Lens Formula",
            category: "base",
            formula: "1/v - 1/u = 1/f",
            latex: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
            description: "Relates image distance, object distance, and focal length for thin lens",
            variables: [
              {
                symbol: "v",
                meaning: "Image distance from lens",
                unit: "m",
                typical_values: "+ve for real, -ve for virtual"
              },
              {
                symbol: "u",
                meaning: "Object distance from lens",
                unit: "m",
                typical_values: "Always -ve (real object)"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "+ve for convex, -ve for concave"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Note: Unlike mirror, formula is 1/v - 1/u (minus sign)", "Concave lens: v always -ve (virtual image)"],
            dimensionalCheck: "[1/v] = [1/f] = m⁻¹",
          },
          {
            id: "lens-magnification",
            name: "Magnification by Lens",
            category: "base",
            formula: "m = v/u = h'/h",
            latex: "m = \\frac{v}{u} = \\frac{h'}{h}",
            description: "Ratio of image height to object height",
            variables: [
              {
                symbol: "m",
                meaning: "Linear magnification",
                unit: "dimensionless",
                typical_values: "Any value"
              },
              {
                symbol: "h'",
                meaning: "Image height",
                unit: "m",
                typical_values: "+ve erect, -ve inverted"
              },
              {
                symbol: "h",
                meaning: "Object height",
                unit: "m",
                typical_values: "+ve (above axis)"
              }
            ],
            derivedFrom: "thin-lens-formula",
            applications: [],
            specialCases: ["For lens: m = v/u (no negative sign, unlike mirror)", "|m| = 1 when object at 2f (for convex)"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "lens-maker",
            name: "Lens Maker's Formula",
            category: "base",
            formula: "1/f = (n-1)(1/R₁ - 1/R₂)",
            latex: "\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
            description: "Relates focal length to lens geometry and refractive index",
            variables: [
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "0.1-1 m"
              },
              {
                symbol: "n",
                meaning: "Refractive index of lens material",
                unit: "dimensionless",
                typical_values: "1.5 typically"
              },
              {
                symbol: "R₁",
                meaning: "Radius of first surface",
                unit: "m",
                typical_values: "+ve for convex toward object"
              },
              {
                symbol: "R₂",
                meaning: "Radius of second surface",
                unit: "m",
                typical_values: "-ve for convex away from object"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Sign of R: +ve if center on right of surface, -ve if on left", "For convex lens: f > 0; for concave: f < 0"],
            dimensionalCheck: "[1/f] = m⁻¹",
          },
          {
            id: "lens-power",
            name: "Power of Lens",
            category: "base",
            formula: "P = 1/f",
            latex: "P = \\frac{1}{f}",
            description: "Power in diopters when focal length is in meters",
            variables: [
              {
                symbol: "P",
                meaning: "Power of lens",
                unit: "D (diopter)",
                typical_values: "-10 to +10 D"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "0.1-1 m"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Higher |P| = stronger lens", "Eye correction: myopia needs -ve P, hypermetropia needs +ve P"],
            dimensionalCheck: "[P] = m⁻¹ = D",
          },
          {
            id: "combined-lens",
            name: "Combination of Thin Lenses",
            category: "derived",
            formula: "1/f_eq = 1/f₁ + 1/f₂ (in contact)",
            latex: "\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2}",
            description: "Equivalent focal length of two thin lenses in contact",
            variables: [
              {
                symbol: "f_eq",
                meaning: "Equivalent focal length",
                unit: "m",
                typical_values: "Combined effect"
              },
              {
                symbol: "f₁, f₂",
                meaning: "Individual focal lengths",
                unit: "m",
                typical_values: "Given values"
              }
            ],
            derivedFrom: "lens-power",
            applications: [],
            specialCases: ["Achromatic doublet: f₁/f₂ = -ω₁/ω₂ (remove chromatic aberration)", "Lenses in contact are most common in NEET"],
            dimensionalCheck: "[1/f] = m⁻¹",
          },
          {
            id: "find-image-position",
            name: "Find image position",
            category: "derived",
            formula: "v = \\frac{uf}{u+f}",
            latex: "v = \\frac{uf}{u+f}",
            description: "Solving for v",
            variables: [],
            derivedFrom: "thin-lens-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "object-at-infinity",
            name: "Object at infinity",
            category: "derived",
            formula: "v = f",
            latex: "v = f",
            description: "Parallel rays converge at focus",
            variables: [],
            derivedFrom: "thin-lens-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "object-at-2f",
            name: "Object at 2f",
            category: "derived",
            formula: "v = 2f",
            latex: "v = 2f",
            description: "Same size real image",
            variables: [],
            derivedFrom: "thin-lens-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/v] = [1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "real-image-convex",
            name: "Real image (convex)",
            category: "derived",
            formula: "m < 0 \\text{ (inverted)}",
            latex: "m < 0 \\text{ (inverted)}",
            description: "When v and u have opposite signs",
            variables: [],
            derivedFrom: "lens-magnification",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "virtual-image",
            name: "Virtual image",
            category: "derived",
            formula: "m > 0 \\text{ (erect)}",
            latex: "m > 0 \\text{ (erect)}",
            description: "When v and u have same sign",
            variables: [],
            derivedFrom: "lens-magnification",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "equiconvex-lens",
            name: "Equiconvex lens",
            category: "derived",
            formula: "R_1 = R, R_2 = -R \\Rightarrow \\frac{1}{f} = \\frac{2(n-1)}{R}",
            latex: "R_1 = R, R_2 = -R \\Rightarrow \\frac{1}{f} = \\frac{2(n-1)}{R}",
            description: "Both surfaces same radius",
            variables: [],
            derivedFrom: "lens-maker",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "plano-convex-lens",
            name: "Plano-convex lens",
            category: "derived",
            formula: "R_1 = R, R_2 = \\infty \\Rightarrow \\frac{1}{f} = \\frac{(n-1)}{R}",
            latex: "R_1 = R, R_2 = \\infty \\Rightarrow \\frac{1}{f} = \\frac{(n-1)}{R}",
            description: "One flat surface",
            variables: [],
            derivedFrom: "lens-maker",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "combined-lenses",
            name: "Combined lenses",
            category: "derived",
            formula: "P_{total} = P_1 + P_2 + ...",
            latex: "P_{total} = P_1 + P_2 + ...",
            description: "Lenses in contact",
            variables: [],
            derivedFrom: "lens-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = m⁻¹ = D",
            neet_frequency: "high",
          },
          {
            id: "convex-lens",
            name: "Convex lens",
            category: "derived",
            formula: "P > 0",
            latex: "P > 0",
            description: "Converging, positive power",
            variables: [],
            derivedFrom: "lens-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = m⁻¹ = D",
            neet_frequency: "high",
          },
          {
            id: "concave-lens",
            name: "Concave lens",
            category: "derived",
            formula: "P < 0",
            latex: "P < 0",
            description: "Diverging, negative power",
            variables: [],
            derivedFrom: "lens-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = m⁻¹ = D",
            neet_frequency: "high",
          },
          {
            id: "power-addition",
            name: "Power addition",
            category: "derived",
            formula: "P_{eq} = P_1 + P_2",
            latex: "P_{eq} = P_1 + P_2",
            description: "Simpler form for power",
            variables: [],
            derivedFrom: "combined-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/f] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "separated-lenses",
            name: "Separated lenses",
            category: "derived",
            formula: "\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}",
            latex: "\\frac{1}{f_{eq}} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2}",
            description: "Lenses separated by distance d",
            variables: [],
            derivedFrom: "combined-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/f] = m⁻¹",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using mirror formula (1/v + 1/u = 1/f) for lens",
            correct: "Lens formula is 1/v - 1/u = 1/f (note the minus sign)",
            whyItHappens: "Mixing up mirror and lens formulas",
            neetExample: "NEET 2020: Object at 20cm from convex lens of f=10cm, find image"
          },
          {
            mistake: "Wrong sign for magnification (using -v/u for lens)",
            correct: "For lens: m = v/u (no negative). For mirror: m = -v/u",
            whyItHappens: "Applying mirror magnification formula to lens",
            neetExample: "NEET 2019: Find magnification and nature of image"
          },
          {
            mistake: "Wrong signs for R₁ and R₂ in lens maker's formula",
            correct: "R positive if center of curvature is on right side of surface (light going left to right)",
            whyItHappens: "Confusion in sign convention for radii",
            neetExample: "NEET 2021: Find focal length of plano-convex lens"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply lens formula for image formation",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Lens maker's formula applications",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Combination of lenses",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Power and focal length relations",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Lens formula application",
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
            pattern: "Power of lens combinations",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Lens maker's formula",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Convex lens converging",
            analogy: "Funnel collecting water",
            mapping: "Parallel water streams directed to one point like light to focus"
          },
          {
            concept: "Power of lens",
            analogy: "Strength of eyeglasses",
            mapping: "Higher power = stronger lens = bends light more"
          }
        ],
        questions: [],
      },
      {
        id: "newtons-formula",
        name: "Newton's Formula",
        weightage: 0,
        difficulty: "medium",
        theory: {
          summary: "Newton's formula relates distances measured from principal foci instead of optical center. For lens: x₁x₂ = f², where x₁ and x₂ are object and image distances from respective foci. This is useful when focal distances are more convenient to measure.",
          realWorldAnalogy: "Instead of measuring from center of a scale, measure from the end - different reference point, same relationship.",
          keyPoints: [
            "Newton's formula: x₁ × x₂ = f²",
            "x₁ = object distance from first focus F₁",
            "x₂ = image distance from second focus F₂",
            "Equivalent to standard lens formula",
            "Useful in displacement method experiments"
          ],
          prerequisites: ["lens-formula"]
        },
        formulas: [
          {
            id: "newtons-formula-lens",
            name: "Newton's Formula for Lens",
            category: "derived",
            formula: "x₁ × x₂ = f²",
            latex: "x_1 \\cdot x_2 = f^2",
            description: "Product of focal distances equals square of focal length",
            variables: [
              {
                symbol: "x₁",
                meaning: "Object distance from F₁",
                unit: "m",
                typical_values: "Distance from focus"
              },
              {
                symbol: "x₂",
                meaning: "Image distance from F₂",
                unit: "m",
                typical_values: "Distance from focus"
              },
              {
                symbol: "f",
                meaning: "Focal length",
                unit: "m",
                typical_values: "0.1-1 m"
              }
            ],
            derivedFrom: "thin-lens-formula",
            applications: [],
            specialCases: ["u = -f - x₁ and v = f + x₂ (converting to standard)", "Same formula for mirrors: x₁x₂ = f²"],
            dimensionalCheck: "[x₁][x₂] = [f²] = m²",
          },
          {
            id: "find-image-position",
            name: "Find image position",
            category: "derived",
            formula: "x_2 = \\frac{f^2}{x_1}",
            latex: "x_2 = \\frac{f^2}{x_1}",
            description: "When object position from focus is known",
            variables: [],
            derivedFrom: "newtons-formula-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x₁][x₂] = [f²] = m²",
            neet_frequency: "medium",
          },
          {
            id: "displacement-method",
            name: "Displacement method",
            category: "derived",
            formula: "f = \\frac{D^2 - d^2}{4D}",
            latex: "f = \\frac{D^2 - d^2}{4D}",
            description: "Finding f using two image positions",
            variables: [],
            derivedFrom: "newtons-formula-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[x₁][x₂] = [f²] = m²",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Measuring x from optical center instead of focus",
            correct: "x₁ is from F₁ (object side focus), x₂ is from F₂ (image side focus)",
            whyItHappens: "Confusing Newton's formula with standard formula reference points",
            neetExample: "NEET 2019: Apply Newton's formula for given focal distances"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Apply Newton's formula",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Displacement method for focal length",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Displacement method formula",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [],
        questions: [],
      },
      {
        id: "combination-lens-mirror",
        name: "Combination of Lens and Mirror",
        weightage: 1,
        difficulty: "hard",
        theory: {
          summary: "When lens and mirror are combined, effective power depends on arrangement. For lens touching plane mirror: P_eq = 2P_lens. For general case, image is found by sequential application of formulas or using equivalent mirror/lens concept.",
          realWorldAnalogy: "Like a one-way valve that both filters and reflects - light passes through lens, reflects from mirror, passes through lens again.",
          keyPoints: [
            "Light passes through lens twice (going and returning)",
            "Lens + plane mirror: P_eq = 2P_lens, f_eq = f_lens/2",
            "Lens + concave mirror: P_eq = P_L + P_M + P_L = 2P_L + P_M",
            "For lens at distance from mirror, trace ray step by step",
            "Silvered lens acts as equivalent mirror"
          ],
          prerequisites: ["lens-formula", "reflection-spherical-mirror"]
        },
        formulas: [
          {
            id: "silvered-lens",
            name: "Silvered Lens (Equivalent Mirror)",
            category: "derived",
            formula: "P_eq = P_L + P_M + P_L = 2P_L + P_M",
            latex: "P_{eq} = 2P_L + P_M",
            description: "Power of equivalent mirror when lens is silvered on one side",
            variables: [
              {
                symbol: "P_eq",
                meaning: "Equivalent power",
                unit: "D",
                typical_values: "Combined effect"
              },
              {
                symbol: "P_L",
                meaning: "Power of lens",
                unit: "D",
                typical_values: "1/f_L"
              },
              {
                symbol: "P_M",
                meaning: "Power of mirror",
                unit: "D",
                typical_values: "1/f_M"
              }
            ],
            derivedFrom: "lens-power",
            applications: [],
            specialCases: ["System acts as a mirror (not lens)", "f_eq = f_L/2 for lens + plane mirror"],
            dimensionalCheck: "[P] = D",
          },
          {
            id: "lens-plane-mirror",
            name: "Lens + plane mirror",
            category: "derived",
            formula: "P_{eq} = \\frac{2}{f_L}",
            latex: "P_{eq} = \\frac{2}{f_L}",
            description: "P_M = 0 for plane mirror",
            variables: [],
            derivedFrom: "silvered-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = D",
            neet_frequency: "high",
          },
          {
            id: "equivalent-focal-length",
            name: "Equivalent focal length",
            category: "derived",
            formula: "f_{eq} = \\frac{1}{P_{eq}}",
            latex: "f_{eq} = \\frac{1}{P_{eq}}",
            description: "Acts as concave mirror usually",
            variables: [],
            derivedFrom: "silvered-lens",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = D",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Counting lens effect only once",
            correct: "Light passes through lens twice - once each way. Use 2P_L in formula.",
            whyItHappens: "Not tracing the light path completely",
            neetExample: "NEET 2020: Convex lens silvered on one side, find equivalent f"
          },
          {
            mistake: "Applying lens formula instead of mirror formula for silvered lens",
            correct: "The equivalent system is a mirror, so use mirror formula and sign convention",
            whyItHappens: "Confusion about nature of equivalent optical system",
            neetExample: "NEET 2019: Image position using silvered lens"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Find equivalent focal length of silvered lens",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Image formation by lens-mirror combination",
            difficulty: "hard"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Silvered lens equivalent power",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Convex lens + plane mirror",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [],
        questions: [],
      },
      {
        id: "dispersion-light",
        name: "Dispersion of Light",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Dispersion is the splitting of white light into constituent colors due to wavelength-dependent refractive index. Violet bends most (highest n), red bends least. Prism disperses light; rainbow is natural dispersion. Angular dispersion and dispersive power quantify this effect.",
          realWorldAnalogy: "Like a crowd running through turnstiles at different speeds - fast runners (red) turn less, slow runners (violet) turn more. All separate based on speed.",
          keyPoints: [
            "Cauchy's relation: n = A + B/λ² (n increases as λ decreases)",
            "Violet has highest n, bends most; Red has lowest n, bends least",
            "Angular dispersion = δᵥ - δᵣ",
            "Dispersive power ω = (nᵥ - nᵣ)/(nᵧ - 1)",
            "VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red",
            "Mean refractive index nᵧ (for yellow) used as average"
          ],
          prerequisites: ["refraction-plane-surface"]
        },
        formulas: [
          {
            id: "dispersive-power",
            name: "Dispersive Power",
            category: "base",
            formula: "ω = (nᵥ - nᵣ)/(nᵧ - 1)",
            latex: "\\omega = \\frac{n_v - n_r}{n_y - 1}",
            description: "Ratio of angular dispersion to mean deviation",
            variables: [
              {
                symbol: "ω",
                meaning: "Dispersive power",
                unit: "dimensionless",
                typical_values: "0.01-0.1"
              },
              {
                symbol: "nᵥ",
                meaning: "RI for violet",
                unit: "dimensionless",
                typical_values: "Highest"
              },
              {
                symbol: "nᵣ",
                meaning: "RI for red",
                unit: "dimensionless",
                typical_values: "Lowest"
              },
              {
                symbol: "nᵧ",
                meaning: "RI for yellow (mean)",
                unit: "dimensionless",
                typical_values: "Average n"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Flint glass has higher ω than crown glass", "Used in designing achromatic combinations"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "prism-deviation",
            name: "Deviation by Prism",
            category: "base",
            formula: "δ = (n-1)A (for small A)",
            latex: "\\delta = (n-1)A",
            description: "Deviation of light by thin prism of small angle A",
            variables: [
              {
                symbol: "δ",
                meaning: "Angle of deviation",
                unit: "degrees/rad",
                typical_values: "Few degrees"
              },
              {
                symbol: "n",
                meaning: "Refractive index",
                unit: "dimensionless",
                typical_values: "1.5 typical"
              },
              {
                symbol: "A",
                meaning: "Angle of prism",
                unit: "degrees/rad",
                typical_values: "Small, < 10°"
              }
            ],
            derivedFrom: "snells-law",
            applications: [],
            specialCases: ["Thin prism: δ independent of angle of incidence", "For thick prism, use full formula with minimum deviation"],
            dimensionalCheck: "[δ] = [A] = radians",
          },
          {
            id: "achromatic-combination",
            name: "Achromatic Prism Combination",
            category: "derived",
            formula: "ω₁A₁ + ω₂A₂ = 0",
            latex: "\\omega_1 A_1 + \\omega_2 A_2 = 0",
            description: "Condition for zero net dispersion from two prisms",
            variables: [
              {
                symbol: "ω₁, ω₂",
                meaning: "Dispersive powers",
                unit: "dimensionless",
                typical_values: "Different materials"
              },
              {
                symbol: "A₁, A₂",
                meaning: "Prism angles",
                unit: "degrees",
                typical_values: "Opposite orientations"
              }
            ],
            derivedFrom: "dispersive-power",
            applications: [],
            specialCases: ["Prisms of different materials combined", "Crown and flint glass commonly used"],
            dimensionalCheck: "[ω][A] = dimensionless × rad",
          },
          {
            id: "angular-dispersion",
            name: "Angular dispersion",
            category: "derived",
            formula: "\\theta = (n_v - n_r)A",
            latex: "\\theta = (n_v - n_r)A",
            description: "For small angle prism",
            variables: [],
            derivedFrom: "dispersive-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "mean-deviation",
            name: "Mean deviation",
            category: "derived",
            formula: "\\delta = (n_y - 1)A",
            latex: "\\delta = (n_y - 1)A",
            description: "Deviation for yellow light",
            variables: [],
            derivedFrom: "dispersive-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "minimum-deviation",
            name: "Minimum deviation",
            category: "derived",
            formula: "n = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}}",
            latex: "n = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}}",
            description: "For any prism at minimum deviation",
            variables: [],
            derivedFrom: "prism-deviation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[δ] = [A] = radians",
            neet_frequency: "high",
          },
          {
            id: "at-minimum-deviation",
            name: "At minimum deviation",
            category: "derived",
            formula: "i = e = \\frac{A+\\delta_m}{2}",
            latex: "i = e = \\frac{A+\\delta_m}{2}",
            description: "Entry and exit angles equal",
            variables: [],
            derivedFrom: "prism-deviation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[δ] = [A] = radians",
            neet_frequency: "high",
          },
          {
            id: "prism-angles-ratio",
            name: "Prism angles ratio",
            category: "derived",
            formula: "\\frac{A_1}{A_2} = -\\frac{\\omega_2}{\\omega_1}",
            latex: "\\frac{A_1}{A_2} = -\\frac{\\omega_2}{\\omega_1}",
            description: "Prisms in opposite orientation",
            variables: [],
            derivedFrom: "achromatic-combination",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ω][A] = dimensionless × rad",
            neet_frequency: "medium",
          },
          {
            id: "net-deviation",
            name: "Net deviation",
            category: "derived",
            formula: "\\delta_{net} = (n_1 - 1)A_1 + (n_2 - 1)A_2",
            latex: "\\delta_{net} = (n_1 - 1)A_1 + (n_2 - 1)A_2",
            description: "Deviation without dispersion",
            variables: [],
            derivedFrom: "achromatic-combination",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[ω][A] = dimensionless × rad",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking red light bends more than violet",
            correct: "Violet bends more (higher n) than red (lower n). VIBGYOR from most to least bent.",
            whyItHappens: "Confusing wavelength with bending - longer λ means LESS bending",
            neetExample: "NEET 2020: Which color deviates most through prism?"
          },
          {
            mistake: "Using δ = (n-1)A for thick prisms or large angles",
            correct: "This formula only for thin prisms. For thick prisms, use minimum deviation formula.",
            whyItHappens: "Not checking validity conditions of simplified formula",
            neetExample: "NEET 2019: Prism of 60° angle, find deviation"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate dispersive power",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Deviation by thin prism",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Minimum deviation problems",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Order of colors after dispersion",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Dispersive power calculation",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Minimum deviation formula",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Order of colors/wavelength dependence",
            frequency: "medium",
            yearAsked: [2019, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Dispersion of light",
            analogy: "Runners at different speeds through mud",
            mapping: "Slow runners (violet) turn more; fast runners (red) turn less in mud (prism)"
          }
        ],
        questions: [],
      },
      {
        id: "optical-instruments",
        name: "Optical Instruments",
        weightage: 0,
        difficulty: "medium",
        theory: {
          summary: "Optical instruments use lenses and mirrors to form magnified or modified images. Simple microscope magnifies using single convex lens. Compound microscope uses objective + eyepiece. Telescope magnifies distant objects. Human eye has variable focal length lens controlled by ciliary muscles.",
          realWorldAnalogy: "Microscope is like stacking two magnifying glasses - first enlarges the object, second enlarges that enlarged image. Telescope is similar but for distant objects.",
          keyPoints: [
            "Simple microscope: M = 1 + D/f (D = least distance of distinct vision = 25 cm)",
            "Compound microscope: M = mo × me = (L/fo) × (1 + D/fe)",
            "Astronomical telescope: M = fo/fe (normal adjustment)",
            "Resolving power: ability to distinguish close objects",
            "Human eye: accommodation range from 25 cm to infinity",
            "Defects: Myopia (far objects blur), Hypermetropia (near objects blur)"
          ],
          prerequisites: ["lens-formula"]
        },
        formulas: [
          {
            id: "simple-microscope",
            name: "Simple Microscope Magnification",
            category: "base",
            formula: "M = 1 + D/f",
            latex: "M = 1 + \\frac{D}{f}",
            description: "Magnifying power when image at D (least distance of distinct vision)",
            variables: [
              {
                symbol: "M",
                meaning: "Magnifying power",
                unit: "dimensionless",
                typical_values: "2-10x"
              },
              {
                symbol: "D",
                meaning: "Least distance of distinct vision",
                unit: "cm",
                typical_values: "25 cm"
              },
              {
                symbol: "f",
                meaning: "Focal length of lens",
                unit: "cm",
                typical_values: "2-10 cm"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Smaller f gives larger magnification", "Image virtual, erect, magnified"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "compound-microscope",
            name: "Compound Microscope Magnification",
            category: "derived",
            formula: "M = (L/fo) × (D/fe)",
            latex: "M = \\frac{L}{f_o} \\times \\frac{D}{f_e}",
            description: "Total magnification is product of objective and eyepiece magnifications",
            variables: [
              {
                symbol: "M",
                meaning: "Total magnifying power",
                unit: "dimensionless",
                typical_values: "50-1000x"
              },
              {
                symbol: "L",
                meaning: "Tube length",
                unit: "cm",
                typical_values: "15-20 cm"
              },
              {
                symbol: "fo",
                meaning: "Focal length of objective",
                unit: "cm",
                typical_values: "0.5-2 cm (small)"
              },
              {
                symbol: "fe",
                meaning: "Focal length of eyepiece",
                unit: "cm",
                typical_values: "2-5 cm"
              }
            ],
            derivedFrom: "simple-microscope",
            applications: [],
            specialCases: ["Objective has small f (high magnification)", "Final image is virtual, inverted, magnified"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "telescope-astronomical",
            name: "Astronomical Telescope",
            category: "base",
            formula: "M = fo/fe",
            latex: "M = \\frac{f_o}{f_e}",
            description: "Magnifying power in normal adjustment (image at infinity)",
            variables: [
              {
                symbol: "M",
                meaning: "Magnifying power",
                unit: "dimensionless",
                typical_values: "10-200x"
              },
              {
                symbol: "fo",
                meaning: "Focal length of objective",
                unit: "cm",
                typical_values: "50-200 cm (large)"
              },
              {
                symbol: "fe",
                meaning: "Focal length of eyepiece",
                unit: "cm",
                typical_values: "2-5 cm (small)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Objective has large f (collects light from far objects)", "Final image is inverted (OK for astronomy)"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "image-at-infinity",
            name: "Image at infinity",
            category: "derived",
            formula: "M = \\frac{D}{f}",
            latex: "M = \\frac{D}{f}",
            description: "Relaxed eye viewing",
            variables: [],
            derivedFrom: "simple-microscope",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "image-at-d",
            name: "Image at D",
            category: "derived",
            formula: "M = \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)",
            latex: "M = \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)",
            description: "Maximum magnification",
            variables: [],
            derivedFrom: "compound-microscope",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "tube-length-normal",
            name: "Tube length (normal)",
            category: "derived",
            formula: "L = f_o + f_e",
            latex: "L = f_o + f_e",
            description: "Distance between lenses",
            variables: [],
            derivedFrom: "telescope-astronomical",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "image-at-d-2",
            name: "Image at D",
            category: "derived",
            formula: "M = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)",
            latex: "M = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)",
            description: "Maximum magnification",
            variables: [],
            derivedFrom: "telescope-astronomical",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing microscope and telescope magnification formulas",
            correct: "Microscope: M = (L/fo)(D/fe). Telescope: M = fo/fe. Note which f is in numerator!",
            whyItHappens: "Both have fo and fe but in different relationships",
            neetExample: "NEET 2020: Magnifying power of telescope with given focal lengths"
          },
          {
            mistake: "Forgetting \"normal adjustment\" means image at infinity",
            correct: "Normal adjustment = image at infinity (relaxed eye). At D = maximum magnification",
            whyItHappens: "Not understanding the two viewing conditions",
            neetExample: "NEET 2019: Telescope in normal adjustment vs at near point"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Simple microscope magnification",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Compound microscope problems",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Telescope magnification and tube length",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Eye defects and corrections",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Telescope magnification calculation",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Microscope magnification",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Eye defects and lens power needed",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Compound microscope",
            analogy: "Two-stage zoom",
            mapping: "First lens creates enlarged image, second lens magnifies that image further"
          },
          {
            concept: "Telescope",
            analogy: "Bringing distant object closer",
            mapping: "Makes small angular size appear larger angular size"
          }
        ],
        questions: [],
      }
    ];