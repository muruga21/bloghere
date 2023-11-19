import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useParams } from 'react-router-dom'

const EditBlog = () => {
    const[blogs , setBlogs] = useState();
    const[userName, setUserName] = useState();
    const {blogid} = useParams();

    const handleEditData = async () =>{
    const response = await fetch(`http://localhost:5000/blog/${blogid}`,{
        method:'GET',
        headers:{"request-blogview":"blogview/request"}
        });
        const blogdata = await response.json();
        setBlogs(blogdata);
    }

    useEffect(()=>{
        handleEditData();
    },[])

    useEffect(()=>{
        console.log(blogs);
    },[blogs])

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    return(
        <>
        Hello world
        </>
    // <form className='w-[80%] flex flex-col justify-center'>

    //     <input type='text' placeholder='Add your title Here' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-10 focus:ring-0 focus:ring-opacity-0 outline-none'
    //     value={blogs.blogTitle}
    //     onChange={(e)=>{
    //         setBlogTitle(e.target.value);
    //     }}
    //     required
    //     />

    //     {/* <input type='file' value={blogImg} className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none' required onChange={(e)=>{setBlogImg(e.target.files)}}/> */}

    //     <textarea type='text' placeholder='Blog Description' defaultValue={blogs.description} className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none'
    //     onChange={(e)=>{
    //         setDescription(e.target.value);
    //     }}
    //     required
    //     />

    // <ReactQuill
    // value={blogs.content}
    //     onChange={(e) => { setContent(e) }}
    //     modules={modules}
    //     formats={formats}
    //     placeholder='Write your Blog Content here...'
    //     className='mt-5'
    // />
        
    //     <div className='flex justify-center items-center'>
    //     <button className='mt-10 w-[60%] bg-[#333] text-[#f3f5f7] p-2 pr-6 pl-6 rounded-lg'
    //         onClick={handleEditblog}
    //     >
    //         Add
    //     </button>
    //     </div>
    // </form>
    )
}

export default EditBlog