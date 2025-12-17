import { content } from '../data/content';

const Hero = () => {
    const { name, title, intro, ctaPrimary, ctaSecondary, img } = content.hero;

    return (
        <section className="hero section">
            <div className="container hero-content">
                {img && (
                    <div className="profile-img-container">
                        <img src={img} alt={name} className="profile-img" />
                    </div>
                )}
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">{name}</h1>
                <h2 className="title">{title}</h2>
                <p className="intro">{intro}</p>

                <div className="cta-group">
                    <a href="#projects" className="btn">{ctaPrimary}</a>
                    <a href="#contact" className="btn btn-outline">{ctaSecondary}</a>
                </div>
            </div>

            <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Offset for fixed navbar */
        }

        .hero-content {
          max-width: 800px;
        }

        .profile-img-container {
            margin-bottom: 2rem;
        }

        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent);
            box-shadow: 0 0 20px rgba(100, 108, 255, 0.2);
        }

        .greeting {
          color: var(--accent);
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .name {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #a1a1a1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .intro {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .name {
            font-size: 3rem;
          }
          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
