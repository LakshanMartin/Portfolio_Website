import CV from "../../pages/CV-2022.pdf";

export const about = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headLine: "Student at Curtin University",
  description:
    "I'm currently studying a Bachelor of Science(Computing) as a part of the Software Engineering stream",
  buttonLabel: "Course Structure",
  buttonLink:
    "https://archive.handbook.curtin.edu.au/december2018/courses/32/320703.html",
  imgStart: false,
  img: require("../../images/studying.svg").default,
  alt: "Studying",
  dark: true,
  primary: true,
  darkText: false,
};

export const experience = {
  id: "experience",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Experience",
  headLine: "Former Tax Accountant",
  description:
    "Prior to studying Software Engineering, I was a Tax Accountant for 4 \xBD years",
  buttonLabel: "My R\xE9sum\xE9",
  buttonLink: CV,
  imgStart: true,
  img: require("../../images/resume.svg").default,
  alt: "Resume",
  dark: false,
  primary: false,
  darkText: true,
};
