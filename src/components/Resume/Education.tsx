import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { useTheme } from "next-themes";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

const data = [
  {
    id: "1",
    degree: "Post Graduate in Information Technology",
    period: "2014-2015",
    college: "Lambton College",
    location: "Sarnia, Ontario, Canada",
    bg: "#FFF1FB",
    icon: <FaUserGraduate />,
  },
  {
    id: "2",
    degree: "Bachelors in Technology",
    period: "2009-2013",
    college: "SRM university",
    location: "Chennai, Tamilnadu, India",
    bg: "#FFF4F4",
    icon: <GiGraduateCap />,
  },
];

export default function Education() {
  const breakpointColumnsObj = {
    default: 1,
    1100: 1,
    500: 1,
  };
  const { theme, setTheme } = useTheme();

  return (
    <>
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
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 text-5xl">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  {item.degree}
                </span>
                <h2 className="font-medium cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  {item.college}
                </h2>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{item.period}</div>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
}
