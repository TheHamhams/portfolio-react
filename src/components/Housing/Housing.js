import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import House from '../../assets/images/housing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons'

export const Housing = () => {
  return (
    <div className='background'>
    
    <Container className='rounded cont'>
      <Row className='d-flex'>

        <Col className='fire rounded col-12 col-md-5'>
          <h3 className='text-start fs-1 mb-3'>Full Stack Housing Prediction ML App</h3>
          <ul className='mb-4'>
            <li className='fs-5 mb-3'>Analyzed the housing database from Kaggle to create a price prediction model which scored in the top 1% of Kaggle submissions at the time. Programmed Streamlit in Flask to create a web app to make predictions with information from the database.</li>
            <li className='fs-5'>Model utilizes over 100 parameters, one-hot-encoding, ordinal-encoding to aid the predictions.</li>
          </ul>
          <Button className='mr mb-3' target='_blank' variant='orange' href='https://hamren-housing.up.railway.app/'><span className="fire"><FontAwesomeIcon icon={faHouse} /> Visit</span></Button>
          <Button className="mx-2 mb-3" target='_blank' variant='orange' href='https://github.com/TheHamhams/housing-flask'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
          <Button className='mx-2 mb-3' target='_blank' variant='orange' href='https://www.kaggle.com/code/coreyhamren/housing-prices-top-1/notebook'><span className='fire'><FontAwesomeIcon icon={faKaggle} /> Kaggle</span></Button>
        </Col>
        
        <Col className='col-md-1' />
        
        <Col className='col-12 col-md-6'>
          <Image className='mb-3' fluid rounded src={House} />
        </Col>

      </Row>
    </Container>
    
  </div>
  )
}