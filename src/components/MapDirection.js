import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';
import './MapDirection.css';

mapboxgl.accessToken = '';

const MapDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [90.26667, 23.858334],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left'
    );
  }, []);
  return (
    <div id='map__box'>
      <div id='map'></div>
    </div>
  );
};

export default MapDirection;
