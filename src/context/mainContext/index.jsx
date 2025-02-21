import React from "react";
import { CartProvider } from "../cartContext";
import { LikeProvider } from "../likeContext";
import AdminProwider from "../adminContext";

const MainContext = ({ children }) => {
  return (
    <AdminProwider>
      <CartProvider>
        <LikeProvider>{children}</LikeProvider>
      </CartProvider>
    </AdminProwider>
  );
};

export default MainContext;
