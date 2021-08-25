import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
          <FooterIconLink
            href="https://github.com/LakshanMartin"
            target="_blank"
            aria-label="GitHub">
            <FaGithub />
          </FooterIconLink>
          <FooterIconLink
            href="https://www.linkedin.com/in/lakshan-martin/"
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
