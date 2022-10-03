import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

function Information() {
  return (
    <Wrapper id="information">
      <h2 className="noselect">Informacje</h2>
      <p>
        Wirtualny spacer po budynku A Wydzialu Elektrotechniki i Informatyki
        Politechniki Rzeszowskiej.
        Dostępnych jest <strong> ponad 100 panoram</strong>
        Za pośrednictwem wirtualnego spaceru mozesz zwiedzić nie tylko budynek,
        ale także wnętrza sal wykładowych, laboratoria oraz pracownie
        komputerową. Każda perspektywa pozwala użytkownikowi uzyskanie pełnego
        widoku obiektu (obrót o 360). By uzyskać pożądany efekt wystarczy
        przytrzymać lewy przycisk myszy i poruszać kursorem w wybranym kierunku.
        Aplikacja wirtualnego spaceru wraz z multimedialną grą oraz stroną
        internetową stworzona w ramach pracy magisterskiej przez Damiana Działo.
        Zdjęcia zostały wykonane przez Damiana Działo.
      </p>
    </Wrapper>
  );
}

export default Information;
