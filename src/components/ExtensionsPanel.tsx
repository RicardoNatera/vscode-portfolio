"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/ui-text";
import { extensions } from "@/data/extensions";
import { iconMap, type IconKey } from "@/lib/iconMap";

export default function ExtensionsPanel() {
  const { language } = useLanguage();
  const text = uiText[language];

  const categories = {
    frontend: "Frontend",
    backend: "Backend",
    database: text.extensions.DB,
    tools: text.extensions.tools,
  };

  return (
    <motion.div
      className="p-4 h-full overflow-auto text-sm"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <p className="text-xl font-bold mb-4">{text.extensions.title}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {extensions.map((ext) => (
          <div
            key={ext.name}
            title={ext.name}
            className="bg-zinc-800 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-2">{iconMap[ext.icon as IconKey]}</div>
            <p className="text-sm font-semibold text-zinc-100">{ext.name}</p>
            <p className="text-xs text-zinc-400">
              {categories[ext.category as keyof typeof categories]}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
