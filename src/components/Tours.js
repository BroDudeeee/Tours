import "../styles.css";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour {...tour} key={tour.id} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
