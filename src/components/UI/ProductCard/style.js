import styled from "styled-components";

export const ProductContainer = styled.div`
  border: 1px solid #fde4e4;
  height: 263px;
  text-align: center;
  padding: 20px 20px 30px 20px !important;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-img {
    /* margin-bottom: 20px; */
    transition: 0.3s ease;
  }

  .product-img:hover {
    transform: scale(1.1);
  }

  .product__content h5 {
    /* margin-bottom: 20px; */
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product__price {
    font-weight: 600;
    color: #df2020;
    font-size: 1.3rem;
  }

  .addTOCart__btn {
    border: none;
    padding: 7px 20px;
    background: #df2020;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s ease;
    font-family: "RocknRoll One", sans-serif !important;
  }

  .addTOCart__btn:hover {
    transform: scale(1.1);
  }
  .addTOCart__btn:active {
    transform: scale(0.95);
  }
`;
