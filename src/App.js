import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Infoproduk from "./pages/Infoproduk";
import Infoprofil from './pages/Infoprofil';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Infoprofil/>}/>
          <Route path='/produk' element={<Infoproduk/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
