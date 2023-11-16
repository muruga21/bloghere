import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const handleRegister = async (e) =>{
    e.preventDefault();
    const Response = await fetch('http://localhost:5000/register',{
      method:'POST',
      body: JSON.stringify({userName,password}),
      headers : {'Content-Type' : 'application/json'},
    })
    if(Response.status === 400){
      alert("userName already exists");
    }
    else{
      alert("Registration success !");
      setRedirect(true);
    }
    if(Response.status === 500){
      alert("server under maintenance !!");
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <form className='flex justify-center items-center flex-col gap-10 h-[100vh] text-[#333]'>
      <div className='text-4xl'>
        Register
        </div>
      <input type='text' placeholder='Email' className=' w-[300px] shadow-sm p-2'
        value={userName} 
        onChange={(e) =>{
          console.log(e.target.value);
          setUserName(e.target.value);
        }}>
        </input>
      <input type='password' placeholder='password' className=' w-[300px] shadow-sm p-2'
        value={password} 
        onChange={(e) =>{
          console.log(e.target.value);
          setPassword(e.target.value);
        }}
      ></input>
      <button className='bg-[#333] text-[#f3f7f9] p-2 rounded-md hover:bg-transparent hover:text-[#333]'
      onClick={handleRegister}>
        Register
      </button>
    </form>
  )
}

export default Register
