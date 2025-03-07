import { useCallback } from "react";
import { ApodPicture } from "../types";
import { useErrorHandler } from "./useErrorHandler";
import { fetchApodPicture } from "../services";

type UseFetchApodPictureProps = {
  date: string | undefined;
  setData: (items: ApodPicture) => void;
};

type UseFetchApodPictureReturn = {
  fetchData: () => Promise<void>;
};

export const useFetchApodPicture = ({
  date,
  setData,
}: UseFetchApodPictureProps): UseFetchApodPictureReturn => {
  const { error, handleError, resetError } = useErrorHandler();

  const fetchData = useCallback(async () => {
    resetError();

    if (!date) return;

    try {
      const fetchedData = await fetchApodPicture({
        startDate: date,
        endDate: date,
      });

      if (fetchedData) setData(fetchedData[0]);
    } catch (error) {
      handleError(error instanceof Error ? error : new Error(String(error)));
    }
  }, [date]);

  if (error) throw error;

  return { fetchData };
};
