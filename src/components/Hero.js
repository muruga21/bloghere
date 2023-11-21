import React from 'react'
import Blogs from './Blogs'
import { Link } from 'react-router-dom'
import useCheckOnline from './useCheckOnline'
const Hero = () => {
  const isOnline = useCheckOnline();
  {
    if(!isOnline){
      return(
        <div className='flex justify-center mt-20'>
          <h1>You are offline ! please check your Network...</h1>
        </div>
      )
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
     <div className='flex flex-wrap justify-center items-center text-6xl md:text-6xl font-sans sm:p-10 border-b-2 border-silver-300 w-[90%] md:w-[85%] text-[#333] hero-text gap-5 h-[350px]'>
      <div className='flex flex-wrap justify-center items-center gap-5 mt-10 mb-10'>
      <div>START</div>
      <div>WRITING</div>
      <div>YOUR</div>
      <div className='text-[#333]'>BLOG</div>
      <div>TODAY !</div>
      </div>
    </div>
    <section className='w-[100%] flex justify-center'>
    <Blogs/>
    </section>
    <Link className='top-[85%] left-[80%] rounded-md sm:left-[90%] bg-[#333] text-[#f3f5f7] p-3 fixed hover:bg-gray-700 hover:text-white' to={'/addblog'}>add Blog</Link>
  </div>
  )
}

export default Hero
