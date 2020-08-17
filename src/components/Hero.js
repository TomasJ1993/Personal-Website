import styled from 'styled-components'
import backgroundImageOne from '../images/mountain.jpg'
import backgroundImageTwo from '../images/wood.jpg'
import backgroundImageThree from '../images/webdev.jpg'
import React from 'react';
import {FaPlayCircle} from 'react-icons/fa'


export default function Hero({img, title, max, children, description, changingText, introPage, button}) {
    return <HeroWrapper  introPage={introPage} max={max} img={img} changingText={changingText}>    
    <div className="banner-container mb-5 py-0 px-0">
        <div className="images-list">
            <img className="top" src={backgroundImageOne}/>
            <img src={backgroundImageTwo}/>
            <img src={backgroundImageThree}/>   
        </div>
        <div className="text-container row mx-0">
        <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-end text" style={{zIndex: "2"}}>
             <p className="text-title description" ></p>
             </div>
             <div className="col-12 col-md-12 col-sm-12">
             <a href="https://www.dropbox.com/s/vefulxwthgol6zb/Web%20Developer%20TJ.pdf?dl=0" download="proposed_file_name" target="_blank" className="hire-button main-link" style={{margin: "2rem"}}>
                    hire me
            </a>
        </div>
        </div>
       
        </div>    
        
    </HeroWrapper>
}
 

   {/* <div className="banner-container row mx-0 mb-5">
            <img src={backgroundImageOne}/>
        <img src={mainBcg2}/>
            
        <div className="banner"> 
             <FaPlayCircle onClick={()=>
            console.log('play video')
        } className="round-button"/>
</div>
       </div> */
    }

const HeroWrapper = styled.div`

.banner-container{
    position:relative;
    width: 100%;
    height: 90vh;
    color: var(--mainWhite);
    text-align:center;
    background-repeat: no-repeat;

}

.images-list{
    background:#000000;
    position:relative;
    width:100%;
    height:100%;
}


@keyframes fade {
  0%   { opacity: 0; }
  11.11%   { opacity: 1; }
  33.33%  { opacity: 1; }
  44.44%  { opacity: 0; }
  100% { opacity: 0; }
}
.images-list img { 
    opacity:0; 
    animation-name: fade; 
    animation-duration: 15s; 
    animation-iteration-count: infinite; 
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:100%;
    height:100%
}

.images-list img:nth-child(1) { animation-delay: 0s;}
.images-list img:nth-child(2) { animation-delay: 5s; }
.images-list img:nth-child(3) { animation-delay: 10s; }


.text-container{
    position:absolute;
    top:0;
    height:100%;
    width:100%;
}

.description:before{
    font-size: 2rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    content: '';
    animation: descriptionAnimation 15s linear infinite 0s;
}

@keyframes descriptionAnimation {
    0% { opacity: 0;  content: 'Hello';}
    20% { opacity: 1;  content: 'Hello';}
    47% { opacity: 1;  content: 'I am Tomas Jankauskas';}
    86% { opacity: 1; transform: translateY(20px);   content: 'A frontend web developer';}
    100% { opacity: 1; transform: translateY(20px);   content: 'A frontend web developer';}
}

.title{
    animation-delay: 5s;
    padding: 2rem;
    font-size:3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform:uppercase;
    letter-spacing: var(--mainSpacing)
}


/* video button */
.round-button {
    display:none; /*invisible for now */
    width:50px;
    height:50px;
    border-radius:50%;
    float:right;
	font-size:20px;
	font-weight:bold;
    transition: all 0.3s ease;
    margin-right:0;
}
.round-button:hover {
    cursor: pointer;
	background-color: #5fb7ea;
	box-shadow: 0px 0px 20px #5fb7ea;
}

`
Hero.defaultProps = {
    img: backgroundImageOne
}