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

const Assignments = ({ buttonLabel, primary, dark, dark2 }) => {
  return (
    <AssignmentsContainer id="assignments">
      <AssignmentsH1>Uni Assignments</AssignmentsH1>
      <AssignmentsWrapper>
        <AssignmentsCard>
          <AssignmentsIcon src={RoverIcon} />
          <AssignmentsH2>Mars Rover Control System</AssignmentsH2>
          <AssignmentsP>
            Implementation of various design patterns. Commands were to be
            relayed to the control system through an externally developed API.
            This provided a good experience for programming around an API.
          </AssignmentsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/OOSE/tree/master/Assignments/Assignment2/MarsRover"
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
        </AssignmentsCard>
        <AssignmentsCard>
          <AssignmentsIcon src={ZaraIcon} />
          <AssignmentsH2>Zara Website Redesign</AssignmentsH2>
          <AssignmentsP>
            An optimisation of the Zara Australia website in terms of UI and UX
            design. This was largely an analysis on the UI and UX of the
            existing website. The assignment specification limited us to
            NetBeans and JavaFX with no 3rd party libraries.
          </AssignmentsP>
          <BtnWrapper>
            <Button
              //Including href just to show web address on hover
              href="https://github.com/LakshanMartin/HCI/tree/master/ZARA"
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
        </AssignmentsCard>
      </AssignmentsWrapper>
    </AssignmentsContainer>
  );
};

export default Assignments;
