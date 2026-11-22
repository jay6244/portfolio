import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface ScrambleTextProps {
  words: string[];
  className?: string;
  holdDuration?: number;
  scrambleDuration?: number;
}

export default function ScrambleText({
  words,
  className = '',
  holdDuration = 2200,
  scrambleDuration = 500,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(words[0] ?? '');
  const indexRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let timeoutId: number;

    function scrambleTo(target: string) {
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / scrambleDuration, 1);
        const revealCount = Math.floor(progress * target.length);
        let next = '';
        for (let i = 0; i < target.length; i++) {
          if (target[i] === ' ') {
            next += ' ';
          } else if (i < revealCount) {
            next += target[i];
          } else {
            next += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(next);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    }

    function cycle() {
      indexRef.current = (indexRef.current + 1) % words.length;
      scrambleTo(words[indexRef.current]);
      timeoutId = window.setTimeout(cycle, holdDuration + scrambleDuration);
    }

    timeoutId = window.setTimeout(cycle, holdDuration + scrambleDuration);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameRef.current);
    };
  }, [words, holdDuration, scrambleDuration]);

  return (
    <span className={className} aria-live="off">
      {display}
    </span>
  );
}
