import React from "react";
import pattern from "../../Assets/pattern.svg";
import Slider from "react-slick";
import "./../../slick.css";
import {
  MainSliderSection,
  OrangeRectangle,
  BlueRectangle,
  Pattern,
  OpacityBlueOrange,
  AbsloatContainer,
  SliderContainers,
  Slide,
  Item,
} from "./SliderSectionStyle";

export const SliderSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainSliderSection>
      <AbsloatContainer>
        <OrangeRectangle></OrangeRectangle>
        <BlueRectangle>
          <Pattern src={pattern} />
          <OpacityBlueOrange></OpacityBlueOrange>
        </BlueRectangle>
      </AbsloatContainer>
      <SliderContainers>
        <Slider {...settings}>
          <div className="slick-slide">
            <h1>1</h1>
          </div>
          <div className="slick-slide">
            <h1>1</h1>
          </div>
          <div className="slick-slide">
            <h1>1</h1>
          </div>
          <div className="slick-slide">
            <h1>1</h1>
          </div>
          <div className="slick-slide">
            <h1>1</h1>
          </div>
        </Slider>
      </SliderContainers>
    </MainSliderSection>
  );
};

export default SliderSection;
