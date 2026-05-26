import './App.css';
import Home from './Home';
import PetDetails from './PetDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<PetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
