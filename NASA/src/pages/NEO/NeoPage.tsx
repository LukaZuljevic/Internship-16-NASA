import "./NeoPage.css";
import { useState } from "react";
import { NeoList } from "../../components/NEOList";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { fetchNeo } from "../../services";
import { Neo } from "../../types";
import { formatDate } from "../../utils";
import { NeoChart } from "../../components/NeoChart";

export const NeoPage = () => {
  const [startDate, setStartDate] = useState<string>(formatDate(new Date()));

  const NeoListWithLoad = fetchDataWithLoad<Neo[], { data: Neo[] }>(
    NeoList,
    () => fetchNeo({ startDate })
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  return (
    <section id="NEO-page">
      <input
        className="neo-date-filter"
        type="date"
        value={startDate || ""}
        onChange={(e) => handleDateChange(e)}
      />
      <NeoListWithLoad />
      <NeoChart startDate={startDate} />
    </section>
  );
};
