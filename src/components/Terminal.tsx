"use client";

import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/ui-text";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const text = uiText[language];

  return (
  <div className="bg-[#1e1e1e] border-t border-zinc-700 text-sm text-green-400 w-full">
    <div className="flex justify-between items-center px-4 py-1 bg-zinc-900 border-b border-zinc-700 w-full">
      <span className="text-gray-300 font-semibold">TERMINAL</span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-white"
      >
        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>
    </div>

    {isOpen && (
      <div className="h-40 overflow-auto">
        <pre className="p-2 font-mono text-sm text-green-400 whitespace-pre min-w-max">
          {text.terminal.command}
          {"\n"}
          {text.terminal.secondLine}
          {"\n"}
          {text.terminal.thirdLine}
          {"\n"}
          {text.terminal.fourthLine}
        </pre>
      </div>
    )}
  </div>
);

}
