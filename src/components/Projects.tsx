    import { m } from "framer-motion";
    import { GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";

    const projects = [
    {
        number: "01",
        title: "F1 Drivers",
        description:
        "A Django application featuring cards with details about current Formula 1 drivers.",
        technologies: ["Django", "Python", "HTML"],
        github: "https://github.com/theespeedninja/F1-drivers",
        demo: "",
    },
    {
        number: "02",
        title: "Django Polls App",
        description:
        "A polling application built while following the official Django documentation tutorial.",
        technologies: ["Django", "Python", "HTML"],
        github: "https://github.com/theespeedninja/Django_poll_App",
        demo: "",
    },
    {
        number: "03",
        title: "Kiswate Guide",
        description:
        "A collaborative project creating web-based user documentation and support resources for Kiswate.",
        technologies: ["Django", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/theespeedninja/kiswate_support",
        demo: "",
    },
    ];

    export default function Projects() {
    return (
        <section id="projects" className="section">

        <div className="container">

            <m.div
            className="section-heading project-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <span>03 / SELECTED WORK</span>
            <h2>Things I've <strong>built.</strong></h2>
            </m.div>

            <div className="projects-grid">

            {projects.map((project, index) => (
                <m.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                >

                <div className="project-image">

                    <div className="placeholder-project">
                    <span>{project.number}</span>
                    <div className="project-grid-pattern"></div>
                    <h3>{project.title}</h3>
                    </div>

                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    >
                    <ArrowUpRight />
                    </a>

                </div>

                <div className="project-content">

                    <div className="project-number">
                    PROJECT {project.number}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                    </div>

                    <div className="project-links">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitBranch size={17} />
                        GitHub
                    </a>

                    {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <ExternalLink size={17} />
                        Live Demo
                        </a>
                    )}

                    </div>

                </div>

                </m.article>
            ))}

            </div>

        </div>

        </section>
    );
    }