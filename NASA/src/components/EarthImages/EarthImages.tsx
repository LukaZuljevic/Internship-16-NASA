import "./EarthImages.css";
import { EarthImage } from "../../types";

type EarthImageProps = {
  data: EarthImage;
};

export const EarthImages = ({ data }: EarthImageProps) => {
  return <img src={data.url} alt="Earth image" className="earth-image" />;
};
