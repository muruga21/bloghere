import React from 'react'
import { useParams } from 'react-router-dom'
import datas from './datas';

const Blogview = () => {
    const {blogid} = useParams();
    console.log(blogid)
    const blog = datas[0].blogs[parseInt(blogid)];
    console.log(blog)
  return (
    <div className='text-[#333] flex flex-col justify-center items-center'>
      <div className=' text-4xl md:text-6xl sm:text-4xl mt-10 text-center'>
        {blog.title}
      </div>
      <div className='flex flex-col sm:flex-row sm:p-10 justify-center items-center gap-5'>
        <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
            <img src={blog.image}></img>
        </div>
        <div className='w-[90%] sm:w-[60%]'>
            {blog.content}
        </div>
      </div>
    </div>
  )
}

export default Blogview
