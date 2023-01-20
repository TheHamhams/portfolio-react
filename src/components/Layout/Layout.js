import React from 'react'
import { Home } from '../Home'
import { Work } from '../Work'
import { Resume } from '../Resume'

export const Layout = () => {
  return (
    <div className='background py-5'>

    <div id='home'>
        <Home />
    </div>

    <div id='work'>
        <Work />
    </div>

    <div id='resume'>
      <Resume />
    </div>


    </div>
  )
}
