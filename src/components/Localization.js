import React from 'react'
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const mapboxToken = 'pk.eyJ1IjoiZGFtbmlhbSIsImEiOiJja3RuZ2xkbDIwMm1jMndxc3Y2c2pidW9rIn0.dhS5C0r0aNvellKRVc8p9w';


function Localization() {

  const latitude = 50.0270018
  const longitude = 21.9850212

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 50.0270018,
    longitude: 21.9850212,
    zoom: 15,
  });
    return (
      <div id="localization">
        <h2>Lokalizacja</h2>
        <span>
          Pariatur duis sint esse magna esse. Velit id sint enim officia aute
          sunt adipisicing. Nulla amet in ipsum occaecat Lorem officia magna in.
          Consequat labore mollit velit culpa dolor do nisi ullamco sit.
        </span>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapboxApiAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/streets-v10"
        />
        <Marker
latitude={latitude}
longitude={longitude}
>
  [insert image or custom marker]
</Marker>
      </div>
    );
}

export default Localization
