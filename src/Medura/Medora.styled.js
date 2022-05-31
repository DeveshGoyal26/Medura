import styled from "styled-components";

export const Medora_main = styled.div`
  height: 100%;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div {
    background-color: #fff8f5;
    min-height: 800px;
    // height: 110vh;
    padding: 30px 70px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      animation: fade ease 2s;
      opacity: 1;

      @keyframes fade {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      > div:nth-child(1) {
        font-weight: 800;
        > h3 {
          cursor: pointer;
        }
      }

      > div {
        display: flex;
        align-items: center;
      }

      > div:nth-child(2) {
        gap: 50px;

        div > img {
          border-radius: 50px;
          cursor: pointer;
        }

        > h4 {
          cursor: pointer;
        }
      }
    }
  }
`;

export const SideTab = styled.div`
  position: absolute;
  height: 100px;
  left: 48px;
  width: 8px;
  background-color: #d9905b;
`;

export const Title = styled.div`
  height: 50px;
  animation: fade 2s;
  opacity: 1;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  > div:nth-child(1) {
    font-size: 20px;
    margin-top: 100px;

    > div:nth-child(1) {
      font-size: 50px;
      font-weight: 300;
      margin-bottom: 0;
      animation: up ease 2s;
      opacity: 1;

      @keyframes up {
        0% {
          opacity: 0;
          margin-bottom: 20px;
        }
        100% {
          opacity: 1;
          margin-bottom: 0;
        }
      }
    }

    > div:nth-child(2) {
      font-size: 50px;
      font-weight: 800;
    }

    > div:nth-child(3) {
      max-width: 350px;
      font-size: 18px;
      margin-top: 25px;
      color: #1d1d1d;
    }

    > div:nth-child(4) > button {
      border: none;
      outline: none;
      height: 50px;
      margin-top: 50px;
      color: white;
      font-size: 16px;
      letter-spacing: 1px;
      padding: 0 30px;
      border-radius: 30px;
      background-color: #d16a1d;
      min-width: 180px;
      transition: background-color ease 800ms;
    }

    > div:nth-child(4) > button:hover {
      background-color: white;
      color: #d16a1d;
      border: 1px solid #d16a1d;
    }

    > div:nth-child(5) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      margin-top: 150px;

      > p {
        width: fit-content;
        transform: rotateZ(270deg);
        font-size: 16px;
        font-weight: 400;
      }

      > div {
        position: absolute;
        left: 185px;
        width: 40px;
        height: 70px;
        border-radius: 50px;
        border: 3px black solid;

        > span {
          width: 25px;
          height: 25px;
          position: absolute;
          top: 0px;
          left: 15%;
          border-radius: 50px;
          background-color: black;
          animation: scroll infinite 4s;
          opacity: 1;

          @keyframes scroll {
            0%,
            100% {
              top: 3px;
              // opacity: 0;
            }
            80% {
              // opacity: 1;
              top: 35px;
            }
          }
        }
      }
    }
  }
`;

