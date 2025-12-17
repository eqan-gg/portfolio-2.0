import { content } from '../data/content';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          padding: 2rem 0;
          text-align: center;
          color: var(--text-secondary);
          border-top: 1px solid var(--border);
          background-color: var(--bg-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
