import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Wrapper = styled.div`
  padding: 3rem 0;
  width: 100%;
`;

const StyledParagraph = styled.p`
  padding-bottom: 1rem;
`

function Contact() {
    return (
      <Wrapper id="contact">
        <h2 className="noselect">Kontakt</h2>
        <StyledParagraph>
          W przypadku problemów z działaniem aplikacji wirtualnego spaceru lub
          innych zastrzeń proszę o kontakt za pośrednictwem formularza.
        </StyledParagraph>
        <ContactForm />
      </Wrapper>
    );
}

export default Contact
