import React, { useState } from 'react';
import "./MapComponent.css";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { x_marker } from '../../../assets/assets';

const containerStyle = {
  width: '100%',
  height: '80vh',
}

const center = {
  lat: 41.201518685898094,
  lng: 47.18301226464812,
}

function MapComponent() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GMAPS_API,
  });

  // to force a re-render
  const [key, setKey] = useState(0)


  return isLoaded ? (
    <section className="widget-map-section" >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          key={key}
        >
          <MarkerF
            position={center}
            icon={x_marker}
          />
          <button 
            className='std-btn center-map-btn'
            onClick={() => setKey(key + 1)}
          >Back to Center</button>
          
        </GoogleMap>
    </section>
  ) 
  : 
  (
    <div className="map-loading">
      <h1 className='std-heading'>Loading...</h1>
    </div>
  )

}

export default MapComponent
