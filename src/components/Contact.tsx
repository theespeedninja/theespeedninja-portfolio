    import { m } from "framer-motion";
    import type { ReactNode } from "react";
    import {
        Mail,
        MapPin,
        GitBranch,
        Send,
    } from "lucide-react";
    import LinkedinIcon from "./icons/LinkedinIcon";

    export default function Contact() {
    return (
        <section id="contact" className="section contact-section">

        <div className="container">

            <m.div
            className="contact-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
            <span>06 / GET IN TOUCH</span>

            <h2>
                Have a problem<br />
                worth <strong>solving?</strong>
            </h2>

            <p>
                I'm always interested in interesting problems,
                technical challenges, collaborations and opportunities
                to build something useful.
            </p>
            </m.div>

            <div className="contact-grid">

            <m.div
                className="contact-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >

                <ContactItem
                icon={<Mail />}
                title="Email"
                value="dannygitonga1@gmail.com"
                href="mailto:dannygitonga1@gmail.com"
                />

                <ContactItem
                icon={<MapPin />}
                title="Location"
                value="Nairobi, Kenya"
                />

                <ContactItem
                icon={<GitBranch />}
                title="GitHub"
                value="github.com/theespeedninja"
                href="https://github.com/theespeedninja"
                />

                <ContactItem
                icon={<LinkedinIcon />}
                title="LinkedIn"
                value="linkedin.com/in/danny-ngatia-gitonga"
                href="https://www.linkedin.com/in/danny-ngatia-gitonga"
                />

            </m.div>

            <m.form
                className="contact-form"
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >

                <div className="form-row">

                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    />
                </div>

                </div>

                <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's on your mind?"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    required
                ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                Send Message
                <Send size={17} />
                </button>

            </m.form>

            </div>

        </div>

        </section>
    );
    }

    function ContactItem({
    icon,
    title,
    value,
    href,
    }: {
    icon: ReactNode;
    title: string;
    value: string;
    href?: string;
    }) {
    const content = (
        <>
        <div className="contact-item-icon">
            {icon}
        </div>

        <div>
            <span>{title}</span>
            <p>{value}</p>
        </div>
        </>
    );

    if (href) {
        return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="contact-item"
        >
            {content}
        </a>
        );
    }

    return <div className="contact-item">{content}</div>;
    }