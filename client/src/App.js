import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Home from './Components/home/home';
import Navbars from './Components/navbar/navbar';


function App() {

  return (
      <>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </>
  );
}

export default App;
