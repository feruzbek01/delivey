import React, { useRef } from "react";
import {ContainerLogin} from './style'
import { CommonSection } from '../../components/UI/CommonSection'
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


export const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ContainerLogin title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="8" sm="10" xs="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? <span>Create an account</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </ContainerLogin>
  );
};

export default Login;
