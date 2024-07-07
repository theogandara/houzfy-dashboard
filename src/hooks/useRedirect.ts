import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return { navigateTo, goBack };
};
