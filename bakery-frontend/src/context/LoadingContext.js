"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter;

  useEffect(()=>{

  }, [isLoading])
  
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
