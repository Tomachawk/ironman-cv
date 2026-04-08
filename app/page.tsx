"use client";

import React, { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const items = [
  { id: "about", label: "O mnie", icon: User, angle: -90, radius: 205 },
  { id: "skills", label: "Umiejętności", icon: Code2, angle: -35, radius: 215 },
  { id: "projects", label: "Projekty", icon: FolderKanban, angle: 20, radius: 220 },
  { id: "experience", label: "Doświadczenie", icon: Briefcase, angle: 70, radius: 210 },
  { id: "education", label: "Edukacja", icon: GraduationCap, angle: 125, radius: 205 },
  { id: "goals", label: "Cele", icon: Rocket, angle: 180, radius: 215 },
  { id: "ai", label: "AI Workflow", icon: Cpu, angle: 235, radius: 220 },
] as const;

const projectSubItems = [
  { id: "models3d", label: "Modele 3D", icon: Box, angle: -65, radius: 155 },
  { id: "websites", label: "Strony WWW", icon: Globe, angle: -5, radius: 165 },
  { id: "automation", label: "AI / Automatyzacje", icon: Bot, angle: 55, radius: 160 },
  { id: "ui", label: "UI / Koncepty", icon: Palette, angle: 120, radius: 150 },
] as const;

const modelLibrary = [
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

const sectionContent = {
  about: {
    title: "O mnie",
    paragraphs: [
      "Jestem osobą rozwijającą się w kierunku IT, ze szczególnym zainteresowaniem tworzeniem aplikacji webowych, interfejsów użytkownika oraz praktycznym wykorzystaniem narzędzi AI w pracy projektowej.",
      "Ukończyłem bootcamp Fullstack Developer, a zdobyte umiejętności rozwijam poprzez własne projekty. Tworzę i testuję rozwiązania łączące web, AI, modele 3D, automatyzację oraz eksperymenty z interfejsem.",
      "Posiadam również praktyczne doświadczenie w administracji strony internetowej, którą rozwijałem przez około 2 lata. Odpowiadałem za jej działanie, aktualizacje, rozwiązywanie problemów technicznych oraz utrzymanie serwisu dostępnego dla użytkowników.",
      "Szybko się uczę, dobrze odnajduję się w pracy zadaniowej i potrafię samodzielnie doprowadzić projekt od pomysłu do działającego rozwiązania. W wolnym czasie regularnie nadrabiam braki i rozwijam własne umiejętności.",
    ],
    highlight:
      "Bootcamp Fullstack Developer + prywatne projekty + doświadczenie administracyjne + AI, ComfyUI i modele 3D.",
  },

  skills: {
    title: "Umiejętności",
    groups: [
      {
        label: "Web i projekty",
        items: [
          "Podstawy HTML, CSS, JavaScript i React",
          "Tworzenie i rozwijanie prostych aplikacji oraz interfejsów webowych",
          "Administracja i utrzymanie strony internetowej",
          "Bardzo dobra znajomość obsługi komputera i środowiska pracy projektowej",
        ],
      },
      {
        label: "AI i narzędzia",
        items: [
          "ChatGPT – wsparcie w nauce, debugowaniu, prototypowaniu i rozwijaniu kodu",
          "ComfyUI – generowanie grafik, eksperymenty z modelami 3D i workflow AI",
          "Tworzenie assetów wizualnych i testowanie pipeline od pomysłu do efektu końcowego",
          "Praktyczne wykorzystanie AI jako narzędzia wspierającego pracę projektową",
        ],
      },
      {
        label: "Praktyczne",
        items: [
          "Szybkie uczenie się i samodzielne nadrabianie braków",
          "Umiejętność pracy pod presją czasu",
          "Dobra organizacja pracy i odpowiedzialność za zadania",
          "Komunikacja i przekazywanie informacji w jasny sposób",
        ],
      },
      {
        label: "Dodatkowe",
        items: [
          "Znajomość zasad BHP",
          "Umiejętność obsługi różnych maszyn i urządzeń",
          "Angielski na poziomie A2",
        ],
      },
    ],
  },

  projects: {
    title: "Projekty i doświadczenie praktyczne",
    items: [
      {
        name: "dblektor.eu – administracja strony internetowej",
        description:
          "Administracja i rozwój serwisu internetowego przez około 2 lata. Zarządzanie treścią, utrzymanie działania strony, rozwiązywanie problemów technicznych oraz dbanie o dostępność serwisu. Strona zyskiwała popularność i była polecana na forach oraz grupach Facebook. Projekt zakończony z powodu kosztów utrzymania serwera.",
      },
      {
        name: "Interaktywne CV – aplikacja webowa",
        description:
          "Stworzenie futurystycznego CV w formie aplikacji webowej inspirowanej interfejsem Iron Man. Projekt łączy animowany UI, logikę aplikacji, modele 3D oraz prezentację portfolio w niestandardowej formie.",
      },
      {
        name: "Modele 3D i AI workflow (ComfyUI)",
        description:
          "Tworzenie modeli 3D na podstawie obrazów przy użyciu narzędzi AI, eksperymenty z workflow ComfyUI oraz integracja modeli w aplikacji webowej. Projekt pokazuje praktyczne łączenie webu, AI i assetów 3D.",
      },
    ],
  },

  experience: {
    title: "Doświadczenie zawodowe",
    items: [
      {
        company: "MMT IDEA sp. z o.o. sp. k.",
        role: "Elektromonter / Brygadzista",
        period: "01.2023 – 10.2024",
        location: "Wrocław",
        points: [
          "Brygadzista pogotowia sieciowego",
          "Usuwanie usterek oraz awarii tramwajowej sieci trakcyjnej",
          "Przeglądy i konserwacja tramwajowej sieci trakcyjnej",
          "Obsługa oraz utrzymanie zajezdni na terenie miasta",
        ],
      },
      {
        company: "Ergopak",
        role: "Operator maszyn CMD",
        period: "11.2024 – 12.2024",
        location: "Krępice",
        points: [
          "Obsługa zgrzewarek typu CMD",
          "Praca przy procesie produkcyjnym z naciskiem na dokładność i powtarzalność",
        ],
      },
      {
        company: "MMT IDEA sp. z o.o. sp. k.",
        role: "Elektromonter / Brygadzista",
        period: "12.2024 – 02.2026",
        location: "Wrocław",
        points: [
          "Brygadzista w pogotowiu stacyjnym",
          "Obsługa tramwajowych stacji prostownikowych",
          "Diagnostyka i usuwanie usterek infrastruktury",
          "Praca pod presją czasu przy zachowaniu jakości i odpowiedzialności",
          "Koordynacja zadań oraz przekazywanie kluczowych informacji w zespole",
        ],
      },
    ],
    summary:
      "Doświadczenie techniczne nauczyło mnie odpowiedzialności, pracy pod presją czasu, szybkiego reagowania i działania w oparciu o konkretne procedury.",
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
      {
        school: "ZSB",
        degree: "Technolog Robót Wykończeniowych w Budownictwie / Technolog Budowlany",
        period: "2004 – 2007",
        location: "Wykształcenie",
      },
    ],
    extra: [
      "Nauka własna i rozwój projektowy w obszarze webu, AI, modeli 3D i narzędzi internetowych",
    ],
  },

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

  ai: {
    title: "AI Workflow",
    items: [
      "Wykorzystuję AI do wspierania pracy projektowej — od pomysłu, przez prototyp, po iteracyjne ulepszanie rozwiązania",
      "Tworzę grafiki, modele 3D i eksperymentalne assety przy użyciu ComfyUI oraz innych narzędzi AI",
      "Używam AI jako wsparcia w nauce, debugowaniu kodu, generowaniu pomysłów i przyspieszaniu pracy",
      "Traktuję AI jako narzędzie wspomagające, a nie zamiennik zrozumienia logiki i działania projektu",
    ],
  },

  goals: {
    title: "Cele",
    items: [
      "Rozwijać się w obszarze webu, aplikacji, AI i projektów cyfrowych",
      "Wejść do środowiska, w którym liczy się praktyka, nauka i realny progres",
      "Łączyć tworzenie stron, interfejsów, automatyzacji i assetów AI w spójne projekty",
      "Budować portfolio, które pokazuje nie tylko wygląd, ale też działanie, proces i pomysł",
    ],
  },

  models3d: {
    title: "Modele 3D",
    paragraphs: [
      "Po lewej stronie pojawia się duży podgląd modeli 3D. Możesz przełączać kolejne modele przyciskami Prev / Next.",
      "Modele są częścią moich eksperymentów z AI, assetami, ComfyUI i prezentacją projektów w przeglądarce.",
    ],
  },

  websites: {
    title: "Strony WWW",
    paragraphs: [
      "Tutaj mogę prezentować landing page, dashboardy, interfejsy i inne projekty webowe.",
      "Interesuje mnie tworzenie stron, które nie tylko wyglądają dobrze, ale też mają charakter, logikę działania i wyróżniają się sposobem prezentacji.",
    ],
  },

  automation: {
    title: "AI / Automatyzacje",
    paragraphs: [
      "Miejsce na automatyzacje, workflow AI, narzędzia wspierające pracę i eksperymenty z przyspieszaniem procesów.",
    ],
  },

  ui: {
    title: "UI / Koncepty",
    paragraphs: [
      "Tutaj mogę pokazać futurystyczne interfejsy, koncepty produktów i wizualne eksperymenty z webem oraz prezentacją projektów.",
    ],
  },
} as const;

type SectionKey = keyof typeof sectionContent;

function polarToCartesian(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}

function HudRing({ expanded }: { expanded: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        animate={{ rotate: expanded ? 360 : 0, scale: expanded ? 1 : 0.84 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        className="absolute h-[300px] w-[300px] rounded-full border border-cyan-400/30"
      />
      <motion.div
        animate={{ rotate: expanded ? -360 : 0 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="absolute h-[365px] w-[365px] rounded-full border-2 border-dashed border-cyan-300/25"
      />
      <motion.div
        animate={{ rotate: expanded ? 360 : 0 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="absolute h-[470px] w-[470px] rounded-full border border-cyan-500/15"
      />
      <div className="absolute h-[560px] w-[560px] rounded-full bg-cyan-400/5 blur-3xl" />
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-cyan-400/20 bg-slate-950/60 px-4 py-3 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur"
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-cyan-100">{value}</div>
    </motion.div>
  );
}

function FallbackModel() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh castShadow receiveShadow rotation={[0.4, 0.6, 0]}>
        <torusKnotGeometry args={[0.9, 0.28, 180, 24]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#0ea5e9"
          emissiveIntensity={0.35}
          metalness={0.65}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function GlbModel({
  url,
  scale,
  position,
}: {
  url: string;
  scale: number;
  position: [number, number, number];
}) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} position={position} />;
}

function BigModelViewer({
  model,
  onPrev,
  onNext,
  onClose,
}: {
  model?: (typeof modelLibrary)[number];
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const hasModel = !!model;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 z-20 bg-slate-950/20"
      />

      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute left-8 top-[150px] z-30 w-[520px]"
      >
        <div className="overflow-hidden rounded-[34px] border border-cyan-300/20 bg-slate-950/70 shadow-[0_0_45px_rgba(34,211,238,0.14)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-cyan-300/10 px-6 py-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
                3D Showcase
              </div>
              <div className="mt-1 text-2xl font-semibold text-cyan-50">
                {hasModel ? model.name : "Model testowy"}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-cyan-200/70">obrót myszką</div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/70 text-cyan-100 hover:border-cyan-300/50"
              >
                X
              </motion.button>
            </div>
          </div>

          <div className="h-[520px] w-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_55%)]">
            <Canvas camera={{ position: [0, 0, 5], fov: 42 }} shadows>
              <ambientLight intensity={1.25} />
              <directionalLight position={[5, 6, 5]} intensity={2.3} castShadow />
              <directionalLight position={[-4, 2, -3]} intensity={1.2} />

              <Suspense fallback={null}>
                {hasModel ? (
                  <GlbModel
                    url={model.file}
                    scale={model.scale}
                    position={model.position}
                  />
                ) : (
                  <FallbackModel />
                )}
                <Environment preset="city" />
              </Suspense>

              <OrbitControls
                enablePan={false}
                minDistance={3}
                maxDistance={8}
                autoRotate={!hasModel}
                autoRotateSpeed={1.4}
              />
            </Canvas>
          </div>

          <div className="border-t border-cyan-300/10 px-6 py-4">
            <div className="text-sm leading-6 text-slate-300">
              {hasModel
                ? model.description
                : "Nie znaleziono jeszcze modelu. Po dodaniu pliku .glb pojawi się tutaj Twój obiekt."}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={onPrev}
                className="flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-950/70 px-4 py-2 text-sm text-cyan-100 hover:border-cyan-300/50"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </motion.button>

              <div className="text-center text-sm text-cyan-200/75">
                {hasModel ? model.name : "Brak modelu"}
              </div>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={onNext}
                className="flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-950/70 px-4 py-2 text-sm text-cyan-100 hover:border-cyan-300/50"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SectionRenderer({ active }: { active: SectionKey }) {
  const current = sectionContent[active] as any;

  if (active === "contact") {
    return (
      <>
        <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
          Profil główny
        </div>

        <div className="mt-4 flex items-start gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-2xl border border-cyan-300/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt="Dariusz Kuczkowski"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="text-2xl font-semibold text-cyan-50">{current.name}</div>
            <div className="mt-1 text-sm text-cyan-200/70">{current.role}</div>
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

        <p className="mt-5 text-sm leading-6 text-slate-300">{current.summary}</p>
      </>
    );
  }

  if (current.items && Array.isArray(current.items)) {
    const firstItem = current.items[0];

    if (firstItem?.company) {
      return (
        <>
          <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
            Moduł aktywny
          </div>
          <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>

          <div className="mt-5 space-y-5">
            {current.items.map((job: any, index: number) => (
              <div key={index} className="border-b border-cyan-300/10 pb-4 last:border-b-0">
                <div className="text-base font-semibold text-cyan-100">
                  {job.company} – {job.role}
                </div>
                <div className="mt-1 text-sm text-cyan-300/70">
                  {job.location} • {job.period}
                </div>
                <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-300">
                  {job.points.map((point: string, i: number) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {current.summary && (
            <p className="mt-4 text-sm leading-6 text-slate-300">{current.summary}</p>
          )}
        </>
      );
    }

    if (firstItem?.school) {
      return (
        <>
          <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
            Moduł aktywny
          </div>
          <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>

          <div className="mt-5 space-y-4">
            {current.items.map((edu: any, index: number) => (
              <div key={index} className="border-b border-cyan-300/10 pb-4 last:border-b-0">
                <div className="text-base font-semibold text-cyan-100">{edu.school}</div>
                <div className="mt-1 text-sm leading-6 text-slate-300">{edu.degree}</div>
                <div className="mt-1 text-sm text-cyan-300/70">
                  {edu.location} • {edu.period}
                </div>
              </div>
            ))}
          </div>

          {current.extra && (
            <ul className="mt-4 space-y-1 text-sm leading-6 text-slate-300">
              {current.extra.map((point: string, i: number) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          )}
        </>
      );
    }

    if (firstItem?.name) {
      return (
        <>
          <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
            Moduł aktywny
          </div>
          <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>

          <div className="mt-5 space-y-5">
            {current.items.map((project: any, index: number) => (
              <div key={index} className="border-b border-cyan-300/10 pb-4 last:border-b-0">
                <div className="text-base font-semibold text-cyan-100">{project.name}</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (typeof firstItem === "string") {
      return (
        <>
          <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
            Moduł aktywny
          </div>
          <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
            {current.items.map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </>
      );
    }
  }

  if (current.groups) {
    return (
      <>
        <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
          Moduł aktywny
        </div>
        <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>

        <div className="mt-5 space-y-5">
          {current.groups.map((group: any, index: number) => (
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

  if (current.paragraphs) {
    return (
      <>
        <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
          Moduł aktywny
        </div>
        <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>

        <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
          {current.paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
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

  if (current.text) {
    return (
      <>
        <div className="text-[11px] uppercase tracking-[0.4em] text-cyan-300/60">
          Moduł aktywny
        </div>
        <div className="mt-4 text-2xl font-semibold text-cyan-50">{current.title}</div>
        <p className="mt-4 text-sm leading-6 text-slate-300">{current.text}</p>
      </>
    );
  }

  return null;
}

export default function IronManCvLanding() {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState<SectionKey>("about");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  const selectedModel = modelLibrary[selectedModelIndex];

  const handleMainTileClick = (id: SectionKey) => {
    if (id === "projects") {
      setProjectsOpen((prev) => {
        const next = !prev;
        if (next) setActive("projects");
        return next;
      });
      return;
    }

    setProjectsOpen(false);
    setActive(id);
  };

  const handleProjectSubClick = (id: SectionKey) => {
    setProjectsOpen(false);
    setActive(id);
  };

  const handlePrevModel = () => {
    setSelectedModelIndex((prev) =>
      prev === 0 ? modelLibrary.length - 1 : prev - 1
    );
  };

  const handleNextModel = () => {
    setSelectedModelIndex((prev) =>
      prev === modelLibrary.length - 1 ? 0 : prev + 1
    );
  };

  const projectsPos = polarToCartesian(20, 220);

  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_32%),linear-gradient(to_bottom,rgba(10,15,30,0.95),rgba(2,6,23,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] items-center justify-center px-6 py-10">
        <HudRing expanded={started} />

        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="relative flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.68 }}
                onClick={() => setStarted(true)}
                className="group relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/80 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
              >
                <div className="absolute inset-3 rounded-full border border-cyan-300/40" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-t-2 border-cyan-300/70"
                />
                <div className="text-center">
                  <div className="text-xs uppercase tracking-[0.5em] text-cyan-300/70">
                    System
                  </div>
                  <div className="mt-2 text-3xl font-bold tracking-[0.25em] text-cyan-100">
                    START
                  </div>
                </div>
              </motion.button>

              <p className="mt-8 max-w-md text-center text-sm leading-6 text-slate-300">
                Kliknij, aby uruchomić futurystyczne CV. Po starcie rdzeń interfejsu
                się aktywuje, rozsuną się moduły i pojawią się sekcje profilu.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[860px] w-full max-w-[1700px]"
            >
              <AnimatePresence>
                {active === "models3d" && !projectsOpen && (
                  <BigModelViewer
                    model={selectedModel}
                    onPrev={handlePrevModel}
                    onNext={handleNextModel}
                    onClose={() => setActive("projects")}
                  />
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  filter: projectsOpen ? "blur(4px)" : "blur(0px)",
                  opacity: projectsOpen ? 0.28 : 1,
                  scale: projectsOpen ? 0.985 : 1,
                }}
                transition={{ duration: 0.28 }}
                className="absolute inset-0"
              >
                <motion.button
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 0.72, y: -10 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  whileTap={{ scale: 0.68 }}
                  onClick={() => {
                    setProjectsOpen(false);
                    setActive("contact");
                  }}
                  className="absolute left-1/2 top-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/70 shadow-[0_0_80px_rgba(34,211,238,0.25)] backdrop-blur-xl"
                >
                  <div className="absolute inset-3 rounded-full border border-cyan-300/30" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-t-2 border-cyan-200/80"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                    className="absolute inset-5 rounded-full border border-dashed border-cyan-300/30"
                  />
                  <div className="text-center">
                    <div className="text-[10px] uppercase tracking-[0.45em] text-cyan-300/70">
                      Profile Core
                    </div>
                    <div className="mt-2 text-2xl font-bold text-cyan-50">Darek</div>
                    <div className="mt-1 text-xs text-cyan-200/70">
                      Kliknij, aby otworzyć profil
                    </div>
                  </div>
                </motion.button>

                <div className="absolute left-[720px] top-12 flex gap-4">
                  <StatChip label="Tryb" value="Active" />
                  <StatChip label="Stack" value="Web / AI / 3D" />
                </div>

                <div className="absolute right-12 top-12 max-h-[730px] w-[420px] overflow-y-auto rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-5 shadow-[0_0_40px_rgba(34,211,238,0.14)] backdrop-blur-xl">
                  <SectionRenderer active={active} />
                </div>

                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-4">
                  {items.slice(0, 4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        whileTap={{ scale: 0.68 }}
                        onClick={() => handleMainTileClick(item.id as SectionKey)}
                        className={`rounded-full border px-5 py-3 transition ${active === item.id
                            ? "border-cyan-200/70 bg-cyan-300/15 text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                            : "border-cyan-400/20 bg-slate-950/60 text-cyan-300/80 hover:border-cyan-300/50 hover:text-cyan-100"
                          }`}
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {items.map((item, index) => {
                  const pos = polarToCartesian(item.angle, item.radius);
                  const Icon = item.icon;
                  const isProjects = item.id === "projects";

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
                      transition={{
                        delay: 0.35 + index * 0.08,
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
                    >
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.68 }}
                        onClick={() => handleMainTileClick(item.id as SectionKey)}
                        animate={
                          projectsOpen && isProjects
                            ? {
                              scale: 1.15,
                              boxShadow: "0 0 35px rgba(34,211,238,0.35)",
                            }
                            : {
                              scale: 1,
                              boxShadow: "0 0 20px rgba(34,211,238,0.12)",
                            }
                        }
                        transition={{ duration: 0.25 }}
                        className={`flex h-24 w-24 flex-col items-center justify-center rounded-3xl border backdrop-blur-xl transition ${active === item.id
                            ? "border-cyan-100/70 bg-cyan-300/15 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                            : "border-cyan-400/20 bg-slate-950/55 shadow-[0_0_20px_rgba(34,211,238,0.12)] hover:border-cyan-300/45"
                          }`}
                      >
                        <Icon className="h-7 w-7 text-cyan-200" />
                        <span className="mt-2 text-[11px] font-medium tracking-wide text-cyan-50">
                          {item.label}
                        </span>
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>

              <AnimatePresence>
                {projectsOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-40 bg-slate-950/30"
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: projectsPos.x,
                        y: projectsPos.y,
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.28 }}
                      className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                    >
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.68 }}
                        onClick={() => setProjectsOpen(false)}
                        className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-cyan-100/70 bg-cyan-300/15 shadow-[0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-xl"
                      >
                        <FolderKanban className="h-8 w-8 text-cyan-100" />
                        <span className="mt-2 text-sm font-semibold text-cyan-50">
                          Projekty
                        </span>
                        <span className="mt-1 text-[10px] text-cyan-200/70">
                          kliknij, aby zamknąć
                        </span>
                      </motion.button>
                    </motion.div>

                    {projectSubItems.map((item, index) => {
                      const pos = polarToCartesian(item.angle, item.radius);
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.3, x: projectsPos.x, y: projectsPos.y }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: projectsPos.x + pos.x,
                            y: projectsPos.y + pos.y,
                          }}
                          exit={{ opacity: 0, scale: 0.3, x: projectsPos.x, y: projectsPos.y }}
                          transition={{
                            delay: 0.08 + index * 0.07,
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                        >
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.68 }}
                            onClick={() => handleProjectSubClick(item.id as SectionKey)}
                            className={`flex h-24 w-24 flex-col items-center justify-center rounded-3xl border backdrop-blur-xl transition ${active === item.id
                                ? "border-cyan-100/70 bg-cyan-300/15 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                                : "border-cyan-400/30 bg-slate-950/75 shadow-[0_0_25px_rgba(34,211,238,0.16)] hover:border-cyan-300/55"
                              }`}
                          >
                            <Icon className="h-7 w-7 text-cyan-200" />
                            <span className="mt-2 px-1 text-center text-[10px] font-medium tracking-wide text-cyan-50">
                              {item.label}
                            </span>
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}