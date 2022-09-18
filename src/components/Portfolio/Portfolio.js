import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import Home from '../../assets/images/home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Portfolio = () => {
  return (
    <div className='background py-5'>
    
    <Container className='rounded my-5 cus-font cont'>
      <Row className='d-flex px-4'>
        <Col className='fire rounded col-7'>
          <h3 className='text-center fs-1'>Portfolio Web App</h3>
          <ul>
              <li className='my-5 fs-5'>This Portfolio app utilizes React. Integrates Bootstrap, FontAwesome, and Firebase.</li>
          </ul>
          <Button className='mx-5' variant='dark' href='/'><span className="fire"><FontAwesomeIcon icon={faCircleUser} /> Visit</span></Button>
          <Button className="mx-5" variant='dark' href='https://github.com/TheHamhams/portfolio-react'><span className='fire'><FontAwesomeIcon icon={faGithub} /> React</span></Button>
        </Col>

        <Col className='2' />

        <Col className='col-4'>
          <Image fluid rounded src={Home} />
        </Col>
      </Row>
    </Container>
    
  </div>
  )
}