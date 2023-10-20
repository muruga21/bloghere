import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-10 h-[100vh] text-[#333]'>
      <div className='text-4xl'>Login</div>
      <input type='text' placeholder='Email' className=' w-[300px] shadow-sm p-2'></input>
      <input type='password' placeholder='password' className=' w-[300px] shadow-sm p-2'></input>
      <Link to={'/register'}>new user ?  Register</Link>
      <button className='bg-[#333] text-[#f3f7f9] p-2 rounded-md hover:bg-transparent hover:text-[#333]'>Login</button>
    </div>
  )
}

export default Login
