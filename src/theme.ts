import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    mobile: "0px",
    tablet: "768px",
    desktop: "1080px",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "2px",
      },
    },
  },
  colors: {
    blue: {
      "50": "#EDF0F7",
      "100": "#CDD6EA",
      "200": "#ADBCDC",
      "300": "#8DA1CE",
      "400": "#6D87C0",
      "500": "#4D6CB3",
      "600": "#3D578F",
      "700": "#2E416B",
      "800": "#1F2B47",
      "900": "#0F1624",
    },
    gray: {
      "50": "#F1F1F3",
      "100": "#D9D9DE",
      "200": "#C1C1C8",
      "300": "#A8A8B3",
      "400": "#90909D",
      "500": "#787887",
      "600": "#60606C",
      "700": "#484851",
      "800": "#303036",
      "900": "#18181B",
    },
    hover: {
      primary: "#395BC790",
      secondary: "#FDFDFE",
    },
    background: {
      primary: "#FDFDFE",
      secondary: "#0C111C",
    },
    text: {
      primary: "#FDFDFE",
      secondary: "#1D2E5C",
    },
  },
});
