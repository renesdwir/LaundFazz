import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import MapForm from "./Map/MapForm";
import { GeolocateControl } from "maplibre-gl";
import { fetchAdress, fetchRoute } from "../store/actions/map";
import MapTracking from "./Map/MapTracking";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function MapTransaction() {
  const geoRef = useRef(null);
  const mapIsReadyCallback = useCallback((map) => {}, []);
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="w-full flex flex-col h-screen items-center">
      <div className="flex flex-col items-center p-3 w-full border-2 h-full gap-3">
        <h1 className="font-bold text-3xl text-sky-500 mt-3 mb-5">
          Tracking Map
        </h1>
        <MapTracking mapIsReadyCallback={mapIsReadyCallback} id={id} />
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-500 text-white font-semibold px-3 py-2 text-xl rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
