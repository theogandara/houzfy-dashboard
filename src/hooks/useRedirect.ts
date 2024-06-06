import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return { navigateTo };
};
