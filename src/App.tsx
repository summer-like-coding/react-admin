import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import DashBoard from "./layouts/dashboard";
import { GlobalStyle } from "./GlobalStyle";
import GlobalConfig from "./config/globalconfig";
import { initContext } from "./config/globalconfig/interface";
import { ConfigProvider } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
]);

const App: React.FC = () => {
  // 设置默认颜色
  const [color, setColor] = useState<string>("#ad5c22");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  function changeColor(color: string) {
    setColor(color);
  }
  function changeShow() {
    setShowPicker(!showPicker);
  }
  const contextValue: initContext = {
    globalColor: color,
    show: showPicker,
    showColorPicker: changeShow,
    setGlobalColor: changeColor,
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color,
        },
      }}
    >
      <GlobalConfig value={contextValue}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </GlobalConfig>
    </ConfigProvider>
  );
};
export default App;
