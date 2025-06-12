import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiMysql,
} from "react-icons/si";

export const iconMap = {
  FaReact: <FaReact className="text-cyan-400" />,
  SiNextdotjs: <SiNextdotjs className="text-white" />,
  SiTailwindcss: <SiTailwindcss className="text-sky-400" />,
  SiNestjs: <SiNestjs className="text-red-500" />,
  FaNodeJs: <FaNodeJs className="text-green-500" />,
  SiMysql: <SiMysql className="text-blue-400" />,
  SiPrisma: <SiPrisma className="text-purple-500" />,
  FaGitAlt: <FaGitAlt className="text-orange-500" />,
} as const;

export type IconKey = keyof typeof iconMap;
