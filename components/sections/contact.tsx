"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/ojoemmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ojoemmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/ojoemmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
              <a
                href="mailto:contact@ojoemmanuel.dev"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                contact@ojoemmanuel.dev
              </a>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}