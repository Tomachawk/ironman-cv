import {
    Briefcase,
    User,
    Code2,
    GraduationCap,
    Rocket,
    Cpu,
    FolderKanban,
    Box,
    Globe,
    Bot,
    Palette,
} from "lucide-react";

export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    location: string;
    points: string[];
};

export type ProjectItem = {
    name: string;
    description: string;
    tech?: string[];
    live?: string;
};

export type SkillGroup = {
    label: string;
    items: string[];
};

export type EducationItem = {
    school: string;
    degree: string;
    period: string;
    location: string;
};

export const items = [
    { id: "about", label: "O mnie", icon: User, angle: -90, radius: 205 },
    { id: "skills", label: "Umiejętności", icon: Code2, angle: -35, radius: 215 },
    { id: "projects", label: "Projekty", icon: FolderKanban, angle: 20, radius: 220 },
    { id: "experience", label: "Doświadczenie", icon: Briefcase, angle: 70, radius: 210 },
    { id: "education", label: "Edukacja", icon: GraduationCap, angle: 125, radius: 205 },
    { id: "goals", label: "Cele", icon: Rocket, angle: 180, radius: 215 },
    { id: "ai", label: "AI Workflow", icon: Cpu, angle: 235, radius: 220 },
] as const;

export const projectSubItems = [
    { id: "models3d", label: "Modele 3D", icon: Box, angle: -65, radius: 155 },
    { id: "websites", label: "Strony WWW", icon: Globe, angle: -5, radius: 165 },
    { id: "automation", label: "AI / Automatyzacje", icon: Bot, angle: 55, radius: 160 },
    { id: "ui", label: "UI / Koncepty", icon: Palette, angle: 120, radius: 150 },
] as const;

export const modelLibrary = [
    {
        id: "vegeta_funko",
        name: "Vegeta Funko",
        file: "/models/funko-vegeta.glb",
        description: "Styl Funko / chibi. Lekki model do prezentacji w webie.",
        scale: 1.45,
        position: [0, -0.55, 0] as [number, number, number],
    },
    {
        id: "vegeta_bust",
        name: "Vegeta Bust",
        file: "/models/ComfyUI_00018_.glb",
        description: "Popiersie w bardziej realistycznym stylu, z większą ilością detali.",
        scale: 1.1,
        position: [0, -0.35, 0] as [number, number, number],
    },
    {
        id: "Robo_Roblox",
        name: "Robo Roblox",
        file: "/models/ComfyUI_00015_.glb",
        description: "Model koncepcyjny w stylistyce stylizowanej / game-ready.",
        scale: 1.1,
        position: [0, -0.35, 0] as [number, number, number],
    },
    {
        id: "zombie",
        name: "Zombie",
        file: "/models/ComfyUI_00009_.glb",
        description: "Eksperyment z generowaniem postaci 3D na bazie obrazu.",
        scale: 1.1,
        position: [0, -0.35, 0] as [number, number, number],
    },
    {
        id: "future_robot",
        name: "Future Robot",
        file: "/models/ComfyUI_00006_.glb",
        description: "Futurystyczny koncept 3D przygotowany do prezentacji w przeglądarce.",
        scale: 1.1,
        position: [0, -0.35, 0] as [number, number, number],
    },
] as const;

