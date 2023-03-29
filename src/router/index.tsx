import DashBoard from "@/layouts/dashboard";
import Control from "@/layouts/dashboard/control";
import Workspace from "@/layouts/dashboard/workspace";
import Forbidden from "@/layouts/errorPages/403";
import NotFound from "@/layouts/errorPages/404";
import ServerError from "@/layouts/errorPages/500";
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
            element:<Forbidden></Forbidden>
          },
          {
            path: "404",
            element:<NotFound></NotFound>
          },
          {
            path: "500",
            element:<ServerError></ServerError>
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
