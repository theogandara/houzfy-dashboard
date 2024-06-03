import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import AppRoutes from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
);
