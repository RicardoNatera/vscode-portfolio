import type { FileName } from "@/types/Files";
import { getIconForFile } from "@/lib/icon-map";

interface Props {
  openTabs: FileName[];
  activeFile: FileName | null;
  onSelect: (filename: FileName) => void;
}

export default function TabBar({ openTabs, activeFile, onSelect }: Props) {
  return (
    <div className="h-10 bg-[#1e1e1e] border-b border-[#3c3c3c] px-2 flex items-center text-sm">
      {openTabs.map((file) => (
        <div
          key={file}
          className={`flex items-center gap-1 px-3 py-1 text-sm border-r border-zinc-700 cursor-pointer ${
            file === activeFile && "bg-zinc-800"
          }`}
          onClick={() => onSelect(file)}
        >
          {getIconForFile(file)}
          <span>{file}</span>
        </div>
      ))}
    </div>
  );
}
