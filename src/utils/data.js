import { HiOutlineDesktopComputer } from "react-icons/hi";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiRuby,
  SiPostgresql,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Web Applications",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
    stacks: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: DiHtml5, color: "#E34F26" },
      { icon: DiCss3, color: "#1572B6" },
      { icon: SiJavascript, color: "#F7DF1E" },
      { icon: SiRuby, color: "#CC342D" },
      // {icon:FaGitAlt,color:"#F05032"}
    ],
  },
  {
    name: "Mobile Applications",
    stacks: 63,
    icon: CiMobile1,
    bg: "#EEC048",
    stacks: [{ icon: TbBrandReactNative, color: "#B7178C" }],
  },
  {
    name: "Design",
    stack: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
    stacks: [
      { icon: SiAdobephotoshop, color: "#31A8FF" },
      { icon: SiAdobexd, color: "#FF61F6" },
      { icon: SiAdobeillustrator, color: "#FF9A00" },
      { icon: CgFigma, color: "#F24E1E" },
    ],
  },
];

export const WhatDoIHelp = [
  "I specialize in creating beautiful and functional web applications that will make your business stand out from the crowd. Whether you're looking for a sleek and modern portfolio website, an online store to boost your sales, or a complex full-stack application, I have the skills and expertise to deliver results that exceed your expectations. Don't let your ideas remain just ideas - reach out to me today, and let's work together to turn them into reality!",
];

export const workExp = [
  {
    place: "Vinhood (Italy), Remote",
    tenure: "January 2023 - Present",
    role: "React,Ts Software Developer",
    detail:
      "Building front-end web applications with React,Typescript and storybook.",
    Link: "Vinhood",
    URL: "https://www.vinhood.com/",
  },
  {
    place: "Upwork, Freelance",
    tenure: "June 2022 - December 2022",
    role: "React, Ruby on Rails Software Developer",
    detail:
      "Building front-end web applications with React and back-end server applications with Ruby on Rails.",
    Link: "Upwork",
    URL: "https://www.upwork.com/freelancers/~010679599acceac609",
  },
  {
    place: "Iskru Logistics",
    tenure: "January 2022 - April 2022",
    role: "React, Ruby on Rails Software Developer",
    detail:
      "Building  company website and Inventory management software using React js and Ruby on Rail",
    URL: "Iskru.Logistics",
    Link: "",
  },
  {
    place: "Keevadis Agency",
    tenure: "Aug 2021 - Dec 2021",
    role: " Software Developer intern",
    detail: "Building Real Estate Website with HTML,CSS and Javascript.",
    Link: "keevadis",
    URL: "https://keevadis.pages.dev/",
  },
];

export const comments = [
  {
    name: "Kevin Mwaura",
    post: "Software Engineer",
    comment:
      "Having worked with Evans on a number of projects i can say he has what it takes to get the job done.",
    img: "./bro01.jpg",
  },
  {
    name: "Purity M.",
    post: "Front-end Designer",
    comment:
      "Kiprop has been my colleague and mentor, back in the day he would come up with brilliant ideas that would make us win group challenges .",
    img: "./siz01.jpg",
  },
  {
    name: "Felicia ",
    post: "Research scientist",
    comment:
      "Evans is very good at his work, he makes websites that look pretty.",
    img: "./siz02.jpg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
