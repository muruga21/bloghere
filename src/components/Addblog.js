import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Addblog = () => {

  const [blogTitle, setBlogTitle] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

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
    if(blogTitle==="" || imgUrl==="" || description==="" || content===""){
      alert("Please fill the information");
      e.preventDefault();
    }
    else{
      const userName = "muruga21";
      let id = Math.random() *20;
      const response = await fetch("http://localhost:5000/addblog",{
        method:'POST',
        body: JSON.stringify({id,userName,blogTitle,imgUrl,content,description}),
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return (
    <form className='w-[80%] flex flex-col justify-center'>
      <input type='text' placeholder='Add your title Here' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-10 focus:ring-0 focus:ring-opacity-0 outline-none'
        onChange={(e)=>{
          setBlogTitle(e.target.value);
        }}
        required
      />
      <input type='file' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none'/>
      <textarea type='text' placeholder='Blog Description' className='bg-[#f3f5f7] border-b-2 border-[#333] p-2 w-full mt-5 focus:ring-0 focus:ring-opacity-0 outline-none'
        onChange={(e)=>{
          setDescription(e.target.value);
        }}
        required
      />
      <ReactQuill modules={modules} formats={formats} placeholder='Write your Blog Content here...' className='mt-5' onChange={(e)=>{setContent(e.target.value)}} />
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
