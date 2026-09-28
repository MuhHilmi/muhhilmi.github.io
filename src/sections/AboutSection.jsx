import SectionLabel from "../components/common/SectionLabel";
import { PROFILE } from "../data/portfolio";

function AboutSection() {
    return (
        <section
            id="about"
            className="scroll-mt-16 py-16"
        >
            <SectionLabel index="01" title="Tentang" />
            <div className="rounded-lg border border-slate-800 bg-[#10151D] p-6 sm:p-8">
                <p className="mb-4 font-mono text-sm text-slate-500">
                    {"/**"}
                </p>
                <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                    {PROFILE.bio}
                    {" "}
                    Saya percaya kode yang baik adalah kode yang mudah dibaca dan dipelihara.
                </p>
                <p className="mt-4 font-mono text-sm text-slate-500">
                    {"/*"}
                </p>
            </div>
        </section>
    );
}

export default AboutSection;
