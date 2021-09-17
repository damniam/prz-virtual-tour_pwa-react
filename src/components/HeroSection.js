import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import outside from "../assets/outside.png";
import outside3 from "../assets/outside3.png";
import outside2 from "../assets/outside2.png";
import { PlayArrowRounded } from "@material-ui/icons";

const StyledImageWrapper = styled.div`
  height: 100%;
  position: relative;


  .image-size {
    width: 100%;
    mix-blend-mode: multiply;
  }

  @media screen and (min-width: 768px) {
    height: 80%;
  }

  @media screen and (min-width: 1060px) {
    height: 60%;
  }

  @media screen and (min-width: 1440px) {
    height: 50%;
  }

  @media screen and (min-width: 2560px) {
    height: 30%;
  }
`;

const ImageHolder = styled.div`
  background-color: #3d3d3d;
`;

const StyledHeader = styled.h1`
  /* display: inline-block; */
  color: var(--clr-white);
  text-transform: none;
  letter-spacing: 0rem;
  font-size: 1.2rem;


  @media screen and (min-width: 740px) {
    font-size: 2.5rem;
    max-width: 800px;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    max-width: 850px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 3rem;
    max-width: 1000px;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 2565px) {
    font-size: 5rem;
    max-width: 1700px;
    padding-bottom: 3rem;
  }
`;

const StyledParagraph = styled.p`
  max-width: 550px;
  color: var(--clr-grey-9);
  font-size: 0.6rem;
  max-width: 200px;
  padding-bottom: 0.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    max-width: 500px;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.1rem;
    max-width: 650px;
  }

  @media screen and (min-width: 2565px) {
    font-size: 1.9rem;
    max-width: 1000px;
  }
`;

const StyledButton = styled.button`
  background-color: var(--clr-primary-1); /* Green */
  border: none;
  border-radius: 2rem;
  color: var(--clr-white);
  padding: 0.4rem 0.8rem;
  text-decoration: none;
  line-height: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  cursor: pointer;

  .arrow-icon {
    width: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem 1rem;
    max-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 650px;
    padding: 0.7rem 1rem;

    .arrow-icon {
      width: 22px;
    }
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.5rem;
    padding: 1.5rem 2.5rem;
  }

  &:hover {
    background-color: var(--clr-primary-2);
    transition: all 0.2s linear;
  }

  &:active {
    background-color: var(--clr-primary-2);
    color: var(--clr-grey-8);
  }
`;

const StyledContent = styled.div`
  color: var(--clr-white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ContentCentered = styled.div`
  width: 80%;
  padding-top: 3rem;

  @media screen and (min-width: 768px) {
    padding-top: 5rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 10rem;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 15rem;
    width: 65%;
  }

  @media screen and (min-width: 2565px) {
    padding-top: 30rem;
  }
`;

function HeroSection() {
  return (

      <StyledImageWrapper id="tour">
        <ImageHolder>
          <StyledContent>
            <ContentCentered>
              <StyledHeader>
                Wirtualny spacer Politechniki Rzeszowskiej po Wydziałe
                Elektrotechniki i Informatyki
              </StyledHeader>
              <StyledParagraph>
                Dzięki wirtualnemu spacerowi już teraz możesz zwiedzić budynek
                Politechniki Rzeszowskiej. Sprawdź jak wygladają wnetrza sal
                wykładowych, laboratoria i pracownie. Weź udział w grze, której
                zadaniem jest dostanie się do odpowiedniej sali i wykonanie
                ćwiczenia labolatoryjnego.
              </StyledParagraph>
              <Link to="/tour">
                <StyledButton>
                  Uruchom aplikacje
                  <PlayArrowRounded className="arrow-icon" />
                </StyledButton>
              </Link>
            </ContentCentered>
          </StyledContent>
          <picture>
            <source
              className="image-size"
              media="(min-width: 1062px)"
              srcSet={outside}
            />
            <source
              className="image-size"
              media="(min-width: 480px)"
              srcSet={outside2}
            />
            <img
              className="image-size"
              src={outside3}
              alt="IfItDoesntMatchAnyMedia"
            />
          </picture>
        </ImageHolder>
      </StyledImageWrapper>

  );
}

export default HeroSection;
