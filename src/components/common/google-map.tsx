"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface HotelMarker {
  lat: number;
  lng: number;
  name?: string;
  price?: number;
}

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  marker?: HotelMarker;
  markers?: HotelMarker[];
  style?: React.CSSProperties;
  onMarkerClick?: (marker: HotelMarker) => void;
  onMapClick?: () => void;
  onMapLoad?: () => void;
  onMapError?: (error: string) => void;
  onMapIdle?: () => void;
  onMapZoomChanged?: (zoom: number) => void;
  onMapDragEnd?: () => void;
  options?: google.maps.MapOptions;
}

export default function GoogleMapComponent({
  center,
  zoom = 12,
  marker,
  markers,
  style = { width: "100%", height: "300px" },
  onMarkerClick,
  onMapClick,
  onMapLoad,
  onMapError,
  onMapIdle,
  onMapZoomChanged,
  onMapDragEnd,
  options,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      });

      const google = await loader.load();
      
      if (mapRef.current && !mapInstanceRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: true,
          gestureHandling: "greedy",
          disableDefaultUI: true,
          clickableIcons: false,
          mapId: "custom_map_style",
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "administrative",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            }
          ]
        });

        mapInstanceRef.current = map;

        // Create custom marker overlay
        const createCustomMarker = (position: google.maps.LatLng, price?: number) => {
          const markerDiv = document.createElement("div");
          markerDiv.className = "custom-price-marker";
          markerDiv.style.cursor = "pointer";
          
          const content = `
            <div class="marker-wrapper">
              <div class="price-label">${price ? price + " BDT" : ""}</div>
            </div>
          `;

          // <img src="/icons/map.png" width="24" height="24" style="display: block; height: 20px; width: 20px;" />
          
          markerDiv.innerHTML = content;
          
          const overlay = new google.maps.OverlayView();
          overlay.onAdd = function() {
            this.getPanes()?.overlayLayer.appendChild(markerDiv);
          };
          
          overlay.draw = function() {
            const projection = this.getProjection();
            const point = projection.fromLatLngToDivPixel(position);
            
            if (point) {
              markerDiv.style.left = point.x - 15 + "px";
              markerDiv.style.top = point.y - 40 + "px";
            }
          };
          
          overlay.onRemove = function() {
            markerDiv.parentNode?.removeChild(markerDiv);
          };
          
          overlay.setMap(map);
        };

        // Add markers
        if (markers) {
          markers.forEach((hotel) => {
            createCustomMarker(
              new google.maps.LatLng(hotel.lat, hotel.lng),
              hotel.price
            );
          });
        } else if (marker) {
          createCustomMarker(
            new google.maps.LatLng(marker.lat, marker.lng),
            marker.price
          );
        }
      }
    };

    initMap();
  }, [center, zoom, marker, markers]);

  return (
    <>
      <style>{`
        .custom-price-marker {
          position: absolute;
          transform: translate(-50%, -100%);
          cursor: pointer;
        }
        .marker-wrapper {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
          justify-content: center;
          flex-direction: column;
        }
        .custom-price-marker .price-label {
          background: #fff;
          color: #111;
          border-radius: 6px;
          padding: 5px 10px;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.35);
          font-size: 14px;
          white-space: nowrap;
          margin-bottom: 4px;
          z-index: 10;
          transition: all 0.2s ease;
        }
        .custom-price-marker:hover .price-label {
          box-shadow: 0 6px 14px rgba(0,0,0,0.45);
          transform: translateY(-2px);
        }
        .marker-wrapper img {
          position: absolute;
          top: 28px;
          z-index: 8;
        }
        /* Hide Google Maps bottom controls */
        .gm-style-cc,
        .gmnoprint.gm-style-cc,
        .gm-style .gm-style-cc,
        a[href^="https://maps.google.com/maps"],
        a[target="_blank"],
        button[title="Keyboard shortcuts"] {
          display: none !important;
        }
        /* Map container styles */
        .map-container {
          border-radius: 30px;
          overflow: hidden;
        }
        .map-container > div {
          border-radius: 30px;
        }
      `}</style>
      <div ref={mapRef} style={{ ...style, borderRadius: "16px", overflow: "hidden" }} className="map-container" />
    </>
  );
}