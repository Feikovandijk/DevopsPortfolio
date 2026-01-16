import { Translation } from './types';

export const nl: Translation = {
    nav: {
        home: "Home",
        about: "Over mij",
        blog: "Blog",
        contact: "Contact",
    },
    hero: {
        overline: "DevOps Engineer | Technical Developer | MSc Game Technologies",
        title: "Hi, Ik ben Feiko.",
        subtitle: "Van het versnellen van build-processen tot het beveiligen van cloud-omgevingen; ik combineer digitale expertise met cyberpsychologie om systemen te bouwen die schaalbaar, veilig en betrouwbaar werken.",
        cta: "Neem Contact Op",
        secondaryCta: "Over Mij",
    },
    services: {
        title: "Technische Expertise",
        items: {
            cloud: {
                title: "Cloud & Infra",
                description: "Ontwerpen van robuuste client-server architecturen gericht op schaalbaarheid. Ervaring met GCP en Azure IoT.",
            },
            cicd: {
                title: "CI/CD & Automatisering",
                description: "Integreren van continue test- en deployment pipelines. Opschalen van bouwprocessen om compilatietijd te verminderen.",
            },
            security: {
                title: "Observability & Security",
                description: "Implementeren van tooling voor dataverzameling van 400k+ dagelijkse events. Gespecialiseerd in OSINT en Web security (CTF).",
            },
            opensource: {
                title: "Open Source & Community",
                description: "Betrokken bij het open source ecosysteem. Bijdragen aan projecten, onderhouden van packages en bouwen van community tools.",
            },
        },
    },
    experience: {
        title: "CV & Ervaring",
        items: [
            {
                role: "Freelance DevOps Engineer",
                company: "Diverse Projecten",
                date: "Jun 2025 - Heden",
                description: "DevOps processen voor web development projecten & Deployment van Azure IoT Edge op industriële applicaties.",
                tags: ["Freelance", "CI/CD", "Azure IoT"]
            },
            {
                role: "DevOps Engineer",
                company: "Mercor",
                date: "Jun 2024 - Jun 2025",
                description: "Training van Large Language Models (LLMs) met een focus op complexe DevOps-vraagstukken, code-analyse en technische accuraatheid.",
                tags: ["LLM Training", "AI", "Python"]
            },
            {
                role: "DevOps Engineer & Technical Designer",
                company: "Viscacha Studios",
                date: "Sept 2021 - Jun 2025",
                description: "Gestandaardiseerde CI/CD-systemen opgezet die bouwtijden met 70% verminderden en schaalbare client-server infrastructuur ontworpen op K8s. Dataverzameling geïmplementeerd voor 400k+ dagelijkse events en de technische communicatie met stakeholders geleid.",
                tags: ["CI/CD", "K8s", "Python", "Architectuur"]
            },

        ]
    },
    contact: {
        title: "Contact",
        text: "Ik sta altijd open voor een goed gesprek over tech, design of nieuwe avonturen. Neem gerust contact op!",
    },
    aboutPage: {
        overline: "DevOps Engineer | Technical Developer | MSc Game Technologies",
        title: "Hallo!",
        bio: {
            p1: "Als DevOps Engineer richt ik mij op het bouwen van betrouwbare systemen en het automatiseren van workflows. Ik focus op het opzetten van schaalbare cloud-infrastructuur en het stroomlijnen van CI/CD-pipelines, zodat development teams zich kunnen richten op het bouwen van features.",
            p2: "Ik ben van nature nieuwsgierig en duik graag diep de techniek in. Of het nu gaat om het debuggen van containers, het schrijven van infrastructure-as-code, of het renoveren van mijn huis; ik zoek altijd naar de meest efficiënte en duurzame oplossing.",
            p3: "Met mijn achtergrond in technische psychologie kijk ik ook naar de menselijke kant van DevOps. Tools en processen moeten niet alleen technisch kloppen, maar ook intuïtief werken voor de mensen die er dagelijks mee werken.",
            p4: "Ik geloof sterk in de DevOps-cultuur van samenwerking en kennisdeling. Buiten het werk vind je me waarschijnlijk in de natuur of aan een klimwand, altijd op zoek naar een nieuwe uitdaging."
        },
        contactTitle: "Contact",
        contactText: "Neem contact op via",
        skillsTitle: "Vaardigheden"
    }
};
