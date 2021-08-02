import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterYear,
  FooterIcons,
  FooterIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo to="/">Lucky</FooterLogo>
        <FooterYear>{new Date().getFullYear()}</FooterYear>
        <FooterIcons>
          <FooterIconLink
            href="https://github.com/LakshanMartin"
            target="_blank"
            aria-label="GitHub">
            <FaGithub />
          </FooterIconLink>
          <FooterIconLink
            href="https://linkedin.com"
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
