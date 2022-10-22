import React from "react";
import { ProductContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";
export const Product = ({ item }) => {
  const { id, title, price, image01 } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddItem = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        title: title,
        image01: image01,
        price: price,
      })
    );
  };

  return (
    <ProductContainer>
      <div className="product-img" onClick={() => navigate(`/foods/${id}`)}>
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={"/food"}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={handleAddItem}>
            Add to Cart
          </button>
        </div>
      </div>
    </ProductContainer>
  );
};
