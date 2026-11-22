import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { OrbitShape, CubeShape, NodeShape, BracketShape } from '../components/DecorShapes';
import { profile } from '../data/content';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0c0c0c' }}
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="hidden md:block absolute top-[4%] left-[2%] md:left-[4%]">
        <NodeShape className="w-[120px] sm:w-[160px] md:w-[190px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="hidden md:block absolute bottom-[8%] left-[6%] md:left-[10%]">
        <CubeShape className="w-[100px] sm:w-[140px] md:w-[170px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="hidden md:block absolute top-[4%] right-[2%] md:right-[4%]">
        <OrbitShape className="w-[120px] sm:w-[160px] md:w-[190px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="hidden md:block absolute bottom-[8%] right-[6%] md:right-[10%]">
        <BracketShape className="w-[110px] sm:w-[150px] md:w-[190px]" />
      </FadeIn>

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20} className="mt-10 sm:mt-14">
        <div
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#D7E2EA]/40 transition-transform duration-300 hover:scale-105 hover:border-[#B600A8]/60"
          style={{ boxShadow: '0 0 0 8px rgba(215,226,234,0.06)' }}
        >
          <img
            src="/images/profile-badge.jpg"
            alt="Jaya Sankar Pattem"
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-8 sm:mt-10 md:mt-12">
        <AnimatedText
          text={profile.bio}
          className="prose-serif text-[#D7E2EA] text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
        <div className="mt-6 sm:mt-8 md:mt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
