import { useEffect, useState } from "react";
import { NAV_TABS } from "../data/navigation";

const SECTION_IDS = NAV_TABS.map((tab) => tab.id);

function useActiveSection() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = SECTION_IDS
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-15% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return { activeSection, setActiveSection };
}

export default useActiveSection;
