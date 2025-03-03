import { Dispatch, SetStateAction, useState, useEffect } from "react";

type DateFilterProps = {
  setDates: Dispatch<
    SetStateAction<{ startDate: string | null; endDate: string | null }>
  >;
  onClearFilters: () => void;
  currentDates: {
    startDate: string | null;
    endDate: string | null;
  };
};

export const DateFilter = ({
  setDates,
  onClearFilters,
  currentDates,
}: DateFilterProps) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    setStartDate(currentDates.startDate || "");
    setEndDate(currentDates.endDate || "");
  }, [currentDates]);

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    date: string
  ) => {
    const value = e.target.value;
    date === "startDate" ? setStartDate(value) : setEndDate(value);

    setDates((prev) => ({
      ...prev,
      [date]: value || null,
    }));
  };

  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");

    setDates({ startDate: null, endDate: null });

    if (startDate && endDate) onClearFilters();
  };

  return (
    <div className="date-filter">
      <input
        type="date"
        value={startDate}
        onChange={(e) => handleDateChange(e, "startDate")}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => handleDateChange(e, "endDate")}
      />
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};
