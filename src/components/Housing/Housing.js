import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import House from '../../assets/images/housing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons'

export const Housing = () => {
  return (
    <div className='background py-5'>
    
    <Container className='rounded my-5 cus-font cont px-3'>
      <Row className='d-flex'>
        <Col className='col-4'>
          <Image fluid rounded src={House} />
        </Col>

        <Col className='2' />

        <Col className='fire rounded col-7'>
          <h3 className='text-start fs-1'>Full Stack Housing Prediction ML App</h3>
          <ul>
              <li className='my-5 fs-5'>Analyzed the housing database from Kaggle to create a price prediction model which scored in the top 1% of Kaggle submissions at the time. Programmed Streamlit in Flask to create a web app to make predictions with information from the database.</li>
              <li className='fs-5'>Model utilizes over 100 parameters, one-hot-encoding, ordinal-encoding to aid the predictions.</li>
          </ul>
          <Button className='mx-5' target='_blank' variant='dark' href='https://hamren-housing.up.railway.app/'><span className="fire"><FontAwesomeIcon icon={faHouse} /> Visit</span></Button>
          <Button className="mx-5" target='_blank' variant='dark' href='https://github.com/TheHamhams/housing-flask'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
          <Button className='mx-5' target='_blank' variant='dark' href='https://www.kaggle.com/code/coreyhamren/housing-prices-top-1/notebook'><span className='fire'><FontAwesomeIcon icon={faKaggle} /> Kaggle</span></Button>
        </Col>




      </Row>
    </Container>
    
  </div>
  )
}