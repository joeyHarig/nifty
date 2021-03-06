import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

import '../scss/map.scss'

const Map = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules([
            'esri/Map', 
            'esri/views/MapView'
        ], { css: true })
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'gray-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118, 34],
            zoom: 15
          });
          
          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
      }
    );
    
    return(
        <main>
          <div 
              className="map" 
              ref={mapRef} 
          />
        </main>
    );
};

export default Map;