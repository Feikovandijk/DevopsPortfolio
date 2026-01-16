import { Translation } from './types';

export const en: Translation = {
    nav: {
        home: "Home",
        about: "About",
        blog: "Blog",
        contact: "Contact",
    },
    hero: {
        overline: "DevOps Engineer | Technical Developer | MSc Game Technologies",
        title: "Hi, I'm Feiko.",
        subtitle: "I combine my technical skills with a background in psychology to build reliable systems and help teams work better.",
        cta: "Contact Me",
        secondaryCta: "About Me",
    },
    services: {
        title: "Technical Expertise",
        items: {
            cloud: {
                title: "Cloud & Infra",
                description: "Designing robust client-server architectures focused on scalability. Experienced with AWS, GCP, and Azure IoT.",
            },
            cicd: {
                title: "CI/CD & Automation",
                description: "Integrating continuous testing and deployment pipelines. Scaling build processes to reduce compilation time.",
            },
            security: {
                title: "Observability & Security",
                description: "Implementing data collection tools handling 400k+ daily events. Specialized in OSINT and Web security (CTF).",
            },
            opensource: {
                title: "Open Source & Community",
                description: "Involved in the open source ecosystem. Contributing to projects, maintaining packages, and building community tools.",
            },
        },
    },
    experience: {
        title: "Resume & Experience",
        items: [
            {
                role: "Freelance DevOps Engineer",
                company: "Various Projects",
                date: "Jun 2025 - Present",
                description: "DevOps processes for web development projects & Deployment of Azure IoT Edge on industrial applications.",
                tags: ["Freelance", "CI/CD", "Azure IoT"]
            },
            {
                role: "DevOps Engineer",
                company: "Mercor",
                date: "Jun 2024 - Jun 2025",
                description: "Training Large Language Models (LLMs) with a focus on complex DevOps scenarios, code analysis, and technical accuracy.",
                tags: ["LLM Training", "AI", "Python"]
            },
            {
                role: "DevOps Engineer & Technical Designer",
                company: "Viscacha Studios",
                date: "Sept 2021 - Jun 2025",
                description: "Standardized CI/CD systems reducing build times by 70% and architected scalable client-server infrastructure on AWS/K8s. Implemented data collection for 400k+ daily events and led technical communications with stakeholders.",
                tags: ["AWS", "CI/CD", "K8s", "Python", "Architecture"]
            },

        ]
    },
    contact: {
        title: "Get in Touch",
        text: "I'm always open to discussing tech, psychology, or new adventures. Feel free to reach out!",
    },
    aboutPage: {
        overline: "Feiko van Dijk - Technical & Game Designer",
        title: "Hello!",
        bio: {
            p1: "As a DevOps Engineer, I focus on building reliable systems and automating workflows. I specialize in setting up scalable cloud infrastructure and streamlining CI/CD pipelines, allowing development teams to focus on building features.",
            p2: "I am naturally curious and love diving deep into technology. Whether it's debugging containers, writing infrastructure-as-code, or renovating my house; I always look for the most efficient and sustainable solution.",
            p3: "With my background in technical psychology, I also consider the human side of DevOps. Tools and processes must not only be technically sound but also work intuitively for the people using them daily.",
            p4: "I strongly believe in the DevOps culture of collaboration and knowledge sharing. Outside of work, you'll likely find me in nature or on a climbing wall, always looking for a new challenge."
        },
        contactTitle: "Contact",
        contactText: "Please reach out to me at",
        skillsTitle: "Skills"
    }
};
