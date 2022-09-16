import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import House from '../../assets/images/housing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons'

export const Housing = () => {
  return (
    <div className='background py-5'>
    
    <Container className='rounded my-5 cus-font'>
      <Row className='d-flex'>
        <Col className='col-4'>
          <Image fluid rounded src={House} />
        </Col>

        <Col className='2' />

        <Col className='fire rounded col-7'>
          <h3 className='text-start fs-1'>Full Stack Developer Weather App</h3>
          <ul>
              <li className='my-5 fs-5'>Created a web app with React for front-end and Flask for back-end enabling users  to login with Auth0, save their location and up to 3 others in an ElephantSQL database</li>
              <li className='fs-5'>Leveraged weather.gov’s API to get the current weather forecast for those locations.</li>
          </ul>
          <Button className='mx-5' variant='dark' href='https://hamren-housing.herokuapp.com/'><span className="fire"><FontAwesomeIcon icon={faHouse} /> Visit</span></Button>
          <Button className="mx-5" variant='dark' href='https://github.com/TheHamhams/housing-flask'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
          <Button className='mx-5' variant='dark' href='https://www.kaggle.com/code/coreyhamren/housing-prices-top-1/notebook'><span className='fire'><FontAwesomeIcon icon={faKaggle} /> Kaggle</span></Button>
        </Col>




      </Row>
    </Container>
    
  </div>
  )
}