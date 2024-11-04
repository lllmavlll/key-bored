"use client";
const { createContext, useState, useContext } = require("react");


const UIcontextAPI = createContext();

export const AppProvider = ({ children }) => {
  const [pressedKeys, setPressedKeys] = useState([]);
  return (
    <UIcontextAPI.Provider
      value={{ pressedKeys, setPressedKeys }}
    >
      {children}
    </UIcontextAPI.Provider>
  );
};

export const useUIcontext = () => {
  return useContext(UIcontextAPI);
};