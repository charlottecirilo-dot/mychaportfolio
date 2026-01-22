import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/**
 * Main App Component
 * 
 * This is the root component that orchestrates all sections of the portfolio
 * It includes:
 * - Hero section with call-to-action
 * - About section with personal introduction
 * - Skills section with tech stack
 * - Projects section showcasing work
 * - Experience section with timeline
 * - Contact section with form
 * - Footer with social links
 */
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
