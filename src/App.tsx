import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { GlobalStyle } from "./GlobalStyle";
import GlobalConfig from "./config/globalconfig";
import { initContext } from "./config/globalconfig/interface";
import { ConfigProvider } from "antd";
import { router } from "./router";
// 引入国际化配置文件
import '@/config/i18n/config'
const App: React.FC = () => {
  const route = createBrowserRouter(router);
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
        <RouterProvider router={route}></RouterProvider>
      </GlobalConfig>
    </ConfigProvider>
  );
};
export default App;
