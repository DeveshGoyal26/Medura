import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Cart_products } from "./Medura.styled";
import { DELETE_FROM_CART } from "./Redux/action";

const Cart_product = ({ product }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: DELETE_FROM_CART, payload: product.id });
  };

  return (
    <Cart_products>
      <Link to={`/Medura/Product/${product.id}`}>
        <div>
          <img src={product.image} alt="Products Image" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>Quantity: {product.quantity}</p>
          <p>£{product.price}</p>
        </div>
      </Link>
      <div>
        <button onClick={() => handleDelete()}>Remove</button>
      </div>
    </Cart_products>
  );
};

export default Cart_product;
