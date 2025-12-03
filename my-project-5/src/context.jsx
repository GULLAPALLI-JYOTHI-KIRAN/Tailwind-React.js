import React, { useContext, useState } from "react";
 
const MenuContext = React.createContext();
 
const MenuContextProvider = ({ children }) => {
  const [Menu, setMenu] = useState("Simple");
  return (
    <MenuContext.Provider value={{ Menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
 
export const useMenu = () => {
  const { Menu, setMenu } = useContext(MenuContext);
  return [Menu, setMenu];
};
export default MenuContextProvider;