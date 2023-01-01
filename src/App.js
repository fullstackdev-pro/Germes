import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./pages/footer/FooterPage";
import HeaderPage from "./pages/header/HeaderPage";
import Product from "./pages/main/ProductPage/Product";
import HomePage from "./pages/main/HomePage/HomePage";
import {
  categoryFetched,
  dataFetched,
  dataFetching,
  homeFetched,
} from "./redux/actions";
import Category from "./pages/main/CategoryPage/Category";
import Services from "./pages/main/ServicePage/Services";
import DeliveryPage from "./pages/main/DeliveryPage/DeliveryPage";
import PayCash from "./pages/main/PayPage/PayCash";
import BacketPage from "./pages/main/BacketPage/BacketPage";
import LogIn from "./pages/main/registration/LogIn";
import SignUp from "./pages/main/registration/SignUp";
import AdminUsersPage from "./pages/AdminPage/Users/AdminUsersPage";
import AdminCategoryPage from "./pages/AdminPage/Category/AdminCategoryPage";
import AdminGoodsPage from "./pages/AdminPage/Goods/AdminGoodsPage";
import AdminBacketPage from "./pages/AdminPage/Backet/AdminBacketPage";

function App() {
  const dispatch = useDispatch();

  dispatch(dataFetching());
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_KEY}/goods`,
    })
      .then(function (response) {
        dispatch(dataFetched(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/home`)
      .then(function (response) {
        dispatch(homeFetched(response.data));
      })
      .catch((e) => console.log(e));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_KEY}/home/categories`,
    }).then(function (response) {
      dispatch(categoryFetched(response.data.object));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/login"} element={<LogIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path="/payCash" element={<PayCash />} />
        <Route path="/backet" element={<BacketPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/catalog/:catalogName" element={<Category />} />
        <Route path="/adminPage/goods" element={<AdminGoodsPage />} />
        <Route path="/adminPage/category" element={<AdminCategoryPage />} />
        <Route path="/adminPage/users" element={<AdminUsersPage />} />
        <Route path="/adminPage/backet" element={<AdminBacketPage />} />
      </Routes>
      <FooterPage />
    </section>
  );
}

export default App;
