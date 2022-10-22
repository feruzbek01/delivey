import React, { useEffect } from "react";
import { ContainerCart } from "./style";
import { CommonSection } from "../../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { cartActions } from "../../store/shoppingCart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const onDelete = (item) => {
    dispatch(cartActions.deleteItem(item));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addedCarts = useSelector((store) => store.cart.cartItems);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  return (
    <ContainerCart>
      <CommonSection title="Your Carts" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {addedCarts.length === 0 ? (
                <h2 className="text-center ">No Carts added</h2>
              ) : (
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {addedCarts.map((item) => {
                      return (
                        <Tr onDelete={onDelete} item={item} key={item.id} />
                      );
                    })}
                  </tbody>
                </table>
              )}

              <div className="cart__subTotal mt-5 " >
                <h5>
                  Subtotal: <span>${totalAmount}</span>{" "}
                </h5>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn  ">
                  <button className="addTOCart__btn me-4 ">
                    <Link to={"/foods"}> Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to={"/checkout"}>Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </ContainerCart>
  );
};

const Tr = ({ item, onDelete }) => {
  return (
    <tr>
      <td className="cart__img-box">
        <img src={item.image01} alt="" />
      </td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}x</td>
      <td>
        <i onClick={() => onDelete(item)} class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
