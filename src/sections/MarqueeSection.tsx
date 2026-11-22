import { useEffect, useRef, useState } from 'react';
import { skillsMarquee } from '../data/content';

const row1 = skillsMarquee.slice(0, 12);
const row2 = skillsMarquee.slice(12);

function Tile({ label }: { label: string }) {
  return (
    <div className="flex-shrink-0 h-[80px] sm:h-[100px] px-6 sm:px-8 rounded-2xl border border-[#D7E2EA]/20 bg-[#15161a] flex items-center justify-center">
      <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0c0c0c' }}
    >
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled1.map((label, i) => (
          <Tile key={`r1-${i}`} label={label} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled2.map((label, i) => (
          <Tile key={`r2-${i}`} label={label} />
        ))}
      </div>
    </section>
  );
}
