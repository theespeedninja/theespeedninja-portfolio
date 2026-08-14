    import { m } from "framer-motion";
    import type { ReactNode } from "react";
    import { Brain, Target, Lightbulb } from "lucide-react";

    export default function About() {
    return (
        <section id="about" className="section">

        <div className="container">

            <m.div
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <span>01 / ABOUT ME</span>
            <h2>Strategic thinking.<br /><strong>Practical solutions.</strong></h2>
            </m.div>

            <div className="about-grid">

            <m.div
                className="about-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <p>
                I'm <strong>Danny Ngatia</strong>, a Software Engineering
                student and developer based in Nairobi, Kenya.
                </p>

                <p>
                I love chess, and I bring the same strategic thinking
                into software development. I approach problems by
                breaking them down, understanding the underlying
                challenge, and searching for the most optimal solution.
                </p>

                <p>
                I'm currently learning <strong>Django</strong> and
                strengthening my <strong>Java</strong> skills while
                continuing to explore modern software development.
                </p>

                <p>
                My ambition is simple: to grow to the highest levels
                of the technology industry in Africa and eventually
                compete on a global stage.
                </p>
            </m.div>

            <div className="about-cards">

                <InfoCard
                icon={<Brain />}
                title="Think Strategically"
                text="Approaching problems like a chess board — understand the position before making the move."
                />

                <InfoCard
                icon={<Target />}
                title="Solve Problems"
                text="Turning complex technical challenges into practical and maintainable solutions."
                />

                <InfoCard
                icon={<Lightbulb />}
                title="Build for Tomorrow"
                text="Learning continuously and building with the future of technology in mind."
                />

            </div>

            </div>

        </div>

        </section>
    );
    }

    function InfoCard({
    icon,
    title,
    text,
    }: {
    icon: ReactNode;
    title: string;
    text: string;
    }) {
    return (
        <m.div
        className="info-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        >
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{text}</p>
        </m.div>
    );
    }