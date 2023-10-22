import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='flex justify-center items-center flex-col gap-10 h-[100vh] text-[#333]'>
      <div className='text-4xl'>
        Login
      </div>
      <input type='text' placeholder='Email' className=' w-[300px] shadow-sm p-2'
        value={username} 
        onChange={(e) =>{
          console.log(e.target.value);
          setUsername(e.target.value);
        }}>
        </input>
      <input type='password' placeholder='password' className=' w-[300px] shadow-sm p-2'
        value={password} 
        onChange={(e) =>{
          console.log(e.target.value);
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
