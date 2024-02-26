import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'


const MainContainer = ({a}) => {
  console.log(a)
  return (
    <div className='col-span-10'>

      <ButtonList/>
      <VideoContainer a={a}/>
    </div>
  )
}

export default MainContainer
