import React from 'react'
import search from '../assets/search.png'

const Blogs = () => {
  return (
    <div className='h-[100%] w-[90%] md:w-[85%] flex justify-center mt-10'>
      <div className='w-80 h-10 shadow-md md:w-[auto] flex flex-row items-center p-3 rounded-md'>
        <div><img src={search} width={20}></img></div>
        <div><input className=' h-10 bg-[#f3f5f7] p-5 border-none border-0 focus:borer-none focus:outline-none' placeholder='Search'></input></div>
        <div><button className=' h-[100%]'>Search</button></div>
      </div>
    </div>
  )
}

export default Blogs
