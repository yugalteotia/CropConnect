import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import "../css/SignUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userType, setUserType] = useState('farmer'); 
  const { signUp } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      email && password && firstName && lastName && 
      addressLine1 && city && state && country && postalCode && mobileNumber
    ) {
      // Structure the data to match the backend DTOs
      const data = {
        firstName,
        lastName,
        addressDTO: {
          addressLine1,
          addressLine2,
          city,
          state,
          country,
          postalCode,
          mobileNumber,
        },
        userDTO: {
          email,
          password,
          role: userType.toUpperCase(), // Ensure the role is in the format expected by the backend
        },
      };
  
      // Send the structured data to the signUp function
      console.log(data);
      signUp(data);
    } else {
      alert('Please fill in all required fields.');
    }
  };
  

  return (
    <div className="signup-carousel-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            min={3}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
            
          />
          <input
            type="text"
            value={lastName}
            min={3}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            min={12}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required
            placeholder="Address Line 1"
          />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Address Line 2"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="City"
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            placeholder="State"
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Country"
          />
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            placeholder="Postal Code"
          />
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder="Mobile Number"
          />
          <div className="user-type">
            <label>
              <input
                type="radio"
                value="farmer"
                checked={userType === 'farmer'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Farmer
            </label>
            <label>
              <input
                type="radio"
                value="merchant"
                checked={userType === 'merchant'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Merchant
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-form-footer">
          <p>
            Already have an account? <a href="/signin">Sign in here.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
