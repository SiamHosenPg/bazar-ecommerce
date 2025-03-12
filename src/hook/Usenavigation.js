import { useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();

  return {
    goTo: (path) => navigate(path),
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    goToWithState: (path, data) => navigate(path, { state: data }),
  };
};

export default useCustomNavigate;
