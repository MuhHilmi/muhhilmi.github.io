import SectionLabel from "../components/common/SectionLabel";
import ProjectCard from "../components/projects/ProjectCard";

import { PROJECT } from "../data/portfolio";

function ProjectSection() {
    return (
        <section
            id="projects"
            className="scroll-mt-16 py-16"
        >
            <SectionLabel index="02" title="Proyek" />
            <div className="grip gap-5 md:grid-cols-2">
                {PROJECT.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;
