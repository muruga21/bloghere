import React, { useEffect, useState } from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const datas = async ()=> {
      const response = await fetch("http://localhost:5000/blogs");
      const blogdata = await response.json();
      setBlogs(blogdata);
    }
    datas();
  },[])

  return (
    
    <div className='flex flex-col item-center mt-10 sm:w-[80%]'>
      <div className='flex justify-center items-center'>
      <Search/>
      </div>
       <div className='flex justify-center flex-col-reverse gap-10 sm:p-10'>
        {
          blogs.map((blog ,key)=>{
            return(
              <Link to={'/'+blog.blogid} key={key}>
              <div className='flex flex-col p-5 md:flex-row gap-5 hover:shadow-lg rounded-md border-b-2'>
                <div className=' w-full sm:min-w-[35%]'>
                  <img src={blog.image}></img>
                </div>
                <div className=' w-full sm:min-w-[65%] flex flex-col justify-between gap-5'>
                  <div>{blog.title}</div>
                  <div className=' font-sans'>{blog.content}</div>
                </div>
              </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blogs
