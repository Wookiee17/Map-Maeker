import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "नई दिल्ली, New Delhi is the capital of India and an administrative district of the National Capital Territory of Delhi.",
    position: { lat: 28.57015837599461,  lng: 77.0912233292488 }
  },
  {
    id: 2,
    name: "देहरादून, Dehradun is the capital of the Indian state of Uttarakhand, near the Himalayan foothills.",
    position: { lat: 30.32007541488116, lng:  78.01266940897766 }
  },
  {
    id: 3,
    name: "लखनऊ, Lucknow, a large city in northern India, is the capital of the state of Uttar Pradesh",
    position: { lat: 26.84683685908453,  lng: 80.90131192089669 }
  },
  {
    id: 4,
    name: "गोआ, Goa is a state in western India with coastlines stretching along the Arabian Sea. ",
    position: { lat:15.46486926552746,  lng: 74.02325748042654 }
  },
  {
    id: 5,
    name: "मनाली, Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. ",
    position: { lat:32.24491551601754,   lng: 77.17879409724955 }
  }
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default Map;
