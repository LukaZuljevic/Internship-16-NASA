import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { Dispatch, SetStateAction } from "react";
import "./Map.css";

type ClickHandlerProps = {
  setPosition: (position: LatLngExpression) => void;
};

const ClickHandler = ({ setPosition }: ClickHandlerProps) => {
  const map = useMapEvents({
    click: (event: L.LeafletMouseEvent) => {
      map.setView([event.latlng.lat, event.latlng.lng], map.getZoom());
      setPosition([event.latlng.lat, event.latlng.lng]);
      console.log(event);
    },
  });

  return null;
};

type MapProps = {
  position: LatLngExpression | null;
  setPosition: Dispatch<SetStateAction<LatLngExpression | null>>;
};

export const Map = ({ position, setPosition }: MapProps) => {
  return (
    <MapContainer center={[45, 15]} zoom={10} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ClickHandler setPosition={setPosition} />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};
