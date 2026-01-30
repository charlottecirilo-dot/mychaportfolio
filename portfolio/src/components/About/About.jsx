import React from 'react';
import '../../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="divider"></div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/CHA.jpg" alt="Charlotte Cirilo" />
          </div>
          <div className="about-details">
            <div className="about-text">
              <p>
                I'm a full-stack developer with a passion for creating beautiful, functional digital experiences. 
                With 5+ years of experience in web development, I specialize in building responsive applications 
                that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or mentoring junior developers in the community. I believe in the power of clean code, user-centered design, 
                and continuous learning.
              </p>
              <p>
                My goal is to create products that not only look great but are also intuitive to use and built with 
                scalable, maintainable code. I'm always excited about new challenges and opportunities to grow.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <h4>Problem Solver</h4>
                <p>I enjoy tackling complex challenges and finding elegant solutions through creative thinking.</p>
              </div>
              <div className="highlight-card">
                <h4>Continuous Learner</h4>
                <p>Always exploring new technologies and methodologies to stay ahead of industry trends.</p>
              </div>
              <div className="highlight-card">
                <h4>Collaborative</h4>
                <p>I thrive in team environments and believe great products come from effective communication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
