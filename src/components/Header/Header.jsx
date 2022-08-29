import React, { useState } from 'react'
import styled from "styled-components"
import { logo, menu } from '../../images'

const Navbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 3%;

`

const LeftNav = styled.div`
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  filter: invert(1);

`
const Logo = styled.img`
  width: 100px;
  filter: invert(1);
`

const RighttNav = styled.div`
  padding: 5px 10px;
  border-radius: 3px;
  color: black;

`
const MenuIcon = styled.img`
  width: 50px;
  display: none;
  @media (min-width: 0px) and (max-width: 900px) {
    display: block;
  }
`

const MiddleNav = styled.div`
  width: 100%;
  transition: all 0.4s;


  @media (min-width: 0px) and (max-width: 600px) {
    height: inherit;
  }
`

const Ul = styled.ul`
  display:flex ;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;

  @media (min-width: 0px) and (max-width: 900px) {
    flex-direction: column;
    background: red;
    width: 100%;
    position: absolute;
    left: 0;
    justify-content: space-evenly;
    padding: 10px;
    height: auto;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    z-index: 1;
    transition: all 0.4s;
    top: -400px;
    z-index: -1;



    /* display: none; */
  }  
`
const Li = styled.li`
  list-style: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 14px;
  margin: 10px;
  width: 100px;
  display:flex;
  align-items:center;
  justify-content:center;
  
  font-size: 1.1em;
  color: #333;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
    z-index: 1;
    transition: all 0.3s;
    &:hover{
      color: #333;
      transform:scale(1.1);
  }

  @media (min-width: 0px) and (max-width: 600px) {
    width: 80px;
  }
`

const Link = styled.a`
  text-decoration: none;
  /* filter: hue-rotate(15deg) brightness(2.5); */
  color: white;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 15px;
      width: 60px;
  }

  transition: all 0.3s;
  &:hover{
      color: #333;
  }

`





const Header = () => {

  const [showmenu, setShowmenu] = useState(true);

  const ShowMenu = () => {
    console.log("clicked")
    const ul = document.querySelector('ul');
    if(showmenu){
      ul.transition= "all 0.4s";
      ul.style.opacity="1";
      ul.style.top="0px";
    }
    else{
      ul.style.top="-400px";
    }

    
    setShowmenu(()=>!showmenu)
    console.log(showmenu)
  }

  return (
    <Navbar>
      <LeftNav>
        <Logo src={logo} alt='logo' />
      </LeftNav>
      <MiddleNav>
        <Ul>
          <Li>
            <Link href="#home">Home</Link>
          </Li>
          <Li>
            <Link href="#projects">Projects</Link>
          </Li>
          <Li>
            <Link href="#skills">Skills</Link>
          </Li>
          <Li>
            <Link href="#timeline">Reviews</Link>
          </Li>
          <Li>
            <Link href="#contact">Contact</Link>
          </Li>
        </Ul>
      </MiddleNav>
      <RighttNav>
        <MenuIcon onClick={ShowMenu}  src={menu} alt='menu' />
      </RighttNav>

    </Navbar>
  )
}

export default Header