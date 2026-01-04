import { useState, useEffect } from 'react';
import { content } from '../data/content';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">{content.header.logo}</a>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {content.header.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 2rem;
          bottom: auto;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          min-width: 300px;
          max-width: 90%;
          z-index: 1000;
          padding: 0.75rem 2rem;
          transition: var(--transition);
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
        }
        
        .navbar.scrolled {
          /* No major change needed for scrolled state as it's always "glassy" now, 
             but we can keep it consistent or add a slight active state if needed. */
          background: rgba(10, 10, 10, 0.8);
          padding: 0.75rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Light mode navbar */
        [data-theme='light'] .navbar {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        [data-theme='light'] .navbar.scrolled {
          background: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          display: none; /* Often bottom navs don't show full logo to save space, but let's see. Or we can keep it small. */
        }
        
        /* Show logo on desktop if space permits, or hide it to make it more like a dock */
        @media (min-width: 768px) {
            .logo { display: block; }
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        .theme-toggle {
          background: none;
          color: var(--text-primary);
          font-size: 1.2rem;
          padding: 0.5rem;
          border-radius: 50%;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-toggle:hover {
          background: var(--bg-secondary);
          color: var(--accent);
        }

        .menu-toggle {
          display: none; /* Hidden on desktop */
          background: none;
          color: var(--text-primary);
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .navbar {
            top: 1.5rem;
            bottom: auto;
            padding: 0.75rem 1.5rem;
            width: 85%;
          }
        
          .logo {
            display: block; /* Ensure logo is visible on mobile if desired, or maybe hide for cleaner dock look? Let's keep it for now. */
            font-size: 1.2rem;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%; /* Opens DOWNWARDS */
            bottom: auto;
            left: 0;
            width: 100%;
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            transform: translateY(-10px); /* Start slightly up */
            opacity: 0;
            pointer-events: none;
            transition: var(--transition);
            z-index: -1;
            border-radius: 20px;
            margin-top: 1rem;
            border: 1px solid var(--border);
          }
          
          [data-theme='light'] .nav-links {
             background: rgba(255, 255, 255, 0.95);
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
