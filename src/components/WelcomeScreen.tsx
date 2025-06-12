"use client";

import { filesByLanguage } from "@/types/Files";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/ui-text";
import { FileName } from "@/types/Files";

export default function WelcomeScreen({
  onOpenFile,
  onToggleExtensions,
}: {
  onOpenFile: (filename: FileName) => void;
  onToggleExtensions: () => void;
}) {
  const { language } = useLanguage();
  const text = uiText[language];
  const files = filesByLanguage[language];
  const cvFile = language === "es" ? "/cv/cv-es.pdf" : "/cv/cv-en.pdf"

  return (
    <div className="flex flex-col items-center justify-center h-full relative px-4 text-center">
      {/* RN Icon Faint Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-50">
        <img
          src="/logo/logo.svg"
          alt="RN Logo"
          className="w-100 h-100 object-contain"
        />
      </div>


      {/* Welcome Content */}
      <div className="z-10">
        <h1 className="text-3xl font-bold text-white mb-2">{text.welcome.title}</h1>
        <p className="text-gray-400 mb-8">
          {text.welcome.action}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {Object.entries(files).map(([filename, _]) => (
            <button
              key={filename}
              onClick={() => onOpenFile(filename as FileName)}
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 p-4 rounded-lg text-left transition-colors duration-200"
            >
              <div className="font-medium text-white">{filename}</div>
              <div className="text-sm text-gray-400 mt-1">
                {filename.includes("about") && text.welcome.about}
                {filename.includes("projects") && text.welcome.projects}
                {filename.includes("contact") && text.welcome.contact}
                {!["about", "projects", "contact"].some((key) => filename.includes(key)) &&
                  text.welcome.noFiles}
              </div>
            </button>
          ))}

          {/* Toggle Extensions Card */}
          <button
            onClick={onToggleExtensions}
            className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 p-4 rounded-lg text-left transition-colors duration-200"
          >
            <div className="font-medium text-white">{text.welcome.extensions}</div>
            <div className="text-sm text-gray-400 mt-1">
              {text.welcome.extensionsMessage}
            </div>
          </button>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <div>
            🐙 {text.welcome.repositorio}:{" "}
            <a
              href="https://github.com/RicardoNatera/vscode-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              github.com/RicardoNatera/vscode-portfolio
            </a>
          </div>
          <div>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/natera-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              linkedin.com/in/natera-dev
            </a>
          </div>
          <div>
            ⬇️📄 CV:{" "}
            <a
              href={cvFile}
              download={language === "es" ? "RicardoNatera-CV-ES.pdf" : "RicardoNatera-CV-EN.pdf"}
              className="underline hover:text-white transition-colors"
            >
              {text.welcome.downloadCV}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
