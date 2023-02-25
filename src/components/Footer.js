import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--clr-primary-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--clr-white);
  padding: 0 2rem;
  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--clr-white);

    @media (max-width: 768px) {
      font-weight: 900;
    }
  }
`;

const SideMenus = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  font-size: 12px;
  font-weight: 600;
  padding: 0.25rem 0;
  color: white;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 0.5rem 0;
  }

  &:hover {
    color: var(--clr-grey-8);
    cursor: pointer;
  }
`;

const StyledAnchor = styled.a`
  color: var(--clr-white);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <Logo />
        <SideMenus>
          <MenuWrapper>
            <h3 className='noselect'>Menu</h3>
            <List>
              <ListItem>
                <Link
                  activeClass='active'
                  to='tour'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Wirtualny Spacer
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  activeClass='active'
                  to='information'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Informacje
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  activeClass='active'
                  to='localization'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Lokalizacja
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Kontakt
                </Link>
              </ListItem>
            </List>
          </MenuWrapper>
          <MenuWrapper>
            <h3 className='noselect'>Social Media</h3>
            <List>
              <ListItem>
                <StyledAnchor href='https://www.facebook.com/profile.php?id=100068957352323'>
                  <FacebookIcon />
                  Facebook
                </StyledAnchor>
              </ListItem>
            </List>
          </MenuWrapper>
        </SideMenus>
      </FooterContainer>
      <div>
        <p style={{ color: "white", fontSize: "12px" }}>
          &copy; 2023 - Strona stworzona przez Damiana Działo
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
