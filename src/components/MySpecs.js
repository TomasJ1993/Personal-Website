import React from 'react'
import Title from '../components/Title'
import styled from 'styled-components'
import { FaFileExcel } from 'react-icons/fa'
import angularImage from '../images/angular.png'
import jsImage from '../images/javascript.png'
import reactImage from '../images/react.png'

export default function MySpecs({bodyColor}) {
    return <SpecWrapper bodyColor={bodyColor}>

<div className="container my-3">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">

<Title data-aos='fade-up' center={true} titleDescription="Frontend development" nounderline={true} title="my specializations"></Title>
            <div className="row" style={{display:'flex', justifyContent:"space-between"}}>
            <div data-aos='fade-right' className="text-center mx-auto col-12 col-md-12 col-sm-12 my-2
my-3 spec-icon"><img className="img-fluid" src={reactImage}  style={{height:"200px", width:"200px"}}/>
            <div className="text-title py-2">ReactJS</div>
            </div>
            <div data-aos='fade-left' className="text-center mx-auto col-12 col-md-12 col-sm-12 my-3
my-3 spec-icon" ><img className="img-fluid" src={jsImage} style={{height:"200px", width:"200px"}}/>
            <div className="text-title py-2">JS, HTML, CSS</div>
            </div>
            <div data-aos='fade-right' className="text-center mx-auto col-12 col-md-12 col-sm-12 my-3
 my-3 spec-icon" ><img className="img-fluid" src={angularImage} style={{height:"200px", width:"200px"}}/>
            <div className="text-title py-2">AngularJS</div>
            </div>
            </div>
            </div>
            </div> 
            </div>
    </SpecWrapper>
      
    
}

const SpecWrapper = styled.div`
background: ${props=>(props.bodyColor)};

`

