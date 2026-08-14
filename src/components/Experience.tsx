        import { m } from "framer-motion";
        import { BriefcaseBusiness } from "lucide-react";
        import { scrollViewport, fadeTransition } from "../lib/motionConfig";

        const experiences = [
        {
            company: "Eujim Solutions",
            role: "Developer",
            period: "July – August 2026",
            description:
            "Contributed to the development of the Kiswate web documentation and support resources.",
        },
        {
            company: "Multimedia University Christian Union (MMUCU)",
            role: "Developer",
            period: "2024 – 2028",
            description:
            "Contributed to the MMUCU website, including implementation of the login authentication page and other development work.",
        },
        ];

        export default function Experience() {
        return (
            <section id="experience" className="section section-dark">

            <div className="container">

                <m.div
                className="section-heading"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={fadeTransition}
                >
                <span>04 / EXPERIENCE</span>
                <h2>Where I've <strong>contributed.</strong></h2>
                </m.div>

                <div className="timeline">

                {experiences.map((experience, index) => (
                    <m.div
                    className="timeline-item"
                    key={experience.company}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={scrollViewport}
                    transition={fadeTransition}
                    >

                    <div className="timeline-marker">
                        <BriefcaseBusiness size={18} />
                    </div>

                    <div className="timeline-content">

                        <span className="timeline-period">
                        {experience.period}
                        </span>

                        <h3>{experience.role}</h3>

                        <h4>{experience.company}</h4>

                        <p>{experience.description}</p>

                    </div>

                    </m.div>
                ))}

                </div>

            </div>

            </section>
        );
        }