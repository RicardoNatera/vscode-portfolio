import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiMysql,
  SiTypescript,
  SiPostman,
} from "react-icons/si";

export const iconMap = {
  FaReact: <FaReact className="text-cyan-400" />,
  SiNextdotjs: <SiNextdotjs className="text-white" />,
  SiTailwindcss: <SiTailwindcss className="text-sky-400" />,
  SiNestjs: <SiNestjs className="text-red-500" />,
  FaNodeJs: <FaNodeJs className="text-green-500" />,
  SiMysql: <SiMysql className="text-blue-400" />,
  SiTypescript: <SiTypescript className="text-blue-400" />,
  FaGitAlt: <FaGitAlt className="text-orange-500" />,
  SiPostman: <SiPostman className="text-orange-600" />,
} as const;

export type IconKey = keyof typeof iconMap;
