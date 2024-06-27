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
import phonebookAppImg from "@/public/phonebookApp.png";
import portfolioImg from "@/public/portfolio-website.png";
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
    date: "2022-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Phonebook App",
    description:
      "Phonebook that stores names and correspoding numbers with features like data validation and updating exisiting records",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind", "Chakra UI"],
    imageUrl: phonebookAppImg,
    ghLink: "https://github.com/ta-02/phonebookApp",
  },
  {
    title: "Portfolio Webiste",
    description:
      "Portfolio built with modern technologies and patterns showcasing my skills and how to contact me ",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    ghLink: "https://github.com/ta-02/portfolio-website",
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
