import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../containers/Register';
import '../styles/global.css';

const App = () => {
	return (
		<Router>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route  path="/register" element={<Register />} />
		<Route path="*" element={<NotFound />} />
	  </Routes>
	  </Router>
	  
		
	);
}

export default App;
