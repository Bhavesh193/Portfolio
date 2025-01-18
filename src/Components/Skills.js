import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaJava, FaCss3 } from "react-icons/fa";
import { TbBrandTailwind, TbBrandMysql } from "react-icons/tb";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Java: <FaJava />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    HTML: <AiFillHtml5 />,
    CSS: <FaCss3 />,
    Tailwind: <TbBrandTailwind />,
    SQL: <TbBrandMysql />,
  };

  return (
    <div title={skill} className="SkillBox">
      {/* {icon[skill]} */}
      <div className="SkillIcon">{icon[skill]}</div>
      <div className="SkillName">{skill}</div>
    </div>
  );
};

export default Skills;
