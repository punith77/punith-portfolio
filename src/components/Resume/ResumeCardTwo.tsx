import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { resumeData } from "../../data/resumeData";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { FcBriefcase, FcGraduationCap } from "react-icons/fc";
import { AiOutlineBarChart } from "react-icons/ai";
import { SlGraduation, SlBriefcase } from "react-icons/sl";
import portfolioData from "../../data/worksData";
import Masonry from "react-masonry-css";
import EducationComponent from "./Education";
import ExperienceComponent from "./Experience";
import Skills from "./Skills";

const ResumeCardTwo = () => {
  const { theme, setTheme } = useTheme();
  const [singleData, setSingleData] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [test, setTest] = useState("Education");

  const data = [
    {
      label: "Education",
      value: "education",
      icon: <SlGraduation />,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Experience",
      value: "experience",
      icon: <SlBriefcase />,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },

    {
      label: "Skills",
      value: "skills",
      icon: <AiOutlineBarChart />,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },

    // {
    //   label: "Settings",
    //   value: "settings",
    //   icon: Cog6ToothIcon,
    //   desc: `We're not always in the position that we want to be at.
    //   We're constantly growing. We're constantly making mistakes. We're
    //   constantly trying to express ourselves and actualize our dreams.`,
    // },
  ];

  const [activeTab, setActiveTab] = useState("education");
  const tabHeaderStyles = "cursor-pointer py-2 px-4 text-gray-500  w-full flex items-center space-x-2";
  const tabHeaderActiveStyles = tabHeaderStyles + "border-b-4 text-[#F95054] border-[#F95054]";
  // const tabStyles=
  const handleTabClick = (value: string) => {
    console.log(value);
    console.log(activeTab);
    setActiveTab(value);
  };

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    500: 1,
  };

  // start dynamic portfolio with slug

  // const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id: any) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id: any) => {
    handlePortfolioData(id);
  };
  // End dynamic portfolio with slug

  // start filter data based on function

  const handleSearch = (text: any) => {
    handleData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("Education");
    handleData("Education");
  }, []);

  const [portfolioInfo, setPortfolioInfo] = useState(portfolioData);

  // fillter portfilo data
  const handleData = (text: any) => {
    if (text === "All") {
      setPortfolioInfo(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setPortfolioInfo(findData);
    }
  };
  console.log(test);
  return (
    <>
      <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
        <li
          className={`${test === "Education" ? "text-[#FA5252]" : "fillter-btn"} mr-4 md:mx-4`}
          onClick={() => handleSearch("Education")}
        >
          Education
        </li>
        <li
          className={`${test === "Experience" ? "text-[#FA5252]" : "fillter-btn"} mr-4 md:mx-4`}
          onClick={() => handleSearch("Experience")}
        >
          Experience
        </li>
        <li
          className={`${test === "Skills" ? "text-[#FA5252]" : "fillter-btn ml-0"} mr-4 md:mx-4`}
          onClick={() => handleSearch("Skills")}
        >
          Skills
        </li>
      </ul>

      {test === "Education" && <EducationComponent />}
      {test === "Experience" && <ExperienceComponent />}
      {test === "Skills" && <Skills />}
    </>
  );
};

export default ResumeCardTwo;
