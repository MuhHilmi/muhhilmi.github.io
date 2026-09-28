import { GitCompare, Link, Mail, Download, FileText } from "lucide-react";

import Avatar from "../common/Avatar";
import ActionLink from "../common/ActionLink";

import useTypewriter from "../../hooks/useTypewriter";
import { PROFILE } from "../../data/portfolio";

// Diletakkan di luar komponen agar preferensi array tetap sama pada setiap render.
const heroLines = [
    "const developer = {",
    `   name: "${PROFILE.name}",`,
    `   role: "${PROFILE.role}",`,
    `   location: "${PROFILE.location}",`,
    "   available: true,",
    "};",
];

function Hero() {
    const { displayed, done } = useTypewriter(
        heroLines,
        26,
        400,
    );

    return (
        <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
            {/* Terminal */}
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#10151D] shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 border-b border-slate-800 bg-[#161C26] px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-3 font-mono text-xs text-slate-500">~/portfolio - zsh</span>
                </div>
                {/* Terminal content */}
                <div className="flex flex-col gap-8 px-5 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-12">
                    <Avatar
                        src={PROFILE.photo}
                        name={PROFILE.name}
                        size={96}
                    />
                    <div className="min-w-0 flex-1">
                        <pre className="whitespace-pre-wrap wrap-break-word font-mono text-sm leading-relaxed sm:text-base">
                            {displayed.map((line, index) => (
                                <div key={index}>
                                    <span className={line.includes("const developer") ? "text-teal-400" : line.trim().startsWith("name") || line.trim().startsWith("role") ? "text-slate-100" : "text-slate-400"}>
                                        {line}
                                    </span>
                                </div>
                            ))}
                            <span className="animate-cursor ml-0.5 inline-block h-4 w-2 bg-amber-400 align-middle" />
                        </pre>
                    </div>
                </div>
                {/* Bio muncul setelah animasi selesai */}
                {done && (
                    <p className="animate-fade-in -mt-4 max-w-lg px-5 pb-8 text-sm leading-relaxed text-slate-400 sm:px-8 sm:pb-12 sm:text-base">
                        {PROFILE.bio}
                    </p>
                )}
            </div>
            {/* Tombol kontak dan media sosial */}
            <div className="mt-6 flex flex-warp gap-3">
                <ActionLink
                    href={`mailto:${PROFILE.email}`}
                    icon={Mail}
                    variant="primary"
                >
                    Hubungi Saya
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
                    Portfolio (PDF)
                </ActionLink>
                <ActionLink
                    href={PROFILE.github}
                    icon={GitCompare}
                    external
                >
                    GitHub
                </ActionLink>
                <ActionLink
                    href={PROFILE.linkedin}
                    icon={Link}
                    external
                >
                    LinkedIn
                </ActionLink>
            </div>
        </section>
    );
}

export default Hero;
