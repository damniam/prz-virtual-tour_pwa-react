import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import Localization from "../components/Localization";
import Information from "../components/Information";
import Contact from "../components/Contact";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Wrapper>
        <HorizontalLine />
        <Information />
        <HorizontalLine />
        <Localization />
        <HorizontalLine />
        <Contact />
        <HorizontalLine />
      </Wrapper>
      <Footer/>
    </>
  );
}

export default Home;
