export type FileName = "about.tsx" | "projects.tsx" | "contact.tsx";

export const files: Record<FileName, string> = {
  "about.tsx": `import React from "react";

export default function About() {
  return (
    <section>
      <h1>Hola, soy Ricardo Natera</h1>
      <p>Soy desarrollador web con experiencia en React, Next.js y NestJS.</p>
    </section>
  );
}
`,

  "projects.tsx": `export const projects = [
  {
    name: "VS Code Portfolio",
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    name: "Admin Dashboard",
    stack: ["Next.js", "Prisma", "NestJS"],
  },
];
`,

  "contact.tsx": `const contact = {
  email: "ricardo@example.com",
  github: "https://github.com/RicardoNatera",
  linkedin: "https://linkedin.com/in/ricardonatera"
};
`,
};