export const Image_div = styled.div`
  display: flex;
  //   height : 100px;
  width: fit-content;
  position: absolute;
  right: 8%;
  gap: 50px;

  > div:nth-child(1) {
    background-color: #cccccc;
    height: fit-content;
    position: relative;
    top: 300px;

    animation: fade 2s;
    opacity: 1;

    @keyframes fade {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    ::before {
      position: absolute;
      bottom: 400px;
      left: 225px;
      content: "";
      height: 65px;
      width: 8px;
      background-color: #cccccc;
    }

    > div {
      position: absolute;
      bottom: 323px;
      width: 1px;
      height: 543px;
      left: 233px;
      background-color: #cccccc;
    }

    > img {
      height: 320px;
    }
  }

  > div:nth-child(2) {
    background-color: #f0c7b1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    position: relative;
    top: 130px;
    height: 494px;
    max-width: 230px;

    animation: fade 2s;
    opacity: 1;

    @keyframes fade {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    ::before {
      position: absolute;
      bottom: 630px;
      left: 215px;
      content: "";
      height: 70px;
      width: 10px;
      background-color: #f0c7b1;
    }

    > img {
      position: absolute;
      top: 30px;
      left: 13px;
      height: 210px;
    }

    > div {
      ::before {
        content: "";
        position: absolute;
        bottom: 383px;
        width: 1px;
        height: 543px;
        left: 223px;
        background-color: #f0c7b1;
      }

      > div:nth-child(1) {
        font-size: 28px;
        font-weight: 800;
        width: fit-content;
        margin: 180px 0 0 30px;
      }

      > div:nth-child(2) {
        font-size: 15px;
        font-weight: 800;
        width: fit-content;
        margin: 10px 0 0 30px;
      }

      > div:nth-child(3) {
        font-size: 10px;
        width: fit-content;
        color: #727272;
        max-width: 250px;
        margin: 8px 0 0 30px;
      }
    }
  }

  > div:nth-child(3) {
    background-color: #dfe7f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    position: relative;
    top: -40px;
    height: 494px;
    max-width: 230px;

    animation: fade 2s;
    opacity: 1;

    @keyframes fade {
      0% {
        opacity: 0;
        top: 0px;
      }
      50% {
        opacity: 0.5;
        top: 40px;
      }
      100% {
        opacity: 1;
      }
    }

    ::before {
      position: absolute;
      top: 550px;
      left: 226px;
      content: "";
      height: 70px;
      width: 10px;
      z-index: 10;
      background-color: #bec9db;
    }

    > img {
      position: absolute;
      top: 5px;
      left: 15px;
      height: 280px;
    }

    > div {
      ::before {
        content: "";
        position: absolute;
        top: 1px;
        width: 1px;
        height: 660px;
        left: 231px;
        background-color: #a6b8d0;
      }

      > div:nth-child(1) {
        font-size: 28px;
        font-weight: 800;
        width: fit-content;
        margin: 180px 0 0 30px;
      }

      > div:nth-child(2) {
        font-size: 15px;
        font-weight: 800;
        width: fit-content;
        margin: 10px 0 0 30px;
      }

      > div:nth-child(3) {
        font-size: 10px;
        width: fit-content;
        color: #727272;
        max-width: 250px;
        margin: 8px 0 0 30px;
      }
    }
  }
`;

export const Middle_div = styled.div`
  margin-top: 50px;
  background-image: url("${"https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/09/divi-furniture-slide-04.jpg"}") !important;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid !important;
  align-items: center;

  div {
    // position: relative;
    display: grid !important;
    animation: showing 2s ease;

    @keyframes showing {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    div > p:nth-child(1) {
      font-size: 40px;
    }

    div > p:nth-child(2) {
      font-size: 20px;
      font-weight: 400;
    }

    div > button {
      font-size: 25px;
      border-radius: 50px;
      margin: 20px 0 0 0;
      padding: 15px;
      border: none;
      outline: none;
      max-width: 230px;
      transition: color, background-color ease 500ms;

      :hover {
        color: #cdad40;
        background-color: gray;
      }
    }
  }
`;

export const Swiper_div = styled.div`
  height: 100vh;
  width: 150%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  > p {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 270px;
  }

  > h2 {
    font-size: 7rem;
    font-weight: 100;
  }

  > div {
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
    font-size: 1.4rem;
    height: 45px;
    border-style: solid;
    padding: 0 25px;
    transition: all 0.3s ease;
    text-align: center;
    display: inline-block;
    outline: none;
    position: relative;
    z-index: 2;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    border-width: 0;
    line-height: 49px;

    ::before {
      background-color: #ffffff;
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 100%;
      z-index: -1;

      transition: all 0.5s ease;
    }

    ::after {
      content: "";
      font-family: funio;
      vertical-align: middle;
      margin-left: 10px;
    }

    :hover {
      color: black;
      background-color: rgba(0, 0, 0, 0);
      border: #000000 1px solid;
      cursor: pointer;

      ::after {
        left: 0;
      }
    }
  }
`;

