import { Neo } from "../../types";
import "./NeoList.css";
import { NeoCard } from "../NeoCard";

type NeoListProps = {
  data: Neo[];
};

export const NeoList = ({ data }: NeoListProps) => {
  console.log("Data from component", data);

  return (
    <div className="neo-list">
      {data?.map((item: Neo) => {
        return <NeoCard key={item.id} neoItem={item} />;
      })}{" "}
    </div>
  );
};
