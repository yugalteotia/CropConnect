import { Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth'; // Import the useAuth hook
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';
import { useEmail } from '../../context/EmailContext';


function NavigationBar() {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate(); 
  const { email } = useEmail();
  console.log("Email context--->",email);

  const handleLogout = () => {
    logout();
    navigate('/signin'); // Redirect to the sign-in page after logout
  };

  console.log("USER IN NAVIGATION BAR----->",user)
  console.log("USER IN Localstorage ----->",localStorage.getItem("userEmail"));

  
  const userEmail = localStorage.getItem('userEmail');
  let name;
  if (userEmail !== null){
    name = userEmail.replace("@gmail.com",'').toUpperCase();
  }

  let nameFromEmail;
  if (typeof email === 'string' && email.includes('@gmail.com')) {
    nameFromEmail = email.replace("@gmail.com",'').toUpperCase();
  }
  else{
    nameFromEmail = name;
  }
  // const nameFromEmail = email.replace("@gmail.com",'')

  

  return (
    <Navbar bg="light" expand="lg" className="py-1">
      <Navbar.Brand href="/" className="text-lg font-weight-bold ml-2">
        CropConnect
      </Navbar.Brand>


      <Nav className="mr-auto">
        <Nav.Link href="/about-us" className="text-lg font-weight-semibold">
          About Us
        </Nav.Link>
        <Nav.Link href="/contact-us" className="text-lg font-weight-semibold">
          Contact Us
        </Nav.Link>
      </Nav>
      <Nav>
        {name ? (
          <>
          <Navbar.Text className="text-center font-weight-bold">
            Welcome, {email.length != 0 ? nameFromEmail : name}
          </Navbar.Text>
            <Button
              onClick={handleLogout}
              className="text-base whitespace-nowrap font-weight-bold mx-1 px-2 py-0 rounded-pill bg-danger text-white border-0 shadow-sm"
              style={{ display: 'block', transition: 'background-color 0.3s, transform 0.2s' }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              href="/signup"
              className="text-base font-weight-bold mx-2 px-4 py-2 rounded-pill bg-danger text-white border-0 shadow-sm"
              style={{ transition: 'background-color 0.3s, transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            >
              Sign Up
            </Button>
            <Button
              href="/signin"
              className="text-base font-weight-bold mx-1 px-4 py-2 rounded-pill bg-success text-white border-0 shadow-sm"
              style={{ transition: 'background-color 0.3s, transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#343a40')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
            >
              Sign In
            </Button>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;













// import React from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg" className="py-1">
//       <Navbar.Brand href="/" className='text-lg font-weight-bold ml-2'>CropConnect</Navbar.Brand>

//       <Nav className="mr-auto">
//         <Nav.Link href="/about-us" className='text-lg  font-weight-semibold'>About Us</Nav.Link>
//         <Nav.Link href='/contact-us' className='text-lg  font-weight-semibold'>Contact Us</Nav.Link>
//       </Nav>
//       <Nav>
//         <Button
//           href="/signup"
//           className='text-base font-weight-bold mx-2 px-4 py-2 rounded-pill bg-danger text-white border-0 shadow-sm'
//           style={{ transition: 'background-color 0.3s, transform 0.2s' }}
//           onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0056b3'}
//           onMouseLeave={e => e.currentTarget.style.backgroundColor = '#007bff'}
//         >
//           Sign Up
//         </Button>
//         <Button
//           href="/signin"
//           className='text-base font-weight-bold mx-1 px-4 py-2 rounded-pill bg-success text-white border-0 shadow-sm'
//           style={{ transition: 'background-color 0.3s, transform 0.2s' }}
//           onMouseEnter={e => e.currentTarget.style.backgroundColor = '#343a40'}
//           onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6c757d'}
//         >
//           Sign In
//         </Button>
//       </Nav>
//     </Navbar>
//   );
// }

// export default NavigationBar;





// import React from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/" className='text-lg'>CropConnect</Navbar.Brand>

//       <Nav className="mr-auto">
//         <Nav.Link href="#" className='text-lg underline'>About Us</Nav.Link>
//         <Nav.Link href='#' className='text-lg underline'>Contact Us</Nav.Link>
//       </Nav>
//       <Nav>
//         <Button 
//           href="/signup" 
//            className='text-base transition-all duration-200 hover:text-opacity-80 mx-2'
//         >
//           SignUp
//         </Button>
//         <Button 
//           href="/signin" 
//           className='text-base transition-all duration-200 hover:text-opacity-80 mx-2'
//         >
//           SignIn
//         </Button>
//       </Nav>

    
//     </Navbar>
//   );
// }

// export default NavigationBar;




// import React from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/" className='text-lg '>CropConnect</Navbar.Brand>
//       {/* <Navbar.Brand href='/'>Home</Navbar.Brand> */}
//       <Navbar.Brand href="#" className='text-lg underline'>About Us</Navbar.Brand>
//       <Navbar.Brand href='#' className='text-lg underline'>Contact Us</Navbar.Brand>

//       <div  className="flex items-center gap-3">
//       <Navbar.Brand href="#" className='btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80 '>SignUp</Navbar.Brand>
//       <Navbar.Brand href="#" className='btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80 '>SignIn</Navbar.Brand>
//       </div>
//     </Navbar>
    

//   );
// }

// export default NavigationBar;


//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
//             <Nav.Link href="/about-us" className="nav-link-custom">About Us</Nav.Link>
//             <Nav.Link href="/contact-us" className="nav-link-custom">Contact Us</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;


// // src/NavigationBar.jsx
// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


  
// const NavigationBar = () => {
//   // const navigate = useNavigate(); // Initialize navigate

 
//   return (
//     <Navbar bg="blue" expand="lg">
//       <Navbar.Brand href="/">CropConnect</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="/about">About</Nav.Link>
//           <Nav.Link href="/contact">Contact Us</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link href="/signup" >Sign Up</Nav.Link>
//           <Nav.Link href="/signin"  >Sign In</Nav.Link >  
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavigationBar;
