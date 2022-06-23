import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Infopenawar from "./pages/Infopenawar";
import Infoproduk from "./pages/Infoproduk";
import Infoprofil from './pages/Infoprofil';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageProduct from "./pages/PageProduct"
import PageSaleList from "./pages/PageSaleList"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Infoprofil/>}/>
          <Route path='/produk' element={<Infoproduk/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/offer' element={<Infopenawar/>}/>
          <Route path="/halaman-produk" element={<PageProduct />} />
          <Route path="/daftar-jual" element={<PageSaleList />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
