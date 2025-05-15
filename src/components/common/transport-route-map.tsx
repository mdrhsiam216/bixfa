"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { GOOGLE_MAPS_API_KEY } from "@/core/env";

interface RoutePoint {
  lat: number;
  lng: number;
  name?: string;
}

interface TransportRouteMapProps {
  pickup: RoutePoint;
  dropoff: RoutePoint;
  style?: React.CSSProperties;
  onDistanceCalculated?: (distance: string, duration: string) => void;
  mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
  height?: string;
}

export default function TransportRouteMap({
  pickup,
  dropoff,
  style = {},
  onDistanceCalculated,
  mapType = 'roadmap',
  height = '300px',
}: TransportRouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
        libraries: ["places", "geometry"],
      });

      const google = await loader.load();
      
      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        const map = new google.maps.Map(mapRef.current, {
          center: pickup,
          zoom: 12,
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: true,
          gestureHandling: "greedy",
          disableDefaultUI: true,
          clickableIcons: false,
          mapId: "custom_map_style",
          mapTypeId: mapType,
          styles: [
            { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ visibility: "off" }] },
            { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "administrative", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }] }
          ]
        });

        mapInstanceRef.current = map;

        // Initialize directions service and renderer
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map,
          suppressMarkers: true, // We'll use custom markers
          polylineOptions: {
            strokeColor: "#FF4B2B",
            strokeWeight: 5,
            strokeOpacity: 0.8,
          },
        });

        directionsServiceRef.current = directionsService;
        directionsRendererRef.current = directionsRenderer;

        // Create custom markers
        const createCustomMarker = (position: google.maps.LatLng, isPickup: boolean) => {
          const markerDiv = document.createElement("div");
          markerDiv.className = "custom-route-marker";
          
          const content = `
            <div class=\"marker-wrapper\">
              <div class=\"marker-label\">${isPickup ? "Pickup" : "Dropoff"}</div>
              <div class=\"marker-pin\"></div>
            </div>
          `;
          
          markerDiv.innerHTML = content;
          
          const overlay = new google.maps.OverlayView();
          overlay.onAdd = function() {
            this.getPanes()?.overlayLayer.appendChild(markerDiv);
          };
          
          overlay.draw = function() {
            const projection = this.getProjection();
            const point = projection.fromLatLngToDivPixel(position);
            if (point) {
              // The marker pin is 24px tall, and the tip is at the bottom center
              markerDiv.style.left = point.x + "px";
              markerDiv.style.top = (point.y) + "px";
            }
          };
          
          overlay.onRemove = function() {
            markerDiv.parentNode?.removeChild(markerDiv);
          };
          
          overlay.setMap(map);
        };

        // Add pickup and dropoff markers
        createCustomMarker(new google.maps.LatLng(pickup.lat, pickup.lng), true);
        createCustomMarker(new google.maps.LatLng(dropoff.lat, dropoff.lng), false);

        // Calculate and display route
        const request: google.maps.DirectionsRequest = {
          origin: new google.maps.LatLng(pickup.lat, pickup.lng),
          destination: new google.maps.LatLng(dropoff.lat, dropoff.lng),
          travelMode: google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            directionsRenderer.setDirections(result);
            
            // Get distance and duration
            const route = result.routes[0];
            const leg = route.legs[0];
            
            setDistance(leg.distance?.text || "");
            setDuration(leg.duration?.text || "");
            onDistanceCalculated?.(leg.distance?.text || "", leg.duration?.text || "");
          }
        });
      }
    };

    initMap();
  }, [pickup, dropoff, onDistanceCalculated]);

  return (
    <>
      <style>{`
        .custom-route-marker {
          position: absolute;
          cursor: pointer;
          /* The pin is 24px tall, so move it up by 24px so the tip is at the point */
          transform: translate(-50%, -100%);
          pointer-events: auto;
        }
        .marker-wrapper {
          display: flex;
          align-items: center;
          gap: 4px;
          position: relative;
          justify-content: center;
          flex-direction: column;
        }
        .custom-route-marker .marker-label {
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
        .custom-route-marker:hover .marker-label {
          box-shadow: 0 6px 14px rgba(0,0,0,0.45);
          transform: translateY(-2px);
        }
        .marker-pin {
          width: 24px;
          height: 24px;
          background: #FF4B2B;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .marker-pin::after {
          content: '';
          width: 12px;
          height: 12px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
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
      <div className="relative">
        <div ref={mapRef} style={{ width: "100%", height, borderRadius: "16px", overflow: "hidden", ...style }} className="map-container" />
        {(distance || duration) && (
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Distance:</span>
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Duration:</span>
              <span>{duration}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 