import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../component/Layout/index.tsx";
import generic from "../constant/generic.ts";

const InitialPage = lazy(
  async () => await import("../pages/initialPage/index.tsx")
);
const ReRenderPage = lazy(
  async () => await import("../pages/reRenderPage/index.tsx")
);
const CounterPage = lazy(
  async () => await import("../pages/counterPage/index.tsx")
);
const TodoPage = lazy(async () => await import("../pages/todoPage/index.tsx"));
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
        },
        {
          path: generic.url.counter,
          element: <CounterPage />,
        },
        {
          path: generic.url.todo,
          element: <TodoPage />,
        },
      ],
    },
  ]);
};
export default Router;
