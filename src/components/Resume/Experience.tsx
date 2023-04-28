import React, {useState} from 'react'
import Masonry from "react-masonry-css";
import { useTheme } from "next-themes";

const  data = [
  {
    id: "1",
    company: "Sillicon Valley Bank",
    period: "May 2022 - Mar 2023",
    location: "remote",
    bg: "#FFF4F4",
  },
  {
    id: "2",
    company: "ATB Financial",
    period: "May 2022 - Mar 2023",
    location: "remote",
    bg: "#FFF1FB",
  },
  {
    id: "3",
    company: "Motorolla Solutions",
    period: "May 2022 - Mar 2023",
    location: "remote",
    bg: "#FFF4F4",
  },
  {
    id: "4",
    company: "Vog App Developers",
    period: "May 2022 - Mar 2023",
    location: "remote",
    bg: "#FFF1FB",
  },

  {
    id: "5",
    company: "Shaw Communications",
    period: "May 2022 - Mar 2023",
    location: "remote",
    bg: "#FFF4F4",
  }
]

export default function Education() {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
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
              {item.company}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              {item.period}
            </h2>
          </div>
        ))}
      </Masonry>
    )
}