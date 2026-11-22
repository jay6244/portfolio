import FadeIn from '../components/FadeIn';
import { skillGroups, education } from '../data/content';

export default function SkillsEducationSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <FadeIn delay={0}>
            <h2 className="font-black uppercase text-[#0C0C0C] mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Skills
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-5">
            {skillGroups.map((group, i) => (
              <FadeIn key={group.area} delay={i * 0.05}>
                <div className="group border-b border-[#0C0C0C]/10 pb-4 px-3 -mx-3 rounded-xl transition-colors duration-300 hover:bg-black/[0.03]">
                  <p className="text-[#0C0C0C] font-semibold uppercase tracking-wide text-sm mb-1 transition-colors duration-300 group-hover:text-[#B600A8]">
                    {group.area}
                  </p>
                  <p className="text-[#0C0C0C]/60 text-sm leading-relaxed">{group.items}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn delay={0}>
            <h2 className="font-black uppercase text-[#0C0C0C] mb-10" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Education
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <FadeIn key={edu.school} delay={i * 0.1}>
                <div>
                  <p className="text-[#0C0C0C] font-semibold uppercase tracking-wide text-base sm:text-lg">
                    {edu.degree}
                  </p>
                  <p className="text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm mt-1 mb-2">
                    {edu.school}
                  </p>
                  <p className="prose-serif text-[#0C0C0C]/75 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
