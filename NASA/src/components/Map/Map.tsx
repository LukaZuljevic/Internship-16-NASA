import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { Dispatch, SetStateAction, useEffect } from "react";
import "./Map.css";
import { useFavoriteLocations, useLocalStorage } from "../../hooks";
import "font-awesome/css/font-awesome.min.css";
import { LocationData } from "../../types";

type ClickHandlerProps = {
  setPosition: (position: LatLngExpression) => void;
};

type MapProps = {
  position: LatLngExpression | null;
  setPosition: Dispatch<SetStateAction<LatLngExpression | null>>;
};

export const Map = ({ position, setPosition }: MapProps) => {
  const { isFavorite, setFavorites, handleFavoriteClick } =
    useFavoriteLocations();
  const { getItemFromStorage } = useLocalStorage();

  useEffect(() => {
    const storedFavorites: LocationData[] = getItemFromStorage("favorites");
    setFavorites(storedFavorites);
  }, []);

  const ClickHandler = ({ setPosition }: ClickHandlerProps) => {
    const map = useMapEvents({
      click: (event: L.LeafletMouseEvent) => {
        const newPosition: LatLngExpression = [
          event.latlng.lat,
          event.latlng.lng,
        ];
        map.setView(newPosition, map.getZoom());
        setPosition(newPosition);
      },
    });

    return null;
  };

  return (
    <MapContainer center={[45, 15]} zoom={10} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ClickHandler setPosition={setPosition} />
      {position && (
        <Marker position={position}>
          <Popup>
            <div className="popup">
              <p>Cordinates: {position.toString()}</p>

              {isFavorite(position) ? (
                <i
                  className="fa fa-heart"
                  onClick={() => handleFavoriteClick(position)}
                />
              ) : (
                <i
                  className="fa fa-heart-o"
                  onClick={() => handleFavoriteClick(position)}
                />
              )}
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
