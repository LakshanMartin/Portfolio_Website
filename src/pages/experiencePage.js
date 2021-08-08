import React from "react";
import LinkInInfoSection from "../components/LinkInInfoSection";
import { experience } from "../components/LinkInInfoSection/Data";

const ExperiencePage = () => {
  return (
    <>
      <LinkInInfoSection {...experience} />
    </>
  );
};

export default ExperiencePage;
