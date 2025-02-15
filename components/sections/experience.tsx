"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "../experience-card";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "MobileKings",
    period: "October 2023 – Present",
    responsibilities: [
      "Component Libraries: Built and maintained reusable, scalable, and customizable components using design systems like Material-UI, TailwindCSS, or Chakra UI.",
      "Performance Optimization: Enhanced application performance by analyzing and improving load times, memory usage, and responsiveness.",
      "Developed interconnected wikis and notification system using Redux Toolkit and GraphQL",
      "Collaboration: Worked closely with cross-functional teams, including backend engineers, designers, and product managers, to deliver seamless user experiences."
    ]
  },
  {
    title: "Frontend Developer Intern and Freelancer",
    company: "McG Technologies",
    period: "January 2020 - March 2023",
    responsibilities: [
      "Gained foundational and intermediate frontend development skills",
      "Code Reviews: Conducted code reviews to ensure high-quality, maintainable, and bug-free code adhering to industry best practices.",
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

        <div className="mt-10 ml-5 mb-10">
          <h3 className="text-2xl font-bold mb-8">Achievements</h3>
          <div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Spearheaded the development of a complex, high-traffic web application, leading to a 20% increase in user engagement.</li>
              <li>Migrated legacy codebase to a modern React/TypeScript stack, resulting in a 35% performance boost and easier maintainability.</li>
              <li>Implemented a dark mode feature that aligned with  user preferences, enhancing user experience and increasing retention by 15%.</li>
              <li>Reduced page load times by 40% through code splitting, lazy loading, and advanced caching strategies.</li>
              <li>Contributed to the design and rollout of a robust component library, which decreased development time by 30% across teams.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}