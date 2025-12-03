import React, { useContext, useState } from "react";
 
const AllContext = React.createContext();
 
export const AllContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <AllContext.Provider value={{ toggle, setToggle }}>
      {children}
    </AllContext.Provider>
  );
};
 
const useAllContext = () => {
  const data = useContext(AllContext);
  return data;
};
export default useAllContext; 