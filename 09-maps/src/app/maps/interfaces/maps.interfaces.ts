export interface LocalStorageMarker {
  coordinates: {
    lng: number;
    lat: number;
  };
  color: string;
}

export interface Marker {
  mapboxMarker: mapboxgl.Marker;
  color: string;
}

export interface Property {
  name: string;
  description: string;
  coordinates: {
    lng: number;
    lat: number;
  };
}
