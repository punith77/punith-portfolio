import {
  SiPlaywright,
  SiAmazonaws,
  SiReact,
  SiTerraform,
  SiSpringboot,
  SiGooglecloud,
  SiSelenium,
  SiWebrtc,
  SiReactivex,
  SiAzuredevops,
  SiSocketdotio,
  SiPostgresql,
  SiReduxsaga,
  SiDotnet,
  SiRedux,
  SiSpring,
  SiHibernate,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { Fragment } from "react";

export const experienceData = [
  {
    id: "1",
    company: "Sillicon Valley Bank",
    period: "June 2022 - Mar 2023",
    location: "remote",
    role: "Full stack developer",
    current: true,
    icon: (
      <Fragment>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="299.037px"
          height="75.623px"
          viewBox="0 0 299.037 75.623"
          enable-background="new 0 0 299.037 75.623"
          xmlSpace="preserve"
        >
          <g>
            <rect fill="none" width="299.037" height="75.623" />
            <path
              fill="#0079C1"
              d="M31.439,46.067l-2.422,8.72h-7.91l10.332-33.959h10.076l10.586,33.959h-8.314l-2.623-8.72H31.439z    M40.057,40.328l-2.115-7.203c-0.605-2.023-1.211-4.537-1.715-6.555h-0.1c-0.506,2.018-1.008,4.582-1.561,6.555l-2.021,7.203   H40.057z M44.73,20.828l1.977,6.445h8.066v27.514h7.664V27.273h8.828v27.363c1.715,0.256,4.537,0.504,8.314,0.504   c6.752,0,10.887-1.106,13.357-3.072c2.113-1.711,3.527-4.133,3.527-7.256c0-4.338-2.67-7.271-6.551-8.28v-0.098   c3.828-1.463,5.391-4.078,5.391-7.047c0-3.127-1.662-5.445-4.031-6.705c-2.521-1.463-5.352-1.854-10.039-1.854L44.73,20.828   L44.73,20.828z M78.877,27.268h3.275c3.477,0,5.322,1.23,5.322,3.805c0,2.516-1.994,3.139-6.078,3.139h-2.52L78.877,27.268   L78.877,27.268z M81.854,49.447c-1.312,0-2.223,0-2.977-0.103v-9.572h2.621c3.83,0,6.902,1.357,6.902,4.738   C88.4,48.086,85.328,49.447,81.854,49.447z"
            />
          </g>
        </svg>
      </Fragment>
    ),
    description:
      "Developed full stack application to onboard SVB Customers using Loopback, React, and AWS. Migrated OpenShift deployed node servers to AWS",
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
        name: "AWS",
        icon: <SiAmazonaws />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Terraform",
        icon: <SiTerraform />,
      },
    ],
    bg: "#FFF4F4",
  },
  {
    id: "2",
    company: "ATB Financial",
    period: "July 2021 - June 2022",
    location: "remote",
    role: "Full stack developer",
    current: false,
    description:
      "Developed Applications for Bank employees to server ATB Customers with their day to day banking. Developed apis using Java spring boot and Express with Typescript",
    stack: [
      {
        name: "NodeJs with typescript using HapiJS",
        icon: <FaNodeJs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "Selenium",
        icon: <SiSelenium />,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud />,
      },
    ],
    bg: "#FFF1FB",
  },
  {
    id: "3",
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
    ],
  },
  {
    id: "4",
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
    id: "5",
    company: "Shaw Communications",
    period: "Jan 2017 - May 2018",
    location: "remote",
    current: false,
    role: "Software Developer",
    description: "Developed internal application to integrate order management and Technicians",
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
];
