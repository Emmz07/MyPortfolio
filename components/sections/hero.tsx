"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-primary">Ojo Emmanuel</span>
        </h1>
        <h2 className="text-3xl text-muted-foreground mb-8">MERN Stack Developer | Full-Stack Web Developer</h2>
        <p className="text-xl leading-relaxed mb-8">
          I'm a passionate and detail-oriented MERN Stack Developer with experience building responsive, scalable, and user-friendly applications. Skilled in MongoDB, Express.js, React.js, and Node.js, with a solid understanding of RESTful APIs, authentication, state management, and database design. Adept at working independently or in teams to deliver efficient full-stack solutions.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="/resumeOjo.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}