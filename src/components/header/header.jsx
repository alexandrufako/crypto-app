import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>GekoClientApi</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className={`nav-link ${pathname === '/' ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${pathname === '/about' ? "active" : ""}`}>
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
