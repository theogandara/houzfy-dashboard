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
      "50": "#F2F2F3",
      "100": "#D9DADD",
      "200": "#C1C2C8",
      "300": "#A9AAB2",
      "400": "#91929C",
      "500": "#787A87",
      "600": "#60626C",
      "700": "#484951",
      "800": "#303136",
      "900": "#18181B",
    },
    error: {
      primary: "#FF0000",
    },
    hover: {
      primary: "#172448",
      secondary: "#FDFDFE",
    },
    background: {
      primary: "#FDFDFE",
      secondary: "#111113",
    },
    text: {
      primary: "#FDFDFE",
      secondary: "#787887",
      black: "#0C111C",
    },
  },
});
