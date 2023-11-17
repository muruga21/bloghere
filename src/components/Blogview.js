import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blogview = () => {
    const [blog , setBlogs] = useState([]);
    const [userName, setUserName] = useState('');
    const {blogid} = useParams();
    useEffect(()=>{
      const handleUserName = async () =>{
        const Response = await fetch('http://localhost:5000/profile',{
            credentials:'include',
        })
        if(Response.status === 500){
            setUserName(null);
        }
        else{
            const userName = await Response.json();
            setUserName(userName);
        }
      }
      const data = async () =>{
        const response = await fetch(`http://localhost:5000/blog/${blogid}`,{
          method:'GET',
          headers:{"request-blogview":"blogview/request"}
        });
        const blogdata = await response.json();
        setBlogs(blogdata);
      }
      data();
      handleUserName();
    },[blogid]);

  return (
    <div className='w-[100%] flex justify-center'>
      <div className='text-[#333] w-[90%] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-md'>
        <div className=' text-5xl sm:w-[90%] mt-10 px-5'>
          {blog.blogTitle}
        </div>
        <div className='flex flex-col sm:flex-row sm:w-[90%] sm:pt-10 sm:pb-10 justify-center gap-5'>
          <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
              <img src={'http://localhost:5000/'+blog.blogImg} className=' rounded-md'></img>
          </div>
          <div className=' flex flex-col w-[90%] gap-5 sm:w-[60%] p-5'>
              <div className=' text-3xl'>{blog.description}</div>
              <div className='flex items-center gap-5'>
                <div>
                  <div>{blog.userName}</div>
                  <div>{blog.date}</div>
                </div>
                <div>
                  <button className='px-6 py-3 bg-[#333] text-[#f3f5f7] rounded-md'>Edit Blog</button>
                </div>
              </div>
          </div>
        </div>
        <div className='w-[90%]'>
            <div dangerouslySetInnerHTML={{__html:blog.content}}></div>
        </div>
      </div>
    </div>
  )
}

export default Blogview
