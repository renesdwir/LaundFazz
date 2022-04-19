import React, { useEffect, useRef, memo } from "react";
import { Map, NavigationControl, Marker } from "maplibre-gl";
import "./Map.css";
import { useDispatch } from "react-redux";
import { fetchRoute } from "../../store/actions/map";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_DRIVER, GET_TRANSACTIONS } from "../../config/queries";

function MapTracking({ mapIsReadyCallback }) {
  const mapContainer = useRef(null);
  const coords = useRef({
    lat1: -6.928883448498851,
    lon1: 107.61718541400433,
    lat2: -6.938027475084752,
    lon2: 107.6231310300509,
  });
  const {
    data: staff = {
      getStaff: { latitude: -6.928883448498851, longitude: 107.61718541400433 },
    },
    startPolling,
    stopPolling,
  } = useQuery(GET_DRIVER, {
    variables: {
      id: 1,
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
  });

  const {
    data: transactions = {
      getUserTransactionById: {
        transaction: {
          latitude: -6.928883448498851,
          longitude: 107.61718541400433,
        },
      },
    },
  } = useQuery(GET_TRANSACTIONS, {
    variables: {
      id: 1,
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
  });
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const driverMarker = useRef(null);
  const customerMarker = useRef(null);

  useEffect(() => {
    startPolling(2000);
    return () => {
      stopPolling();
    };
  }, []);

  useEffect(() => {
    const myAPIKey = "eb4656d7c96d4339936375bf8099f864";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: staff.getStaff.longitude,
      lat: staff.getStaff.latitude,
      zoom: 14,
    };
    if (!mapRef.current) {
      mapRef.current = new Map({
        container: mapContainer.current,
        style: `${mapStyle}?apiKey=${myAPIKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
      });
      mapRef.current.addControl(new NavigationControl());
    }

    console.log("masuk");

    mapIsReadyCallback(mapRef.current);
  }, [mapIsReadyCallback, dispatch, transactions]);
  useEffect(() => {
    let routeData;
    const clientWaypoint = [
      +transactions.getUserTransactionById.transaction.longitude,
      +transactions.getUserTransactionById.transaction.latitude,
    ];
    if (mapRef.current) {
      const driverWaypoint = [
        +staff.getStaff.longitude,
        +staff.getStaff.latitude,
      ];
      if (driverMarker.current) {
        driverMarker.current.setLngLat(driverWaypoint);
      } else {
        driverMarker.current = new Marker({ color: "#FF0000" })
          .setLngLat(driverWaypoint)
          .addTo(mapRef.current);
      }
      if (customerMarker.current) {
        customerMarker.current.setLngLat(clientWaypoint);
      } else {
        customerMarker.current = new Marker()
          .setLngLat(clientWaypoint)
          .addTo(mapRef.current);
      }
      dispatch(
        fetchRoute({
          lat1: staff.getStaff.latitude,
          lon1: staff.getStaff.longitude,
          lat2: transactions.getUserTransactionById.transaction.latitude,
          lon2: transactions.getUserTransactionById.transaction.longitude,
        })
      ).then((data) => {
        if (!data) {
          return;
        }
        routeData = data;
        if (mapRef.current.getSource("route")) {
          mapRef.current.getSource("route").setData(routeData);
        } else {
          mapRef.current.addSource("route", {
            type: "geojson",
            data: routeData,
          });
        }
        drawRoute();
      });
    }
    function drawRoute() {
      if (!routeData) {
        return;
      }
      if (mapRef.current.getLayer("route-layer")) {
        mapRef.current.removeLayer("route-layer");
      }
      mapRef.current.getSource("route").setData(routeData);
      mapRef.current.addLayer({
        id: "route-layer",
        type: "line",
        source: "route",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#6084eb",
          "line-width": 8,
        },
        filter: ["==", "$type", "LineString"],
      });
    }
  }, [staff, transactions]);

  return (
    <div className="w-80 h-80">
      <div className="map-container" ref={mapContainer}></div>
    </div>
  );
}

export default memo(MapTracking);
