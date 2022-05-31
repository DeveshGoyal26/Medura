import React from "react";
import { FAQ_div_or_Contect_us } from "./Medora.styled";
import Routes_file from "./Routes_file";

const Contect_us = () => {
  return (
    <>
      <FAQ_div_or_Contect_us
        image={
          "https://adinathfurniture.in/wp-content/uploads/2020/08/bg-breadcrumb-1.jpg"
        }
      >
        <Routes_file />
        <div>
          <p>Contect Us</p>
        </div>
        <div>
          <h2>Have an question ? Contact us !</h2>

          <div>
            <input
              type="text"
              name="Name"
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
              placeholder="Your name"
            />
            <input
              type="email"
              name="Email"
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              aria-required="true"
              aria-invalid="false"
              placeholder="Your email"
            ></input>
            <div>
              <textarea
                name="textarea-982"
                cols="40"
                rows="10"
                className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Your question here..."
                spellCheck="false"
              ></textarea>
            </div>
            <button>Send</button>
          </div>
        </div>
      </FAQ_div_or_Contect_us>
    </>
  );
};

export default Contect_us;
