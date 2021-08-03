import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarIconsWrapper,
  SidebarIcons,
  SidebarIconLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Me
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Personal Projects
          </SidebarLink>
          <SidebarLink to="assignments" onClick={toggle}>
            Uni Assignments
          </SidebarLink>
        </SidebarMenu>
        <SidebarIconsWrapper>
          <SidebarIcons>
            <SidebarIconLink
              href="https://github.com/LakshanMartin"
              target="_blank"
              aria-label="GitHub">
              <FaGithub />
            </SidebarIconLink>
            <SidebarIconLink
              href="https://linkedin.com"
              target="_blank"
              aria-label="Linkedin">
              <FaLinkedin />
            </SidebarIconLink>
          </SidebarIcons>
        </SidebarIconsWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
