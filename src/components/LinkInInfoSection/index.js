import React from "react";
import { Button } from "../Constants/InButtonElements";
import {
  ExpContainer,
  ExpWrapper,
  ExpRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  ImgWrapper,
  Img,
} from "./LinkInInfoSectionElements";

const ExperienceSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ExpContainer lightBg={lightBg} id={id}>
        <ExpWrapper>
          <ExpRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    // href={buttonLink}
                    // target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                    to="/experiencePage"
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
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </ExpRow>
        </ExpWrapper>
      </ExpContainer>
    </>
  );
};

export default ExperienceSection;
