import React from 'react'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'
import {Link} from 'react-router-dom'
import Info from '../components/AboutPage/Info'

export default function AboutPage() {
    return (
        <div>
            <Hero img={aboutBcg}/>
            <Info></Info>
        </div>
    )
}
