    import React from 'react'
    import styled from 'styled-components'

    export default function SkillsBar({percentage, skill}) {

        return (
            <div  className="skillContainer py-2">
                <div data-aos="zoom-in" className="skill-titles" style={{display: "flex", justifyContent: "center"}}>
                <div className="text-title py-2">{skill}</div>
                </div>
                <div data-aos="fade-right" className="skill-percentage-container text-title" style={{background: "#E8E9EB"}}>
                <div className="skill-percentage">{percentage}%</div>
                <SkillsBarWrapper percentage={percentage}>
        </SkillsBarWrapper>
            </div>
        </div>
        )
    }
    const SkillsBarWrapper = styled.div `
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    top:0;
    position:absolute;
    z-index:2;
    height:100%;
    width: ${props=>(props.percentage?`${props.percentage}%`: "50vw")};
    background-color: var(--primaryColor);

    .skill-percentage-container{
    position:relative;
    justify-content:center;
    z-index:1;
    }

    .skill-percentage{
        position:absolute;
        top:0;
        z-index:3;
    }


    `
