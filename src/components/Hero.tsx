    import { m } from "framer-motion";
    import {
        ArrowDown,
        GitBranch,
        Code2,
        Cpu,
    } from "lucide-react";
    import LinkedinIcon from "./icons/LinkedinIcon";

    export default function Hero() {
    return (
        <section id="home" className="hero">

        <div className="hero-grid"></div>

        <div className="container hero-container">

            <m.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >

            <m.div
                className="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <span className="status-dot"></span>
                Available for opportunities
            </m.div>

            <m.p
                className="hero-intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                HELLO, I'M
            </m.p>

            <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
            >
                Danny <span>Ngatia</span>
            </m.h1>

            <m.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Software Engineer
            </m.h2>

            <m.p
                className="hero-quote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                "I don't just write code for today's problems.
                <br />
                I build solutions with tomorrow in mind."
            </m.p>

            <m.div
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <a href="#projects" className="btn btn-primary">
                View My Work
                <ArrowDown size={18} />
                </a>

                <a href="#contact" className="btn btn-outline">
                Contact Me
                </a>
            </m.div>

            <div className="social-links">
                <a
                href="https://github.com/theespeedninja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <GitBranch size={20} />
                </a>

                <a
                href="https://www.linkedin.com/in/danny-ngatia-gitonga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <LinkedinIcon size={20} />
                </a>
            </div>

            </m.div>

            <m.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            >

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="code-card">
                <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
                </div>

                <div className="code-content">
                <p>
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                    name: <span className="code-green">"Danny Ngatia"</span>,
                </p>

                <p className="indent">
                    role: <span className="code-green">"Software Engineer"</span>,
                </p>

                <p className="indent">
                    mindset: <span className="code-green">"Problem Solver"</span>,
                </p>

                <p className="indent">
                    future: <span className="code-green">"Building"</span>
                </p>

                <p>{"}"}</p>
                </div>
            </div>

            <div className="floating-icon icon-one">
                <Code2 size={26} />
            </div>

            <div className="floating-icon icon-two">
                <Cpu size={26} />
            </div>

            </m.div>

        </div>

        <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
        </a>

        </section>
    );
    }