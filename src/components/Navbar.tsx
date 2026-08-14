import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
        <div className="container nav-container">

            <a href="#home" className="logo">
            <Terminal size={21} />
            <span>DANNY<span className="accent">.</span></span>
            </a>

            <nav className={`nav-links ${open ? "mobile-open" : ""}`}>
            {links.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                >
                {link.name}
                </a>
            ))}
            </nav>

            <a className="nav-contact" href="#contact">
            Let's Talk
            </a>

            <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            >
            {open ? <X /> : <Menu />}
            </button>

        </div>
        </header>
    );
}