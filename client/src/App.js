import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/home/home";
import Navbars from "./Components/navbar/navbar";
import RoomDetail from "./Components/RoomDetail/RoomDetail";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/roomdetail/:id" element={<RoomDetail />} />
      </Routes>
    </>
  );
}

export default App;
