import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import MM from '../../assets/images/mm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const Mastermind = () => {
    return (
        <div className='background py-5'>
        
        <Container className='rounded my-5 cus-font cont px-5'>
          <Row className='d-flex'>
            <Col className='fire rounded col-7'>
              <h3 className='text-start fs-1'>Full Stack Mastermind</h3>
              <ul>
                  <li className='my-5 fs-5'>This is a Mastermind game for LinkedIn's REACH program.</li>
                  <li className='fs-5'>This is a full-stack app with uses Python and Flask for both the front-end and back-end as well as ElephantSQL for the database.</li>
              </ul>
              <Button className='mx-5' target='_blank' variant='dark' href='https://mastermind-production.up.railway.app/'><span className="fire"><FontAwesomeIcon icon={faLock} /> Visit</span></Button>
              <Button className='mx-5' target='_blank' variant='dark' href='https://github.com/TheHamhams/mastermind'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
            </Col>
    
            <Col className='2' />
    
            <Col className='col-4'>
              <Image fluid rounded src={MM} />
            </Col>
          </Row>
        </Container>
        
      </div>
      )
}
