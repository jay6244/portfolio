import type { MouseEvent } from 'react';
import FadeIn from '../components/FadeIn';
import { otherProjects } from '../data/content';

function handleSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
}

export default function AllProjectsSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24" style={{ background: '#0C0C0C' }}>
      <FadeIn delay={0}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-16" style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}>
          More Projects
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {otherProjects.map((project, i) => (
          <FadeIn key={project.id} delay={(i % 3) * 0.08}>
            <div
              onMouseMove={handleSpotlight}
              className="glass-card group relative overflow-hidden h-full rounded-3xl p-6 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="spotlight-glow pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="relative z-10 text-[#D7E2EA]/70 uppercase tracking-widest text-[10px]">
                {project.category}
              </span>
              <h3 className="relative z-10 text-[#D7E2EA] font-semibold text-lg uppercase tracking-wide">
                {project.name}
              </h3>
              <p className="prose-serif relative z-10 text-[#D7E2EA]/75 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="relative z-10 flex flex-wrap gap-2 pt-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[#D7E2EA]/60 text-[10px] uppercase tracking-wide border border-[#D7E2EA]/20 rounded-full px-2.5 py-1 transition-all duration-200 hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
