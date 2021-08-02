import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Projects from "../components/Projects";
import { githubBtnData } from "../components/Constants/GitHubBtnData";
import Assignments from "../components/Assignments";
import Footer from "../components/Footer";

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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects {...githubBtnData} />
      <Assignments {...githubBtnData} />
      <Footer />
    </>
  );
};

export default Home;
