import { useState } from 'react'
import Home from './components/home/Home'
import NavigationBar from './components/home/NavigationBar'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Merchant from './components/merchant/Merchant'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/home/Footer'
import ContactUs from './components/contactUs/ContactUs'
// import NavigationBar from './components/home/NavigationBar'



function App() {

  return (
    <>
    
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    <Footer />



    </>
  )
}

export default App
