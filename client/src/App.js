import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Home from './Components/home/home';
import Navbars from './Components/navbar/navbar';
import ReviewHostel from "./Components/Review/ReviewHostel.js"
import Rooms from "./Components/rooms/Rooms"

function App() {

  return (
      <>
        <Navbars />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviewHostel" element={<ReviewHostel/>}/>
          <Route exact path="/rooms" element={<Rooms/>}/>
  
    

        </Routes>

      </>
  );
}

export default App;
