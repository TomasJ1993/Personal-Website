import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
import mainBcg2 from '../images/defaultBcg.jpeg'
import React from 'react';
import {FaPlayCircle} from 'react-icons/fa'


export default function Hero({img, title, max, children, description, changingText, introPage, button}) {
    return <HeroWrapper  introPage={introPage} max={max} img={img} changingText={changingText}>        
            <div className="banner-container row mx-0 mb-5">
            <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-end text" style={{zIndex: "2"}}>
             <p className="text-title description" ></p>
             </div>
             <div className="buttonContainer col-12 col-md-12 col-sm-12">
             <a href="https://srv-file7.gofile.io/download/a690m7/Web%20Developer.pdf" download="proposed_file_name" className="hire-button main-link" style={{margin: "2rem"}}>
                    hire me
                </a>
        </div>
        <div className="banner"> <FaPlayCircle onClick={()=>
            console.log('play video')
        } className="round-button"/>
</div>
       </div>
    </HeroWrapper>
}
 
const HeroWrapper = styled.div`

.description:before{
    font-size: 2rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    content: '';
    animation: descriptionAnimation 15s linear infinite 0s;
}

.buttonContainer{
    z-index:2;
}

.banner{
/* background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props=>(props.img)}) center/cover no-repeat; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #000000;
  padding: 10px;
  z-index: 1;
  animation: bannerAnimation 5s linear infinite 0s;
  ;
}

    @keyframes bannerAnimation {
    0% { opacity: 0;  }
    30% { opacity: 0.7; }
    50% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 1; }
}

@keyframes descriptionAnimation {
    0% { opacity: 0;  content: 'Hello';}
    20% { opacity: 1;  content: 'Hello';}
    47% { opacity: 1;  content: 'I am Tomas Jankauskas';}
    86% { opacity: 1; transform: translateY(20px);   content: 'A Web Developer from Lithuania';}
    100% { opacity: 1; transform: translateY(20px);   content: 'A Web Developer from Lithuania';}

}

.banner-container{
position:relative;
color: var(--mainWhite);
text-align:center;
min-height: 90vh;
width: 100%;
}


.title{
    animation-delay: 5s;
    padding: 2rem;
    font-size:3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform:uppercase;
    letter-spacing: var(--mainSpacing)
}


.banner:nth-child(1){
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${mainBcg}) center/cover no-repeat; 

}

.banner:nth-child(2){
    /* background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props=>(props.img)}) center/cover no-repeat;  */
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${mainBcg2}) center/cover no-repeat; 
    animation-delay: 5s; 
}

/* video button */
.round-button {
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

.hire-button{
    position:fixed;
}
}

`
Hero.defaultProps = {
    img: mainBcg
}