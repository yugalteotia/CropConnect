import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData.userDTO);
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
