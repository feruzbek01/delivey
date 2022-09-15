import React from "react";
import { ProductContainer } from "./style";
import productImage from "../../../assets/images/product_2.1.jpg";
import { Link } from "react-router-dom";
export const Product = ({item}) => {
  const { title, price, image01, image02, image03, category } = item;
  const array = [
    {
      image: image01,
    },
    {
      image: image02,
    },
    {
      image: image03,
    },
  ];
  return (
    <ProductContainer>
      <div className="product-img">
        <img src={array[2].image || image01 } alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={'/food'} >{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn">Add to Cart</button>
        </div>
      </div>
    </ProductContainer>
  );
};
