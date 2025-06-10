import React from "react";
import { FaCode, FaReact, FaMarkdown } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

export function getIconForFile(filename: string): React.ReactNode {
  if (filename.endsWith(".tsx")) return <FaReact className="text-sky-400" />;
  if (filename.endsWith(".md")) return <FaMarkdown />;
  if (filename.endsWith(".json")) return <VscJson className="text-yellow-400"/>;
  return <FaCode />;
}

