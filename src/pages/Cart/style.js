import styled from "styled-components";

export const ContainerCart = styled.div`
  thead,
  tbody {
    text-align: center;
  }

  th {
    font-size: 21px;
  }

  td {
    font-size: 19px;
    font-weight: 500px;
    font-weight: 500;
  }

  .cart__img-box {
    width: 80px;
    img {
      width: 100%;
    }
  }

  i {
    font-size: 25px;
    color: red;
    cursor: pointer;
  }

  .addTOCart__btn {
    border: none;
    padding: 7px 15px;
    background: #df2020;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s ease;
    font-family: "RocknRoll One", sans-serif !important;

    a {
      color: unset;
    }
  }

  .addTOCart__btn:hover {
    transform: scale(1.1);
  }
  .addTOCart__btn:active {
    transform: scale(0.95);
  }

  .cart__subTotal {
    p {
      font-size: 17px;
      font-family: sans-serif;
    }
    span {
      color: #df2020;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    th,
    td {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .cart__page-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      button {
        width: 100%;
      }
    }
  }



  @media (max-width: 380px) {
    .PriceWithQuantity {
      display: flex;
      flex-direction: column;

      span {
        border: none;
        border-top: 1px solid black;
      }
    }

    .quantity {
      border:none;
      display: none;
    }
  }

  @media (min-width: 381px) {
    .PriceWithQuantity {
      span {
        display: none;
      }
    }
  }
`;
