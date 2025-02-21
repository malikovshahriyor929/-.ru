import { createContext, useReducer } from "react";
import { toast } from "react-toastify";

export let CartContext = createContext();

export let CartProvider = ({ children }) => {
  let initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (state.cart.find((value) => value.id === action.product.id)) {
          let newdata = state.cart.map((value) =>
            value.id === action.product.id
              ? { ...value, counter: value.counter + 1 }
              : value
          );
          localStorage.setItem("cart", JSON.stringify(newdata));
          return { ...state, cart: newdata };
        }
        let newdata = {
          ...state,
          cart: [...state.cart, { ...action.product, counter: 1 }],
        };

        localStorage.setItem("cart", JSON.stringify(newdata.cart));
        return newdata;

      case "delete":
        let deleted = state?.cart?.filter(
          (value) => value.id !== action.deletedId
        );

        localStorage.setItem("cart", JSON.stringify(deleted));
        return { ...state, cart: deleted };
      case "decrement":
        let minus = state?.cart?.map((value) =>
          value.id == action.decrement
            ? { ...value, counter: value.counter > 1 ? value.counter - 1 : 1 }
            : value
        );
        localStorage.setItem("cart", JSON.stringify(minus));

        return { ...state, cart: minus };
      case "increment":
        let plus = state?.cart?.map((value) =>
          value.id == action.increment
            ? { ...value, counter: value.counter + 1 }
            : value
        );
        localStorage.setItem("cart", JSON.stringify(plus));

        return { ...state, cart: plus };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
