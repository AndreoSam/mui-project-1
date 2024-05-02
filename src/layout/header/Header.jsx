import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand as ={Link} to='/'>Sign Up</Navbar.Brand>
        <Navbar.Brand as ={Link} to='view'>View</Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/">
          Registration
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="login">
          Login
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="profile">
          Profile
        </Navbar.Brand>
        {/* <Navbar.Brand as={Link} to="drawer">
          Drawer
        </Navbar.Brand> */}
        {/* <Navbar.Brand as={Link} to="/">
          Registration2
        </Navbar.Brand> */}
      </Container>
    </Navbar>
  );
};

export default Header;
