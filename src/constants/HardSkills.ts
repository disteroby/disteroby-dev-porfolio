import { CSSProperties } from "react";
import { IconType } from "react-icons";
import {
    BiLogoAndroid,
    BiLogoBlender,
    BiLogoBootstrap,
    BiLogoCPlusPlus,
    BiLogoCss3,
    BiLogoDocker,
    BiLogoFigma,
    BiLogoFirebase,
    BiLogoFlutter,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTrello,
    BiLogoTypescript,
    BiLogoUnity,
} from "react-icons/bi";
import { FaGitlab } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiArduino, SiCypress, SiJest, SiUnrealengine } from "react-icons/si";

export type SkillType = "fullstack" | "mobile" | "game" | "misc";

export type Skill = {
    name: string;
    level: number;
    type: SkillType | SkillType[];
    logo: IconType;
    color: CSSProperties["color"];
};

export const HardSkills: Skill[] = [
    {
        name: "Spring Boot",
        color: "#6cbe4a",
        type: "fullstack",
        logo: BiLogoSpringBoot,
        level: 3.5,
    },
    {
        name: "React",
        color: "#44d6f6",
        type: "fullstack",
        logo: BiLogoReact,
        level: 4,
    },
    {
        name: "TypeScript",
        color: "#087ed1",
        type: "fullstack",
        logo: BiLogoTypescript,
        level: 3,
    },
    {
        name: "JavaScript",
        color: "#eeda54",
        type: "fullstack",
        logo: BiLogoJavascript,
        level: 4,
    },
    {
        name: "Java",
        color: "#e93435",
        type: ["mobile", "fullstack"],
        logo: BiLogoJava,
        level: 5,
    },
    {
        name: "Android",
        color: "#48c971",
        type: "mobile",
        logo: BiLogoAndroid,
        level: 3,
    },
    {
        name: "Unity",
        color: "#29333d",
        type: "game",
        logo: BiLogoUnity,
        level: 2.5,
    },
    {
        name: "Flutter",
        color: "#5cc6f6",
        type: "mobile",
        logo: BiLogoFlutter,
        level: 3,
    },
    {
        name: "HTML5",
        color: "#e2542d",
        type: "fullstack",
        logo: BiLogoHtml5,
        level: 4,
    },
    {
        name: "Unreal Engine",
        color: "#222325",
        type: "game",
        logo: SiUnrealengine,
        level: 4,
    },
    {
        name: "Tailwind CSS",
        color: "#38b2ad",
        type: "fullstack",
        logo: BiLogoTailwindCss,
        level: 3.5,
    },
    {
        name: "CSS3",
        color: "#3069ef",
        type: "fullstack",
        logo: BiLogoCss3,
        level: 4,
    },
    {
        name: "Trello",
        color: "#0563de",
        type: "misc",
        logo: BiLogoTrello,
        level: 4.5,
    },
    {
        name: "Figma",
        color: "#a158fd",
        type: "misc",
        logo: BiLogoFigma,
        level: 2,
    },
    {
        name: "C++",
        color: "#1173be",
        type: "game",
        logo: BiLogoCPlusPlus,
        level: 3.5,
    },
    {
        name: "Bootstrap",
        color: "#9535fa",
        type: "fullstack",
        logo: BiLogoBootstrap,
        level: 4.5,
    },
    {
        name: "Cypress",
        color: "#6dd2a9",
        type: "fullstack",
        logo: SiCypress,
        level: 1.5,
    },
    {
        name: "Jest",
        color: "#b34561",
        type: "fullstack",
        logo: SiJest,
        level: 3.5,
    },
    {
        name: "Docker",
        color: "#0894e5",
        type: "fullstack",
        logo: BiLogoDocker,
        level: 2.5,
    },
    {
        name: "GitLab",
        color: "#e26220",
        type: "misc",
        logo: FaGitlab,
        level: 4.5,
    },
    {
        name: "GitHub",
        color: "#282b2c",
        type: "misc",
        logo: BiLogoGithub,
        level: 3.5,
    },
    {
        name: "Blender",
        color: "#e97600",
        type: "game",
        logo: BiLogoBlender,
        level: 2,
    },
    {
        name: "Arduino",
        color: "#219ba2",
        type: "misc",
        logo: SiArduino,
        level: 1.5,
    },
    {
        name: "MySQL",
        color: "#09658d",
        type: ["mobile", "fullstack", "game"],
        logo: GrMysql,
        level: 4,
    },
    {
        name: "MongoDb",
        color: "#14b361",
        type: ["mobile", "fullstack", "game"],
        logo: BiLogoMongodb,
        level: 2.5,
    },
    {
        name: "Firebase",
        color: "#fdca2f",
        type: ["mobile", "fullstack", "game"],
        logo: BiLogoFirebase,
        level: 3,
    },
];
