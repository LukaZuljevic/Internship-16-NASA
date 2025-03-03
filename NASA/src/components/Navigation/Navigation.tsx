import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header id="header">
        <p onClick={() => navigate(ROUTES.HOME)}>Home page</p>
        <p onClick={() => navigate(ROUTES.APOD)}>APOD page</p>
    </header>
  );
};
