import React, { useState } from 'react'

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) =>{
    e.preventDefault();
    await fetch('http://localhost:5000/register',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers : {'Content-Type' : 'application/json'},
    })
  }
  return (
    <form className='flex justify-center items-center flex-col gap-10 h-[100vh] text-[#333]'>
      <div className='text-4xl'>
        Register
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
      <button className='bg-[#333] text-[#f3f7f9] p-2 rounded-md hover:bg-transparent hover:text-[#333]'
      onClick={handleRegister}>
        Register
      </button>
    </form>
  )
}

export default Register
