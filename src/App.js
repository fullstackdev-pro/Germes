import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./pages/footer/FooterPage";
import HeaderPage from "./pages/header/HeaderPage";
import Product from "./pages/main/CatalogPage/Product";
import HomePage from "./pages/main/HomePage/HomePage";
import { dataFetched, dataFetching } from "./redux/actions";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import ProductDetails from './pages/main/CatalogPage/ProductDetails';
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
      url: "http://localhost:3001/goods",
    })
      .then(function (response) {
        console.log("OK");
        dispatch(dataFetched(response.data));
      })
      .catch(() => {
        dataFetched();
      })
      .finally(() => {
        dataFetched();
      });
  // eslint-disable-next-line
  }, []);

  return (
    <section>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <FooterPage />
    </section>
  );
}

export default App;
