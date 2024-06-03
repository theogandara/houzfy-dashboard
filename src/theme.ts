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
      "50": "#E5EEFF",
      "100": "#B8D0FF",
      "200": "#8AB2FF",
      "300": "#5C93FF",
      "400": "#2E75FF",
      "500": "#0057FF",
      "600": "#0046CC",
      "700": "#003499",
      "800": "#002366",
      "900": "#001133",
    },
    gray: {
      "50": "#F0F2F5",
      "100": "#D4DAE3",
      "200": "#B8C2D0",
      "300": "#9DABBE",
      "400": "#8193AC",
      "500": "#667B99",
      "600": "#51627B",
      "700": "#3D4A5C",
      "800": "#29313D",
      "900": "#14191F",
    },
    hover: {
      primary: "#395BC790",
      secondary: "#FDFDFE",
    },
    background: {
      primary: "#FDFDFE",
      secondary: "#1D2E5C",
    },
    text: {
      primary: "#FDFDFE",
      secondary: "#1D2E5C",
    },
  },
});
