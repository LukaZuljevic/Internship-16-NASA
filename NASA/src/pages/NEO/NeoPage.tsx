import { useState } from "react";
import { NeoList } from "../../components/NEOList";
import { fetchDataWithLoad } from "../../hoc/fetchDataWithLoad";
import { fetchNeo } from "../../services";
import { Neo } from "../../types";
import "./NeoPage.css";

export const NeoPage = () => {
  const [startDate, setStartDate] = useState<string>("2022-01-01");
  const [endDate, setEndDate] = useState<string>("2022-01-05");

  const NeoListWithLoad = fetchDataWithLoad<Neo[], { data: Neo[] }>(
    NeoList,
    () => fetchNeo({ startDate, endDate })
  );

  return <NeoListWithLoad />;
};
