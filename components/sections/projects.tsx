"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Firebase, featuring real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    demoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/ojoemmanuel",
    tags: ["Next.js", "Firebase", "TypeScript"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    demoLink: "https://tasks-demo.com",
    githubLink: "https://github.com/ojoemmanuel",
    tags: ["React", "Firebase", "Tailwind"]
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