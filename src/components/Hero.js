import React from 'react'
import Blogs from './Blogs'
const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
     <div className='flex flex-wrap justify-center items-center text-6xl md:text-6xl font-sans sm:p-10 border-b-2 border-silver-300 w-[90%] md:w-[85%] text-[#333] hero-text gap-5 h-[100%]'>
      <div className='flex flex-wrap justify-center items-center gap-5 mt-10 mb-10'>
      <div>START</div>
      <div>SHARING</div>
      <div>YOUR</div>
      <div className='text-[#333]'>BLOG</div>
      <div>TODAY !</div>
      </div>
    </div>
    <section className='w-[100%] flex justify-center'>
    <Blogs/>
  </section>
  </div>
  )
}

export default Hero
