import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div>
        <h3>About</h3>
      </div>
       <Button variant="primary"><Link to='/'>Back home</Link></Button>
    </div>
  )
}

export default About
