import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import product1 from './Images/product1.jpg';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function ImageSlider() {
//   const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);


  return (
    <div className="ImageSlider">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
        <Item>
            <img src={product1}/>
        </Item>
        <Item>
            <img src={product1}/>
        </Item>
        <Item>
            <img src={product1}/>
        </Item>
        <Item>
            <img src={product1}/>
        </Item>
        <Item>
            <img src={product1}/>
        </Item>
        <Item>
            <img src={product1}/>
        </Item>

        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
