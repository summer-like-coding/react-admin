import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import DashBoard from "./layouts/dashboard";
import { GlobalStyle } from "./GlobalStyle";
import GlobalConfig from "./config/globalconfig";
import { GlobalConfigProps } from "./config/globalconfig/interface";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
]);



const App: React.FC = () => {
  // 设置默认颜色
  const [color, setColor] = useState<string>("#ad5c22");
  function changeColor(color:string) {
    setColor(color);
  }
  const contextValue: GlobalConfigProps = {
    globalColor: color,
    setGlobalColor: changeColor,
  };
  return (
    <GlobalConfig value={contextValue}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </GlobalConfig>
  );
};
export default App;
