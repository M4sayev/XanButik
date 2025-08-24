import React, { useEffect, useRef, useState } from 'react';
import "./MapComponent.css"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { x_marker } from '../../../assets/assets';

const center = [41.2015, 47.1830];
const zoomLevel = 20;

function LeafletMap() {
  const [loading, setLoading] = useState(true);
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    const map = L.map('map').setView(center, zoomLevel);

    const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors & CartoDB',
    });

    tileLayer.on('loading', () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      setLoading(true);
    });

    tileLayer.on('load', () => {
      loadingTimeoutRef.current = setTimeout(() => setLoading(false), 300);
    });

    tileLayer.addTo(map);

  const myIcon = L.icon({
    iconUrl: x_marker, 
     
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });
    L.marker(center, { icon: myIcon }).addTo(map);

    // Fallback: hide loader after 10 seconds if loading never finishes
    loadingTimeoutRef.current = setTimeout(() => setLoading(false), 10000);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      map.remove();
    };
  }, []);

  const handleBackToCenter = () => {
    if (map) {
      map.setView(center, zoomLevel);
    }
  };

  return (
    <section className="widget-map-section" style={{ position: 'relative' }}>
      <div id="map" style={{ height: '80vh', width: '100%' }}></div>
      {loading && (
        <div 
          className='map-loading'
          aria-live="polite"
          aria-busy="true"
        >
          <h1 className='std-heading'>Loading...</h1>
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
  )
}

export default LeafletMap;


