import { Files, Search, GitBranch, Grid2x2Plus, Settings } from "lucide-react";

export default function Sidebar() {
  const icons = [Files, Search, GitBranch, Grid2x2Plus, Settings];

  return (
    <aside className="w-14 bg-[#333333] h-full flex flex-col items-center py-4 space-y-6">
      {icons.map((Icon, idx) => (
        <Icon
          key={idx}
          className="text-gray-400 hover:text-white w-6 h-6 cursor-pointer transition-colors"
        />
      ))}
    </aside>
  );
}
