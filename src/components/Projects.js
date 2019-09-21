import React from 'react'
import Title from './Title'
import styled from 'styled-components'
import testImage from '../images/mainBcg.jpeg'

export default function Projects({bodyColor}) {
    return <ProjectsWrapper bodyColor={bodyColor}>
        <div className="py-5">
            <div data-aos="fade-up" className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                                    <Title titleDescription="accomplishments" center={true} title="Projects"/>
                                    <div className="projects-container">
                                        <div className="row">
                                            <div className="col-8 col-md-8 col-sm-8">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">Overhand Fitness
                                                        <div className="text-description">asdfasdfsadfasdf</div>
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={testImage}
                                                     />
                                                </div>
                                            </div>
                                            <div className="col-4 col-md-4 col-sm-4">
                                            <div className="row">
                                            <div className="col-12 col-md-12 col-sm-12">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">
                                                            Hello
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={testImage}
                                                     />
                                                </div>
                                                </div>
                                                <div className="col-12 col-md-12 col-sm-12 py-3">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">
                                                            Hello
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={testImage}
                                                     />
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-6 col-md-6 col-sm-6">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">Hello
                                                        </div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={testImage}/>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-sm-6">
                                                <div className="project-item">
                                                    <div className="overlay">
                                                        <div className="text text-title">Hello</div>
                                                    </div>
                                                    <img className="img-thumbnail"
                                                     style={{background: 'var(--darkGrey)'}}
                                                     src={testImage}/>
                                                </div>
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

