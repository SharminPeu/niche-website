import React from "react";
import ExtraPart from "../ExtraPart/ExtraPart";
import Header from "../Header/Header";
import ProductShow from "../ProductShow/ProductShow";
import Products from "../ProductShow/ProductShow";
import Review from "../Review/Review";
import Footers from "../Shared/Footers/Footers";
import MenuBar from "../Shared/MenuBar/MenuBar";


const Home = () => {
  return (
    <div>
        <MenuBar></MenuBar>
      <Header></Header>
      <ProductShow></ProductShow>
      <Products></Products>
      <Review></Review>
      <ExtraPart></ExtraPart>
      <Footers></Footers>
    </div>
  );
};

export default Home;
