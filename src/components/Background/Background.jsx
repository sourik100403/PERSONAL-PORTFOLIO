import React from 'react'
import styled from 'styled-components';
import { animate } from '../../images';
import {  robotHand, letterS,letterO, letterU, letterR,letterI,letterK,a,f,r,o,t,e,d,v,p,l,u,s,c,k}  from '../../images'

// const WhoIam = ['I ','-', 'a', 'm ','-',  'a ','-',  'f', 'u', 'l', 'l ', '-', 's', 't', 'a', 'c', 'k ','-',  'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
// const WhhoIamImage =[i,a,m,a]
const frontend=[f,u,l,l,s,t,a,c,k];
const developer=[d,e,v,e,l,o,p,e,r];



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient( circle farthest-corner at 11.7% 80.6%,  rgba(249,185,255,1) 0%, rgba(177,172,255,1) 49.3%, rgba(98,203,255,1) 89% );
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(1fr);

  /* animation: ${animate} 10s linear infinite forwards; */
  position: relative;


  @media (min-width:0px) and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (min-width:0px) and (max-width: 600px) {
    justify-content: space-evenly;
  }
  
`

const RightContainer = styled.div`
  flex: 1;
  
`

const RightImage = styled.img`
  width: 100%;
  /* filter: invert(1); */
  /* filter: brightness(189%); */
  filter: hue-rotate(360deg);
`

const LeftImage = styled.img`
  width: 15%;
  transition: all 0.4s;
  filter: invert(1);


  &:hover{
    transform: translateY(-20px);
  }
`

// const Shadow = styled.span`
//   background-color: #333333b8;
//   background:linear-gradient(90deg, rgba(47,0,238,1) 21%, rgba(255,0,133,1) 80%);

//   border-radius: 100%;
//   width: 70%;
//   height: 20px;
//   margin-bottom: 20px;
//   transform-style: preserve-3d;
//   filter: blur(2px);
//   @media (min-width:0px) and (max-width: 600px) {
//     width: 50%;
//     height: 10px;

//   }

// `


const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (min-width:0px) and (max-width: 600px) {
    width: 60%;
  }

  filter:brightness(2);
  /* filter:${theme => theme==="black" ? 'brightness(5)' : 'brightness(1)'}; */

  /* ${theme => theme==='black' &&`
    filter:brightness(5);
    background:red;
`
  } */
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: center;
  box-shadow: inset 3px 3px 1px rgba(0, 0, 0, 0.05) ,inset -3px -3px 1px rgba(255,255,255,0.1);
  @media (min-width:0px) and (max-width: 600px) {
    max-width: 100%;
  }
  filter:brightness(2);
  
`

const Text = styled.img`
  font-family: sans-serif;
  /* font-size: 30px; */
  width: 50px;
  transition: all 0.2s;
  padding: 3px;
  filter: invert(1);

  &:hover{
    transform: translateY(-20px);
  }
  @media (min-width:0px) and (max-width: 1000px) {
    font-size:1rem;
    width: 10%;

  }
`




const Background = ({theme}) => {
  

  return (
    <Container id='home' style={{background:`${theme}`}}>
      <LeftContainer>
        <Name>
          <LeftImage src={letterS} />
          <LeftImage src={letterO} />
          <LeftImage src={letterU} />
          <LeftImage src={letterR} />
          <LeftImage src={letterI} />
          <LeftImage src={letterK} />
        </Name>
        {/* <Shadow></Shadow> */}
        <TextContainer>
          {frontend.map((item, index) => {
            return <Text key={index} src={item}/>
          })}
        </TextContainer>
        <TextContainer>
          {developer.map((item, index) => {
            return <Text key={index} src={item}/>
          })}
        </TextContainer>


      </LeftContainer>
      <RightContainer>
        <RightImage src={robotHand} alt='Hand' />
      </RightContainer>
    </Container>
  )
}

export default Background