import React, { useState, useEffect } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { LinkedInLink, GitHubLink } from "../Constants/Data";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcons,
  NavIconLink,
} from "./NavbarElements";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  // Change Navbar transparency at scroll position
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  });

  // Show/Hide NavIcons at scroll position
  const [showIcons, setShowIcons] = useState("hidden");

  const iconsVis = () => {
    if (window.scrollY >= 720) {
      setShowIcons("visible");
    } else {
      setShowIcons("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", iconsVis);

    return () => {
      window.removeEventListener("scroll", iconsVis);
    };
  });

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={scrollToTop}>Lucky</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Personal Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="assignments"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                Uni Assignments
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavIcons style={{ visibility: showIcons }}>
            <NavIconLink href={GitHubLink} target="_blank" aria-label="GitHub">
              <FaGithub />
            </NavIconLink>
            <NavIconLink
              href={LinkedInLink}
              target="_blank"
              aria-label="Linkedin">
              <FaLinkedin />
            </NavIconLink>
          </NavIcons>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
