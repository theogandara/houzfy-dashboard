import { ReactNode, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRedirect } from "../hooks/useRedirect";

export const Auth = ({ children }: { children: ReactNode }) => {
  const { navigateTo } = useRedirect();
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      const decodedToken = jwtDecode(token);
      const tokenIsValid = (decodedToken.exp as any) * 1000 > Date.now();
      console.log(tokenIsValid);
      if (!tokenIsValid) {
        localStorage.removeItem("jwt");
        navigateTo("/entrar");
      }
    }
  }, []);
  return <>{children}</>;
};