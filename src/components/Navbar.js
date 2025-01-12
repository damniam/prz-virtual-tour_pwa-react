import styled from "styled-components";
import Logo from "./Logo";
import { Menu, Close } from "@material-ui/icons";
import { Link } from "react-scroll";
import React, { useState } from "react";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  background: var(--clr-primary-1);
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  height: 4rem;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    height: 4.5rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
`;

const MenuMobile = styled.div`
  display: block;

  @media (min-width: 767px) {
    display: none;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <NavContainer>
      <NavWrapper>
        <Logo className='logo' />

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className='option'>
            <Link
              activeClass='active'
              to='tour'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Wirtualny Spacer
            </Link>
          </li>
          <li className='option'>
            <Link
              activeClass='active'
              to='information'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Informacje
            </Link>
          </li>
          <li className='option'>
            <Link
              activeClass='active'
              to='localization'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Lokalizacja
            </Link>
          </li>
          <li className='option'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </NavWrapper>

      <MenuMobile className='mobile-menu' onClick={handleClick}>
        {click ? <Close /> : <Menu />}
      </MenuMobile>
    </NavContainer>
  );
};

export default Navbar;
