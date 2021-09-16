import React from 'react'
import styled from 'styled-components'

const StyledWrapperHr = styled.div`
    padding: 3rem;
`

function HorizontalLine() {
    return (
        <StyledWrapperHr>
            <hr />
        </StyledWrapperHr>
    )
}

export default HorizontalLine
