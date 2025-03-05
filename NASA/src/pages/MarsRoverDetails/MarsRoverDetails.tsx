import "./MarsRoverDetails.css";
import { MarsPhoto } from "../../types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const MarsRoverDetails = () => {
  const location = useLocation();
  const [photo, setPhoto] = useState<MarsPhoto | null>(null);

  useEffect(() => {
    setPhoto(location.state);
  }, [location.state]);

  return (
    <section id="mars-rover-details">
      <div className="mars-rover-details-container">
        <h1 className="mars-rover-title">{photo?.rover.name} Rover</h1>
        <img
          src={photo?.img_src}
          alt="Mars rover photo"
          className="mars-rover-image"
        />

        <div className="mars-rover-info">
          <p className="mars-rover-earth-date">
            Earth Date: {photo?.earth_date}
          </p>
          <p className="mars-rover-sol">Sol: {photo?.sol}</p>
          <p className="mars-rover-camera">Camera: {photo?.camera.full_name}</p>
        </div>
      </div>
    </section>
  );
};
