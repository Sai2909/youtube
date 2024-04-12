import React from 'react'
import { LANG } from './Utils'

const About = ({lang}) => {
    console.log(lang,"Its Comming")
    const data=LANG[lang]
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}

export default About
