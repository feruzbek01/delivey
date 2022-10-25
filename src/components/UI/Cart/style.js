import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.639);
  z-index: 9999;

  .cart {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: #fff;
    z-index: 9999;
  }

  .cart__close {
    width: 100%;
    height: 50px;
    padding: 10px 20px;

    span i {
      font-size: 1.1rem;
      background: #212245;
      padding: 5px;
      color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .cart__item-list {
    height: calc(100vh - 130px);
    overflow-y: scroll;
  }

  .cart__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 30px;
    width: 100%;
    height: 50px;
    background: #df2020;

    h6 {
      font-size: 1rem;
      color: #fff;

      span {
        font-size: 1.3rem;
        font-weight: 600;
      }
    }

    button {
      border: none;
      padding: 4px 20px;
      border-radius: 5px;
      background: #fff;
      color: #212245;
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    .cart {
      width: 100% !important;
    }
  }

  /*========= CartItem ============*/
  .cart__item-info img {
    width: 35px;
    height: 35px;
    object-fit: cover;
  }

  .cart__product-title {
    font-size: 0.8rem;
    font-weight: 600rem;
  }

  .cart__product-price {
    font-size: 0.8rem;
    span {
      font-size: 0.9rem;
      font-weight: 600;
      color: #df2020;
    }
  }

  .increase__decrease-btn {
    background: #fde4e4;
    padding: 2px 3px;
    border-radius: 5px;
    width: 130px;
  }

  .increase__btn,
  .decrease__btn {
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }

    :active {
      transform: scale(0.9);
    }
  }

  .delete__btn {
    font-size: 1.1.rem;
    font-weight: 600rem;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }

    :active {
      transform: scale(0.9);
    }
  }
`;
