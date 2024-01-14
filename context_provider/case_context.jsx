import React, { createContext, useState } from "react";

export const CaseContext = createContext();

export const CaseContextProvider = ({ children }) => {
  const [completedCases, setCompletedCases] = useState([])
  const [isReady, setIsReady] = useState({});
  const [caseTimes, setCaseTimes] = useState({});
   
  return (
    <CaseContext.Provider value={{ completedCases, setCompletedCases, isReady, setIsReady,caseTimes, setCaseTimes }}>
      {children}
    </CaseContext.Provider>
  );
};
