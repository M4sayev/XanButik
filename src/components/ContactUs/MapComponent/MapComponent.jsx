import { useEffect, useRef, useState } from "react";
import "./MapComponent.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { x_marker } from "../../../assets/assets";

const center = [41.2015, 47.183];
const zoomLevel = 20;

function LeafletMap() {
  const [loading, setLoading] = useState(true);
  const loadingTimeoutRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", { scrollWheelZoom: false }).setView(
      center,
      zoomLevel,
    );

    const tileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors & CartoDB",
      },
    );

    tileLayer.on("loading", () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      setLoading(true);
    });

    tileLayer.on("load", () => {
      loadingTimeoutRef.current = setTimeout(() => setLoading(false), 300);
    });

    tileLayer.addTo(mapRef.current);

    const myIcon = L.icon({
      iconUrl: x_marker,
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
    L.marker(center, { icon: myIcon }).addTo(mapRef.current);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      mapRef.current?.remove();
    };
  }, []);

  const handleBackToCenter = () => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoomLevel);
    }
  };

  return (
    <section className="widget-map-section">
      <h2 id="map-description" className="visually-hidden">
        This is an interactive map centered on Xan Butik Store - Azerbaijan,
        Sheki, coordinates: 41.2015, 47.183. Use the button below to re-center
        the map.
      </h2>
      <div
        id="map"
        role="application"
        tabIndex="0"
        style={{ height: "80vh", width: "100%" }}
        aria-labelledby="map-description"
        aria-label="Interactive map centered on 41.2015, 47.183"
      ></div>
      {loading && (
        <div className="map-loading" aria-live="polite" aria-busy="true">
          <h2 className="std-heading">Loading...</h2>
        </div>
      )}
      <button
        onClick={handleBackToCenter}
        className="std-button center-map-btn"
        aria-label="Back to map center"
      >
        Back to Center
      </button>
    </section>
  );
}

export default LeafletMap;
