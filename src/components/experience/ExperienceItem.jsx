
import { GitCommitHorizontal } from "lucide-react";

function ExperienceItem({ experience }) {
    return (
        <article className="relative pb-8 last:pb-0">
            {/* Ikon pada garis timeline */}
            <div className="absolute -left-6 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0A0E14]">
                <GitCommitHorizontal
                    size={14}
                    className="text-amber-400"
                />
            </div>
            {/* Hash dan tanggal */}
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs text-amber-400">
                    {experience.hash}
                </span>
                <span className="font-mono text-xs text-slate-500">
                    {experience.date}
                </span>
            </div>
            {/* Posisi dan perusahaan */}
            <h3 className="text-base font-semibold text-slate-100">
                {experience.title}
                <span className="font-normal text-slate-400">
                    {" "}@ {experience.org}
                </span>
            </h3>
            {/* Deskripsi pekerjaan */}
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {experience.message}
            </p>
        </article>
    );
}

export default ExperienceItem;
