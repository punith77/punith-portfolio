import React, {useState} from 'react'
import Masonry from "react-masonry-css";
import { useTheme } from "next-themes";
import { FaUserGraduate } from 'react-icons/fa';
import {GiGraduateCap} from 'react-icons/gi'

const  data = [
    {
      id: "1",
      degree: "Post Graduate in Information Technology",
      period: "2014-2015",
      college: "Lambton College",
      location: "Sarnia, Ontario, Canada",
      bg: "#FFF1FB",
      icon: <FaUserGraduate />
    },
    {
      id: "2",
      degree: "Bachelors in Technology",
      period: "2009-2013",
      college: "SRM university",
      location: "Chennai, Tamilnadu, India",
      bg: "#FFF4F4",
      icon: <GiGraduateCap />
    }
  ]

export default function Education() {
    const breakpointColumnsObj = {
        default: 1,
        1100: 1,
        500: 1,
      };

  const { theme, setTheme } = useTheme();


//   const handlePortfolioData = (id: any) => {
//     // const find = portfolioData.find((item) => item?.id === id);
//     // setSingleData(find);
//     // setIsOpen(true);
//   };
  const handleModle = (id: any) => {
    // handlePortfolioData(id);
  };

    return  (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModle(item?.id)}
          >
            <div className="overflow-hidden rounded-lg">
              {/* <Image
                className="w-full    cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              /> */}
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.degree}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              {item.college}
            </h2>
          </div>
        ))}
      </Masonry>
    )
}