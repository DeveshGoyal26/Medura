import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Individual_Product, Product_img } from "./Medora.styled";
import Products_color from "./Products_color";
import Routes_file from "./Routes_file";
import { v4 as uuid } from "uuid";
import Products_pic from "./Products_pic";
import { Auth_provider_context } from "./Auth_login/Auth_provider";
import data from "./Data/db.json";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "./Redux/action";

const Individual_Product_page = () => {
  const { token } = useContext(Auth_provider_context);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const [image_switch, setImage_Switch] = useState("image_1");
  const [quantity, setQuantity] = useState(1);
  let cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [isThere, setIsThere] = useState(false);

  React.useEffect(() => {
    data.Sofa.filter((el) => {
      if (el.id === +id) {
        return setProducts({ ...el });
      }
    });
  }, [id]);

  const Add_to_cart = () => {
    if (!token) {
      navigate("/Medora/Login");
      return;
    }

    if (cart.filter((el) => el.id === product.id).length > 0) {
      setIsThere(true);
      setTimeout(() => {
        setIsThere(false);
      }, 2000);
    } else {
      let payload = {
        id: product.id,
        image: product[image_switch],
        name: product.name,
        price: quantity * product.price,
        quantity: quantity,
      };

      dispatch({ type: ADD_TO_CART, payload });
    }
  };

  let pics = [product.image_1, product.image_2, product.image_3];

  return product ? (
    <Individual_Product>
      <Routes_file />
      <div>
        <div className="product_image_div">
          <div>
            <img src={product[image_switch]} alt="Product Image" />
          </div>
          <div>
            {pics &&
              pics.map((el, index) => (
                <Products_pic
                  key={uuid()}
                  p={el}
                  switch_img={setImage_Switch}
                  index={index}
                />
              ))}
          </div>
        </div>
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <span>£</span> {product.price}.00
          </p>
          <div>
            {product.color &&
              product.color.map((el, index) => {
                return (
                  <Products_color
                    key={uuid()}
                    color={el}
                    switch_img={setImage_Switch}
                    Image={image_switch}
                    index={index}
                  />
                );
              })}
          </div>
          <div>
            <div>
              {/* //Quantity counter */}
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              ></button>
              {quantity}
              <button
                className="plus"
                onClick={() => setQuantity(quantity + 1)}
              ></button>
            </div>
            <button onClick={() => Add_to_cart()}>ADD TO CART</button>
            {isThere && (
              <p style={{ color: "red" }}>Product is already added to cart</p>
            )}
          </div>
          <div>
            <h5
              style={{
                padding: "10px 0",
                width: "fit-content",
                fontWeight: "200",
                fontSize: "20px",
                margin: 0,
                marginTop: "30px",
              }}
            >
              Share on
            </h5>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <div className="tumbler_div"></div>
            <div className="facebook_div"></div>
            <div className="linked_in"></div>
            <div className="printrest"></div>
            <div className="email"></div>
            <div className="printer_div"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="features">
          <div>
            <div></div>
            <div>
              <h4>Dispatch</h4>
              <p>We will dispatch your product in 2 working days.</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <h4>Support</h4>
              <p>Our support team are here for you along the way.</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <h4>Only love</h4>
              <p>Don't love your purchase, send it back for a full refund.</p>
            </div>
          </div>
        </div>

        <div className="Showing_div">
          <div>
            <img
              src="https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/product-image-01.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/08/shutterstock_1399103273.jpg"
              alt=""
            />
            <img
              src="https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/08/shutterstock_1399103273.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="form_table">
          <div>
            <div>
              <h2>Additional information</h2>
              <table className="woocommerce-product-attributes shop_attributes">
                <tbody>
                  <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                    <th className="woocommerce-product-attributes-item__label">
                      Color
                    </th>
                    <td className="woocommerce-product-attributes-item__value">
                      <p>Pink, Red, Yellow</p>
                    </td>
                  </tr>
                  <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_material">
                    <th className="woocommerce-product-attributes-item__label">
                      Material
                    </th>
                    <td className="woocommerce-product-attributes-item__value">
                      <p>Fabric, Wood</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h2>Reviews</h2>
              <p>There are no reviews yet</p>
              <p>
                Be the first to review “{product.name}” Your email address will
                not be published. Required fields are marked *
              </p>
              <div className="rating-css">
                <div className="star-icon">
                  <input type="radio" name="rating1" id="rating1" />
                  <label htmlFor="rating1" className="fa fa-star"></label>
                  <input type="radio" name="rating1" id="rating2" />
                  <label htmlFor="rating2" className="fa fa-star"></label>
                  <input type="radio" name="rating1" id="rating3" />
                  <label htmlFor="rating3" className="fa fa-star"></label>
                  <input type="radio" name="rating1" id="rating4" />
                  <label htmlFor="rating4" className="fa fa-star"></label>
                  <input type="radio" name="rating1" id="rating5" />
                  <label htmlFor="rating5" className="fa fa-star"></label>
                </div>
              </div>
              <div>
                <textarea
                  id="comment"
                  name="comment"
                  cols="45"
                  rows="8"
                  required=""
                  spellCheck="false"
                  placeholder="Your review *"
                ></textarea>
                <input
                  id="author"
                  name="author"
                  type="text"
                  size="30"
                  required=""
                  placeholder="Name *"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  size="30"
                  required=""
                  placeholder="Email *"
                />
                <p>
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                  />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </p>
                <div>
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Smilar_products">
          <h3>Similar items you may like</h3>
          <div>
            <a
              href={`/Medora/Product/1`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <Product_img
                  className="image_hover"
                  links={[
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/chair-1-yellow.jpg",
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/chair-1-red.jpg",
                  ]}
                ></Product_img>
              </div>
              <div>
                <p>Chair 1</p>
                <p>£134.00</p>
              </div>
            </a>

            <a
              href={`/Medora/Product/12`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <Product_img
                  className="image_hover"
                  links={[
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/sofa-3-grey.jpg",
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/sofa-3-blue.jpg",
                  ]}
                ></Product_img>
              </div>
              <div>
                <p>Sofa 3</p>
                <p>£788.00</p>
              </div>
            </a>

            <a
              href={`/Medora/Product/6`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <Product_img
                  className="image_hover"
                  links={[
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/lamp-1-yellow.jpg",
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/lamp-red.jpg",
                  ]}
                ></Product_img>
              </div>
              <div>
                <p>Lamp 1</p>
                <p>£76.00</p>
              </div>
            </a>

            <a
              href={`/Medora/Product/4`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <Product_img
                  className="image_hover"
                  links={[
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/stool-1.jpg",
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/stool-1-blue.jpg",
                  ]}
                ></Product_img>
              </div>
              <div>
                <p>Stool 1</p>
                <p>£145.00</p>
              </div>
            </a>

            <a
              href={`/Medora/Product/10`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <Product_img
                  className="image_hover"
                  links={[
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/sofa-1-featured.jpg",
                    "https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/10/sofa-1-blue.jpg",
                  ]}
                ></Product_img>
              </div>
              <div>
                <p>Sofa 1</p>
                <p>£650.00</p>
              </div>
            </a>
          </div>
        </div>

        <div className="Offer_div">
          <div>
            <h2>Join our newsetter to get 10% off</h2>
            <p>
              We will email you a voucher to use at checkout to get 10% off. By
              subscribing you agree to our Terms & COnditions and Privacy &
              Cookies Policy
            </p>
          </div>
          <div>
            <input type="text" placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </Individual_Product>
  ) : null;
};

export default Individual_Product_page;
