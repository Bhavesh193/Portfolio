import React from "react";
import ProjectBox from "./ProjectBox";
import FoodRestaurantApp from "../images/FoodRestaurantApp.png";
import MovieMania from "../images/MovieMania.png";
import GeminiAi from "../images/GeminiAi.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={FoodRestaurantApp}
          projectName="FoodRestaurantApp"
        />
        <ProjectBox projectPhoto={MovieMania} projectName="MovieMania" />
        <ProjectBox projectPhoto={GeminiAi} projectName="GeminiAi" />
      </div>
    </div>
  );
};

export default Projects;
