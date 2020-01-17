import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';

const stylesMap = {
  width: '100%',
  height: 'calc(100vh - 300px)',
  position: 'relative',
  marginBottom: '40px'
};

const AccomodationMap = ({ location: { location_long, location_lat } }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const [viewport, setViewPort] = useState({
    latitude: location_lat,
    longitude: location_long
  });

  //   function addMarkers(mapNew) {
  //     localization.features.forEach(marker => {
  //       const markerEl = document.createElement('div');
  //       markerEl.classList.add('pinContainer');
  //       markerEl.innerHTML = '📌';
  //       markerEl.style.cursor = 'pointer';
  //       const popUpEl = document.createElement('div');
  //       popUpEl.classList.add('popUpMap');
  //       new mapboxgl.Popup(popUpEl, { offset: [12, -10] })
  //         .setLngLat(marker.geometry.coordinates)
  //         .setHTML(marker.properties.ADDRESS)
  //         .addTo(mapNew);
  //       new mapboxgl.Marker(markerEl, { offset: [12, -10] })
  //         .setLngLat(marker.geometry.coordinates)
  //         .addTo(mapNew);
  //       markerEl.addEventListener('click', () => {
  //         mapNew.flyTo({
  //           center: marker.geometry.coordinates,
  //           zoom: 10,
  //         });
  //       });
  //     });
  //   }

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWF0Y2htYWtlcnM2OSIsImEiOiJjazVpcnRmMncwMmZ1M2xwYm90enc2MHdrIn0._FxdMZ0oLJTugHypl_JQ7Q';
    const initializeMap = () => {
      const mapNew = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [viewport.latitude, viewport.longitude],
        zoom: 4
      });

      mapNew.on('load', () => {
        setMap(map);
        mapNew.resize();
      });
      //   addMarkers(mapNew);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <div style={{ margin: '0 auto' }}>
          <div
            {...viewport}
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
