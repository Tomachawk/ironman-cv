"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderKanban } from "lucide-react";

import {
  items,
  projectSubItems,
  modelLibrary,
  SectionKey,
} from "@/data/cvData";
import { polarToCartesian } from "@/lib/polarToCartesian";

import HudRing from "@/components/cv/HudRing";
import BigModelViewer from "@/components/cv/BigModelViewer";
import SectionRenderer from "@/components/cv/SectionRenderer";

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
                          initial={{
                            opacity: 0,
                            scale: 0.3,
                            x: projectsPos.x,
                            y: projectsPos.y,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: projectsPos.x + pos.x,
                            y: projectsPos.y + pos.y,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.3,
                            x: projectsPos.x,
                            y: projectsPos.y,
                          }}
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