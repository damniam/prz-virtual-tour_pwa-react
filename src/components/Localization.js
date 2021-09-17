import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  padding: 1rem 0;
  height: 40vh;
`;

function Localization() {
  return (
    <Wrapper id="localization">
      <h2 className="noselect">Lokalizacja</h2>
      <p>
        Budynek A Wydziału Elektrotechniki i Informatyki znajduje się na ulicy
        Wincentego Pola 2, 35-959 Rzeszów.
      </p>
      <MapContainer>
        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgyEi_q77PEcRxCUcZzMGWWo&key=AIzaSyB92U57TPmf6kY-wFG8JSkpCEmAgMOIbxs"
        ></iframe>
      </MapContainer>
    </Wrapper>
  );
}

export default Localization;
