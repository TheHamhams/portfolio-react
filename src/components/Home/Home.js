import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Pic from '../../assets/images/stock.jpg'

export const Home = () => {
  return (
    <div className='background pt-5'>

      <Container className='rounded mt-5 font-weight-bold '>
        <Row className='d-flex align-items-center'>
          <Col className='fire rounded col-12 col-md-5'>
            <h3 className='text-start large'>Full Stack Developer</h3>
            <h3 className='text-start large'>& Data Science</h3>
          </Col>

          <Col className='col-md-1' />

          <Col className='col-12 col-md-6'>
            <Image fluid roundedCircle src={Pic} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
