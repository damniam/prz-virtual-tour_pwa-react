import React from 'react'
import styled from 'styled-components';
import UnityPlaceholder from '../components/UnityPlaceholder';
import Navbar from '../components/Navbar';
import GlobalStyle from '../styles/globalStyle';

const StyledPage = styled.body`
    background-color: var(--clr-primary-2);

`

function TourApp() {
    return (
      <>
        <Navbar />
        <GlobalStyle  />
        <UnityPlaceholder />
      </>
    );
}

export default TourApp;