export const sectionContent = {
    contact: {
        title: "Profil / Kontakt",
        name: "Dariusz Kuczkowski",
        role: "Web / AI / Projekty techniczne",
        location: "Wrocław",
        email: "tomachawk88@gmail.com",
        phone: "+48 731 913 497",
        availability: "Od zaraz",
        workMode: "Dowolny",
        summary:
            "Łączę techniczne podejście, praktyczne doświadczenie zawodowe oraz własne projekty webowe i AI. Szukam miejsca, w którym będę mógł rozwijać się projektowo i zdobywać doświadczenie komercyjne w IT.",
    },

    about: {
        title: "O mnie",
        paragraphs: [
            "Jestem osobą rozwijającą się w kierunku IT, ze szczególnym zainteresowaniem tworzeniem aplikacji webowych, interfejsów użytkownika oraz praktycznym wykorzystaniem narzędzi AI w pracy projektowej.",
            "Ukończyłem bootcamp Fullstack Developer, a zdobyte umiejętności rozwijam poprzez własne projekty. Tworzę i testuję rozwiązania łączące web, AI, modele 3D, automatyzację oraz eksperymenty z interfejsem.",
            "Posiadam również praktyczne doświadczenie w administracji strony internetowej, którą rozwijałem przez około 2 lata. Odpowiadałem za jej działanie, aktualizacje, rozwiązywanie problemów technicznych oraz utrzymanie serwisu dostępnego dla użytkowników.",
            "Szybko się uczę, dobrze odnajduję się w pracy zadaniowej i potrafię samodzielnie doprowadzić projekt od pomysłu do działającego rozwiązania.",
        ],
        highlight:
            "Bootcamp Fullstack Developer + projekty własne + administracja strony + AI / ComfyUI / modele 3D",
    },

    skills: {
        title: "Umiejętności",
        groups: [
            {
                label: "Web",
                items: [
                    "HTML, CSS, JavaScript (podstawy)",
                    "React / Next.js (podstawy)",
                    "Tworzenie interfejsów użytkownika",
                ],
            },
            {
                label: "AI",
                items: [
                    "ChatGPT – wsparcie developmentu",
                    "ComfyUI – grafika, eksperymenty 3D",
                    "Budowanie workflow AI",
                ],
            },
            {
                label: "Praca",
                items: [
                    "Samodzielność",
                    "Praca pod presją",
                    "Organizacja pracy",
                ],
            },
        ],
    },

    projects: {
        title: "Projekty",
        items: [
            {
                name: "Helpdesk System (Next.js)",
                description:
                    "System zgłoszeń (ticketów) z podziałem na widok użytkownika i administratora. Obsługa statusów, wyszukiwarka, usuwanie zgłoszeń z potwierdzeniem oraz zapis danych w localStorage.",
                tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
                live: "https://helpdesk-app-sepia.vercel.app/",
            },
            {
                name: "Interaktywne CV",
                description:
                    "Futurystyczne CV w formie aplikacji webowej z animacjami, HUD UI oraz integracją modeli 3D.",
            },
            {
                name: "Modele 3D + AI",
                description:
                    "Eksperymenty z generowaniem modeli 3D oraz integracją ich w aplikacjach webowych.",
            },
        ],
    },

    experience: {
        title: "Doświadczenie",
        items: [
            {
                company: "MMT IDEA",
                role: "Elektromonter / Brygadzista",
                period: "2023–2026",
                location: "Wrocław",
                points: [
                    "Usuwanie awarii",
                    "Obsługa infrastruktury",
                    "Praca pod presją czasu",
                ],
            },
        ],
    },

    education: {
        title: "Edukacja",
        items: [
            {
                school: "CodeBrainers",
                degree: "Fullstack Developer",
                period: "2020",
                location: "Certyfikat",
            },
        ],
    },

    ai: {
        title: "AI Workflow",
        items: [
            "Tworzenie projektów wspieranych AI",
            "Eksperymenty z ComfyUI",
            "Automatyzacja pracy",
        ],
    },

    goals: {
        title: "Cele",
        items: [
            "Wejście do IT",
            "Rozwój w web + AI",
            "Budowa portfolio",
        ],
    },

    models3d: {
        title: "Modele 3D",
        paragraphs: [
            "Prezentacja modeli 3D w aplikacji webowej.",
        ],
    },

    websites: {
        title: "Strony WWW",
        paragraphs: [
            "Projekty stron i interfejsów użytkownika.",
        ],
    },

    automation: {
        title: "Automatyzacje",
        paragraphs: [
            "Workflow AI i automatyzacja procesów.",
        ],
    },

    ui: {
        title: "UI / Koncepty",
        paragraphs: [
            "Eksperymenty z interfejsem użytkownika.",
        ],
    },
} as const;

export type SectionKey = keyof typeof sectionContent;