import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import WTGOT from '../../assets/images/wtgot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { WeatherApp } from '../WeatherApp'
import { Housing } from '../Housing'
import { Portfolio } from '../Portfolio'




export const Work = () => {
  return (
    <div className='background py-5'>
  
    <WeatherApp />
      
    <Housing />

    <Portfolio />

    </div>
  )
}
