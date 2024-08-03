import { ReactNode, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRedirect } from "../hooks/useRedirect";

export const Auth = ({ children }: { children: ReactNode }) => {
  const { navigateTo } = useRedirect();

  const validateToken = () => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) {
        throw new Error("Token not found");
      }
      if (token) {
        const decodedToken = jwtDecode(token);
        const tokenIsValid = (decodedToken.exp as any) * 1000 > Date.now();
        if (!tokenIsValid) {
          throw new Error("Token expired");
        }
      }
    } catch (e) {
      localStorage.removeItem("jwt");
      navigateTo("/entrar");
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return <>{children}</>;
};
