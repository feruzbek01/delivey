import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { ContainerHome, Button, WhyTasty, TestimonialSection } from "./style";
import { Category } from "../../components/UI/Category";

import heroImg from "../../assets/images/hero.png";
import whyImg from "../../assets/images/location.png";
import networkImg from "../../assets/images/network.png";

import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";

import products from "../../assets/fake-data/products.js";

import { Product } from "../../components/UI/ProductCard";

import { TestimonialSlider } from "../../components/UI/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

export const Home = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAlProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setAlProducts(products);
    }
    if (category === "Burger") {
      const filtered = products.filter((item) => item.category === category);
      setAlProducts(filtered);
      console.log(filtered);
    }
    if (category === "Pizza") {
      const filtered = products.filter((item) => item.category === category);
      setAlProducts(filtered);
    }
    if (category === "Bread") {
      const filtered = products.filter((item) => item.category === category);
      setAlProducts(filtered);
    }
  }, [category]);

  return (
    <ContainerHome>
      {/* <Helmet title="Home"> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center  gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className="d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg="4" className="mt-5" key={index}>
                  <div className="feature_item text-center p-4">
                    <img
                      className="w-25 mb-3 "
                      src={item.imgUrl}
                      alt={item.title}
                    />
                    <h5 className="mb-3 fw-bold ">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" xs="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12" md="12" sm="12" xs="12" className="mt-5 mb-4 m-auto">
              <div className="food__category d-flex align-items-center justify-content-center gap-4 ">
                <Button
                  className={`${category === "All" ? "clicked" : ""}`}
                  onClick={() => setCategory("All")}
                >
                  All
                </Button>
                <Button
                  className={`${category === "Burger" ? "clicked" : ""}`}
                  onClick={() => setCategory("Burger")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </Button>
                <Button
                  className={`${category === "Pizza" ? "clicked" : ""}`}
                  onClick={() => setCategory("Pizza")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </Button>
                <Button
                  className={`${category === "Bread" ? "clicked" : ""}`}
                  onClick={() => setCategory("Bread")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </Button>
              </div>
            </Col>
            {allProducts.map((item, index) => {
              return (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  key={item.id}
                  className="mt-3"
                >
                  <Product item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img className="w-100" src={whyImg} alt="" />
            </Col>
            <Col lg="6" md="6">
              <WhyTasty>
                <h2 className="tasty__treat-title">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  cupiditate cum, delectus harum sint at fugiat beatae modi
                  quasi quis corporis quod dicta blanditiis, pariatur rem
                  adipisci voluptatum! Ea, labore.
                </p>
                <ListGroup>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Similique, rerum!
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Similique, rerum!
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Similique, rerum!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </WhyTasty>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 pb-0"  >
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" xs="12" className="text-center">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => {
              return (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  xs="12"
                  key={item.id}
                  className="mt-4"
                >
                  <Product item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <TestimonialSection>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mt-5 ">
                <h5 className="testimonial_subtitle mb-4 ">Testimonial</h5>
                <h2 className="testimonial_title mb-4 ">
                  {" "}
                  What our <span>customers</span> are saying{" "}
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                  dolores hic nostrum voluptate! Natus commodi ipsum aspernatur
                  hic fuga. Quibusdam!
                </p>
                <TestimonialSlider className="testimonialSlider" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img className="w-100" src={networkImg} alt="testimonial=img" />
            </Col>
          </Row>
        </Container>
      </TestimonialSection>
    </ContainerHome>
  );
};
