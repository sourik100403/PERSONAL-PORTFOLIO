import React, { useEffect, useRef } from 'react'
import "./GlassCard.css"
import VanillaTilt from 'vanilla-tilt';
import { fb, insta, linkedin,git,my } from '../../images'
export const GlassCardSection = ({theme}) => {
    return (
        <div id='timeline' style={{background:`${theme}`}} className="glassContainer">
            <GlassCard cardNumber="01" cardName="Sourik Parui" profession="Student" />
            <GlassCard cardNumber="02" cardName="Sourik Parui" profession="Student" />
            <GlassCard cardNumber="03" cardName="Sourik Parui" profession="Student" />
            <GlassCard cardNumber="04" cardName="Sourik Parui" profession="Student" />
            <GlassCard cardNumber="05" cardName="Sourik Parui" profession="Student" />
            <GlassCard cardNumber="06" cardName="Sourik Parui" profession="Student" />
        </div>
    )
}



const options = {
    scale: 1.1,
    speed: 1000,
    max: 30,
    glare: 1,

};


const GlassCard = ({ cardNumber, cardName, profession }) => {
        const Tilt = (props) => {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }

    return (

        <>

            <Tilt className="card" options={options}>
                <div className="cardContent">
                    <h1>{cardNumber}</h1>
                    <div className="cardImage">
                        <img src={my} alt="" />
                    </div>
                    <h3>{cardName}</h3>
                    <p>{profession}</p>
                    <ul>
                        <li><img src={fb} alt="" /></li>
                        <li><img src={insta} alt="" /></li>
                        <li><img src={linkedin} alt="" /></li>
                        <li><img src={git} alt="" /></li>
                    </ul>
                </div>
            </Tilt>


        </>

    )

}


export default GlassCard


