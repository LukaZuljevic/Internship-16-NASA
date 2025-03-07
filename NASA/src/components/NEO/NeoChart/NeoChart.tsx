import { Neo } from "../../../types";
import { useNeoData } from "../../../hooks";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import "./NeoChart.css";

type NeoChartProps = {
  startDate: string;
};

export const NeoChart = ({ startDate }: NeoChartProps) => {
  const { data } = useNeoData({ startDate });

  const formattedData = data
    .map((item: Neo) => {
      return {
        magnitude: item.absolute_magnitude_h,
        diameter: item.estimated_diameter.kilometers.estimated_diameter_max,
        closeApproachDate: item.close_approach_data[0].close_approach_date,
        missDistance: parseFloat(
          item.close_approach_data[0].miss_distance.kilometers
        ),
        relativeVelocity: parseFloat(
          item.close_approach_data[0].relative_velocity.kilometers_per_hour
        ).toFixed(1),
      };
    })
    .sort(
      (a, b) => parseFloat(a.relativeVelocity) - parseFloat(b.relativeVelocity)
    );

  const minVelocity: number = Math.min(
    ...formattedData.map((item) => parseFloat(item.relativeVelocity))
  );
  const maxVelocity: number = Math.max(
    ...formattedData.map((item) => parseFloat(item.relativeVelocity))
  );

  return (
    <div className="chart-container">
      <div className="chart">
        <h1 className="chart-name">
          Relationship between the magnitude of NEOs and their deimeter
        </h1>
        <ResponsiveContainer height={400}>
          <ScatterChart>
            <XAxis
              dataKey="magnitude"
              unit="H"
              tick={{ fill: "white" }}
              axisLine={{ stroke: "white" }}
            />
            <YAxis
              dataKey="diameter"
              unit="km"
              tick={{ fill: "white" }}
              axisLine={{ stroke: "white" }}
            />
            <Tooltip />
            <Scatter data={formattedData} fill="lightblue" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="chart">
        <h1 className="chart-name">
          Relationship between Relative Velocity and Magnitude
        </h1>
        <ResponsiveContainer height={400}>
          <LineChart data={formattedData}>
            <XAxis
              dataKey="relativeVelocity"
              unit="km/h"
              tick={{ fill: "white" }}
              axisLine={{ stroke: "white" }}
              type="number"
              domain={[minVelocity, maxVelocity]}
            />
            <YAxis
              dataKey="magnitude"
              unit="H"
              tick={{ fill: "white" }}
              axisLine={{ stroke: "white" }}
            />
            <Tooltip />
            <Line type="monotone" dataKey="magnitude" stroke="lightcoral" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
