import "./MarsPhotosFilter.css";
import { RoverCameras } from "../../../types";
import { Dispatch, SetStateAction } from "react";
import { useTheme } from "../../../hooks";

type MarsPhotosFilterProps = {
  setPage: (page: number) => void;
  setRover: (rover: string) => void;
  setCamera: (camera: string) => void;
  setEarthDate: Dispatch<SetStateAction<string>>;
  earthDate: string;
  rover: string;
  page: number;
  camera: string;
};

export const MarsPhotosFilter = ({
  setPage,
  setRover,
  setCamera,
  setEarthDate,
  earthDate,
  rover,
  page,
  camera,
}: MarsPhotosFilterProps) => {
  const { isDarkMode } = useTheme();
  const roverCameras: RoverCameras = {
    curiosity: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
    opportunity: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    spirit: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  };

  const handleRoverChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRover(e.target.value);
    setPage(1);
  };

  const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCamera(e.target.value);
    setPage(1);
  };

  const handleEarthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEarthDate(e.target.value);
    setPage(1);
  };

  const handlePageChange = (direction: "next" | "back") => {
    direction === "back" && page > 1 ? setPage(page - 1) : setPage(page + 1);
  };

  return (
    <div className="mars-photos-filter">
      <button onClick={() => handlePageChange("back")} disabled={page === 1}>
        {page - 1} &#8592;
      </button>

      <select onChange={handleRoverChange} value={rover}>
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>

      <select onChange={handleCameraChange} value={camera}>
        <option value="">All Cameras</option>
        {roverCameras[rover].map((camera: string) => (
          <option key={camera} value={camera}>
            {camera}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={earthDate}
        onChange={handleEarthDateChange}
        style={{ colorScheme: isDarkMode ? "dark" : "light" }}
      />
      <button onClick={() => handlePageChange("next")}>
        {page + 1} &#8594;
      </button>
    </div>
  );
};
