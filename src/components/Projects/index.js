import React from "react";
import AndroidIcon from "../../images/android.svg";
import CTFIcon from "../../images/ctf.svg";
import ReactIcon from "../../images/react.svg";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Personal Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={AndroidIcon} />
          <ProjectsH2>Weekly Specials</ProjectsH2>
          <ProjectsP>
            This project is an Android Application that was inspired by my
            wife’s frustrations of having to switch between multiple phone
            browser tabs to view and compare prices of groceries through the
            Woolworths Supermarket and Coles Supermarket websites.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={CTFIcon} />
          <ProjectsH2>Cyber Security CTF Write-Ups</ProjectsH2>
          <ProjectsP>
            Aside from studying Software Engineering, I am also quite interested
            in Cyber Security. I enjoy working through “Capture the Flag”
            (CTF’s) games to learn a variety of skills not formally taught
            through my degree.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={ReactIcon} />
          <ProjectsH2>Website Portfolio</ProjectsH2>
          <ProjectsP>
            I began this project as a way to learn JavaScript and the React
            library. I have expectations to utilise this website to host and
            better display my Project Portfolio.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
