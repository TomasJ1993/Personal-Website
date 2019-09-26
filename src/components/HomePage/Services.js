import React, { Component } from 'react'
import styled from 'styled-components'
import {FaLightbulb, FaWrench, FaCheck} from 'react-icons/fa'
import Title from '../../components/Title'

export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icons: <FaLightbulb/>,
                title: 'Develop',
                text: 'New user-facing features'

            },
            {
                id:2,
                icons: <FaWrench/>,
                title: 'BUILD',
                text: 'Reusable code and libraries for future use'

            },
            {
                id:3,
                icons: <FaCheck/>,
                title: 'ENSURE',
                text: 'The technical feasibility of UI/UX designs'

            }
        ]
    }

    render() {
        return  <ServicesWrapper className="my-auto py-5">
            <Title title="my responsibilities" center={true}></Title>
            <div className="container">
                <div className="row">
                    {this.state.services.map(item=>{
                        return (
                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                <div className="service-icon">{item.icons}</div>
                                <div className="text-title mt-3 text-capitalize">
                                    {item.title}
                                </div>
                                <div className="mt-3 service-description">
                                    {item.text}
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </ServicesWrapper>  
    }
}

const ServicesWrapper = styled.section`
background: #89CFF0;
.service-icon{
    font-size: 2.5rem;
    color: var(--primaryColor);

}
p{
    color: var(--darkGrey);
}

.service-card{
    background-color: #f5f5f5;
    height: 100%;
    width: 100%;
}
.service-description{
  font-family: 'Montserrat', 'sans-serif';
  font-size:16px;
  text-transform: capitalize;    
}

`