import "./DateFilter.css";
import { Dispatch, SetStateAction } from "react";

type DateFilterProps = {
  setDates: Dispatch<
    SetStateAction<{ startDate: string | null; endDate: string | null }>
  >;
  handleClearFilters: () => void;
  currentDates: {
    startDate: string | null;
    endDate: string | null;
  };
};

export const DateFilter = ({
  setDates,
  handleClearFilters,
  currentDates,
}: DateFilterProps) => {
  const { startDate, endDate } = currentDates;

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    date: "startDate" | "endDate"
  ) => {
    const value = e.target.value;
    setDates((prev) => ({
      ...prev,
      [date]: value || null,
    }));
  };

  const handleClearFilter = () => {
    setDates({ startDate: null, endDate: null });
    handleClearFilters();
  };

  return (
    <div className="date-filter">
      <input
        type="date"
        value={startDate || ""}
        onChange={(e) => handleDateChange(e, "startDate")}
      />
      <input
        type="date"
        value={endDate || ""}
        onChange={(e) => handleDateChange(e, "endDate")}
      />
      <button onClick={handleClearFilter}>Clear Filters</button>
    </div>
  );
};
