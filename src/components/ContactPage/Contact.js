import React from 'react'
import Title from '../Title'
import styled from 'styled-components'

export default function Contact({bodyColor}) {
    return <ContactWrapper bodyColor={bodyColor}>
        <section className="py-5" data-aos="fade-up">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact me" titleDescription="communication is everything"/>
                    <form className="mt-5" action="https://formspree.io/tomastomasj@gmail.com" method="POST">
                {/* firstname */}
                <div className="form-group">
                    <input type="text" 
                    name="firstName" 
                    placeholder="Type in your first name..." 
                    className="form-control"/>
                </div>
                    {/* email */}
                    <div className="form-group">
                    <input type="email" 
                    name="email" 
                    placeholder="Email..." 
                    className="form-control"/>
                </div>

                   {/* subject */}
                   <div className="form-group">
                    <input type="text" 
                    name="subject" 
                    placeholder="Subject..." 
                    className="form-control"/>
                </div>

                        {/* message*/}
                        <div className="form">
                  <textarea name="message" 
                  placeholder="Your message..." 
                  rows="10" 
                  className="form-control">

                  </textarea>
                </div>
                        {/*submit */}
                    <div className="form-group mt-3">
                        <input type="submit" value="Send" className="main-link" style={{width: "100%"}}/>
                    </div>
                    </form>
                </div>
            </div>


        </section>
        </ContactWrapper>
}

const ContactWrapper = styled.div`
background: ${props=>(props.bodyColor)};
`
