import { Neo } from "../../types";
import "./NeoCard.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";

type NeoItemProps = {
  neoItem: Neo;
};

export const NeoCard = ({ neoItem }: NeoItemProps) => {
  const navigate = useNavigate();
  const {
    name,
    absolute_magnitude_h,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
  } = neoItem;

  const approachData = close_approach_data[0];

  return (
    <div
      className="neo-card"
      onClick={() =>
        navigate(`${ROUTES.NEO}/orbit/${neoItem.id}`, { state: neoItem })
      }
    >
      <h2>{name}</h2>
      <p>
        <strong>Absolute Magnitude: </strong>
        {absolute_magnitude_h} H
      </p>
      <p>
        <strong>Estimeted Diameter: </strong>
        {estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}-
        {estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
      </p>
      <p>
        <strong>Potentially Hazardous: </strong>
        {is_potentially_hazardous_asteroid ? (
          <span className="hazardous">Yes</span>
        ) : (
          <span className="not-hazardous">No</span>
        )}
      </p>
      <p>
        <strong>Close Approach Date: </strong>
        {approachData.close_approach_date}
      </p>
      <p>
        <strong>Miss Distance: </strong>
        {parseFloat(approachData.miss_distance.kilometers).toFixed(1)} km
      </p>
    </div>
  );
};
