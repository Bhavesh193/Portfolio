import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FoodRestaurantApp:
      "The Food Restaurant App is a full-featured platform built using the MERN stack. It includes key functionalities such as restaurant listings and secure payment processing with Razorpay. The app allows users to browse menus, place orders, and make payments, offering a smooth and efficient user experience.",
    FoodRestaurantAppGithub: "https://github.com/Bhavesh193/FoodRestaurantApp",

    MovieMania:
      "Moviemania is a movie database app built with React.js, Redux, and Material UI. It allows users to search for movies, view details, explore cast profiles, and sort by genres. Features include user authentication, dark mode, movie trailers, IMDB ratings, and the ability to add movies to favorites or watchlists.",
    MovieManiaGithub: "https://github.com/Bhavesh193/MovieMania",
    MovieManiaWebsite: "https://filmpirex.netlify.app/",

    GeminiAi:
      "The Gemini AI Clone App is a React-based project that mimics the core features of Gemini AI, including secure user authentication, AI-powered interactions, and a modern, responsive UI. Built with React.js, Redux, and Material UI, the app offers a seamless experience with features like light/dark mode and efficient state management.",
    GeminiAiGithub: "https://github.com/Bhavesh193/Gemini.ai-Clone",
    GeminiAiWebsite: "https://gemini-ai-clone-brown.vercel.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
