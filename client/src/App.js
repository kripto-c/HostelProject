import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/home/home";
import Navbars from "./Components/navbar/navbar";
import RoomDetail from "./Components/RoomDetail/RoomDetail";
import FeedBack from "./Components/feedback/Feedback";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
            {/* <Route path="/review" element={<Reviews/>}/> */}
      <Route path="/roomdetail/:id" element={<RoomDetail />} />
      <Route path="/feedback" element={<FeedBack/>} />
      </Routes>
    </>
  );
}

export default App;
