import { content } from '../data/content';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category animate-slide-up delay-1">
                        <h3>Languages</h3>
                        <ul>
                            {content.skills.languages.map((skill, index) => (
                                <li key={index}>
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skill-category animate-slide-up delay-2">
                        <h3>Frameworks</h3>
                        <ul>
                            {content.skills.frameworks.map((skill, index) => (
                                <li key={index}>
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skill-category animate-slide-up delay-3">
                        <h3>Tools</h3>
                        <ul>
                            {content.skills.tools.map((skill, index) => (
                                <li key={index}>
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skill-category animate-slide-up delay-1">
                        <h3>UI & Design</h3>
                        <ul>
                            {content.skills.ui.map((skill, index) => (
                                <li key={index}>
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skill-category animate-slide-up delay-2">
                        <h3>Backend</h3>
                        <ul>
                            {content.skills.backend.map((skill, index) => (
                                <li key={index}>
                                    <i className={skill.icon}></i>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          text-align: center;
        }

        .skill-category:hover {
          border-color: var(--accent);
        }

        .skill-category h3 {
          margin-bottom: 1.5rem;
          color: var(--accent);
          font-size: 1.2rem;
        }

        .skill-category ul {
          list-style: none;
        }

        .skill-category li {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-category li i {
          font-size: 1.5rem;
          color: var(--accent);
        }
      `}</style>
        </section>
    );
};

export default Skills;
