import { Theme, createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import typography from "@/components/ThemeRegistry/typography";

const themeOptions: Theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: typography as TypographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default themeOptions;
