import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Pic from '../../assets/images/home.jpg'

export const Home = () => {
  return (
    <div className='background py-5'>


      

      <Container className='rounded my-5 cus-font'>
        <Row className='d-flex'>
          <Col className='fire rounded col-7'>
            <h3 className='text-start large'>Full Stack Developer</h3>
            <h3 className='text-center large'>/</h3>
            <h3 className='text-end large'>Data Science</h3>
          </Col>

          <Col className='2' />

          <Col className='col-4'>
            <Image fluid roundedCircle src={Pic} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
