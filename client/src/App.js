import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Items from './components/Items'
import Logout from './components/Logout'
import { AuthProvider } from './AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
          <Header />
          <div className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/items" element={<Items />} />
              <Route path="/logout" element={<Logout />} />
          </Routes>
          </div>
          <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
