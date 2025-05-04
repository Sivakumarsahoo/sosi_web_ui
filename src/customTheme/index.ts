import { createTheme } from "@mui/material/styles";

const themes = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default themes;
