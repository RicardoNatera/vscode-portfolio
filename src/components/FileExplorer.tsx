import type { FileName } from "@/types/Files";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/ui-text";
import { motion } from "framer-motion";
import { getIconForFile } from "@/lib/icon-map"; // si ya tienes esto

interface Props {
  files: FileName[];
  onOpenFile: (filename: FileName) => void;
}

export default function FileExplorer({ files, onOpenFile }: Props) {
  const { language } = useLanguage();
  const text = uiText[language];

  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#252526] h-full p-3 text-sm text-gray-300 border-r border-[#3c3c3c] overflow-y-auto"
    >
      <p className="text-xs font-bold mb-2 uppercase text-gray-400">
        {text.portfolio.title}
      </p>
      <ul className="space-y-1">
        {files.map((file) => {
          const ext = file.split(".").pop();

          const color =
            ext === "md"
              ? "text-white-400"
              : ext === "json"
              ? "text-green-400"
              : ext === "tsx"
              ? "text-cyan-400"
              : "text-white";

          return (
            <li
              key={file}
              onClick={() => onOpenFile(file)}
              className="flex items-center gap-2 cursor-pointer hover:bg-[#373737] p-1 px-2 rounded transition-colors duration-150"
            >
              <span className={color}>
                {getIconForFile ? getIconForFile(file) : "📄"}
              </span>
              <span className="truncate">{file}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
