import { JSX } from "react";
import { iconMap } from "@/lib/iconMap";

export const techMap: Record<string, { icon: JSX.Element; label: string }> = {
  JavaScript: { icon: iconMap.SiJavascript, label: "JavaScript" }, 
  TypeScript: { icon: iconMap.SiTypescript, label: "TypeScript" },
  React: { icon: iconMap.FaReact, label: "React" },
  "Next.js": { icon: iconMap.SiNextdotjs, label: "Next.js" },
  NestJS: { icon: iconMap.SiNestjs, label: "NestJS" },
  TailwindCSS: { icon: iconMap.SiTailwindcss, label: "TailwindCSS" },
  NodeJS: { icon: iconMap.FaNodeJs, label: "NodeJS" },
  MySQL: { icon: iconMap.SiMysql, label: "MySQL" },
  Postman: { icon: iconMap.SiPostman, label: "Postman" },
  Git: { icon: iconMap.FaGitAlt, label: "Git" },
};
