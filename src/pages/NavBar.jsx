import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Define a state to track whether the hamburger menu is visible
  const [showMenu, setShowMenu] = React.useState(true);

  // Function to handle toggling the visibility of the hamburger menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle navigation to /mobileloginuser
  const handleLoginClick = () => {
    navigate('/mobileloginuser');
  };

  return (
    <div className='MHNavBar pt-2'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-white">
        <Container>
          <Navbar.Brand href="#home">Heavens Living</Navbar.Brand>
          {/* Conditionally render the hamburger menu and its toggle button */}
          {window.innerWidth > 500 && (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className={showMenu ? 'show' : ''}>
                <Nav className="me-auto">
                  {/* Nav items */}
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Terms & Conditions</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Privacy & Policy
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
          {/* Render a button for login only on small screens */}
          {window.innerWidth <= 500 && (
            <div className="d-flex align-items-center">
              <Button variant="outline-success" onClick={handleLoginClick}>Login</Button>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
