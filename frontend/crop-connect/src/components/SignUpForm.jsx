
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import "../css/SignUpForm.css";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // Updated password regex: at least 8 characters, one uppercase, one lowercase, and one number; symbols are optional
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Email regex: does not start with a number and follows a basic email pattern
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      email && password && firstName && lastName && 
      addressLine1 && city && state && country && postalCode && mobileNumber
    ) {
      // Check if password matches the regex pattern
      // if (!passwordRegex.test(password)) {
      //   alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
      //   return;
      // }

      // Check if email matches the regex pattern
      if (!emailRegex.test(email)) {
        alert('Email must start with a letter and be in a valid format. Example: user@example.com');
        return;
      }

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
          role: userType.toUpperCase(),
        },
      };
  
      try {
        await signUp(data);

        alert('Sign-up successful! Redirecting to sign-in page.');
        navigate('/signin');
      } catch (error) {
        alert(`Sign-up failed: ${error.message || 'An error occurred. Please try again.'}`);
      }

    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="signup-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-4">Registration Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      min={3}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      min={3}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    min={12}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="addressLine1" className="form-label">
                    Address Line 1 <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="addressLine2" className="form-label">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label">
                      Postal Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    placeholder="91XXXXXXXX"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    User Type <span className="text-danger">*</span>
                  </label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="farmer"
                        value="farmer"
                        checked={userType === 'farmer'}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                      />
                      <label className="form-check-label" htmlFor="farmer">
                        Farmer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="merchant"
                        value="merchant"
                        checked={userType === 'merchant'}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                      />
                      <label className="form-check-label" htmlFor="merchant">
                        Merchant
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Sign Up
                </button>
              </form>

              <div className="text-center mt-3">
                <p>
                  Already have an account? <a href="/signin">Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;


// import React, { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import "../css/SignUpForm.css";
// import { useNavigate } from 'react-router-dom';

// const SignUpForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');
//   const [postalCode, setPostalCode] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [userType, setUserType] = useState('farmer'); 
//   const { signUp } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (
//       email && password && firstName && lastName && 
//       addressLine1 && city && state && country && postalCode && mobileNumber
//     ) {
//       const data = {
//         firstName,
//         lastName,
//         addressDTO: {
//           addressLine1,
//           addressLine2,
//           city,
//           state,
//           country,
//           postalCode,
//           mobileNumber,
//         },
//         userDTO: {
//           email,
//           password,
//           role: userType.toUpperCase(),
//         },
//       };
  
//       try {
//         const response = await signUp(data);

//         // Displaying the API response in an alert box
//         alert('Sign-up successful! Redirecting to sign-in page.');

//         navigate('/signin');
//       } catch (error) {
//         // Show error message in alert box
//         alert(`Sign-up failed: ${error.message || 'An error occurred. Please try again.'}`);
//       }

//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="row justify-content-center align-items-center">
//         <div className="col-10 col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-body p-4">
//               <h3 className="fw-bold mb-4">Registration Form</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="firstName" className="form-label">
//                       First Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       min={3}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6">
//                     <label htmlFor="lastName" className="form-label">
//                       Last Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       min={3}
//                       onChange={(e) => setLastName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     min={12}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="john@gmail.com"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="addressLine1" className="form-label">
//                     Address Line 1 <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={addressLine1}
//                     onChange={(e) => setAddressLine1(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="addressLine2" className="form-label">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addressLine2}
//                     onChange={(e) => setAddressLine2(e.target.value)}
//                   />
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="city" className="form-label">
//                       City <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6">
//                     <label htmlFor="state" className="form-label">
//                       State <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="country" className="form-label">
//                       Country <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={country}
//                       onChange={(e) => setCountry(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="postalCode" className="form-label">
//                       Postal Code <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={postalCode}
//                       onChange={(e) => setPostalCode(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="mobileNumber" className="form-label">
//                     Mobile Number <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     required
//                     placeholder="91XXXXXXXX"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label">
//                     User Type <span className="text-danger">*</span>
//                   </label>
//                   <div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="userType"
//                         id="farmer"
//                         value="farmer"
//                         checked={userType === 'farmer'}
//                         onChange={(e) => setUserType(e.target.value)}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="farmer">
//                         Farmer
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="userType"
//                         id="merchant"
//                         value="merchant"
//                         checked={userType === 'merchant'}
//                         onChange={(e) => setUserType(e.target.value)}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="merchant">
//                         Merchant
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-lg w-100">
//                   Sign Up
//                 </button>
//               </form>

