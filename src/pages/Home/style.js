import styled from "styled-components";

export const ContainerHome = styled.div`
  .hero__content {
    /* padding-top: 70px; */
  }

  .hero__title {
    font-size: 2.5rem;
    line-height: 55px;
  }

  .hero__title span {
    color: #df2020;
  }

  .hero__content p {
    font-size: 1rem;
    line-height: 30px;
    color: #777;
  }

  .hero__btns button {
    border: none;
    outline: none;
    padding: 7px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
  }
  .order__btn {
    background: #df2020;
    color: #fff;
    transition: 0.3s;
  }

  .order__btn:hover {
    background: #212245;
  }
  .all__foods-btn {
    background: transparent;
    border: 1px solid #df2020 !important;
  }

  .all__foods-btn a {
    color: #df2020;
  }

  .hero__service p {
    color: #212245;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .shipping__icon i {
    padding: 5px;
    background: #df2020;
    color: #fff;
    border-radius: 50%;
    font-weight: 500 !important;
  }

  .feature__subtitle,
  .feature__title span {
    color: #df2020;
  }

  .feature_item {
    background: #fde4e4;
    border-radius: 20px;
    transition: 0.3s;
    box-shadow: 5px 5px 10px #888;
  }

  .feature_item:hover {
    transform: translateY(-15px);
  }

  .food__category {
    background: #df2020;
    padding: 7px 0px;
    border-radius: 8px;

    /* button:hover {
      color: #212245;
      transform: scale(1.1);
    } */

    > :nth-child(1) {
      background-color: #212245;
      color: #fff;
      border-radius: 10px;
    }
    > :nth-child(1):active {
      background-color: #212245;
      color: #fff;
    }
    section {
      padding-top: 0px;
    }
  }

  .food__category button {
    border: none;
    outline: none;
    padding: 7px 20px;
    color: #fff;
    background: transparent;

    font-family: "RocknRoll One", sans-serif;

    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .clicked {
    background: #fff !important;
    color: #212245 !important;
    font-family: "RocknRoll One", sans-serif;
    border-radius: 10px;
  }

  /* ========= Media max-480px =========== */

  @media (max-width: 480px) {
    .hero__content {
      padding-top: 20px;
      text-align: center;
    }

    section {
      padding-top: 0px;
    }

    .hero__title {
      font-size: 25px;
    }

    .hero__btns,
    .hero__service {
      display: flex;
      justify-content: center;
    }

    .category__item {
      flex-direction: column;
      text-align: center;
    }

    .food__category {
      display: flex;
      gap: 0px !important;
      flex-wrap: wrap;
    }

    .testimonialSlider {
      display: none;
    }
  }

  /* =========================== Media max-768px ====================== */

  @media (max-width: 768px) {
    .food__category {
      display: flex;
      gap: 0px !important;
      justify-content: space-around !important;
    }
  }

  @media (max-width: 992px) {
  }
`;

export const Button = styled.button`
  :hover {
    transform: ${({ className }) =>
      className === "clicked" ? "" : "scale(1.1)"} !important ;
  }
`;

export const WhyTasty = styled.div`
  .tasty__treat-title span {
    color: #df2020;
  }

  .tasty__treat-desc {
    color: #777;
  }

  .choose_us-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .choose_us-title i {
    font-weight: 500 !important;
    color: #df2020;
  }

  .choose_us-desc {
    color: #777;
  }
`;

export const TestimonialSection = styled.div`
  padding: 60px 0;

  @media (max-width: 480px) {
    padding: 0px 0;
  }

  .testimonial_subtitle {
    color: #df2020;
  }

  .testimonial_title span {
    color: #df2020;
  }

  .testimonial_desc {
    line-height: 30px;
    color: #777;
  }
`;
