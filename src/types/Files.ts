export type FileName = "about.md" | "projects.tsx" | "contact.json";

export const files: Record<FileName, string> = {
  "about.md": `# Hola, soy Ricardo Natera

**Ingeniero Informático de la Universidad Católica Andrés Bello** pero en constante crecimiento profesional y personal.

Soy metódico, creativo, organizado, honesto y disfruto poder resolver problemas, adquiriendo una visión del conjunto y centrándome en todos los diferentes factores involucrados.

---

## 💻 ¿A qué me dedico?


Prueba: Visita [mi web](https://ejemplo.com) o escríbeme a miemail@ejemplo.com

Trabajo con tecnologías **web**, **datos** y **desarrollo de software**.

Tengo **5 años de experiencia en desarrollo web**. He trabajado como **autónomo** en proyectos de baja, mediana y alta escala para empresas en diferentes sectores, donde mis tareas han sido:

- Analizar y crear soluciones informáticas.  
- Diseñar y mantener sitios web.  
- Programar y supervisar sistemas informáticos en todas las áreas.

---

## 🧠 ¿Cómo trabajo?

Estoy habituado a la **autogestión** y el **teletrabajo**.  
Tengo la capacidad de trabajar en equipo, buena comunicación y el mejor ánimo e iniciativa para aportar en cualquier proyecto.

---

## 🚀 ¿Qué busco?

Actualmente, estoy **abierto a oportunidades** que me permitan trabajar con nuevos compañeros y conseguir nuevas metas juntos.

Me gusta lo que hago y **confío plenamente en mis resultados**.

---

Gracias por tomar el tiempo de leer mi extracto.  
¡Que pase un buen día!
`,

  "projects.tsx": `export const projects = [
  {
    title: "Dashboard de Productos",
    description: "Panel administrativo con autenticación, roles, CRUD, filtros y exportación en PDF/Excel.aaaaaaaaaaaaaaaaaaaaa",
    technologies: ["Next.js", "TailwindCSS", "NestJS", "Prisma", "PostgreSQL"],
    repo: "https://github.com/ricardonatera/product-dashboard"
  },
  {
    title: "Portafolio tipo VSCode",
    description: "Portafolio interactivo con temática de Visual Studio Code.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    repo: "https://github.com/ricardonatera/vscode-portfolio"
  },
  {
    title: "Landing Page para empresa de agua",
    description: "Página promocional con métodos de pago y panel para verificación de pagos.",
    technologies: ["Next.js", "NestJS", "TailwindCSS", "Pago Móvil"],
    repo: "https://github.com/ricardonatera/water-landing"
  }
];
`,

  "contact.json": `{
  "name": "Ricardo Natera",
  "email": "ricardo.natera@email.com",
  "location": "Caracas, Venezuela",
  "linkedin": "https://www.linkedin.com/in/ricardonatera",
  "github": "https://github.com/ricardonatera",
  "message": "Actualmente estoy abierto a oportunidades laborales, colaboraciones o simplemente una buena conversación profesional. ¡No dudes en contactarme!"
}
`,
};
