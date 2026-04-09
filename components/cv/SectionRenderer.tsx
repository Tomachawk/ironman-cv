"use client";

import {
    sectionContent,
    SectionKey,
    ExperienceItem,
    EducationItem,
    ProjectItem,
    SkillGroup,
} from "@/data/cvData";

export default function SectionRenderer({ active }: { active: SectionKey }) {
    const current = sectionContent[active] as any;

    if (!current) {
        return (
            <div className="text-sm text-slate-300">
                Brak danych dla sekcji: {active}
            </div>
        );
    }

    if (active === "contact") {
        return (
            <>
                <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                    Profil główny
                </div>

                <div className="mt-4 flex items-start gap-4">
                    <div className="h-24 w-24 overflow-hidden rounded-2xl border border-cyan-300/20">
                        <img
                            src="/images/profile.jpg"
                            alt="Dariusz Kuczkowski"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <div className="text-2xl font-semibold text-cyan-50">
                            {current.name}
                        </div>
                        <div className="mt-1 text-sm text-cyan-200/70">
                            {current.role}
                        </div>
                    </div>
                </div>

                <div className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                    <p>
                        <span className="text-cyan-200">Lokalizacja:</span> {current.location}
                    </p>
                    <p>
                        <span className="text-cyan-200">Email:</span> {current.email}
                    </p>
                    <p>
                        <span className="text-cyan-200">Telefon:</span> {current.phone}
                    </p>
                    <p>
                        <span className="text-cyan-200">Dostępność:</span> {current.availability}
                    </p>
                    <p>
                        <span className="text-cyan-200">Tryb pracy:</span> {current.workMode}
                    </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                    {current.summary}
                </p>
            </>
        );
    }

    if (current.items && Array.isArray(current.items)) {
        const firstItem = current.items[0];

        // EXPERIENCE
        if (firstItem?.company) {
            return (
                <>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                        Moduł aktywny
                    </div>

                    <div className="mt-4 text-2xl font-semibold text-cyan-50">
                        {current.title}
                    </div>

                    <div className="mt-5 space-y-5">
                        {current.items.map((job: ExperienceItem, index: number) => (
                            <div
                                key={index}
                                className="border-b border-cyan-300/10 pb-4 last:border-b-0"
                            >
                                <div className="text-base font-semibold text-cyan-100">
                                    {job.company} – {job.role}
                                </div>

                                <div className="mt-1 text-sm text-cyan-300/70">
                                    {job.location} • {job.period}
                                </div>

                                <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-300">
                                    {job.points.map((p: string, i: number) => (
                                        <li key={i}>• {p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            );
        }

        // EDUCATION
        if (firstItem?.school) {
            return (
                <>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                        Moduł aktywny
                    </div>

                    <div className="mt-4 text-2xl font-semibold text-cyan-50">
                        {current.title}
                    </div>

                    <div className="mt-5 space-y-4">
                        {current.items.map((edu: EducationItem, index: number) => (
                            <div
                                key={index}
                                className="border-b border-cyan-300/10 pb-4 last:border-b-0"
                            >
                                <div className="text-base font-semibold text-cyan-100">
                                    {edu.school}
                                </div>

                                <div className="mt-1 text-sm leading-6 text-slate-300">
                                    {edu.degree}
                                </div>

                                <div className="mt-1 text-sm text-cyan-300/70">
                                    {edu.location} • {edu.period}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            );
        }

        // PROJECTS
        if (firstItem?.name) {
            return (
                <>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                        Moduł aktywny
                    </div>

                    <div className="mt-4 text-2xl font-semibold text-cyan-50">
                        {current.title}
                    </div>

                    <div className="mt-5 space-y-5">
                        {current.items.map((project: ProjectItem, index: number) => (
                            <div
                                key={index}
                                className="border-b border-cyan-300/10 pb-4 last:border-b-0"
                            >
                                <div className="text-base font-semibold text-cyan-100">
                                    {project.name}
                                </div>

                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    {project.description}
                                </p>

                                {project.tech && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-100"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-3 inline-block text-sm text-cyan-300 underline hover:text-cyan-100"
                                    >
                                        🔗 Zobacz demo
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 ml-4 inline-block text-sm text-cyan-400 underline hover:text-cyan-200"
                                    >
                                        💻 Kod źródłowy
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            );
        }

        // LISTA STRINGÓW
        if (typeof firstItem === "string") {
            return (
                <>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                        Moduł aktywny
                    </div>

                    <div className="mt-4 text-2xl font-semibold text-cyan-50">
                        {current.title}
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                        {current.items.map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                        ))}
                    </ul>
                </>
            );
        }
    }

    // GROUPS
    if (current.groups) {
        return (
            <>
                <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                    Moduł aktywny
                </div>

                <div className="mt-4 text-2xl font-semibold text-cyan-50">
                    {current.title}
                </div>

                <div className="mt-5 space-y-5">
                    {current.groups.map((group: SkillGroup, index: number) => (
                        <div key={index}>
                            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">
                                {group.label}
                            </div>

                            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-300">
                                {group.items.map((item: string, i: number) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    // PARAGRAPHS
    if (current.paragraphs) {
        return (
            <>
                <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                    Moduł aktywny
                </div>

                <div className="mt-4 text-2xl font-semibold text-cyan-50">
                    {current.title}
                </div>

                <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
                    {current.paragraphs.map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>

                {current.highlight && (
                    <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-3 text-sm leading-6 text-cyan-100">
                        {current.highlight}
                    </div>
                )}
            </>
        );
    }

    return null;
}