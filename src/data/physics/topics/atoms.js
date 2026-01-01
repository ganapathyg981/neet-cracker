// Atoms - 3% weightage (Tier 2)
// NCERT Class 12, Chapter 12
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const atomsTopics = [
      {
        id: "bohrs-model",
        name: "Bohr's Model & Atomic Spectra",
        weightage: 3,
        difficulty: "medium",
        theory: {
          summary: "Bohr's model explains the hydrogen spectrum using three postulates: (1) Electrons orbit in stationary states without radiating energy, (2) Angular momentum is quantized: L = nh/2π = nℏ, (3) Electrons emit/absorb photons when transitioning between levels: hν = E₂ - E₁. For hydrogen, energy levels are E_n = -13.6/n² eV, radii r_n = n²a₀ where a₀ = 0.529 Å. The model explains spectral series: Lyman (UV), Balmer (visible), Paschen/Brackett/Pfund (IR). Limitations: fails for multi-electron atoms, doesn't explain fine structure or Zeeman effect.",
          realWorldAnalogy: "Like stairs in a building - electrons can only stand on specific steps (energy levels), not in between. Jumping between steps releases/absorbs specific amounts of energy (colors of light). Higher floors (larger n) have more space (larger radius) but electron is less tightly bound (less negative energy).",
          keyPoints: [
            "Postulate 1: Stationary orbits - no radiation while orbiting",
            "Postulate 2: Quantized angular momentum L = nℏ = nh/2π",
            "Postulate 3: Frequency condition hν = E_upper - E_lower",
            "Bohr radius: a₀ = 0.529 Å = 5.29 × 10⁻¹¹ m",
            "Radius: r_n = n²a₀/Z (Z = atomic number for H-like ions)",
            "Energy: E_n = -13.6Z²/n² eV (negative = bound state)",
            "Velocity: v_n = v₁/n where v₁ = 2.2 × 10⁶ m/s for hydrogen",
            "Ground state (n=1): E₁ = -13.6 eV, r₁ = 0.529 Å",
            "Ionization energy = |E₁| = 13.6 eV (energy to remove electron)",
            "Spectral series: Lyman (n₁=1, UV), Balmer (n₁=2, visible), Paschen (n₁=3, IR)",
            "Number of spectral lines from nth level = n(n-1)/2",
            "Rydberg formula: 1/λ = R(1/n₁² - 1/n₂²), R = 1.097 × 10⁷ m⁻¹"
          ],
          prerequisites: [],
          ncertReference: "NCERT Class 12, Chapter 12, Section 12.2-12.6"
        },
        formulas: [
          {
            id: "bohr-radius",
            name: "Bohr Radius",
            category: "base",
            formula: "r_n = n²a₀/Z",
            latex: "r_n = \\frac{n^2 a_0}{Z}",
            description: "Radius of nth orbit in hydrogen-like atom/ion",
            variables: [
              {
                symbol: "r_n",
                meaning: "Radius of nth orbit",
                unit: "m or Å",
                typical_values: "0.529n²/Z Å"
              },
              {
                symbol: "n",
                meaning: "Principal quantum number",
                unit: "dimensionless",
                typical_values: "1, 2, 3..."
              },
              {
                symbol: "a₀",
                meaning: "Bohr radius (first orbit of H)",
                unit: "Å",
                typical_values: "0.529 Å = 5.29 × 10⁻¹¹ m"
              },
              {
                symbol: "Z",
                meaning: "Atomic number",
                unit: "dimensionless",
                typical_values: "1 (H), 2 (He⁺), 3 (Li²⁺)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: [
              "r ∝ n² (radius increases with n²)",
              "r ∝ 1/Z (smaller for higher Z ions)",
              "For He⁺ (Z=2): r₁ = a₀/2 = 0.265 Å",
              "For Li²⁺ (Z=3): r₁ = a₀/3 = 0.176 Å"
            ],
            dimensionalCheck: "[r] = m or Å",
          },
          {
            id: "bohr-energy",
            name: "Bohr Energy Levels",
            category: "base",
            formula: "E_n = -13.6Z²/n² eV",
            latex: "E_n = -\\frac{13.6 Z^2}{n^2} \\text{ eV}",
            description: "Energy of electron in nth orbit of hydrogen-like atom/ion",
            variables: [
              {
                symbol: "E_n",
                meaning: "Energy of nth level",
                unit: "eV",
                typical_values: "-13.6 to 0 eV"
              },
              {
                symbol: "n",
                meaning: "Principal quantum number",
                unit: "dimensionless",
                typical_values: "1, 2, 3..."
              },
              {
                symbol: "Z",
                meaning: "Atomic number",
                unit: "dimensionless",
                typical_values: "1 for H, 2 for He⁺"
              },
              {
                symbol: "13.6 eV",
                meaning: "Rydberg energy",
                unit: "eV",
                typical_values: "Constant"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: [
              "E < 0 means bound state",
              "E = 0 means ionized (free electron at rest)",
              "E > 0 means free electron with kinetic energy",
              "E ∝ 1/n² (energy becomes less negative with n)",
              "E ∝ Z² (more tightly bound for higher Z)"
            ],
            dimensionalCheck: "[E] = eV",
          },
          {
            id: "bohr-velocity",
            name: "Orbital Velocity",
            category: "derived",
            formula: "v_n = Zv₁/n where v₁ = 2.2 × 10⁶ m/s",
            latex: "v_n = \\frac{Z v_1}{n} = \\frac{Z \\times 2.2 \\times 10^6}{n} \\text{ m/s}",
            description: "Velocity of electron in nth orbit",
            variables: [
              {
                symbol: "v_n",
                meaning: "Velocity in nth orbit",
                unit: "m/s",
                typical_values: "10⁵ - 10⁶ m/s"
              },
              {
                symbol: "v₁",
                meaning: "Velocity in first Bohr orbit of H",
                unit: "m/s",
                typical_values: "2.2 × 10⁶ m/s = c/137"
              },
              {
                symbol: "n",
                meaning: "Principal quantum number",
                unit: "dimensionless",
                typical_values: "1, 2, 3..."
              }
            ],
            derivedFrom: "angular-momentum",
            applications: [],
            specialCases: ["v ∝ 1/n (velocity decreases with n)", "v ∝ Z (velocity increases with atomic number)", "Fine structure constant α = v₁/c = 1/137"],
            dimensionalCheck: "[v] = m/s",
          },
          {
            id: "angular-momentum",
            name: "Quantized Angular Momentum",
            category: "base",
            formula: "L_n = nh/2π = nℏ",
            latex: "L_n = \\frac{nh}{2\\pi} = n\\hbar",
            description: "Bohr's second postulate - angular momentum is quantized in units of ℏ",
            variables: [
              {
                symbol: "L_n",
                meaning: "Angular momentum in nth orbit",
                unit: "J·s",
                typical_values: "nℏ"
              },
              {
                symbol: "ℏ",
                meaning: "Reduced Planck constant (h/2π)",
                unit: "J·s",
                typical_values: "1.055 × 10⁻³⁴ J·s"
              },
              {
                symbol: "n",
                meaning: "Principal quantum number",
                unit: "dimensionless",
                typical_values: "1, 2, 3..."
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["L ∝ n (linear with principal quantum number)", "L independent of Z (same for all H-like atoms)", "This quantization leads to discrete energy levels"],
            dimensionalCheck: "[L] = J·s = kg·m²/s",
          },
          {
            id: "time-period",
            name: "Time Period and Frequency",
            category: "derived",
            formula: "T_n = 2πr_n/v_n ∝ n³/Z²",
            latex: "T_n = \\frac{2\\pi r_n}{v_n} \\propto \\frac{n^3}{Z^2}",
            description: "Time period of electron in nth orbit",
            variables: [
              {
                symbol: "T_n",
                meaning: "Time period of revolution",
                unit: "s",
                typical_values: "10⁻¹⁶ s for H ground state"
              },
              {
                symbol: "f_n",
                meaning: "Frequency of revolution",
                unit: "Hz",
                typical_values: "10¹⁵ - 10¹⁶ Hz"
              }
            ],
            derivedFrom: "bohr-radius",
            applications: [],
            specialCases: ["T ∝ n³ (increases rapidly with n)", "T ∝ 1/Z² (decreases for higher Z)", "f ∝ Z²/n³"],
            dimensionalCheck: "[T] = s",
          },
          {
            id: "spectral-lines",
            name: "Spectral Line Wavelength (Rydberg Formula)",
            category: "derived",
            formula: "1/λ = RZ²(1/n₁² - 1/n₂²)",
            latex: "\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
            description: "Wavelength of photon emitted in transition from n₂ to n₁ (n₂ > n₁)",
            variables: [
              {
                symbol: "λ",
                meaning: "Wavelength of emitted photon",
                unit: "m",
                typical_values: "nm range (visible to UV)"
              },
              {
                symbol: "R",
                meaning: "Rydberg constant",
                unit: "m⁻¹",
                typical_values: "1.097 × 10⁷ m⁻¹"
              },
              {
                symbol: "n₁",
                meaning: "Lower energy level",
                unit: "dimensionless",
                typical_values: "1, 2, 3 (series)"
              },
              {
                symbol: "n₂",
                meaning: "Upper energy level",
                unit: "dimensionless",
                typical_values: "n₂ > n₁"
              }
            ],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [
              "Lyman α (1→2): λ = 121.6 nm (UV)",
              "Balmer α (2→3): λ = 656.3 nm (red)",
              "Balmer β (2→4): λ = 486.1 nm (blue-green)",
              "Series limit is at shortest wavelength for each series"
            ],
            dimensionalCheck: "[1/λ] = m⁻¹",
          },
          {
            id: "energy-of-photon",
            name: "Energy of Emitted Photon",
            category: "derived",
            formula: "E = 13.6Z²(1/n₁² - 1/n₂²) eV",
            latex: "E = 13.6 Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\text{ eV}",
            description: "Energy of photon emitted when electron transitions from n₂ to n₁",
            variables: [
              {
                symbol: "E",
                meaning: "Photon energy",
                unit: "eV",
                typical_values: "1-13.6 eV for H"
              },
              {
                symbol: "n₁, n₂",
                meaning: "Initial and final levels",
                unit: "dimensionless",
                typical_values: "n₂ > n₁ for emission"
              }
            ],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: ["Emission: n₂ → n₁ (n₂ > n₁), photon emitted", "Absorption: n₁ → n₂ (n₁ < n₂), photon absorbed", "Higher energy transitions → shorter wavelength photons"],
            dimensionalCheck: "[E] = eV",
          },
          {
            id: "number-of-lines",
            name: "Number of Spectral Lines",
            category: "derived",
            formula: "N = n(n-1)/2",
            latex: "N = \\frac{n(n-1)}{2}",
            description: "Maximum number of different spectral lines when electrons fall from nth level to ground",
            variables: [
              {
                symbol: "N",
                meaning: "Number of spectral lines",
                unit: "dimensionless",
                typical_values: "1, 3, 6, 10..."
              },
              {
                symbol: "n",
                meaning: "Highest occupied level",
                unit: "dimensionless",
                typical_values: "2, 3, 4..."
              }
            ],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: ["Formula is n choose 2 (ⁿC₂)", "Each pair of levels gives one spectral line", "Lines in specific series: n₂ - n₁ (e.g., from n=5: 4 Lyman, 3 Balmer, 2 Paschen, 1 Brackett)"],
            dimensionalCheck: "Dimensionless count",
          },
          {
            id: "hydrogen-like-ions",
            name: "Hydrogen-like Ions Comparison",
            category: "derived",
            formula: "For same n: E ∝ Z², r ∝ 1/Z, v ∝ Z",
            latex: "E \\propto Z^2, \\quad r \\propto \\frac{1}{Z}, \\quad v \\propto Z",
            description: "How properties scale with atomic number for single-electron ions",
            variables: [
              {
                symbol: "Z",
                meaning: "Atomic number",
                unit: "dimensionless",
                typical_values: "1 (H), 2 (He⁺), 3 (Li²⁺)"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["He⁺ (Z=2): E₁ = -54.4 eV, r₁ = 0.265 Å", "Li²⁺ (Z=3): E₁ = -122.4 eV, r₁ = 0.176 Å", "Same orbit in different ions has different energy"],
            dimensionalCheck: "Scaling relationships",
          },
          {
            id: "for-hydrogen-z1",
            name: "For hydrogen (Z=1)",
            category: "derived",
            formula: "r_n = n^2 \\times 0.529 \\text{ Å}",
            latex: "r_n = n^2 \\times 0.529 \\text{ Å}",
            description: "Standard formula",
            variables: [],
            derivedFrom: "bohr-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m or Å",
            neet_frequency: "high",
          },
          {
            id: "ground-state",
            name: "Ground state",
            category: "derived",
            formula: "r_1 = a_0 = 0.529 \\text{ Å}",
            latex: "r_1 = a_0 = 0.529 \\text{ Å}",
            description: "n = 1 for hydrogen",
            variables: [],
            derivedFrom: "bohr-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m or Å",
            neet_frequency: "high",
          },
          {
            id: "for-he-z2",
            name: "For He⁺ (Z=2)",
            category: "derived",
            formula: "r_n = \\frac{n^2 \\times 0.529}{2} \\text{ Å}",
            latex: "r_n = \\frac{n^2 \\times 0.529}{2} \\text{ Å}",
            description: "Half of H radius",
            variables: [],
            derivedFrom: "bohr-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m or Å",
            neet_frequency: "high",
          },
          {
            id: "ratio-of-radii",
            name: "Ratio of radii",
            category: "derived",
            formula: "\\frac{r_{n_1}}{r_{n_2}} = \\frac{n_1^2}{n_2^2}",
            latex: "\\frac{r_{n_1}}{r_{n_2}} = \\frac{n_1^2}{n_2^2}",
            description: "Same atom",
            variables: [],
            derivedFrom: "bohr-radius",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[r] = m or Å",
            neet_frequency: "high",
          },
          {
            id: "ground-state-n1-h",
            name: "Ground state (n=1, H)",
            category: "derived",
            formula: "E_1 = -13.6 \\text{ eV}",
            latex: "E_1 = -13.6 \\text{ eV}",
            description: "Most tightly bound",
            variables: [],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "first-excited-n2-h",
            name: "First excited (n=2, H)",
            category: "derived",
            formula: "E_2 = -3.4 \\text{ eV}",
            latex: "E_2 = -3.4 \\text{ eV}",
            description: "-13.6/4",
            variables: [],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "second-excited-n3-h",
            name: "Second excited (n=3, H)",
            category: "derived",
            formula: "E_3 = -1.51 \\text{ eV}",
            latex: "E_3 = -1.51 \\text{ eV}",
            description: "-13.6/9",
            variables: [],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "medium",
          },
          {
            id: "ionization-energy",
            name: "Ionization energy",
            category: "derived",
            formula: "E_{ion} = |E_1| = 13.6 Z^2 \\text{ eV}",
            latex: "E_{ion} = |E_1| = 13.6 Z^2 \\text{ eV}",
            description: "Energy to remove electron from ground state",
            variables: [],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "for-he-z2-2",
            name: "For He⁺ (Z=2)",
            category: "derived",
            formula: "E_n = -\\frac{54.4}{n^2} \\text{ eV}",
            latex: "E_n = -\\frac{54.4}{n^2} \\text{ eV}",
            description: "13.6 × 4 = 54.4",
            variables: [],
            derivedFrom: "bohr-energy",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "ground-state-velocity",
            name: "Ground state velocity",
            category: "derived",
            formula: "v_1 = 2.2 \\times 10^6 \\text{ m/s}",
            latex: "v_1 = 2.2 \\times 10^6 \\text{ m/s}",
            description: "About 1/137 of c",
            variables: [],
            derivedFrom: "bohr-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "ratio-of-velocities",
            name: "Ratio of velocities",
            category: "derived",
            formula: "\\frac{v_{n_1}}{v_{n_2}} = \\frac{n_2}{n_1}",
            latex: "\\frac{v_{n_1}}{v_{n_2}} = \\frac{n_2}{n_1}",
            description: "Same atom",
            variables: [],
            derivedFrom: "bohr-velocity",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[v] = m/s",
            neet_frequency: "medium",
          },
          {
            id: "ground-state-n1",
            name: "Ground state (n=1)",
            category: "derived",
            formula: "L_1 = \\hbar = 1.055 \\times 10^{-34} \\text{ J·s}",
            latex: "L_1 = \\hbar = 1.055 \\times 10^{-34} \\text{ J·s}",
            description: "Minimum angular momentum",
            variables: [],
            derivedFrom: "angular-momentum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = J·s = kg·m²/s",
            neet_frequency: "high",
          },
          {
            id: "ratio-of-l",
            name: "Ratio of L",
            category: "derived",
            formula: "\\frac{L_2}{L_1} = 2",
            latex: "\\frac{L_2}{L_1} = 2",
            description: "L ∝ n",
            variables: [],
            derivedFrom: "angular-momentum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = J·s = kg·m²/s",
            neet_frequency: "medium",
          },
          {
            id: "using-mvr",
            name: "Using mvr",
            category: "derived",
            formula: "mvr = n\\hbar",
            latex: "mvr = n\\hbar",
            description: "Alternative form",
            variables: [],
            derivedFrom: "angular-momentum",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[L] = J·s = kg·m²/s",
            neet_frequency: "high",
          },
          {
            id: "time-period-ratio",
            name: "Time period ratio",
            category: "derived",
            formula: "\\frac{T_{n_1}}{T_{n_2}} = \\frac{n_1^3}{n_2^3}",
            latex: "\\frac{T_{n_1}}{T_{n_2}} = \\frac{n_1^3}{n_2^3}",
            description: "Same atom",
            variables: [],
            derivedFrom: "time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "medium",
          },
          {
            id: "frequency",
            name: "Frequency",
            category: "derived",
            formula: "f_n \\propto \\frac{Z^2}{n^3}",
            latex: "f_n \\propto \\frac{Z^2}{n^3}",
            description: "Inverse of period",
            variables: [],
            derivedFrom: "time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "medium",
          },
          {
            id: "current-due-to-electron",
            name: "Current due to electron",
            category: "derived",
            formula: "i = ef_n = \\frac{e}{T_n}",
            latex: "i = ef_n = \\frac{e}{T_n}",
            description: "Electron as current loop",
            variables: [],
            derivedFrom: "time-period",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[T] = s",
            neet_frequency: "low",
          },
          {
            id: "lyman-series-uv",
            name: "Lyman series (UV)",
            category: "derived",
            formula: "n_1 = 1, n_2 = 2, 3, 4...",
            latex: "n_1 = 1, n_2 = 2, 3, 4...",
            description: "All in ultraviolet",
            variables: [],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/λ] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "balmer-series-visible",
            name: "Balmer series (visible)",
            category: "derived",
            formula: "n_1 = 2, n_2 = 3, 4, 5...",
            latex: "n_1 = 2, n_2 = 3, 4, 5...",
            description: "Visible light (656 nm Hα)",
            variables: [],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/λ] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "paschen-series-ir",
            name: "Paschen series (IR)",
            category: "derived",
            formula: "n_1 = 3, n_2 = 4, 5, 6...",
            latex: "n_1 = 3, n_2 = 4, 5, 6...",
            description: "Infrared",
            variables: [],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/λ] = m⁻¹",
            neet_frequency: "medium",
          },
          {
            id: "series-limit",
            name: "Series limit",
            category: "derived",
            formula: "\\lambda_{limit} = \\frac{n_1^2}{RZ^2}",
            latex: "\\lambda_{limit} = \\frac{n_1^2}{RZ^2}",
            description: "When n₂ → ∞",
            variables: [],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/λ] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "first-line-of-lyman",
            name: "First line of Lyman",
            category: "derived",
            formula: "\\frac{1}{\\lambda} = R\\left(1 - \\frac{1}{4}\\right) = \\frac{3R}{4}",
            latex: "\\frac{1}{\\lambda} = R\\left(1 - \\frac{1}{4}\\right) = \\frac{3R}{4}",
            description: "n₁=1, n₂=2",
            variables: [],
            derivedFrom: "spectral-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[1/λ] = m⁻¹",
            neet_frequency: "high",
          },
          {
            id: "maximum-energy-lyman-limit",
            name: "Maximum energy (Lyman limit)",
            category: "derived",
            formula: "E_{max} = 13.6 \\text{ eV}",
            latex: "E_{max} = 13.6 \\text{ eV}",
            description: "n₂ = ∞ to n₁ = 1",
            variables: [],
            derivedFrom: "energy-of-photon",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "lyman",
            name: "Lyman α",
            category: "derived",
            formula: "E = 13.6\\left(1 - \\frac{1}{4}\\right) = 10.2 \\text{ eV}",
            latex: "E = 13.6\\left(1 - \\frac{1}{4}\\right) = 10.2 \\text{ eV}",
            description: "n=2 to n=1",
            variables: [],
            derivedFrom: "energy-of-photon",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "high",
          },
          {
            id: "balmer",
            name: "Balmer α",
            category: "derived",
            formula: "E = 13.6\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.89 \\text{ eV}",
            latex: "E = 13.6\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.89 \\text{ eV}",
            description: "n=3 to n=2",
            variables: [],
            derivedFrom: "energy-of-photon",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[E] = eV",
            neet_frequency: "medium",
          },
          {
            id: "from-n-2",
            name: "From n = 2",
            category: "derived",
            formula: "N = \\frac{2 \\times 1}{2} = 1",
            latex: "N = \\frac{2 \\times 1}{2} = 1",
            description: "2→1 only",
            variables: [],
            derivedFrom: "number-of-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "from-n-3",
            name: "From n = 3",
            category: "derived",
            formula: "N = \\frac{3 \\times 2}{2} = 3",
            latex: "N = \\frac{3 \\times 2}{2} = 3",
            description: "3→2, 3→1, 2→1",
            variables: [],
            derivedFrom: "number-of-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "from-n-4",
            name: "From n = 4",
            category: "derived",
            formula: "N = \\frac{4 \\times 3}{2} = 6",
            latex: "N = \\frac{4 \\times 3}{2} = 6",
            description: "6 lines",
            variables: [],
            derivedFrom: "number-of-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "from-n-5",
            name: "From n = 5",
            category: "derived",
            formula: "N = \\frac{5 \\times 4}{2} = 10",
            latex: "N = \\frac{5 \\times 4}{2} = 10",
            description: "10 lines",
            variables: [],
            derivedFrom: "number-of-lines",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "medium",
          },
          {
            id: "he-ground-state-energy",
            name: "He⁺ ground state energy",
            category: "derived",
            formula: "E_1 = -13.6 \\times 4 = -54.4 \\text{ eV}",
            latex: "E_1 = -13.6 \\times 4 = -54.4 \\text{ eV}",
            description: "Z = 2",
            variables: [],
            derivedFrom: "hydrogen-like-ions",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Scaling relationships",
            neet_frequency: "high",
          },
          {
            id: "he-ground-state-radius",
            name: "He⁺ ground state radius",
            category: "derived",
            formula: "r_1 = \\frac{0.529}{2} = 0.265 \\text{ Å}",
            latex: "r_1 = \\frac{0.529}{2} = 0.265 \\text{ Å}",
            description: "Z = 2",
            variables: [],
            derivedFrom: "hydrogen-like-ions",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Scaling relationships",
            neet_frequency: "high",
          },
          {
            id: "li-ionization-energy",
            name: "Li²⁺ ionization energy",
            category: "derived",
            formula: "E_{ion} = 13.6 \\times 9 = 122.4 \\text{ eV}",
            latex: "E_{ion} = 13.6 \\times 9 = 122.4 \\text{ eV}",
            description: "Z = 3",
            variables: [],
            derivedFrom: "hydrogen-like-ions",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Scaling relationships",
            neet_frequency: "medium",
          }
        ],
        commonMistakes: [
          {
            mistake: "Using wrong n values in Rydberg formula",
            correct: "n₁ is LOWER level, n₂ is HIGHER level, and n₂ > n₁. For emission, electron falls from n₂ to n₁.",
            whyItHappens: "Mixing up initial and final states",
            neetExample: "NEET 2020: Wavelength of first line of Balmer series (3→2, not 2→3)"
          },
          {
            mistake: "Forgetting Z² factor for hydrogen-like ions",
            correct: "For He⁺ (Z=2): E = -13.6 × 4/n² = -54.4/n² eV, r = 0.529n²/2 Å. Always multiply energy by Z², divide radius by Z.",
            whyItHappens: "Applying hydrogen formula directly to all atoms",
            neetExample: "NEET 2019: Ground state energy of He⁺"
          },
          {
            mistake: "Thinking Balmer series is in UV",
            correct: "Lyman (n₁=1): UV. Balmer (n₁=2): Visible (only visible series!). Paschen and beyond: Infrared.",
            whyItHappens: "Not memorizing which series is in which region",
            neetExample: "NEET 2021: Which series lies in visible region?"
          },
          {
            mistake: "Confusing excitation energy and ionization energy",
            correct: "Excitation energy: E₂ - E₁ = -3.4 - (-13.6) = 10.2 eV. Ionization energy: 0 - E₁ = 13.6 eV.",
            whyItHappens: "Not understanding the difference between exciting and removing electron",
            neetExample: "NEET 2022: Energy needed to excite H atom from ground to first excited state"
          },
          {
            mistake: "Wrong formula for number of spectral lines",
            correct: "N = n(n-1)/2 gives total lines when electrons cascade from level n. Not n² or 2n.",
            whyItHappens: "Memorizing wrong formula",
            neetExample: "NEET 2023: Maximum spectral lines when electron in 4th orbit returns to ground"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate radius, energy, velocity for given n",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Wavelength of spectral line (Rydberg formula)",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Number of spectral lines from given level",
            difficulty: "easy"
          },
          {
            type: "conceptual",
            description: "Identify spectral series from wavelength region",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Hydrogen-like ions (He⁺, Li²⁺) calculations",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Ionization and excitation energy",
            difficulty: "medium"
          },
          {
            type: "numerical",
            description: "Compare properties at different n levels",
            difficulty: "medium"
          },
          {
            type: "graphical",
            description: "Energy level diagram interpretation",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Energy level calculations",
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
            pattern: "Spectral series identification",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Number of spectral lines",
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
            pattern: "Hydrogen-like ions (He⁺, Li²⁺)",
            frequency: "high",
            yearAsked: [
              2018,
              2020,
              2021,
              2022
            ]
          },
          {
            pattern: "Radius ratio at different levels",
            frequency: "medium",
            yearAsked: [2019, 2021, 2023]
          },
          {
            pattern: "Ionization/excitation energy",
            frequency: "high",
            yearAsked: [
              2018,
              2019,
              2020,
              2022
            ]
          },
          {
            pattern: "Rydberg formula wavelength",
            frequency: "medium",
            yearAsked: [2018, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Energy levels",
            analogy: "Staircase in building",
            mapping: "Electrons can only stand on specific steps (discrete levels), jumping between steps releases/absorbs specific energy (colors)"
          },
          {
            concept: "Spectral series",
            analogy: "Different floor destinations",
            mapping: "Lyman = jumps to ground floor. Balmer = jumps to 1st floor. Paschen = jumps to 2nd floor. Each \"destination\" gives different jump heights."
          },
          {
            concept: "Ionization energy",
            analogy: "Escape velocity from planet",
            mapping: "Energy needed to completely escape the atom, like escape velocity to leave Earth"
          },
          {
            concept: "Higher Z more tightly bound",
            analogy: "Stronger magnet holds metal closer",
            mapping: "More protons (higher Z) pull electron closer (smaller r) and hold it tighter (higher |E|)"
          }
        ],
        questions: [],
      }
    ];