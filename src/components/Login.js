import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const handleLogin = async (e) =>{
    e.preventDefault();
    const Response = await fetch("http://localhost:5000/login",{
      method :'POST',
      body : JSON.stringify({userName,password}),
      headers: {'Content-Type':'application/json'},
      credentials : 'include',
    })
    if(Response.status === 200){
      setRedirect(true);
    } else {
      alert("Wrong Credentials !!");
    }     
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className='flex justify-center items-center flex-col gap-10 h-[100vh] text-[#333]'>
      <div className='text-4xl'>
        Login
      </div>
      <input type='text' placeholder='Email' className=' w-[300px] shadow-sm p-2'
        value={userName} 
        onChange={(e) =>{
          setUserName(e.target.value);
        }}>
        </input>
      <input type='password' placeholder='password' className=' w-[300px] shadow-sm p-2'
        value={password} 
        onChange={(e) =>{
          setPassword(e.target.value);
        }}
      ></input>
      <Link to={'/register'}>new user ?  Register</Link>
      <button className='bg-[#333] text-[#f3f7f9] p-2 rounded-md hover:bg-transparent hover:text-[#333]'
      onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login
