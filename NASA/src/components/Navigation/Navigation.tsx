import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useTheme } from "../../hooks";

export const Navigation = () => {
  const { isDarkMode, switchMode } = useTheme();

  const navigate = useNavigate();

  return (
    <header id="header">
      <button className="theme-switcher" onClick={switchMode}>
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>
      <nav className="navigation">
        <p onClick={() => navigate(ROUTES.HOME)}>Home page</p>
        <p onClick={() => navigate(ROUTES.APOD)}>APOD page</p>
        <p onClick={() => navigate(ROUTES.MARS_ROVER_PHOTOS)}>
          Mars rover photos
        </p>
        <p onClick={() => navigate(ROUTES.NEO)}>NEO</p>
        <p onClick={() => navigate(ROUTES.EARTH)}>Earth imagery</p>
      </nav>
    </header>
  );
};
