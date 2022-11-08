import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

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
