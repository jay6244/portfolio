import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import FocusAreasSection from './sections/FocusAreasSection';
import ProjectsSection from './sections/ProjectsSection';
import AllProjectsSection from './sections/AllProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsEducationSection from './sections/SkillsEducationSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div style={{ background: '#0C0C0C' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#D7E2EA] focus:px-5 focus:py-2.5 focus:text-[#0C0C0C] focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wide"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <FocusAreasSection />
        <ProjectsSection />
        <AllProjectsSection />
        <ExperienceSection />
        <SkillsEducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
