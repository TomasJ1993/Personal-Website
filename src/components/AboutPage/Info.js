import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/office.jpg";
import styled from "styled-components";

export default function Info({ bodyColor }) {
  return (
    <InfoWrapper bodyColor={bodyColor}>
      <section data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                className="img-fluid img-thumbnail"
                alt="about image"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title
                title="about me"
                titleDescription="know everything you need to know"
              ></Title>
              <p className="text-lead text-muted my-3">
                I am front-end developer currently working for Udentity, a
                start-up company specializing in building an education
                technology platform that connects students in Asia with overseas
                universities. As a programmer, I have a goal to become an expert
                in both front-end and backend development. Therefore, my
                ambition is to work for a company that pursues the same
                direction - full-stack web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  background: ${(props) => props.bodyColor};
`;
