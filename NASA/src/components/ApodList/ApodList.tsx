import "./ApodList.css";
import { ApodPicture } from "../../types";

type ApodListProps = {
  fetchedData: ApodPicture[];
};

export const ApodList = ({ fetchedData }: ApodListProps) => {
  return (
    <div className="apod-list">
      {fetchedData?.map((picture: ApodPicture) => {
        const isVideo = picture.media_type === "video";
        return (
          <li key={picture.date} className="apod-picture">
            {isVideo ? (
              <iframe src={picture.url} title={picture.title} allowFullScreen />
            ) : (
              <img src={picture.url} />
            )}
          </li>
        );
      })}
    </div>
  );
};
