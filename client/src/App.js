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
  );
}

export default App;
