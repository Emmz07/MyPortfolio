"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "../testimonial-card";

const testimonials = [
  {
    content: "Emmanuel is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    author: "Taiwo M.O",
    role: "Tech Lead at McG Technologies",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    content: "Working with Emmanuel was a great experience. He brings both technical expertise and creative solutions to every project.",
    author: "Ojo G.O",
    role: "Product Manager at InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}