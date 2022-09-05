import React from "react";
import { Products_colors } from "./Medura.styled";

const Products_color = ({ color, switch_img, Image, index }) => {
  return (
    <>
      <Products_colors
        col={color}
        style={{
          border: `2px solid ${
            Image === `image_${index + 1}` ? "black" : "#aaaaaa"
          }`,
        }}
        onClick={(e) => {
          switch_img(`image_${index + 1}`);
        }}
      ></Products_colors>
    </>
  );
};

export default Products_color;
