import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Infopenawar from "./pages/Infopenawar";
import Infoproduk from "./pages/Infoproduk";
import Infoprofil from './pages/Infoprofil';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Infoprofil/>}/>
          <Route path='/produk' element={<Infoproduk/>}/>
          <Route path='/offer' element={<Infopenawar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
