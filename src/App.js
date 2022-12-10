import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./pages/footer/FooterPage";
import HeaderPage from "./pages/header/HeaderPage";
import Product from "./pages/main/ProductPage/Product";
import HomePage from "./pages/main/HomePage/HomePage";
import { dataFetched, dataFetching, homeFetched } from "./redux/actions";
import Category from "./pages/main/CategoryPage/Category";
import Services from "./pages/main/ServicePage/Services";
import DeliveryPage from "./pages/main/DeliveryPage/DeliveryPage";
import PayCash from "./pages/main/PayPage/PayCash";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import ProductDetails from './pages/main/CatalogPage/ProductDetails';
// import Catalog from './pages/main/CatalogPage/Catalog';
// import Category from './pages/main/CategoryPage/Category';
// import AdditionService from './pages/main/HomePage/Info/AdditionService';
// import PayPage from './pages/main/PayPage/PayPage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDS-KMQLYb-oZRwHKb3S8O3MTOvoDsjU1U",
//   authDomain: "germesbackend.firebaseapp.com",
//   projectId: "germesbackend",
//   storageBucket: "germesbackend.appspot.com",
//   messagingSenderId: "1567924952",
//   appId: "1:1567924952:web:604a9c1d49cfd044cb6dad",
//   measurementId: "G-3HRGY97PWW"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  const dispatch = useDispatch();
  dataFetching();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://germesbackend.onrender.com/home/goods",
    })
      .then(function (response) {
        dispatch(dataFetched(response.data));
      })
      .catch((e) => {
        dataFetched();
      })
      .finally(() => {
        dataFetched();
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(`https://germesbackend.onrender.com/home`)
      .then(function (response) {
        dispatch(homeFetched(response.data));
      })
      .catch((e) => console.log(""));

    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payCash" element={<PayCash />} />
        <Route path="/services" element={<Services />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/catalog/:catalogName" element={<Category />} />
      </Routes>
      <FooterPage />
    </section>
  );
}

export default App;
