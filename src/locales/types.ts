export interface ExperienceItem {
    role: string;
    company: string;
    date: string;
    description: string;
    tags: string[];
}

export interface Translation {
    nav: {
        home: string;
        about: string;
        contact: string;
    };
    hero: {
        overline: string;
        title: string;
        titleGradient?: string;
        scalability?: string;
        subtitle: string;
        cta: string;
        secondaryCta: string;
    };
    services: {
        title: string;
        items: {
            cloud: {
                title: string;
                description: string;
            };
            cicd: {
                title: string;
                description: string;
            };
            security: {
                title: string;
                description: string;
            };
            opensource: {
                title: string;
                description: string;
            };
        };
    };
    experience: {
        title: string;
        items: ExperienceItem[];
    };
    contact: {
        title: string;
        text: string;
    };
    aboutPage: {
        overline: string;
        title: string;
        bio: {
            p1: string;
            p2: string;
            p3: string;
            p4: string;
        };
        contactTitle: string;
        contactText: string;
        skillsTitle: string;
    };
}
