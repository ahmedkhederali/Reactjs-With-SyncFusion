import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor,setCurrentColor]=useState("#03C9D7")
  const [currentMode,setCurrentMode]=useState("Light")
  const [themeSettings,setThemeSettings]=useState(true)
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  //function set Mode
  const setMode=(mode)=>{
    
    setCurrentMode(mode.target.value)
    localStorage.setItem("themeMode",mode.target.value)
    setThemeSettings(false)

  }
  //function set color
  const setColor=(mode)=>{
    setCurrentColor(mode)
    localStorage.setItem("themeColor",mode)
    setThemeSettings(false)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor, setMode, 
        currentMode, currentColor,
         themeSettings,setThemeSettings,
         initialState 
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
