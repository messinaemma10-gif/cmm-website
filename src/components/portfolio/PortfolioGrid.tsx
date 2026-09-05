"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PORTFOLIO_ITEMS.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          whileHover={{ scale: 1.03 }}
          className="group cursor-pointer overflow-hidden border-2 border-black bg-white"
        >
          <div className="flex aspect-[4/3] items-center justify-center border-b-2 border-black bg-dust/40 transition group-hover:bg-oak/30">
            <span className="px-4 text-center font-mono text-xs font-semibold uppercase tracking-widest text-stone">
              Project photo coming soon
            </span>
          </div>
          <div className="p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              {item.category}
            </p>
            <p className="mt-1 font-display text-xl tracking-wide text-black">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
