import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import warningImage from '../assets/warning.png';
 
const Wrapper = styled.main`
  background: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-black);
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    padding: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Image = styled.img`
  max-width: 150px;

`

const Header = styled.h1`
  display: inline-block;
  padding: 2rem;
`

const ErrorPage = () => {
    return (
      <Wrapper className="page-100">
        <div>
          <HeaderWrapper>
          <Image src={warningImage} alt="404 error" />
          <Header>404</Header>
          </HeaderWrapper>
          <h3>Oopps! Strona, której szukasz nie istnieje lub została usunięta</h3>
          <Link className="btn" to="/">
            Wróć do Strony Głównej
          </Link>
        </div>
      </Wrapper>
    );
}

export default ErrorPage
