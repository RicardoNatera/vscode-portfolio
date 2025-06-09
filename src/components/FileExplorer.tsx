import type { FileName } from "@/types/Files";

interface Props {
  files: FileName[];
  onOpenFile: (filename: FileName) => void;
}

export default function FileExplorer({ files, onOpenFile }: Props) {
  return (
    <div className="w-64 bg-[#252526] h-full p-3 text-sm text-gray-300 border-r border-[#3c3c3c]">
      <p className="text-xs font-bold mb-2">PORTFOLIO</p>
      <ul className="space-y-1">
        {files.map((file) => (
          <li
            key={file}
            onClick={() => onOpenFile(file)}
            className="cursor-pointer hover:bg-[#373737] p-1 rounded"
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}
