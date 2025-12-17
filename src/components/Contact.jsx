import { content } from '../data/content';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    setName('');
    setEmail('');
    setMessage('');

    const response = await fetch("http://localhost:3000/api/contact", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({name,email,message})
    })

    


  }

  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <a href={`mailto:${content.contact.email}`} className="icon-link">
                <FiMail /> {content.contact.email}
              </a>
            </div>
            <div className="social-links">
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="icon-link social">
                <FiGithub /> GitHub
              </a>
              <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link social">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} action="/contact" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="FullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Send Message <FiSend style={{ marginLeft: '0.5rem' }}  />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-container {
          max-width: 800px;
          text-align: center;
        }

        .contact-intro {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          text-align: left;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item h3 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .icon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .icon-link:hover {
          color: var(--accent);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .social-links {
             flex-direction: row;
             gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
