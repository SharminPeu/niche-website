import React from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/banner/watch-dial-design-1024x682.jpg";
import banner2 from "../../../images/banner/41Bg5JR-sTL._AC_.jpg";
import banner3 from "../../../images/banner/41d7SSvFQlL.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel className="container" interval={2000}>
        <Carousel.Item className=" item-1">
          <img className="imagee img-fluid d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagee img-fluid d-block w-100" src={banner2} alt="Second slide" />
       
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagee img-fluid d-block w-100" src={banner3} alt="Third slide" />

        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
