import { Suspense, lazy } from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import ContactButton from '../components/ContactButton';
import ScrambleText from '../components/ScrambleText';
import TypewriterText from '../components/TypewriterText';
import { profile } from '../data/content';

const ThreeScene = lazy(() => import('../components/3d/ThreeScene'));

const ROTATING_WORDS = ['Systems', 'Agents', 'Machines', 'Tools'];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[720px] overflow-hidden" style={{ background: '#0c0c0c' }}>
      <Suspense
        fallback={
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 65% 45%, rgba(118,33,176,0.18), transparent 55%)',
            }}
          />
        }
      >
        <ThreeScene />
      </Suspense>

      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.15) 30%, rgba(12,12,12,0.15) 55%, rgba(12,12,12,0.75) 100%)',
        }}
      />
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-[5]"
        style={{
          background:
            'linear-gradient(90deg, rgba(12,12,12,0.88) 0%, rgba(12,12,12,0.6) 38%, rgba(12,12,12,0.15) 62%, transparent 78%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-10 lg:px-16 max-w-2xl mx-auto lg:mx-0 pt-16 lg:pt-0 w-full min-w-0"
        >
          <motion.div variants={item} className="flex items-center gap-2 text-[#D7E2EA]/80 mb-4 flex-wrap justify-center lg:justify-start">
            <Cpu size={16} className="text-[#B600A8] flex-shrink-0" />
            <span className="text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Software Engineer · AI/ML Systems · Backend APIs</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="hero-heading font-black uppercase tracking-tight leading-[1.05] mb-5 sm:mb-6"
            style={{ fontSize: 'clamp(2.2rem, 9vw, 4.5rem)' }}
          >
            Building
            <br />
            Intelligent
            <br />
            <ScrambleText words={ROTATING_WORDS} />
          </motion.h1>

          <motion.p
            variants={item}
            className="prose-serif text-[#D7E2EA]/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-7 sm:mb-8 min-w-0 w-full"
          >
            <TypewriterText text={profile.heroSub} delay={1.1} />
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <ContactButton />
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-black/20 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/5"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-6 h-10 rounded-full border border-[#D7E2EA]/25 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#B600A8', boxShadow: '0 0 8px rgba(182,0,168,0.8)' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-[0.65rem] tracking-[0.2em] text-[#D7E2EA]/55 uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
