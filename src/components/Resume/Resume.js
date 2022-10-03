import React from 'react'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import Picture from '../../assets/images/resume.png'

export const Resume = () => {
  return (
    <div className='background py-5'>
    <Container className='rounded my-5 cus-font cont px-3'>
      <Row className='d-flex'>
        <Col className='col-5'>
          <Image fluid rounded src={Picture} />
        </Col>



        <Col className='fire rounded col-7 justify-content-center'>
          <h3 className='text-center fs-1'>Resume</h3>
          <ul>
            <li className='my-5 fs-5'>View my resume to see my work history and contact information!</li>

          </ul>
          <div className='text-center'>
            <Button className='mx-5 justify-content-center' target='_blank' variant='dark' href='pdf'><span className="fire">Resume</span></Button>
          </div>
          
          
        </Col>




      </Row>
    </Container>
    </div>
        
  )
}
