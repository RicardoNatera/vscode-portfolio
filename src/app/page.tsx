"use client"
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Editor } from "@/components/Editor";
import StatusBar from "@/components/StatusBar";
import FileExplorer from "@/components/FileExplorer";
import ExtensionsPanel from "@/components/ExtensionsPanel";
import { useState } from "react";
import { filesByLanguage, FileName } from "@/types/Files";
import { useLanguage } from "@/context/LanguageContext";
import Terminal from "@/components/Terminal";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  const [openTabs, setOpenTabs] = useState<FileName[]>([]);
  const [activeFile, setActiveFile] = useState<FileName | null>(null);
  const [showExplorer, setShowExplorer] = useState(true);
  const [showExtensions, setShowExtensions] = useState(false);

  const { language } = useLanguage();
  const files = filesByLanguage[language];
  
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (activeFile) {
      localStorage.setItem("activeFile", activeFile);
    } else {
      localStorage.removeItem("activeFile");
    }
  }, [activeFile]);


  useEffect(() => {
    const savedTabs = localStorage.getItem("openTabs");
    const savedActive = localStorage.getItem("activeFile") as FileName | null;

    const parsedTabs = savedTabs ? (JSON.parse(savedTabs) as FileName[]) : [];
    const validTabs = parsedTabs.filter((tab) => files[tab]);

    setOpenTabs(validTabs);

    if (savedActive && files[savedActive]) {
      setActiveFile(savedActive);
    } else {
      setActiveFile(validTabs[0] || null);
    }

    setInitialized(true); // 🔑 Marca como inicializado
  }, [language]);




  useEffect(() => {
    if (!initialized) return;

    if (openTabs.length === 0) {
      setActiveFile(null);
      localStorage.removeItem("openTabs");
      localStorage.removeItem("activeFile");
    } else {
      localStorage.setItem("openTabs", JSON.stringify(openTabs));
    }
  }, [openTabs, initialized]);




  return (
    <div className="h-screen w-screen flex flex-col bg-[#1e1e1e] text-gray-200">
      <LanguageSelector />
      {/* Zona principal: lateral + área de trabajo */}
      <div className="flex flex-1 overflow-hidden">
        {/* Barra lateral izquierda */}
        <Sidebar 
          onToggleExplorer={() => {
            setShowExplorer(prev => !prev)
            setShowExtensions(false)
          }} 
          onOpenContact={() => {
              const filename: FileName = "contact.json";
              if (!openTabs.includes(filename)) {
                setOpenTabs((prev) => [...prev, filename]);
              }
              setActiveFile(filename);
            }}
          onToggleExtensions={() => {
            setShowExplorer(false)
            setShowExtensions(prev => !prev)}
          }
          />
        {showExplorer && (
          <FileExplorer
            files={Object.keys(files) as FileName[]}
            onOpenFile={(filename) => {
              if (!openTabs.includes(filename)) {
                setOpenTabs((prev) => [...prev, filename]);
              }
              setActiveFile(filename);
            }}
          />
        )}
        {showExtensions && (
          <div className="w-64 bg-zinc-900 border-r border-zinc-700">
            <ExtensionsPanel />
          </div>
        )}

        {/* Área de edición + terminal */}
        <div className="flex flex-col flex-1">
          <TabBar
            openTabs={openTabs}
            activeFile={activeFile}
            onSelect={setActiveFile}
            onClose={(filename) => {
              setOpenTabs((prev) => prev.filter((f) => f !== filename));
              if (activeFile === filename) {
                const remainingTabs = openTabs.filter((f) => f !== filename);
                setActiveFile(remainingTabs[0] || null);
              }
            }}
          />

          {/* Editor (crece) */}
          <div className="flex flex-1 overflow-hidden">
            {activeFile ? (
              <Editor content={files[activeFile]} filename={activeFile} />
            ) : (
              <div className="flex flex-1 justify-center p-4 overflow-auto">

              <WelcomeScreen
                onToggleExtensions={() => {
                  setShowExtensions((prev) => !prev);
                  setActiveFile(null); // Oculta archivo si se muestran extensiones
                  setShowExplorer(false) // Oculta explorer si se muestran extensiones
                }}
                onOpenFile={(filename) => {
                  if (!openTabs.includes(filename)) {
                    setOpenTabs((prev) => [...prev, filename]);
                  }
                  setActiveFile(filename);
                  setShowExtensions(false); // Oculta extensiones si se abre un archivo
                }}
              />
              </div>

            )}
          </div>

          {/* Terminal */}
          <Terminal />
        </div>
      </div>

      {/* Status bar inferior */}
      <StatusBar />
    </div>
  );
}
