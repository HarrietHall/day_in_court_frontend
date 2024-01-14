import React, { createContext, useState } from "react";

export const CaseContext = createContext();

export const CaseContextProvider = ({ children }) => {
  const [completedCases, setCompletedCases] = useState([])
  const [isReady, setIsReady] = useState({});
 
  const [caseReadyTime, setCaseReadyTime] = useState({});
  const [caseCompletedTime, setCaseCompletedTime] = useState({});
  return (
    <CaseContext.Provider value={{ completedCases, setCompletedCases, isReady, setIsReady,caseReadyTime, setCaseReadyTime, caseCompletedTime, setCaseCompletedTime}}>
      {children}
    </CaseContext.Provider>
  );
};
