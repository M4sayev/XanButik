import React from 'react';
import "./MapComponent.css";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
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

  return isLoaded ? (
    <section className="widget-map-section" >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          <Marker 
            position={center}
            icon={x_marker}
          />
          
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
