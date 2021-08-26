import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { LinkedInLink, GitHubLink } from "../Constants/Data";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterYear,
  FooterIcons,
  FooterIconLink,
} from "./FooterElements";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo onClick={scrollToTop}>Lucky</FooterLogo>
        <FooterYear>{new Date().getFullYear()}</FooterYear>
        <FooterIcons>
          <FooterIconLink href={GitHubLink} target="_blank" aria-label="GitHub">
            <FaGithub />
          </FooterIconLink>
          <FooterIconLink
            href={LinkedInLink}
            target="_blank"
            aria-label="Linkedin">
            <FaLinkedin />
          </FooterIconLink>
        </FooterIcons>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
