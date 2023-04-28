import { Line } from "rc-progress";
import React from "react";

const LineItem = ({ item }: any) => {
  const lineArray = [
    {
      id: 1,
      color: "#FF6464",
      name: "Backend Apis",
      number: "90",
    },
    {
      id: 2,
      color: "#6AB5B9",
      name: "Microservices",
      number: "75",
    },
    {
      id: 3,
      color: "#9272D4",
      name: "Frontend Development",
      number: "95",
    },
    {
      id: 4,
      color: "#5185D4",
      name: "Mobile App",
      number: "65",
    },
    {
      id: 5,
      color: "#CA56F2",
      name: "Cloud Development",
      number: "75",
    },
  ];

  return (
    <>
      {lineArray.map((item) => (
        <div className=" mb-7" key={item.id}>
          <div className="flex justify-between py-1">
            <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              {item?.name}
            </span>
            <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              {item?.number}%
            </span>
          </div>

          <Line
            percent={item?.number}
            strokeWidth={1}
            trailWidth={1}
            // trailColor={`${local === "dark" ? "#1C1C1C" : "#EDF2F2"}`}
            strokeColor={item?.color}
          />
        </div>
      ))}
    </>
  );
};

export default LineItem;
