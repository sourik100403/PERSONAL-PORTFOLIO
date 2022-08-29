import React from 'react'
import { fb, insta, linkedin,git,gmail } from '../../images'

import "./Footer.css"
const Footer = ({theme}) => {
  return (
    <div className="footer" style={{background:`${theme}`}}>
      <div className='leftFooter'>
        <h5>About Me</h5>
        <p>
          Hey, My name is <span>Sourik Parui</span>. I am a full-stack Developer. Now I am pursing B-TECH  electronics and communication engineering (2020-2024) in Bengal college of engineering and technology, Durgapur<b> which affiliated by Maulana Abul Kalam Azad University Of Technology.</b>
        </p>
        <br />
        <br />
        <p>EMAIL - <b> sourikparui100403@gmail</b></p>
        <br />
        <p> MOBILE - <b>9875320238 || 7872422062 </b></p>
        <br />
        <br />
        <h3>	&#169; Copyright | All rights reserved by <span>@Sourik</span></h3>

      </div>

      <div className='rightFooter'>
        <h6>Social Media</h6>

        <div className="socialMedia">
          <a href="https://www.facebook.com/sourik.parui" target="_blank" rel="noreferrer">
            <img src={fb} alt="" />
          </a>
          <a href="https://www.instagram.com/sourikparui100403/" target="_blank" rel="noreferrer">
            <img src={insta} alt="" />
          </a>
          <a href="https://linkedin.com/in/sourik-parui-842130201" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/sourik100403" target="_blank" rel="noreferrer">
            <img src={git} alt="" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
