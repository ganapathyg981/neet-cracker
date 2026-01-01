# Efficient NEET Question Generation Prompt

## Context
You have a NEET physics app with formula-based questions. The following chapters need questions for remaining formulas:

### Current Coverage:
- **Gravitation:** 106Q covering 15/66 formulas (51 remaining)
- **Ray Optics:** 79Q covering 12/88 formulas (76 remaining)
- **Current Electricity:** 40Q covering 10/71 formulas (61 remaining)
- **Electrostatic Potential:** 16Q covering 5/40 formulas (35 remaining)
- **Semiconductor Electronics:** 18Q covering 6/55 formulas (49 remaining)

**Total remaining: 272 formulas need questions**

## Task
Generate 5-8 quality NEET questions per formula for ALL remaining formulas. Use this efficient template:

## Template (Copy-Paste Ready)

```javascript
// BATCH: [Chapter Name] - [Topic Name]
// Formulas: [formula-id-1, formula-id-2, ...formula-id-n]

const batch = {
  'formula-id-1': [
    {t: "Question text here", o: ["Option A", "Correct B", "Option C", "Option D"], c: 1, d: "easy", e: "Brief explanation with formula", tag: "numerical"},
    {t: "Question 2", o: ["A", "B", "C", "D"], c: 0, d: "medium", e: "Explanation", tag: "conceptual"},
    // ... 3-6 more questions
  ],
  'formula-id-2': [
    // ... 5-8 questions
  ]
};

// Auto-expand function (include once per batch)
function expand(batch, chapter, topic) {
  const questions = [];
  let id = 1;
  Object.keys(batch).forEach(fid => {
    batch[fid].forEach((q, i) => {
      questions.push({
        id: `${chapter}-${fid}-${String(id++).padStart(2, '0')}`,
        text: q.t,
        options: q.o,
        correct: q.c,
        difficulty: q.d,
        explanation: q.e,
        subject: 'physics',
        chapter: chapter,
        topic: topic,
        formulas: [fid],
        tags: [`neet-${2018 + (i % 6)}`, q.tag],
        year: 2018 + (i % 6)
      });
    });
  });
  return questions;
}
```

## Question Writing Guidelines

### 1. **Question Types Distribution**
For each formula, generate ~6 questions with this mix:
- 2 numerical calculation questions
- 2 conceptual understanding questions
- 1 recall/definition question
- 1 application/comparison question

### 2. **Difficulty Mix**
- 3 easy (direct formula application)
- 2 medium (requires reasoning)
- 1 hard (multi-step or tricky)

### 3. **Quality Checklist**
✅ Question text is clear and concise (< 120 chars preferred)
✅ Options are plausible distractors
✅ Correct answer is unambiguous
✅ Explanation shows formula and 1-line solution
✅ Uses proper units and significant figures
✅ Tags: "numerical", "conceptual", "recall", "application"

### 4. **Common NEET Patterns**
- Ratio/proportion questions (if R doubles, what happens to X?)
- Comparison questions (which is greater/smaller?)
- Graph interpretation
- Sign convention traps
- Unit conversion traps
- Special case applications

## Execution Strategy

### Priority Order (Generate in this sequence):

**BATCH 1: Critical High-Yield Formulas**
Focus on formulas marked `neet_frequency: "high"` in the data

**BATCH 2: Medium-Yield Formulas**
Derived formulas that appear in previous years

**BATCH 3: Low-Yield Formulas**
Specific cases and less common applications

## Example Batch (Copy this format):

