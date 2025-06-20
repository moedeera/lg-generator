"use client";
import { createContext, useContext, useState } from "react";
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [season, setSeason] = useState("2024-25");
  const seasons = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    "2016-2017",
    "2015-2016",
  ];
  const test = "hello";

  return (
    <GlobalContext.Provider value={{ seasons, season, setSeason, test }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
