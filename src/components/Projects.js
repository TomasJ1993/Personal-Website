import React from 'react'
import Title from './Title'
import styled from 'styled-components'
import testImage from '../images/mainBcg.jpeg'
import overhandFitness from '../images/overhandWebsite2.jpeg'
import electronicImage from '../images/electronics.jpeg'
import metroImage from '../images/metro.jpeg'
import coderbunkerImage from '../images/coderbunker.jpeg'
import trafficImage from '../images/traffic.jpeg'
import udty from "../images/udentity.png"

export default function Projects({bodyColor}) {
    return <ProjectsWrapper bodyColor={bodyColor}>
        <div className="py-5">
            <div data-aos="fade-up" className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                                    <Title titleDescription="accomplishments" center={true} title="Projects"/>
                                    <div className="projects-container">
                                        <div className="row">
                                            <div className="col-8 col-md-8 col-sm-8">
                                        <a href="http://overhandfitness.cn/en/home">

                                                <div className="project-item">

                                                    <div className="overlay">
                                                        <div className="text text-title">Overhand Fitness
                                                        <div className="text-description">contributor to Tech-Powered Fitness project</div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={overhandFitness}
                                                     />
                                                </div>
                                                </a>

                                            </div>
                                            <div className="col-4 col-md-4 col-sm-4">
                                            <div className="row">
                                            <div className="col-12 col-md-12 col-sm-12">
                                            <a href="https://www.udty.tech">

                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">
                                                            Udentity <div className="text-description">
                                                            Livestream platform for students
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={udty}
                                                     />
                                                </div>
                                                </a>
                                                </div>
                                                <div className="col-12 col-md-12 col-sm-12 py-3">
                                                <a href="https://github.com/TomasJ1993/houtan-analysis">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">
                                                            Houtan Project <div className="text-description">
                                                                metro train location detection
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={metroImage}
                                                     />
                                                </div>
                                                </a>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-6 col-md-6 col-sm-6">
                                            <a href="https://coderbunker.com/">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title" style={{textTransform:"none"}}>Coderbunker.com
                                                        <div className="text-description">Contributor to Community Website</div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={coderbunkerImage}/>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-6 col-md-6 col-sm-6">
                                            <a href="https://monkey-time.netlify.com/">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">Product Store
                                                        <div className="text-description">Shop Online</div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={electronicImage}/>
                                                </div>
                                                </a>
                                            </div>
                                     </div>
                                </div>

                                    
                    </div>
            </div>
        </div>
        </ProjectsWrapper>
}


const ProjectsWrapper = styled.div`
background: ${props=>(props.bodyColor)};
.project-item {
  position: relative;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  text-align:center;
  opacity: 0;
  transition: .5s ease;
  background-color: var(--primaryColor);
  
}

.project-item:hover .overlay {
  opacity: 0.8;
  cursor: pointer;

}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-description{
    font-size:15px;
    opacity: 0.7;
}

`

