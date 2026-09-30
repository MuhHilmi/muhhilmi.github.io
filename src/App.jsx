import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import useActiveSection from "./hooks/useActiveSection";

function App() {
  const { activeSection, setActiveSection } = useActiveSection();

  function handleNavigate(id) {
    setActiveSection(id);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen bg-[#0A0E14] text-slate-100">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
