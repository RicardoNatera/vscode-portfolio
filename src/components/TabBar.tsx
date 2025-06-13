import type { FileName } from "@/types/Files";
import { getIconForFile } from "@/lib/icon-map";
import { X } from "lucide-react";

interface Props {
  openTabs: FileName[];
  activeFile: FileName | null;
  onSelect: (filename: FileName) => void;
  onClose: (filename: FileName) => void;
}

export default function TabBar({ openTabs, activeFile, onSelect, onClose }: Props) {
  return (
<div className="flex h-10 bg-[#2d2d2d] border-b border-[#444] overflow-x-auto no-scrollbar">
      {openTabs.map((file) => {
        const isActive = activeFile === file;
        return (
          <div
            key={file}
            className={`relative group flex items-center gap-1 px-1 sm:px-4 py-1 cursor-pointer text-sm border-r border-[#444] whitespace-nowrap
              ${isActive ? "bg-[#1e1e1e]" : "bg-[#2d2d2d] hover:bg-[#3a3a3a]"}
            `}
            onClick={() => onSelect(file)}
          >
            <div className="flex items-center gap-1">
              {getIconForFile(file)}
              <span className="truncate max-w-[100px] sm:max-w-none">{file}</span>
            </div>

            <span
              className={`ml-2 transition-opacity rounded-sm p-[2px]
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}
                hover:bg-gray-700
              `}
              onClick={(e) => {
                e.stopPropagation();
                onClose(file);
              }}
            >
              <X size={14} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
