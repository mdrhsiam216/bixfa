"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

interface HotelMarker {
  lat: number;
  lng: number;
  name?: string;
  price?: number;
}

interface LeafletMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  marker?: HotelMarker; // single marker
  markers?: HotelMarker[]; // multiple markers
  style?: React.CSSProperties;
}

export default function LeafletMapComponent({
  center,
  zoom = 12,
  marker,
  markers,
  style = { width: "100%", height: "300px" },
}: LeafletMapProps) {
  useEffect(() => {
    // No-op for default icon, we use custom divIcon below
  }, []);

  return (
    <>
      <style>{`
        .leaflet-control-attribution,
        .leaflet-control-container a[href="https://leafletjs.com"] {
          display: none !important;
        }
          .custom-price-marker {
          position: relative;
          }
        .custom-price-marker .price-label {
          background: #fff;
          color: #111;
          border-radius: 6px;
          padding: 2px 8px;
          font-weight: 500;
          text-align: center;
          border: 1px solid #ccc;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          font-size: 13px;
          white-space: nowrap;
        }
          .custom-price-marker img {
          position: absolute;
          top: 24px;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={zoom}
        style={style}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers &&
          markers.map((hotel, idx) => (
            <Marker
              key={idx}
              position={{ lat: hotel.lat, lng: hotel.lng }}
              icon={L.divIcon({
                className: "custom-price-marker",
                html: `
                <div style="display: flex; align-items: center; gap: 4px; justify-content: center; flex-direction: column;">
                <div class='price-label'>${
                  hotel.price ? hotel.price + " BDT" : ""
                }</div>
                <img src="/icons/map.png" width="5" height="5" style="display: block; height: 24px; width: 24px;" />
                </div>
              `,
                iconSize: [
                  Math.max(120, String(hotel.price).length * 14) + 30,
                  40,
                ],
                iconAnchor: [30, 40],
              })}
            />
          ))}
        {!markers && marker && (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={L.divIcon({
              className: "custom-price-marker",
              html: `
                <div style="display: flex; align-items: center; gap: 4px; justify-content: center; flex-direction: column;">
                <div class='price-label'>${
                  marker.price ? marker.price + " BDT" : ""
                }</div>
                <img src="/icons/map.png" width="5" height="5" style="display: block; height: 24px; width: 24px;" />
                </div>
              `,
              iconSize: [
                Math.max(120, String(marker.price).length * 14) + 30,
                40,
              ],
              iconAnchor: [30, 40],
            })}
          />
        )}
      </MapContainer>
    </>
  );
}
