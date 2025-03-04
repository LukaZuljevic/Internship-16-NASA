import "./NoMarsPhotos.css";

export const NoMarsPhotos = () => {
  return (
    <div className="no-photos">
      <img
        src="src/assets/alert.png"
        alt="No photos available"
        className="no-photos-image"
      />
      <h2>No photos available</h2>
      <p>Please try again with different filters or page</p>
    </div>
  );
};
