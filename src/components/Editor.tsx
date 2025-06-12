"use client";

import { highlight } from "@/lib/highlight";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

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
  <div className="flex-1 h-full bg-[#1e1e1e] text-white overflow-hidden">
    {isMarkdown ? (
      <div className="h-full overflow-auto p-6 prose prose-invert max-w-none prose-headings:mt-4 prose-p:leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    ) : (
      <motion.div
  key={content}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="h-full w-full overflow-auto p-4"
>
  <pre
    className="text-sm bg-[#1e1e1e] w-full h-full overflow-auto"
    style={{
      whiteSpace: "pre-wrap",   // Envuelve las líneas
      wordBreak: "break-word",  // Rompe palabras largas si es necesario
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

</motion.div>

    )}
  </div>
);





}
