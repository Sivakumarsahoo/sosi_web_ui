import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import themes from "../../customTheme/index.ts";

const Layout: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {/* <CssBaseline> is a component provided by Material-UI (MUI) that helps normalize and reset the default styles of the browser,
      ensuring a consistent look across different browsers. It essentially applies some global styles that help mitigate inconsistencies,
      such as margins, padding, font sizes, and line heights, that vary across different browsers.

      If you don't use <CssBaseline> in your code, here are some things that could happen:

      Inconsistent Layout and Styling: Different browsers have their own default styles for HTML elements (like headings, paragraphs, etc.)
      , so without <CssBaseline>, your layout might look slightly different across browsers.

      Font and Text Styling Issues: Browsers have different default fonts and text rendering settings. Using <CssBaseline> ensures that
       text styling is consistent across browsers, as it applies a standard font family, font size, and line height.

      Margins and Padding Differences: Many browsers add their own default padding and margin to certain elements (like <body>, <h1>, <p>)
      . Without a baseline reset, these defaults may affect your design.

      Unwanted Scrollbars: Some browsers might add extra space to the page or elements, causing unwanted scrollbars. Using <CssBaseline>
       ensures that the page behaves more predictably.

      While it's not strictly required, it's a helpful utility to standardize the appearance of your app across different environments. 
      You can always add custom styles later, but starting with a clean baseline can save time and effort in debugging layout issues. */}
        <Outlet />
        {/* In React Router (v6 and later), <Outlet /> is a component that is used to render nested routes. It serves as a placeholder for 
      child route components that are defined within a parent route.
      If you don't use <Outlet /> in a route that has nested routes, the child components will not be rendered. The parent route will 
      render as expected, but it will not display any of its nested child routes*/}
      </ThemeProvider>
    </>
  );
};
export default Layout;
