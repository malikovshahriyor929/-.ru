import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Like from "../pages/like";
import UserLayout from "../shared/layout/userLayout";
import AdminLayout from "../shared/layout/admin";
import ErrorPage from "../pages/error";
import ProductDetails from "../pages/ProductDetails";
import Catalog from "../pages/katalog";
import Login from "../components/login";
import LoginPage from "../pages/login";
import ProtectedRoute from "../components/protectProvider";
import AdminCrud from "../components/adminCrud";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Корзина_товаров",
        element: <Cart />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/productdetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminCrud />,
      },
    ],
  },
]);
