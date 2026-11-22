import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import StickyProjectCard from '../components/StickyProjectCard';
import { featuredProjects } from '../data/content';

const palettes: Array<'a' | 'b' | 'c'> = ['a', 'b', 'c'];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Featured Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative pb-10">
        {featuredProjects.map((project, i) => (
          <StickyProjectCard
            key={project.id}
            project={project}
            index={i}
            total={featuredProjects.length}
            palette={palettes[i % palettes.length]}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
