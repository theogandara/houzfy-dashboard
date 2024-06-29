import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import AppRoutes from "./routes";
import { Loading } from "./components/Loading/Loading";
import { useLoadingStore } from "./store/loading.store";
import { Auth } from "./auth/Auth";

export const App = () => {
  const { show } = useLoadingStore();
  return (
    <ChakraProvider theme={theme}>
      <Loading show={show} />
      <Auth>
        <AppRoutes />
      </Auth>
    </ChakraProvider>
  );
};
