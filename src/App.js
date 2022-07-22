import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Infopenawar from "./pages/Infopenawar";
import Infoproduk from "./pages/Infoproduk";
import Infoprofil from "./pages/Infoprofil";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageProduct from "./pages/PageProduct";
import PageSaleList from "./pages/PageSaleList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrivateRoute from "./privateroute/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Infoprofil />} />
            <Route path="/produk" element={<Infoproduk />} />
            <Route path="/offer" element={<Infopenawar />} />
            <Route path="/halaman-produk" element={<PageProduct />} />
            <Route path="/daftar-jual" element={<PageSaleList />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
