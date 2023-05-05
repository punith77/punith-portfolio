import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

import { experienceData } from "../../data/experience";

export default function Experience() {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experienceData.map((e, i) => {
          return (
            <li className="mb-10 ml-10" key={i}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-[#FA5252]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {`${e.role} at ${e.company}`}
                {
                  e.current && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                  )
                }
              
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {e.period}
              </time>
              <p className="mb-4 text-base font-light text-gray-500 dark:text-gray-400 italic">{e.description}</p>
              <div className="mb-4">
                {e.stack.map((s, j) => {
                  return (
                    <span key={j} className="mr-2">
                      <button className="resume-btn text-[15px]" key={i}>
                        {s.icon}
                      </button>
                    </span>
                  );
                })}
              </div>
              {/* to do modal to show employement details */}
              {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#FA5252] to-[#DD2476] group-hover:from-[#FA5252] to-[#DD2476] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#212425] rounded-md group-hover:bg-opacity-0 inline-flex items-start">
                  Show Details
                  <FiMoreHorizontal className="text-5xl ml-1" />
                </span>
              </button> */}
            </li>
          );
        })}
      </ol>
    </>
  );
}
