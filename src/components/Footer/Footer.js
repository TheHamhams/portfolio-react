import React from 'react'
import { Container } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className='container-bg fixed-bottom'>
        <Container className='p-2 container-bg text-left' >
            <MDBBtn className='mx-2' outline color='light' role='button' href='https://github.com/TheHamhams'><FontAwesomeIcon icon={faGithub} /></MDBBtn>
            <MDBBtn className='mx-2' outline color='light' role='button' href='https://github.com/TheHamhams'><FontAwesomeIcon icon={faLinkedin} /></MDBBtn>
            <MDBBtn className='mx-2' outline color='light' role='button' href='https://github.com/TheHamhams'><FontAwesomeIcon icon={faKaggle} /></MDBBtn>
            <MDBBtn className='mx-2' outline color='light' role='button'><FontAwesomeIcon icon={faEnvelope} /></MDBBtn>Hamhams86@gmail.com
            <MDBBtn className='mx-2' outline color='light' role='button'><FontAwesomeIcon icon={faPhone} /></MDBBtn>(425) 327-9063
        </Container>
    </div>
  )
}
