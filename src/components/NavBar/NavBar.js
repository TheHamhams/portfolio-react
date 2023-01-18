import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {

  

  return (
    <Navbar className='container-bg fw-bold fixed-top navbar' variant='light'>
    <Container>
      <Navbar.Brand className="p-3 rounded fs-1 text-light">COREY HAMREN</Navbar.Brand> 
      <Nav className='ms-auto'>
        <Nav.Link className="p-3 mx-2 rounded nav-style text-light lernk" href='/#work'>PROJECTS</Nav.Link>
        <Nav.Link className="p-3 mx-2 rounded nav-style text-light lernk" href='/#resume'>RESUME</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}