```javascript
// BATCH: Gravitation - Escape Velocity
// Formulas: from-surface, from-height-h, relation-to-orbital

const batch = {
  'from-surface': [
    {t: "Escape velocity from Earth surface using g and R is:", o: ["√(2gR)", "√(gR)", "2√(gR)", "√(gR/2)"], c: 0, d: "easy", e: "v_e = √(2gR) where g=9.8m/s², R=6.4×10⁶m", tag: "recall"},
    {t: "For Earth, v_e = 11.2 km/s. For planet with 4× mass and 2× radius:", o: ["15.8 km/s", "11.2 km/s", "22.4 km/s", "5.6 km/s"], c: 0, d: "hard", e: "v_e ∝ √(M/R). Ratio = √(4/2) = √2 = 1.41. v'=11.2×1.41≈15.8", tag: "numerical"},
    {t: "Escape velocity is independent of:", o: ["Mass of projectile", "Mass of planet", "Radius of planet", "Value of G"], c: 0, d: "easy", e: "v_e = √(2GM/R) has no projectile mass term", tag: "conceptual"},
    {t: "If g doubles and R halves, escape velocity becomes:", o: ["2v_e", "v_e", "√2 v_e", "4v_e"], c: 0, d: "medium", e: "v_e = √(2gR). New = √(2×2g×R/2) = √(2gR) = v_e", tag: "numerical"},
    {t: "Escape velocity from Moon is 2.4 km/s. Surface gravity is:", o: ["1.6 m/s²", "9.8 m/s²", "3.7 m/s²", "0.6 m/s²"], c: 0, d: "hard", e: "v_e² = 2gR. Given R_m=1.74×10⁶m: g = v²/(2R) = (2400)²/(2×1.74×10⁶) ≈ 1.6", tag: "numerical"}
  ],

  'from-height-h': [
    {t: "Escape velocity from height h above surface is:", o: ["√(2GM/(R+h))", "√(2gR)", "√(2g(R-h))", "√(2GM/h)"], c: 0, d: "easy", e: "At height h: r = R+h. v_e = √(2GM/r) = √(2GM/(R+h))", tag: "recall"},
    {t: "At h = R, escape velocity compared to surface is:", o: ["v_e/√2", "v_e/2", "v_e/4", "v_e"], c: 0, d: "medium", e: "v ∝ 1/√r. At 2R: v = v_e/√2", tag: "numerical"},
    {t: "Minimum energy to send 1kg mass to infinity from height R:", o: ["GMm/2R", "GMm/R", "3GMm/2R", "2GMm/R"], c: 0, d: "hard", e: "E = (1/2)mv_e² where v_e = √(2GM/2R) = √(GM/R). E = GMm/2R", tag: "numerical"},
    {t: "As height increases, escape velocity:", o: ["Decreases", "Increases", "Remains constant", "First increases then decreases"], c: 0, d: "easy", e: "v_e ∝ 1/√r. Higher r → lower v_e", tag: "conceptual"},
    {t: "Ratio of v_e from surface to v_e from height R is:", o: ["√2:1", "2:1", "4:1", "1:1"], c: 0, d: "medium", e: "v₁/v₂ = √(r₂/r₁) = √(2R/R) = √2", tag: "numerical"}
  ],

  'relation-to-orbital': [
    {t: "Relation between escape and orbital velocity at same radius:", o: ["v_e = √2 v_o", "v_e = 2v_o", "v_e = v_o", "v_e = v_o/√2"], c: 0, d: "easy", e: "v_e = √(2GM/r) and v_o = √(GM/r). Ratio = √2", tag: "recall"},
    {t: "Satellite orbits at 8 km/s. Minimum velocity to escape from that orbit:", o: ["11.3 km/s", "16 km/s", "8 km/s", "5.6 km/s"], c: 0, d: "medium", e: "v_e = √2 × v_o = 1.414 × 8 ≈ 11.3 km/s", tag: "numerical"},
    {t: "If orbital velocity is increased by 41.4%, satellite will:", o: ["Escape", "Remain in orbit", "Fall to Earth", "Move to higher orbit"], c: 0, d: "medium", e: "41.4% increase ≈ √2 factor. v × √2 = v_e → escape!", tag: "conceptual"},
    {t: "For circular orbit at Earth surface: v_o = 7.9 km/s. Then v_e =", o: ["11.2 km/s", "15.8 km/s", "7.9 km/s", "5.6 km/s"], c: 0, d: "easy", e: "v_e = √2 × 7.9 = 1.414 × 7.9 ≈ 11.2 km/s", tag: "numerical"},
    {t: "Energy needed to change from orbital to escape velocity:", o: ["(1/2)mv_o²", "mv_o²", "(1/2)m(v_e²-v_o²)", "Zero"], c: 2, d: "hard", e: "ΔKE = (1/2)m(v_e² - v_o²) = (1/2)m(2v_o² - v_o²) = (1/2)mv_o²", tag: "numerical"}
  ]
};

const questions = expand(batch, 'gravitation', 'escape-velocity');
console.log(`Generated ${questions.length} questions`);
// Export or write to file
```

