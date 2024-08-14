import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);

 
  const login = async (loginCredentials) => {
    const data = {
      loginDTO: {
        email: loginCredentials.loginDTO.email,
        password: loginCredentials.loginDTO.password,
      }
    };

    console.log("Login data:", data.loginDTO); // Ensure this matches the backend

    try {
      const response = await axios.post('/api/auth/login', data.loginDTO);
      console.log('Login successful:', response.data);
      setUser(response.data);
      return { success: true };
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

  return { login, signUp, user };
};

export { useAuth };
