"use client";

import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  const repeated = Array.from({ length: 6 }, () => text);

  return (
    <div className="overflow-hidden border-y-2 border-black bg-wine py-3">
      <motion.div
        className="flex w-max gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {[...repeated, ...repeated].map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm font-semibold uppercase tracking-widest text-white"
          >
            {item} <span className="text-oak">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
