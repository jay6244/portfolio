import FadeIn from '../components/FadeIn';
import { experience, research } from '../data/content';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0}>
        <h2 className="font-black uppercase text-center text-[#0C0C0C] mb-14 sm:mb-16" style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}>
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10 mb-20">
        {experience.map((exp, i) => (
          <FadeIn key={exp.org} delay={i * 0.1}>
            <div className="group border-l-2 border-[#0C0C0C]/15 pl-6 py-2 transition-all duration-300 hover:border-[#B600A8] hover:pl-8">
              <h3 className="text-[#0C0C0C] font-semibold uppercase tracking-wide text-lg sm:text-xl">
                {exp.role}
              </h3>
              <p className="text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm mt-1 mb-3 transition-colors duration-300 group-hover:text-[#B600A8]">
                {exp.org}
              </p>
              <p className="prose-serif text-[#0C0C0C]/75 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0C0C0C] p-6 sm:p-8">
          <p className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs mb-2">Research & Presentations</p>
          <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-3">{research.title}</h3>
          <p className="prose-serif text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed">{research.description}</p>
        </div>
      </FadeIn>
    </section>
  );
}
