import { useState } from 'react'
import Home from './components/home/Home'
import NavigationBar from './components/home/NavigationBar'
import SignUpForm from './components/SignUpForm'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import SignInForm from './components/SigninForm';
import AboutUs from './components/AboutUs';
import Footer from './components/home/Footer';
=======
import Merchant from './components/merchant/Merchant'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/home/Footer'
// import NavigationBar from './components/home/NavigationBar'
>>>>>>> 73bcb9c409cf1d74bb61cb2cf40cf36c1fe7da29

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

<<<<<<< HEAD
  export default App
=======
  return (
    <>
    
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        
        <Route path="/merchant" element={<Merchant />} />
      </Routes>
    </Router>
    <Footer />



    </>
  )
}

export default App
>>>>>>> 73bcb9c409cf1d74bb61cb2cf40cf36c1fe7da29
