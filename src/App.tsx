import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // LazyMotion + the `m` component (used inside each section) load only
    // the animation features this site actually uses (fade/slide/hover),
    // instead of the full framer-motion bundle that `motion.*` pulls in.
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;