import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";

export const CartItem = ({ item, index }) => {
  const dispatch = useDispatch()
  // const cartItems = useSelector((state) => state.cart.cartItems);
  const deleteItemHandle = () => {
    dispatch(cartActions.deleteItem(item));
  };

  const increase = () => {
    dispatch(cartActions.addItem(item));
  }
  const decrease = () => {
    dispatch(cartActions.decreaseItem(item));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={item.image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{item.title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-5">
              {item.quantity}x <span>${item.totalPrice}</span>
            </p>
            <div className="increase__decrease-btn d-flex align-items-center justify-content-between ">
              <span onClick={increase} className="increase__btn">
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{item.quantity}</span>
              <span onClick={decrease} className="decrease__btn">
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span onClick={deleteItemHandle} className="delete__btn">
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};
