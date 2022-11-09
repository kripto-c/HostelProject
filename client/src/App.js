import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Home from './Components/home/home';
import Navbars from './Components/navbar/navbar';
import ReviewHostel from "./Components/Review/ReviewHostel.js"

function App() {

  return (
      <>
        <Navbars />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviewHostel" element={<ReviewHostel/>}/>
  
    

        </Routes>

      </>
  );
}

export default App;
