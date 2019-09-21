import React from 'react'
import Title from '../components/Title'
import styled from 'styled-components'
import SkillsBar from '../components//SkillsBar'


export default function Skills({bodyColor}) {

    return  <SkillsWrapper bodyColor={bodyColor} className="py-5">
                    <Title title="my SKILLS" center={true} titleDescription={"Skills are never taught, they are acquired"}/>

            <div className="row">

            <ul className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3">
            <li className="skill">  <SkillsBar percentage={90} skill={'Javascript, HTML, CSS'}/></li>
            <li className="skill">  <SkillsBar percentage={85} skill={'ReactJS, AngularJS'}/></li>
            <li className="skill"><SkillsBar percentage={75} skill={'Android/Java'}/></li>
                </ul>
                  <ul className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3">

            <li className="skill"><SkillsBar percentage={65} skill={'NodeJS '}/></li>
            <li className="skill"><SkillsBar percentage={60} skill={'Golang'}/></li>
            <li className="skill"><SkillsBar percentage={60} skill={'MongoDB, MySQL'}/></li>
                </ul>
                </div>
         </SkillsWrapper>
         
}

const SkillsWrapper = styled.div `
background: ${props=>(props.bodyColor)};

ul{
list-style-type:none;
}


.skill{
    margin:0 10px;
    padding:0 10px;
}
.skills-container{
    display:flex;
    width:100%
    flex-direction: row;
}
.skills-col{
    width:100%;
}

`


//  <ul className="skills-col">
// <li className="skill"></li>
// </ul> 