import React from "react";
import { FaCode, FaReact } from "react-icons/fa";

export function getIconForFile(filename: string): React.ReactNode {
  if (filename.endsWith(".tsx")) return <FaReact className="text-sky-400" />;
  return <FaCode />;
}

