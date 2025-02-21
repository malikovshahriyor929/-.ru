import React from "react";
import Header from "../../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default UserLayout;
