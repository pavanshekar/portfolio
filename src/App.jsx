import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/palette/CommandPalette';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import GitHubActivity from './components/sections/GitHubActivity';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem('theme', mode);
    } catch {
      /* private mode */
    }
  }, [mode]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
