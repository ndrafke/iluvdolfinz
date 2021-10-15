import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

//Responsive Navbar Fixed To Top:
export default class Navigation extends Component{
    render(){
        return(
    <div>
  <Navbar collapseOnSelect className="nav-color" fixed="top" expand="sm">
  <Navbar.Brand href="#home" className="order-sm-0 mx-auto order-1">  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-sm-1 order-0"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">
        <h6 className="nav-text">Home</h6>
      </Nav.Link>
      <Nav.Link href="#listen">
        <h6 className="nav-text">Listen</h6>
      </Nav.Link>
      <Nav.Link href="#gallery">
        <h6 className="nav-text">Gallery</h6>
      </Nav.Link>
      <Nav.Link href="#about">
        <h6 className="nav-text">About</h6>
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
  </div>
        )
    }
}