import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export const NavBar = () => {

  

  return (
    <Navbar className='container-bg fw-bold' variant='light'>
    <Container>
      <Navbar.Brand className="p-3 rounded fire" style={{color: 'var(--flame)'}}>Corey Hamren</Navbar.Brand> 
      <Nav className='ms-auto'>
        <Nav.Link className="p-3 mx-2 rounded nav-style lernk" style={{color: 'var(--flame)'}} href='/'>Home</Nav.Link>
        <Nav.Link className="p-3 mx-2 rounded nav-style lernk" style={{color: 'var(--flame)'}} href='/work'>Work</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}