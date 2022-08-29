import React from 'react'
import "./Skills.css"
import {alllang,bootstrap,css,react,javascript,php} from "../../images/index"

const Skills = ({theme}) => {
  return (

    <div id='skills' className="content">

    
    <div className="box" style={{background:`${theme}`}}>
      <h1 className='skillsHeading'>Skills</h1>
      <div className="cube">
        <div className="cubeFaces cubeFace1">
          <img src={react}
            alt="cubeFace1" />
        </div>


        <div className="cubeFaces cubeFace2">
          <img src={css}
            alt="cubeFace2" />
        </div>


        <div className="cubeFaces cubeFace3">
          <img src={php}
            alt="cubeFace3" />
        </div>


        <div className="cubeFaces cubeFace4">
          <img src={bootstrap}
            alt="cubeFace4" />
        </div>


        <div className="cubeFaces cubeFace5">
          <img src={javascript}
            alt="cubeFace5" />
        </div>


        <div className="cubeFaces cubeFace6">
          <img src={alllang}
            alt="cubeFace6" />
        </div>



      </div>

      <div className="cubeShadow"></div>
    </div>

    </div>

  )
}

export default Skills