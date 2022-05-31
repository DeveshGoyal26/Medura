import React from "react";

const Products_pic = ({ p, switch_img, index }) => {
  if (p) {
    return (
      <img
        src={p}
        alt="Product Image"
        onClick={() => switch_img(`image_${index + 1}`)}
      />
    );
  }
};

export default Products_pic;
