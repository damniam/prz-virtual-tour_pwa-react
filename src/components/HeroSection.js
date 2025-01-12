import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PlayArrowRounded } from "@material-ui/icons";

const StyledHeroWrapper = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url("https://ik.imagekit.io/laepnmjivje/outside_C8C-8MsgUY.webp");
  background-color: RGBA(17, 17, 17, 0.85);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  position: relative;
  margin-top: 4rem;
`;

const StyledHeader = styled.h1`
  /* display: inline-block; */
  color: var(--clr-white);
  text-transform: none;
  letter-spacing: 0rem;
  font-size: 1.5rem;

  @media screen and (min-width: 740px) {
    font-size: 3rem;
    max-width: 800px;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 960px) and (orientation: landscape) {
    font-size: 1.8rem;
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

  @media all and (max-width: 960px) and (orientation: landscape) {
    font-size: 0.7rem;
    max-width: 700px;
    padding-bottom: 0.2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    max-width: 500px;
    /* padding-bottom: 2rem; */
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
    font-size: 1.2rem;
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
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentCentered = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 55%;
  }

  @media screen and (min-width: 2565px) {
    width: 50%;
  }
`;

function HeroSection() {
  return (
    <StyledHeroWrapper id='tour'>
      <StyledContent>
        <ContentCentered>
          <StyledHeader>
            Wirtualny Spacer po Wydziale Elektrotechniki i Informatyki
            Politechniki Rzeszowskiej
          </StyledHeader>
          <StyledParagraph>
            Dzięki wirtualnemu spacerowi już teraz możesz zwiedzić budynek
            Politechniki Rzeszowskiej. Sprawdź jak wygladają wnetrza sal
            wykładowych, laboratoria i pracownie. Weź udział w grze, której
            zadaniem jest dostanie się do odpowiedniej sali i wykonanie
            ćwiczenia labolatoryjnego.
          </StyledParagraph>
          <Link to='/tour'>
            <StyledButton>
              Uruchom aplikacje
              <PlayArrowRounded className='arrow-icon' />
            </StyledButton>
          </Link>
        </ContentCentered>
      </StyledContent>
    </StyledHeroWrapper>
  );
}

export default HeroSection;
