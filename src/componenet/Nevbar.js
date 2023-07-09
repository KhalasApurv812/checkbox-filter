import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Nevbar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/stocktable">
              Stock Table
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Product
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
