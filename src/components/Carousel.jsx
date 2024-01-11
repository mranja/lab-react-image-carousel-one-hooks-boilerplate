import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  let [currIndex, setCurrIndex] = useState(0);

  function moveBackward() {
    if (currIndex <= 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  }

  function moveForward() {
    if (currIndex == images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  }

  return (
    <>
      <div id="main">
        <button className="btn" onClick={moveBackward}>
          <ArrowBackIosIcon />
        </button>
        <div id="image">
          <img src={images[currIndex].img} alt="" />
          <h1>{images[currIndex].title}</h1>
          <p>{images[currIndex].subtitle}</p>
        </div>

        <button className="btn" onClick={moveForward}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default Carousel;
