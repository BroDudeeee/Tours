import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import "./styles.css";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
    setLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    setLoading(true);
    fetchTours();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && !tours.length) {
    return <h1>No Tours</h1>;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
