import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context/'
import {Link} from 'react-router-dom'
import { Link as ScrollerLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Navbar() {
    return <ProductConsumer>
        {value=>{
            const{handleSidebar, links} = value
            return <NavWrapper>
                <div className='nav-center'>
                    <FaBars className='nav-icon' onClick={handleSidebar}/>
                    {/* <ul className="nav-links">
                    {links.map(link=>{
                        return (
                          <ScrollerLink activeClass="active" to={link.scrollname} spy={true} offset={-80} smooth={true} duration={250}> <li className="nav-link nav-link-ltr"> {link.text}</li></ScrollerLink>
                        )   
                    })}
                  
                    </ul> */}

  {/* <div class="navbar">
  <a class="nav-link nav-link-ltr" href="#">Home</a>
  <a class="nav-link nav-link-ltr" href="#">About</a>
  <a class="nav-link nav-link-ltr" href="#">Contact</a>
  <a class="nav-link nav-link-ltr" href="#">Blog</a>
</div> */}
                </div>
            </NavWrapper>
        }}
    </ProductConsumer>          
}

const NavWrapper = styled.nav`
position:sticky;
top:0;
position:-webkit-sticky;
width: 100%;
z-index:4;
padding: 1rem 1.5rem;
background: var(--mainGrey);
border-bottom: 3px solid var(--primaryColor); 
.nav-center{
    display:flex;
    justify-content: space-between;
    margin: 0;
}

.nav-links {
    display:flex;
    margin: 0;
    text-decoration:none;

}
.nav-link {
  z-index:10;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #031D44;
  margin: 0;
  display: inline-block;
  position: relative;
  opacity: 0.75;
}

.nav-link:hover {
  opacity: 1; 
  cursor: pointer;
}

.nav-link:focus{
  color: red;
}

.nav-link::before {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #031D44;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 0px;
}

.nav-link-ltr:hover::before {
  width:65%;
  transition: 300ms;
}
.nav-icon{
    font-size: 1.5 rem;
    cursor: pointer;
    margin-left: 10vw;
    margin: auto 0;
    opacity:0.75;
}
.nav-icon:hover{
    opacity:1;
    transition: 300ms;
    transform: rotate(360deg) scale(1.5)
}
.nav-cart{
    position: relative;
}
.cart-items{
    background: var(--primaryColor);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
}
`