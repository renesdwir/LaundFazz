import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import MapForm from "./Map/MapForm";
import { GeolocateControl } from "maplibre-gl";
import { fetchAdress, fetchRoute } from "../store/actions/map";
import MapTracking from "./Map/MapTracking";

export default function MapTransaction() {
  const geoRef = useRef(null);
  const mapIsReadyCallback = useCallback((map) => {}, []);

  return (
    <div className="w-full flex flex-col h-screen items-center">
      <div className="flex flex-col items-center p-3 w-96 border-2 border-red-500 h-full gap-3">
        <MapTracking mapIsReadyCallback={mapIsReadyCallback} />
      </div>
    </div>
  );
}
