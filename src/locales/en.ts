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
        secondaryCta: "Using psychology in tech?",
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
                company: "Outlier, Mercer",
                date: "Sept 2024 - Present",
                description: "IoT DevOps in an industrial setting. Focusing on reliability and sensor data flow.",
                tags: ["IoT", "DevOps", "Reliability"]
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
            p1: "I'm a Technical Designer and DevOps Engineer who loves turning challenges into engaging experiences. I've been lucky enough to have worked on a variety of projects, from coding to crafting gameplay, and each one has taught me something new. As a generalist, I'm quick to learn, adapt, and use my diverse experience to help shape any project into something fantastic.",
            p2: "I'm naturally curious, whether I'm solving tricky software issues or diving into hands-on challenges like car projects and home renovations (and occasionally 'fixing' something that wasn't broken keeps life interesting). Every unconventional project is an opportunity to learn something new.",
            p3: "I also have a deep interest in understanding how design changes influences user behavior. My Master's thesis dove into how singleplayer survival games can simulate \"real-world\" experiences and how multiplayer elements can deeply change and enhance game experiences.",
            p4: "I value collaboration and believe that great games are built by teams who share ideas and support each other. When I'm not immersed in game development, you'll likely find me outdoors, climbing rocks and embracing new adventures."
        },
        contactTitle: "Contact",
        contactText: "Please reach out to me at",
        skillsTitle: "Skills"
    }
};
