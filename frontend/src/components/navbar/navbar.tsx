// navigation bar
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

const Navigation = () => {
  const location = useLocation();
  return (
        
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

