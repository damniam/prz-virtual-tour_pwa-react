import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoWEII from '../assets/WEII_Logo.png'
 

const Image = styled.img`
  width: 140px;
  height: 42px;
  @media screen and (min-width: 1024px) {
    width: 160px;
    height: 48px;
  }
`;


function Logo() {
    return (
        <div>
            <Link to='/'>
                <Image src={LogoWEII} alt='PRz WEII Virtual Tour' />
            </Link>
        </div>
    )
}


export default Logo
