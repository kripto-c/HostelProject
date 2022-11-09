import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Home from './Components/home/home';
import Navbars from './Components/navbar/navbar';
import Reviews from "./Components/Review/Reviews.js"

function App() {

  return (
      <>
        <Navbars />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Reviews/>}/>
  
    

        </Routes>

      </>
  );
}

export default App;
