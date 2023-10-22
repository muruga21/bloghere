import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blogview = () => {
    const [blog , setBlogs] = useState([]);

    const {blogid} = useParams();
    useEffect(()=>{
      const data = async () =>{
        const response = await fetch(`http://localhost:5000/blog/${blogid}`,{
          method:'GET',
          headers:{"request-blogview":"blogview/request"}
        });
        const blogdata = await response.json();
        setBlogs(blogdata);
      }
      data();
    },[blogid]);

  return (
    <div className='w-[100%] flex justify-center'>
      <div className='text-[#333] w-[90%] flex flex-col justify-center items-center shadow-xl rounded-md'>
        <div className=' text-5xl sm:w-[90%] mt-10 text-center'>
          {blog.title}
        </div>
        <div className='flex flex-col sm:flex-row sm:w-[90%] sm:pt-10 sm:pb-10 justify-center gap-5'>
          <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
              <img src={blog.image}></img>
          </div>
          <div className='w-[90%] sm:w-[60%]'>
              {blog.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogview
