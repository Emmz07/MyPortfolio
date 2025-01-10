"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "TradeWithChun",
    description: "A stock trading platform with real-time market data, copy-trading, portfolio management, and social trading features.",
    image: "/copytr.png",
    demoLink: "https://copytrading-company-62q6.vercel.app/",
    githubLink: "https://github.com/Emmz07/copytradingCompany",
    tags: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Nyroesreign",
    description: "Clothing store with a modern design, advanced filtering and sorting options, and seamless checkout process.",
    image: "/nyo.png",
    demoLink: "https://tasks-demo.com",
    githubLink: "https://github.com/Emmz07/Nyroesreign",
    tags: [ "Next.js", "Tailwind", "TypeScript"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}