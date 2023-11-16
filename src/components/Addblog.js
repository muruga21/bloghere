import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Addblog = () => {
  const [userName, setUserName] = useState('');
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [blogImg , setBlogImg] = useState('');

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

  if(userName === null){
    return (
      <div className=' text-4xl m-10 py-10'>
        Please Login to Create a Blog...!
      </div>
    )
  }

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

  const handleAddblog = async (e) =>{
    e.preventDefault();
    if(blogTitle==="" || description==="" || content===""){
      alert("Please fill the information");
    }
    else{
      const blogdata = new FormData();
      blogdata.set("userName",userName);
      blogdata.set("blogTitle",blogTitle);
      blogdata.set("description",description);
      blogdata.set("content",content);
      blogdata.set("blogImg",blogImg[0]);
      const response = await fetch("http://localhost:5000/addblog",{
        method:'POST',
        body: blogdata,
      })
    }
  }

  // if(!userName){
  //   return( <div className=' text-5xl mt-10 py-10'>Please Login to Create a Blog..!</div>);
  // }

  return (
    <form className='w-[80%] flex flex-col justify-center'>

      <input type='text' placeholder='Add your title Here' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-10 focus:ring-0 focus:ring-opacity-0 outline-none'
        onChange={(e)=>{
          setBlogTitle(e.target.value);
        }}
        required
      />

      <input type='file' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none' required onChange={(e)=>{setBlogImg(e.target.files)}}/>

      <textarea type='text' placeholder='Blog Description' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none'
        onChange={(e)=>{
          setDescription(e.target.value);
        }}
        required
      />

    <ReactQuill
      onChange={(e) => { setContent(e) }}
      modules={modules}
      formats={formats}
      placeholder='Write your Blog Content here...'
      className='mt-5'
      value={content}
    />
      
      <div className='flex justify-center items-center'>
        <button className='mt-10 w-[60%] bg-[#333] text-[#f3f5f7] p-2 pr-6 pl-6 rounded-lg'
          onClick={handleAddblog}
        >
            Add
        </button>
      </div>
    </form>
  )
}

export default Addblog
