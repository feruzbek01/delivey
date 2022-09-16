import React from "react";
import Slider from "react-slick";

import ava1 from '../../../assets/images/ava-3.jpg'
import { ConTeSlider } from "./style";

export const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ConTeSlider>
      <Slider {...settings}>
        <div>
          <p className="review_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam excepturi fugiat, incidunt, sed harum error alias unde
            laborum, illum esse recusandae labore minus eum voluptates
            consectetur ea eligendi quidem.
          </p>
          <div className="d-flex align-items-center gap-3 ">
            <img className="w-25 rounded" src={ava1} alt="avatar" />
            <h6>Jhone Doe</h6>
          </div>
        </div>
        <div>
          <p className="review_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam excepturi fugiat, incidunt, sed harum error alias unde
            laborum, illum esse recusandae labore minus eum voluptates
            consectetur ea eligendi quidem.
          </p>
          <div className="d-flex align-items-center gap-3 ">
            <img className="w-25 rounded" src={ava1} alt="avatar" />
            <h6>Jhone Doe</h6>
          </div>
        </div>
        <div>
          <p className="review_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam excepturi fugiat, incidunt, sed harum error alias unde
            laborum, illum esse recusandae labore minus eum voluptates
            consectetur ea eligendi quidem.
          </p>
          <div className="d-flex align-items-center gap-3 ">
            <img className="w-25 rounded" src={ava1} alt="avatar" />
            <h6>Jhone Doe</h6>
          </div>
        </div>
      </Slider>
    </ConTeSlider>
  );
};
