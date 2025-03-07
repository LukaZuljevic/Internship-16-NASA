import "./Home.css";
import { Feature } from "../../components/Home/Feature";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home-page">
      <DotLottieReact
        className="planet-animation"
        src="src/assets/planet-animation.json"
        loop
        autoplay
      />

      <div className="description-container">
        <div className="card" onClick={() => navigate(ROUTES.HOME)}>
          <Feature
            header="NASA Explorer"
            text="Discover space like never before! Explore images, track asteroids, and see Mars like a rover!"
          />
        </div>
        <div className="card" onClick={() => navigate(ROUTES.APOD)}>
          <Feature
            header="Astronomy Picture of the Day (APOD)"
            text="Browse a gallery of breathtaking space images with detailed explanations."
          />
        </div>
        <div
          className="card"
          onClick={() => navigate(ROUTES.MARS_ROVER_PHOTOS)}
        >
          <Feature
            header="Mars Rover Photos"
            text="See the latest images taken by NASA's Mars rovers and filter by rover and camera."
          />
        </div>
        <div className="card" onClick={() => navigate(ROUTES.NEO)}>
          <Feature
            header="Near Earth Objects (NEO) Tracker"
            text="Monitor asteroids passing close to Earth with real-time data visualization."
          />
        </div>
        <div className="card" onClick={() => navigate(ROUTES.EARTH)}>
          <Feature
            header="Earth Imagery"
            text="Explore high-resolution satellite images of any location on Earth."
          />
        </div>
      </div>
    </section>
  );
};
