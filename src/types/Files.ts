export const files = {
  "about.tsx": `function About() {\n  return "Hola, soy Ricardo Natera";\n}`,
  "projects.tsx": `const projects = ["Portfolio", "Dashboard", "API"];`,
  "contact.tsx": `const email = "ricardo@example.com";`,
} as const;

export type FileName = keyof typeof files;