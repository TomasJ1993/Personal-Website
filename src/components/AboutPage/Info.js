import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'
import styled from 'styled-components'


export default function Info({bodyColor}) {

    return <InfoWrapper bodyColor={bodyColor}>
        <section data-aos='fade-up'>
            <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3"><img src={aboutBcg} 
                className="img-fluid img-thumbnail" 
                alt="about image"
                style={{background: 'var(--darkGrey)'}}
                /></div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about me" titleDescription="know everything you need to know">
                    </Title>
                    <p className="text-lead text-muted my-3">Laborum id ea ex commodo. Veniam ea officia do ex occaecat veniam in occaecat. Dolor ipsum fugiat excepteur sunt quis minim irure. Elit velit deserunt excepteur incididunt reprehenderit in deserunt commodo eiusmod. Consequat dolor magna dolor laborum. Id in aliquip id enim fugiat adipisicing aute laboris.Laborum id ea ex commodo. Veniam ea officia do ex occaecat veniam in occaecat. Dolor ipsum fugiat excepteur sunt quis minim irure. Elit velit deserunt excepteur incididunt reprehenderit in deserunt commodo eiusmod. Consequat dolor magna dolor laborum. Id in aliquip id enim fugiat adipisicing aute laboris</p>
                </div>
            </div>
            </div>
        </section>
    </InfoWrapper>
}

const InfoWrapper = styled.div`
background: ${props=>(props.bodyColor)};
`