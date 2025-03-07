import { LatLngExpression } from "leaflet";
import { LocationData } from "../types";
import { Dispatch, SetStateAction, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

type useFavoriteLocationsReturn = {
  saveFavorite: (position: LatLngExpression) => void;
  removeFavorite: (position: LatLngExpression) => void;
  isFavorite: (position: LatLngExpression) => boolean;
  setFavorites: Dispatch<SetStateAction<LocationData[]>>;
  handleFavoriteClick: (position: LatLngExpression) => void;
};

export const useFavoriteLocations = (): useFavoriteLocationsReturn => {
  const [favorites, setFavorites] = useState<LocationData[]>([]);
  const { setItemToStorage } = useLocalStorage();

  const saveFavorite = (position: LatLngExpression) => {
    const newFavorites = [...favorites, { position, isFavorite: true }];
    setFavorites(newFavorites);
    setItemToStorage("favorites", newFavorites);
  };

  const removeFavorite = (position: LatLngExpression) => {
    const newFavorites = favorites.filter((item) => item.position !== position);
    setFavorites(newFavorites);
    setItemToStorage("favorites", newFavorites);
  };

  const isFavorite = (position: LatLngExpression) => {
    return favorites.some(
      (item) => item.position.toString() === position.toString()
    );
  };

  const handleFavoriteClick = (position: LatLngExpression) => {
    isFavorite(position) ? removeFavorite(position) : saveFavorite(position);
  };

  return {
    saveFavorite,
    removeFavorite,
    isFavorite,
    setFavorites,
    handleFavoriteClick,
  };
};
