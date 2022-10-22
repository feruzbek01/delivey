import React from "react";
import { Container } from "reactstrap";
import {CommonContainer} from './style'
import './styles.css'

export const CommonSection = ({ title }) => {
  return (
    <CommonContainer>
      <section className="common_section">
        <Container>
          <h2 style={{color:'white'}} >{title}</h2>
        </Container>
      </section>
    </CommonContainer>
  );
};
