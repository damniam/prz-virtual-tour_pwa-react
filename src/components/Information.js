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
        Politechnika Rzeszowska W budynku A Politechniki Rzeszowskiej znajdują
        się trzy Katedry... Koła naukowe link.r Aplikacja stworzona w ramach
        pracy magisterskiej przez Damiana Działo. Zdjęcia zostały wykonane przez
        Damiana Działo. Za pośrednictwem wirtualnego spaceru możecie zwiedzić
        nie tylko budynki, ale także wnętrza sal wykładowych, aule, laboratoria,
        bibliotekę, pracownie, akademik czy kompleks sportowy. Dostępnych jest
        niemal 150 panoram. Każda perspektywa pozwala użytkownikowi uzyskanie
        pełnego widoku obiektu (obrót o 360o). By uzyskać pożądany efekt
        wystarczy przytrzymać lewy przycisk myszy i poruszać kursorem w wybranym
        kierunku. Zapraszamy!
      </p>
    </Wrapper>
  );
}

export default Information;
