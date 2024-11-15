import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
  const [position, setPosition] = useState([21.0285, 105.8542]); // Default position, e.g., Hanoi
  const [locationMessage, setLocationMessage] = useState(
    'Enable location services to see the exact location.',
  );

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setLocationMessage(
            `Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`,
          );
        },
        () => {
          setLocationMessage(
            'Enable location services to see the exact location.',
          );
        },
      );
    } else {
      setLocationMessage('Geolocation is not supported by your browser.');
    }
  }, []);

  const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-2">Location</h2>
      <p className="text-gray-600 mb-4">{locationMessage}</p>

      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: '400px', borderRadius: '12px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{locationMessage}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
