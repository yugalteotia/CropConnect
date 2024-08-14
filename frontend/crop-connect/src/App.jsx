import { useState } from 'react'
import Home from './components/home/Home'
import NavigationBar from './components/home/NavigationBar'
import SignUpForm from './components/SignUpForm'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage'
=======
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
>>>>>>> 1fe60bd554e4d9385a7e2bd39b8fc3e8ad26ec4d

  function App() {

<<<<<<< HEAD
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>



    </>
  )
=======
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
  
>>>>>>> 1fe60bd554e4d9385a7e2bd39b8fc3e8ad26ec4d
}

export default App
