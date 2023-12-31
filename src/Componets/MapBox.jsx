import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { MapPin } from "phosphor-react";



import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch } from "react-redux";
import { location_set } from "../store/ecommerse_slice";

export const MapBox = () => {
  const dispatch = useDispatch()
  

  const [viewport, setViewport] = useState({
    latitude: 11.1360,
    longitude: 75.8272,
    zoom: 13,
  });

  const [marker, setMarker] = useState(null);

  const handleMapClick = (event) => {
    const { lngLat } = event;

    if (lngLat) {
      const { lng, lat } = lngLat;
      setMarker({
        latitude: lat,
        longitude: lng,
      });
    
      dispatch(location_set(marker));
    }
  };
  console.log("map box marker location -------------",marker)

  return (
    <div style={{ height: "560px" }}>
      <ReactMapGL
        initialViewState={viewport}
        width="100vw"
        height="100vh"
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y"
        onViewportChange={(newViewport) => {
          setViewport(newViewport);
        }}
        onClick={handleMapClick}
      >
        {marker ? (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            draggable={true}
            onDragEnd={handleMapClick}
          >
            <div>
              <MapPin size={22} style={{ color: "red" }} />
            </div>
          </Marker>
        ) : null}
      </ReactMapGL>
    </div>
  );
};