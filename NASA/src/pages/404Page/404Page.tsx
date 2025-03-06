import "./404Page.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section id="not-found-apge">
      <DotLottieReact className="UFO" src="src/assets/UFO.json" loop autoplay />
      <h1>404 - Page Not Found</h1>
      <p>Looks like you are lost in space</p>
      <button onClick={() => navigate(ROUTES.HOME)}>Home page</button>
    </section>
  );
};
