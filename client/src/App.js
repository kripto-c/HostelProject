import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/home/home";
import Navbars from "./Components/navbar/navbar";
import ReviewHostel from "./Components/Review/ReviewHostel.js";
import Rooms from "./Components/rooms/Rooms";
import Contact from "./Components/Contact/Contact";
import FeedBack from "./Components/feedback/Feedback";
import RoomDetail from "./Components/RoomDetail/RoomDetail";
import About from "./Components/about/about.jsx";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reviewHostel" element={<ReviewHostel />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
