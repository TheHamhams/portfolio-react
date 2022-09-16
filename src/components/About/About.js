import React from 'react'
import { Container } from 'react-bootstrap'

export const About = () => {
  return (
    <div className='background cus-font'>
        <Container className='fire'>
        <h1 className='text-center py-5 large'>History</h1>
        <p className='fs-4'>Before I started learning to become a developer, I had a couple of careers. While they ended up not working out for me in the long run, they did positively impact my life and taught me valuable lessons.</p>
            <br />
            <h3>&#x25B8; Retail</h3>
            <ul>
                <li>Everyone needs a turn at working retail. Hopefully it would lead to more understanding of someone elses' struggles.</li>
            </ul>
            <br />
            <h3>&#x25B8; Special Education Teaching</h3>
            <ul>
                <li>How to succeed when I am in charge of many different types of deadlines and responsabilities.</li>
                <li>How to prepare for, organize, and run my own meetings that require federal paperwork</li>
            </ul>
            <br />
            <h3>&#x25B8; Plumbing</h3>
            <ul>
                <li>You never really know what you are going to find until you actually lay your eyes on the issue.</li>
            </ul>

        </Container>

        <Container className='fire'>
            <h1 className='text-center py-5 large'>Hobbies</h1>
            <h3>&#x25B8; Woodworking</h3>
            <ul>
                <li>I am by no means an <i>artisanal</i> woodworker, but I have been able to make quite a few project</li>
            </ul>

            <h3>&#x25B8; Video Games</h3>
            <ul>
                <li>After a hard days work, it is nice to sit down and look at an even smaller screen</li>
            </ul>

            <h3>&#x25B8; Reading</h3>
            <ul>
                <li>Sometimes it is coding articles, or sports articles, or books with my daughter, either way I am reading something one way or another.</li>
            </ul>
        </Container>
    </div>
  )
}
