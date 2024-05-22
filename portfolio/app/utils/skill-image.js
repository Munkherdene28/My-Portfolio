import aws from "/public/svg/skills/aws.svg";
import css from "/public/svg/skills/css.svg";
import graphql from "/public/svg/skills/graphql.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import materialui from "/public/svg/skills/materialui.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import github from "/public/svg/skills/github.svg";
import apollo from "/public/svg/skills/apollo.svg";
import nodeJS from "/public/svg/skills/nodeJS.svg";
import postman from "/public/svg/skills/postman.svg";
import expressJS from "/public/svg/skills/expressJS.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "typescript":
      return typescript;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "aws s3":
      return aws;
    case "github":
      return github;
    case "graphql":
      return graphql;
    case "materialui":
      return materialui;
    case "apollo":
      return apollo;
    case "graphql":
      return graphql;
    case "node js":
      return nodeJS;
    case "postman":
      return postman;
    case "express js":
      return expressJS;
    default:
      break;
  }
};
