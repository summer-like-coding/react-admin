import React, { createContext } from "react";
import { GlobalProps } from "./interface";
// useContext传递数据
export const globalContext = createContext<GlobalProps | null>(null);

const GlobalConfig: React.FC<GlobalProps> = (props) => {
  const { children } = props;
  return (
    <globalContext.Provider value={props}>{children}</globalContext.Provider>
  );
};
export default GlobalConfig;
