'use client';
import React from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const position: LatLngExpression | undefined = [24.184713, 86.302193];
const MapPage = () => {
  return (
    // <div id='map' className='min-h-[60vh] border-4 border-red-700 w-full'>
    <MapContainer
      className='overflow-hidden h-[60vh] border-4 border-red-700 w-full'
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    // </div>
  );
};

export default MapPage;
