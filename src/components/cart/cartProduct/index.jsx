import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { toast } from "react-toastify";

const CartProduct = (props) => {
  let {
    id,
    active,
    name,
    article,
    currentPrice,
    discountPercentage,
    imageUrl,
    category,
    counter,
  } = props;
  let { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] max-[600px]:grid-cols-3 max-[390px]:grid-cols-3 max-[322px]:grid-cols-1 max-[689px]:grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center p-2 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-4 max-[600px]:col-span-3 max-[390px]:col-span-2">
          <img  src={
              !imageUrl
                ? imageUrl
                : "https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.webp"
            } alt="https://www.stroiopttorg.ru/wp-content/uploads/woocommerce-placeholder-303x303.webp" className="w-16 h-16 rounded-lg" />
          <div>
            <p className="font-medium max-[817px]:line-clamp-2 ellipsis">
              {name}
            </p>
            <p className="text-sm text-gray-400">{article}</p>
          </div>
        </div>

        <p className="text-blue-600 font-semibold">
          {currentPrice.toLocaleString("us-US").replace(",", " ")} ₽
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ type: "decrement", decrement: id })}
            className="w-8 h-8 flex items-center justify-center border rounded-lg"
          >
            -
          </button>
          <p>{counter}</p>
          <button
            onClick={() => dispatch({ type: "increment", increment: id })}
            className="w-8 h-8 flex items-center justify-center border rounded-lg"
          >
            +
          </button>
        </div>
        <div className="flex items-center max-[390px]:gap-3 max-[390px]:col-span-2 justify-between">
          <p className="text-blue-600 font-semibold">
            {(+currentPrice * +counter)
              .toLocaleString("us-US")
              .replace(",", " ")}
            ₽
          </p>
          <button
            onClick={() => {
              dispatch({ type: "delete", deletedId: id }),
                toast.success("removed in cart");
            }}
            className="text-gray-400 hover:text-red-500"
          >
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
