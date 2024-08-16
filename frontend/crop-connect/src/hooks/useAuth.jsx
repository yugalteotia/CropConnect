import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { EmailContext } from '../context/EmailContext';
// import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(() =>{
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const {setEmail} = useContext(EmailContext);
  
  useEffect(() => {
    // Update localStorage whenever the user state changes
    console.log("In user in useeffect---->",user)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
 
  const login = async (loginCredentials) => {
    const data = {
      loginDTO: {
        email: loginCredentials.loginDTO.email,
        password: loginCredentials.loginDTO.password,
      }
    };

    console.log("Login data:", data.loginDTO); 

    try {
      const response = await axios.post('/api/auth/login', data.loginDTO);
      console.log('Login successful:', response.data);
      setUser(response.data);
      setEmail(response.data.email);

      localStorage.setItem('user',JSON.stringify(response.data));
      localStorage.setItem('userEmail',JSON.stringify(response.data.email));
      return { success: true, userData: response.data };

    } catch (error) {
      console.error('Error during login:', error);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const signUp = async (formData) => {
    // Structure the data to match the backend DTOs
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      addressDTO: {
        addressLine1: formData.addressDTO.addressLine1,
        addressLine2: formData.addressDTO.addressLine2,
        city: formData.addressDTO.city,
        state: formData.addressDTO.state,
        country: formData.addressDTO.country,
        postalCode: formData.addressDTO.postalCode,
        mobileNumber: formData.addressDTO.mobileNumber,
      },
      userDTO: {
        email: formData.userDTO.email,
        password: formData.userDTO.password,
        role: formData.userDTO.role, // Ensuring the role is in uppercase
      },
    };

    console.log("User data",userData.userDTO.role)

    const apiUrl = userData.userDTO.role === 'MERCHANT' 
      ? '/api/merchants' 
      : '/api/farmers';

    try {
      const response = await axios.post(apiUrl, userData);
      
      console.log('Sign up successful', response.data);
      setUser(response.data);

    } catch (error) {
      console.error('Error signing up:', error);
      alert('There was an error during sign-up. Please try again.');
    }
  };


  const logout = () => {
    
    setUser(null);
    setEmail(null);
    localStorage.clear();
  };

  return { login, signUp, logout, user };
};

export { useAuth };
