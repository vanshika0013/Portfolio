import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiFramer } from "react-icons/si";
import { TbApi, TbDeviceMobile } from "react-icons/tb";

export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS", icon: FaCss3Alt, color: "#2965F1" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FAFAFA" },
  { name: "Figma", icon: FaFigma, color: "#A259FF" },
  { name: "Responsive Design", icon: TbDeviceMobile, color: "#38BDF8" },
  { name: "REST APIs", icon: TbApi, color: "#8B5CF6" },
];

export const learning = [
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];
