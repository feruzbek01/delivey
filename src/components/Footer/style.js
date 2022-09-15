import styled from "styled-components";

export const ContainerFooter = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  background: #fde4e4;

  .footer__logo img {
    width: calc(100% - 80%);
    margin-bottom: 5px;
  }

  .footer__logo h5 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .footer__logo p {
    font-size: 0.9rem;
    color: #333;
    line-height: 28px;
  }

  .footer__title {
    font-size: 1.1rem;
    color: #212245;
    font-weight: 600;
  }
  .delivery__time-item {
    background: transparent;
  }

  .delivery__time-item span {
    font-weight: 600;
    font-size: 1rem;
    color: #212245;
  }

  .delivery__time-item p {
    color: #212245;
  }

  .newsletter {
    padding: 7px 15px;
    border: 1px solid #212245;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* box-sizing: border-box; */
  }
  .newsletter input {
    background: transparent;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  .newsletter input:focus {
    outline: none;
  }

  .newsletter span {
    box-sizing: border-box;
    background: #df2020;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
  }

  .social__links span i {
    padding: 5px;
    background: #df2020;
    color: #fff;
    border-radius: 50%;
  }

  .copyright__text {
    font-size: 0.8rem;
    color: #df2020;
  }

  .social__links span a{
    text-decoration: none;
  }
`;
