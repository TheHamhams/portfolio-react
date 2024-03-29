import React from 'react'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import Picture from '../../assets/images/python.jpg'
import { MDBBtn } from 'mdb-react-ui-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Resume = () => {
  return (
    <div className='background'>
    <Container className='rounded cont px-3'>
      <Row className='d-flex'>

        <Col className='fire rounded col-12 col-md-5 justify-content-center'>
          <h3 className='text-center fs-1 mb-3'>Contact</h3>
          <ul className='text-start contact'>
          <li><MDBBtn className='mx-2' size='small' target='_blank' outline color='dark' role='button' href='https://github.com/TheHamhams'><FontAwesomeIcon icon={faGithub} /></MDBBtn>Github</li>
          <li><MDBBtn className='mx-2 ' size='small' target='_blank' outline color='dark' role='button' href='https://www.linkedin.com/in/corey-hamren-6b3456173/'><FontAwesomeIcon icon={faLinkedin} /></MDBBtn>LinkedIn</li>
          <li><MDBBtn className='mx-2 contact-btn' size='small' target='_blank' outline color='dark' role='button' href='https://www.kaggle.com/coreyhamren'><FontAwesomeIcon icon={faKaggle} /></MDBBtn>Kaggle</li>
          <li><MDBBtn className='mx-2' outline color='dark' disabled><FontAwesomeIcon icon={faEnvelope} /></MDBBtn>Hamhams86@gmail.com</li>
          <li><MDBBtn className='mx-2' outline color='dark' role='button' disabled><FontAwesomeIcon icon={faPhone} /></MDBBtn>(425) 327-9063</li>
          </ul>
        </Col>
        <Col className='col-md-1'/>
        <Col className='col-12 col-md-6'>
          <Image fluid rounded src={Picture} />
          <div className='text-center'>
            <br/>
            <Button className='mx-5 justify-content-center' target='_blank' variant='orange' href='pdf'><span className="fire">View Resume</span></Button>
          </div>
        </Col>






      </Row>
    </Container>
    </div>
  )
}
