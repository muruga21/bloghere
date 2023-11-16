import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [userName , setUserName] = useState(null);
    useEffect(()=>{
        const handleUserName = async () =>{
            const Response = await fetch('http://localhost:5000/profile',{
                credentials:'include',
            })
            const userName = await Response.json();
            setUserName(userName);
        }
        handleUserName();

    },[])

    const logout = async() =>{
        const Response = fetch("http://localhost:5000/logout",{
            method:'POST',
            credentials:'include'
        })
        setUserName(null);
    }

  return (
    <nav className='flex justify-between mr-10 ml-10 mt-5 text-[#333]'>
        <div className="font-bold text-2xl md:text-4xl">
            BLOGHERE
        </div>
        <nav-ele>
            <ul className='flex text-xl font-medium justify-center item-center'>
                <li className='md:mr-10'>
                    {
                        userName ?(
                            <div className='flex gap-5'>
                                <div className='hover:border-b-2 '>{'@'+userName}</div>
                                <a onClick={logout} className='hover:border-b-2 '>LogOut</a>
                            </div>
                            
                        ):<Link to={'/login'} className='hover:border-b-2 '>Login</Link>
                    }
                </li>
            </ul>
        </nav-ele>
    </nav>
  )
}

export default Header
