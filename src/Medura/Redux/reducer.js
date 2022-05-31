import { ADD_TO_CART, DELETE_FROM_CART } from "./action";

const init = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export function reducer(state = init, { type, payload }) {
  switch (type) {
    case ADD_TO_CART: {
      localStorage.setItem("cart", JSON.stringify([...state.cart, payload]));
      return { cart: [...state.cart, payload] };
    }
    case DELETE_FROM_CART: {
      let data = state.cart.filter((c) => c.id !== payload);
      localStorage.setItem("cart", JSON.stringify([...data]));
      return { cart: [...data] };
    }
    default: {
      return state;
    }
  }
}
