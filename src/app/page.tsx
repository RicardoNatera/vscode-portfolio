"use client"
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import { Editor } from "@/components/Editor";
import StatusBar from "@/components/StatusBar";
import FileExplorer from "@/components/FileExplorer";
import { useState } from "react";
import { files, FileName } from "@/types/Files";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [openTabs, setOpenTabs] = useState<FileName[]>([]);
  const [activeFile, setActiveFile] = useState<FileName | null>(null);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#1e1e1e] text-gray-200">
      {/* Zona principal: lateral + área de trabajo */}
      <div className="flex flex-1 overflow-hidden">
        {/* Barra lateral izquierda */}
        <Sidebar />
        <FileExplorer
          files={Object.keys(files) as FileName[]}
          onOpenFile={(filename) => {
            if (!openTabs.includes(filename)) {
              setOpenTabs((prev) => [...prev, filename]);
            }
            setActiveFile(filename);
          }}
        />

        {/* Área de edición + terminal */}
        <div className="flex flex-col flex-1">
          <TabBar
            openTabs={openTabs}
            activeFile={activeFile}
            onSelect={setActiveFile}
          />

          {/* Editor (crece) */}
          <div className="flex flex-1 overflow-hidden">
            <Editor
              content={
                activeFile ? files[activeFile] : "// Selecciona un archivo"
              }
            />
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
