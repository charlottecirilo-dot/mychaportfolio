import React from 'react';
import '../../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and user authentication.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface using React and Firebase.',
      tags: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      description: 'A modern chat interface powered by AI, featuring message history, real-time typing indicators, and smooth animations with a beautiful pink-themed design.',
      tags: ['React', 'OpenAI API', 'Socket.io', 'Express'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'A scalable blogging platform with markdown support, SEO optimization, and a beautiful reading experience. Built with Next.js and Contentful CMS.',
      tags: ['Next.js', 'Contentful', 'Vercel', 'SEO'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application with workout logging, progress visualization, and personalized recommendations using React Native.',
      tags: ['React Native', 'Firebase', 'Charts', 'Health API'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time forecasts, location-based services, and interactive weather visualizations using Weather API.',
      tags: ['React', 'Weather API', 'Geolocation', 'D3.js'],
      image: null,
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="divider"></div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} />
                    <div className="project-image-overlay"></div>
                  </>
                ) : (
                  <div className="project-title-card">
                    <h2>{project.title}</h2>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" title="View Live">
                      Visit Site
                    </a>
                    <a href={project.githubLink} className="project-link" title="View Code">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
