import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class index extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">BABIES</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Detalles">Detalles</Nav.Link>
          <Nav.Link href="Galeria">Galeria</Nav.Link>
          <Nav.Link href="Contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default index;
