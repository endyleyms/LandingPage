import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home/Home';
import Information from "./Pages/Information/Information";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
