import {
  SiPlaywright,
  SiAmazonaws,
  SiReact,
  SiTerraform,
  SiSpringboot,
  SiGooglecloud,
  SiWebrtc,
  SiReactivex,
  SiAzuredevops,
  SiSocketdotio,
  SiSelenium,
  SiPostgresql,
  SiReduxsaga,
  SiDotnet,
  SiRedux,
  SiSpring,
  SiHibernate,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { Fragment } from "react";

export const experienceData = [
  {
    id: "1",
    company: "ATB Financial",
    period: "July 2021 - Present",
    location: "remote",
    role: "Full stack developer",
    current: true,
    description:
      "Developed Applications for Bank employees to server ATB Customers with their day to day banking. Developed apis using Java spring boot, Express with Typescript and Python",
    stack: [
      {
        name: "NodeJs with typescript using Loopback",
        icon: <FaNodeJs />,
      },
      {
        name: "Playwright",
        icon: <SiPlaywright />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Terraform",
        icon: <SiTerraform />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    bg: "#FFF4F4",
  },

  {
    id: "2",
    company: "Motorolla Solutions",
    period: "May 2020 - July 2021",
    location: "remote",
    role: "Software Engineer",
    bg: "#FFF4F4",
    current: false,
    description:
      "Developed api's for security surveillance cameras and served apis using REST, Real-Time, IOT using webrtc",
    stack: [
      {
        name: "NodeJs with typescript using Loopback",
        icon: <FaNodeJs />,
      },
      {
        name: "Webrtc",
        icon: <SiWebrtc />,
      },
      {
        name: "RxJs",
        icon: <SiReactivex />,
      },
      {
        name: "Azure Devops",
        icon: <SiAzuredevops />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
  },
  {
    id: "3",
    company: "Vog App Developers",
    period: "Jan 2019 - May 2020",
    role: "Software Developer",
    location: "remote",
    current: false,
    description:
      "Developed backend for mobile applications using .Net core 3 and admin panels for Mobile applications using React, Redux-Saga",
    stack: [
      {
        name: ".Net Core",
        icon: <SiDotnet />,
      },
      {
        name: "Postgres",
        icon: <SiPostgresql />,
      },
      {
        name: "AWS",
        icon: <SiAmazonaws />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Redux Saga",
        icon: <SiReduxsaga />,
      },
    ],
    bg: "#FFF1FB",
  },

  {
    id: "4",
    company: "ATB Financial",
    period: "May 2018 - Dec 2018",
    location: "remote",
    role: "Full stack developer",
    current: false,
    description:
      "Developed Applications for Bank employees to server ATB Customers with their day to day banking. Developed apis using Java spring boot and Express with Javascript",
    stack: [
      {
        name: "NodeJs with Javascript using Express",
        icon: <FaNodeJs />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Selenium",
        icon: <SiSelenium />,
      },
    ],
    bg: "#FFF4F4",
  },

  {
    id: "5",
    company: "Shaw Communications",
    period: "Jan 2017 - May 2018",
    location: "remote",
    current: false,
    role: "Software Developer",
    description: "Developed internal application to integrate order management and processing order",
    stack: [
      {
        name: "NodeJs with typescript using Loopback",
        icon: <FaNodeJs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Redux",
        icon: <SiRedux />,
      },
      {
        name: "Spring",
        icon: <SiSpring />,
      },
    ],
    bg: "#FFF1FB",
  },

  {
    id: "6",
    company: "SparxIT",
    period: "Aug 2015 - Jan 2017",
    location: "remote",
    current: false,
    description: "",
    role: "Software Engineer",
    stack: [
      {
        name: "Spring",
        icon: <SiSpring />,
      },
      {
        name: "Hibernate",
        icon: <SiHibernate />,
      },
    ],
    bg: "#FFF1FB",
  },
  {
    id: "7",
    company: "Accenture",
    period: "May 2013 - August 2014",
    location: "remote",
    description: "",
    current: false,
    role: "Application Support Analyst",
    stack: [
      {
        name: ".Net",
        icon: <SiDotnet />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
      },
    ],
    bg: "#FFF1FB",
  },
];
