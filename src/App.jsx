import { useState } from "react";
import Header from "./components/layout/Header";
import SectionLabel from "./components/common/SectionLabel";
import { NAV_TABS } from "./data/navigation";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  function handleNavigate(id) {
    setActiveSection(id);
    
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
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
        {NAV_TABS.map((tab, index) => (
          <section
            key={tab.id}
            id={tab.id}
            className="min-h-[60vh] scroll-mt-16 py-16"
          >
            <SectionLabel
              index={String(index + 1).padStart(2, "0")}
              title={(tab.id.charAt(0).toUpperCase() + tab.id.slice(1))}
            />
            <p className="text-slate-400">
              Konten {tab.label} akan dibuat pada tahap selanjutnya.</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
