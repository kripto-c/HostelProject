import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Home from './Components/home/home';


function App() {

  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

      </div>
  );
}

export default App;
