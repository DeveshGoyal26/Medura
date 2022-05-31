import React from "react";
import { Footer_div, Icon_div } from "./Medora.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Footer = () => {
  return (
    <Footer_div>
      <div>
        <div>
          <img
            src="https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/09/divi-furniture-slide-01.jpg"
            alt=""
          />
        </div>

        <div>
          <div>
            <h1>Medora</h1>
            <p>
              © 2022 Medora Furniture Store
              <br />
              Terms of Service | Privacy Policy
            </p>
          </div>

          <div>
            <div>
              <p>Products</p>

              <div>
                <p>Product</p>
                <p>Pricing</p>
                <p>Login</p>
                <p>Request access</p>
                <p>Partnership</p>
              </div>
            </div>

            <div>
              <p>About us</p>

              <div>
                <p>About Medusa</p>
                <p>Contact us</p>
                <p>Features</p>
                <p>Careers</p>
              </div>
            </div>

            <div>
              <p>Resources</p>
              <div>
                <p>Help center</p>
                <p>Sever status</p>
                <p>Blog</p>
              </div>
            </div>

            <div>
              <p>Get in touch</p>
              <div>
                <p>Questions or feedback ?</p>
                <p>We'd love to hear from you</p>
              </div>
              <div>
                <Icon_div>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={brands("facebook")} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={brands("twitter")} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={brands("instagram")} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={brands("Youtube")} />
                    </div>
                  </div>
                </Icon_div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer_div>
  );
};

export default Footer;
