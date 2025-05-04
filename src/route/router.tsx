import React from "react";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../component/Layout/index.tsx";
import generic from "../constant/generic.ts";

const InitialPage = lazy(async () => await import("../pages/initialPage/index.tsx"));
const ReRenderPage = lazy(async () => await import("../pages/reRenderPage/index.tsx"));
const Router: React.FC = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: generic.url.home,
          element: <InitialPage />,
        },
        {
          path: generic.url.rerender,
          element: <ReRenderPage />,
        }
      ],
    },
  ]);
};
export default Router;
