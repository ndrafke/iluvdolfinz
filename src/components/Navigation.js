import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <Navbar fixed="top" bg="dark" expand="lg">
  <Navbar.Brand href="#home">iluvdolfinz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#listen">Listen</Nav.Link>
      <Nav.Link href="#video">Video</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}