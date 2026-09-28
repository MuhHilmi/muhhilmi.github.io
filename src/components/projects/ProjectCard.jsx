import { FolderGit2, ExternalLink, GitCompare } from "lucide-react";

function ProjectCard({ project }) {
    return (
        <article className="mb-4 group flex flex-col rounded-lg border border-slate-800 bg-[#10151D] p-5 transition-colors hover:border-slate-600">
            {/* Nama File */}
            <div className="mb-3 flex items-center gap-2">
                <FolderGit2
                    size={15}
                    className="text-teal-400"
                />
                <span className="font-mono text-xs text-slate-500">
                    {project.file}
                </span>
            </div>
            {/* Judul dan deskripsi */}
            <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {project.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
            </p>
            {/* Daftar teknologi */}
            <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded bg-[#161C26] px-2 py-1 font-mono text-xs text-amber-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {/* Tautan Proyek */}
            <div className="flex gap-4 font-mono text-sm">
                {project.demo && project.demo !== "#" && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-teal-400 hover:opacity-80"
                    >
                        <ExternalLink size={13} />
                        Demo
                    </a>
                )}
                {project.repo && project.repo !== "#" && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-400 hover:opacity-80"
                    >
                        <GitCompare size={13} />
                        Kode
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
