import React from "react";
import AboutUs from "../../AboutUs/AboutUs";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Attractive from "../Attractive/Attractive";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <AboutUs></AboutUs>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Attractive></Attractive>
      <Footer></Footer>
    </div>
  );
};

export default Home;
