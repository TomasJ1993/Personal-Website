import React from 'react'
import styled from 'styled-components'
export default function Title({title, center, titleDescription, nounderline}) {
    return (
        <TitleWrapper className="row" center={center}>
        <div className="col">
            <h2 className="text-title">{title}
            </h2>
            <p className="title-description text-title mx-auto py-2">{titleDescription}</p>

            {nounderline?null:<div className="title-underline title-underline-ltr"></div>}
        </div>        
        </TitleWrapper>
    )
}


const TitleWrapper = styled.div`
text-align: ${props => (props.center? "center": "left")};
.title-underline{
    height:0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${props=>(props.center? "0 auto": "0")};
}


.title-underline-ltr:hover::before {
  width:5%;
  transition: 300ms;
}
.title-description{
    font-size:1rem;
        opacity:0.6;
    transform:capitalize;
}



`
