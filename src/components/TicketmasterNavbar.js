import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


function TicketmasterNavbar() {
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand to="/home">Ticketmaster</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" >
        <Nav className="mr-auto">
          <Link className="nav-item nav-link ml-5" to="/concerts">Concerts</Link>
          <Link className="nav-item nav-link ml-5" to="/sports">Sports</Link>
          <Link className="nav-item nav-link ml-5"to="/arttheater">Art &amp; Theater</Link>
          <Link className="nav-item nav-link ml-5" to="/family">Family</Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item><Link className="nav-item nav-link ml-5 text-dark" to="/deals">Deals</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className="nav-item nav-link ml-5 text-dark" to="/entertainment">Entertainment Guides</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link className="nav-item nav-link ml-5"to="/signin">Sign In</Link>
            <NavDropdown title="Sell" id="basic-nav-dropdown">
              <NavDropdown.Item><Link className="nav-item nav-link ml-5 text-dark" to="/selltickets">Sell Tickets</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="nav-item nav-link ml-5 text-dark" to="/mylistings">My Listings</Link></NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-item nav-link ml-5" to="/giftcards">Gift Cards</Link>
            <Link className="nav-item nav-link ml-5" to="/help">Help</Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default TicketmasterNavbar;