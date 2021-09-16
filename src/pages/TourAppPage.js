import React from 'react'
import styled from 'styled-components';
import UnityPlaceholder from '../components/UnityPlaceholder';

const StyledPage = styled.div`
    background-color: var(--clr-primary-5);

`

function TourApp() {
    return (
        <StyledPage>
            <UnityPlaceholder />
        </StyledPage>
    )
}

export default TourApp;
