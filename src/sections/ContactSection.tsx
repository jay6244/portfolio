import { Mail, Download } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/content';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-28 flex flex-col items-center text-center"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Let's talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="prose-serif text-[#D7E2EA]/80 mt-6 max-w-lg text-sm sm:text-base leading-relaxed">
          Open to entry-level software engineering roles in backend and AI/ML — reach out and
          I'll get back to you quickly.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm border border-[#D7E2EA]/30 rounded-full px-6 py-3 transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm border border-[#D7E2EA]/30 rounded-full px-6 py-3 transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm border border-[#D7E2EA]/30 rounded-full px-6 py-3 transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.resume}
            download
            className="flex items-center gap-2 text-white uppercase tracking-widest text-sm rounded-full px-6 py-3 transition-transform hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </FadeIn>

      <p className="text-[#D7E2EA]/45 text-xs uppercase tracking-widest mt-20">
        © {new Date().getFullYear()} Jaya Sankar Pattem
      </p>
    </section>
  );
}
