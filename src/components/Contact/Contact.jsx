import React  from 'react'
import styled from 'styled-components'
import { contact } from '../../images'
// import VanillaTilt from 'vanilla-tilt';
import { animate } from '../../images';
import { h, i, r, e, m } from '../../images';


const hireme = [h, i, r, e, m, e]


const ContactContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );
    background-image: radial-gradient( circle farthest-corner at 10.2% 55.8%,  rgba(252,37,103,1) 0%, rgba(250,38,151,1) 46.2%, rgba(186,8,181,1) 90.1% );
    display:flex;
    align-items:center;
    justify-content:center;
  /* animation: ${animate} 20s linear infinite forwards; */

    
    
`

const ContatFormContainer = styled.div`
    width: 90%;
    height: 80vh;
    /* background-image: radial-gradient( circle farthest-corner at 10.2% 55.8%,  rgba(252,37,103,1) 0%, rgba(250,38,151,1) 46.2%, rgba(186,8,181,1) 90.1% ); */
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (min-width:0px) and (max-width: 600px) {
        flex-direction: column;
  }

`

const Form = styled.form`
    width: 80%;
    height: 100%;
    /* background-color: red; */
    padding: 30px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction: column;
    flex-basis: 50%;
    @media (min-width:0px) and (max-width: 600px) {
        padding:0px;
  }
`

const FormHeading = styled.div`
    color: white;
    display: flex;
    text-transform: capitalize;

    
 @media (min-width:0px) and (max-width: 600px) {
    font-size: 2em;
  }
`
const Text = styled.img`
    font-size: 30px;
    transition: all 0.3s;
    text-transform: uppercase;
    padding: 5px;
    filter: invert(1);
    width: 70px;

  &:hover{
    transform: translateY(-10px) rotateZ(-60deg);

  }
  @media (min-width:0px) and (max-width: 600px) {
    width: 40px;
  }
    
`

const Input = styled.input`
    width: 80%;
    padding: 10px;
    font-size: 15px;
    margin: 20px;
    outline: none;
    border: none;
    background: transparent;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:20px 20px 50px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;

    ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }


  @media (min-width:0px) and (max-width: 600px) {
    width: 100%;
    margin: 10px;
  }
`

const Textarea = styled.textarea`
    width: 80%;
    padding: 10px;
    font-size: 15px;
    margin: 20px;
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
    color: white;

    ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }
  @media (min-width:0px) and (max-width: 600px) {
    width: 100%;
    margin: 10px;
  }
    
`
const ImageContainer = styled.div`
    height: 100%;
    /* background-color: rebeccapurple; */
    flex-basis: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:20px 20px 50px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    
`

const Image = styled.img`
    width: 80%;
    height: 100%;
    transition: all 0.4s;
    transform-style: preserve-3d;
    /* background-color: rebeccapurple; */

    &:hover{
      /* transform: scale(1.2) rotate3d(1, 1, 1, 295deg); */
      transform: rotateZ(-45deg) rotateX(35deg) rotateY(25deg);
     
    }
    /* @media (hover:none) {
      transform: scale(1.2) rotate3d(1, 1, 1, 295deg); 
      } */
 
`

const Button = styled.button`
    width: 100px;
    padding:10px;
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
    color: white;
    margin: 10px;
    cursor: pointer;

    &:hover{
        filter: invert(1);
    }
`


const Contact = ({ theme }) => {
  // const Tilt = (props) => {
  //   const { options, ...rest } = props;
  //   const tilt = useRef(null);

  //   useEffect(() => {
  //     VanillaTilt.init(tilt.current, options);
  //   }, [options]);

  //   return <div ref={tilt} {...rest} />;
  // }
  return (
    <ContactContainer id='contact' style={{ background: `${theme}` }}>
      <ContatFormContainer>
        <Form>
          <FormHeading>
            {hireme.map((item, index) => {
              return <Text key={index} src={item} />
            })}
          </FormHeading>


          <Input type="text" placeholder="your name" required={true} />
          <Input type="email" placeholder="your email" required={true} />
          <Textarea rows="10" placeholder='your message' required={true} />
          <Button> SEND </Button>
        </Form>

        <ImageContainer>
          <Image src={contact} />
        </ImageContainer>
      </ContatFormContainer>
    </ContactContainer>
  )
}

export default Contact