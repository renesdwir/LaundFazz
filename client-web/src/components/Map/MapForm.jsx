import React, { useEffect, useRef, memo } from "react";
import { Map } from "maplibre-gl";
import "./Map.css";

function MapForm({ mapIsReadyCallback }) {
  const mapContainer = useRef(null);
  useEffect(() => {
    const myAPIKey = "eb4656d7c96d4339936375bf8099f864";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 106.827183,
      lat: -6.1753942,
      zoom: 12,
    };

    const map = new Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    mapIsReadyCallback(map);
  }, [mapIsReadyCallback]);

  return (
    <div className="w-80 h-80">
      <div className="map-container" ref={mapContainer}></div>
    </div>
  );
}

export default memo(MapForm);
