import React from 'react';
import { MapContainer, TileLayer} from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../Assets/marker.svg";
import MapMarker from "./MapMarker";

function Map() {
  const marker = new Icon({
    iconUrl: markerIcon,
    iconSize: [50, 60]
  });

  return ( 
    <div className="map-container">
        <MapContainer center={[40.6375, -74.0216]} zoom={14} scrollWheelZoom={true}>
            <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapMarker location={[40.6375, -74.0216]} markerIcon={marker} />
        </MapContainer>
    </div>
  )
}

export default Map;