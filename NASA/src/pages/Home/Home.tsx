import "./Home.css";
import { Feature } from "../../components/Feature";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Home = () => {
  return (
    <section id="home-page">
      <div className="description-container">
        <Feature
          header="🚀 NASA Explorer"
          text="Discover space like never before! Explore images, track asteroids, and
          see Mars like a rover!"
        />
        <Feature
          header="🔭 Astronomy Picture of the Day (APOD)"
          text="Browse a gallery of breathtaking space images with detailed explanations."
        />
        <Feature
          header="🪐 Mars Rover Photos"
          text="See the latest images taken by NASA's Mars rovers and filter by rover and camera."
        />
        <Feature
          header="🌍 Near Earth Objects (NEO) Tracker"
          text="Monitor asteroids passing close to Earth with real-time data visualization."
        />
        <Feature
          header="🌍 Earth Imagery"
          text="Explore high-resolution satellite images of any location on Earth."
        />
        <button></button>
      </div>
      <DotLottieReact
        className="planet-animation"
        src="src\assets\planet-animation.json"
        loop
        autoplay
      />
    </section>
  );
};
