import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header id="header">
      <h1>NASA APPLICATION</h1>
      <div id="navigation">
        <p onClick={() => navigate(ROUTES.HOME)}>Home page</p>
      </div>
    </header>
  );
};
