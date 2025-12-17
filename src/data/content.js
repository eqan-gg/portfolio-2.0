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
        img: "https://placehold.co/200x200/222/fff?text=EH",
        ctaPrimary: "View Projects",
        ctaSecondary: "Contact Me",
    },
    projects: [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores with real-time data visualization.",
            features: [
                "Real-time sales tracking",
                "Inventory management system",
                "Dark/Light mode support",
                "Responsive data tables"
            ],
            techStack: ["React", "Chart.js", "Firebase", "CSS Modules"],
            demoLink: "#",
            githubLink: "#",
        },
        {
            id: 2,
            title: "Social Media App",
            description: "A responsive social platform allowing users to connect and share content.",
            features: [
                "User authentication",
                "Image upload & optimization",
                "Infinite scroll feed",
                "Real-time notifications"
            ],
            techStack: ["React", "Redux", "Node.js", "MongoDB"],
            demoLink: "#",
            githubLink: "#",
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
            githubLink: "#",
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
        linkedin: "https://linkedin.com/in/eqan-dev",
        resume: "#"
    }
};
