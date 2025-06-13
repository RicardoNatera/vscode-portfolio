"use client";

import { highlight } from "@/lib/highlight";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { techMap } from "@/lib/techMap"; 

interface EditorProps {
  content: string;
  filename?: string;
}

export function Editor({ content, filename }: EditorProps) {
  const isMarkdown = filename?.endsWith(".md");

  const getLanguage = () => {
    if (!filename) return "plaintext";
    const ext = filename.split(".").pop();
    if (ext === "md") return "markdown";
    if (ext === "json") return "json";
    return "jsx"; // fallback
  };

  return (
    <div className="flex-1 h-full min-h-0 min-w-0 bg-[#1e1e1e] text-white overflow-hidden">
      {isMarkdown ? (
      <div className="
        h-full overflow-auto p-6
        prose prose-invert max-w-none
        prose-headings:mt-4 prose-h1:text-3xl
        prose-ul:list-disc prose-ul:pl-6
        prose-li:marker:text-gray-400 prose-li:mb-1
      ">
<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    strong({ children }) {
      const text = String(children);
      if (techMap[text]) {
        const { icon, label } = techMap[text];
        return (
          <span className="inline-flex items-center gap-1 bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-sm font-normal">
            {icon}
            <span>{label}</span>
          </span>
        );
      }
      return <strong>{children}</strong>;
    },
  }}
>
  {content}
</ReactMarkdown>      </div>
      ) : (
      <motion.div
        key={content}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full w-full overflow-auto p-4"
      >
        <div className="min-w-full overflow-x-auto">
          <pre
            className="text-sm bg-[#1e1e1e] w-full h-full overflow-auto"
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <code
              className={`language-${getLanguage()}`}
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              dangerouslySetInnerHTML={{ __html: highlight(content) }}
            />
          </pre>
        </div>
      </motion.div>
      )}
    </div>
  );

}
