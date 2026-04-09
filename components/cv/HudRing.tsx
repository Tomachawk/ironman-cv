"use client";

import { motion } from "framer-motion";

type Props = {
    expanded: boolean;
};

export default function HudRing({ expanded }: Props) {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1 */}
            <motion.div
                animate={{ rotate: expanded ? 360 : 0, scale: expanded ? 1 : 0.84 }}
                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                className="absolute h-[300px] w-[300px] rounded-full border border-cyan-400/30"
            />

            {/* Ring 2 */}
            <motion.div
                animate={{ rotate: expanded ? -360 : 0 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                className="absolute h-[365px] w-[365px] rounded-full border-2 border-dashed border-cyan-300/25"
            />

            {/* Ring 3 */}
            <motion.div
                animate={{ rotate: expanded ? 360 : 0 }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                className="absolute h-[470px] w-[470px] rounded-full border border-cyan-500/15"
            />

            {/* Glow */}
            <div className="absolute h-[560px] w-[560px] rounded-full bg-cyan-400/5 blur-3xl" />
        </div>
    );
}