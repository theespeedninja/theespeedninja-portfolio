    import { GitBranch, ArrowUp } from "lucide-react";
    import LinkedinIcon from "./icons/LinkedinIcon";

    export default function Footer() {
    return (
        <footer className="footer">

        <div className="container footer-container">

            <div>
            <div className="footer-logo">
                DANNY<span>.</span>
            </div>

            <p>
                Think strategically. Code precisely. Build for the future.
            </p>
            </div>

            <div className="footer-links">

            <a
                href="https://github.com/theespeedninja"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitBranch size={19} />
            </a>

            <a
                href="https://www.linkedin.com/in/danny-ngatia-gitonga"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon size={19} />
            </a>

            <a href="#home">
                <ArrowUp size={19} />
            </a>

            </div>

        </div>

        <div className="container copyright">
            © {new Date().getFullYear()} Danny Ngatia. All rights reserved.
        </div>

        </footer>
    );
    }