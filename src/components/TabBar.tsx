import type { FileName } from "@/types/Files";

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
          onClick={() => onSelect(file)}
          className={`px-3 py-1 border-r border-[#3c3c3c] cursor-pointer ${
            file === activeFile ? "bg-[#2c2c2c] text-white" : "text-gray-400"
          }`}
        >
          {file}
        </div>
      ))}
    </div>
  );
}
