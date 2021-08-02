import React from "react";
import { Button } from "../Constants/ButtonElements";
import RoverIcon from "../../images/marsRover.png";
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
      </AssignmentsWrapper>
    </AssignmentsContainer>
  );
};

export default Assignments;
