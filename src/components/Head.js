import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = ({title}) => {

  const [searchItem, setSearchItem] = useState(title)
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

  
  console.log(searchItem,":SearchItems")

    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img alt='menu'
        onClick={()=>toggleMenuHandler()}
        className='h-8 mx-2 cursor-pointer'
         src='https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png'/>
        <img alt='youtube-logo'
        className='h-8 w-14'
         src='https://www.slideserve.com/photo/1626956.png'/>
      </div>
      <div className='flex col-span-10 px-10'>
        <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'   value={searchItem}
        onChange={handleInputChange}/>
        <button className='border border-gray-400 px-2 rounded-r-full'>Search</button>
      </div>
      <div className='flex col-span-1'>
        <img alt='user' 
        className='h-8'
        src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png'/>
      </div>
    </div>
  )
}

export default Head
