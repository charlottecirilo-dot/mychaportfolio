import React from 'react';
import '../../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2022 - Present',
      description: 'Led development of customer-facing web applications, mentored junior developers, and improved application performance by 40%.'
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Developed full-stack applications using React and Node.js, implemented RESTful APIs, and collaborated with cross-functional teams.'
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartupHub',
      duration: 'Jan 2019 - May 2020',
      description: 'Built responsive web pages using HTML/CSS/JavaScript, fixed bugs in production code, and contributed to team projects.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Tech',
      year: '2018',
      details: 'GPA: 3.8/4.0 | Dean\'s List'
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy',
      year: '2018',
      details: 'Intensive 12-week program focusing on modern web technologies'
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        <div className="divider"></div>
        
        <div className="experience-grid">
          <div className="experience-column">
            <h3 className="experience-title">Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <p className="company-name">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="experience-title">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="company-name">{edu.school}</p>
                    <p className="duration">{edu.year}</p>
                    <p className="description">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
