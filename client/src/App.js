import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/home";
import Navbars from "./Components/navbar/navbar";
import ReviewHostel from "./Components/Review/ReviewHostel.js";
import Rooms from "./Components/rooms/Rooms";
import Contact from "./Components/Contact/index";
import FeedBack from "./Components/feedback/Feedback";
import RoomDetail from "./Components/RoomDetail/RoomDetail";
import About from "./Components/about/about.jsx";
import ClientNew from "./Components/ClientNew";

function App() {
  return (
    <>
    <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviewHostel" element={<ReviewHostel />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />    
        <Route exact path="/about" element={<About/>}/>
        <Route path="/feedback" element={<FeedBack/>} />
        <Route path="/roomdetail/:id" element={<RoomDetail/>} />
        <Route path="/clientEdit" element={<ClientNew />} />
      </Routes>
    </>
  );
}

export default App;
