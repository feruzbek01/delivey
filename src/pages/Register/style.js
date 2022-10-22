import styled from "styled-components";

export const ContainerRegister = styled.div`
  form {
    margin: auto;
    background: #fde4e4;
    padding: 20px;
    border-radius: 5px;
  }
  .form__group {
    margin-bottom: 30px;

    input {
      width: 100%;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #212245b6;
      min-height: 35px;
      padding-left: 10px
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

    a {
      color: unset;
    }
  }

  a {
    color: #212245;
    font-family: sans-serif;
    span {
      color: blue;
    }
  }

  .addTOCart__btn:hover {
    transform: scale(1.1);
  }
  .addTOCart__btn:active {
    transform: scale(0.95);
  }
`;