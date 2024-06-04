import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Blogview = () => {
    const [blog , setBlogs] = useState([]);
    const [userName, setUserName] = useState('');
    const {blogid} = useParams();
    const handleDelete = async()=>{
      const response = await fetch(`http://localhost:5000/deleteBlog/${blogid}`,{
        method:'DELETE',
        headers:{"request-blogview":"blogview/request"}
      });
      const blogdata = await response.json();
      setBlogs(blogdata);
    }
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
      <div className='text-[#333] sm:w-[90%] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-md'>
        <div className=' text-3xl sm:text-5xl sm:w-[90%] mt-10 sm:px-5 felx flex-row'>
         <Link to={'/'}>
         <button className='mx-10'> {"<-"} </button>  
         </Link>
         {blog.blogTitle}
        </div>
        <div className='flex flex-col sm:flex-row sm:w-[90%] sm:pt-10 sm:pb-10 justify-center items-center gap-5'>
          <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
              <img src={'http://localhost:5000/'+blog.blogImg} className=' rounded-md'></img>
          </div>
          <div className=' flex flex-col w-[90%] gap-5 sm:w-[60%] py-5'>
              <div className=' text-l sm:text-3xl'>{blog.description}</div>
              <div className='flex items-center gap-5 justify-between sm:justify-normal'>
                <div className='flex flex-col'>
                  <div>{blog.userName}</div>
                  <div>{blog.date}</div>
                </div>
                <div>
                  <Link to={`/edit/${blogid}`}>
                  {
                    (userName == blog.userName)?(
                      <button className='px-6 py-3 bg-[#333] text-[#f3f5f7] rounded-md'>Edit Blog</button>
                    ):("")
                  }
                  </Link>
                  <Link to={`/`}>
                 { (userName == blog.userName)?(
                    <button onClick={()=>handleDelete()} className='px-6 py-3 bg-[#333] text-[#f3f5f7] rounded-md ml-10'>Delete Blog</button>
                    ):("")}
                  </Link>
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
