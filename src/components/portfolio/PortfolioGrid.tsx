"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PORTFOLIO_PROJECTS.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <Link
            href={`/portfolio/${project.slug}`}
            className="group block overflow-hidden border-2 border-black bg-white"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden border-b-2 border-black"
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
                {project.category}
              </p>
              <p className="mt-1 font-display text-xl tracking-wide text-black">
                {project.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {project.summary}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