export const Footer_div = styled.div`
  margin-top: 50px;
  padding: 0px !important;
  /* background-image : url("https://alothemes.com/landing/funio/assets/img/bg-footer.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px !important;
  height: fit-content !important;
  // box-shadow : none !important;
  // background-color : #f5ece5 !important;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: none;

  > div {
    display: inline-block !important;
    width: 100%;

    > div {
      /* width: 100%; */
      margin: auto;
      text-align: left;
    }

    div > img {
      width: 100%;
    }

    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      padding: 50px 100px;

      > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 50px;

        > h1 {
          margin: 0px;
        }

        > p {
          font-size: 13px;
          color: #9d9d9d;
        }
      }

      > div:nth-child(2) {
        display: flex;
        gap: 80px;

        p {
          font-weight: 100;
        }

        > div > p:nth-child(1) {
          font-weight: 700;
        }

        > div > div:nth-child(2) {
          line-height: 30px;
          color: #9d9d9d;
          font-size: 13px;
          font-weight: 100 !important;
        }
      }
    }
  }
`;

export const Icon_div = styled.div`
  display: flex;

  > div {
    display: flex;
    margin-left: 0;
    gap: 20px;
    margin-top: 30px;
    transition: all 0.3s ease;
    animation: up ease 2s;
    div > svg {
      font-size: 20px;
    }

    > div:nth-child(1):hover {
      > svg {
        color: blue;
      }
    }

    > div:nth-child(2):hover {
      > svg {
        color: #1c98e5;
      }
    }

    > div:nth-child(3):hover {
      > svg {
        color: #cf488a;
      }
    }

    > div:nth-child(4):hover {
      > svg {
        color: red;
      }
    }
  }
`;

export const Aboutus_div = styled.div`
  height: 100%;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div:nth-child(1) {
    background-color: white;
    padding: 0 30px;
    align-items: center;
  }

  > div:nth-child(2),
  > div:nth-child(3) {
    display: flex;
    background-color: white;
    padding: 0 50px;
    align-items: center;
    justify-content: center;
    animation: showing 2s ease;
  }

  > div:nth-child(2),
  div:nth-child(3) > div > h3 {
    font-size: 25px;
  }

  > div:nth-child(2),
  div:nth-child(3)s > div > P {
    font-size: 18px;
  }
`;

export const Login_div = styled.div`
  height: 120vh;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div:nth-child(1) {
    height: 120px;
    background-color: white;
    padding: 0 50px;
    align-items: center;
    background-image: url(${"https://m2.alothemes.com/funio/media/magiccart/magicslider/s/l/slider-home.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: left;
    height: 500px;
    background-image: url(${"https://m2.alothemes.com/funio/media/magiccart/magicslider/s/l/slider-home.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    animation: fadeInUp 0.8s ease-in-out;

    > input {
      height: 100px;
    }

    > div {
      padding: 50px;
      display: flex;
      flex-direction: column;
      width: fit-content;
    }
  }
`;

export const FAQ_div_or_Contect_us = styled.div`
  height: 100%;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div:nth-child(1) {
    background-color: white;
    padding: 0 30px;
  }

  > div:nth-child(2) {
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
    animation: showing 2s ease;

    > p {
      font-size: 5.5em;
      color: white;
      text-align: center;
    }
  }

  > div:nth-child(3) {
    background-color: white;
    padding: 50px 0px;

    > h2 {
      font-size: 34px;
      font-weight: 400;
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: auto;
      margin-top: 50px;

      > input {
        height: 65px;
        line-height: 65px;
        margin-bottom: 35px;
        width: 100%;
        padding: 10px 20px;
        border: 1px solid #dcdcdc;
        font-weight: 400;
        color: #a3a3a3;
        background: #fff;
        animation: fadeInUp 0.8s ease-in-out;
      }

      > div {
        width: 100%;
        > textarea {
          width: 100%;
          max-height: 370px;
          padding: 10px 20px;
          border: 1px solid #dcdcdc;
          font-weight: 400;
          margin-bottom: 28px;
          background: #fff;
          animation: fadeInUp 0.8s ease-in-out;
        }
      }
      > button {
        width: 100%;
        height: 64px;
        line-height: 60px;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 3.2px;
        padding: 0 65px;
        color: #000;
        background: transparent;
        border: 2px solid #000;
        transition: all 0.3s ease;
        cursor: pointer;
        font-weight: 600;
        animation: fadeInUp 0.8s ease-in-out;

        :hover {
          background: #ea6b17;
          border-color: #ea6b17;
          color: #fff;
        }
      }
    }
  }
`;

