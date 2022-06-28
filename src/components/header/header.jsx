import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>GekoClientApi</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/details" className="nav-link">
            Details
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
