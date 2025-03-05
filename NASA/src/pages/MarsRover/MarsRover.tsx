import { MarsPhoto } from "../../types";
import { MarsPhotos } from "../../components/MarsPhotos";
import { fetchMarsPhotos } from "../../services/MarsPhotosApi";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { useState, useMemo } from "react";
import { MarsPhotosFilter } from "../../components/MarsPhotosFilter";

export const MarsRover = () => {
  const [page, setPage] = useState<number>(1);
  const [rover, setRover] = useState<string>("curiosity");
  const [camera, setCamera] = useState<string>("");
  const [earthDate, setEarthDate] = useState<string>("2022-02-02");

  const MarsPhotosWithLoad = useMemo(
    () =>
      fetchDataWithLoad<MarsPhoto[], { data: MarsPhoto[] }>(MarsPhotos, () =>
        fetchMarsPhotos({ page, rover, camera, earthDate })
      ),
    [page, rover, camera, earthDate]
  );

  return (
    <div className="#mars-rovers-photos-page">
      <MarsPhotosFilter
        setPage={setPage}
        setRover={setRover}
        setCamera={setCamera}
        setEarthDate={setEarthDate}
        earthDate={earthDate}
        rover={rover}
        page={page}
        camera={camera}
      />
      <MarsPhotosWithLoad />
    </div>
  );
};
