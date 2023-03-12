import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import DashBoard from "./layouts/dashboard";
import { GlobalStyle } from "./GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
]);

const App:React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App