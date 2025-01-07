"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "../experience-card";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "MobileKings",
    period: "October 2023 – Present",
    responsibilities: [
      "Spearheaded the redesign of MobileKing Website with Next.js SSR",
      "Automated CI/CD pipelines using GitHub workflows",
      "Developed interconnected wikis and notification system using Redux Toolkit and GraphQL"
    ]
  },
  {
    title: "Frontend Developer Intern and Freelancer",
    company: "McG Technologies",
    period: "January 2020 - March 2023",
    responsibilities: [
      "Gained foundational and intermediate frontend development skills",
      "Developed web components using SCSS",
      "Involved in testing and debugging during site revamp",
      "Worked as a freelancer to gain personal experience"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}