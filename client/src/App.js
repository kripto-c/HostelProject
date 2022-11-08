import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <BrowserRouter>
      <div>
        <Routes>
    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
