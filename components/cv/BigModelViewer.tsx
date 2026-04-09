"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { modelLibrary } from "@/data/cvData";

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

type BigModelViewerProps = {
    model?: (typeof modelLibrary)[number];
    onPrev: () => void;
    onNext: () => void;
    onClose: () => void;
};

export default function BigModelViewer({
    model,
    onPrev,
    onNext,
    onClose,
}: BigModelViewerProps) {
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