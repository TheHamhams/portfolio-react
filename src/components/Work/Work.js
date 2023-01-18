import React from 'react'
import { WeatherApp } from '../WeatherApp'
import { Housing } from '../Housing'
import { Portfolio } from '../Portfolio'
import { Mastermind } from '../Mastermind'


export const Work = () => {
  return (
    <div className='background py-5'>

    <Mastermind />

    <Housing />

    <WeatherApp />

    </div>
  )
}
