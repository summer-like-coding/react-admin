import DashBoard from "@/layouts/dashboard";
import Control from "@/layouts/dashboard/control";
import Workspace from "@/layouts/dashboard/workspace";
import Basiclist from "@/layouts/list/basiclist";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "control",
            element: <Control />,
          },
          {
            path: "workspace",
            element: <Workspace />,
          },
        ],
      },
      {
        path: "basiclist",
        element: <Basiclist></Basiclist>,
      },
      {
        path: "errorPage",
        children: [
          {
            path: "403",
          },
          {
            path: "404",
          },
          {
            path: "405",
          },
        ],
      },
      {
        path: "formpage",
        children: [
          {
            path: "basicform",
          },
          {
            path: "stepform",
          },
          {
            path: "formdetail",
          },
        ],
      },
      {
        path: "resultpage",
        children: [
          {
            path: "success",
          },
          {
            path: "error",
          },
          {
            path: "detail",
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "personsettings",
          },
          {
            path: "systemsettings",
          },
        ],
      },
      {
        path: "components",
        children: [
          {
            path: "table",
            children: [
              {
                path: "basictable",
              },
              {
                path: "edittable",
              },
              {
                path: "editrow",
              },
            ],
          },
          {
            path: "form",

            children: [
              {
                path: "basicuse",
              },
              {
                path: "usefrom",
              },
            ],
          },
          {
            path: "updateimg",
          },
          {
            path: "model",
          },
          {
            path: "markdown",
          },
          {
            path: "drag",
          },
        ],
      },
    ],
  },
];
