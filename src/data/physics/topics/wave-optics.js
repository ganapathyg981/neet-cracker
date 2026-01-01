// Wave Optics - 2% weightage (Tier 3)
// NCERT Class 12, Chapter 10
// Comprehensive coverage based on NCERT and NEET PYQ patterns

export const waveOpticsTopics = [
  // Topic 1: Huygens' Principle and Wave Theory
  {
    id: 'huygens-principle',
    name: "Huygens' Principle",
    weightage: 0.5,
    difficulty: 'medium',
    
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
        "Wavefront shapes: Plane (parallel rays), Spherical (point source), Cylindrical (line source)",
      ],
      prerequisites: [],
      ncertReference: "NCERT Class 12, Chapter 10, Section 10.2-10.4",
    },
    
    formulas: [
      {
        id: 'huygens-refraction',
        name: "Snell's Law from Huygens' Principle",
        category: 'base',
        formula: 'n₁ sin θ₁ = n₂ sin θ₂',
        latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2',
        description: "Derivation of Snell's law using Huygens' construction",
        variables: [
          { symbol: 'n₁, n₂', meaning: 'Refractive indices of media', unit: 'dimensionless', typical_values: '1 (air), 1.5 (glass), 1.33 (water)' },
          { symbol: 'θ₁', meaning: 'Angle of incidence', unit: 'degrees/rad', typical_values: '0° to 90°' },
          { symbol: 'θ₂', meaning: 'Angle of refraction', unit: 'degrees/rad', typical_values: '0° to 90°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Velocity ratio', latex: '\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}', context: 'Speed decreases in denser medium', neet_frequency: 'high' },
          { name: 'Wavelength change', latex: '\\lambda_2 = \\frac{\\lambda_1}{n}', context: 'Wavelength decreases in denser medium', neet_frequency: 'high' },
          { name: 'Frequency unchanged', latex: '\\nu_1 = \\nu_2', context: 'Frequency is constant across media', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Light bends toward normal when entering denser medium',
          'Speed of light in medium: v = c/n',
          'Critical angle: sin θc = n₂/n₁ (for n₁ > n₂)',
        ],
        dimensionalCheck: 'Both sides dimensionless',
      },
      {
        id: 'optical-path',
        name: 'Optical Path Length',
        category: 'base',
        formula: 'Optical Path = n × Geometric Path',
        latex: '\\Delta_{optical} = n \\times d',
        description: 'Effective path length considering refractive index',
        variables: [
          { symbol: 'Δ_optical', meaning: 'Optical path length', unit: 'm', typical_values: 'Greater than geometric path in dense media' },
          { symbol: 'n', meaning: 'Refractive index', unit: 'dimensionless', typical_values: '> 1 for all media' },
          { symbol: 'd', meaning: 'Geometric path length', unit: 'm', typical_values: 'Actual distance traveled' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Optical path difference', latex: '\\Delta = n_2 d_2 - n_1 d_1', context: 'For interference calculations', neet_frequency: 'high' },
          { name: 'Thin film interference', latex: '\\Delta = 2\\mu t', context: 'For reflected light at normal incidence', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Optical path in air ≈ geometric path (n ≈ 1)',
          'Extra optical path when slab introduced: (n-1)t',
        ],
        dimensionalCheck: '[Δ] = m',
      },
      {
        id: 'wavefront-properties',
        name: 'Wavefront Properties',
        category: 'derived',
        formula: 'Rays ⊥ Wavefront',
        latex: '\\text{Rays perpendicular to wavefront}',
        description: 'Relationship between rays and wavefronts',
        variables: [
          { symbol: 'Wavefront', meaning: 'Surface of constant phase', unit: 'surface', typical_values: 'Plane, spherical, cylindrical' },
          { symbol: 'Ray', meaning: 'Direction of energy propagation', unit: 'line', typical_values: 'Perpendicular to wavefront' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Point source', latex: '\\text{Spherical wavefronts}', context: 'Intensity ∝ 1/r²', neet_frequency: 'medium' },
          { name: 'At large distance', latex: '\\text{Plane wavefronts}', context: 'From any source at infinity', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Phase difference on wavefront = 0',
          'All points on wavefront have same amplitude',
        ],
        dimensionalCheck: 'Geometric concept',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Thinking wavelength remains constant during refraction',
        correct: 'Wavelength changes: λ₂ = λ₁/n. Only FREQUENCY remains constant during refraction.',
        whyItHappens: 'Confusing frequency and wavelength conservation',
        neetExample: 'NEET 2019: When light enters glass from air, what changes - frequency, wavelength, or speed?',
      },
      {
        mistake: 'Forgetting optical path concept when slab is introduced',
        correct: 'When glass slab of thickness t is introduced, extra optical path = (n-1)t, causing fringe shift.',
        whyItHappens: 'Not considering that light travels slower in glass',
        neetExample: 'NEET 2020: Fringe shift when glass slab inserted in YDSE',
      },
      {
        mistake: 'Confusing wavefront shape for different sources',
        correct: 'Point source → spherical wavefront. Line source → cylindrical. Distant source → plane wavefront.',
        whyItHappens: 'Not visualizing the geometry correctly',
        neetExample: 'NEET 2018: Wavefront from a point source at finite distance',
      },
    ],
    
    variations: [
      { type: 'conceptual', description: 'Identify wavefront shape for given source', difficulty: 'easy' },
      { type: 'numerical', description: 'Optical path length calculations', difficulty: 'medium' },
      { type: 'conceptual', description: 'Explain refraction using Huygens principle', difficulty: 'medium' },
      { type: 'numerical', description: 'Fringe shift due to introduction of glass slab', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Wavefront shape identification', frequency: 'high', yearAsked: [2018, 2019, 2021, 2023] },
      { pattern: 'Optical path and fringe shift', frequency: 'high', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Wavelength/frequency change in refraction', frequency: 'medium', yearAsked: [2018, 2020, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Secondary wavelets',
        analogy: 'Mexican wave in stadium',
        mapping: 'Each person creates their own wave, overall pattern is the envelope of all waves',
      },
      {
        concept: 'Refraction explanation',
        analogy: 'Marching band entering mud',
        mapping: 'One side slows down first, causing the line to bend toward the slower medium',
      },
    ],
    
    questions: [],
  },

  // Topic 2: Interference
  {
    id: 'interference',
    name: 'Interference of Light',
    weightage: 1,
    difficulty: 'medium',
    
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
        "Fringe visibility: V = (I_max - I_min)/(I_max + I_min)",
      ],
      prerequisites: ['huygens-principle'],
      ncertReference: "NCERT Class 12, Chapter 10, Section 10.5",
    },
    
    formulas: [
      {
        id: 'path-difference',
        name: 'Path Difference for Interference',
        category: 'base',
        formula: 'Δx = d sin θ ≈ dy/D',
        latex: '\\Delta x = d\\sin\\theta \\approx \\frac{dy}{D}',
        description: 'Path difference between waves from two slits at point P on screen',
        variables: [
          { symbol: 'Δx', meaning: 'Path difference', unit: 'm', typical_values: 'nm to μm' },
          { symbol: 'd', meaning: 'Slit separation', unit: 'm', typical_values: '0.1-1 mm' },
          { symbol: 'D', meaning: 'Screen distance', unit: 'm', typical_values: '1-2 m' },
          { symbol: 'y', meaning: 'Distance from central fringe', unit: 'm', typical_values: 'mm to cm' },
          { symbol: 'θ', meaning: 'Angular position', unit: 'rad', typical_values: 'small angles' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Bright fringe position', latex: 'y_n = \\frac{n\\lambda D}{d}', context: 'n = 0, 1, 2... (constructive)', neet_frequency: 'high' },
          { name: 'Dark fringe position', latex: 'y_n = \\frac{(2n+1)\\lambda D}{2d}', context: 'n = 0, 1, 2... (destructive)', neet_frequency: 'high' },
          { name: 'Phase difference', latex: '\\phi = \\frac{2\\pi}{\\lambda}\\Delta x', context: 'Relation between path and phase', neet_frequency: 'high' },
        ],
        specialCases: [
          'Central fringe (n=0) is always bright at y=0',
          'Small angle approximation: sin θ ≈ tan θ ≈ y/D valid when d << D',
          'Angular position of nth bright: θ_n = nλ/d',
        ],
        dimensionalCheck: '[Δx] = m',
      },
      {
        id: 'fringe-width',
        name: 'Fringe Width',
        category: 'derived',
        formula: 'β = λD/d',
        latex: '\\beta = \\frac{\\lambda D}{d}',
        description: 'Distance between consecutive bright (or dark) fringes - constant across pattern',
        variables: [
          { symbol: 'β', meaning: 'Fringe width', unit: 'm', typical_values: 'mm' },
          { symbol: 'λ', meaning: 'Wavelength', unit: 'm', typical_values: '400-700 nm (visible)' },
          { symbol: 'D', meaning: 'Screen distance', unit: 'm', typical_values: '1-2 m' },
          { symbol: 'd', meaning: 'Slit separation', unit: 'm', typical_values: '0.1-1 mm' },
        ],
        derivedFrom: 'path-difference',
        applications: [
          { name: 'In medium of refractive index μ', latex: "\\beta' = \\frac{\\lambda D}{\\mu d} = \\frac{\\beta}{\\mu}", context: 'Wavelength decreases, β decreases', neet_frequency: 'high' },
          { name: 'Angular fringe width', latex: '\\theta_\\beta = \\frac{\\lambda}{d}', context: 'Independent of screen distance D', neet_frequency: 'medium' },
          { name: 'Number of fringes in width w', latex: 'N = \\frac{w}{\\beta} = \\frac{wd}{\\lambda D}', context: 'Count visible fringes', neet_frequency: 'medium' },
        ],
        specialCases: [
          'β ∝ λ (red fringes wider than violet)',
          'β ∝ D (fringes spread out at larger distance)',
          'β ∝ 1/d (closer slits give wider fringes)',
          'Fringe width same for all orders',
        ],
        dimensionalCheck: '[β] = [λ][D]/[d] = m',
      },
      {
        id: 'intensity-interference',
        name: 'Intensity in Interference',
        category: 'derived',
        formula: 'I = I₁ + I₂ + 2√(I₁I₂) cos φ',
        latex: 'I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi',
        description: 'Resultant intensity from two interfering waves with phase difference φ',
        variables: [
          { symbol: 'I', meaning: 'Resultant intensity', unit: 'W/m²', typical_values: '0 to 4I₀' },
          { symbol: 'I₁, I₂', meaning: 'Individual intensities', unit: 'W/m²', typical_values: 'Usually equal' },
          { symbol: 'φ', meaning: 'Phase difference', unit: 'rad', typical_values: '0 to 2π' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Maximum intensity', latex: 'I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2', context: 'φ = 0, 2π, 4π... (constructive)', neet_frequency: 'high' },
          { name: 'Minimum intensity', latex: 'I_{min} = (\\sqrt{I_1} - \\sqrt{I_2})^2', context: 'φ = π, 3π, 5π... (destructive)', neet_frequency: 'high' },
          { name: 'Equal intensities', latex: 'I = 4I_0\\cos^2\\left(\\frac{\\phi}{2}\\right)', context: 'I₁ = I₂ = I₀', neet_frequency: 'high' },
          { name: 'Intensity ratio', latex: '\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2', context: 'For unequal sources', neet_frequency: 'high' },
        ],
        specialCases: [
          'For equal I₀: I_max = 4I₀, I_min = 0, perfect contrast',
          'Average intensity = I₁ + I₂ (energy conserved)',
          'For amplitude ratio r = a₁/a₂: I_max/I_min = (1+r)²/(1-r)²',
        ],
        dimensionalCheck: '[I] = W/m²',
      },
      {
        id: 'thin-film-interference',
        name: 'Thin Film Interference',
        category: 'derived',
        formula: '2μt cos r = nλ (constructive) or (n+½)λ (destructive)',
        latex: '2\\mu t \\cos r = n\\lambda \\text{ or } \\left(n+\\frac{1}{2}\\right)\\lambda',
        description: 'Conditions for interference in thin films - depends on phase change at reflection',
        variables: [
          { symbol: 'μ', meaning: 'Refractive index of film', unit: 'dimensionless', typical_values: '1.3-1.5' },
          { symbol: 't', meaning: 'Film thickness', unit: 'm', typical_values: 'nm to μm' },
          { symbol: 'r', meaning: 'Angle of refraction', unit: 'rad', typical_values: 'At normal incidence r=0' },
        ],
        derivedFrom: 'optical-path',
        applications: [
          { name: 'At normal incidence', latex: '2\\mu t = n\\lambda', context: 'cos r = 1', neet_frequency: 'high' },
          { name: 'Colors in soap bubble', latex: '\\text{Different t gives different colors}', context: 'White light → colors', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Phase change of π at reflection from denser medium',
          'No phase change at reflection from rarer medium',
          'Oil film on water shows colors due to varying thickness',
        ],
        dimensionalCheck: '[2μt] = m = [λ]',
      },
      {
        id: 'fringe-shift',
        name: 'Fringe Shift due to Glass Slab',
        category: 'derived',
        formula: 'Shift = (μ-1)t × D/d = (μ-1)t × β/λ fringes',
        latex: '\\Delta y = \\frac{(\\mu - 1)t \\cdot D}{d} = (\\mu - 1)t \\cdot \\frac{\\beta}{\\lambda}',
        description: 'Shift in fringe pattern when transparent slab placed in one path',
        variables: [
          { symbol: 'Δy', meaning: 'Lateral shift of fringes', unit: 'm', typical_values: 'mm' },
          { symbol: 'μ', meaning: 'Refractive index of slab', unit: 'dimensionless', typical_values: '1.5 (glass)' },
          { symbol: 't', meaning: 'Thickness of slab', unit: 'm', typical_values: 'μm to mm' },
        ],
        derivedFrom: 'optical-path',
        applications: [
          { name: 'Number of fringes shifted', latex: 'n = \\frac{(\\mu-1)t}{\\lambda}', context: 'How many fringes move', neet_frequency: 'high' },
          { name: 'Direction of shift', latex: '\\text{Toward the slab}', context: 'Central fringe moves toward inserted slab', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Extra optical path introduced = (μ-1)t',
          'Fringe pattern shifts but width remains same',
          'Shift toward side where slab is placed',
        ],
        dimensionalCheck: '[Δy] = m',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Using path difference = nλ for dark fringes',
        correct: 'Bright fringes: Δx = nλ. Dark fringes: Δx = (2n+1)λ/2. Never mix them!',
        whyItHappens: 'Confusing constructive and destructive conditions',
        neetExample: 'NEET 2020: Position of 3rd dark fringe from center',
      },
      {
        mistake: 'Forgetting fringe width changes in medium',
        correct: 'In medium of refractive index μ: β\' = β/μ. Wavelength decreases so fringes get closer.',
        whyItHappens: 'Not accounting for wavelength change in medium',
        neetExample: 'NEET 2019: YDSE apparatus immersed in water - find new fringe width',
      },
      {
        mistake: 'Taking intensity ratio instead of amplitude ratio',
        correct: 'I ∝ a². If slit widths are in ratio 1:4, amplitudes in ratio 1:2, intensities 1:4.',
        whyItHappens: 'Mixing up amplitude and intensity relationships',
        neetExample: 'NEET 2021: If slit widths are 4:9, find I_max:I_min',
      },
      {
        mistake: 'Assuming central fringe is always at center of screen',
        correct: 'Central fringe (where Δx = 0) shifts when glass slab is introduced. It moves toward slab side.',
        whyItHappens: 'Not understanding optical path change',
        neetExample: 'NEET 2022: Direction of shift when glass slab placed in front of one slit',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Fringe width calculation', difficulty: 'easy' },
      { type: 'numerical', description: 'Position of nth bright/dark fringe', difficulty: 'medium' },
      { type: 'numerical', description: 'Intensity ratio I_max/I_min problems', difficulty: 'medium' },
      { type: 'numerical', description: 'Fringe shift due to glass slab', difficulty: 'medium' },
      { type: 'conceptual', description: 'What happens if wavelength/distance/slit separation changes', difficulty: 'easy' },
      { type: 'numerical', description: 'YDSE in medium - find new fringe width', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Fringe width calculation and dependencies', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022, 2023] },
      { pattern: 'Intensity ratio problems', frequency: 'high', yearAsked: [2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Effect of immersing in liquid', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022] },
      { pattern: 'Fringe shift due to glass slab', frequency: 'medium', yearAsked: [2019, 2020, 2022] },
      { pattern: 'Position of nth fringe', frequency: 'medium', yearAsked: [2018, 2020, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Interference pattern',
        analogy: 'Two speakers playing same note',
        mapping: 'Walk around and find loud (constructive) and quiet (destructive) spots - the pattern depends on speaker separation',
      },
      {
        concept: 'Coherent sources requirement',
        analogy: 'Two drummers',
        mapping: 'For stable pattern, drummers must beat at same rate (frequency) and maintain rhythm (constant phase)',
      },
      {
        concept: 'Fringe width',
        analogy: 'Shadow of fence',
        mapping: 'Wider gaps (d small) cast more spread shadows (β large), and further screen (D large) means bigger projection',
      },
    ],
    
    questions: [],
  },

  // Topic 3: Diffraction
  {
    id: 'diffraction',
    name: 'Diffraction of Light',
    weightage: 0.5,
    difficulty: 'medium',
    
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
        "Fraunhofer diffraction: source/screen at infinity (parallel rays)",
      ],
      prerequisites: ['huygens-principle'],
      ncertReference: "NCERT Class 12, Chapter 10, Section 10.6",
    },
    
    formulas: [
      {
        id: 'single-slit-minima',
        name: 'Single Slit Diffraction Minima',
        category: 'base',
        formula: 'a sin θ = nλ (n = 1, 2, 3...)',
        latex: 'a\\sin\\theta = n\\lambda \\quad (n = 1, 2, 3...)',
        description: 'Condition for dark fringes (minima) in single slit diffraction',
        variables: [
          { symbol: 'a', meaning: 'Slit width', unit: 'm', typical_values: '0.1-1 mm' },
          { symbol: 'θ', meaning: 'Angle from central axis', unit: 'rad', typical_values: 'small angles' },
          { symbol: 'n', meaning: 'Order of minimum', unit: 'dimensionless', typical_values: '1, 2, 3... (NOT 0)' },
          { symbol: 'λ', meaning: 'Wavelength', unit: 'm', typical_values: '400-700 nm' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'First minimum position', latex: '\\sin\\theta_1 = \\frac{\\lambda}{a}', context: 'n = 1, defines edge of central max', neet_frequency: 'high' },
          { name: 'Linear position of minimum', latex: 'y_n = \\frac{n\\lambda D}{a}', context: 'On screen at distance D', neet_frequency: 'high' },
          { name: 'Secondary maxima (approx)', latex: 'a\\sin\\theta \\approx \\left(n+\\frac{1}{2}\\right)\\lambda', context: 'Between minima', neet_frequency: 'medium' },
        ],
        specialCases: [
          'n = 0 is NOT a minimum - it gives central maximum!',
          'Narrower slit (smaller a) → wider diffraction pattern',
          'For small angles: sin θ ≈ θ, so θ_n = nλ/a',
        ],
        dimensionalCheck: '[a][sin θ] = [nλ] = m',
      },
      {
        id: 'central-max-width',
        name: 'Width of Central Maximum',
        category: 'derived',
        formula: 'Angular width = 2λ/a, Linear width = 2λD/a',
        latex: '2\\theta_1 = \\frac{2\\lambda}{a}, \\quad w_0 = \\frac{2\\lambda D}{a}',
        description: 'Width of the central bright fringe (between first minima on both sides)',
        variables: [
          { symbol: 'θ₁', meaning: 'Angle to first minimum', unit: 'rad', typical_values: 'mrad' },
          { symbol: 'w₀', meaning: 'Linear width of central max', unit: 'm', typical_values: 'mm to cm' },
          { symbol: 'D', meaning: 'Screen distance', unit: 'm', typical_values: '1-2 m' },
        ],
        derivedFrom: 'single-slit-minima',
        applications: [
          { name: 'Secondary maxima width', latex: 'w_{secondary} = \\frac{\\lambda D}{a} = \\frac{w_0}{2}', context: 'Half of central max width', neet_frequency: 'high' },
          { name: 'Comparison', latex: '\\text{Central max} = 2 \\times \\text{secondary max width}', context: 'Key NEET fact', neet_frequency: 'high' },
        ],
        specialCases: [
          'Central max width ∝ 1/a (narrower slit → wider pattern)',
          'Central max width ∝ λ (longer wavelength → wider pattern)',
          'Central max contains ~84% of total intensity',
        ],
        dimensionalCheck: '[w] = m',
      },
      {
        id: 'intensity-diffraction',
        name: 'Intensity Distribution in Diffraction',
        category: 'derived',
        formula: 'I = I₀(sin β/β)² where β = (πa sin θ)/λ',
        latex: 'I = I_0\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2, \\quad \\beta = \\frac{\\pi a\\sin\\theta}{\\lambda}',
        description: 'Intensity at angle θ from central axis',
        variables: [
          { symbol: 'I₀', meaning: 'Central maximum intensity', unit: 'W/m²', typical_values: 'Maximum value' },
          { symbol: 'β', meaning: 'Phase parameter', unit: 'rad', typical_values: 'nπ at minima' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'At minima', latex: 'I = 0 \\text{ when } \\beta = n\\pi', context: 'sin β = 0', neet_frequency: 'medium' },
          { name: 'Relative intensities', latex: 'I_1 : I_2 : I_3 \\approx 1 : 0.045 : 0.016', context: 'Central vs secondary', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Minima when β = nπ (n ≠ 0)',
          'Central max at β = 0 uses limit: (sin β/β) → 1',
        ],
        dimensionalCheck: '[I] = W/m²',
      },
      {
        id: 'resolving-power',
        name: 'Resolving Power (Rayleigh Criterion)',
        category: 'derived',
        formula: 'θ_min = 1.22λ/D',
        latex: '\\theta_{min} = \\frac{1.22\\lambda}{D}',
        description: 'Minimum angular separation for two objects to be just resolved',
        variables: [
          { symbol: 'θ_min', meaning: 'Minimum resolvable angle', unit: 'rad', typical_values: 'μrad to mrad' },
          { symbol: 'D', meaning: 'Diameter of aperture', unit: 'm', typical_values: 'cm (telescope), mm (eye)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Limit of resolution', latex: 'd_{min} = f \\cdot \\theta_{min} = \\frac{1.22f\\lambda}{D}', context: 'Minimum separation in image', neet_frequency: 'medium' },
          { name: 'Resolving power', latex: 'R = \\frac{1}{\\theta_{min}} = \\frac{D}{1.22\\lambda}', context: 'Ability to distinguish close objects', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Larger aperture → better resolution (smaller θ_min)',
          'Shorter wavelength → better resolution',
          'For human eye: D ≈ 2mm in bright light',
        ],
        dimensionalCheck: '[θ] = rad',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Confusing diffraction minima with interference minima formulas',
        correct: 'Single slit diffraction: a sin θ = nλ for MINIMA (n=1,2,3...). Double slit interference: d sin θ = (n+½)λ for minima.',
        whyItHappens: 'Similar looking formulas for different phenomena',
        neetExample: 'NEET 2020: Position of first minimum in single slit diffraction',
      },
      {
        mistake: 'Thinking a sin θ = nλ gives maxima in diffraction',
        correct: 'This formula gives MINIMA! Maxima are approximately at a sin θ = (2n+1)λ/2',
        whyItHappens: 'Confusing with double slit bright fringe formula',
        neetExample: 'NEET 2019: Why is there no central dark fringe in diffraction?',
      },
      {
        mistake: 'Using n=0 in diffraction minima formula',
        correct: 'n starts from 1 for diffraction minima! n=0 gives central maximum, not minimum.',
        whyItHappens: 'Force of habit from interference where n can be 0',
        neetExample: 'NEET 2021: Number of minima on each side of central max',
      },
      {
        mistake: 'Thinking wider slit gives wider diffraction pattern',
        correct: 'Opposite is true! Narrower slit gives WIDER diffraction pattern. w ∝ 1/a',
        whyItHappens: 'Counter-intuitive relationship',
        neetExample: 'NEET 2022: Effect of halving slit width on central max width',
      },
    ],
    
    variations: [
      { type: 'numerical', description: 'Width of central maximum', difficulty: 'easy' },
      { type: 'numerical', description: 'Position of nth minimum', difficulty: 'medium' },
      { type: 'conceptual', description: 'Compare interference and diffraction', difficulty: 'medium' },
      { type: 'conceptual', description: 'Effect of changing slit width', difficulty: 'easy' },
      { type: 'numerical', description: 'Resolving power of telescope/eye', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: 'Central maximum width calculation', frequency: 'high', yearAsked: [2018, 2019, 2021, 2022, 2023] },
      { pattern: 'Position of minima', frequency: 'high', yearAsked: [2019, 2020, 2022, 2023] },
      { pattern: 'Effect of slit width on pattern', frequency: 'medium', yearAsked: [2018, 2020, 2021] },
      { pattern: 'Difference between interference and diffraction', frequency: 'medium', yearAsked: [2019, 2022] },
    ],
    
    analogies: [
      {
        concept: 'Diffraction spreading',
        analogy: 'Sound around corner',
        mapping: 'Sound spreads around corners because wavelength is comparable to obstacle size. Light does same through narrow slits.',
      },
      {
        concept: 'Slit width effect',
        analogy: 'Squeezing toothpaste',
        mapping: 'Narrower opening causes more spreading (harder to control direction) - narrower slit spreads light more',
      },
      {
        concept: 'Central maximum dominance',
        analogy: 'Spotlight',
        mapping: 'Most light concentrated in central bright region, side lobes are much weaker',
      },
    ],
    
    questions: [],
  },

  // Topic 4: Polarization
  {
    id: 'polarization',
    name: 'Polarization of Light',
    weightage: 0.5,
    difficulty: 'medium',
    
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
        "Scattered light is polarized",
      ],
      prerequisites: ['huygens-principle'],
      ncertReference: "NCERT Class 12, Chapter 10, Section 10.7",
    },
    
    formulas: [
      {
        id: 'malus-law',
        name: "Malus's Law",
        category: 'base',
        formula: 'I = I₀ cos²θ',
        latex: 'I = I_0 \\cos^2\\theta',
        description: 'Intensity of polarized light after passing through analyzer',
        variables: [
          { symbol: 'I', meaning: 'Transmitted intensity', unit: 'W/m²', typical_values: '0 to I₀' },
          { symbol: 'I₀', meaning: 'Incident polarized intensity', unit: 'W/m²', typical_values: 'Input intensity' },
          { symbol: 'θ', meaning: 'Angle between polarizer and analyzer', unit: 'degrees', typical_values: '0° to 90°' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Parallel axes (θ = 0°)', latex: 'I = I_0', context: 'Maximum transmission', neet_frequency: 'high' },
          { name: 'Crossed axes (θ = 90°)', latex: 'I = 0', context: 'No transmission (extinction)', neet_frequency: 'high' },
          { name: 'At 45°', latex: 'I = I_0/2', context: 'Half intensity transmitted', neet_frequency: 'high' },
          { name: 'At 60°', latex: 'I = I_0/4', context: 'Quarter intensity', neet_frequency: 'medium' },
        ],
        specialCases: [
          'For unpolarized light through polarizer: I = I₀/2 first',
          'Two polaroids at 45° to each other: I = I₀/4',
          'Three polaroids at 0°, 45°, 90°: I = I₀/8 (not zero!)',
        ],
        dimensionalCheck: '[I] = W/m²',
      },
      {
        id: 'brewster-angle',
        name: "Brewster's Angle",
        category: 'base',
        formula: 'tan θ_B = n = n₂/n₁',
        latex: '\\tan\\theta_B = n = \\frac{n_2}{n_1}',
        description: 'Angle of incidence at which reflected light is completely plane polarized',
        variables: [
          { symbol: 'θ_B', meaning: 'Brewster angle (polarizing angle)', unit: 'degrees', typical_values: '53° for glass (n=1.5)' },
          { symbol: 'n', meaning: 'Refractive index of second medium', unit: 'dimensionless', typical_values: '1.5 (glass), 1.33 (water)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'For glass (n=1.5)', latex: '\\theta_B = \\tan^{-1}(1.5) \\approx 57°', context: 'Common NEET value', neet_frequency: 'high' },
          { name: 'Reflected ⊥ refracted', latex: '\\theta_B + \\theta_r = 90°', context: 'Key relationship', neet_frequency: 'high' },
          { name: 'Relation to critical angle', latex: '\\tan\\theta_B = \\frac{1}{\\sin\\theta_c}', context: 'For same interface', neet_frequency: 'medium' },
        ],
        specialCases: [
          'At Brewster angle, reflected ray perpendicular to refracted ray',
          'Reflected light is fully polarized (E parallel to surface)',
          'Refracted light is partially polarized',
        ],
        dimensionalCheck: 'tan θ = dimensionless',
      },
      {
        id: 'polaroid-transmission',
        name: 'Polaroid Transmission',
        category: 'derived',
        formula: 'I = I₀/2 (unpolarized through polaroid)',
        latex: 'I = \\frac{I_0}{2}',
        description: 'Intensity of unpolarized light after passing through a polaroid',
        variables: [
          { symbol: 'I₀', meaning: 'Incident unpolarized intensity', unit: 'W/m²', typical_values: 'Natural light' },
          { symbol: 'I', meaning: 'Transmitted intensity', unit: 'W/m²', typical_values: 'I₀/2' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Two polaroids', latex: 'I = \\frac{I_0}{2}\\cos^2\\theta', context: 'Unpolarized → P1 → P2', neet_frequency: 'high' },
          { name: 'Crossed polaroids', latex: 'I = 0', context: 'θ = 90° gives extinction', neet_frequency: 'high' },
          { name: 'Adding third polaroid', latex: 'I = \\frac{I_0}{8}', context: 'At 0°, 45°, 90° orientation', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Average of all directions cos²θ = 1/2',
          'First polaroid reduces intensity to half',
          'Inserting polaroid between crossed polaroids allows some light through',
        ],
        dimensionalCheck: '[I] = W/m²',
      },
      {
        id: 'rayleigh-scattering',
        name: 'Rayleigh Scattering',
        category: 'derived',
        formula: 'I ∝ 1/λ⁴',
        latex: 'I_{scattered} \\propto \\frac{1}{\\lambda^4}',
        description: 'Intensity of scattered light varies inversely with fourth power of wavelength',
        variables: [
          { symbol: 'I', meaning: 'Scattered intensity', unit: 'W/m²', typical_values: 'Blue >> Red' },
          { symbol: 'λ', meaning: 'Wavelength', unit: 'm', typical_values: '400nm (blue) to 700nm (red)' },
        ],
        derivedFrom: null,
        applications: [
          { name: 'Blue sky', latex: '\\frac{I_{blue}}{I_{red}} = \\left(\\frac{700}{400}\\right)^4 \\approx 9', context: 'Blue scattered 9× more than red', neet_frequency: 'high' },
          { name: 'Red sunset', latex: '\\text{Blue scattered away, red remains}', context: 'Long path through atmosphere', neet_frequency: 'medium' },
        ],
        specialCases: [
          'Scattered light is polarized (90° to incident direction)',
          'Valid when particle size << wavelength',
          'Moon appears white because no atmosphere',
        ],
        dimensionalCheck: '[I] ∝ 1/[λ]⁴',
      },
    ],
    
    commonMistakes: [
      {
        mistake: 'Forgetting that unpolarized light through polaroid gives I₀/2, not I₀',
        correct: 'Polaroid passes only one component of unpolarized light, so intensity becomes I₀/2 first, then Malus\'s law applies for subsequent polaroids.',
        whyItHappens: 'Jumping directly to Malus\'s law without first step',
        neetExample: 'NEET 2020: Unpolarized light through two polaroids at 60°',
      },
      {
        mistake: 'Thinking crossed polaroids always give zero output',
        correct: 'Insert a third polaroid at 45° between crossed polaroids and light passes! I = I₀/8',
        whyItHappens: 'Not realizing intermediate polaroid rotates polarization',
        neetExample: 'NEET 2019: Effect of inserting polaroid between crossed polarizers',
      },
      {
        mistake: 'Confusing Brewster angle with critical angle',
        correct: 'Brewster: tan θ_B = n (polarization). Critical: sin θ_c = 1/n (total internal reflection). Both are different concepts.',
        whyItHappens: 'Both involve refractive index but different phenomena',
        neetExample: 'NEET 2021: Calculate Brewster angle for glass of n = 1.5',
      },
      {
        mistake: 'Wrong reason for sky being blue',
        correct: 'Rayleigh scattering (I ∝ 1/λ⁴) scatters blue more than red. NOT because air is blue!',
        whyItHappens: 'Misconception about scattering mechanism',
        neetExample: 'NEET 2022: Why is sky blue during day but red at sunset?',
      },
    ],
    
    variations: [
      { type: 'numerical', description: "Malus's law - intensity after analyzer", difficulty: 'easy' },
      { type: 'numerical', description: "Brewster's angle calculation", difficulty: 'easy' },
      { type: 'numerical', description: 'Multiple polaroids intensity', difficulty: 'medium' },
      { type: 'conceptual', description: 'Polarization proves transverse nature', difficulty: 'easy' },
      { type: 'conceptual', description: 'Explain blue sky and red sunset', difficulty: 'medium' },
      { type: 'numerical', description: 'Rayleigh scattering intensity ratio', difficulty: 'medium' },
    ],
    
    mostAskedPatterns: [
      { pattern: "Malus's law numerical", frequency: 'high', yearAsked: [2018, 2019, 2020, 2021, 2022, 2023] },
      { pattern: 'Brewster angle calculation', frequency: 'high', yearAsked: [2018, 2019, 2020, 2022] },
      { pattern: 'Unpolarized through two polaroids', frequency: 'high', yearAsked: [2019, 2020, 2021, 2023] },
      { pattern: 'Blue sky/red sunset explanation', frequency: 'medium', yearAsked: [2018, 2021, 2022] },
      { pattern: 'Crossed polaroids with middle polaroid', frequency: 'medium', yearAsked: [2019, 2022, 2023] },
    ],
    
    analogies: [
      {
        concept: 'Polarization',
        analogy: 'Rope through fence slats',
        mapping: 'Vertical rope wave passes through vertical slats, blocked by horizontal slats',
      },
      {
        concept: 'Polaroid sunglasses',
        analogy: 'Venetian blinds',
        mapping: 'Block light from certain directions (horizontal glare from roads) while allowing others',
      },
      {
        concept: 'Crossed polaroids',
        analogy: 'Two perpendicular fences',
        mapping: 'Vertical wave blocked by first horizontal fence, nothing to pass through second',
      },
      {
        concept: 'Rayleigh scattering',
        analogy: 'Small balls bouncing off net',
        mapping: 'Smaller balls (shorter λ blue) bounce more often than larger balls (longer λ red)',
      },
    ],
    
    questions: [],
  },
];
