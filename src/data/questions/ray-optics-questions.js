// RayOptics Questions
// Updated: 2026-01-01T08:27:13.730Z
// Total: 175 questions

export const rayOpticsQuestions = [
  {
    "id": "ray-optics-mirror-formula-01",
    "text": "The mirror formula relating object distance (u), image distance (v), and focal length (f) is:",
    "options": [
      "1/f = 1/v + 1/u",
      "1/f = 1/v - 1/u",
      "f = v + u",
      "1/f = uv/(u+v)"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Mirror formula: 1/f = 1/v + 1/u (valid for both concave and convex mirrors)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-mirror-formula-02",
    "text": "A concave mirror has focal length 20 cm. Object at 30 cm gives image at:",
    "options": [
      "60 cm (real, inverted)",
      "12 cm",
      "15 cm",
      "40 cm"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1/f = 1/v + 1/u: 1/20 = 1/v + 1/(-30). Solving: v = -60 cm (real image)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-mirror-formula-03",
    "text": "For a convex mirror, focal length is taken as:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Sign convention: f is positive for convex mirror (diverging), negative for concave",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-mirror-formula-04",
    "text": "Object at infinity gives image at focal point. This verifies mirror formula because:",
    "options": [
      "1/∞ = 0, so 1/f = 1/v",
      "v = u",
      "f = 0",
      "Image is virtual"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "When u → ∞, 1/u → 0. So 1/f = 1/v + 0, giving v = f",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-mirror-formula-05",
    "text": "A concave mirror forms real image twice the size of object. If f = 15 cm, object distance is:",
    "options": [
      "22.5 cm",
      "30 cm",
      "7.5 cm",
      "45 cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "m = -v/u = -2 (real, inverted). So v = 2u. Using 1/f = 1/v + 1/u: 1/15 = 1/(2u) + 1/(-u) = -1/(2u). u = -22.5 cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-mirror-formula-06",
    "text": "When object is at center of curvature of concave mirror, image is formed:",
    "options": [
      "At C, same size, inverted",
      "At focus",
      "At infinity",
      "Behind mirror"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "u = -2f, so 1/f = 1/v + 1/(-2f). Solving: v = -2f = C. Magnification m = -v/u = -1 (same size)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-mirror-formula-07",
    "text": "Convex mirror always forms image that is:",
    "options": [
      "Virtual, erect, diminished",
      "Real, inverted",
      "Virtual, magnified",
      "Real, erect"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Convex mirror: v is always positive (behind mirror) and |v| < |u|, so virtual, erect, smaller",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-mirror-formula-08",
    "text": "Object placed between F and pole of concave mirror produces image:",
    "options": [
      "Virtual, erect, magnified",
      "Real, inverted, magnified",
      "Virtual, diminished",
      "At infinity"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "When -f < u < 0: v comes out positive (behind mirror), magnification > 1. Virtual, erect, enlarged",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "mirror-formula"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-magnification-mirror-09",
    "text": "Magnification formula for mirrors is:",
    "options": [
      "m = -v/u = h'/h",
      "m = v/u",
      "m = u/v",
      "m = f/u"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "m = -v/u (negative sign accounts for inversion). Also m = h'/h (image height/object height)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "magnification-mirror"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-magnification-mirror-10",
    "text": "Magnification m = -2 indicates image is:",
    "options": [
      "Real, inverted, twice the size",
      "Virtual, erect, twice size",
      "Real, erect",
      "Virtual, inverted"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Negative m → real, inverted. |m| = 2 → twice the size",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "magnification-mirror"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-magnification-mirror-11",
    "text": "A 5 cm tall object produces 2 cm tall erect image. Magnification is:",
    "options": [
      "+0.4",
      "-0.4",
      "+2.5",
      "-2.5"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Erect image → positive m. m = h'/h = 2/5 = +0.4",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "magnification-mirror"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-magnification-mirror-12",
    "text": "For plane mirror, magnification is always:",
    "options": [
      "+1",
      "-1",
      "0",
      "Varies"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Plane mirror: v = -u (behind mirror at same distance). m = -v/u = -(-u)/u = +1 (virtual, erect, same size)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "magnification-mirror"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-magnification-mirror-13",
    "text": "Image distance is 40 cm for object at 10 cm from concave mirror. Magnification is:",
    "options": [
      "-4",
      "+4",
      "-0.25",
      "+0.25"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "m = -v/u = -(-40)/(-10) = -4 (real, inverted, 4× magnified)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "magnification-mirror"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-snells-law-14",
    "text": "Snell's law of refraction is:",
    "options": [
      "n₁sinθ₁ = n₂sinθ₂",
      "n₁cosθ₁ = n₂cosθ₂",
      "n₁/sinθ₁ = n₂/sinθ₂",
      "n₁θ₁ = n₂θ₂"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Snell's law: n₁sinθ₁ = n₂sinθ₂ or μ₁sinθ₁ = μ₂sinθ₂",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-snells-law-15",
    "text": "Light travels from air (n=1) to glass (n=1.5) at 60° incidence. Angle of refraction is:",
    "options": [
      "35.3°",
      "60°",
      "40°",
      "45°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1×sin60° = 1.5×sinr. sinr = sin60°/1.5 = 0.866/1.5 = 0.577. r = 35.3°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-snells-law-16",
    "text": "When light enters a denser medium, it bends:",
    "options": [
      "Towards the normal",
      "Away from normal",
      "No bending",
      "Parallel to surface"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Denser medium (higher n) → ray bends toward normal (angle decreases)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-snells-law-17",
    "text": "Light travels from glass (n=1.5) to water (n=1.33). This is an example of:",
    "options": [
      "Refraction from denser to rarer",
      "Denser to denser",
      "Rarer to denser",
      "No refraction"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Glass has higher n than water, so denser to rarer. Ray bends away from normal",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-snells-law-18",
    "text": "At what angle should light be incident on glass (n=1.5) so that refracted ray is at 30° to normal?",
    "options": [
      "48.6°",
      "30°",
      "45°",
      "60°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1×sini = 1.5×sin30°. sini = 1.5×0.5 = 0.75. i = 48.6°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-snells-law-19",
    "text": "When light ray is perpendicular to surface (θ = 0°), it:",
    "options": [
      "Passes undeviated",
      "Reflects back",
      "Refracts at 45°",
      "Undergoes TIR"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "At normal incidence (θ₁ = 0°), sinθ₁ = 0, so sinθ₂ = 0. No bending, passes straight",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-snells-law-20",
    "text": "Refractive index of medium is the ratio of:",
    "options": [
      "Speed in vacuum/speed in medium",
      "Speed in medium/speed in vacuum",
      "Wavelength in vacuum/wavelength in medium",
      "Both A and C"
    ],
    "correct": 3,
    "difficulty": "medium",
    "explanation": "n = c/v = λ₀/λ (both speed ratio and wavelength ratio). Frequency remains constant",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-critical-angle-21",
    "text": "Critical angle is defined as the angle of incidence in denser medium for which:",
    "options": [
      "Angle of refraction = 90°",
      "Angle of refraction = 0°",
      "Total reflection occurs",
      "No refraction"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Critical angle C: when θᵣ = 90° (refracted ray grazes surface). Beyond C, total internal reflection",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-critical-angle-22",
    "text": "Formula for critical angle is:",
    "options": [
      "sinC = n₂/n₁ (n₁ > n₂)",
      "sinC = n₁/n₂",
      "C = n₁/n₂",
      "C = sin⁻¹(n₁×n₂)"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "At critical angle: n₁sinC = n₂sin90° = n₂. So sinC = n₂/n₁ (for n₁ > n₂)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-critical-angle-23",
    "text": "Critical angle for glass-air interface (n_glass = 1.5) is:",
    "options": [
      "41.8°",
      "48.6°",
      "60°",
      "30°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "sinC = 1/1.5 = 0.667. C = 41.8°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-critical-angle-24",
    "text": "Critical angle for water-air interface (n_water = 4/3) is:",
    "options": [
      "48.6°",
      "41.8°",
      "53.1°",
      "36.9°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "sinC = 1/(4/3) = 3/4 = 0.75. C = 48.6°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-critical-angle-25",
    "text": "If critical angle increases, refractive index:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Becomes infinite"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "sinC = 1/n (for air interface). Higher C → higher sinC → lower n",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-critical-angle-26",
    "text": "Total internal reflection occurs when light travels from:",
    "options": [
      "Denser to rarer at θ > C",
      "Rarer to denser",
      "Any direction at θ > C",
      "Normal incidence"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "TIR requires: (1) denser to rarer medium, (2) angle of incidence > critical angle",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-critical-angle-27",
    "text": "Diamond has very high brilliance because:",
    "options": [
      "Very small critical angle (~24°)",
      "Large critical angle",
      "High absorption",
      "Perfect reflection"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n_diamond ≈ 2.4, so C ≈ 24°. Most light entering undergoes TIR multiple times → sparkle",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-thin-lens-formula-28",
    "text": "The thin lens formula is:",
    "options": [
      "1/f = 1/v - 1/u",
      "1/f = 1/v + 1/u",
      "f = v - u",
      "v = u + f"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Lens formula: 1/f = 1/v - 1/u (note sign convention: u is always negative for real object)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-thin-lens-formula-29",
    "text": "A convex lens (f = 20 cm) forms image of object at 30 cm. Object distance is:",
    "options": [
      "60 cm",
      "12 cm",
      "10 cm",
      "15 cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "1/20 = 1/v - 1/u. For real image v is positive. Taking v = 60: 1/20 = 1/60 - 1/u. u = -60 cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-thin-lens-formula-30",
    "text": "For concave lens, focal length is:",
    "options": [
      "Negative",
      "Positive",
      "Zero",
      "Infinite"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Sign convention: f negative for concave (diverging) lens, positive for convex",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-thin-lens-formula-31",
    "text": "Object at 2F of convex lens gives image at:",
    "options": [
      "2F on other side, same size",
      "F",
      "Infinity",
      "Between F and 2F"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "u = -2f. Then 1/f = 1/v - 1/(-2f) = 1/v + 1/(2f). Solving: v = 2f. Magnification = -1",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-thin-lens-formula-32",
    "text": "A diverging lens of focal length 15 cm has object at 30 cm. Image distance is:",
    "options": [
      "-10 cm (virtual)",
      "10 cm",
      "-30 cm",
      "15 cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "1/(-15) = 1/v - 1/(-30). -1/15 = 1/v + 1/30. 1/v = -1/15 - 1/30 = -3/30 = -1/10. v = -10 cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-thin-lens-formula-33",
    "text": "Convex lens always forms virtual image when object is:",
    "options": [
      "Between F and optical center",
      "Beyond 2F",
      "At F",
      "At infinity"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "When 0 < |u| < f: v becomes negative (virtual image on same side as object), magnified",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-thin-lens-formula-34",
    "text": "Power of a lens is defined as:",
    "options": [
      "P = 1/f (in meters)",
      "P = f",
      "P = 1/f (in cm)",
      "P = 100/f"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Power P = 1/f where f is in meters. Unit: diopter (D) = m⁻¹",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-thin-lens-formula-35",
    "text": "A lens has power +5 D. Its focal length is:",
    "options": [
      "20 cm",
      "5 cm",
      "-20 cm",
      "0.2 m"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "P = 1/f. 5 = 1/f. f = 0.2 m = 20 cm (positive power → convex lens)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-lens-maker-formula-36",
    "text": "Lens maker's formula relates focal length to:",
    "options": [
      "Refractive index and radii of curvature",
      "Object and image distances",
      "Power and magnification",
      "Wavelength of light"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "1/f = (n-1)(1/R₁ - 1/R₂) relates f to n and curvature radii",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-lens-maker-formula-37",
    "text": "Lens maker's formula is:",
    "options": [
      "1/f = (n-1)(1/R₁ - 1/R₂)",
      "1/f = n(1/R₁ - 1/R₂)",
      "f = (n-1)(R₁ + R₂)",
      "1/f = (n+1)(1/R₁ + 1/R₂)"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "1/f = (μ_lens/μ_medium - 1)(1/R₁ - 1/R₂). In air: 1/f = (n-1)(1/R₁ - 1/R₂)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-lens-maker-formula-38",
    "text": "A double convex lens (R₁ = 20 cm, R₂ = -30 cm) made of glass (n = 1.5) has focal length:",
    "options": [
      "24 cm",
      "12 cm",
      "48 cm",
      "36 cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "1/f = (1.5-1)(1/20 - 1/(-30)) = 0.5(1/20 + 1/30) = 0.5(5/60) = 1/24. f = 24 cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-lens-maker-formula-39",
    "text": "If a lens is immersed in water (n_w = 4/3), its focal length compared to air:",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "Becomes infinite"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "f ∝ 1/(n_rel - 1) where n_rel = n_lens/n_medium. In water: n_rel decreases → (n_rel-1) decreases → f increases",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-lens-maker-formula-40",
    "text": "For plano-convex lens (one flat surface), R₂ = ∞. The formula becomes:",
    "options": [
      "1/f = (n-1)/R₁",
      "1/f = (n-1)R₁",
      "f = R₁/(n-1)",
      "Both A and C"
    ],
    "correct": 3,
    "difficulty": "medium",
    "explanation": "1/R₂ = 0 for flat surface. So 1/f = (n-1)/R₁, or f = R₁/(n-1)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-lens-maker-formula-41",
    "text": "A concave lens in water behaves like:",
    "options": [
      "Still diverging but weaker",
      "Converging lens",
      "Plane glass",
      "Perfect reflector"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n_rel = n_glass/n_water still > 1, so still diverging. But reduced power (larger focal length)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker-formula"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-refractive-index-42",
    "text": "Refractive index is the ratio of:",
    "options": [
      "Speed of light in vacuum to speed in medium",
      "Speed in medium to speed in vacuum",
      "c/λ",
      "Both A and C are wrong"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n = c/v where c is speed in vacuum, v is speed in medium. Also n = λ₀/λ",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "refractive-index"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-refractive-index-43",
    "text": "Speed of light in glass (n = 1.5) is:",
    "options": [
      "2×10⁸ m/s",
      "3×10⁸ m/s",
      "1.5×10⁸ m/s",
      "4.5×10⁸ m/s"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "v = c/n = 3×10⁸/1.5 = 2×10⁸ m/s",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "refractive-index"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-refractive-index-44",
    "text": "When light enters denser medium, which remains constant?",
    "options": [
      "Frequency",
      "Wavelength",
      "Speed",
      "All of these"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Frequency remains constant during refraction. Speed and wavelength both decrease in denser medium",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "refractive-index"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-refractive-index-45",
    "text": "Absolute refractive index is always:",
    "options": [
      "≥ 1",
      "< 1",
      "= 1",
      "Can be any value"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n = c/v. Since v ≤ c always, n ≥ 1 (minimum is 1 for vacuum)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "refractive-index"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-refractive-index-46",
    "text": "Light of wavelength 600 nm in air enters glass (n=1.5). Wavelength in glass:",
    "options": [
      "400 nm",
      "600 nm",
      "900 nm",
      "200 nm"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "λ_medium = λ_air/n = 600/1.5 = 400 nm (frequency constant, so λ ∝ v ∝ 1/n)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "refractive-index"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-apparent-depth-47",
    "text": "Apparent depth formula is:",
    "options": [
      "d' = d/n",
      "d' = d×n",
      "d' = n/d",
      "d' = d - n"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Object at depth d appears at d/n when viewed from rarer medium (n = refractive index)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "apparent-depth"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-apparent-depth-48",
    "text": "A coin at 12 cm depth in water (n = 4/3) appears at:",
    "options": [
      "9 cm",
      "16 cm",
      "12 cm",
      "6 cm"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Apparent depth = real depth/n = 12/(4/3) = 12×3/4 = 9 cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "apparent-depth"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-apparent-depth-49",
    "text": "Swimming pool appears shallower because:",
    "options": [
      "Refraction at water-air interface",
      "Reflection",
      "Absorption",
      "Dispersion"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Light from pool bottom bends away from normal when leaving water, making pool appear shallower",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "apparent-depth"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-apparent-depth-50",
    "text": "If n = 1.5, ratio of real to apparent depth is:",
    "options": [
      "1.5:1",
      "1:1.5",
      "2:1",
      "1:2"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Real/Apparent = d/(d/n) = n = 1.5. So 1.5:1",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "apparent-depth"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-apparent-depth-51",
    "text": "A mark on table viewed through 3 cm thick glass (n=1.5) appears raised by:",
    "options": [
      "1 cm",
      "2 cm",
      "0.5 cm",
      "3 cm"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Apparent depth = 3/1.5 = 2 cm. Shift = 3-2 = 1 cm (appears 1 cm closer)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "apparent-depth"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-prism-deviation-52",
    "text": "Angle of deviation through a prism depends on:",
    "options": [
      "Angle of incidence, prism angle, refractive index",
      "Only prism angle",
      "Only refractive index",
      "Only incidence angle"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "δ depends on: i (incidence), A (prism angle), n (refractive index)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-prism-deviation-53",
    "text": "At minimum deviation, ray inside prism is:",
    "options": [
      "Parallel to base",
      "Perpendicular to base",
      "At 45°",
      "Total internal reflection"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "At δ_min: ray travels parallel to base, r₁ = r₂ = A/2, i = e",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-prism-deviation-54",
    "text": "Formula for minimum deviation is:",
    "options": [
      "n = sin((A+δ_m)/2) / sin(A/2)",
      "n = δ_m/A",
      "δ_m = (n-1)A",
      "n = A/δ_m"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "At minimum deviation: n = sin((A+δ_m)/2) / sin(A/2)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-prism-deviation-55",
    "text": "For small angle prism, deviation δ ≈:",
    "options": [
      "(n-1)A",
      "nA",
      "A/n",
      "(n+1)A"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Small angle approximation: δ ≈ (n-1)A (valid when A < 10°)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-prism-deviation-56",
    "text": "A prism of angle 60° has δ_min = 30°. Refractive index is:",
    "options": [
      "1.41",
      "1.5",
      "1.33",
      "1.73"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "n = sin(45°)/sin(30°) = (√2/2)/(1/2) = √2 ≈ 1.41",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-prism-deviation-57",
    "text": "In which color is deviation maximum through prism?",
    "options": [
      "Violet",
      "Red",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Violet has highest n (shortest λ) → maximum deviation. Red has minimum deviation",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-dispersive-power-58",
    "text": "Dispersive power of prism is defined as:",
    "options": [
      "ω = (n_V - n_R)/(n_Y - 1)",
      "ω = n_V - n_R",
      "ω = δ_V - δ_R",
      "ω = (n_V + n_R)/2"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "ω = (δ_V - δ_R)/δ_Y = (n_V - n_R)/(n_Y - 1) where V, R, Y are violet, red, yellow",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "dispersive-power"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-dispersive-power-59",
    "text": "Angular dispersion is:",
    "options": [
      "δ_V - δ_R",
      "δ_V + δ_R",
      "δ_V/δ_R",
      "(δ_V - δ_R)/δ_Y"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Angular dispersion = deviation difference = δ_violet - δ_red",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "dispersive-power"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-dispersive-power-60",
    "text": "Crown glass has lower dispersive power than flint glass. This means:",
    "options": [
      "Crown spreads colors less",
      "Crown spreads more",
      "Same dispersion",
      "No relation"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Lower ω → less separation of colors → lower chromatic aberration",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "dispersive-power"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-dispersive-power-61",
    "text": "For glass: n_V = 1.52, n_R = 1.50, n_Y = 1.51. Dispersive power is:",
    "options": [
      "0.04",
      "0.02",
      "0.51",
      "0.01"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "ω = (1.52-1.50)/(1.51-1) = 0.02/0.51 ≈ 0.04",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "dispersive-power"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-dispersive-power-62",
    "text": "Condition for dispersion without deviation (achromatic combination):",
    "options": [
      "ω₁A₁ = -ω₂A₂ and δ₁ + δ₂ = 0",
      "ω₁ = ω₂",
      "A₁ = A₂",
      "n₁ = n₂"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "For no deviation: δ₁+δ₂=0. For equal dispersion: ω₁δ₁+ω₂δ₂=0. Gives ω₁A₁=-ω₂A₂",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "dispersive-power"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-simple-microscope-63",
    "text": "Magnifying power of simple microscope is:",
    "options": [
      "M = D/f (at least distance of distinct vision)",
      "M = f/D",
      "M = D + f",
      "M = f - D"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = D/f where D = 25 cm (near point), f = focal length. Image at D for comfortable viewing",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-simple-microscope-64",
    "text": "For relaxed eye (image at infinity), magnification is:",
    "options": [
      "M = D/f",
      "M = (D/f) + 1",
      "M = (D/f) - 1",
      "M = 2D/f"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "When image at ∞ (relaxed): M = D/f. When image at D (strained): M = (D/f) + 1",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-simple-microscope-65",
    "text": "A magnifying glass of focal length 5 cm produces magnification:",
    "options": [
      "5",
      "6",
      "4",
      "25"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = D/f = 25/5 = 5 (for image at D = 25 cm)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-simple-microscope-66",
    "text": "To increase magnification of simple microscope, we should:",
    "options": [
      "Decrease focal length",
      "Increase focal length",
      "Change object distance",
      "Use blue light"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = D/f. To increase M, decrease f (use more curved lens)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-simple-microscope-67",
    "text": "Maximum possible magnification with simple microscope is about:",
    "options": [
      "5-10×",
      "50-100×",
      "1000×",
      "2-3×"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Practical limit ~5-10× due to aberrations. For higher magnification, need compound microscope",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-compound-microscope-68",
    "text": "Magnifying power of compound microscope is:",
    "options": [
      "M = m_o × M_e = (v_o/u_o)(D/f_e)",
      "M = f_o/f_e",
      "M = D/(f_o + f_e)",
      "M = v_o/u_o"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "M = magnification by objective × magnification by eyepiece = m_o × M_e",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-compound-microscope-69",
    "text": "In compound microscope, objective lens produces image that is:",
    "options": [
      "Real, inverted, magnified",
      "Virtual, erect",
      "Real, diminished",
      "At infinity"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Objective: object between F and 2F → real, inverted, magnified image beyond 2F",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-compound-microscope-70",
    "text": "Final image in compound microscope is:",
    "options": [
      "Virtual, inverted, highly magnified",
      "Real, erect",
      "Virtual, erect",
      "Real, inverted"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Eyepiece forms virtual, magnified image of objective's real image. Net: virtual, inverted",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-compound-microscope-71",
    "text": "For normal adjustment (image at infinity), length of microscope tube is:",
    "options": [
      "L = v_o + f_e",
      "L = u_o + f_e",
      "L = f_o + f_e",
      "L = v_o + u_o"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Tube length L = v_o + f_e (real image from objective at eyepiece focus)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-compound-microscope-72",
    "text": "If f_o = 1 cm, f_e = 5 cm, v_o = 20 cm, magnification for relaxed eye is:",
    "options": [
      "100",
      "20",
      "25",
      "500"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "M = (v_o/u_o)(D/f_e). First find u_o: 1/1 = 1/20 - 1/u_o, u_o = -20/19. M ≈ (20/(20/19))(25/5) = 19×5 ≈ 100",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-compound-microscope-73",
    "text": "To increase magnification of compound microscope:",
    "options": [
      "Decrease both f_o and f_e",
      "Increase both",
      "Decrease f_o, increase f_e",
      "Increase tube length only"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "M ∝ 1/(f_o×f_e). Decrease both focal lengths to increase M",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-telescope-astronomical-74",
    "text": "Magnifying power of telescope in normal adjustment is:",
    "options": [
      "M = f_o/f_e",
      "M = f_e/f_o",
      "M = f_o + f_e",
      "M = f_o - f_e"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = f_o/f_e where f_o = objective focal length, f_e = eyepiece focal length",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-telescope-astronomical-75",
    "text": "Length of telescope in normal adjustment is:",
    "options": [
      "L = f_o + f_e",
      "L = f_o - f_e",
      "L = f_o × f_e",
      "L = f_o/f_e"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "For image at infinity: L = f_o + f_e (objective image at its focus, eyepiece uses it)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-telescope-astronomical-76",
    "text": "Final image in astronomical telescope is:",
    "options": [
      "Virtual, inverted",
      "Real, erect",
      "Virtual, erect",
      "Real, inverted"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Virtual image at infinity, inverted (both objective and eyepiece cause inversion)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-telescope-astronomical-77",
    "text": "A telescope has f_o = 100 cm and f_e = 5 cm. Magnifying power is:",
    "options": [
      "20",
      "5",
      "100",
      "500"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = f_o/f_e = 100/5 = 20",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-telescope-astronomical-78",
    "text": "To increase magnification of telescope:",
    "options": [
      "Increase f_o or decrease f_e",
      "Decrease f_o",
      "Increase f_e",
      "Decrease both"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = f_o/f_e. Increase numerator (larger objective) or decrease denominator (smaller eyepiece)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-telescope-astronomical-79",
    "text": "Objective of telescope should have:",
    "options": [
      "Large focal length and large aperture",
      "Small f, small aperture",
      "Small f, large aperture",
      "Large f, small aperture"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Large f → high magnification. Large aperture → more light gathering, better resolution",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "telescope-astronomical"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-radius-focal-relation-01",
    "text": "For spherical mirror, focal length f and radius R relation:",
    "options": [
      "f=R/2",
      "f=R",
      "f=2R",
      "f=R²"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "f=R/2 for both concave and convex mirrors",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-radius-focal-relation-02",
    "text": "Concave mirror has R=20cm. Focal length?",
    "options": [
      "10cm",
      "20cm",
      "5cm",
      "40cm"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "f=R/2=20/2=10cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-radius-focal-relation-03",
    "text": "If radius of curvature doubles, focal length:",
    "options": [
      "Doubles",
      "Remains same",
      "Halves",
      "Quadruples"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "f∝R. If R→2R, then f→2f",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-radius-focal-relation-04",
    "text": "Convex mirror R=30cm. Focal length with sign:",
    "options": [
      "+15cm",
      "-15cm",
      "+30cm",
      "-30cm"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Convex mirror: f=+R/2=+15cm (positive)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-radius-focal-relation-05",
    "text": "Center of curvature C is at distance ___ from pole:",
    "options": [
      "R=2f",
      "R=f",
      "R=f/2",
      "R=4f"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "R=2f (C is twice focal length from pole)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2022",
      "recall"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-radius-focal-relation-06",
    "text": "Plane mirror has R=",
    "options": [
      "∞",
      "0",
      "1",
      "R²"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "Plane mirror: R→∞, so f=R/2→∞",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-spherical-mirror",
    "formulas": [
      "radius-focal-relation"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-snells-law-07",
    "text": "Snell's law states:",
    "options": [
      "n₁sinθ₁=n₂sinθ₂",
      "n₁/n₂=sinθ₁/sinθ₂",
      "n₁tanθ₁=n₂tanθ₂",
      "n₁cosθ₁=n₂cosθ₂"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "n₁sinθ₁=n₂sinθ₂ (constant ratio)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-snells-law-08",
    "text": "Light from air (n=1) to glass (n=1.5) at 30°. Refraction angle?",
    "options": [
      "19.5°",
      "30°",
      "45°",
      "60°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1×sin30°=1.5×sinθ₂, sinθ₂=0.5/1.5=0.33, θ₂≈19.5°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-snells-law-09",
    "text": "Ray from denser to rarer medium:",
    "options": [
      "Bends away from normal",
      "Bends towards normal",
      "No bending",
      "Total reflection"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Denser→rarer: speed increases, bends away from normal",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-snells-law-10",
    "text": "For normal incidence (θ₁=0), refracted angle:",
    "options": [
      "0°",
      "45°",
      "90°",
      "Depends on n"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "sin0°=0. θ₂=0 (no bending at normal incidence)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-snells-law-11",
    "text": "If n₁=n₂, refracted ray:",
    "options": [
      "Goes straight (no bending)",
      "Bends 45°",
      "Total reflection",
      "Stops"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Same medium (n₁=n₂): θ₁=θ₂, no refraction",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-snells-law-12",
    "text": "Grazing incidence (θ₁=90°) from air to water (n=4/3):",
    "options": [
      "θ₂=48.6°",
      "θ₂=90°",
      "θ₂=0°",
      "θ₂=30°"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "sin90°=(4/3)sinθ₂, sinθ₂=3/4=0.75, θ₂≈48.6°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "snells-law"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-critical-angle-13",
    "text": "Critical angle is angle of incidence in denser medium for:",
    "options": [
      "θ_r=90° in rarer",
      "θ_r=0°",
      "θ_i=90°",
      "θ_i=0°"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "At critical angle θ_c: refracted ray grazes interface (90°)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-critical-angle-14",
    "text": "Critical angle formula: sinθ_c=",
    "options": [
      "n₂/n₁",
      "n₁/n₂",
      "n₁sinθ₁",
      "√(n₁/n₂)"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "sinθ_c=n_rarer/n_denser (for n₁>n₂)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-critical-angle-15",
    "text": "Glass (n=1.5) to air (n=1). Critical angle?",
    "options": [
      "41.8°",
      "48.6°",
      "60°",
      "30°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "sinθ_c=1/1.5=0.667, θ_c=41.8°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-critical-angle-16",
    "text": "Water (n=4/3) to air. Critical angle?",
    "options": [
      "48.6°",
      "41.8°",
      "90°",
      "60°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "sinθ_c=1/(4/3)=3/4, θ_c≈48.6°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-critical-angle-17",
    "text": "For total internal reflection, angle must be:",
    "options": [
      ">θ_c",
      "<θ_c",
      "=θ_c",
      "Any angle"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "TIR occurs when θ_i>θ_c (beyond critical)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-critical-angle-18",
    "text": "If refractive index increases, critical angle:",
    "options": [
      "Decreases",
      "Increases",
      "Same",
      "Becomes 90°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "θ_c∝1/n. Higher n→smaller θ_c",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "critical-angle"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-thin-lens-formula-19",
    "text": "Thin lens formula is:",
    "options": [
      "1/f=1/v-1/u",
      "1/f=1/v+1/u",
      "f=v+u",
      "f=v-u"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "1/f=1/v-1/u (sign convention matters)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-thin-lens-formula-20",
    "text": "Convex lens f=10cm, object at u=-20cm. Image distance?",
    "options": [
      "v=+20cm",
      "v=-20cm",
      "v=+10cm",
      "v=+40cm"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1/10=1/v-1/(-20), 1/10=1/v+1/20, v=20cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-thin-lens-formula-21",
    "text": "Object at 2f from convex lens. Image forms at:",
    "options": [
      "2f (real, inverted, same size)",
      "f",
      "∞",
      "f/2"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "u=-2f: 1/f=1/v+1/2f, v=+2f (real, inverted, m=-1)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-thin-lens-formula-22",
    "text": "For real and inverted image, lens must be:",
    "options": [
      "Convex",
      "Concave",
      "Any",
      "Plane"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Only convex lens can form real images",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-thin-lens-formula-23",
    "text": "Object at f/2 from convex lens. Image:",
    "options": [
      "Virtual, magnified",
      "Real, inverted",
      "At infinity",
      "At 2f"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "u=-f/2: 1/f=1/v+2/f, v=-f (virtual, magnified)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-thin-lens-formula-24",
    "text": "Concave lens f=-10cm, object at -30cm. Image?",
    "options": [
      "v=-7.5cm (virtual)",
      "v=+7.5cm",
      "v=-15cm",
      "v=+15cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "1/(-10)=1/v-1/(-30), 1/v=-1/10+1/30=-1/15, v=-7.5cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "thin-lens-formula"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-lens-magnification-25",
    "text": "Magnification m=",
    "options": [
      "v/u",
      "u/v",
      "f/u",
      "v/f"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "m=v/u (height ratio also h'/h)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-lens-magnification-26",
    "text": "Image at v=+40cm, object at u=-10cm. Magnification?",
    "options": [
      "-4",
      "+4",
      "-0.25",
      "+0.25"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "m=v/u=40/(-10)=-4 (inverted, 4× size)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-lens-magnification-27",
    "text": "Magnification m=-1 means:",
    "options": [
      "Same size, inverted",
      "Same size, erect",
      "Double size",
      "Half size"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "m=-1: |m|=1 (same size), negative (inverted)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-lens-magnification-28",
    "text": "Virtual image has magnification:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinite"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Virtual images: m>0 (erect, positive)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-lens-magnification-29",
    "text": "Object 5cm tall, image 15cm tall and inverted. m=",
    "options": [
      "-3",
      "+3",
      "-1/3",
      "+1/3"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "m=h'/h=-15/5=-3 (inverted, 3× magnified)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-lens-magnification-30",
    "text": "For m=+2, image is:",
    "options": [
      "Virtual, erect, magnified",
      "Real, inverted",
      "Virtual, diminished",
      "Real, erect"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "m=+2: positive (erect/virtual), |m|>1 (magnified)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-magnification"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-compound-microscope-magnification-31",
    "text": "Compound microscope magnification M=",
    "options": [
      "m_o×m_e",
      "m_o+m_e",
      "m_o/m_e",
      "m_o-m_e"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Total magnification = product of objective and eyepiece magnifications",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-compound-microscope-magnification-32",
    "text": "Objective magnifies 40×, eyepiece 10×. Total magnification?",
    "options": [
      "400×",
      "50×",
      "4×",
      "30×"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M=40×10=400×",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-compound-microscope-magnification-33",
    "text": "For higher magnification in microscope:",
    "options": [
      "Increase both m_o and m_e",
      "Increase m_o only",
      "Increase m_e only",
      "Decrease f_o"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "M=m_o×m_e. Increase both for maximum M",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-compound-microscope-magnification-34",
    "text": "Magnification formula M=",
    "options": [
      "(v_o/u_o)(D/f_e)",
      "v_o/u_o",
      "D/f_e",
      "v_o×u_o"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "M=(v_o/u_o)×(D/f_e) where D=25cm (near point)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-compound-microscope-magnification-35",
    "text": "To see smaller details, we need:",
    "options": [
      "Higher magnification",
      "Lower magnification",
      "Same magnification",
      "No magnification"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Higher M allows seeing finer details",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-compound-microscope-magnification-36",
    "text": "If m_o=50 and M=500, then m_e=",
    "options": [
      "10",
      "500",
      "50",
      "25"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "M=m_o×m_e, 500=50×m_e, m_e=10",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "compound-microscope-magnification"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-law-of-reflection-01",
    "text": "Law of reflection states that angle of incidence:",
    "options": [
      "Equals angle of reflection",
      "Is half of reflection angle",
      "Is double reflection angle",
      "Is 90° to reflection"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "∠i = ∠r (measured from normal)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-law-of-reflection-02",
    "text": "Light ray hits mirror at 30° to normal. Reflection angle?",
    "options": [
      "30°",
      "60°",
      "90°",
      "15°"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "∠r = ∠i = 30°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-law-of-reflection-03",
    "text": "Incident and reflected rays are on:",
    "options": [
      "Opposite sides of normal",
      "Same side",
      "Parallel",
      "Perpendicular"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Rays lie in plane containing incident ray and normal, opposite sides",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-law-of-reflection-04",
    "text": "Glancing angle is 20°. Angle of incidence?",
    "options": [
      "70°",
      "20°",
      "90°",
      "10°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Glancing angle = 90°-i. So i=90-20=70°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-law-of-reflection-05",
    "text": "If mirror rotates by θ, reflected ray rotates by:",
    "options": [
      "2θ",
      "θ",
      "θ/2",
      "4θ"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "Mirror rotation θ → reflected ray rotates 2θ",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2022",
      "recall"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-law-of-reflection-06",
    "text": "Law of reflection applies to:",
    "options": [
      "All surfaces",
      "Only plane mirrors",
      "Only curved mirrors",
      "Only smooth surfaces"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Universal law: applies to all reflecting surfaces",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "law-of-reflection"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-plane-mirror-image-07",
    "text": "Image distance behind plane mirror equals:",
    "options": [
      "Object distance",
      "Twice object distance",
      "Half object distance",
      "Independent of object"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "v = -u (same distance behind mirror)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-plane-mirror-image-08",
    "text": "Object 5cm from plane mirror. Image distance?",
    "options": [
      "5cm behind",
      "10cm behind",
      "2.5cm behind",
      "5cm in front"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Image at same distance behind: 5cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-plane-mirror-image-09",
    "text": "Plane mirror image is:",
    "options": [
      "Virtual, erect, same size",
      "Real, inverted",
      "Virtual, magnified",
      "Real, erect"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Plane mirror: always virtual, erect, |m|=1",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-plane-mirror-image-10",
    "text": "Magnification of plane mirror is:",
    "options": [
      "1",
      "-1",
      "2",
      "0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "m = +1 (same size, erect)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-plane-mirror-image-11",
    "text": "Object moves 3cm toward mirror. Image moves:",
    "options": [
      "3cm toward object",
      "3cm away from object",
      "6cm toward object",
      "Doesn't move"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Image moves same distance in opposite direction",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-plane-mirror-image-12",
    "text": "Man 1.8m tall needs minimum mirror height to see full image:",
    "options": [
      "0.9m",
      "1.8m",
      "0.45m",
      "3.6m"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "Minimum mirror height = h/2 = 1.8/2 = 0.9m",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "plane-mirror-image"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-multiple-mirrors-13",
    "text": "Two plane mirrors at angle θ. Number of images n =",
    "options": [
      "(360/θ)-1 if 360/θ is even",
      "360/θ",
      "θ/360",
      "360-θ"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n = (360/θ)-1 when 360/θ is integer",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-multiple-mirrors-14",
    "text": "Two mirrors at 90°. Number of images formed?",
    "options": [
      "3",
      "2",
      "4",
      "Infinite"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n = 360/90 - 1 = 4-1 = 3 images",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-multiple-mirrors-15",
    "text": "Two parallel mirrors. Number of images?",
    "options": [
      "Infinite",
      "2",
      "1",
      "0"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "θ=0°: infinite images (multiple reflections)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-multiple-mirrors-16",
    "text": "Mirrors at 60°. Number of images?",
    "options": [
      "5",
      "6",
      "3",
      "4"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n = 360/60 - 1 = 6-1 = 5 images",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-multiple-mirrors-17",
    "text": "For maximum images (infinite), angle should be:",
    "options": [
      "0° (parallel)",
      "90°",
      "180°",
      "45°"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Parallel mirrors (θ=0) give infinite images",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-multiple-mirrors-18",
    "text": "Mirrors at 120°. Images formed?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "n = 360/120 - 1 = 3-1 = 2 images",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "reflection-plane-mirror",
    "formulas": [
      "multiple-mirrors"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-lateral-shift-19",
    "text": "Lateral shift in glass slab depends on:",
    "options": [
      "Thickness, angle, refractive index",
      "Only thickness",
      "Only angle",
      "Only refractive index"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "d = t×sin(i-r)/cos(r) depends on t, i, n",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2018",
      "conceptual"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-lateral-shift-20",
    "text": "For normal incidence (i=0), lateral shift is:",
    "options": [
      "Zero",
      "Maximum",
      "Equal to thickness",
      "Cannot determine"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "i=0 → r=0 → no bending → no lateral shift",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-lateral-shift-21",
    "text": "Lateral shift increases with:",
    "options": [
      "Angle of incidence",
      "Wavelength",
      "Speed of light",
      "Frequency"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "d ∝ sin(i-r). Larger i → larger shift",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-lateral-shift-22",
    "text": "Glass slab (t=3cm, n=1.5) at i=60°. Approximate shift:",
    "options": [
      "~1.7cm",
      "3cm",
      "6cm",
      "0cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "Using formula with sin60°≈0.866, r≈35°, d≈1.7cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-lateral-shift-23",
    "text": "Thicker slab produces:",
    "options": [
      "Larger lateral shift",
      "Smaller shift",
      "No effect",
      "Zero shift"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "d ∝ t. Thicker slab → larger shift",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-lateral-shift-24",
    "text": "Emergent ray is ___ incident ray:",
    "options": [
      "Parallel to",
      "Perpendicular to",
      "Converging toward",
      "Diverging from"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Parallel faces: emergent || incident (laterally displaced)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "refraction-plane-surface",
    "formulas": [
      "lateral-shift"
    ],
    "tags": [
      "neet-2023",
      "recall"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-tir-condition-25",
    "text": "Two conditions for TIR: (1) denser to rarer, (2):",
    "options": [
      "i > critical angle",
      "i < critical angle",
      "i = 0°",
      "Any angle"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "TIR needs: (1) n₁>n₂ (2) i>θc",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-tir-condition-26",
    "text": "TIR occurs when light goes from:",
    "options": [
      "Glass to air",
      "Air to glass",
      "Air to water",
      "Glass to water"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "TIR: denser→rarer (e.g., glass to air)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-tir-condition-27",
    "text": "For TIR at glass-air interface (n=1.5), minimum angle?",
    "options": [
      ">41.8°",
      ">90°",
      "<41.8°",
      "Any angle"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "θc=sin⁻¹(1/1.5)=41.8°. Need i>41.8°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-tir-condition-28",
    "text": "At i=θc (critical angle), refracted ray:",
    "options": [
      "Grazes interface (r=90°)",
      "Goes straight",
      "Is absorbed",
      "Reflects back"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "At critical angle: r=90° (grazing emergence)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-tir-condition-29",
    "text": "TIR cannot occur when:",
    "options": [
      "Going from rarer to denser",
      "Going from denser to rarer",
      "i>θc",
      "Light speed decreases"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "TIR impossible for rarer→denser (ray bends toward normal)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-tir-condition-30",
    "text": "Diamond (n=2.4) to air. Critical angle?",
    "options": [
      "~24.6°",
      "~41.8°",
      "~48.6°",
      "~60°"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "θc=sin⁻¹(1/2.4)=sin⁻¹(0.417)≈24.6°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "total-internal-reflection",
    "formulas": [
      "tir-condition"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-lens-maker-31",
    "text": "Lens maker's formula: 1/f =",
    "options": [
      "(n-1)(1/R₁-1/R₂)",
      "(n+1)(1/R₁+1/R₂)",
      "n(1/R₁-1/R₂)",
      "(1/R₁-1/R₂)"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "1/f = (μ-1)(1/R₁-1/R₂) where μ is refractive index",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-lens-maker-32",
    "text": "Convex lens (R₁=20cm, R₂=-30cm, n=1.5). Focal length?",
    "options": [
      "24cm",
      "12cm",
      "48cm",
      "6cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "1/f=0.5(1/20-1/(-30))=0.5(1/20+1/30)=0.5×5/60, f=24cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-lens-maker-33",
    "text": "If lens medium equals surrounding medium (n_lens=n_medium):",
    "options": [
      "f→∞ (no power)",
      "f=0",
      "f doubles",
      "f halves"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "(n-1)→0, so 1/f→0, f→∞ (lens loses power)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-lens-maker-34",
    "text": "Double convex lens (R₁=R₂=R). Focal length:",
    "options": [
      "R/(n-1)",
      "R(n-1)",
      "R/n",
      "R"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1/f=(n-1)(1/R-1/(-R))=(n-1)×2/R, f=R/[2(n-1)]",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-lens-maker-35",
    "text": "Lens maker equation is independent of:",
    "options": [
      "Object distance",
      "Refractive index",
      "Radius of curvature",
      "Wavelength"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Lens parameters only: n, R₁, R₂. Not object dependent",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-lens-maker-36",
    "text": "If n increases, focal length:",
    "options": [
      "Decreases",
      "Increases",
      "Remains same",
      "Becomes negative"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "f ∝ 1/(n-1). Higher n → smaller f",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "lens-formula",
    "formulas": [
      "lens-maker"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-achromatic-combination-37",
    "text": "Achromatic doublet condition: ω₁/f₁ + ω₂/f₂ =",
    "options": [
      "0",
      "1",
      "ω₁+ω₂",
      "f₁+f₂"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "For zero chromatic aberration: ω₁/f₁ + ω₂/f₂ = 0",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-achromatic-combination-38",
    "text": "Achromatic combination aims to eliminate:",
    "options": [
      "Chromatic aberration",
      "Spherical aberration",
      "Distortion",
      "Coma"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Achromatic: removes color dispersion defect",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2019",
      "conceptual"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-achromatic-combination-39",
    "text": "Achromatic doublet typically uses:",
    "options": [
      "Convex and concave lenses",
      "Two convex lenses",
      "Two concave lenses",
      "Plane mirrors"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Combines lenses of opposite powers (+ and -)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2020",
      "conceptual"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-achromatic-combination-40",
    "text": "Crown glass lens (ω₁=0.03, f₁=20cm) with flint lens (ω₂=0.05). f₂ for achromatic:",
    "options": [
      "-33.3cm",
      "+33.3cm",
      "-20cm",
      "+20cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "0.03/20 + 0.05/f₂ = 0, f₂=-0.05×20/0.03=-33.3cm",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2021",
      "numerical"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-achromatic-combination-41",
    "text": "Dispersive power ω represents:",
    "options": [
      "Variation of n with λ",
      "Average refractive index",
      "Focal length",
      "Magnification"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "ω = (n_v-n_r)/(n_y-1) measures dispersion",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-achromatic-combination-42",
    "text": "For achromatic combination, net focal length:",
    "options": [
      "Finite (non-zero)",
      "Zero",
      "Infinite",
      "Negative"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "1/F=1/f₁+1/f₂≠0 (not zero power, just achromatic)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "achromatic-combination"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-prism-deviation-43",
    "text": "Angle of deviation δ = i + e - A where A is:",
    "options": [
      "Prism angle",
      "Angle of incidence",
      "Angle of emergence",
      "Refracting angle"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "δ = i + e - A (A is apex angle of prism)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-prism-deviation-44",
    "text": "For minimum deviation: i =",
    "options": [
      "e",
      "A/2",
      "δ",
      "90°-A"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "At minimum deviation δ_m: i=e (symmetric path)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2019",
      "recall"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-prism-deviation-45",
    "text": "Prism A=60°, i=50°, e=40°. Deviation δ =",
    "options": [
      "30°",
      "60°",
      "90°",
      "150°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "δ=i+e-A=50+40-60=30°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2020",
      "numerical"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-prism-deviation-46",
    "text": "At minimum deviation, ray inside prism is:",
    "options": [
      "Parallel to base",
      "Perpendicular to base",
      "Along one face",
      "Random"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "At δ_m: ray inside || base, r₁=r₂",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-prism-deviation-47",
    "text": "As angle of incidence increases from grazing, deviation:",
    "options": [
      "First decreases then increases",
      "Continuously increases",
      "Continuously decreases",
      "Remains constant"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "δ vs i curve: U-shaped, minimum at specific i",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-prism-deviation-48",
    "text": "Prism in minimum deviation: A=60°, δ_m=30°. Then i=",
    "options": [
      "45°",
      "30°",
      "60°",
      "90°"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "At min dev: i=(A+δ_m)/2=(60+30)/2=45°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "prism-deviation"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-minimum-deviation-49",
    "text": "At minimum deviation: n =",
    "options": [
      "sin[(A+δ_m)/2]/sin(A/2)",
      "sin(A)/sin(δ_m)",
      "(A+δ_m)/A",
      "A/δ_m"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "n = sin[(A+δ_m)/2] / sin(A/2)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-minimum-deviation-50",
    "text": "Prism A=60°, δ_m=30°. Refractive index?",
    "options": [
      "1.5",
      "1.33",
      "2.0",
      "1.41"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "n=sin(45°)/sin(30°)=0.707/0.5=1.414≈1.5 (approx)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-minimum-deviation-51",
    "text": "Condition for minimum deviation: r₁ + r₂ =",
    "options": [
      "A",
      "δ_m",
      "A/2",
      "i+e"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "r₁+r₂=A (always true). At min: r₁=r₂=A/2",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-minimum-deviation-52",
    "text": "For small angle prism, δ_m ≈",
    "options": [
      "(n-1)A",
      "nA",
      "A/n",
      "A"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Thin prism: δ≈(n-1)A",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2021",
      "recall"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-minimum-deviation-53",
    "text": "Prism A=10°, n=1.5. Minimum deviation?",
    "options": [
      "5°",
      "10°",
      "15°",
      "7.5°"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Small angle: δ_m≈(n-1)A=(1.5-1)×10=5°",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2022",
      "numerical"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-minimum-deviation-54",
    "text": "If n increases, minimum deviation:",
    "options": [
      "Increases",
      "Decreases",
      "Remains same",
      "Becomes zero"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "δ_m ∝ (n-1). Higher n → larger δ_m",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "dispersion-light",
    "formulas": [
      "minimum-deviation"
    ],
    "tags": [
      "neet-2023",
      "conceptual"
    ],
    "year": 2023
  },
  {
    "id": "ray-optics-simple-microscope-55",
    "text": "Simple microscope magnification M =",
    "options": [
      "D/f",
      "f/D",
      "D×f",
      "D-f"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M = D/f where D=25cm (near point)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2018",
      "recall"
    ],
    "year": 2018
  },
  {
    "id": "ray-optics-simple-microscope-56",
    "text": "Convex lens f=5cm used as simple microscope. Magnification?",
    "options": [
      "5",
      "25",
      "125",
      "0.2"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M=25/5=5 (angular magnification)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2019",
      "numerical"
    ],
    "year": 2019
  },
  {
    "id": "ray-optics-simple-microscope-57",
    "text": "Near point D is taken as:",
    "options": [
      "25cm",
      "25m",
      "Infinity",
      "1m"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "Standard near point D=25cm for normal eye",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2020",
      "recall"
    ],
    "year": 2020
  },
  {
    "id": "ray-optics-simple-microscope-58",
    "text": "For higher magnification in simple microscope:",
    "options": [
      "Use smaller focal length",
      "Use larger focal length",
      "Increase D",
      "Decrease D"
    ],
    "correct": 0,
    "difficulty": "easy",
    "explanation": "M=D/f. Smaller f → larger M",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2021",
      "conceptual"
    ],
    "year": 2021
  },
  {
    "id": "ray-optics-simple-microscope-59",
    "text": "Maximum magnification of simple microscope is about:",
    "options": [
      "5-10×",
      "50-100×",
      "500×",
      "1000×"
    ],
    "correct": 0,
    "difficulty": "medium",
    "explanation": "Practical limit ~10× (f cannot be too small)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2022",
      "conceptual"
    ],
    "year": 2022
  },
  {
    "id": "ray-optics-simple-microscope-60",
    "text": "Lens f=10cm. For M=5, object should be at:",
    "options": [
      "u=-5cm",
      "u=-10cm",
      "u=-25cm",
      "u=-2.5cm"
    ],
    "correct": 0,
    "difficulty": "hard",
    "explanation": "For final image at D: M=(D/u)+1=5, gives u≈-6.25cm (or use M=D/f=2.5)",
    "subject": "physics",
    "chapter": "ray-optics",
    "topic": "optical-instruments",
    "formulas": [
      "simple-microscope"
    ],
    "tags": [
      "neet-2023",
      "numerical"
    ],
    "year": 2023
  }
];
