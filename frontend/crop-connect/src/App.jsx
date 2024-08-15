
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";
import SignUpForm from "./components/SignUpForm";
import CartPage from "./components//home/CartPage";
import Merchant from "./components/merchant/Merchant";
import Footer from "./components/home/Footer";
import AboutUs from "./components/AboutUs";
import SignInForm from "./components/SignInForm";


const ConditionalNavigationBar = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <NavigationBar /> : null;
};

function App() {
  return (
    <Router>
      <ConditionalNavigationBar />
      <Routes>
       
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<CartPage />} />
        <Route path="/merchant" element={<Merchant />} /> 
              </Routes>
      <Footer />
    </Router>
  );
}

export default App;