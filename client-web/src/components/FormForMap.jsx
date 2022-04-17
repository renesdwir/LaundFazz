import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import MapForm from "./Map/MapForm";
import { GeolocateControl } from "maplibre-gl";
import { fetchAdress, fetchRoute } from "../store/actions/map";

export default function Form() {
  const geoRef = useRef(null);
  const [address, setAddress] = useState({
    formatted: "",
    lat: 0,
    lon: 0,
  });
  const [distance, setDistance] = useState(null);
  const dispatch = useDispatch();

  const mapIsReadyCallback = useCallback((map) => {
    const geolocate = new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    map.addControl(geolocate);
    geoRef.current = geolocate;
  }, []);
  function findMe() {
    geoRef.current.trigger();
    navigator.geolocation.getCurrentPosition((e) => {
      const { longitude: lon, latitude: lat } = e.coords;
      dispatch(fetchAdress({ lon, lat })).then((res) => {
        setAddress({
          ...address,
          formatted: res.results?.[0]?.formatted,
          lat,
          lon,
        });
      });
      dispatch(
        fetchRoute({
          lon1: lon,
          lat1: lat,
          lat2: -6.928883448498851,
          lon2: 107.61718541400433,
        })
      ).then((res) => {
        setDistance(res.features?.[0]?.properties?.distance / 1000);
      });
    });
  }

  return (
    <div className="w-full flex flex-col h-screen items-center">
      <div className="flex flex-col items-center p-3 w-96 border-2 border-red-500 h-full gap-3">
        <MapForm mapIsReadyCallback={mapIsReadyCallback} />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={findMe}
        >
          Find me
        </button>
        <div>{address.formatted}</div>
        {distance && <div>{distance} Km</div>}
      </div>
    </div>
  );
}
