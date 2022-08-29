import React, { useState } from 'react'
import styled from 'styled-components'
// import { project3, netflixClone, portfolio1, portfolio2, sstarx, chatapp, chemvigyan, teachingApp, textutils, tier3wale, spotifyHomepage, myntraClone, facebookClone, spotify, notesapp, idicuss, postmaster } from '../../images';

import projectData from '../../projectData';

// const TechUsed = ['HTML',"CSS",'REACT','JAVASCRIPT','MONGODB','MONGOOSE']

const ProjectContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );
  background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
  /* height: 100vh; */
  background-image: linear-gradient( 292.9deg, rgba(254,105,241,1) 28.8%, rgba(182,44,248,1) 70.4% );
  padding: 5%;
  position: relative;
  @media (min-width:0px) and (max-width: 900px) {
    flex-direction: column !important;
    height: 100vh;
  }
`;

const AboutProject = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction: column;
  flex-basis: 48%;
  height: 400px;
  position: relative;
  overflow: auto;
  /* background-color: rebeccapurple; */


  outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    resize: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:20px 20px 50px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

`

const ProjectDemo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 400px;
  flex-basis: 48%;
  position: relative;
  flex-basis: 50%;
  outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    resize: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:20px 20px 50px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

`

const ProjectDemoImage = styled.img`
  width: 100%;
  transition: all 0.6s;
  opacity: 1;
  @media(hover:hover){
    opacity: 0.4;
    width: 50%;
    &:hover{
    opacity: 1;
    transform: scale(2);
  }
  }

  
`

const Technologies = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
`
const TechButton = styled.button`
text-transform: uppercase;
  display:flex;
  align-items:center;
  justify-content:center;
    width: 100px;
    padding:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    resize: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:-1px -1px 1px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    color: #0d1644;
    margin: 10px;
    cursor: pointer;
    min-width: max-content;
    transition: all 0.4s;
    font-weight: 600;
    &:hover{
      transform:  rotateX(47deg) rotateY(-4deg) rotateZ(23deg) scale(1.1);
      color: black;
      font-weight: bolder;
      letter-spacing: 1px;
      color: white;




    }

    @media (min-width:0px) and (max-width: 600px) {
      width: auto;
  }
  
`

const ViewButtonWrapper = styled.div`
  
`

const ViewButton = styled.button`
    width: 100px;
    padding:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    color: #0d1644;

    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 15px;
    &:hover{
      transform: scale(1.1);
      color: white;
    }

`
const ShorMoreButton = styled.button`
    padding:15px 15px;
    width: 250px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 1px;

`

const Show = styled.div`
  width: 100%;
  background-image: linear-gradient( 292.9deg, rgba(254,105,241,1) 28.8%, rgba(182,44,248,1) 70.4% );
  display:flex;
  align-items:center;
  justify-content:center;

`



const ProjectHeading = styled.h1`
  font-size: 1.8em;
  color: white;
  margin: 5px;
  text-align: center;
  letter-spacing: 1px;
  @media (min-width:0px) and (max-width: 600px) {
    font-size: 30px;
  }
`

const ProjectText = styled.p`
  width: 90%;
  text-align: center;
  font-size: 1.1em;
  letter-spacing: 1px;
  color: white;
  /* color: #0d1644; */
  letter-spacing: 1px;
  filter: drop-shadow(none);
  margin: 5px;
  @media (min-width:0px) and (max-width: 600px) {
    font-size: 15px;
  }

`

const ProjectNumber = styled.h1`
    font-size: 100px;
    color: rgba(255, 255, 255, 0.08);
    position: absolute;
    right: 10px;
    top: 0;
`

const Heading = styled.h1`
    position: absolute;
    top: 10px;
    left: 5%;
    font-size: 2.5em;
    padding: 0 20px;
    color: #333;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    z-index: 1;
    color: white;
`

const Project = ({ theme }) => {

  const [showMore, setShowMore] = useState(13);

  const LoadMore = () => {
    // console.log("loaded")
    // console.log(showMore)
    setShowMore(showMore - 4);
  }

  const Showless = () => {
    setShowMore(13);
  }

  const output = projectData.map((item)=>{
    // console.log(item);
    return item;
  }).filter((x)=> x.projectNumber > showMore)


  // console.log(output[0].projectNumber)

  // output.map((item)=>{
  //   console.log(item)
  // })



  return (
    <div style={{ position: "relative" }}>
      <Heading>Projects</Heading>

      {
         output.map((item, index) => 
          // console.log(item)
           <ProjectCard
            key={index}
            number={item.projectNumber}
            theme={theme}
            image={item.imgUrl}
            title={item.title}
            text={item.text}
            TechUsed={item.techUsed}
            liveLink={item.liveLink}
            codeLink={item.codeLink}
          />

        )
      }



      <Show style={{ background: `${theme}` }}>
        {showMore > 0 && <ShorMoreButton onClick={() => LoadMore()}>Load More Projects</ShorMoreButton>}
        {showMore <13 && <ShorMoreButton onClick={() => Showless()}>Show less</ShorMoreButton>}
      </Show>
    </div>
  )
}



export const ProjectCard = ({ theme, number, reverse, image, title, text, TechUsed, codeLink, liveLink }) => {
  const black = { background: `${theme}` };
  const Tech = TechUsed;
  // console.log(TechUsed)
  return (
    <ProjectContainer id='projects' style={{ ...black, flexDirection: reverse }}>
      <ProjectDemo>
        <ProjectNumber>{number}</ProjectNumber>
        <ProjectDemoImage src={image} />
      </ProjectDemo>
      <AboutProject>
        <ProjectHeading>{title}</ProjectHeading>
        <ProjectText>{text}</ProjectText>
        <Technologies>

          {

            Tech !== undefined && Tech.map((item, index) => {
              return <TechButton key={index}>{item}</TechButton>
            })
          }

        </Technologies>
        <ViewButtonWrapper>
          <a href={liveLink} target="blank" title='visit site'><ViewButton>View Live</ViewButton></a>
          <a href={codeLink} target="blank" title='view code'><ViewButton>View Code</ViewButton></a>
        </ViewButtonWrapper>
      </AboutProject>
    </ProjectContainer>
  )
}


export default Project