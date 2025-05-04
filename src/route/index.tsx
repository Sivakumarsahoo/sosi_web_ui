import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary/index.tsx";
import PageLoader from "../component/PageLoader/index.tsx";
import Router from "./router.tsx";
const Route: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Router />
        </Suspense>
        {/* Suspense => used for handling state of the routes. it takes a fallback prop, which is the component
        (<PageLoader/>) displayed, while the children componenets(eg-routes) are being loaded lazily. */}
      </ErrorBoundary>
    </BrowserRouter>
  );
};
export default Route;
