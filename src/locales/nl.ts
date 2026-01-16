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
                description: "Ontwerpen van robuuste client-server architecturen gericht op schaalbaarheid. Ervaring met AWS, GCP en Azure IoT.",
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
                company: "Outlier, Mercer",
                date: "Sept 2024 - Heden",
                description: "IoT DevOps in een industriële setting. Focus op betrouwbaarheid en sensor data flow.",
                tags: ["IoT", "DevOps", "Betrouwbaarheid"]
            },
            {
                role: "DevOps Engineer & Technical Designer",
                company: "Viscacha Studios",
                date: "Sept 2021 - Jun 2025",
                description: "Gestandaardiseerde CI/CD-systemen opgezet die bouwtijden met 70% verminderden en schaalbare client-server infrastructuur ontworpen op AWS/K8s. Dataverzameling geïmplementeerd voor 400k+ dagelijkse events en de technische communicatie met stakeholders geleid.",
                tags: ["AWS", "CI/CD", "K8s", "Python", "Architectuur"]
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
            p1: "Ik ben een DevOps Engineer die ervan houdt om uitdagingen om te zetten in boeiende ervaringen. Ik heb het geluk gehad aan diverse projecten te werken, van coderen tot gameplay ontwerpen, en elk project heeft me iets nieuws geleerd. Als generalist leer ik snel, pas ik me makkelijk aan en gebruik ik mijn brede ervaring om elk project vorm te geven tot iets fantastisch.",
            p2: "Ik ben van nature nieuwsgierig, of ik nu lastige softwareproblemen oplos of in praktische uitdagingen duik zoals autoprojecten en huisrenovaties (en af en toe iets 'repareren' wat niet kapot was houdt het leven interessant). Elk onconventioneel project is een kans om iets nieuws te leren.",
            p3: "Ik heb interesse in hoe ontwerpkeuzes gebruikersgedrag beïnvloeden. Mijn masterscriptie dook in hoe singleplayer survival games \"echte wereld\"-ervaringen kunnen simuleren en hoe multiplayer-elementen spelervaringen diepgaand kunnen veranderen en verbeteren.",
            p4: "Ik hecht veel waarde aan samenwerking en geloof dat geweldige producten worden gebouwd door teams die ideeën delen en elkaar steunen. Als ik niet verdiept ben in software of game development, vind je me waarschijnlijk buiten, rotsen aan het beklimmen :)"
        },
        contactTitle: "Contact",
        contactText: "Neem contact op via",
        skillsTitle: "Vaardigheden"
    }
};
