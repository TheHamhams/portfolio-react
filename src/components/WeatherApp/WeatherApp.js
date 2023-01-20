import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import WTGOT from '../../assets/images/wtgot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const WeatherApp = () => {
  return (
    <div className='background-off'>
    
    <Container className='rounded cont'>
      <Row className='d-flex'>

        <Col className='col-12 col-md-6'>
          <Image className='mb-3' fluid rounded src={WTGOT} />
        </Col>

        <Col className='col-md-1' />
        
        <Col className='fire rounded col-12 col-md-5'>
          <h3 className='text-start fs-1 mb-3'>Full Stack Developer Weather App</h3>
          <ul>
              <li className='mb-3 fs-5'>Created a web app with React for front-end and Flask for back-end enabling users  to login with Auth0, save their location and up to 3 others in an ElephantSQL database</li>
              <li className='fs-5'>Leveraged weather.gov’s API to get the current weather forecast for those locations.</li>
          </ul>
          <Button className='mr mb-3' target='_blank' variant='orange' href='https://hamren-wtgot.firebaseapp.com'><span className="fire"><FontAwesomeIcon icon={faSun} /> Visit</span></Button>
          <Button className="mx-2 mb-3" target='_blank' variant='orange' href='https://github.com/TheHamhams/capstone-weather'><span className='fire'><FontAwesomeIcon icon={faGithub} /> React</span></Button>
          <Button className='mx-2 mb-3' target='_blank' variant='orange' href='https://github.com/TheHamhams/weather-flask'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
        </Col>
      </Row>
    </Container>
    
  </div>
  )
}
