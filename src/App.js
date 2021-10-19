import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./styles.css";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBt-4NzVuFCVZuSjzT9SVCd1cqp7Ra-GUQ" 
  });

  return isLoaded ? <Map /> : null;
}