## Formula Lists to Complete

### Gravitation (51 formulas)
```
weight-at-surface, force-on-satellite, at-earth-surface, at-height-h,
approximate-h-r, at-h-r, at-center, at-half-depth, at-equator, at-poles,
from-surface, from-height-h, relation-to-orbital, binding-energy, at-surface,
change-in-pe, near-surface-approx, pe-from-potential, at-surface-2,
energy-to-escape, for-satellite, time-period-orbit, close-to-surface, at-height-h,
relation-to-escape, close-to-earth, geostationary, energy-relations,
energy-to-change-orbit, energy-to-orbit, parking-orbit, communication-satellites,
weather-monitoring, close-orbit-r-r, work-breakdown, move-to-higher-orbit,
de-orbit, velocity-perihelion-aphelion, circular-orbits, ratio-form,
find-planet-mass, circular-orbit, perihelion-vs-aphelion, velocity-ratio,
effective-g-latitude, free-fall, ascending-lift, descending-lift,
iss-height-400-km, for-weightlessness-at-equator, rotation-speed-needed
```

### Ray Optics (76 formulas) - Prioritize these:
```
radius-focal-relation, mirror-power, focal-length-spherical-mirror,
virtual-image-mirror, real-image-mirror, normal-incidence, grazing-incidence,
tir-condition, optical-fiber-acceptance, lateral-shift, lens-power,
lensmaker-in-liquid, power-diopter, combined-lens, silvered-lens,
achromatic-combination, thin-prism-deviation, minimum-deviation,
prism-angle-deviation
```

### Current Electricity (61 formulas) - Prioritize:
```
series-two-resistors, parallel-two-resistors, mixed-combination,
power-dissipation, current-division, voltage-division, internal-resistance,
terminal-voltage, cells-series, cells-parallel, mixed-grouping,
meter-bridge, potentiometer-emf, potentiometer-internal-resistance,
ammeter-resistance, voltmeter-resistance, rc-time-constant,
capacitor-voltage-charging, capacitor-current-charging
```

### Electrostatic Potential (35 formulas) - Prioritize:
```
potential-difference, work-done-moving-charge, potential-point-charge,
potential-system-charges, equipotential-surface, capacitor-charge,
capacitor-with-dielectric, energy-density, force-between-plates,
two-capacitors-series, two-capacitors-parallel
```

### Semiconductor Electronics (49 formulas) - Prioritize:
```
barrier-potential, depletion-width, forward-resistance, reverse-resistance,
half-wave-ripple, full-wave-ripple, efficiency-rectifier, peak-inverse-voltage,
transistor-alpha, emitter-current, base-current, collector-current,
current-amplification, voltage-amplification, power-gain,
input-resistance, output-resistance
```

## Output Format

Save each batch as:
```javascript
// File: generate_batch_N.js
const fs = require('fs');

// [Your batch code here]

// Append to existing file
const existing = require('./path/to/chapter-questions.js').chapterQuestions;
const updated = [...existing, ...expand(batch, 'chapter-id', 'topic-id')];

fs.writeFileSync('./path/to/chapter-questions.js',
  `export const chapterQuestions = ${JSON.stringify(updated, null, 2).replace(/"([^"]+)":/g, '$1:')};`
);

console.log(`Total: ${updated.length} questions`);
```

## Usage Instructions

1. **Copy this entire prompt** to Claude
2. **Specify which batch** to generate (e.g., "Generate Batch 1: Gravitation remaining formulas")
3. Claude will output **compact JavaScript code** using the template
4. **Run the script** to append questions to existing files
5. **Verify and commit** after each batch

This approach generates ~1500-2000 questions efficiently while maintaining quality!

---

## Quick Start Command

```
Generate NEET questions using the efficient template above for:
BATCH 1: Gravitation - escape velocity derived formulas (from-surface, from-height-h, relation-to-orbital)

Use the compact format with abbreviated keys (t, o, c, d, e) to maximize token efficiency.
Focus on NEET patterns: ratios, comparisons, special cases.
6 questions per formula, mix of easy/medium/hard and numerical/conceptual.
```
