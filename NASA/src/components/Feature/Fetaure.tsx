import "./Feature.css";

type FeatureProps = {
  header: string;
  text: string;
};

export const Feature = ({ header, text }: FeatureProps) => {
  return (
    <div className="desc-feature">
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};
