"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-8 left-2 z-50 text-sm bg-zinc-800 px-2 py-1 rounded shadow border border-zinc-600">
      <button
        onClick={() => setLanguage("es")}
        className={language === "es" ? "font-bold text-white" : "text-zinc-400"}
      >
        ES
      </button>{" "}
      |{" "}
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "font-bold text-white" : "text-zinc-400"}
      >
        EN
      </button>
    </div>
  );
}
