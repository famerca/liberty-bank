import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import PvRoute from './components/PvRoute';
import Register from './components/Register'
import Movimientos from './components/Movimientos';

function App() {

  const [user, setUser] = useState(true);

  const login = () => {
    if (user)
      setUser(false)
    else
      setUser(true);
  }



  return (
    <BrowserRouter>
      <div className="App">
        {user !== false &&
          <Header />
        }
        {/* <button onClick={login}>Login</button> */}
        <div className="main-container">
          {user !== false &&
            <Navbar />
          }
          <main>
            <Routes>
              <Route index element={
                user ? <Home /> : <Login />
              } />
              <Route path='/login' element={user ? <Navigate to='/home' /> : <Login />} />
              <Route path='/register' element={user ? <Navigate to='/home' /> : <Register />} />
              <Route path='/home' element={
                <PvRoute user={user}>
                  <Home />
                </PvRoute>
              } />
              <Route path='/movimientos' element={
                <PvRoute user={user}>
                  <Movimientos />
                </PvRoute>
              } />

            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
