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
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMysql
} from "react-icons/si";

// Define available icons in an object
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
  mongodb: SiMongodb,
  node: SiNodedotjs,
  express: SiExpress,
  graphql: SiGraphql,
  mysql: SiMysql
};

interface SkillCardProps {
  name: string;
  icon: keyof typeof icons; // Restrict icon prop to valid keys in `icons`
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const Icon = icons[icon];

  // Check if the Icon exists to avoid rendering undefined
 if (!Icon) return null;

  return (
    <Card className="p-6 flex flex-col items-center justify-center gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
      <Icon className="h-8 w-8" aria-label={`${name} icon`} />
      <span className="font-medium">{name}</span>
    </Card>
  );
}
