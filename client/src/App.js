<<<<<<< HEAD
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
    
        </Routes>
      </div>
    </BrowserRouter>
=======
import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer'
import "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
>>>>>>> 83eefcc (footer y header)
  );
}

export default App;
