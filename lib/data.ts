import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiFramer,
  SiC,
  SiCplusplus,
  SiPandas,
  SiSelenium,
  SiMicrosoft,
  SiPostgresql,
} from "react-icons/si";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaGolang } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    company: "Yamaha Motors Canada",
    location: "Toronto, ON",
    description:
      "Worked under the accesories team in creating data validaton applications and internal utility tools",
    icon: React.createElement(FaPython),
    date: "2022 May - 2022 Aug",
  },
  {
    title: "Full-Stack Developer",
    company: "Kohinoor Fashion Studio",
    location: "Toronto, Ontario",
    description:
      "Worked as a Full-Stack web developer in charge of making a web-app for displaying businesses products and information",
    icon: React.createElement(FaReact),
    date: "2022 Jan - 2022 Apr",
  },
  {
    title: "BBA & CS Degree",
    company: "Wilfrid Laurier University",
    location: "Waterloo, Ontario",
    description:
      "Currently pursuing a Double Degree in Computer Science and Business",
    icon: React.createElement(IoSchoolOutline),
    date: "2022-present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Frontend Technologies
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: FaJsSquare },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Tailwind", icon: SiTailwindcss },
  { skill: "Framer Motion", icon: SiFramer },
  // Backend Technologies
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "Express", icon: SiExpress },
  // Database
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  // Version Control
  { skill: "Git", icon: FaGitAlt },
  // Programming Languages
  { skill: "Go", icon: FaGolang },
  { skill: "Python", icon: SiPython },
  { skill: "Java", icon: FaJava },
  { skill: "C", icon: SiC },
  { skill: "C++", icon: SiCplusplus },
  // Libraries/Frameworks
  { skill: "Pandas", icon: SiPandas },
  // Tools
  { skill: "Selenium", icon: SiSelenium },
  { skill: "VBA", icon: SiMicrosoft },
] as const;
