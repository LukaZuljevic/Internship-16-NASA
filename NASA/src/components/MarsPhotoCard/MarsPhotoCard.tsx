import "./MarsPhotoCard.css";
import { MarsPhoto } from "../../types";

type MarsPhotoCardProps = {
  photo: MarsPhoto;
};

export const MarsPhotoCard = ({ photo }: MarsPhotoCardProps) => {
  const fallBackImage = "../../assets/fallbackImage.png";

  return (
    <div className="mars-photo-card">
      <img
        src={photo.img_src || fallBackImage}
        alt="Mars Rover photo"
        className="mars-photo"
      />
      <div className="mars-photo-info">
        <h3>{photo.rover.name}</h3>
        <p>
          <strong>Camera:</strong> {photo.camera.full_name}
        </p>
        <p>
          <strong>Date:</strong> {photo.earth_date}
        </p>
      </div>
    </div>
  );
};
