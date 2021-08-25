import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Video from "../../videos/video2.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroIcons,
  HeroIconLink,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, my name is Lakshan Martin</HeroH1>
        <HeroH1>(aka "Lucky")</HeroH1>
        <HeroP>Welcome to my portfolio website.</HeroP>
        <HeroP>
          This is where I will be hosting all my personal projects and
          university assignments.
        </HeroP>
        <HeroIcons>
          <HeroIconLink
            href="https://github.com/LakshanMartin"
            target="_blank"
            aria-label="GitHub">
            <FaGithub />
          </HeroIconLink>
          <HeroIconLink
            href="https://www.linkedin.com/in/lakshan-martin/"
            target="_blank"
            aria-label="Linkedin">
            <FaLinkedin />
          </HeroIconLink>
        </HeroIcons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
