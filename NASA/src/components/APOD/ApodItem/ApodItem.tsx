import "./ApodItem.css";
import { ApodPicture } from "../../../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { fallBackImage } from "../../../constants";

type ApodItemProps = {
  picture: ApodPicture;
  isLastPicture: boolean;
  setLastPictureRef: (element: HTMLLIElement) => void;
  isVideo: boolean;
};

export const ApodItem = ({
  picture,
  isVideo,
  isLastPicture,
  setLastPictureRef,
}: ApodItemProps) => {
  const navigate = useNavigate();

  return (
    <li
      className="apod-picture"
      ref={isLastPicture ? setLastPictureRef : null}
      onClick={() => navigate(`${ROUTES.APOD}/${picture.date}`)}
    >
      {isVideo ? (
        <iframe src={picture.url} title={picture.title} />
      ) : (
        <img src={picture.url || fallBackImage} alt={picture.title} />
      )}
    </li>
  );
};
