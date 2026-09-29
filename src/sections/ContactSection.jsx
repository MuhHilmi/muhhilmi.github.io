import { GitCompare, Link, Mail, Download, FileText } from "lucide-react";
import SectionLabel from "../components/common/SectionLabel";
import ActionLink from "../components/common/ActionLink";
import { PROFILE } from "../data/portfolio";

function ContactSection() {
    return (
        <section
            id="contact"
            className="scroll-mt-16 py-16 sm:py-24"
        >
            <SectionLabel index="05" title="Kontak" />
            <div className="rounded-lg border border-slate-800 bg-[#10151D] p-6 text-center sm:p-10">
                <p className="mb-3 font-mono text-sm text-slate-500">
                    $ echo "mari terhubung"
                </p>
                <h2 className="mb-4 text-2xl font-bold text-slate-100 sm:text-3xl">
                    Punya proyek menarik?
                </h2>
                <p className="mx-auto mb-8 max-w-md text-sm text-slate-400 sm:text-base">
                    Saya selalu terbuka untuk diskusi proyek baru, kolaborasi, atau sekadar ngobrol soal teknologi.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <ActionLink
                        href={`mailto:${PROFILE.email}`}
                        icon={Mail}
                        variant="primary"
                    >
                        {PROFILE.email}
                    </ActionLink>
                    <ActionLink
                        href={PROFILE.cvUrl}
                        icon={Download}
                        variant="teal"
                        download
                    >
                        Download CV
                    </ActionLink>
                    <ActionLink
                        href={PROFILE.portfolioPdfUrl}
                        icon={FileText}
                        download
                    >
                        Portfolio PDF
                    </ActionLink>
                </div>
                <div className="mt-8 flex justify-center gap-5">
                    <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-slate-400 hover:text-amber-400"
                    >
                        <GitCompare size={20} />
                    </a>
                    <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-slate-400 hover:text-amber-400"
                    >
                        <Link size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
