import React from "react";
import { NavLink } from "react-router-dom";
import { Product_div, Product_img } from "./Medura.styled";
import Routes_file from "./Routes_file";
import data from "./Data/db.json";

const Products = () => {
  const [defaultData, setDefaultData] = React.useState();
  const [products, setProducts] = React.useState();

  const handleChange = (e) => {
    if (e.target.value === "menu_order") {
      setProducts(defaultData);
    } else if (e.target.value === "popularity") {
      let data = defaultData
        .filter((el) => Number(el.id))
        .sort((a, b) => {
          return b.id - a.id;
        });
      setProducts(data);
    } else if (e.target.value === "price") {
      let data = defaultData
        .filter((el) => Number(el.id))
        .sort((a, b) => a.price - b.price);
      setProducts(data);
    } else {
      let data = defaultData
        .filter((el) => Number(el.id))
        .sort((a, b) => b.price - a.price);
      setProducts(data);
    }
  };

  React.useEffect(() => {
    // fetch("http://localhost:8080/Sofa")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data:", data);
    //     setProducts(data);
    //     setDefaultData(data);
    //   })
    //   .catch((err) => console.error(err));
    setProducts(data.Sofa);
    setDefaultData(data.Sofa);
  }, []);

  if (!products) {
    return (
      <h1>
        Json Server Could be not running. Please Check or paste this
        "json-server --watch sprint-3/day-2/assignments/React-Dom_A/Data/db.json
        --port 8080" in the terminal from src folder
      </h1>
    );
  }

  return (
    <Product_div>
      <Routes_file />
      <div>
        <select
          onChange={handleChange}
          name="orderby"
          className="orderby"
          aria-label="Shop order"
        >
          <option value="menu_order">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="price">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
      </div>
      <div>
        {products &&
          products.map((el) => {
            return (
              <a key={el.id} href={`/Medura/Product/${el.id}`}>
                <div>
                  <div>
                    <Product_img
                      className="image_hover"
                      links={[el.image_1, el.image_2]}
                    ></Product_img>
                  </div>
                  <div>
                    <p>{el.name}</p>
                    <p>£{el.price}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </Product_div>
  );
};

export default Products;