export const Product_div = styled.div`
  height: 100%;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div:nth-child(1) {
    padding: 0 30px;
    background-color: white;
  }

  > div:nth-child(2) {
    display: flex;
    background-color: white;
    justify-content: right;
    align-items: center;
    padding: 10px 0px;
    padding-right: 100px;

    .orderby {
      background-color: #ececec;
      border-radius: 3px;
      border: 0;
      color: #666 !important;
      font-size: 12px;
      padding: 4px 8px;
      font-weight: 500;
      font-family: Open Sans, Arial, sans-serif;
      outline: none;
    }
  }

  > div:nth-child(3) {
    display: grid;
    background-color: white;
    grid-template-columns: repeat(4, minmax(0, 250px));
    grid-template-rows: 400px;
    // gap : 20px;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    > a {
      text-decoration: none;
      color: black;
      animation: fadeTop 1s cubic-bezier(0.77, 0, 0.175, 1) 1;
    }

    > a > div {
      height: 400px;
      text-align: center;

      > div:nth-child(1) {
        height: 280px;
      }
    }

    > a > div > div > img {
      height: auto;
      max-width: 100%;
      aspect-ratio: auto 300 / 300;
      width: 200px;
    }

    > a > div > div > p:nth-child(1) {
      font-family: "Karla", Helvetica, Arial, Lucida, sans-serif !important;
      font-size: 18px;
      text-align: center;
    }

    > a > div > div > p:nth-child(2) {
      font-family: "Karla", Helvetica, Arial, Lucida, sans-serif !important;
      color: #666666;
      font-size: 15px;
      text-align: center;
    }
  }
`;

