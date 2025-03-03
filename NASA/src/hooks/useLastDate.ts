import { useState } from "react";
import { ApodPicture } from "../types";
import { getDateRange } from "../utils";

type UseLastDateProps = {
  data: ApodPicture[];
};

export const useLastDate = ({ data }: UseLastDateProps) => {
  const [lastDate, setLastDate] = useState<string>(() => {
    if (data.length > 0) return data[data.length - 1].date;

    const { startDate } = getDateRange();

    return startDate;
  });

  return { lastDate, setLastDate };
};
