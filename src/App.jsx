import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import PvRoute from './components/PvRoute';
import Register from './components/Register'
import Movimientos from './components/Movimientos';
import AddMovForm from './components/AddMovForm'


function App() {

  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({ token: 1 });

  useEffect(() => {
    const sess = JSON.parse(localStorage.getItem('session'));
    if (sess)
      setUser(sess);

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {user &&
          <Header />
        }
        {/* <button onClick={login}>Login</button> */}
        <div className="main-container">
          {user &&
            <Navbar />
          }
          <main>
            <Routes>
              <Route index element={
                user ? <Home user={user} /> : <Login setUser={setUser} />
              } />
              <Route path='/login' element={user ? <Navigate to='/home' /> : <Login setUser={setUser} />} />
              <Route path='/register' element={user ? <Navigate to='/home' /> : <Register />} />
              <Route path='/home' element={
                <PvRoute user={user}>
                  <Home user={user} />
                </PvRoute>
              } />
              <Route path='/movimientos' element={
                <PvRoute user={user}>
                  <Movimientos user={user} />
                </PvRoute>
              } />

              <Route path='/aggmovimientos' element={
                <PvRoute user={user}>
                  <AddMovForm user={user} />
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
