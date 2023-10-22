import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    const [islogin , setIsLogin] = useState(false);
    const userName = "muruga21"

  return (
    <nav className='flex justify-between mr-10 ml-10 mt-5 text-[#333]'>
        <div className="font-bold text-2xl md:text-4xl">
            BLOGHERE
        </div>
        <nav-ele>
            <ul className='flex text-xl font-medium justify-center item-center'>
                <li className=' hover:border-red-400 hover:border-b-2 md:mr-10'>
                    {
                        islogin ?(
                            <div>{'@'+userName}</div>
                        ):<Link to={'/login'}>Login</Link>
                    }
                </li>
            </ul>
        </nav-ele>
    </nav>
  )
}

export default Header