export const Product_img = styled.div`
  background-image: url(${(props) => props.links[0]});
  height: 300px;
  background-repeat: no-repeat;
  background-size: 209px 200px;
  background-position: center;

  ::before {
    content: "";
    display: inline-block;
    height: 200px;
    width: 209px;
    position: relative;
    top: 50px;
    bottom: 0;
    left: 0px;
    right: 0;
    background-image: url(${(props) => props.links[1]});
    background-repeat: no-repeat;
    background-size: 209px 200px;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  :hover::before {
    animation: trans ease 0.5s;
    opacity: 1;
  }

  @keyframes trans {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Individual_Product = styled.div`
  height: 100%;
  margin-top: -22px;
  background-color: #f5ece5;
  padding: 5.5em 3.5em;
  font-family: "Roboto";
  font-style: normal;

  > div:nth-child(1) {
    padding: 0 30px;
    background-color: white;
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: white;
    padding: 50px 0px;
    animation: showing 1s ease;

    > div:nth-of-type(1) {
      > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;

        > img {
          width: 600px;
          height: 600px;
          margin: auto;
        }
      }

      > div:nth-of-type(2) {
        display: flex;
        justify-content: center;
        margin: 30px 0px;
        gap: 20px;

        > img {
          width: 100px;
          height: 100px;
        }
      }
    }

    > div:nth-of-type(2) {
      padding: 0 30px;
    }

    > div:nth-of-type(2) > h1 {
      font-family: "Roboto";
      font-weight: 400 !important;
      font-size: 42px !important;
    }

    > div:nth-of-type(2) > p:nth-of-type(1) {
      line-height: 2em;
      font-family: "Karma", Georgia, "Times New Roman", serif !important;
      font-size: 19px;
    }

    > div > p:nth-of-type(2) {
      // font-family: 'Karma',Georgia,"Times New Roman",serif!important;
      font-weight: 400 !important;
      font-size: 32px !important;
      margin: 30px 0;

      > span {
        font-size: 26px !important;
      }
    }

    > div > div:nth-child(4) {
      display: flex;
      height: 60px;
      margin-top: 20px;
      gap: 10px;
      padding-left: 23px;
    }

    > div > div:nth-child(5) {
      width: fit-content;
      margin-top: 50px;
      display: flex;
      gap: 20px;

      > div {
        display: flex;
        height: 55px;
        width: 108px;
        border: 1px solid black;
        justify-content: space-evenly;
        align-items: center;
      }

      > div > button:nth-child(1) {
        width: 40px;
        border: none;
        background-color: white;
        outline: none;

        ::after {
          height: 100px;
          width: 100px;
          color: #000000;
          content: "-";
          font-size: 15px;
          position: relative;
          font-family: "ETmodules";
          left: 10%;
          transform: translate(-50%, -50%);
        }
      }

      > div > button:nth-child(2) {
        width: 40px;
        border: none;
        background-color: white;
        outline: none;

        ::after {
          height: 100px;
          width: 100px;
          color: #000000;
          content: "+";
          font-size: 15px;
          position: relative;
          font-family: "ETmodules";
          // right: 5%;
          transform: translate(-50%, -50%);
        }
      }

      > button {
        color: #ffffff;
        border-color: #000000;
        background-color: #000000;
        padding: 0.3em 1em;
        position: relative;
        border: 2px solid;
        font-size: 20px;
        opacity: 0.5;
        transition: color 300ms ease 0ms, background-color 300ms ease 0ms;

        :hover {
          color: #000000;
          background-color: #ffffff;
        }
      }
    }
  }
  > div:nth-child(3) {
    background-color: #ffffff;
  }

  .features {
    display: flex;
    padding: 4% 0;
    justify-content: center;
    background-color: #f0f0f0;
    gap: 5.5%;

    > div {
      width: 320px;
      display: flex;

      > div:nth-of-type(2) {
        padding-left: 15px;

        > h4 {
          margin: 0;
          font-family: "Karma", Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-size: 24px;
          padding-bottom: 30px;
        }

        > p {
          font-size: 14px;
        }
      }
    }
  }

  .Showing_div {
    width: 100%;
    padding: 2% 2%;

    > div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      margin: 28px 0;

      > img {
        width: 100%;
      }
    }

    > div:nth-of-type(2) {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      margin: auto;
      // max-width: 2560px;
      margin: 28px 0;

      > img {
        width: 100%;
      }
    }
  }

  .form_table {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    padding: 0 2%;
    gap: 3.5%;

    > div:nth-of-type(1) {
      // padding: 4% 0;
      width: 100%;

      > div {
        width: 90%;
        margin: auto;

        > h2 {
          font-size: 30px;
          padding-bottom: 10px;
          line-height: 1.3em;
          font-weight: 400;
        }

        > table {
          font-family: Open Sans, Arial, sans-serif;
          border: 0;
          border-top: 1px dotted rgba(0, 0, 0, 0.1);
          margin-bottom: 1.618em;
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
          font-size: 19px;
          line-height: 2em;

          > tbody > tr > th {
            width: 150px;
            font-weight: 700;
            padding: 8px;
            border-top: 0;
            border-bottom: 1px dotted rgba(0, 0, 0, 0.1);
            margin: 0;
            line-height: 1.5;
          }

          > tbody > tr > td {
            font-style: italic;
            padding: 0;
            border-top: 0;
            border-bottom: 1px dotted rgba(0, 0, 0, 0.1);
            margin: 0;
            line-height: 1.5;
          }

          > tbody > tr:nth-child(even) {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      justify-content: left;
      // padding: 4% 0;

      > div {
        // max-width: 70%;
        max-width: 481px;

        > h2 {
          font-size: 30px;
          padding-bottom: 10px;
          line-height: 1.3em;
          font-weight: 400;
          margin-bottom: 30px !important;
        }

        > p {
          font-size: 19px;
          padding-top: 17px;
          line-height: 2em;
        }
      }

      > div > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        gap: 1em;

        > textarea {
          padding: 12px;
          color: #999;
          line-height: 1em;
          background-color: #eee;
          font-size: 18px;
          border-width: 0;
          height: 75px;
          margin: 0 0 20px;
        }

        > input {
          padding: 12px;
          color: #999;
          line-height: 1em;
          background-color: #eee;
          font-size: 18px;
          border-width: 0;
          width: 47%;
          margin: 0 0 20px;
        }

        > p {
          font-size: 19px;
          font-weight: 400;

          > input {
            height: 13px;
            width: 13px;
          }

          > label {
            line-height: 2em;
            margin-left: 3px;
          }
        }

        > div {
          text-align: right;

          > button {
            color: rgba(255, 255, 255, 0.91);
            border-color: #346b8a;
            border-radius: 0px;
            font-weight: normal;
            font-style: normal;
            text-transform: uppercase;
            text-decoration: none;
            background: #000000;
            font-size: 20px;
            border: 2px solid;
            padding: 8px 12px;
            transition: all 0.2s;

            :hover {
              color: #000000;
              background-color: #ffffff;
            }
          }
        }
      }
    }
  }

  .Smilar_products {
    font-family: "Karma", Georgia, "Times New Roman", serif;
    padding: 2% 5%;

    > h3 {
      font-weight: 500;
      font-size: 38px;
      line-height: 1.3em;
    }

    > div {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
      }
    }
  }

  .Offer_div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    padding: 10% 2%;
    gap: 50px;

    > div:nth-of-type(1) {
      padding-left: 10%;

      > h2 {
        font-family: "Spectral", Georgia, "Times New Roman", serif !important;
        font-size: 37px !important;
        font-weight: 500;
        color: #000000 !important;
        line-height: 1.3em;
        overflow-wrap: break-word;
      }

      > p {
        font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
        font-size: 16px;
        color: #000000 !important;
        line-height: 1.9em;
        word-wrap: break-word;
        font-weight: 500;
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      padding-right: 10%;
      justify-content: center;

      > input {
        font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        color: #000000;
        padding: 14px 4%;
        font-size: 16px;
        background-color: #fff;
        font-weight: 400;
        border: 2px solid #333;
        margin-bottom: 1em;
      }

      > button {
        height: 50px;
        font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
        padding: 0.3em 1em !important;
        color: #ffffff;
        font-size: 20px;
        background-color: #000000;
        transition: color 300ms ease 0ms, background-color 300ms ease 0ms;
        border: 2px solid #000000;

        :hover {
          color: #000000 !important;
          background-image: initial;
          background-color: #ffffff;
        }
      }
    }
  }
`;

export const Products_colors = styled.div`
  width: 60px;
  border-radius: 50px;
  /* border: 2px solid ${(props) => props.bor_color}; */
  background-color: ${(props) => props.col};
  box-shadow: #ffffff 0px 0px 0px 2px inset;
`;

export const Cart_products = styled.div`
  display: flex;
  gap: 30px;
  text-decoration: none;
  color: black;

  > a {
    display: flex;
    gap: 30px;
    text-decoration: none;
    color: black;
    width: 100%;
  }

  > a > div:nth-of-type(1) {
    height: 100%;

    > img {
      width: 100px;
      height: 100px;
    }
  }

  > a > div:nth-of-type(2) {
    width: 100%;

    > h3,
    p {
      cursor: pointer;
    }
  }

  > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;

    > button {
      font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
      padding: 0.3em 1em !important;
      color: #ffffff;
      font-size: 20px;
      background-color: #000000;
      transition: color 300ms ease 0ms, background-color 300ms ease 0ms;
      border: 2px solid #000000;

      :hover {
        color: #000000 !important;
        background-image: initial;
        background-color: #ffffff;
      }
    }
  }
`;
