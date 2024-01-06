import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h3>lat: {lat}</h3>
      <h3>lng: {lng}</h3>
      <button
        onClick={() =>
          setSearchParams({
            lat: 1111,
            lng: 222,
          })
        }
      >
        Change Pos
      </button>
    </div>
  );
}

export default Map;
