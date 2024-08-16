import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";
import SignUpForm from "./components/SignUpForm";
import CartPage from "./components//home/CartPage";
import Merchant from "./components/merchant/Merchant";
import Footer from "./components/home/Footer";
import AboutUs from "./components/AboutUs";
import SignInForm from "./components/SignInForm";
import FarmerPage from "./components/farmer/FarmerPage";
// import ContactUs from "./components/contactUs/ContactUs"
import './css/NavigationBar.css'
import CropFormPage from "./components/farmer/CropFormPage";
import CropListPage from "./components/farmer/CropListPage";
import { EmailProvider } from "./context/EmailContext";
import ContactUs from "./components/contactUs/ContactUs";
import axios from 'axios';



const ConditionalNavigationBar = () => {
  const location = useLocation();
  const excludePaths = ["/", "/crop-form", "/crop-list"];

  // Check if the current path is not in the excludePaths array
  return !excludePaths.includes(location.pathname) ? <NavigationBar className="fixed-nav fixed" /> : null;
};

const ConditionalFooter = () => {
  const location = useLocation();
  const excludePaths = ["/crop-form", "/crop-list"];

  // Check if the current path is not in the excludePaths array
  return !excludePaths.includes(location.pathname) ? <Footer /> : null;
};

function App() {

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Set up response interceptor
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access (e.g., redirect to login)
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  return (
    
    <Router>
      <EmailProvider>
      <ConditionalNavigationBar  />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/merchant" element={<Merchant />} /> 
        <Route path="/farmer" element={<FarmerPage />} /> 
        <Route path="/crop-form" element={<CropFormPage  />}/>
        <Route path="/crop-list" element={<CropListPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
       </Routes>
       <ConditionalFooter />
       </EmailProvider>
    </Router>
  );
}

export default App;

       
    












// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./components/home/Home";
// import NavigationBar from "./components/home/NavigationBar";
// import SignUpForm from "./components/SignUpForm";
// import CartPage from "./components//home/CartPage";
// import Merchant from "./components/merchant/Merchant";
// import Footer from "./components/home/Footer";
// import AboutUs from "./components/AboutUs";
// import SignInForm from "./components/SignInForm";
// import FarmerPage from "./components/farmer/FarmerPage";
// // import ContactUs from "./components/contactUs/ContactUs"
// import './css/NavigationBar.css'
// import CropFormPage from "./components/farmer/CropFormPage";
// import CropListPage from "./components/farmer/CropListPage";
// import { EmailProvider } from "./context/EmailContext";
// import ContactUs from "./components/contactUs/ContactUs";



// const ConditionalNavigationBar = () => {
//   const location = useLocation();
//   const excludePaths = ["/", "/crop-form", "/crop-list"];

//   // Check if the current path is not in the excludePaths array
//   return !excludePaths.includes(location.pathname) ? <NavigationBar className="fixed-nav fixed" /> : null;
// };

// const ConditionalFooter = () => {
//   const location = useLocation();
//   const excludePaths = ["/crop-form", "/crop-list"];

//   // Check if the current path is not in the excludePaths array
//   return !excludePaths.includes(location.pathname) ? <Footer /> : null;
// };

// function App() {
//   return (
    
//     <Router>
//       <EmailProvider>
//       <ConditionalNavigationBar  />
//       <Routes>
//        <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/signup" element={<SignUpForm />} />
//         <Route path="/signin" element={<SignInForm />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/merchant" element={<Merchant />} /> 
//         <Route path="/farmer" element={<FarmerPage />} /> 
//         <Route path="/crop-form" element={<CropFormPage  />}/>
//         <Route path="/crop-list" element={<CropListPage />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//        </Routes>
//        <ConditionalFooter />
//        </EmailProvider>
//     </Router>
//   );
// }

// export default App;

       
    