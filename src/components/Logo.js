import React from 'react'
import { Link } from 'react-router-dom';
import LogoWEII from '../assets/WEII_Logo.png'
 
function Logo() {
    return (
        <div>
            <Link to='/'>
                <img src={LogoWEII} alt='PRz WEII Virtual Tour' />
            </Link>
        </div>
    )
}


export default Logo
