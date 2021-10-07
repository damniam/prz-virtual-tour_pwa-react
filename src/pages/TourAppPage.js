import React from "react";
import styled from "styled-components";
import UnityPlaceholder from "../components/UnityPlaceholder";
import Navbar from "../components/Navbar";
import GlobalStyle from "../styles/globalStyle";
import HorizontalLine from "../components/HorizontalLine";
import Localization from "../components/Localization";
import Information from "../components/Information";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const StyledAppWrapper = styled.body`
  padding: 4.5rem 0;
  background-color: var(--clr-black);

  @media screen and (min-width: 768px) and (orientation: portrait) {
    padding: 6rem 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 8rem 0;
  }
`;

const Wrapper = styled.main`
  width: 70%;
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
      <Footer />
    </>
  );
}

export default TourApp;
