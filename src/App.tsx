import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import AppRoutes from "./routes";
import { Loading } from "./components/Loading/Loading";
import { useLoadingStore } from "./store/loading.store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth } from "./auth/Auth";

const queryClient = new QueryClient();

export const App = () => {
  const { show } = useLoadingStore();
  return (
    <ChakraProvider theme={theme}>
      <Loading show={show} />
      <QueryClientProvider client={queryClient}>
        <Auth>
          <AppRoutes />
        </Auth>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
