import React, { useEffect, useState, useRef, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';
import { localization } from '../../utils/localization';

const stylesMap = {
  width: '100%',
  height: 'calc(100vh - 300px)',
  position: 'relative',
  marginBottom: '40px'
};

const AccomodationMap = ({ location: { location_long, location_lat } }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const LATITUDE = location_lat;
  const LONGITUDE = location_long;

  const createMarker = useCallback(
    propertyMap => {
      const localizationMap = localization(location_lat, location_long);
      localizationMap.features.forEach(marker => {
        const markerEl = document.createElement('div');
        markerEl.classList.add('pinContainer');
        markerEl.innerHTML = '📌';
        markerEl.style.cursor = 'pointer';

        new mapboxgl.Marker(markerEl, { offset: [12, -10] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(propertyMap);

        markerEl.addEventListener('click', () => {
          propertyMap.flyTo({
            center: marker.geometry.coordinates,
            zoom: 10
          });
        });
      });
    },
    [location_lat, location_long]
  );

  const renderMap = useCallback(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWF0Y2htYWtlcnM2OSIsImEiOiJjazVpcnRmMncwMmZ1M2xwYm90enc2MHdrIn0._FxdMZ0oLJTugHypl_JQ7Q';
    const initializeMap = () => {
      const propertyMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [LATITUDE, LONGITUDE],
        zoom: 4
      });

      propertyMap.on('load', () => {
        setMap(map);
        propertyMap.resize();
      });
      createMarker(propertyMap);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [createMarker, map, LATITUDE, LONGITUDE]);

  useEffect(() => {
    renderMap();
  }, [renderMap]);

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <div>
          <div
            ref={el => {
              mapContainer.current = el;
            }}
            style={stylesMap}
          />
        </div>
      </div>
    </div>
  );
};

AccomodationMap.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default AccomodationMap;
