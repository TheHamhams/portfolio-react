import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import MM from '../../assets/images/mm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const Mastermind = () => {
    return (
        <div className='background-off'>
        
        <Container className='rounded cont'>
          <Row className='d-flex'>
    
            <Col className='col-12 col-md-6'>
              <Image className='mb-3' fluid rounded src={MM} />
            </Col>

            <Col className='col-md-1' />
            
            <Col className='fire rounded col-12 col-md-5'>
              <h3 className='text-start fs-1 mb-3'>Full Stack Mastermind</h3>
              <ul className=''>
                <li className='fs-5 mb-3'>This is a Mastermind game for LinkedIn's REACH program.</li>
                <li className='fs-5'>This is a full-stack app with uses Python and Flask for both the front-end and back-end as well as ElephantSQL for the database.</li>
              </ul>
              <Button className='mr-4 mb-3' target='_blank' variant='orange' href='https://mastermind-production.up.railway.app/'><span className='fire'><FontAwesomeIcon icon={faLock} /> Visit</span></Button>
              <Button className='mx-4 mb-3' target='_blank' variant='orange' href='https://github.com/TheHamhams/mastermind'><span className='fire'><FontAwesomeIcon icon={faGithub} /> Flask</span></Button>
            </Col>
    
          </Row>
        </Container>
      </div>
      )
}
