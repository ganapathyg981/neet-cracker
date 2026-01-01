import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function Formula({ math, display = false, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && math) {
      try {
        katex.render(math, containerRef.current, {
          throwOnError: false,
          displayMode: display,
          output: 'html',
        });
      } catch (e) {
        containerRef.current.textContent = math;
      }
    }
  }, [math, display]);

  return (
    <span
      ref={containerRef}
      className={`formula ${display ? 'formula-display' : 'formula-inline'} ${className}`}
    />
  );
}

export function FormulaBlock({ math, className = '' }) {
  return (
    <div className={`formula-block ${className}`}>
      <Formula math={math} display={true} />
    </div>
  );
}

