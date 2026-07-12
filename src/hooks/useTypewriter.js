import { useEffect, useRef, useState } from 'react';

/**
 * Types out `lines` sequentially. Each line: { text, prefix?, delayAfter? }.
 * Returns { rendered, done } where rendered[i] is the visible portion of line i.
 * Respects prefers-reduced-motion by rendering everything immediately.
 */
export function useTypewriter(lines, { charDelay = 35, lineDelay = 350 } = {}) {
  const [state, setState] = useState({ line: 0, chars: 0 });
  const timer = useRef(null);
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) return;
    const { line, chars } = state;
    if (line >= lines.length) return;
    const current = lines[line].text;
    if (chars < current.length) {
      timer.current = setTimeout(
        () => setState({ line, chars: chars + 1 }),
        charDelay
      );
    } else {
      timer.current = setTimeout(
        () => setState({ line: line + 1, chars: 0 }),
        lines[line].delayAfter ?? lineDelay
      );
    }
    return () => clearTimeout(timer.current);
  }, [state, lines, charDelay, lineDelay, reduced]);

  if (reduced) {
    return { rendered: lines.map((l) => l.text), done: true, activeLine: -1 };
  }

  const rendered = lines.map((l, i) => {
    if (i < state.line) return l.text;
    if (i === state.line) return l.text.slice(0, state.chars);
    return null;
  });

  return {
    rendered,
    done: state.line >= lines.length,
    activeLine: Math.min(state.line, lines.length - 1),
  };
}
