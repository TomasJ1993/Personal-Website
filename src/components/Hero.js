import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
import mainBcg2 from '../images/defaultBcg.jpeg'
import React from 'react';
import {FaPlayCircle} from 'react-icons/fa'




export default function Hero({img, title, max, children, description, changingText, introPage, button}) {
    return <HeroWrapper  introPage={introPage} max={max} img={img} changingText={changingText}>
        <div className="flex-container">
        
            <div className="banner-container">
            <div className="text">
             <h1 className="hello text-title py-5" ></h1>
             <p className="text-title description mx-auto" ></p>
             <a href="https://srv-file7.gofile.io/download/a690m7/Web%20Developer.pdf" download="proposed_file_name" className="hire-button main-link" style={{margin: "2rem"}}>
                    hire me
                </a>
            {/* <h1 className='title'>{title}</h1>
            <p className="animated-words">  I am
           {description.map(text=>{
                        return (
                            <span >  {`${text}`}
                            </span>  
                        )   
            })}
            
            
        </p>   
            {children} */}
        
        </div>
        <div className="banner"> <FaPlayCircle onClick={()=>
            console.log('play video')
        } className="round-button"/>
</div>
        </div>
        </div>
    </HeroWrapper>
}
 
const HeroWrapper = styled.div`
.flex-container{
    display:flex;
    align-items:center;
    justify-content:center;
}

/* .hello:before{
    content: 'Hello';
    font-size: 10px;
    animation-name: helloAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}

@keyframes helloAnimation {
    0% { opacity:1; content: "hello"}
    25% { opacity:1;}
    50% { opacity:1;}
    65% { opacity:1;}
    80% { opacity:0;}
    90% { opacity:0;}
    100% {opacity:1; content: " "}
} */

.description:before{
    font-size: 2rem;
    margin-left:5vw;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    content: 'I am a softwarererere developer';
    animation: descriptionAnimation 10s linear infinite 0s;
}

.hello:before{
    content: 'Hello';
    font-size: 30px;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    animation: helloAnimation 10s linear infinite 0s;
}
/* 
@keyframes descriptionAnimation {
    0% { opacity:1; content: "I am a software developer"}
    25% { opacity:1;}
    50% { opacity:1;}
    65% { opacity:1;}
    80% { opacity:0;}
    90% { opacity:0;}
    100% {opacity:1; content: "what about you ?"}
} */

.banner{
/* background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props=>(props.img)}) center/cover no-repeat; */
  width: 100%;
  height: 80%;
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


@keyframes helloAnimation {
    0% { opacity: 0;  content: 'Hello';}
    30% { opacity: 0.7;  content: 'Hello';}
    70% { opacity: 1; transform: scale(1.1); content: 'and I am';}
    100% { opacity: 1; transform:  scale(1.2);  content: 'and I am';}

}


@keyframes descriptionAnimation {
    0% { opacity: 0;  content: 'I am Tomas Jankauskas';}
    30% { opacity: 0.7;  content: 'I am Tomas Jankauskas';}
    70% { opacity: 1; transform: translateY(15px);  content: 'A Web Developer';}
    100% { opacity: 1; transform: translateY(20px);   content: 'A Web Developer';}

}


.banner-container{
position:relative;
color: var(--mainWhite);
text-align:center;

min-height: 80vh;
width: 100%;
}

.text{
    z-index: 2;
    position:relative;
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

/* .animated-words{
font-size: 2rem;
}

.animated-words span:nth-child(1) { 
    color: var(--primaryColor)
}

.animated-words span:nth-child(2) { 
    -webkit-animation-delay: 3s; 
    -ms-animation-delay: 3s; 
    animation-delay: 3s; 
    color: var(--primaryColor)
}
.animated-words span:nth-child(3) { 
    -webkit-animation-delay: 6s; 
    -ms-animation-delay: 6s; 
    animation-delay: 6s; 
    color: var(--primaryColor)
}
.animated-words span:nth-child(4) { 
    -webkit-animation-delay: 9s; 
    -ms-animation-delay: 9s; 
    animation-delay: 9s; 
    color: var(--primaryColor)
}
.animated-words span:nth-child(5) { 
    -webkit-animation-delay: 12s; 
    -ms-animation-delay: 12s; 
    animation-delay: 12s; 
    color: var(--primaryColor)
}
.animated-words span:nth-child(6) { 
    -webkit-animation-delay: 15s; 
    -ms-animation-delay: 15s; 
    animation-delay: 15s; 
    color: var(--primaryColor)
}
.animated-words span {
    position: absolute;
    opacity: 0;
    overflow: hidden;
    color: #000000;
    text-align:center;
    -webkit-animation: animateWord 18s linear infinite 0s;
    -ms-animation: animateWord 18s linear infinite 0s;
    animation: animateWord 18s linear infinite 0s;
} */
/* @-webkit-keyframes animateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-10px); }
    5% { opacity: 1; -webkit-transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(0px); }
    20% { opacity: 0; -webkit-transform: translateY(30px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}

@keyframes animateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(0px); }
    5% { opacity: 1; -webkit-transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(10px); }
    20% { opacity: 0; -webkit-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
} */

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