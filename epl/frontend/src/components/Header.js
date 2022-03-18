import React from 'react'
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
      <LinkContainer to='/'><Navbar.Brand>ENGLISH PREMIER LEAGUE</Navbar.Brand></LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to='/top'><Nav.Link>Top</Nav.Link></LinkContainer>
      <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
      </Nav>
    </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
