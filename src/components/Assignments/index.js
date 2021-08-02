import React from "react";
import { Button } from "../Constants/ButtonElements";
import RoverIcon from "../../images/marsRover.png";
import CityIcon from "../../images/city.svg";
import ZaraIcon from "../../images/Zara_Logo.svg";
import {
  AssignmentsContainer,
  AssignmentsH1,
  AssignmentsWrapper,
  AssignmentsCard,
  AssignmentsIcon,
  AssignmentsH2,
  AssignmentsP,
  BtnWrapper,
} from "./AssignmentsElements";

//Method to open links in new tab
const newTabProjLink = (url) => {
  const newWindow = window.open(url, "_blank", "noopener", "noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Assignments = ({ buttonLabel, primary, dark, dark2 }) => {
  return (
    <AssignmentsContainer id="assignments">
      <AssignmentsH1>Uni Assignments</AssignmentsH1>
      <AssignmentsWrapper>
        <AssignmentsCard>
          <AssignmentsIcon src={RoverIcon} />
          <AssignmentsH2>Mars Rover Control System</AssignmentsH2>
          <AssignmentsP>
            I was tasked with developing a control system for a Mars Rover.
            Various commands were to be relayed to the control system through an
            externally developed API. This provided a good experience for
            programming around an API.
          </AssignmentsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/OOSE/tree/master/Assignments/Assignment2/MarsRover"
              style={{ textDecoration: "none" }}
              onClick={() =>
                newTabProjLink(
                  "https://github.com/LakshanMartin/OOSE/tree/master/Assignments/Assignment2/MarsRover"
                )
              }
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
        </AssignmentsCard>
        <AssignmentsCard>
          <AssignmentsIcon src={CityIcon} />
          <AssignmentsH2>City Electricity Network</AssignmentsH2>
          <AssignmentsP>
            A model simulation of a city's electricity usage. It either reads in
            or randomly generates data to be processed and represented as a Tree
            like structure of the network. A variety of common design patterns
            were implemented.
          </AssignmentsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/OOSE/tree/master/Assignments/Assignment1/ElectricityNetwork"
              style={{ textDecoration: "none" }}
              onClick={() =>
                newTabProjLink(
                  "https://github.com/LakshanMartin/OOSE/tree/master/Assignments/Assignment1/ElectricityNetwork"
                )
              }
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
        </AssignmentsCard>
        <AssignmentsCard>
          <AssignmentsIcon src={ZaraIcon} />
          <AssignmentsH2>Zara Website Redesign</AssignmentsH2>
          <AssignmentsP>
            I was tasked with developing a control system for a Mars Rover.
            Various commands were to be relayed to the control system through an
            externally developed API. This provided a good experience for
            programming around an API.
          </AssignmentsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/HCI/tree/master/ZARA"
              style={{ textDecoration: "none" }}
              onClick={() =>
                newTabProjLink(
                  "https://github.com/LakshanMartin/HCI/tree/master/ZARA"
                )
              }
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
        </AssignmentsCard>
      </AssignmentsWrapper>
    </AssignmentsContainer>
  );
};

export default Assignments;
