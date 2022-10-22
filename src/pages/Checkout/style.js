import styled from "styled-components";

export const ContainerCheckout = styled.div`
  .form__group {
    margin-bottom: 30px;

    input {
      width: 100%;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #212245b6;
      min-height: 35px;
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

  .checkout__bill {
    background: #fde4e4;
    padding: 30px;

    h6 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
  }

  .checkout__total {
    padding-top: 30px;
    border-top: 1px solid #ddd;
  }

  @media only screen and (max-width: 768px) {
    .checkout__bill h6 {
      font-size: 0.9rem;
    }
    .checkout__bill {
      margin-top: 40px;
    }
  }
`;
