import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Infoproduk from "./pages/Infoproduk";
import Infoprofil from './pages/Infoprofil';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Infoprofil/>}/>
          <Route path='/produk' element={<Infoproduk/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
