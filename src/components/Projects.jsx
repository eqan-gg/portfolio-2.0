import { content } from '../data/content';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {content.projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="card-links">
                  <a href={project.demoLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.githubLink} className="link-btn outline" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: 700;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: var(--transition);
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-features {
          list-style-position: inside;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          background-color: var(--bg-primary);
          border-radius: 20px;
          color: var(--accent);
          border: 1px solid var(--border);
        }

        .card-links {
          display: flex;
          gap: 1rem;
        }

        .link-btn {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .link-btn:hover {
          text-decoration: underline;
        }

        .link-btn.outline {
          color: var(--text-secondary);
        }

        .link-btn.outline:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Projects;
