import React from 'react';
// ========= Leaflet.
import { MapContainer, TileLayer} from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../Assets/marker.svg";
import MapMarker from "./MapMarker";
// ========= Redux.
import { useSelector } from 'react-redux';


function Map() {
  // ========= Redux state.
  const locationData = useSelector(state => state.location.locationData.data);

  // ========= Marker.
  const marker = new Icon({
    iconUrl: markerIcon,
    iconSize: [50, 60]
  });

  return ( 
    <div className="map-container">
        <MapContainer center={[locationData.location.lat, locationData.location.lng]} zoom={14} scrollWheelZoom={true}>
            <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapMarker location={[locationData.location.lat, locationData.location.lng]} markerIcon={marker} />
        </MapContainer>
    </div>
  )
}

export default Map;