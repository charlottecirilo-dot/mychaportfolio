import React from 'react';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Charlotte Cirilo</h1>
          <p className="hero-role slide-in-up">Full Stack Developer & Creative Designer</p>
          <p className="hero-tagline slide-in-up">
            Crafting beautiful, functional digital experiences with modern technologies.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
