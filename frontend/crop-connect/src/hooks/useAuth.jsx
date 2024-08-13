// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logic to log in the user
    setUser(userData);
  };

  const signUp = (userData) => {
    // Logic to sign up the user
    console.log('Sign up', {
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      addressLine1: userData.addressLine1,
      addressLine2: userData.addressLine2,
      city: userData.city,
      state: userData.state,
      country: userData.country,
      postalCode: userData.postalCode,
      mobileNumber: userData.mobileNumber,
      userType: userData.userType,
    });
    
    // For example, you might send a request to your backend here
    setUser(userData);
  };

  return { login, signUp, user };
};

export { useAuth };
