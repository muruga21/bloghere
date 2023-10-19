import React, { useEffect } from 'react'
import datas from './datas'
import Search from './Search';

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
          userBlogs.map((blog)=>{
            return(
              <div className='flex flex-col p-10 md:flex-row gap-5'>
                <div className=' w-full sm:min-w-[35%]'>
                  <img src={blog.image}></img>
                </div>
                <div className=' w-full sm:min-w-[65%] flex flex-col gap-5'>
                  <div>{blog.title}</div>
                  <div className=' font-sans'>{blog.content}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

    // <div>
    //   <div className='w-[90%] md:w-[85%] flex justify-center mt-10'>
    //   <div className='w-80 h-10 shadow-md md:w-[auto] flex flex-row justify-center items-center p-3 rounded-md'>
    //     <div><img src={search} width={20}></img></div>
    //     <div><input className=' h-10 bg-[#f3f5f7] p-5 border-none border-0 focus:borer-none focus:outline-none' placeholder='Search'></input></div>
    //     <div><button className=' h-[100%]'>Search</button></div>
    //   </div>
    // </div>
      // <div className='flex justify-center flex-col gap-10 sm:p-10'>
      //   {
      //     userBlogs.map((blog)=>{
      //       return(
      //         <div className='flex flex-col justify-center p-10 md:flex-row gap-5'>
      //           <div className=' w-full sm:min-w-[35%]'>
      //             <img src={blog.image}></img>
      //           </div>
      //           <div className=' w-full sm:min-w-[65%] '>
      //             <div>{blog.title}</div>
      //             <div>{blog.content}</div>
      //           </div>
      //         </div>
      //       )
      //     })
      //   }
      // </div>
    // </div>
  )
}

export default Blogs
