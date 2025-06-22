"use client";
import { GlobalContext } from "../../context/GlobalContext";
import React, { useContext, useState } from "react";

function SeasonSelection() {
  const [season, setSeason] = useState("2024-25");
  //   console.log(test);
  const seasons = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
    "2014-15",
    "2013-14",
  ];
  return (
    <div className="w-4/5 mx-auto mb-4 bg-gray-400">
      <div className="cursor-pointer text-white border border-white flex flex-cols gap-4 md:flex-rows flex-wrap py-4 justify-evenly">
        {seasons?.map((year, index) => (
          <div
            key={index}
            onClick={() => {
              setSeason(year);
            }}
            className={
              year === season
                ? "border border-gray p-2 w-48 mx-2 text-center bg-blue-500 font-bold"
                : "border border-gray p-2 w-48 mx-2 text-center bg-blue-400"
            }
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonSelection;
