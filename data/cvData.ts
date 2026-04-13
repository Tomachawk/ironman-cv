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
    Gamepad2,
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
    github?: string;
    image?: string;
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
    { id: "games", label: "Gry", icon: Gamepad2, angle: 120, radius: 150 },
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
                label: "Frontend",
                items: [
                    "HTML, CSS, JavaScript",
                    "React / Next.js",
                    "Tworzenie interfejsów użytkownika",
                    "Responsywność (RWD)",
                ],
            },
            {
                label: "Backend",
                items: [
                    "Next.js API routes",
                    "Praca z bazą danych (Prisma)",
                    "Podstawy REST API",
                ],
            },
            {
                label: "Baza danych",
                items: [
                    "PostgreSQL (Supabase)",
                    "SQL (podstawy)",
                    "Operacje CRUD",
                ],
            },
            {
                label: "Dodatkowe",
                items: [
                    "Python (podstawy)",
                    "Django (podstawy)",
                    "PHP (podstawy)",
                ],
            },
            {
                label: "AI / Narzędzia",
                items: [
                    "ChatGPT – wsparcie developmentu",
                    "ComfyUI – grafika i modele 3D",
                    "Budowanie workflow AI",
                ],
            },
            {
                label: "Praca",
                items: [
                    "Samodzielność",
                    "Rozwiązywanie problemów",
                    "Organizacja pracy",
                ],
            },
        ],
    },

    projects: {
        title: "Projekty",
        paragraphs: [
            "Wybierz kategorię projektu z modułu „Projekty”: Strony WWW, Modele 3D, AI / Automatyzacje lub Gry.",
            "Każda kategoria pokazuje osobne realizacje i eksperymenty."
        ],
    },

    experience: {
        title: "Doświadczenie",
        items: [
            {
                company: "MMT IDEA sp. z o.o. sp. k.",
                role: "Elektromonter – pełnienie funkcji brygadzisty",
                period: "12.2024 – 02.2026",
                location: "Wrocław",
                points: [
                    "Obsługa tramwajowych stacji prostownikowych",
                    "Praca pod presją czasu z zachowaniem wysokiej jakości wykonywanych zadań",
                    "Przekazywanie istotnych informacji w sposób jasny, konkretny i zrozumiały",
                    "Monitorowanie realizacji zadań i bieżące raportowanie postępów pracy",
                    "Samodzielna realizacja zadań zgodnie z wyznaczonymi celami i wymaganiami",
                    "Skuteczne planowanie czasu oraz ustalanie priorytetów dla codziennych obowiązków",
                ],
            },
            {
                company: "Ergopak",
                role: "Operator maszyn CMD",
                period: "11.2024 – 12.2024",
                location: "Krępice",
                points: [
                    "Obsługa zgrzewarek typu CMD",
                ],
            },
            {
                company: "MMT IDEA sp. z o.o. sp. k.",
                role: "Elektromonter – pełnienie funkcji brygadzisty",
                period: "01.2023 – 10.2024",
                location: "Wrocław",
                points: [
                    "Usuwanie usterek oraz awarii tramwajowej sieci trakcyjnej",
                    "Przegląd oraz konserwacja tramwajowej sieci trakcyjnej",
                    "Obsługa oraz utrzymanie zajezdni na terenie miasta",
                ],
            },
            {
                company: "Wadex",
                role: "Ślusarz",
                period: "09.2021 – 12.2022",
                location: "Wrocław",
                points: [
                    "Spawanie oraz montaż systemów kominowych",
                ],
            },
            {
                company: "Ergopak",
                role: "Operator wytłaczarek tworzyw sztucznych",
                period: "09.2014 – 09.2021",
                location: "Wrocław",
                points: [
                    "Obsługa wytłaczarek tworzyw sztucznych w produkcji folii",
                ],
            },
        ],
    },

    education: {
        title: "Edukacja",
        items: [
            {
                school: "CodeBrainers",
                degree: "Bootcamp Fullstack Developer",
                period: "2020",
                location: "Szkolenie intensywne",
            },
            {
                school: "Zespół Szkół Budowlanych we Wrocławiu",
                degree: "Technolog robót wykończeniowych w budownictwie",
                period: "2004–2007",
                location: "Wrocław",
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
            "Kategoria poświęcona modelom 3D i ich prezentacji w aplikacji webowej.",
            "Po kliknięciu uruchamia się duży podgląd modeli z możliwością przełączania kolejnych obiektów."
        ],
    },

    websites: {
        title: "Strony WWW",
        items: [
            {
                name: "Helpdesk System (Next.js)",
                description:
                    "System zgłoszeń z podziałem na widok użytkownika i administratora. Obsługa statusów, wyszukiwarka, usuwanie zgłoszeń z potwierdzeniem oraz zapis danych.",
                tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
                live: "https://helpdesk-app-sepia.vercel.app/",
                github: "https://github.com/Tomachawk/helpdesk-app",
                image: "/images/helpdesk.png",
            },
            {
                name: "Service Booking Portal",
                description:
                    "Full-stack aplikacja do zarządzania rezerwacjami z rolami użytkownika i administratora. Rejestracja, logowanie, tworzenie rezerwacji, panel admina, filtrowanie, sortowanie i statystyki. Projekt pokazuje moje umiejętności pracy z backendem, bazą danych oraz logiką aplikacji.",
                tech: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "Tailwind CSS"],
                live: "https://service-booking-portal.vercel.app/",
                github: "https://github.com/Tomachawk/service-booking-portal",
                image: "/images/booking.png",
            },
        ],
    },

    automation: {
        title: "Automatyzacje",
        paragraphs: [
            "Workflow AI i automatyzacja procesów.",
        ],
    },

    games: {
        title: "Gry",
        items: [
            {
                name: "Space Invaders (w budowie)",
                description:
                    "Mini gra inspirowana klasycznym Space Invaders. Projekt będzie rozwijany o sterowanie statkiem, strzelanie, przeciwników i logikę kolizji.",
                tech: ["Next.js", "React", "TypeScript"],
            },
        ],
    },
} as const;

export type SectionKey = keyof typeof sectionContent;