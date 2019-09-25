import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/HomePage/Services'
import Info from '../components/AboutPage/Info'
import {ProductConsumer} from '../context'
import Contact from '../components/ContactPage/Contact'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Specs from '../components/MySpecs'
import { Link as ScrollerLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function HomePage() {

   
        return(
          <div>
           <Element name="homeComponent"><Hero title="Tomas Jankauskas" introPage={true} description={[123,12312,12312312,124124]}  changingText={true}>
              
           </Hero></Element> 
           {/* <Services/> */}
           <Element name="infoComponent"><Info/></Element>
           <Element name="skillsComponent"><Skills bodyColor={"#f5f5f5"}/></Element>
            <Element name="specsComponent"><Specs /></Element>
            <Element name="projectsComponent"><Projects bodyColor={"#f5f5f5"}></Projects></Element>
            <Element name="servicesComponent"><Services/></Element>
           <Element name="contactComponent"><Contact bodyColor={"#f5f5f5"}/></Element> 
       </div>        
            )
        
    
}
