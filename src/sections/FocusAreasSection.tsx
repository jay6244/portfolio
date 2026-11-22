import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { focusAreas } from '../data/content';

export default function FocusAreasSection() {
  return (
    <section
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(12,12,12,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <FadeIn delay={0} className="relative">
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Focus Areas
        </h2>
      </FadeIn>

      <div className="relative max-w-5xl mx-auto">
        {focusAreas.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            <div
              className="group flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12 px-4 -mx-4 rounded-3xl transition-colors duration-300 hover:bg-black/[0.03]"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none flex-shrink-0 transition-colors duration-300 text-[#0C0C0C] group-hover:text-[#B600A8]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <ArrowUpRight
                    className="text-[#B600A8] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0"
                    size={22}
                  />
                </div>
                <p
                  className="prose-serif leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.65 }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