//               <div className="text-center mt-3">
//                 <p>
//                   Already have an account? <a href="/signin">Sign in here.</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUpForm;


// import React, { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import "../css/SignUpForm.css";
// import { useNavigate } from 'react-router-dom';

// const SignUpForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [addressLine1, setAddressLine1] = useState('');
//   const [addressLine2, setAddressLine2] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');
//   const [postalCode, setPostalCode] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [userType, setUserType] = useState('farmer'); 
//   const { signUp } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (
//       email && password && firstName && lastName && 
//       addressLine1 && city && state && country && postalCode && mobileNumber
//     ) {
//       // Structure the data to match the backend DTOs
//       const data = {
//         firstName,
//         lastName,
//         addressDTO: {
//           addressLine1,
//           addressLine2,
//           city,
//           state,
//           country,
//           postalCode,
//           mobileNumber,
//         },
//         userDTO: {
//           email,
//           password,
//           role: userType.toUpperCase(), // Ensure the role is in the format expected by the backend
//         },
//       };
  
    
//       try{
//         await signUp(data);
//         navigate('/signin');

//       }catch(error){
//         alert('There was an error during sign-up. Please try again.');
//       }

//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };
  



//   return (
//     <div className="signup-container">
//       <div className="row justify-content-center align-items-center ">
//         <div className="col-10 col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-body p-4">
//               <h3 className="fw-bold mb-4">Registration Form</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="firstName" className="form-label">
//                       First Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={firstName}
//                       min={3}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6">
//                     <label htmlFor="lastName" className="form-label">
//                       Last Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={lastName}
//                       min={3}
//                       onChange={(e) => setLastName(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     min={12}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="john@gmail.com"
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="addressLine1" className="form-label">
//                     Address Line 1 <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={addressLine1}
//                     onChange={(e) => setAddressLine1(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="addressLine2" className="form-label">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addressLine2}
//                     onChange={(e) => setAddressLine2(e.target.value)}
//                   />
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="city" className="form-label">
//                       City <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6">
//                     <label htmlFor="state" className="form-label">
//                       State <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="country" className="form-label">
//                       Country <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={country}
//                       onChange={(e) => setCountry(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="postalCode" className="form-label">
//                       Postal Code <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={postalCode}
//                       onChange={(e) => setPostalCode(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="mobileNumber" className="form-label">
//                     Mobile Number <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     required
//                     placeholder="91XXXXXXXX"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label">
//                     User Type <span className="text-danger">*</span>
//                   </label>
//                   <div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="userType"
//                         id="farmer"
//                         value="farmer"
//                         checked={userType === 'farmer'}
//                         onChange={(e) => setUserType(e.target.value)}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="farmer">
//                         Farmer
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="userType"
//                         id="merchant"
//                         value="merchant"
//                         checked={userType === 'merchant'}
//                         onChange={(e) => setUserType(e.target.value)}
//                         required
//                       />
//                       <label className="form-check-label" htmlFor="merchant">
//                         Merchant
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-lg w-100">
//                   Sign Up
//                 </button>
//               </form>

//               <div className="text-center mt-3">
//                 <p>
//                   Already have an account? <a href="/signin">Sign in here.</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   // </div>
//   );
// }

// // export default App;

// export default SignUpForm;
