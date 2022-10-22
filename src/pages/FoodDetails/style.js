import styled from "styled-components";

export const ContainerDetail = styled.div`
  .product__images {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    /* border:1px solid black; */
  }

  .img_item {
    cursor: pointer;
  }

  .single__product-content {
    padding-left: 50px;
  }

  .product__price {
    font-weight: 600;
    color: #df2020;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0;

    span {
      font-size: 2rem;
    }
  }

  .category {
    font-weight: 500;
    font-size: 1.3rem;
    color: #212245;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 10px;
    margin-bottom: 30px;

    span {
      font-size: 1.5rem;
      padding: 3px 7px;
      background: #fde4e4;
      color: #212245;
      border-radius: 5px;
    }
  }

  .addTOCart__btn {
    border: none;
    padding: 7px 15px;
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

  .tabs {
    border-bottom: 1px solid #fde4e4;

    h6:hover {
      cursor: pointer;
    }
  }

  .tab__content {
    padding: 20px 0;

    p {
      line-height: 30px;
      color: #212245;
    }
  }

  .tap__active {
    color: #df2020;
  }

  form {
    width: 60%;
    margin: auto;
    background: #fde4e4;
    padding: 20px;
    border-radius: 5px;
  }

  .form__group {
    margin-bottom: 30px;

    input,
    textarea {
      width: 100%;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #212245b6;
      min-height: 35px;
    }
  }

  .user__name {
    font-weight: 600;
    color: #212245;
  }

  .user__email {
    font-size: 0.8rem;
  }

  .feedback__text {
    color: #212245b6;
  }

  /* ======================  @media  ==================== */

  @media (max-width: 767px) {
    .product__title {
      font-size: 1.2rem;
    }

    .product__price,
    .product__price span {
      font-size: 1rem;
    }

    .category,
    .category span {
      font-size: 0.8rem !important;
    }

    .tabs {
      margin-top: 30px;
    }
    .tabs h6 {
      font-size: 0.9rem;
    }

    .tab__content p,
    .user__name,
    .feedback__text {
      font-size: 0.8rem;
    }
    .user__email {
      font-size: 0.7rem;
    }

    .form {
      width: 100% !important;
      margin-top: 50px;
    }

    .form__group input::placeholder,
    .form__group textarea::placeholder {
      font-size: 0.8rem;
    }
    .related__Product-title {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
   
    .product__images {
      display: flex;
      flex-direction: row;
      text-align: center;
    }

    .product__main-image {
      text-align: center;
    }

    .single__product-content {
      padding-left: 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .hit {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


   @media (max-width:767px) {
   
    .product__images {
      display: flex;
      flex-direction: row;
      text-align: center;

      img{
        width:75% !important;
      }
    }

    .product__main-image {
      text-align: center;
    }

    .single__product-content {
      padding-left: 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .hit {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;
