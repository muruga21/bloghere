import React, { useState } from 'react'

const Header = () => {

    const [islogin , setIsLogin] = useState(false);
    const username = "muruga";

  return (
    <nav className='flex justify-between mr-10 ml-10 mt-5 text-[#333]'>
        <logo className="font-bold text-2xl md:text-4xl">
            BLOGHERE
        </logo>
        <nav-ele>
            <ul className='flex text-xl font-medium justify-center item-center'>
                <li className='mr-5 hover:border-red-400 hover:border-b-2'>
                    Write
                </li>
                <li className=' hover:border-red-400 hover:border-b-2'>
                    {
                        islogin ?(
                            {username}
                        ):("login")
                    }
                </li>
            </ul>
        </nav-ele>
    </nav>
  )
}

export default Header
