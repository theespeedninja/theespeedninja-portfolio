    import { m } from "framer-motion";
    import { GraduationCap, Award } from "lucide-react";
    import { scrollViewport, fadeTransition } from "../lib/motionConfig";

    export default function Education() {
    return (
        <section id="education" className="section">

        <div className="container">

            <m.div
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={fadeTransition}
            >
            <span>05 / EDUCATION</span>
            <h2>Building the <strong>foundation.</strong></h2>
            </m.div>

            <div className="education-grid">

            <m.div
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={fadeTransition}
            >

                <div className="education-icon">
                <GraduationCap />
                </div>

                <span>2024 — 2028</span>

                <h3>
                BSc. Software Engineering
                </h3>

                <p>
                Multimedia University of Kenya
                </p>

                <small>
                Nairobi, Kenya
                </small>

            </m.div>

            <m.div
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={fadeTransition}
            >

                <div className="education-icon">
                <Award />
                </div>

                <span>CERTIFICATIONS</span>

                <h3>Professional Development</h3>

                <ul>
                <li>
                    ISOC — Designing and Deploying Computer Networks
                </li>

                <li>
                    HackerRank — Basic Java Certification
                </li>
                </ul>

            </m.div>

            </div>

        </div>

        </section>
    );
    }