import "./MarsPhotoCard.css";
import { MarsPhoto } from "../../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

type MarsPhotoCardProps = {
  photo: MarsPhoto;
};

export const MarsPhotoCard = ({ photo }: MarsPhotoCardProps) => {
  const navigate = useNavigate();
  const fallBackImage = "../../assets/fallbackImage.png";

  return (
    <div
      className="mars-photo-card"
      onClick={() =>
        navigate(`${ROUTES.MARS_ROVER_PHOTOS}/${photo.id}`, {
          state: photo,
        })
      }
    >
      <img
        src={photo.img_src || fallBackImage}
        alt="MArs rover photo"
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
