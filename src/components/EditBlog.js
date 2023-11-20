import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {Navigate, useParams } from 'react-router-dom'

const EditBlog = () => {
    const[blogs , setBlogs] = useState({});
    const[userName, setUserName] = useState();
    const[blogTitle, setBlogTitle] = useState();
    const[description, setDescription] = useState();
    const[content, setContent] = useState();
    const[blogImg, setBlogImg] = useState();
    const {blogid} = useParams();
    const [redirect, setRedirect] = useState(false);

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
        handleUserName();
      },[])

    const handleEditBlog = async(e)=>{
        e.preventDefault();
        const blogdata = new FormData();
        if(userName == "" || blogTitle =="" || description =="" || content =="" || blogImg ==null){
            alert("Check the info..!");
        }
        else{
            blogdata.set("userName",userName);
            blogdata.set("blogTitle",blogTitle);
            blogdata.set("description",description);
            blogdata.set("content",content);
            blogdata.set("blogImg",blogImg[0]);
            console.log(blogdata);
            try{
                const response = await fetch(`http://localhost:5000/edit/${blogid}`,{
                    method:'PUT',
                    body: blogdata,
                    headers:{"request-blogview":"blogedit/request"}
                });
                if(response.ok){
                    setRedirect(true);
                }
                if(response.status === 500){
                    alert("check the info..!");
                }
            } catch{
                alert("check the info..!");
            }
        }
    }

    const handleGetBlog = async () =>{
    const response = await fetch(`http://localhost:5000/blog/${blogid}`,{
        method:'GET',
        headers:{"request-blogview":"blogview/request"}
        });
        const blogdata = await response.json();
        setBlogs(blogdata);
    }

    useEffect(()=>{
        handleGetBlog();
    },[])

    useEffect(()=>{
        setBlogTitle(blogs.blogTitle);
        setDescription(blogs.description);
        setContent(blogs.content);
        setBlogImg(blogs.blogImg);
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

    if(redirect){
        return <Navigate to={'/'}/>
    }

    return(

    <form className='w-[80%] flex flex-col justify-center'>

        <input type='text' placeholder='Add your title Here' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-10 focus:ring-0 focus:ring-opacity-0 outline-none'
        value={blogTitle}
        onChange={(e)=>{
            setBlogTitle(e.target.value);
        }}
        required
        />

        <input type='file' defaultValue={blogImg} className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none' required onChange={(e)=>{setBlogImg(e.target.files)}}/>

        <textarea type='text' placeholder='Blog Description' defaultValue={description} className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none'
        onChange={(e)=>{
            setDescription(e.target.value);
        }}
        required
        />

    <ReactQuill
    value={content}
        onChange={(e) => { setContent(e) }}
        modules={modules}
        formats={formats}
        placeholder='Write your Blog Content here...'
        className='mt-5'
    />
        
        <div className='flex justify-center items-center'>
        <button className='mt-10 w-[60%] bg-[#333] text-[#f3f5f7] p-2 pr-6 pl-6 rounded-lg'
        onClick={handleEditBlog}
        >
            Add
        </button>
        </div>
    </form>
    )
}

export default EditBlog