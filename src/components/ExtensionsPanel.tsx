"use client";
import type { ReactElement } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNestjs, SiPrisma, SiPostgresql } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/ui-text";

export default function ExtensionsPanel() {
  const { language } = useLanguage();
  const text = uiText[language];

  return (
    <div className="p-4 h-full overflow-auto text-sm space-y-6">
      <p className="text-xl font-bold mb-2">{text.extensions.title}</p>
      <Category title="Frontend" items={[
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
      ]} />
      <Category title="Backend" items={[
        { icon: <SiNestjs className="text-red-500" />, name: "NestJS" },
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      ]} />
      <Category title={text.extensions.DB} items={[
        { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
        { icon: <SiPrisma className="text-purple-500" />, name: "Prisma" },
      ]} />
      <Category title={text.extensions.tools} items={[
        { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
      ]} />
    </div>
  );
}

function Category({ title, items }: { title: string; items: { icon: ReactElement; name: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-zinc-200 mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.name} className="flex items-center space-x-2 text-zinc-400">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
