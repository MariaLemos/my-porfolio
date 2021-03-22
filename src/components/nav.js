import React from 'react'
import styled from 'styled-components';
import { FaAddressCard, FaHome} from 'react-icons/fa';
const Nav=()=> {
    return (
        <NavContainer>
        <FaHome/>
        <FaAddressCard/>
        </NavContainer>
    )
}
export default Nav

const NavContainer= styled.nav`
width:5%;
height:100vh;
background: rgba( 34, 34, 34, 0.80 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-top-right-radius:10px;
border-bottom-right-radius:10px;
border-right: 1px solid rgba( 255, 255, 255, 0.18 );
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;

`;