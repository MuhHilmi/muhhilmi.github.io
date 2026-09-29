import SectionLabel from "../components/common/SectionLabel";
import ExperienceItem from "../components/experience/ExperienceItem";
import { EXPERIENCE } from "../data/portfolio";

function ExperienceSection() {
    return (
        <section
            id="experience"
            className="scroll-mt-16 py-16"
        >
            <SectionLabel
                index="03"
                title="Pengalaman"
            />
            <div className="rounded-lg border border-slate-800 bg-[#10151D] p-5 sm:p-6">
                <p className="mb-5 font-mono text-xs text-slate-500">
                    $ git log --oneline --decorate
                </p>
                <div className="relative pl-6">
                    {/* Garis timeline */}
                    <div className="absolute bottom-2 left-[7px] top-2 w-px bg-slate-800" />
                    {/* Daftar pengalaman */}
                    {EXPERIENCE.map((experience) => (
                        <ExperienceItem
                            key={experience.hash}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
