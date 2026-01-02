import profileImg from '../assets/profile.jpeg';

export const content = {
    header: {
        logo: "<Dev/>",
        navLinks: [
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
        ],
    },
    hero: {
        name: "Eqan Hanif",
        title: "Frontend Web Developer",
        intro: "I build accessible, pixel-perfect, and performant web experiences.",
        img: profileImg,
        ctaPrimary: "View Projects",
        ctaSecondary: "Contact Me",
    },
    projects: [
        {
            id: 1,
            title: "ManageUp - Task Management App",
            description: "A role-based task management web application with admin and employee dashboards.",
            features: [
                "Role-based access (Admin/Employee)",
                "Task creation and assignment",
                "Task status tracking and workflows",
                "LocalStorage data persistence"
            ],
            techStack: ["React.js", "Tailwind CSS", "Context API", "LocalStorage"],
            demoLink: "https://manage-up.vercel.app/",
            githubLink: "https://github.com/eqan-gg/ManageUp",
        },
        {
            id: 2,
            title: "NexusAI Landing Page",
            description: "A modern, responsive landing page for a SaaS startup built with HTML, CSS, and JavaScript.",
            features: [
                "Modern Glassmorphism Design",
                "Fully Responsive (Mobile-first)",
                "Interactive Animations",
                "Pricing & Feature Sections"
            ],
            techStack: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
            demoLink: "https://nexusai-landing-page.vercel.app/",
            githubLink: "https://github.com/eqan-gg/nexusai-landing-page",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern, high-performance personal portfolio website.",
            features: [
                "Responsive design",
                "Smooth scroll animations",
                "Contact form validation",
                "SEO optimized"
            ],
            techStack: ["React", "Vite", "Vanilla CSS"],
            demoLink: "#",
            githubLink: "https://github.com/eqan-gg/portfolio-2.0",
        },
        {
            id: 4,
            title: "Movie Streaming UI Clone",
            description: "A responsive movie streaming application interface with real-time search and favorites management.",
            features: [
                "Real-time movie search",
                "Favorites management (Add/Remove)",
                "Separate Favorites page",
                "Mobile-friendly responsive design"
            ],
            techStack: ["React.js", "CSS", "React Router DOM", "useState"],
            demoLink: "https://movies-app-three-sand.vercel.app/",
            githubLink: "https://github.com/eqan-gg/movies-app",
        }
    ],
    skills: {
        languages: [
            { name: "HTML5", icon: "ri-html5-fill" },
            { name: "CSS3", icon: "ri-css3-fill" },
            { name: "JavaScript (ES6+)", icon: "ri-javascript-fill" }
        ],
        frameworks: [
            { name: "React.js", icon: "ri-reactjs-line" },
            { name: "Vue.js", icon: "ri-vuejs-fill" }
        ],
        tools: [
            { name: "Git", icon: "ri-git-branch-fill" },
            { name: "Webpack", icon: "ri-stack-fill" },
            { name: "Figma", icon: "ri-quill-pen-fill" },
            { name: "VS Code", icon: "ri-code-box-fill" }
        ],
        ui: [
            { name: "Tailwind CSS", icon: "ri-windy-fill" },
            { name: "Bootstrap", icon: "ri-bootstrap-fill" }
        ],
        backend: [
            { name: "Node.js (Basics)", icon: "ri-nodejs-line" },
            { name: "MongoDB (Basics)", icon: "ri-database-2-fill" }
        ]
    },
    about: {
        bio: "I'm a passionate Frontend Developer and a BSCS student.I specialize in building exceptional websites, applications, and everything in between. My focus is on creating accessible, user-centric interfaces that blend performance with aesthetics.",
        enjoy: "I love the problem-solving aspect of development and the immediate visual feedback of frontend work. Turning complex designs into functional code is what drives me.",
        strengths: [
            "Clean, modular code architecture",
            "Pixel-perfect implementation",
            "Performance optimization",
            "Cross-browser compatibility"
        ],
        lookingFor: "I am looking for opportunities to work with a collaborative team on ambitious projects where I can continue to learn and grow as a developer."
    },
    contact: {
        email: "eqanchauhaan@gmail.com",
        github: "https://github.com/eqan-gg",
        linkedin: "https://www.linkedin.com/in/eqan-hanif",
        resume: "#"
    }
};
