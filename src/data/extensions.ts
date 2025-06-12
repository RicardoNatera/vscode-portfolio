import type { IconKey } from "@/lib/iconMap";

export type Extension = {
  name: string;
  icon: IconKey; // Usaremos el nombre del ícono como string
  category: "frontend" | "backend" | "tools" | "database";
};

export const extensions: Extension[] = [
  // Frontend
  { name: "React", icon: "FaReact", category: "frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },

  // Backend
  { name: "NestJS", icon: "SiNestjs", category: "backend" },
  { name: "Node.js", icon: "FaNodeJs", category: "backend" },

  // Base de Datos
  { name: "MySQL", icon: "SiMysql", category: "database" },
  { name: "Prisma", icon: "SiPrisma", category: "database" },

  // Herramientas
  { name: "Git", icon: "FaGitAlt", category: "tools" },
];
