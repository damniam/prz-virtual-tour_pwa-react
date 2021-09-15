import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import outside from "../assets/outside.png";
import { PlayArrowRounded } from "@material-ui/icons";

const StyledImageWrapper = styled.div`
  height: 20vh;
  position: relative;

  @media screen and (min-width: 768px) {
    overflow: hidden;
    height: 40vh;
  }

  @media screen and (min-width: 1024px) {
    height: 50vh;
  }

  @media screen and (min-width: 1440px) {
    height: 80vh;
  }

  @media screen and (min-width: 2560px) {
    height: 80vh;
  }
`;

const ImageHolder = styled.div`
  background-color: #3d3d3d;
`;

const Image = styled.img`
  /* display: block; */
  width: 100%;
  mix-blend-mode: multiply;
`;

const StyledContent = styled.div`
  color: var(--clr-white);
  position: absolute;
  top: 8rem;
  left: 8rem;
  z-index: 2;

  h2 {
    /* display: inline-block; */
    max-width: 850px;
    text-transform: none;
    line-height: 1.2em;
    letter-spacing: 0rem;
  }
  p {
    max-width: 550px;
    color: var(--clr-grey-9);
  }

  button {
    background-color: var(--clr-primary-1); /* Green */
    border: none;
    border-radius: 2rem;
    color: var(--clr-white);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 800;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--clr-primary-2);
    transition: all 0.2s linear;
  }

  button:active {
    background-color: var(--clr-primary-2);
    color: var(--clr-grey-8);
  }
`;


function HeroSection() {
  return (
    <StyledImageWrapper>
      <ImageHolder>
        <StyledContent>
          <h2>
            Wirtualny spacer Politechniki Rzeszowskiej po Wydziałe
            Elektrotechniki i Informatyki
          </h2>
          <p>
            Dzięki wirtualnemu spacerowi już teraz możesz zwiedzić budynek
            Politechniki Rzeszowskiej. Sprawdź jak wygladają wnetrza sal
            wykładowych, laboratoria i pracownie. Weź udział w grze, której
            zadaniem jest dostanie się do odpowiedniej sali i wykonanie
            ćwiczenia labolatoryjnego.
          </p>
          <Link to="/tour">
            <button>
              Uruchom aplikacje
              <PlayArrowRounded />
            </button>
          </Link>
        </StyledContent>
        <Image src={outside}></Image>
      </ImageHolder>
    </StyledImageWrapper>
  );
}

export default HeroSection;
