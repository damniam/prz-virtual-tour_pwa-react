import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledNav = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-1);
`;



export default function Navbar() {
  return <StyledNav>
      <Logo />
  </StyledNav>
}
