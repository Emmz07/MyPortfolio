"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { href: "#home", id: "hero", label: "Home" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#testimonials", id: "testimonials", label: "Testimonials" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  
  const image = "\public\emmz.jpg";

  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  };

  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="relative">
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetTitle className="text-lg font-semibold mb-4">
            Navigation Menu
          </SheetTitle>
          <ScrollArea className="h-full py-8">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>

    <div className="sidebar">
        <motion.aside
      className="fixed left-0 top-0 h-screen w-[300px] bg-background border-r p-8"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-8">
          <div className="mr-4">
          <Image
                  src="/emmz.jpg" // Replace with the actual path to your image in the public folder
                  alt="Ojo Emmanuel"
                  width={50} // Adjust the width as needed
                  height={50} // Adjust the height as needed
                  className="rounded-full" // Optional: For a circular image
                />
          </div>
          <div >
            <h3 className="text-2xl font-bold">Ojo Emmanuel</h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
          <ThemeToggle />
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left",
                activeSection === item.id && "bg-accent"
              )}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="mt-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ojo Emmanuel
          </p>
        </div>
      </div>
    </motion.aside>
    </div>
    
    </>
  );
}

