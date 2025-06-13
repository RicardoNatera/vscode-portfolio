import type { IconKey } from "@/lib/iconMap";

export type Extension = {
  name: string;
  icon: IconKey; // Usaremos el nombre del ícono como string
  category: "frontend" | "backend" | "tools" | "database";
};

export const extensions: Extension[] = [
  // Frontend
  { name: "Typescript", icon: "SiTypescript", category: "frontend" },
  { name: "React", icon: "FaReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "FaNodeJs", category: "backend" },
  { name: "NestJS", icon: "SiNestjs", category: "backend" },
  
  // Base de Datos
  { name: "MySQL", icon: "SiMysql", category: "database" },

  // Herramientas
  { name: "Git", icon: "FaGitAlt", category: "tools" },
  { name: "Postman", icon: "SiPostman", category: "tools" },
];
