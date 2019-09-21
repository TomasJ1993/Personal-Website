import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class Footer extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <FooterWrapper>
              <div data-aos='fade-down'className="container py-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="text-capitalize">
                      copyright &copy; tomas profile {new Date().getFullYear()}.
                      all rights reserved
                    </p>
                  </div>
                  <div className=" col-md-6 d-flex justify-content-around">
                    {value.socialIcons.map(item => (
                      <a onClick={()=>{console.log(`item path is ${item.path} and the id is ${item.id}`);
                      }}href={item.url} key={item.id}>
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FooterWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;