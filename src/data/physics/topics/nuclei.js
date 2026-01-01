// Nuclei - 4% weightage (Tier 2)
// NCERT Class 12, Chapter 13
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const nucleiTopics = [
      {
        id: "binding-energy",
        name: "Nuclear Properties & Binding Energy",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "The nucleus contains protons and neutrons (collectively nucleons) held by strong nuclear force. Nuclear radius R = R₀A^(1/3) where R₀ ≈ 1.2 fm. Nuclear density is constant (~2.3 × 10¹⁷ kg/m³) regardless of nucleus size. Binding energy is energy required to separate nucleus into individual nucleons: BE = Δm × c² = Δm × 931.5 MeV. The binding energy per nucleon (BE/A) peaks at Fe-56 (~8.8 MeV/nucleon), explaining why fusion of light nuclei and fission of heavy nuclei both release energy.",
          realWorldAnalogy: "Binding energy is like the effort to break apart a tightly connected Lego structure. The more effort (energy) needed, the more stable the structure. Iron is the 'most stable' Lego structure - hardest to break apart.",
          keyPoints: [
            "Nuclear size: R = R₀A^(1/3), R₀ ≈ 1.2 fm (femtometer = 10⁻¹⁵ m)",
            "Nuclear volume ∝ A, Nuclear density = constant for all nuclei",
            "Mass defect: Δm = [Zm_p + (A-Z)m_n] - M_nucleus",
            "Binding energy: BE = Δm × c² = Δm × 931.5 MeV",
            "1 atomic mass unit (u) = 931.5 MeV/c²",
            "BE/A maximum at A ≈ 56 (Fe) → most stable nucleus",
            "BE/A ~ 8 MeV for most nuclei (A > 30)",
            "Light nuclei: fusion increases BE/A → energy released",
            "Heavy nuclei: fission increases BE/A → energy released",
            "Strong nuclear force: short range (~1 fm), charge independent"
          ],
          prerequisites: [],
          ncertReference: "NCERT Class 12, Chapter 13, Section 13.2-13.4"
        },
        formulas: [
          {
            id: "nuclear-radius",
            name: "Nuclear Radius",
            category: "base",
            formula: "R = R₀A^(1/3)",
            latex: "R = R_0 A^{1/3}",
            description: "Nuclear radius as function of mass number",
            variables: [
              {
                symbol: "R",
                meaning: "Nuclear radius",
                unit: "fm",
                typical_values: "1-10 fm"
              },
              {
                symbol: "R₀",
                meaning: "Constant",
                unit: "fm",
                typical_values: "1.2-1.3 fm"
              },
              {
                symbol: "A",
                meaning: "Mass number (protons + neutrons)",
                unit: "dimensionless",
                typical_values: "1-238"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Nuclear density ≈ 2.3 × 10¹⁷ kg/m³ (constant)", "R ∝ A^(1/3) (cube root dependence)", "For He-4: R ≈ 1.9 fm; For U-238: R ≈ 7.4 fm"],
            dimensionalCheck: "[R] = fm (10⁻¹⁵ m)",
          },
          {
            id: "mass-defect",
            name: "Mass Defect",
            category: "base",
            formula: "Δm = Zm_p + Nm_n - M_nucleus",
            latex: "\\Delta m = Zm_p + (A-Z)m_n - M_{nucleus}",
            description: "Difference between sum of nucleon masses and actual nuclear mass",
            variables: [
              {
                symbol: "Δm",
                meaning: "Mass defect",
                unit: "u (amu)",
                typical_values: "0.001-0.25 u"
              },
              {
                symbol: "Z",
                meaning: "Atomic number (protons)",
                unit: "dimensionless",
                typical_values: "1-92"
              },
              {
                symbol: "A",
                meaning: "Mass number",
                unit: "dimensionless",
                typical_values: "1-238"
              },
              {
                symbol: "m_p",
                meaning: "Proton mass",
                unit: "u",
                typical_values: "1.007276 u"
              },
              {
                symbol: "m_n",
                meaning: "Neutron mass",
                unit: "u",
                typical_values: "1.008665 u"
              },
              {
                symbol: "M",
                meaning: "Nuclear mass",
                unit: "u",
                typical_values: "Given in problem"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Δm is always positive (mass is \"lost\" to binding energy)", "Greater Δm → more tightly bound nucleus", "Electron mass cancels when using atomic masses"],
            dimensionalCheck: "[Δm] = u (atomic mass unit)",
          },
          {
            id: "binding-energy-formula",
            name: "Binding Energy",
            category: "derived",
            formula: "BE = Δm × 931.5 MeV",
            latex: "BE = \\Delta m \\times 931.5 \\text{ MeV} = \\Delta m \\times c^2",
            description: "Energy equivalent of mass defect (E = mc²)",
            variables: [
              {
                symbol: "BE",
                meaning: "Binding energy",
                unit: "MeV",
                typical_values: "10-2000 MeV"
              },
              {
                symbol: "931.5",
                meaning: "Energy per amu",
                unit: "MeV/u",
                typical_values: "Constant (use 931 or 931.5)"
              }
            ],
            derivedFrom: "mass-defect",
            applications: [],
            specialCases: [
              "Higher BE/A = more stable nucleus",
              "BE/A peaks at A ≈ 56 (Iron) at ~8.8 MeV",
              "Light nuclei (H, He): BE/A ~ 1-7 MeV (low)",
              "Heavy nuclei (U): BE/A ~ 7.6 MeV"
            ],
            dimensionalCheck: "[BE] = [Δm][c²] = MeV",
          },
          {
            id: "packing-fraction",
            name: "Packing Fraction",
            category: "derived",
            formula: "f = (M - A)/A",
            latex: "f = \\frac{M - A}{A}",
            description: "Measure of mass defect per nucleon",
            variables: [
              {
                symbol: "f",
                meaning: "Packing fraction",
                unit: "dimensionless",
                typical_values: "± 10⁻³"
              },
              {
                symbol: "M",
                meaning: "Atomic mass",
                unit: "u",
                typical_values: "Close to A"
              },
              {
                symbol: "A",
                meaning: "Mass number",
                unit: "dimensionless",
                typical_values: "Integer"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Minimum (most negative) near Fe → most stable", "Positive for very light and very heavy nuclei"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "ratio-of-radii",
            name: "Ratio of radii",
            category: "derived",
            formula: "\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3}",
            latex: "\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3}",
            description: "Compare two nuclei",
            variables: [],
            derivedFrom: "nuclear-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = fm (10⁻¹⁵ m)",
            neet_frequency: "high",
          },
          {
            id: "nuclear-volume",
            name: "Nuclear volume",
            category: "derived",
            formula: "V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A \\propto A",
            latex: "V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A \\propto A",
            description: "Volume proportional to A",
            variables: [],
            derivedFrom: "nuclear-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = fm (10⁻¹⁵ m)",
            neet_frequency: "high",
          },
          {
            id: "nuclear-density",
            name: "Nuclear density",
            category: "derived",
            formula: "\\rho = \\frac{Am_p}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3m_p}{4\\pi R_0^3} = \\text{constant}",
            latex: "\\rho = \\frac{Am_p}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3m_p}{4\\pi R_0^3} = \\text{constant}",
            description: "Same for all nuclei!",
            variables: [],
            derivedFrom: "nuclear-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[R] = fm (10⁻¹⁵ m)",
            neet_frequency: "high",
          },
          {
            id: "for-helium-4",
            name: "For Helium-4",
            category: "derived",
            formula: "\\Delta m = 2(1.007276) + 2(1.008665) - 4.002603 = 0.030378 u",
            latex: "\\Delta m = 2(1.007276) + 2(1.008665) - 4.002603 = 0.030378 u",
            description: "Example calculation",
            variables: [],
            derivedFrom: "mass-defect",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δm] = u (atomic mass unit)",
            neet_frequency: "high",
          },
          {
            id: "using-atomic-mass",
            name: "Using atomic mass",
            category: "derived",
            formula: "\\Delta m = ZM_H + (A-Z)m_n - M_{atom}",
            latex: "\\Delta m = ZM_H + (A-Z)m_n - M_{atom}",
            description: "When atomic mass given (includes electrons)",
            variables: [],
            derivedFrom: "mass-defect",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δm] = u (atomic mass unit)",
            neet_frequency: "medium",
          },
          {
            id: "be-per-nucleon",
            name: "BE per nucleon",
            category: "derived",
            formula: "\\frac{BE}{A}",
            latex: "\\frac{BE}{A}",
            description: "Stability indicator - higher is more stable",
            variables: [],
            derivedFrom: "binding-energy-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[BE] = [Δm][c²] = MeV",
            neet_frequency: "high",
          },
          {
            id: "for-fe-56",
            name: "For Fe-56",
            category: "derived",
            formula: "\\frac{BE}{A} \\approx 8.8 \\text{ MeV}",
            latex: "\\frac{BE}{A} \\approx 8.8 \\text{ MeV}",
            description: "Maximum stability",
            variables: [],
            derivedFrom: "binding-energy-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[BE] = [Δm][c²] = MeV",
            neet_frequency: "high",
          },
          {
            id: "separation-energy",
            name: "Separation energy",
            category: "derived",
            formula: "S_n = BE(A,Z) - BE(A-1,Z)",
            latex: "S_n = BE(A,Z) - BE(A-1,Z)",
            description: "Energy to remove one neutron",
            variables: [],
            derivedFrom: "binding-energy-formula",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[BE] = [Δm][c²] = MeV",
            neet_frequency: "medium",
          },
          {
            id: "stability-indicator",
            name: "Stability indicator",
            category: "derived",
            formula: "f < 0 \\Rightarrow \\text{stable}",
            latex: "f < 0 \\Rightarrow \\text{stable}",
            description: "Negative packing fraction means stable",
            variables: [],
            derivedFrom: "packing-fraction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "low",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using electron mass in mass defect calculation",
            correct: "Use proton and neutron masses only for nuclear mass defect. If atomic mass is given, electron masses cancel out.",
            whyItHappens: "Confusing atomic mass with nuclear mass",
            neetExample: "NEET 2020: Calculate mass defect of He-4 given nuclear mass"
          },
          {
            mistake: "Thinking higher binding energy means less stable",
            correct: "Higher BE (or BE/A) means MORE stable. More energy needed to break apart = more tightly bound.",
            whyItHappens: "Confusing \"energy to break\" with instability",
            neetExample: "NEET 2019: Which nucleus is most stable given BE/A values?"
          },
          {
            mistake: "Thinking nuclear density varies with nuclear size",
            correct: "Nuclear density is CONSTANT (~2.3 × 10¹⁷ kg/m³) for all nuclei regardless of A.",
            whyItHappens: "Assuming larger nucleus has different density",
            neetExample: "NEET 2021: Compare densities of Carbon-12 and Uranium-238"
          },
          {
            mistake: "Using wrong value for R₀",
            correct: "R₀ ≈ 1.2 fm (some books use 1.25 or 1.3). Check what value is given in the problem.",
            whyItHappens: "Different sources use slightly different values",
            neetExample: "NEET 2022: Calculate nuclear radius using given R₀"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate mass defect and binding energy",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Compare BE/A for stability",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Nuclear radius ratio calculation",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Why nuclear density is constant",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Find nuclear radius given mass number",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Binding energy calculation",
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
            pattern: "BE/A and stability comparison",
            frequency: "high",
            yearAsked: [
              2019,
              2021,
              2022,
              2023
            ]
          },
          {
            pattern: "Nuclear radius ratio",
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
            pattern: "Nuclear density is constant",
            frequency: "medium",
            yearAsked: [2018, 2020, 2023]
          }
        ],
        analogies: [
          {
            concept: "Binding energy",
            analogy: "Breaking apart tight Lego structure",
            mapping: "More energy to break = more tightly connected = more stable"
          },
          {
            concept: "Constant nuclear density",
            analogy: "Marbles packed in different size boxes",
            mapping: "Packing density is same regardless of box size - nucleons are packed the same way"
          },
          {
            concept: "BE/A curve",
            analogy: "Mountain with peak at Iron",
            mapping: "Both fusion (climbing from left) and fission (climbing from right) reach the peak, releasing energy"
          }
        ],
        questions: [],
      },
      {
        id: "radioactivity",
        name: "Radioactive Decay",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Radioactive decay is spontaneous transformation of unstable nuclei. The decay follows exponential law: N = N₀e^(-λt). Half-life t₁/₂ = 0.693/λ is time for half the nuclei to decay. Mean life τ = 1/λ = 1.44 × t₁/₂. Activity A = λN = -dN/dt measures decay rate in Becquerel (1 Bq = 1 decay/s) or Curie (1 Ci = 3.7 × 10¹⁰ Bq). After n half-lives, N = N₀/2ⁿ.",
          realWorldAnalogy: "Like popcorn popping - each kernel (nucleus) pops randomly at unpredictable moment, but overall rate is predictable. Half the kernels pop in each half-life period. Cannot predict WHICH kernel will pop, only HOW MANY.",
          keyPoints: [
            "Radioactivity is spontaneous, random, and unaffected by external conditions",
            "Decay constant λ: probability of decay per unit time",
            "Decay law: N = N₀e^(-λt) (exponential decrease)",
            "Half-life: t₁/₂ = ln2/λ = 0.693/λ",
            "Mean life: τ = 1/λ = t₁/₂/0.693 = 1.44 × t₁/₂",
            "Activity: A = λN = A₀e^(-λt) (also decreases exponentially)",
            "After n half-lives: N = N₀/2ⁿ, A = A₀/2ⁿ",
            "Units: Becquerel (SI, 1 Bq = 1 decay/s), Curie (1 Ci = 3.7 × 10¹⁰ Bq)",
            "Successive disintegration: dN₂/dt = λ₁N₁ - λ₂N₂"
          ],
          prerequisites: ["binding-energy"],
          ncertReference: "NCERT Class 12, Chapter 13, Section 13.5"
        },
        formulas: [
          {
            id: "decay-law",
            name: "Radioactive Decay Law",
            category: "base",
            formula: "N = N₀e^(-λt)",
            latex: "N = N_0 e^{-\\lambda t}",
            description: "Number of undecayed nuclei remaining at time t",
            variables: [
              {
                symbol: "N",
                meaning: "Number of nuclei at time t",
                unit: "dimensionless",
                typical_values: "Decreasing"
              },
              {
                symbol: "N₀",
                meaning: "Initial number of nuclei",
                unit: "dimensionless",
                typical_values: "Starting value"
              },
              {
                symbol: "λ",
                meaning: "Decay constant",
                unit: "s⁻¹ or yr⁻¹",
                typical_values: "10⁻⁵ to 10⁻¹⁰ s⁻¹"
              },
              {
                symbol: "t",
                meaning: "Time elapsed",
                unit: "s or years",
                typical_values: "Depends on isotope"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: [
              "At t = 0: N = N₀ (all present)",
              "At t = ∞: N = 0 (all decayed)",
              "At t = t₁/₂: N = N₀/2",
              "At t = τ (mean life): N = N₀/e ≈ 0.37N₀"
            ],
            dimensionalCheck: "[N] = dimensionless count",
          },
          {
            id: "half-life",
            name: "Half-Life",
            category: "derived",
            formula: "t₁/₂ = 0.693/λ = ln2/λ",
            latex: "t_{1/2} = \\frac{0.693}{\\lambda} = \\frac{\\ln 2}{\\lambda}",
            description: "Time for half the nuclei to decay",
            variables: [
              {
                symbol: "t₁/₂",
                meaning: "Half-life",
                unit: "s or years",
                typical_values: "Fraction of second to billions of years"
              },
              {
                symbol: "λ",
                meaning: "Decay constant",
                unit: "s⁻¹",
                typical_values: "Characteristic of isotope"
              },
              {
                symbol: "0.693",
                meaning: "ln 2",
                unit: "dimensionless",
                typical_values: "Constant"
              }
            ],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: [
              "Half-life is independent of initial amount",
              "Half-life is characteristic of each isotope",
              "C-14: t₁/₂ = 5730 years (carbon dating)",
              "U-238: t₁/₂ = 4.5 billion years"
            ],
            dimensionalCheck: "[t₁/₂] = [1/λ] = s or years",
          },
          {
            id: "mean-life",
            name: "Mean Life",
            category: "derived",
            formula: "τ = 1/λ = t₁/₂/0.693 = 1.44 × t₁/₂",
            latex: "\\tau = \\frac{1}{\\lambda} = \\frac{t_{1/2}}{0.693} = 1.44 \\times t_{1/2}",
            description: "Average lifetime of a radioactive nucleus",
            variables: [
              {
                symbol: "τ",
                meaning: "Mean life (average lifetime)",
                unit: "s or years",
                typical_values: "1.44 × t₁/₂"
              }
            ],
            derivedFrom: "half-life",
            applications: [],
            specialCases: ["Mean life > half-life (τ = 1.44 t₁/₂)", "Mean life = 1/λ (reciprocal of decay constant)", "Physical meaning: if all atoms decayed at initial rate, all would decay in time τ"],
            dimensionalCheck: "[τ] = s",
          },
          {
            id: "activity",
            name: "Activity",
            category: "derived",
            formula: "A = λN = A₀e^(-λt) = -dN/dt",
            latex: "A = \\lambda N = A_0 e^{-\\lambda t} = -\\frac{dN}{dt}",
            description: "Rate of decay (disintegrations per second)",
            variables: [
              {
                symbol: "A",
                meaning: "Activity",
                unit: "Bq (s⁻¹) or Ci",
                typical_values: "Bq to GBq"
              },
              {
                symbol: "A₀",
                meaning: "Initial activity",
                unit: "Bq",
                typical_values: "λN₀"
              }
            ],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: ["A ∝ N (activity proportional to amount)", "SI unit: Becquerel (Bq) = 1 decay/s", "Old unit: Curie (activity of 1g Ra-226)"],
            dimensionalCheck: "[A] = s⁻¹",
          },
          {
            id: "carbon-dating",
            name: "Carbon Dating",
            category: "application",
            formula: "t = t₁/₂ × log₂(A₀/A) / 0.693",
            latex: "t = \\frac{t_{1/2}}{0.693} \\ln\\left(\\frac{A_0}{A}\\right)",
            description: "Age determination using C-14 decay",
            variables: [
              {
                symbol: "t",
                meaning: "Age of sample",
                unit: "years",
                typical_values: "Up to ~50,000 years"
              },
              {
                symbol: "A₀",
                meaning: "Initial activity (living)",
                unit: "Bq",
                typical_values: "Standard value"
              },
              {
                symbol: "A",
                meaning: "Current activity",
                unit: "Bq",
                typical_values: "Measured"
              }
            ],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: ["Valid for organic materials up to ~50,000 years old", "Ratio C-14/C-12 decreases after death", "Assumes constant C-14 production in atmosphere"],
            dimensionalCheck: "[t] = years",
          },
          {
            id: "after-n-half-lives",
            name: "After n half-lives",
            category: "derived",
            formula: "N = \\frac{N_0}{2^n}",
            latex: "N = \\frac{N_0}{2^n}",
            description: "When t = nt₁/₂",
            variables: [],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[N] = dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "fraction-remaining",
            name: "Fraction remaining",
            category: "derived",
            formula: "\\frac{N}{N_0} = e^{-\\lambda t} = \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}",
            latex: "\\frac{N}{N_0} = e^{-\\lambda t} = \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}",
            description: "Alternative form",
            variables: [],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[N] = dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "fraction-decayed",
            name: "Fraction decayed",
            category: "derived",
            formula: "\\frac{N_0 - N}{N_0} = 1 - e^{-\\lambda t}",
            latex: "\\frac{N_0 - N}{N_0} = 1 - e^{-\\lambda t}",
            description: "What has decayed",
            variables: [],
            derivedFrom: "decay-law",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[N] = dimensionless count",
            neet_frequency: "medium",
          },
          {
            id: "decay-constant-from-half-life",
            name: "Decay constant from half-life",
            category: "derived",
            formula: "\\lambda = \\frac{0.693}{t_{1/2}}",
            latex: "\\lambda = \\frac{0.693}{t_{1/2}}",
            description: "Inverse relation",
            variables: [],
            derivedFrom: "half-life",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[t₁/₂] = [1/λ] = s or years",
            neet_frequency: "high",
          },
          {
            id: "after-3-half-lives",
            name: "After 3 half-lives",
            category: "derived",
            formula: "N = \\frac{N_0}{8}",
            latex: "N = \\frac{N_0}{8}",
            description: "1/2³ = 1/8 remaining",
            variables: [],
            derivedFrom: "half-life",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[t₁/₂] = [1/λ] = s or years",
            neet_frequency: "high",
          },
          {
            id: "after-10-half-lives",
            name: "After 10 half-lives",
            category: "derived",
            formula: "N = \\frac{N_0}{1024} \\approx 0.1\\%",
            latex: "N = \\frac{N_0}{1024} \\approx 0.1\\%",
            description: "Essentially all decayed",
            variables: [],
            derivedFrom: "half-life",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[t₁/₂] = [1/λ] = s or years",
            neet_frequency: "medium",
          },
          {
            id: "at-t",
            name: "At t = τ",
            category: "derived",
            formula: "N = N_0/e \\approx 0.37 N_0",
            latex: "N = N_0/e \\approx 0.37 N_0",
            description: "37% remaining at mean life",
            variables: [],
            derivedFrom: "mean-life",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = s",
            neet_frequency: "high",
          },
          {
            id: "total-decays",
            name: "Total decays",
            category: "derived",
            formula: "N_0 = \\int_0^\\infty \\lambda N_0 e^{-\\lambda t} dt",
            latex: "N_0 = \\int_0^\\infty \\lambda N_0 e^{-\\lambda t} dt",
            description: "All eventually decay",
            variables: [],
            derivedFrom: "mean-life",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[τ] = s",
            neet_frequency: "low",
          },
          {
            id: "after-n-half-lives-2",
            name: "After n half-lives",
            category: "derived",
            formula: "A = \\frac{A_0}{2^n}",
            latex: "A = \\frac{A_0}{2^n}",
            description: "Activity halves each t₁/₂",
            variables: [],
            derivedFrom: "activity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = s⁻¹",
            neet_frequency: "high",
          },
          {
            id: "unit-conversion",
            name: "Unit conversion",
            category: "derived",
            formula: "1 \\text{ Ci} = 3.7 \\times 10^{10} \\text{ Bq}",
            latex: "1 \\text{ Ci} = 3.7 \\times 10^{10} \\text{ Bq}",
            description: "Curie to Becquerel",
            variables: [],
            derivedFrom: "activity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = s⁻¹",
            neet_frequency: "medium",
          },
          {
            id: "specific-activity",
            name: "Specific activity",
            category: "derived",
            formula: "a = \\frac{A}{m} = \\frac{\\lambda N_A}{M}",
            latex: "a = \\frac{A}{m} = \\frac{\\lambda N_A}{M}",
            description: "Activity per unit mass",
            variables: [],
            derivedFrom: "activity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[A] = s⁻¹",
            neet_frequency: "low",
          },
          {
            id: "c-14-half-life",
            name: "C-14 half-life",
            category: "derived",
            formula: "t_{1/2} = 5730 \\text{ years}",
            latex: "t_{1/2} = 5730 \\text{ years}",
            description: "Standard value for carbon dating",
            variables: [],
            derivedFrom: "carbon-dating",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[t] = years",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking all nuclei decay in one half-life",
            correct: "Half-life is time for HALF to decay. After 1 t₁/₂: 50% remain. After 2 t₁/₂: 25% remain. After 3 t₁/₂: 12.5% remain.",
            whyItHappens: "Literal interpretation of \"half-life\"",
            neetExample: "NEET 2020: Fraction remaining after 3 half-lives"
          },
          {
            mistake: "Confusing half-life and mean life",
            correct: "Mean life τ = 1.44 × t₁/₂. Mean life is always LONGER than half-life.",
            whyItHappens: "Similar concepts, different definitions",
            neetExample: "NEET 2019: Relation between half-life and mean life"
          },
          {
            mistake: "Using linear decay instead of exponential",
            correct: "Decay is exponential: N = N₀e^(-λt), NOT linear N = N₀(1 - λt). Use N = N₀/2ⁿ for n half-lives.",
            whyItHappens: "Approximating decay as linear for simplicity",
            neetExample: "NEET 2021: Calculate N after 2.5 half-lives"
          },
          {
            mistake: "Forgetting activity also decreases exponentially",
            correct: "Activity A = λN also follows A = A₀e^(-λt). Activity halves each half-life too.",
            whyItHappens: "Focusing only on number of nuclei",
            neetExample: "NEET 2022: Initial activity if 1/4 activity remains after 4 hours"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate remaining nuclei after n half-lives",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find half-life from decay data",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Activity calculations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Carbon dating problems",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Mean life vs half-life relationship",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find decay constant from activity change",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Nuclei/activity remaining after n half-lives",
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
            pattern: "Half-life and decay constant relationship",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Mean life calculation",
            frequency: "high",
            yearAsked: [
              2018,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Activity problems",
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
            concept: "Half-life",
            analogy: "Popcorn popping",
            mapping: "Each kernel pops randomly, but half pop in predictable time. Cannot predict which kernel, only how many."
          },
          {
            concept: "Exponential decay",
            analogy: "Bank account losing half each year",
            mapping: "After 3 years: 1/8 remains, not zero. Never truly reaches zero, just gets smaller."
          },
          {
            concept: "Mean life",
            analogy: "Average lifespan",
            mapping: "Average age at death. Longer than median (half-life) because some live much longer."
          }
        ],
        questions: [],
      },
      {
        id: "alpha-beta-gamma",
        name: "Types of Radioactive Decay",
        weightage: 1,
        difficulty: "medium",
        theory: {
          summary: "Three main types of radioactive decay: (1) Alpha (α): emission of He-4 nucleus (₂He⁴), A decreases by 4, Z decreases by 2. (2) Beta-minus (β⁻): neutron → proton + electron + antineutrino, A unchanged, Z increases by 1. (3) Beta-plus (β⁺): proton → neutron + positron + neutrino, A unchanged, Z decreases by 1. (4) Gamma (γ): emission of high-energy photons, no change in A or Z. Alpha particles are most ionizing but least penetrating; gamma rays are least ionizing but most penetrating.",
          realWorldAnalogy: "Alpha decay is like a large truck leaving a parking lot (large particle, slow). Beta is like a sports car (small, fast). Gamma is like a motorcycle - can weave through traffic easily (most penetrating). Heavier vehicles cause more 'damage' nearby (ionizing power).",
          keyPoints: [
            "Alpha (α): ₂He⁴ emitted, A → A-4, Z → Z-2",
            "Beta-minus (β⁻): n → p + e⁻ + ν̄, A unchanged, Z → Z+1",
            "Beta-plus (β⁺): p → n + e⁺ + ν, A unchanged, Z → Z-1",
            "Gamma (γ): High energy photon, A and Z unchanged",
            "Penetrating power: α < β < γ",
            "Ionizing power: α > β > γ",
            "α stopped by paper, β by aluminum, γ by lead/concrete",
            "Q-value = (m_initial - m_final)c² (energy released)",
            "Neutrino carries away variable energy in β decay",
            "Electron capture: p + e⁻ → n + ν (alternative to β⁺)"
          ],
          prerequisites: ["binding-energy", "radioactivity"],
          ncertReference: "NCERT Class 12, Chapter 13, Section 13.5"
        },
        formulas: [
          {
            id: "alpha-decay",
            name: "Alpha Decay",
            category: "base",
            formula: "₍Z₎X^A → ₍Z-2₎Y^(A-4) + ₂He⁴",
            latex: "^A_Z X \\rightarrow ^{A-4}_{Z-2} Y + ^4_2 He",
            description: "Emission of helium-4 nucleus from parent",
            variables: [
              {
                symbol: "X",
                meaning: "Parent nucleus",
                unit: "nucleus",
                typical_values: "Heavy elements (A > 200)"
              },
              {
                symbol: "Y",
                meaning: "Daughter nucleus",
                unit: "nucleus",
                typical_values: "A-4, Z-2"
              },
              {
                symbol: "₂He⁴",
                meaning: "Alpha particle",
                unit: "particle",
                typical_values: "2p + 2n"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["α particles are mono-energetic (discrete Q-value)", "Daughter recoils with small kinetic energy", "Most energy goes to lighter α particle"],
            dimensionalCheck: "Conservation of A and Z",
          },
          {
            id: "beta-minus-decay",
            name: "Beta-Minus Decay",
            category: "base",
            formula: "₍Z₎X^A → ₍Z+1₎Y^A + e⁻ + ν̄",
            latex: "^A_Z X \\rightarrow ^A_{Z+1} Y + e^- + \\bar{\\nu}",
            description: "Neutron converts to proton with electron and antineutrino emission",
            variables: [
              {
                symbol: "e⁻",
                meaning: "Beta particle (electron)",
                unit: "particle",
                typical_values: "Continuous energy spectrum"
              },
              {
                symbol: "ν̄",
                meaning: "Antineutrino",
                unit: "particle",
                typical_values: "Nearly massless"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["β particles have continuous energy spectrum (0 to Q)", "Neutrino carries away variable energy", "Occurs in neutron-rich nuclei"],
            dimensionalCheck: "A unchanged, Z increases by 1",
          },
          {
            id: "beta-plus-decay",
            name: "Beta-Plus Decay",
            category: "base",
            formula: "₍Z₎X^A → ₍Z-1₎Y^A + e⁺ + ν",
            latex: "^A_Z X \\rightarrow ^A_{Z-1} Y + e^+ + \\nu",
            description: "Proton converts to neutron with positron and neutrino emission",
            variables: [
              {
                symbol: "e⁺",
                meaning: "Positron",
                unit: "particle",
                typical_values: "Antiparticle of electron"
              },
              {
                symbol: "ν",
                meaning: "Neutrino",
                unit: "particle",
                typical_values: "Nearly massless"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Occurs in proton-rich nuclei", "Positron annihilates with electron: e⁺ + e⁻ → 2γ", "Each γ has energy 0.511 MeV"],
            dimensionalCheck: "A unchanged, Z decreases by 1",
          },
          {
            id: "gamma-emission",
            name: "Gamma Emission",
            category: "base",
            formula: "X* → X + γ",
            latex: "^A_Z X^* \\rightarrow ^A_Z X + \\gamma",
            description: "Excited nucleus emits high-energy photon",
            variables: [
              {
                symbol: "X*",
                meaning: "Excited nucleus",
                unit: "nucleus",
                typical_values: "Higher energy state"
              },
              {
                symbol: "γ",
                meaning: "Gamma photon",
                unit: "photon",
                typical_values: "keV to MeV energy"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["No change in A or Z (isomeric transition)", "Gamma rays are mono-energetic", "Most penetrating radiation"],
            dimensionalCheck: "A and Z both unchanged",
          },
          {
            id: "q-value",
            name: "Q-Value of Decay",
            category: "derived",
            formula: "Q = (m_parent - m_products)c²",
            latex: "Q = (m_{parent} - m_{products})c^2",
            description: "Energy released in decay",
            variables: [
              {
                symbol: "Q",
                meaning: "Energy released",
                unit: "MeV",
                typical_values: "0.1-10 MeV typically"
              },
              {
                symbol: "m",
                meaning: "Rest masses",
                unit: "u",
                typical_values: "Look up values"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Q > 0: decay is energetically allowed", "Q-value appears as KE of products", "For α: most KE goes to α particle (lighter)"],
            dimensionalCheck: "[Q] = MeV",
          },
          {
            id: "u-238-decay",
            name: "U-238 decay",
            category: "derived",
            formula: "^{238}_{92}U \\rightarrow ^{234}_{90}Th + ^4_2He",
            latex: "^{238}_{92}U \\rightarrow ^{234}_{90}Th + ^4_2He",
            description: "Common example",
            variables: [],
            derivedFrom: "alpha-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Conservation of A and Z",
            neet_frequency: "high",
          },
          {
            id: "ra-226-decay",
            name: "Ra-226 decay",
            category: "derived",
            formula: "^{226}_{88}Ra \\rightarrow ^{222}_{86}Rn + ^4_2He",
            latex: "^{226}_{88}Ra \\rightarrow ^{222}_{86}Rn + ^4_2He",
            description: "Radium to Radon",
            variables: [],
            derivedFrom: "alpha-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Conservation of A and Z",
            neet_frequency: "medium",
          },
          {
            id: "ke-of-particle",
            name: "KE of α-particle",
            category: "derived",
            formula: "KE_\\alpha = \\frac{A-4}{A} \\times Q",
            latex: "KE_\\alpha = \\frac{A-4}{A} \\times Q",
            description: "Momentum conservation",
            variables: [],
            derivedFrom: "alpha-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Conservation of A and Z",
            neet_frequency: "high",
          },
          {
            id: "c-14-decay",
            name: "C-14 decay",
            category: "derived",
            formula: "^{14}_6C \\rightarrow ^{14}_7N + e^- + \\bar{\\nu}",
            latex: "^{14}_6C \\rightarrow ^{14}_7N + e^- + \\bar{\\nu}",
            description: "Carbon dating isotope",
            variables: [],
            derivedFrom: "beta-minus-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A unchanged, Z increases by 1",
            neet_frequency: "high",
          },
          {
            id: "neutron-decay",
            name: "Neutron decay",
            category: "derived",
            formula: "n \\rightarrow p + e^- + \\bar{\\nu}",
            latex: "n \\rightarrow p + e^- + \\bar{\\nu}",
            description: "Free neutron (t₁/₂ ≈ 10 min)",
            variables: [],
            derivedFrom: "beta-minus-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A unchanged, Z increases by 1",
            neet_frequency: "medium",
          },
          {
            id: "energy-spectrum",
            name: "Energy spectrum",
            category: "derived",
            formula: "KE_{max} = Q",
            latex: "KE_{max} = Q",
            description: "Continuous spectrum 0 to Q",
            variables: [],
            derivedFrom: "beta-minus-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A unchanged, Z increases by 1",
            neet_frequency: "medium",
          },
          {
            id: "na-22-decay",
            name: "Na-22 decay",
            category: "derived",
            formula: "^{22}_{11}Na \\rightarrow ^{22}_{10}Ne + e^+ + \\nu",
            latex: "^{22}_{11}Na \\rightarrow ^{22}_{10}Ne + e^+ + \\nu",
            description: "Example of β⁺ decay",
            variables: [],
            derivedFrom: "beta-plus-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A unchanged, Z decreases by 1",
            neet_frequency: "medium",
          },
          {
            id: "electron-capture",
            name: "Electron capture",
            category: "derived",
            formula: "^A_Z X + e^- \\rightarrow ^A_{Z-1} Y + \\nu",
            latex: "^A_Z X + e^- \\rightarrow ^A_{Z-1} Y + \\nu",
            description: "Alternative to β⁺",
            variables: [],
            derivedFrom: "beta-plus-decay",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A unchanged, Z decreases by 1",
            neet_frequency: "medium",
          },
          {
            id: "energy-of",
            name: "Energy of γ",
            category: "derived",
            formula: "E_\\gamma = E_i - E_f",
            latex: "E_\\gamma = E_i - E_f",
            description: "Discrete energies",
            variables: [],
            derivedFrom: "gamma-emission",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z both unchanged",
            neet_frequency: "medium",
          },
          {
            id: "after-or-decay",
            name: "After α or β decay",
            category: "derived",
            formula: "\\text{Often follows other decays}",
            latex: "\\text{Often follows other decays}",
            description: "Daughter in excited state",
            variables: [],
            derivedFrom: "gamma-emission",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z both unchanged",
            neet_frequency: "medium",
          },
          {
            id: "for-decay",
            name: "For α decay",
            category: "derived",
            formula: "Q = [M_X - M_Y - M_{He}] \\times 931.5 \\text{ MeV}",
            latex: "Q = [M_X - M_Y - M_{He}] \\times 931.5 \\text{ MeV}",
            description: "Using atomic masses",
            variables: [],
            derivedFrom: "q-value",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "high",
          },
          {
            id: "q-0",
            name: "Q > 0",
            category: "derived",
            formula: "\\text{Spontaneous decay possible}",
            latex: "\\text{Spontaneous decay possible}",
            description: "Exoergic reaction",
            variables: [],
            derivedFrom: "q-value",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing atomic number changes in different decays",
            correct: "α: Z→Z-2, A→A-4. β⁻: Z→Z+1, A unchanged. β⁺: Z→Z-1, A unchanged. γ: No change.",
            whyItHappens: "Mixing up the different decay modes",
            neetExample: "NEET 2020: After α and 2β⁻ decays, find new A and Z"
          },
          {
            mistake: "Thinking β particles are mono-energetic",
            correct: "β particles have CONTINUOUS energy spectrum (0 to Q). α and γ are mono-energetic.",
            whyItHappens: "Not accounting for neutrino carrying variable energy",
            neetExample: "NEET 2019: Why is β energy spectrum continuous?"
          },
          {
            mistake: "Forgetting penetration and ionization are inverse",
            correct: "Most ionizing (α) is least penetrating. Least ionizing (γ) is most penetrating.",
            whyItHappens: "Thinking higher energy means more damage everywhere",
            neetExample: "NEET 2021: Order α, β, γ by penetrating power"
          },
          {
            mistake: "Writing wrong products in nuclear equations",
            correct: "Check both mass number (A) and atomic number (Z) conservation. Sum on both sides must be equal.",
            whyItHappens: "Not carefully balancing nuclear equations",
            neetExample: "NEET 2022: Write balanced equation for Ra-226 α decay"
          }
        ],
        variations: [
          {
            type: "conceptual",
            description: "Identify decay type from nuclear equation",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find daughter nucleus after given decays",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare penetrating and ionizing powers",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Calculate Q-value of decay",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Explain continuous β spectrum",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Write balanced nuclear equation",
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
            pattern: "Find A, Z after sequence of decays",
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
            pattern: "Penetrating/ionizing power order",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2021,
              2022
            ]
          },
          {
            pattern: "Q-value calculation",
            frequency: "medium",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Alpha particle",
            analogy: "Cannonball",
            mapping: "Heavy, slow, stopped easily but causes massive local damage"
          },
          {
            concept: "Beta particle",
            analogy: "Bullet",
            mapping: "Light, fast, penetrates further but less local damage"
          },
          {
            concept: "Gamma ray",
            analogy: "X-ray beam",
            mapping: "No mass, travels far, needs thick shielding"
          }
        ],
        questions: [],
      },
      {
        id: "nuclear-fission",
        name: "Nuclear Fission",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Nuclear fission is the splitting of a heavy nucleus (A > 200) into two lighter nuclei with release of energy and neutrons. Triggered by neutron absorption in fissile materials (U-235, Pu-239). Each fission releases ~200 MeV and 2-3 neutrons. Chain reaction occurs when released neutrons cause further fissions. Critical mass is minimum mass needed for sustained chain reaction. Controlled fission in nuclear reactors; uncontrolled in bombs.",
          realWorldAnalogy: "Like dropping a heavy, wobbly water balloon - it splits into smaller droplets and releases energy. If each droplet can trigger more balloons to split, you get a chain reaction.",
          keyPoints: [
            "Heavy nucleus (U-235, Pu-239) + neutron → 2 fission fragments + 2-3 neutrons + ~200 MeV",
            "Energy from increase in BE/A (moving toward Fe on BE curve)",
            "Fission products are neutron-rich → undergo β⁻ decay",
            "Chain reaction: neutrons from fission cause more fissions",
            "Critical mass: minimum mass for self-sustained chain reaction",
            "Multiplication factor k = neutrons in gen(n+1)/gen(n)",
            "k < 1: subcritical, k = 1: critical, k > 1: supercritical",
            "Moderator slows neutrons (heavy water, graphite)",
            "Control rods absorb excess neutrons (Cd, B)",
            "Fissile (can fission with any neutron): U-235, Pu-239",
            "Fissionable (needs fast neutron): U-238"
          ],
          prerequisites: ["binding-energy", "alpha-beta-gamma"],
          ncertReference: "NCERT Class 12, Chapter 13, Section 13.6"
        },
        formulas: [
          {
            id: "fission-reaction",
            name: "Typical Fission Reaction",
            category: "base",
            formula: "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + Q",
            latex: "^{235}_{92}U + ^1_0n \\rightarrow ^{141}_{56}Ba + ^{92}_{36}Kr + 3^1_0n + Q",
            description: "Representative uranium fission (many product combinations possible)",
            variables: [
              {
                symbol: "U-235",
                meaning: "Fissile uranium isotope",
                unit: "nucleus",
                typical_values: "0.7% of natural U"
              },
              {
                symbol: "n",
                meaning: "Neutron",
                unit: "particle",
                typical_values: "Thermal neutrons preferred"
              },
              {
                symbol: "Q",
                meaning: "Energy released",
                unit: "MeV",
                typical_values: "~200 MeV per fission"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Products vary - many combinations possible", "On average 2.5 neutrons per fission", "Most energy in KE of fission fragments"],
            dimensionalCheck: "A and Z conserved",
          },
          {
            id: "fission-energy",
            name: "Fission Energy Calculation",
            category: "derived",
            formula: "Q = (BE_products - BE_reactants)",
            latex: "Q = \\sum BE_{products} - \\sum BE_{reactants}",
            description: "Energy released from binding energy difference",
            variables: [
              {
                symbol: "BE",
                meaning: "Binding energy",
                unit: "MeV",
                typical_values: "Use BE/A × A"
              },
              {
                symbol: "Q",
                meaning: "Energy released",
                unit: "MeV",
                typical_values: "~200 MeV"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Products have higher BE/A than reactants", "Difference ~0.9 MeV/nucleon × 235 nucleons ≈ 200 MeV"],
            dimensionalCheck: "[Q] = MeV",
          },
          {
            id: "multiplication-factor",
            name: "Multiplication Factor",
            category: "derived",
            formula: "k = neutrons in generation(n+1) / generation(n)",
            latex: "k = \\frac{N_{n+1}}{N_n}",
            description: "Ratio of neutrons in successive generations",
            variables: [
              {
                symbol: "k",
                meaning: "Multiplication factor",
                unit: "dimensionless",
                typical_values: "~1 in reactor"
              },
              {
                symbol: "N",
                meaning: "Number of neutrons",
                unit: "count",
                typical_values: "Per generation"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Nuclear reactor operates at k = 1", "Bomb requires k >> 1 for explosive release", "Control rods adjust k by absorbing neutrons"],
            dimensionalCheck: "Dimensionless ratio",
          },
          {
            id: "reactor-power",
            name: "Reactor Power",
            category: "application",
            formula: "P = (fission rate) × (energy per fission)",
            latex: "P = \\frac{N}{t} \\times Q",
            description: "Power output from nuclear reactor",
            variables: [
              {
                symbol: "P",
                meaning: "Power output",
                unit: "W",
                typical_values: "MW to GW"
              },
              {
                symbol: "N/t",
                meaning: "Fissions per second",
                unit: "s⁻¹",
                typical_values: "~10¹⁹ per second for 1 GW"
              },
              {
                symbol: "Q",
                meaning: "Energy per fission",
                unit: "J",
                typical_values: "200 MeV = 3.2 × 10⁻¹¹ J"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["1 GW reactor uses ~3 kg U-235 per day", "Efficiency ~30% for thermal power plants"],
            dimensionalCheck: "[P] = W",
          },
          {
            id: "energy-per-fission",
            name: "Energy per fission",
            category: "derived",
            formula: "Q \\approx 200 \\text{ MeV}",
            latex: "Q \\approx 200 \\text{ MeV}",
            description: "Most as KE of fragments",
            variables: [],
            derivedFrom: "fission-reaction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved",
            neet_frequency: "high",
          },
          {
            id: "per-kg-of-u-235",
            name: "Per kg of U-235",
            category: "derived",
            formula: "E \\approx 8 \\times 10^{13} \\text{ J}",
            latex: "E \\approx 8 \\times 10^{13} \\text{ J}",
            description: "Enormous energy density",
            variables: [],
            derivedFrom: "fission-reaction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved",
            neet_frequency: "medium",
          },
          {
            id: "mass-converted",
            name: "Mass converted",
            category: "derived",
            formula: "\\Delta m \\approx 0.2 \\text{ u per fission}",
            latex: "\\Delta m \\approx 0.2 \\text{ u per fission}",
            description: "Using E = Δmc²",
            variables: [],
            derivedFrom: "fission-reaction",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved",
            neet_frequency: "medium",
          },
          {
            id: "using-bea",
            name: "Using BE/A",
            category: "derived",
            formula: "Q = A \\times \\Delta(BE/A)",
            latex: "Q = A \\times \\Delta(BE/A)",
            description: "Approximate calculation",
            variables: [],
            derivedFrom: "fission-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "high",
          },
          {
            id: "energy-from-mass",
            name: "Energy from mass",
            category: "derived",
            formula: "Q = \\Delta m \\times 931.5 \\text{ MeV}",
            latex: "Q = \\Delta m \\times 931.5 \\text{ MeV}",
            description: "Alternative method",
            variables: [],
            derivedFrom: "fission-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "high",
          },
          {
            id: "subcritical",
            name: "Subcritical",
            category: "derived",
            formula: "k < 1",
            latex: "k < 1",
            description: "Chain reaction dies out",
            variables: [],
            derivedFrom: "multiplication-factor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "critical",
            name: "Critical",
            category: "derived",
            formula: "k = 1",
            latex: "k = 1",
            description: "Sustained reaction (reactor)",
            variables: [],
            derivedFrom: "multiplication-factor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "supercritical",
            name: "Supercritical",
            category: "derived",
            formula: "k > 1",
            latex: "k > 1",
            description: "Exponential growth (bomb)",
            variables: [],
            derivedFrom: "multiplication-factor",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless ratio",
            neet_frequency: "high",
          },
          {
            id: "for-1-gw-reactor",
            name: "For 1 GW reactor",
            category: "derived",
            formula: "\\frac{N}{t} = \\frac{10^9}{3.2 \\times 10^{-11}} \\approx 3 \\times 10^{19}",
            latex: "\\frac{N}{t} = \\frac{10^9}{3.2 \\times 10^{-11}} \\approx 3 \\times 10^{19}",
            description: "Fissions per second",
            variables: [],
            derivedFrom: "reactor-power",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[P] = W",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Confusing fissile and fissionable",
            correct: "Fissile (U-235, Pu-239): can fission with slow (thermal) neutrons. Fissionable (U-238): needs fast neutrons.",
            whyItHappens: "Similar-sounding terms",
            neetExample: "NEET 2020: Which isotope undergoes fission with thermal neutrons?"
          },
          {
            mistake: "Thinking moderator controls reaction rate",
            correct: "Moderator SLOWS neutrons to thermal energies. Control rods ABSORB neutrons to control rate.",
            whyItHappens: "Confusing roles of reactor components",
            neetExample: "NEET 2019: Function of moderator in nuclear reactor"
          },
          {
            mistake: "Wrong energy per fission",
            correct: "Each fission releases ~200 MeV (not 200 eV or 200 keV). This is enormous compared to chemical reactions (~eV).",
            whyItHappens: "Confusion with energy units",
            neetExample: "NEET 2021: Energy released in fission of U-235"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate energy released in fission",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Explain chain reaction and critical mass",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Functions of reactor components",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Number of fissions for given power",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Energy per fission calculation",
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
            pattern: "Nuclear reactor components",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Critical mass and chain reaction",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Fissile vs fissionable",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          }
        ],
        analogies: [
          {
            concept: "Chain reaction",
            analogy: "Dominoes falling",
            mapping: "One domino triggers many, which trigger more - exponential growth"
          },
          {
            concept: "Critical mass",
            analogy: "Minimum crowd for applause",
            mapping: "Need enough people so that each clap inspires at least one other person to clap"
          },
          {
            concept: "Moderator",
            analogy: "Speed bump",
            mapping: "Slows down neutrons without absorbing them, making them more likely to cause fission"
          }
        ],
        questions: [],
      },
      {
        id: "nuclear-fusion",
        name: "Nuclear Fusion",
        weightage: 0.5,
        difficulty: "medium",
        theory: {
          summary: "Nuclear fusion is the combining of light nuclei to form a heavier nucleus with release of energy. Powers the Sun and stars through hydrogen fusion to helium. Requires extremely high temperature (~10⁷ K) to overcome Coulomb repulsion (hence called thermonuclear reaction). Energy released because BE/A increases for light nuclei. Fusion releases more energy per nucleon than fission but is harder to achieve and control on Earth.",
          realWorldAnalogy: "Like making a big snowball from small ones - you release energy (your effort goes into packing). But first you need to push the small snowballs together hard (overcome repulsion). The Sun is hot enough to 'push' nuclei together naturally.",
          keyPoints: [
            "Light nuclei combine to form heavier nucleus + energy",
            "Source of energy in Sun and stars",
            "Requires T ~ 10⁷ K to overcome Coulomb barrier",
            "At high T, matter is plasma (ionized gas)",
            "Proton-proton chain: 4¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV",
            "Energy per nucleon: higher for fusion than fission",
            "Fusion moves up the BE/A curve (toward Fe)",
            "Thermonuclear bomb: uncontrolled fusion",
            "Tokamak: magnetic confinement for controlled fusion",
            "Lawson criterion: nτ > 10¹⁴ s/cm³ for breakeven"
          ],
          prerequisites: ["binding-energy", "nuclear-fission"],
          ncertReference: "NCERT Class 12, Chapter 13, Section 13.7"
        },
        formulas: [
          {
            id: "proton-proton-chain",
            name: "Proton-Proton Chain",
            category: "base",
            formula: "4¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV",
            latex: "4 ^1_1H \\rightarrow ^4_2He + 2e^+ + 2\\nu + 26.7 \\text{ MeV}",
            description: "Net reaction for hydrogen burning in Sun",
            variables: [
              {
                symbol: "¹H",
                meaning: "Proton (hydrogen nucleus)",
                unit: "nucleus",
                typical_values: "Most abundant in Sun"
              },
              {
                symbol: "⁴He",
                meaning: "Helium-4 nucleus",
                unit: "nucleus",
                typical_values: "Product"
              },
              {
                symbol: "e⁺",
                meaning: "Positron",
                unit: "particle",
                typical_values: "Annihilates with electron"
              },
              {
                symbol: "ν",
                meaning: "Neutrino",
                unit: "particle",
                typical_values: "Carries energy away"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Sun converts 600 million tons H to He per second", "Mass lost ≈ 4 million tons per second", "Sun has fuel for ~5 billion more years"],
            dimensionalCheck: "A and Z conserved (with positrons)",
          },
          {
            id: "dt-fusion",
            name: "D-T Fusion",
            category: "base",
            formula: "²H + ³H → ⁴He + n + 17.6 MeV",
            latex: "^2_1H + ^3_1H \\rightarrow ^4_2He + ^1_0n + 17.6 \\text{ MeV}",
            description: "Deuterium-tritium fusion (easiest to achieve)",
            variables: [
              {
                symbol: "²H",
                meaning: "Deuterium",
                unit: "nucleus",
                typical_values: "Heavy hydrogen (1p + 1n)"
              },
              {
                symbol: "³H",
                meaning: "Tritium",
                unit: "nucleus",
                typical_values: "Superheavy hydrogen (1p + 2n)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Most promising for controlled fusion reactors", "Neutron carries 80% of energy (14.1 MeV)", "He carries 20% of energy (3.5 MeV)"],
            dimensionalCheck: "A: 2+3 = 4+1, Z: 1+1 = 2+0",
          },
          {
            id: "fusion-energy",
            name: "Fusion Energy Calculation",
            category: "derived",
            formula: "Q = (m_reactants - m_products)c²",
            latex: "Q = (m_{reactants} - m_{products})c^2",
            description: "Energy released from mass difference",
            variables: [
              {
                symbol: "Q",
                meaning: "Energy released",
                unit: "MeV",
                typical_values: "5-25 MeV per reaction"
              },
              {
                symbol: "m",
                meaning: "Nuclear masses",
                unit: "u",
                typical_values: "Use atomic masses"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["About 0.7% of mass converted to energy", "Much higher than fission (0.09%)"],
            dimensionalCheck: "[Q] = MeV",
          },
          {
            id: "temperature-requirement",
            name: "Temperature for Fusion",
            category: "derived",
            formula: "T ~ 10⁷ - 10⁸ K",
            latex: "T \\sim 10^7 - 10^8 \\text{ K}",
            description: "Temperature needed to overcome Coulomb barrier",
            variables: [
              {
                symbol: "T",
                meaning: "Temperature",
                unit: "K",
                typical_values: "10⁷ K for p-p, 10⁸ K for D-T"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["At these temperatures, matter is plasma", "Quantum tunneling assists fusion even below barrier", "Confinement is major challenge (magnetic or inertial)"],
            dimensionalCheck: "[T] = K",
          },
          {
            id: "energy-per-fusion",
            name: "Energy per fusion",
            category: "derived",
            formula: "Q = 26.7 \\text{ MeV for 4 protons}",
            latex: "Q = 26.7 \\text{ MeV for 4 protons}",
            description: "Net energy release",
            variables: [],
            derivedFrom: "proton-proton-chain",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved (with positrons)",
            neet_frequency: "high",
          },
          {
            id: "per-nucleon",
            name: "Per nucleon",
            category: "derived",
            formula: "\\frac{26.7}{4} \\approx 6.7 \\text{ MeV/nucleon}",
            latex: "\\frac{26.7}{4} \\approx 6.7 \\text{ MeV/nucleon}",
            description: "Higher than fission (~0.9 MeV/nucleon)",
            variables: [],
            derivedFrom: "proton-proton-chain",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved (with positrons)",
            neet_frequency: "high",
          },
          {
            id: "mass-converted",
            name: "Mass converted",
            category: "derived",
            formula: "\\Delta m = 4m_p - m_{He} \\approx 0.03 u",
            latex: "\\Delta m = 4m_p - m_{He} \\approx 0.03 u",
            description: "About 0.7% of mass",
            variables: [],
            derivedFrom: "proton-proton-chain",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A and Z conserved (with positrons)",
            neet_frequency: "medium",
          },
          {
            id: "lower-temperature-needed",
            name: "Lower temperature needed",
            category: "derived",
            formula: "T \\sim 10^8 K",
            latex: "T \\sim 10^8 K",
            description: "Easier than p-p chain",
            variables: [],
            derivedFrom: "dt-fusion",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A: 2+3 = 4+1, Z: 1+1 = 2+0",
            neet_frequency: "medium",
          },
          {
            id: "thermonuclear-weapon",
            name: "Thermonuclear weapon",
            category: "derived",
            formula: "\\text{Uses D-T and Li-D fuels}",
            latex: "\\text{Uses D-T and Li-D fuels}",
            description: "H-bomb",
            variables: [],
            derivedFrom: "dt-fusion",
            applications: [],
            specialCases: [],
            dimensionalCheck: "A: 2+3 = 4+1, Z: 1+1 = 2+0",
            neet_frequency: "low",
          },
          {
            id: "using-be",
            name: "Using BE",
            category: "derived",
            formula: "Q = BE_{products} - BE_{reactants}",
            latex: "Q = BE_{products} - BE_{reactants}",
            description: "Alternative method",
            variables: [],
            derivedFrom: "fusion-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "high",
          },
          {
            id: "for-pp-chain",
            name: "For pp chain",
            category: "derived",
            formula: "Q = 4 \\times 938.3 - 3727.4 = 26.5 \\text{ MeV}",
            latex: "Q = 4 \\times 938.3 - 3727.4 = 26.5 \\text{ MeV}",
            description: "Approximate",
            variables: [],
            derivedFrom: "fusion-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Q] = MeV",
            neet_frequency: "medium",
          },
          {
            id: "thermal-energy",
            name: "Thermal energy",
            category: "derived",
            formula: "kT \\sim \\text{keV}",
            latex: "kT \\sim \\text{keV}",
            description: "Comparable to Coulomb barrier",
            variables: [],
            derivedFrom: "temperature-requirement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = K",
            neet_frequency: "medium",
          },
          {
            id: "sun-core",
            name: "Sun core",
            category: "derived",
            formula: "T \\approx 1.5 \\times 10^7 \\text{ K}",
            latex: "T \\approx 1.5 \\times 10^7 \\text{ K}",
            description: "Hydrogen fusion",
            variables: [],
            derivedFrom: "temperature-requirement",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = K",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Thinking fusion is easier to achieve than fission",
            correct: "Fusion requires T ~ 10⁷ K to overcome Coulomb repulsion. Fission just needs slow neutron absorption. Fusion releases more energy but is harder to initiate.",
            whyItHappens: "Confusing energy output with ease of initiation",
            neetExample: "NEET 2020: Why is fusion not yet used for power generation?"
          },
          {
            mistake: "Wrong energy comparison between fusion and fission",
            correct: "Fusion releases MORE energy per nucleon (~6.7 MeV) than fission (~0.9 MeV). But fission releases more per reaction (~200 MeV vs ~26 MeV).",
            whyItHappens: "Not specifying per nucleon vs per reaction",
            neetExample: "NEET 2019: Compare energy release in fusion and fission"
          },
          {
            mistake: "Forgetting why both fission and fusion release energy",
            correct: "Both move toward Fe on BE/A curve. Fusion: light nuclei climb up. Fission: heavy nuclei slide down. Both increase BE/A.",
            whyItHappens: "Not understanding BE/A curve",
            neetExample: "NEET 2021: Explain using BE/A curve why both release energy"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate energy released in fusion",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Why fusion requires high temperature",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Energy source of Sun and stars",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Compare fusion and fission",
            difficulty: "medium"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Energy released in pp chain",
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
            pattern: "Why stars undergo fusion",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Temperature requirement explanation",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          },
          {
            pattern: "Fusion vs fission comparison",
            frequency: "high",
            yearAsked: [
              2019,
              2021,
              2022,
              2023
            ]
          }
        ],
        analogies: [
          {
            concept: "Coulomb barrier",
            analogy: "Pushing magnets together",
            mapping: "Like poles repel - need force to push them close enough to stick (nuclear force)"
          },
          {
            concept: "Temperature requirement",
            analogy: "Shaking a bottle to mix oil and water",
            mapping: "Need vigorous shaking (high temperature) to force immiscible things together"
          },
          {
            concept: "Why Sun doesn't explode",
            analogy: "Pressure cooker at equilibrium",
            mapping: "Fusion pushing out balanced by gravity pushing in - stable equilibrium"
          }
        ],
        questions: [],
      }
    ];