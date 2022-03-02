import { useMap, Marker } from 'react-leaflet';

const MapMarker = (props) => {
  const map = useMap();
  map.flyTo(props.location, 13,{
    duration: 4
  });

  return (
      <Marker position={props.location} icon={props.markerIcon} />
  );
};

export default MapMarker;