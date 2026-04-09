"use client";

import { motion } from "framer-motion";

interface StatChipProps {
    label: string;
    value: string;
}

export default function StatChip({ label, value }: StatChipProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-cyan-400/20 bg-slate-950/60 px-4 py-3 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur"
        >
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60">
                {label}
            </div>
            <div className="mt-1 text-lg font-semibold text-cyan-100">
                {value}
            </div>
        </motion.div>
    );
}