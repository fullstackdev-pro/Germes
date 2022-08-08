import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./pages/footer/FooterPage";
import HeaderPage from "./pages/header/HeaderPage";
import HomePage from "./pages/main/HomePage";

function App() {
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
