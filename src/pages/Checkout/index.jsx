import React, { useState } from "react";
import { ContainerCheckout } from "./style";
import { CommonSection } from "../../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

export const Checkout = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    postalCode: "",
  });

  const onChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
    
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();

    console.log(data, "datadata");
  };
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  return (
    <ContainerCheckout>
      <CommonSection title={"CheckOut"} />

      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form onSubmit={onSumbitHandler} className="checkout__form">
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"name"}
                    value={data.name}
                    type={"text"}
                    placeholder={"Enter your name"}
                  />
                </div>{" "}
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"email"}
                    value={data.email}
                    type={"email"}
                    placeholder={"Enter your email"}
                  />
                </div>{" "}
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"phoneNumber"}
                    value={data.phoneNumber}
                    type={"number"}
                    placeholder={"Enter your Phone Number"}
                  />
                </div>{" "}
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"country"}
                    value={data.country}
                    type={"text"}
                    placeholder={"Enter your Country"}
                  />
                </div>{" "}
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"city"}
                    value={data.city}
                    type={"text"}
                    placeholder={"Enter your City"}
                  />
                </div>
                <div className="form__group">
                  <input
                    onChange={onChange}
                    name={"postalCode"}
                    value={data.postalCode}
                    type={"number"}
                    placeholder={"Enter your Postal Code"}
                  />
                </div>
              <button type="submit" className="addTOCart__btn">
                Payment
              </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6>
                  Subtotal: <span>${cartTotalAmount}</span>{" "}
                </h6>
                <h6>
                  Shipping: <span>${shippingCost}</span>{" "}
                </h6>
                <div className="checkout__total">
                  <h5>
                    Total:{" "}
                    <span>{cartTotalAmount === 0 ? 0 : totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </ContainerCheckout>
  );
};
