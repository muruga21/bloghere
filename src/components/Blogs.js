import React, { useEffect, useState } from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';
import search from '../assets/search.png'

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [val, setVal] = useState('NULL');

    const datas = async ()=> {
      const response = await fetch(`http://localhost:5000/blogs/${val}`);
      const blogdata = await response.json();
      setBlogs(blogdata);
    }

  useEffect(()=>{
    datas()
  },[val])
  
 return (
    
    <div className='flex flex-col item-center mt-10 sm:w-[80%]'>
      <div className='flex justify-center items-center'>
      <div className='w-90 h-10 shadow-md flex flex-row justify-center items-center p-3 rounded-md'>
        <div><img src={search} width={20}></img></div>
        <div><input className=' h-10 bg-[#f3f5f7] p-5 border-none border-0 focus:borer-none focus:outline-none' placeholder='Search' onChange={(val)=>{
          console.log(val.target.value)
          setVal(val.target.value)}}>
       </input></div>
        <div><button className=' h-[100%]'>Search</button></div>
    </div>
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
