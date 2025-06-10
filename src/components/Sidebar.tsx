"use client";

import { FaFileAlt, FaSearch, FaCodeBranch, FaPuzzlePiece } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

const tabs = [
  { id: "explorer", icon: <FaFileAlt /> },
  { id: "search", icon: <FaSearch /> },
  { id: "git", icon: <FaCodeBranch /> },
  { id: "extensions", icon: <FaPuzzlePiece /> },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("explorer");

  return (
    <div className="flex flex-col items-center bg-zinc-900 text-zinc-400 w-12 py-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={clsx(
            "text-xl p-2 mb-2 hover:text-white",
            activeTab === tab.id && "bg-zinc-700 text-white rounded"
          )}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon}
        </button>
      ))}
    </div>
  );
}
