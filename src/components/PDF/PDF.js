import React from 'react'
import resumePDF from '../../assets/pdfs/Resume.pdf'

export const PDF = () => {
  return (
    <div className='background'>
        <iframe className='my-5' title="Resume" src={resumePDF} width='100%' height='900'></iframe>
    </div>
  )
}
