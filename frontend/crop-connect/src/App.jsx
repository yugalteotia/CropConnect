import { useState } from 'react'
import Home from './components/home/Home'
import NavigationBar from './components/home/NavigationBar'
import SignUpForm from './components/SignUpForm'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import SignInForm from './components/SigninForm';
import AboutUs from './components/AboutUs';
import Footer from './components/home/Footer';

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
        </Routes>
        <Footer />
      </Router>
      // </>
    )
  }

  export default App
