import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { profile } from '../data/content';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <FadeIn delay={0} y={-20} as="nav" className="fixed top-0 inset-x-0 z-50">
      <div
        className="flex items-center justify-between px-6 md:px-10 transition-all duration-300"
        style={{
          paddingTop: scrolled || menuOpen ? '1rem' : '2rem',
          paddingBottom: scrolled || menuOpen ? '1rem' : '2rem',
          background: scrolled || menuOpen ? 'rgba(12,12,12,0.6)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(215,226,234,0.1)' : '1px solid transparent',
          boxShadow: scrolled || menuOpen ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <a
          href="#top"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-all duration-200 hover:opacity-70 hover:tracking-widest"
        >
          Jaya Sankar
        </a>
        <div className="hidden sm:flex items-center gap-6 md:gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] py-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-[#D7E2EA] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs md:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105 hover:border-[#D7E2EA]/60"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="sm:hidden text-[#D7E2EA] p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden px-6 pb-6 flex flex-col gap-1"
            style={{
              background: 'rgba(12,12,12,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(215,226,234,0.1)',
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-lg py-3 border-b border-[#D7E2EA]/10 hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-lg py-3 hover:opacity-70 transition-opacity duration-200"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}
