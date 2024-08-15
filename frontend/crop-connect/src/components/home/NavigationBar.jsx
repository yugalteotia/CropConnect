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
