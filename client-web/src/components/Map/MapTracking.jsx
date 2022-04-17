import React, { useEffect, useRef, memo } from "react";
import { Map, NavigationControl, Marker } from "maplibre-gl";
import "./Map.css";
import { useDispatch } from "react-redux";
import { fetchRoute } from "../../store/actions/map";

function MapTracking({ mapIsReadyCallback }) {
  const mapContainer = useRef(null);
  const coords = useRef({
    lat1: -6.938027475084752,
    lon1: 107.6231310300509,
    lat2: -6.928883448498851,
    lon2: 107.61718541400433,
  });
  const dispatch = useDispatch();
  console.log("render");
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
    map.addControl(new NavigationControl());
    const clientWaypoint = [coords.current.lon1, coords.current.lat1];
    new Marker().setLngLat(clientWaypoint).addTo(map);
    const driverWaypoint = [coords.current.lon2, coords.current.lat2];
    new Marker({ color: "#FF0000" }).setLngLat(driverWaypoint).addTo(map);
    let routeData;
    dispatch(
      fetchRoute({
        lat1: coords.current.lat1,
        lon1: coords.current.lon1,
        lat2: coords.current.lat2,
        lon2: coords.current.lon2,
      })
    ).then((res) => {
      routeData = res.data;
      if (map.getSource("route")) {
        map.getSource("route").setData(routeData);
      } else {
        map.addSource("route", {
          type: "geojson",
          data: routeData,
        });
      }
      // drawRoute();
    });
    // function drawRoute() {
    //   if (!routeData) {
    //     return;
    //   }
    //   if (map.getLayer("route-layer")) {
    //     map.removeLayer("route-layer");
    //   }
    //   map.getSource("route").setData(routeData);
    //   map.addLayer({
    //     id: "route-layer",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-cap": "round",
    //       "line-join": "round",
    //     },
    //     paint: {
    //       "line-color": "#6084eb",
    //       "line-width": 8,
    //     },
    //     filter: ["==", "$type", "LineString"],
    //   });
    // }
    mapIsReadyCallback(map);
  }, [mapIsReadyCallback, dispatch]);

  return (
    <div className="w-80 h-80">
      <div className="map-container" ref={mapContainer}></div>
    </div>
  );
}

export default memo(MapTracking);
