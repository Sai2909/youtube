import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/Contants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = ({a}) => {
const [videos,setVideos]=useState([])
console.log(a,"video container")
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_API_KEY);
    const json=await data.json();
    // console.log("comming",json.items)
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>(
        <Link to={'/watch?v='+video.id}>
      <VideoCard key={video.id} info={video}/>
      </Link>
      ))}
     
    </div>
  )
}

export default VideoContainer
