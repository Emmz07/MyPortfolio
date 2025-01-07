import { Card } from "@/components/ui/card";
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiFirebase,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";

const icons = {
  react: SiReact,
  vue: SiVuedotjs,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  firebase: SiFirebase,
  tailwind: SiTailwindcss,
  sass: SiSass,
};

interface SkillCardProps {
  name: string;
  icon: keyof typeof icons;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const Icon = icons[icon];

  return (
    <Card className="p-6 flex flex-col items-center justify-center gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
      <Icon className="w-12 h-12" />
      <span className="font-medium">{name}</span>
    </Card>
  );
}