// import images
import Hero_person from "./assets/images/Hero/person.png";

import nextjs from "./assets/images/Skills/next.png";
import css from "./assets/images/Skills/css.jpeg";
import mongo from "./assets/images/Skills/mongo .png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import js from "./assets/images/Skills/js.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/gxn.png";
import project2 from "./assets/images/Projects/devsthan.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "MOHIT",
    LastName: "RAWAT",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1.5+",
        text: "Years of Experince in Web development",
      },
      {
        count: "4+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Next js",
        para: "Server-Side Rendering (SSR)",
        logo: nextjs,
      },
      {
        name: "Node js",
        para: "Single-Threaded Model",
        logo: nodejs,
      },
      {
        name: "CSS",
        para: "Responsive Design",
        logo: css,
      },
      {
        name: "React js",
        para: "Component-Based Architecture",
        logo: reactjs,
      },
      {
        name: "Javascript",
        para: "Dynamic Typing",
        logo: js,
      },
      {
        name: "MongoDB",
        para: "Document-Oriented Storage",
        logo: mongo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Website Development",
        para: "Next.js This frameworks and libraries facilitate the development of dynamic, responsive, and high-performance web applications. They provide tools and structures to build both the frontend and backend of web applications efficiently.",
        logo: services_logo1,
      },
      {
        title: "Database Management",
        para: "MongoDB Atlas, Firebase, PostgreSQL. These services handle the storage, retrieval, and management of data. They provide tools for database creation, scaling, and maintenance, allowing you to focus on application development.",
        logo: services_logo2,
      },
      {
        title: "CI/CD (Continuous Integration and Continuous Deployment)",
        para: " CI/CD services automate the process of integrating code changes, testing, and deploying applications. They ensure that new code is continuously tested and deployed to production environments, enhancing development efficiency and reliability.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Suppliments Website",
        image: project1,
        link:"https://www.gogxn.com"
      },
      {
        title: "Tour and Travel Management",
        image: project2,
        link:"https://devstan-fronend.vercel.app"
      },
      // {
      //   title: "Creative Website",
      //   image: project3,
      // },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Cultivating expertise in Website Development, I offer innovative solutions and timely delivery for your project. With a collaborative approach and a focus on client satisfaction, let's turn your vision into reality. Contact me today to get started!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rawat009111@gmail.com",
        icon: GrMail,
        link: "mailto:rawat009111@gmail.com",
      },
      {
        text: "+91 7015317899",
        icon: MdCall,
        link: "https://wa.me/7015317899",
      },
      {
        text: "Mohit Rawat",
        icon: BsInstagram,
        link: "https://www.instagram.com/i_am_rawat_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
