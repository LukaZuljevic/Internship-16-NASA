type getDateRangeReturn = {
  today: string;
  startDate: string;
};

type getNextDateRangeReturn = {
  endDateInfo: string;
  startDateInfo: string;
};

export const getDateRange = (daysToLoad = 20): getDateRangeReturn => {
  const today = new Date();

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - daysToLoad + 1);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return {
    today: formatDate(today),
    startDate: formatDate(startDate),
  };
};

export const getNextDateRange = (
  lastDate: string,
  daysToLoad = 20
): getNextDateRangeReturn => {
  const endDate = new Date(lastDate);
  endDate.setDate(endDate.getDate() - 1);

  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - daysToLoad + 1);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return {
    endDateInfo: formatDate(endDate),
    startDateInfo: formatDate(startDate),
  };
};
