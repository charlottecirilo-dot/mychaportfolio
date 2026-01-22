import React from 'react';
import '../../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux', 'Material-UI']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'GitHub']
    },
    {
      category: 'Design',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Prototyping']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="divider"></div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
