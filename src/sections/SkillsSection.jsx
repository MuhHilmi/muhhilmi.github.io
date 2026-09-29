import SectionLabel from "../components/common/SectionLabel";
import { SKILLS } from "../data/portfolio";

function SkillsSection() {
    const categories = Object.entries(SKILLS);

    return (
        <section
            id="skills"
            className="scroll-mt-16 py-16"
        >
            <SectionLabel index="04" title="Keahlian" />
            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-[#10151D] p-5 font-mono text-sm sm:p-6">
                <div className="text-slate-400">{"{"}</div>
                {categories.map(([category, items], catIndex) => (
                    <div key={category} className="pl-4">
                        <div className="text-teal-400">
                            {'"' + category + '": {'}
                        </div>
                        {items.map((item, index) => (
                            <div
                                key={item.name}
                                className="flex flex-wrap gap-x-2 pl-4"
                            >
                                <span className="text-amber-400">
                                    {'"' + item.name + '"'}
                                </span>
                                <span className="text-slate-500">:</span>
                                <span className="text-slate-400">
                                    {'"' + item.version + '"'}
                                    {index < items.length - 1 ? "," : ""}
                                </span>
                            </div>
                        ))}
                        <div className="text-slate-400">
                            {"}"}
                            {catIndex < categories.length - 1 ? "," : ""}
                        </div>
                    </div>
                ))}
                <div className="text-slate-400">{"}"}</div>
            </div>
        </section>
    );
}

export default SkillsSection;
