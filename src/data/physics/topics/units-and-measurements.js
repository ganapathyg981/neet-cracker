// Units and Measurements - 5% weightage (Tier 1)
// NCERT Class 11, Chapter 2

export const unitsAndMeasurementsTopics = [
      {
        id: "significant-figures",
        name: "Significant Figures",
        weightage: 2,
        difficulty: "easy",
        theory: {
          summary: "Significant figures indicate the precision of a measurement. All non-zero digits are significant. Zeros between non-zero digits are significant. Trailing zeros after decimal are significant. Leading zeros are not significant. Rules for arithmetic operations preserve appropriate precision.",
          realWorldAnalogy: "Like reporting money - if you have ₹1234.56, saying 'about ₹1200' has 2 significant figures, while '₹1234.56' has 6. More digits = more precision.",
          keyPoints: [
            "Non-zero digits are always significant",
            "Zeros between non-zero digits are significant (e.g., 1.002 has 4 SF)",
            "Leading zeros are NOT significant (0.005 has 1 SF)",
            "Trailing zeros after decimal ARE significant (3.50 has 3 SF)",
            "Addition/subtraction: result has same decimal places as least precise",
            "Multiplication/division: result has same SF as least precise factor"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "significant-figures-rules",
            name: "Significant Figures Rules",
            category: "base",
            formula: "Count based on position and type of digits",
            latex: "\\text{Rules for counting SF}",
            description: "Rules for determining number of significant figures",
            variables: [
              {
                symbol: "SF",
                meaning: "Significant figures",
                unit: "count",
                typical_values: "1-6 typically"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Scientific notation removes ambiguity: 5.0 × 10³ has 2 SF", "Exact numbers (like counting) have infinite SF"],
            dimensionalCheck: "Dimensionless count",
          },
          {
            id: "arithmetic-sf",
            name: "Arithmetic with Significant Figures",
            category: "derived",
            formula: "Match precision of least precise operand",
            latex: "\\text{Result SF} = \\text{min(operand SFs)}",
            description: "Rules for significant figures in calculations",
            variables: [],
            derivedFrom: "significant-figures-rules",
            applications: [],
            specialCases: ["For +/- : match decimal places", "For ×/÷ : match significant figures"],
            dimensionalCheck: "N/A",
          },
          {
            id: "non-zero-digits",
            name: "Non-zero digits",
            category: "derived",
            formula: "123 \\text{ has 3 SF}",
            latex: "123 \\text{ has 3 SF}",
            description: "All non-zero are significant",
            variables: [],
            derivedFrom: "significant-figures-rules",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "sandwiched-zeros",
            name: "Sandwiched zeros",
            category: "derived",
            formula: "1002 \\text{ has 4 SF}",
            latex: "1002 \\text{ has 4 SF}",
            description: "Zeros between non-zero count",
            variables: [],
            derivedFrom: "significant-figures-rules",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "leading-zeros",
            name: "Leading zeros",
            category: "derived",
            formula: "0.005 \\text{ has 1 SF}",
            latex: "0.005 \\text{ has 1 SF}",
            description: "Leading zeros don't count",
            variables: [],
            derivedFrom: "significant-figures-rules",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "trailing-zeros-after-decimal",
            name: "Trailing zeros after decimal",
            category: "derived",
            formula: "3.500 \\text{ has 4 SF}",
            latex: "3.500 \\text{ has 4 SF}",
            description: "After decimal, trailing zeros count",
            variables: [],
            derivedFrom: "significant-figures-rules",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless count",
            neet_frequency: "high",
          },
          {
            id: "multiplication",
            name: "Multiplication",
            category: "derived",
            formula: "3.2 \\times 2.1 = 6.72 \\rightarrow 6.7",
            latex: "3.2 \\times 2.1 = 6.72 \\rightarrow 6.7",
            description: "2 SF in each, result has 2 SF",
            variables: [],
            derivedFrom: "arithmetic-sf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "N/A",
            neet_frequency: "high",
          },
          {
            id: "addition",
            name: "Addition",
            category: "derived",
            formula: "3.25 + 2.1 = 5.35 \\rightarrow 5.4",
            latex: "3.25 + 2.1 = 5.35 \\rightarrow 5.4",
            description: "Match decimal places, not SF",
            variables: [],
            derivedFrom: "arithmetic-sf",
            applications: [],
            specialCases: [],
            dimensionalCheck: "N/A",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Counting leading zeros as significant",
            correct: "0.0045 has 2 SF, not 4. Leading zeros are placeholders.",
            whyItHappens: "Counting all digits regardless of position",
            neetExample: "NEET 2020: How many SF in 0.00540?"
          },
          {
            mistake: "Ignoring trailing zeros after decimal",
            correct: "2.50 has 3 SF (trailing zero after decimal is significant)",
            whyItHappens: "Thinking trailing zero is always insignificant",
            neetExample: "NEET 2019: SF in 5.00"
          },
          {
            mistake: "Using SF rule for addition instead of decimal places",
            correct: "Addition/subtraction: match decimal places. Multiplication/division: match SF.",
            whyItHappens: "Applying same rule to all operations",
            neetExample: "NEET 2021: 2.3 + 1.456 = ?"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Count significant figures",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Arithmetic with significant figures",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Identify rules for SF",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Count SF in given numbers",
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
            pattern: "Round result to correct SF",
            frequency: "high",
            yearAsked: [2019, 2020, 2022]
          }
        ],
        analogies: [
          {
            concept: "Significant figures",
            analogy: "Precision of a ruler",
            mapping: "Ruler with mm marks gives 3 SF for cm measurement, one with only cm marks gives 2 SF"
          }
        ],
        questions: [],
      },
      {
        id: "errors-in-measurement",
        name: "Errors in Measurement",
        weightage: 2,
        difficulty: "medium",
        theory: {
          summary: "Errors are uncertainties in measurements. Absolute error = |measured - true|. Relative error = absolute error/true value. Percentage error = relative error × 100. Errors propagate through calculations: for addition they add, for multiplication the relative errors add.",
          realWorldAnalogy: "Like estimating arrival time - if you say '30 minutes ± 5 minutes', the ± 5 is your absolute error. If actual time is 30 min, relative error is 5/30 = 16.7%.",
          keyPoints: [
            "Absolute error Δa = |measured - true|",
            "Mean absolute error = average of all |errors|",
            "Relative error = Δa/a",
            "Percentage error = (Δa/a) × 100%",
            "For sum/difference: absolute errors add",
            "For product/quotient: relative errors add"
          ],
          prerequisites: ["significant-figures"]
        },
        formulas: [
          {
            id: "absolute-error",
            name: "Absolute Error",
            category: "base",
            formula: "Δa = |measured - true|",
            latex: "\\Delta a = |a_{measured} - a_{true}|",
            description: "Magnitude of difference from true value",
            variables: [
              {
                symbol: "Δa",
                meaning: "Absolute error",
                unit: "Same as quantity",
                typical_values: "Small compared to value"
              },
              {
                symbol: "a",
                meaning: "True value",
                unit: "Varies",
                typical_values: "Best estimate"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["Always positive (magnitude)", "Has same units as the measured quantity"],
            dimensionalCheck: "[Δa] = [a]",
          },
          {
            id: "relative-error",
            name: "Relative and Percentage Error",
            category: "derived",
            formula: "Relative error = Δa/a, % error = (Δa/a) × 100",
            latex: "\\text{Relative error} = \\frac{\\Delta a}{a}, \\quad \\text{\\% error} = \\frac{\\Delta a}{a} \\times 100\\%",
            description: "Error as fraction or percentage of true value",
            variables: [
              {
                symbol: "Δa/a",
                meaning: "Relative error",
                unit: "dimensionless",
                typical_values: "0.001 to 0.1"
              },
              {
                symbol: "% error",
                meaning: "Percentage error",
                unit: "%",
                typical_values: "0.1% to 10%"
              }
            ],
            derivedFrom: "absolute-error",
            applications: [],
            specialCases: ["Dimensionless (ratio)", "Useful for comparing errors of different quantities"],
            dimensionalCheck: "Dimensionless",
          },
          {
            id: "error-propagation",
            name: "Error Propagation",
            category: "derived",
            formula: "For z = x^a × y^b: Δz/z = |a|Δx/x + |b|Δy/y",
            latex: "\\frac{\\Delta z}{z} = |a|\\frac{\\Delta x}{x} + |b|\\frac{\\Delta y}{y}",
            description: "How errors combine in calculations",
            variables: [
              {
                symbol: "a, b",
                meaning: "Exponents in formula",
                unit: "dimensionless",
                typical_values: "Powers of x, y"
              }
            ],
            derivedFrom: "relative-error",
            applications: [],
            specialCases: ["Higher power → larger error contribution", "Use absolute value of exponents"],
            dimensionalCheck: "Dimensionless for relative errors",
          },
          {
            id: "mean-absolute-error",
            name: "Mean absolute error",
            category: "derived",
            formula: "\\Delta a_{mean} = \\frac{\\sum |a_i - a_{mean}|}{n}",
            latex: "\\Delta a_{mean} = \\frac{\\sum |a_i - a_{mean}|}{n}",
            description: "Average of absolute errors",
            variables: [],
            derivedFrom: "absolute-error",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[Δa] = [a]",
            neet_frequency: "high",
          },
          {
            id: "percentage-error-calculation",
            name: "Percentage error calculation",
            category: "derived",
            formula: "\\text{\\% error} = \\frac{\\Delta a}{a} \\times 100\\%",
            latex: "\\text{\\% error} = \\frac{\\Delta a}{a} \\times 100\\%",
            description: "Convert relative to percentage",
            variables: [],
            derivedFrom: "relative-error",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "comparing-precision",
            name: "Comparing precision",
            category: "derived",
            formula: "\\text{Lower } \\frac{\\Delta a}{a} \\Rightarrow \\text{more precise}",
            latex: "\\text{Lower } \\frac{\\Delta a}{a} \\Rightarrow \\text{more precise}",
            description: "Relative error for comparison",
            variables: [],
            derivedFrom: "relative-error",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless",
            neet_frequency: "high",
          },
          {
            id: "for-a-x-y",
            name: "For A = x + y",
            category: "derived",
            formula: "\\Delta A = \\Delta x + \\Delta y",
            latex: "\\Delta A = \\Delta x + \\Delta y",
            description: "Absolute errors add",
            variables: [],
            derivedFrom: "error-propagation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless for relative errors",
            neet_frequency: "high",
          },
          {
            id: "for-a-x-y-2",
            name: "For A = x × y",
            category: "derived",
            formula: "\\frac{\\Delta A}{A} = \\frac{\\Delta x}{x} + \\frac{\\Delta y}{y}",
            latex: "\\frac{\\Delta A}{A} = \\frac{\\Delta x}{x} + \\frac{\\Delta y}{y}",
            description: "Relative errors add",
            variables: [],
            derivedFrom: "error-propagation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless for relative errors",
            neet_frequency: "high",
          },
          {
            id: "for-a-xn",
            name: "For A = x^n",
            category: "derived",
            formula: "\\frac{\\Delta A}{A} = n\\frac{\\Delta x}{x}",
            latex: "\\frac{\\Delta A}{A} = n\\frac{\\Delta x}{x}",
            description: "Power multiplies relative error",
            variables: [],
            derivedFrom: "error-propagation",
            applications: [],
            specialCases: [],
            dimensionalCheck: "Dimensionless for relative errors",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Adding relative errors for sum (instead of absolute)",
            correct: "For sum/difference, add ABSOLUTE errors. For product/quotient, add RELATIVE errors.",
            whyItHappens: "Not distinguishing sum vs product error rules",
            neetExample: "NEET 2020: Error in (a + b) vs error in (a × b)"
          },
          {
            mistake: "Forgetting to use absolute value of exponent",
            correct: "For A = x^n, % error in A = |n| × % error in x (use |n|)",
            whyItHappens: "Negative exponent giving negative error",
            neetExample: "NEET 2019: Error in 1/x² when x has 2% error"
          },
          {
            mistake: "Confusing precision with accuracy",
            correct: "Precision = consistency of measurements. Accuracy = closeness to true value.",
            whyItHappens: "Similar meanings in everyday language",
            neetExample: "NEET 2021: High precision but low accuracy example"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate percentage error",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Error propagation in formulas",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Types of errors",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Percentage error calculation",
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
            pattern: "Error in derived quantity",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Maximum error from formula",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Error propagation",
            analogy: "Uncertain travel time",
            mapping: "If both walking (5±1 min) and bus (20±5 min) times uncertain, total uncertainty is sum: 25±6 min"
          }
        ],
        questions: [],
      },
      {
        id: "measuring-instruments",
        name: "Measuring Instruments",
        weightage: 1,
        difficulty: "easy",
        theory: {
          summary: "Vernier caliper measures with least count 0.1 mm (0.01 cm). Screw gauge has least count 0.01 mm (0.001 cm). Vernier uses coincidence principle; screw gauge uses pitch and circular scale divisions. Zero error must be corrected in final reading.",
          realWorldAnalogy: "Vernier is like two rulers sliding together for finer reading. Screw gauge is like a fine-threaded screw - one full turn moves a small linear distance.",
          keyPoints: [
            "Vernier LC = 1 MSD - 1 VSD (typically 0.01 cm)",
            "Screw gauge LC = Pitch/Number of circular divisions (typically 0.001 cm)",
            "Zero error: +ve if zero on right of main zero, -ve if on left",
            "Correct reading = observed reading - zero error",
            "Vernier reading: MSR + (coinciding division × LC)",
            "Screw gauge reading: PSR + (circular scale reading × LC)"
          ],
          prerequisites: []
        },
        formulas: [
          {
            id: "vernier-least-count",
            name: "Vernier Caliper Least Count",
            category: "base",
            formula: "LC = 1 MSD - 1 VSD",
            latex: "LC = 1 \\text{ MSD} - 1 \\text{ VSD} = \\frac{1 \\text{ MSD}}{n}",
            description: "Smallest measurement possible with vernier caliper",
            variables: [
              {
                symbol: "LC",
                meaning: "Least count",
                unit: "cm or mm",
                typical_values: "0.01 cm = 0.1 mm"
              },
              {
                symbol: "MSD",
                meaning: "Main scale division",
                unit: "cm or mm",
                typical_values: "1 mm"
              },
              {
                symbol: "VSD",
                meaning: "Vernier scale division",
                unit: "cm or mm",
                typical_values: "0.9 mm"
              },
              {
                symbol: "n",
                meaning: "Number of VSD in (n-1) MSD",
                unit: "dimensionless",
                typical_values: "10"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["MSR is main scale reading just before vernier zero", "n is the vernier division coinciding with main scale"],
            dimensionalCheck: "[LC] = mm or cm",
          },
          {
            id: "screw-gauge-lc",
            name: "Screw Gauge Least Count",
            category: "base",
            formula: "LC = Pitch / N",
            latex: "LC = \\frac{\\text{Pitch}}{N}",
            description: "Smallest measurement possible with screw gauge",
            variables: [
              {
                symbol: "LC",
                meaning: "Least count",
                unit: "mm",
                typical_values: "0.01 mm"
              },
              {
                symbol: "Pitch",
                meaning: "Linear distance per full rotation",
                unit: "mm",
                typical_values: "0.5 or 1 mm"
              },
              {
                symbol: "N",
                meaning: "Number of circular scale divisions",
                unit: "dimensionless",
                typical_values: "50 or 100"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["PSR is pitch scale reading", "More precise than vernier caliper"],
            dimensionalCheck: "[LC] = mm",
          },
          {
            id: "zero-error",
            name: "Zero Error Correction",
            category: "derived",
            formula: "True reading = Observed - Zero error",
            latex: "\\text{True} = \\text{Observed} - \\text{Zero error}",
            description: "Correction for instrument not reading zero when closed",
            variables: [
              {
                symbol: "Zero error",
                meaning: "Reading when jaws touch",
                unit: "mm",
                typical_values: "+ve or -ve"
              }
            ],
            derivedFrom: null,
            applications: [],
            specialCases: ["+ve ZE: subtract from reading", "-ve ZE: add to reading"],
            dimensionalCheck: "[reading] = mm",
          },
          {
            id: "standard-vernier",
            name: "Standard vernier",
            category: "derived",
            formula: "LC = \\frac{1 \\text{ mm}}{10} = 0.1 \\text{ mm}",
            latex: "LC = \\frac{1 \\text{ mm}}{10} = 0.1 \\text{ mm}",
            description: "10 VSD = 9 MSD",
            variables: [],
            derivedFrom: "vernier-least-count",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[LC] = mm or cm",
            neet_frequency: "high",
          },
          {
            id: "reading",
            name: "Reading",
            category: "derived",
            formula: "\\text{Reading} = \\text{MSR} + (n \\times LC)",
            latex: "\\text{Reading} = \\text{MSR} + (n \\times LC)",
            description: "n is coinciding vernier division",
            variables: [],
            derivedFrom: "vernier-least-count",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[LC] = mm or cm",
            neet_frequency: "high",
          },
          {
            id: "standard-screw-gauge",
            name: "Standard screw gauge",
            category: "derived",
            formula: "LC = \\frac{1 \\text{ mm}}{100} = 0.01 \\text{ mm}",
            latex: "LC = \\frac{1 \\text{ mm}}{100} = 0.01 \\text{ mm}",
            description: "Pitch 1mm, 100 divisions",
            variables: [],
            derivedFrom: "screw-gauge-lc",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[LC] = mm",
            neet_frequency: "high",
          },
          {
            id: "reading-2",
            name: "Reading",
            category: "derived",
            formula: "\\text{Reading} = \\text{PSR} + (n \\times LC)",
            latex: "\\text{Reading} = \\text{PSR} + (n \\times LC)",
            description: "n is circular scale reading",
            variables: [],
            derivedFrom: "screw-gauge-lc",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[LC] = mm",
            neet_frequency: "high",
          },
          {
            id: "lc-calculation",
            name: "LC calculation",
            category: "derived",
            formula: "LC = \\frac{\\text{Pitch}}{N}",
            latex: "LC = \\frac{\\text{Pitch}}{N}",
            description: "For any pitch and divisions",
            variables: [],
            derivedFrom: "screw-gauge-lc",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[LC] = mm",
            neet_frequency: "high",
          },
          {
            id: "positive-zero-error",
            name: "Positive zero error",
            category: "derived",
            formula: "\\text{True} = \\text{Obs} - (+\\text{ZE})",
            latex: "\\text{True} = \\text{Obs} - (+\\text{ZE})",
            description: "Zero on right of reference",
            variables: [],
            derivedFrom: "zero-error",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[reading] = mm",
            neet_frequency: "high",
          },
          {
            id: "negative-zero-error",
            name: "Negative zero error",
            category: "derived",
            formula: "\\text{True} = \\text{Obs} - (-\\text{ZE}) = \\text{Obs} + |\\text{ZE}|",
            latex: "\\text{True} = \\text{Obs} - (-\\text{ZE}) = \\text{Obs} + |\\text{ZE}|",
            description: "Zero on left of reference",
            variables: [],
            derivedFrom: "zero-error",
            applications: [],
            specialCases: [],
            dimensionalCheck: "[reading] = mm",
            neet_frequency: "high",
          }
        ],
        commonMistakes: [
          {
            mistake: "Adding zero error instead of subtracting",
            correct: "True reading = Observed - Zero error (subtract the zero error)",
            whyItHappens: "Confusion with sign conventions",
            neetExample: "NEET 2020: Screw gauge with +0.03 mm zero error, observed 5.52 mm"
          },
          {
            mistake: "Wrong LC calculation for vernier",
            correct: "LC = 1 MSD - 1 VSD, not MSD + VSD",
            whyItHappens: "Misremembering the formula",
            neetExample: "NEET 2019: Calculate vernier least count"
          },
          {
            mistake: "Confusing pitch with least count",
            correct: "LC = Pitch/N, not pitch itself. N is number of divisions.",
            whyItHappens: "Not dividing by number of divisions",
            neetExample: "NEET 2021: LC of screw gauge with pitch 0.5 mm and 50 divisions"
          }
        ],
        variations: [
          {
            type: "numerical",
            description: "Calculate least count",
            difficulty: "easy"
          },
          {
            type: "numerical",
            description: "Find reading with zero error correction",
            difficulty: "medium"
          },
          {
            type: "conceptual",
            description: "Compare precision of instruments",
            difficulty: "easy"
          }
        ],
        mostAskedPatterns: [
          {
            pattern: "Least count calculation",
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
            pattern: "Zero error correction",
            frequency: "high",
            yearAsked: [
              2019,
              2020,
              2022,
              2023
            ]
          },
          {
            pattern: "Reading from given scale position",
            frequency: "medium",
            yearAsked: [2018, 2021, 2022]
          }
        ],
        analogies: [
          {
            concept: "Vernier principle",
            analogy: "Two rulers with slightly different spacing",
            mapping: "Difference between scales allows reading finer than smallest division"
          },
          {
            concept: "Screw gauge pitch",
            analogy: "Spiral staircase",
            mapping: "One full turn moves you up by one step height (pitch)"
          }
        ],
        questions: [],
      }
    ];