import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
    const value ={
        captain,
        setCaptain,
        loading,
        setLoading,
        error,
        setError
    }

  return (
    <CaptainDataContext.Provider value = {value}>
        {children}
    </CaptainDataContext.Provider>
  )
};

export default CaptainContext;
