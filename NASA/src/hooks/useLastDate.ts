import { Dispatch, SetStateAction, useState } from "react";
import { ApodPicture } from "../types";
import { getDateRange } from "../utils";

type UseLastDateProps = {
  data: ApodPicture[];
};

type useLastDateProps = {
  lastDate: string;
  setLastDate: Dispatch<SetStateAction<string>>;
};

export const useLastDate = ({ data }: UseLastDateProps): useLastDateProps => {
  const [lastDate, setLastDate] = useState<string>(() => {
    if (data.length > 0) return data[data.length - 1].date;

    const { startDate } = getDateRange();

    return startDate;
  });

  return { lastDate, setLastDate };
};
