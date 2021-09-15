import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import Localization from "../components/Localization";
import Information from "../components/Information";
import Contact from "../components/Contact";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Wrapper = styled.main`
  width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <>
      <HeroSection />
      <Wrapper>
        <HorizontalLine />
        <Information />
        <HorizontalLine />
        <Localization />
        <HorizontalLine />
        <Contact />
      </Wrapper>
    </>
  );
}

export default Home;
