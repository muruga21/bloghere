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
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className='flex justify-center items-center w-[80%]'>
      <div className='flex justify-center items-center flex-col h-[100%] w-full md:w-[45%] border-transparent md:border-2 md:border-gray-200 py-20 rounded-lg shadow-lg'>
        <div class="login">
            <h2>Loign</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="text" required onChange={(e)=>setUserName(e.target.value)} />
                    <label>User Name</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <label>Password</label>
                </div>
                <div class="remember">
                    {/* <lable><input type="checkbox" />Remember me</lable> */}
                    <a href="#">Forget Password?</a>
                </div>
                <button type="submit" class="btn" onClick={handleLogin} >Login</button>
                <div class="register">
                    <p>Don't have any account ? <Link to="/register" class="register-link">Register</Link></p>
                </div>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
