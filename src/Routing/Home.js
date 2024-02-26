import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>This is Home</h2>
      <Link to='/about' className='btn '> About</Link>
    </div>
  )
}

export default Home
