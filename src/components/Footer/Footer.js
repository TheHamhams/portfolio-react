import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className='container-bg py-1 text-center'>
        <p className='mt-3'>
          Created and coded by Corey Hamren
        </p>
    </div>
  )
}
