import React from "react";
import styled from "styled-components";
import UnityPlaceholder from "../components/UnityPlaceholder";
import Navbar from "../components/Navbar";
import GlobalStyle from "../styles/globalStyle";
import HorizontalLine from "../components/HorizontalLine";
import Localization from "../components/Localization";
import Information from "../components/Information";
import Contact from "../components/Contact";

const StyledAppWrapper = styled.body`
  padding: 12rem 0;
  background-color: var(--clr-black);

  // For mobile
  @media screen and (max-width: 767px) {
    //..This is basic media query for respective device.In to this media query  CSS code cover the both view landscape and portrait view.
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    //..This orientation media query. In to this orientation media query you can specify more about CSS code for landscape view.
  }

  //For tablets
  @media screen and (max-width: 1024px) {
    //..This is basic media query for respective device.In to this media query  CSS code cover the both view landscape and portrait view.
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    //..This orientation media query. In to this orientation media query you can specify more about CSS code for landscape view.
  }
`;
const PortraitOrientation = styled.div`
   @media all and (orientation:portrait) {
   /* Style adjustments for portrait mode goes here */
   display: flex;
   color: white;

   }

   @media all and (orientation:landscape) {
     /* Style adjustments for landscape mode goes here */
     display: none;
   }
`;

// @media all and (orientation:portrait) {
// /* Style adjustments for portrait mode goes here */
// }

// @media all and (orientation:landscape) {
//   /* Style adjustments for landscape mode goes here */
// }

const Wrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }
`;

function TourApp() {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <StyledAppWrapper>
        <PortraitOrientation>
          <span>Aplikacja działa tylko w trybie horyzntalnym, obróć telefon, aby uruchomić aplikacje.</span>
        </PortraitOrientation>
        <UnityPlaceholder />
      </StyledAppWrapper>
      <Wrapper>
        <HorizontalLine />
        <Information />
        <HorizontalLine />
        <Localization />
        <HorizontalLine />
        <Contact />
        <HorizontalLine />
      </Wrapper>
    </>
  );
}

export default TourApp;
