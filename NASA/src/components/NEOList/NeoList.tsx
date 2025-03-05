import { Neo } from "../../types";
import "./NeoList.css";
import { useState } from "react";

type NeoListProps = {
  data: Neo[];
};

export const NeoList = ({ data }: NeoListProps) => {
  console.log("Data from component", data);
  const [neoData, setNeoData] = useState<Neo[]>(data);
  return neoData?.map((item: Neo) => {
    return <h1>{item.name}</h1>;
  });
};
