import React from "react";
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRoute,
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
          <SidebarLink to="projects" onClick={toggle}>
            Personal Projects
          </SidebarLink>
          <SidebarLink to="assignments" onClick={toggle}>
            Uni Assignments
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute to="/contact">Contact Me</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
