"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="fixed z-50 bottom-14 right-2  
             text-xs sm:text-sm bg-zinc-800/80 backdrop-blur-sm 
             px-2 py-1 rounded shadow border border-zinc-600 
             flex gap-2 sm:gap-3"
    >
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 rounded ${
          language === "es" ? "bg-zinc-700 text-white" : "text-zinc-400"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded ${
          language === "en" ? "bg-zinc-700 text-white" : "text-zinc-400"
        }`}
      >
        EN
      </button>
    </div>

  );
}
