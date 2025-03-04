import "./MarsPhotos.css";
import { MarsPhoto } from "../../types";
import { MarsPhotoCard } from "../MarsPhotoCard";
import { NoMarsPhotos } from "../NoMarsPhotos/NoMarsPhots";

type MarsPhotosProps = {
  data: MarsPhoto[];
};

export const MarsPhotos = ({ data }: MarsPhotosProps) => {
  if (data.length === 0) return <NoMarsPhotos />;

  return (
    <div className="mars-photos-list">
      {data.map((photo: MarsPhoto) => (
        <MarsPhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
