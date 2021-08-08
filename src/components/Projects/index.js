import React from "react";
import AndroidIcon from "../../images/android.svg";
import CTFIcon from "../../images/ctf.svg";
import ReactIcon from "../../images/react.svg";
import { Button } from "../Constants/OutButtonElements";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  BtnWrapper,
} from "./ProjectsElements";

const Projects = ({ buttonLabel, primary, dark, dark2 }) => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Personal Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={ReactIcon} />
          <ProjectsH2>Website Portfolio</ProjectsH2>
          <ProjectsP>
            I created this website as a way to learn JavaScript and the React
            library. This site was my first venture into Web Development. I have
            expectations to utilise this website to host and better display my
            Project Portfolio.
          </ProjectsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/Portfolio_Website"
              target="_blank"
              style={{ textDecoration: "none" }}
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}>
              {buttonLabel}
            </Button>
          </BtnWrapper>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={AndroidIcon} />
          <ProjectsH2>Weekly Specials</ProjectsH2>
          <ProjectsP>
            This project is an Android Application that was inspired by my
            wife’s frustrations of having to switch between multiple phone
            browser tabs to view and compare prices of groceries through the
            Woolworths Supermarket and Coles Supermarket websites.
          </ProjectsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/Weekly_Specials"
              target="_blank"
              style={{ textDecoration: "none" }}
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}>
              {buttonLabel}
            </Button>
          </BtnWrapper>
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
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/CTF_WriteUps"
              target="_blank"
              style={{ textDecoration: "none" }}
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}>
              {buttonLabel}
            </Button>
          </BtnWrapper>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
