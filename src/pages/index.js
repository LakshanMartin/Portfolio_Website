import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LinkOutInfoSection from "../components/LinkOutInfoSection";
import { about } from "../components/LinkOutInfoSection/Data";
import Projects from "../components/Projects";
import { githubBtnData } from "../components/Constants/GitHubBtnData";
import Assignments from "../components/Assignments";
import Footer from "../components/Footer";
import LinkInInfoSection from "../components/LinkInInfoSection";
import { experience } from "../components/LinkInInfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <LinkOutInfoSection {...about} />
      <LinkInInfoSection {...experience} />
      <Projects {...githubBtnData} />
      <Assignments {...githubBtnData} />
      <Footer />
    </>
  );
};

export default Home;
