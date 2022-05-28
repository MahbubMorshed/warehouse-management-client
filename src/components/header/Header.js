import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../../images/logo30.png";

import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={40} src={logo} />
            Computer Source
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="summery">
                Summery
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact Us
              </Nav.Link>
              {/* {user && (
                <Nav.Link as={Link} to="addItem">
                  Add item
                </Nav.Link>
              )} */}
              {user && (
                <Nav.Link as={Link} to="inventory">
                  Inventory
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="myPage">
                My Page
              </Nav.Link>
              {user ? (
                <Button className="text-light" onClick={handleLogout}>
                  <AiOutlineLogout />
                </Button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
