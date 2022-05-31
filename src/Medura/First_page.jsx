import React from "react";
import { useNavigate } from "react-router-dom";
import { Image_div, SideTab, Title } from "./Medora.styled";

const First_page = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideTab></SideTab>

      <Title>
        <div>
          <div>Mid Century</div>
          <div>Modern Furniture</div>
          <div>Modern high quality and comfortable available on our stores</div>

          <div>
            <button
              onClick={() => {
                navigate("/Medora/Products");
              }}
            >
              Discover Now
            </button>
          </div>

          <div>
            <p>Scroll Down</p>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </Title>

      <Image_div>
        <div>
          <div></div>
          <img src={require("./Public/YellowPillowChair.jpg")} alt="" />
        </div>
        <div>
          <img src={require("./Public/OrengeChair.png")} alt="" />
          <div>
            <div>01.</div>
            <div>Stylish Metal Chair</div>
            <div>
              Chair with minimal style and morden Wooden and plastic material
            </div>
          </div>
        </div>
        <div>
          <img src={require("./Public/Celinglamp.png")} alt="" />
          <div>
            <div>02.</div>
            <div>Roof Lamp Lightings</div>
            <div>
              Roof light and lamps we have wide range in all colors and lamps
              also available
            </div>
          </div>
        </div>
      </Image_div>
    </>
  );
};

export default First_page;
