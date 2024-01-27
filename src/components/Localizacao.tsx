import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

const Map: React.FC = () => {
  
  const initialPosition: [number, number] = [-15.950322738509023, -44.86576100388293];

  return (
    <div className='map'>
      <MapContainer id='map' center={initialPosition} zoom={60} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={initialPosition}>
          <Popup>Aqui estão as coordenadas fornecidas</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
