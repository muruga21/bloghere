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
       <div className='w-auto p-8 flex flex-col-reverse'>
        {
          blogs.map((blog,key)=>{
            return (
              <Link className='my-5' to={'/'+blog._id} key={key}>
                <div className='flex flex-col sm:flex-row w-full rounded-md shadow-md'>
                  <div className='w-[100%] sm:w-[35%] overflow-hidden rounded-md sm:p-5'>
                    <img src={'http://localhost:5000/'+blog.blogImg} className=' rounded-md max-w-[100%] max-h-[100%]'></img>
                  </div>
                  <div className='sm:w-[65%] h-[100%] sm:px-10 px-5 flex flex-col gap-10 my-5'>
                    <div>
                      <div className='text-2xl'>{blog.blogTitle}</div>
                      <div className='flex gap-3'>
                        <div>{blog.userName}</div>
                        <div>{blog.date}</div>
                      </div>
                    </div>
                    <div>{blog.description}</div>
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
