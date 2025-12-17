import { content } from '../data/content';

const About = () => {
    const { bio, enjoy, strengths, lookingFor } = content.about;

    return (
        <section id="about" className="section bg-secondary">
            <div className="container about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="bio-group">
                        <p className="lead">{bio}</p>
                        <p>{enjoy}</p>
                        <p>{lookingFor}</p>
                    </div>

                    <div className="strengths-group">
                        <h3>My Strengths</h3>
                        <ul className="strengths-list">
                            {strengths.map((str, index) => (
                                <li key={index}>{str}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        .about-container {
          max-width: 900px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .lead {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .bio-group p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .strengths-group {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .strengths-group h3 {
          margin-bottom: 1.5rem;
          color: var(--accent);
        }

        .strengths-list {
          list-style: none;
        }

        .strengths-list li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
        }

        .strengths-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
