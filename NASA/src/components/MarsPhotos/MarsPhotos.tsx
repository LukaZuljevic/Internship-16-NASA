import { MarsPhoto } from "../../types";
import "./MarsPhotos.css";
import { useState } from "react";
import { MarsPhotoCard } from "../MarsPhotoCard";

type MarsPhotosProps = {
  data: MarsPhoto[];
};

export const MarsPhotos = ({ data }: MarsPhotosProps) => {
  const [marsPhotos, setMarsPhotos] = useState<MarsPhoto[]>(data);

  console.log(marsPhotos);

  return (
    <div className="mars-photos-list">
      {marsPhotos.map((photo: MarsPhoto) => (
        <MarsPhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
