import "./EarthImagery.css";
import { Map } from "../../components/EarthImagery/Map";
import { useState, useCallback, useMemo } from "react";
import { LatLngExpression } from "leaflet";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { EarthImage } from "../../types";
import { EarthImages } from "../../components/EarthImagery/EarthImages";
import { fetchEarthImages } from "../../services/EarthImagesApi";
import { formatDate } from "../../utils";
import { useTheme } from "../../hooks";

export const EarthImagery = () => {
  const { isDarkMode } = useTheme();
  const [position, setPosition] = useState<LatLngExpression | null>([
    43.50792421322874, 16.454463950358335,
  ]);
  const [date, setDate] = useState<string>(formatDate(new Date()));

  const fetchEarthImagesData = useCallback(() => {
    return fetchEarthImages({ position, date });
  }, [position, date]);

  const EarthImageWithLoading = useMemo(() => {
    return fetchDataWithLoad<
      EarthImage,
      {
        data: EarthImage;
      }
    >(EarthImages, fetchEarthImagesData);
  }, [fetchEarthImagesData]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <section id="earth-imagery">
      <div className="filter-and-map">
        <div className="date-filter">
          <input
            type="date"
            value={date || ""}
            onChange={handleDateChange}
            style={{ colorScheme: isDarkMode ? "dark" : "light" }}
          />
        </div>
        <Map position={position} setPosition={setPosition} />
      </div>
      <EarthImageWithLoading />
    </section>
  );
};
