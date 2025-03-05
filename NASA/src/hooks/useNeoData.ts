import { useState, useEffect } from "react";
import { useErrorHandler } from "./useErrorHandler";
import { Neo } from "../types";
import { fetchNeo } from "../services";

type useNeoDataReturn = {
  data: Neo[];
};

type useNeoDataProps = {
  startDate: string;
};

export const useNeoData = ({
  startDate,
}: useNeoDataProps): useNeoDataReturn => {
  const [data, setData] = useState<Neo[]>([]);
  const { error, handleError, resetError } = useErrorHandler();

  useEffect(() => {
    resetError();

    const fetchData = async () => {
      try {
        const fetchedData = await fetchNeo({ startDate });

        if (fetchedData) setData(fetchedData);
      } catch (error) {
        handleError(error instanceof Error ? error : new Error(String(error)));
      }
    };

    fetchData();
  }, [startDate]);

  if (error) throw error;

  return { data };
};
