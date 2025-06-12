import { useLanguage } from "@/context/LanguageContext";

export default function StatusBar() {
  const { language } = useLanguage();
  return (
    <footer className="h-6 bg-[#007acc] text-white px-4 flex items-center text-xs">
      VS Code Portfolio — Powered by Next.js + Tailwind — {language === "es" ? "Español" : "English"}
    </footer>
  );
}
