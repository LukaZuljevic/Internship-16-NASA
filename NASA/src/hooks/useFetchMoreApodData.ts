import { useState, useCallback, SetStateAction, Dispatch } from "react";
import { ApodPicture } from "../types";
import { fetchApodPicture } from "../services/ApodApi";
import { useErrorHandler } from "../hooks";
import { getNextDateRange } from "../utils";

type UseFetchMoreApodDataProps = {
  startDate: string | null;
  endDate: string | null;
  lastDate: string;
  isDateFilterActive: boolean;
  setPictures: Dispatch<SetStateAction<ApodPicture[]>>;
  setLastDate: Dispatch<SetStateAction<string>>;
};

type useFetchMoreApodDataProps = {
  fetchMoreItems: () => void;
  isLoading: boolean;
};

export const useFetchMoreApodData = ({
  startDate,
  endDate,
  lastDate,
  isDateFilterActive,
  setPictures,
  setLastDate,
}: UseFetchMoreApodDataProps): useFetchMoreApodDataProps => {
  const { error, handleError, resetError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMoreItems = useCallback(async () => {
    setIsLoading(true);
    resetError();

    try {
      let fetchStartDate = startDate;
      let fetchEndDate = endDate;

      if (!isDateFilterActive) {
        const { startDateInfo, endDateInfo } = getNextDateRange(lastDate);
        fetchStartDate = startDateInfo;
        fetchEndDate = endDateInfo;
      }

      const newPictures = await fetchApodPicture({
        startDate: fetchStartDate,
        endDate: fetchEndDate,
      });

      isDateFilterActive
        ? setPictures(newPictures)
        : setPictures((prev) => [...prev, ...newPictures]);

      if (newPictures.length > 0)
        setLastDate(newPictures[newPictures.length - 1].date);
    } catch (error) {
      handleError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setIsLoading(false);
    }
  }, [startDate, endDate, lastDate, isDateFilterActive]);

  if (error) throw error;
  return {
    fetchMoreItems,
    isLoading,
  };
};
