    import { m } from "framer-motion";
    import {
    Code2,
    Server,
    Database,
    Wrench,
    } from "lucide-react";

    const skillGroups = [
    {
        icon: <Code2 />,
        title: "Languages",
        skills: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "C++",
        "PHP",
        ],
    },
    {
        icon: <Server />,
        title: "Frameworks & Web",
        skills: [
        "Django",
        "React",
        "Node.js",
        "Express.js",
        "HTML5",
        ],
    },
    {
        icon: <Database />,
        title: "Databases",
        skills: [
        "MySQL",
        "MongoDB",
        "SQL",
        ],
    },
    {
        icon: <Wrench />,
        title: "Tools",
        skills: [
        "Git",
        "GitHub",
        ],
    },
    ];

    export default function Skills() {
    return (
        <section id="skills" className="section section-dark">

        <div className="container">

            <m.div
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <span>02 / TECH STACK</span>
            <h2>Tools of the <strong>trade.</strong></h2>
            </m.div>

            <div className="skills-grid">

            {skillGroups.map((group, index) => (
                <m.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                >

                <div className="skill-card-header">
                    <div className="card-icon">
                    {group.icon}
                    </div>

                    <h3>{group.title}</h3>
                </div>

                <div className="skill-list">
                    {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                    ))}
                </div>

                </m.div>
            ))}

            </div>

        </div>

        </section>
    );
    }