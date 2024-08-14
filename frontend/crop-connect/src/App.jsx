import { useState } from 'react'
import Home from './components/home/Home'
import NavigationBar from './components/home/NavigationBar'
import SignUpForm from './components/SignUpForm'
import Merchant from './components/merchant/Merchant'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/home/Footer'
import AboutUs from './components/AboutUs'
import SignInForm from './components/SigninForm'

const ConditionalNavigationBar = () => {
  const location = useLocation();
  // Hide NavigationBar on the home page
  return location.pathname !== '/' ? <NavigationBar /> : null;
};

  function App() {

    return (
      // <>
      <Router>
      <ConditionalNavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/merchant" element={<Merchant />} />
        </Routes>
        <Footer />
      </Router>
      // </>
    )
  
}

export default App
