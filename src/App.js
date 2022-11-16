import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./pages/footer/FooterPage";
import HeaderPage from "./pages/header/HeaderPage";
import HomePage from "./pages/main/HomePage/HomePage";
import { dataFetched, dataFetching } from "./redux/actions";

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
      </Routes>
      <FooterPage />
    </section>
  );
}

export default App;
