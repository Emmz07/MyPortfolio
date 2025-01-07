"use client";

import { motion } from "framer-motion";
import { SkillCard } from "../skill-card";

const skills = [
  { name: "React.js", icon: "react" },
  { name: "Vue.js", icon: "vue" },
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML/CSS", icon: "html" },
  { name: "Firebase", icon: "firebase" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "SCSS", icon: "sass" },
  { name: "Sass", icon: "sass" }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} icon={skill.icon as "react" | "vue" | "next" | "typescript" | "javascript" | "html" | "firebase" | "tailwind" | "sass"} />
             ))}
        </div>
      </motion.div>
    </section>
  );
}