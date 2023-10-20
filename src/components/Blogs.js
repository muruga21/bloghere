import React, { useEffect } from 'react'
import datas from './datas'
import Search from './Search';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const userBlogs = datas[0].blogs;

  console.log(datas);

  return (
    
    <div className='flex flex-col item-center mt-10 sm:w-[80%]'>
      <div className='flex justify-center items-center'>
      <Search/>
      </div>
       <div className='flex justify-center flex-col gap-10 sm:p-10'>
        {
          userBlogs.map((blog ,key)=>{
            return(
              <Link to={'/'+key}>
              <div className='flex flex-col p-10 md:flex-row gap-5 hover:shadow-lg rounded-md'>
                <div className=' w-full sm:min-w-[35%]'>
                  <img src={blog.image}></img>
                </div>
                <div className=' w-full sm:min-w-[65%] flex flex-col gap-5'>
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
