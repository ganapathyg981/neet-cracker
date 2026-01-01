import Formula from './Formula';

/**
 * Component to render text with inline LaTeX formulas
 * Handles both pure math expressions and mixed text with LaTeX
 */
export default function FormulaText({ text, className = '' }) {
  if (!text) return null;

  // Find LaTeX commands and wrap them in $...$ for rendering
  const parts = [];
  let lastIndex = 0;

  // Pattern to match LaTeX commands like \frac{...}{...}, \lambda, \pi, etc.
  const latexPattern = /\\(?:frac|sqrt|times|div|approx|leq|geq|neq|infty|pi|theta|Delta|mu|varepsilon|sigma|rho|lambda|omega|alpha|beta|gamma|tau|phi|lambdaC|piR)(?:\{[^}]*\})*|\\[a-zA-Z]+/g;

  let match;
  let hasLatex = false;

  // Check if there's any LaTeX in the text
  const tempMatches = [];
  while ((match = latexPattern.exec(text)) !== null) {
    hasLatex = true;
    tempMatches.push({ index: match.index, latex: match[0] });
  }

  if (hasLatex) {
    // Text has LaTeX commands - render as plain text for now
    // (the LaTeX is malformed without proper $...$ delimiters)
    return <span className={className}>{text}</span>;
  }

  // No LaTeX commands - check if it's a pure formula (for options)
  const isFormula = text.length < 60 && /^[A-Z]\s*=\s*/.test(text);

  if (isFormula) {
    // Convert plain text formula to LaTeX
    const latex = convertToLatex(text);
    return (
      <span className={className}>
        <Formula math={latex} display={false} />
      </span>
    );
  }

  // Regular text - return as is
  return <span className={className}>{text}</span>;
}

// Convert mathematical notation to LaTeX
function convertToLatex(expr) {
  let latex = expr;

  // Convert sqrt notation
  latex = latex.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  latex = latex.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  // Convert unicode superscripts
  latex = latex.replace(/([a-zA-Z0-9\)])([²³⁴⁵⁶⁷⁸⁹⁰⁺⁻]+)/g, (match, base, superscript) => {
    const superMap = {'²':'2', '³':'3', '⁴':'4', '⁵':'5', '⁶':'6', '⁷':'7', '⁸':'8', '⁹':'9', '⁰':'0', '⁺':'+', '⁻':'-'};
    const converted = superscript.split('').map(c => superMap[c] || c).join('');
    return `${base}^{${converted}}`;
  });

  // Convert subscripts
  latex = latex.replace(/([a-zA-Z])([₀₁₂₃₄₅₆₇₈₉]+)/g, (match, base, subscript) => {
    const subMap = {'₀':'0', '₁':'1', '₂':'2', '₃':'3', '₄':'4', '₅':'5', '₆':'6', '₇':'7', '₈':'8', '₉':'9'};
    const converted = subscript.split('').map(c => subMap[c] || c).join('');
    return `${base}_{${converted}}`;
  });

  // IMPORTANT: Convert fractional exponents like ^(3/2) to ^{\frac{3}{2}} BEFORE other conversions
  latex = latex.replace(/\^(\(?)([0-9]+)\/([0-9]+)(\)?)/g, '^{\\frac{$2}{$3}}');

  // Convert fractions with parenthesized denominator and optional power
  // Match: numerator / (denominator) optionally followed by ^{...}
  latex = latex.replace(/([a-zA-Z0-9^{}_]+)\s*\/\s*(\([^)]+\)(?:\^\{\\frac\{[^}]+\}\{[^}]+\}\})?)/g, (match, num, denom) => {
    return `\\frac{${num}}{${denom}}`;
  });

  // Convert simple fractions
  latex = latex.replace(/([a-zA-Z0-9^{}_]+)\s*\/\s*([a-zA-Z0-9^{}_]+)/g, '\\frac{$1}{$2}');

  // Convert math symbols
  latex = latex.replace(/×/g, '\\times');
  latex = latex.replace(/÷/g, '\\div');
  latex = latex.replace(/≈/g, '\\approx');

  return latex;
}
