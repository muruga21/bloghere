import React, { useState } from 'react'
import datas from './datas';

const Header = () => {

    const [islogin , setIsLogin] = useState(true);
    const userName = datas[0].userName;

  return (
    <nav className='flex justify-between mr-10 ml-10 mt-5 text-[#333]'>
        <logo className="font-bold text-2xl md:text-4xl">
            BLOGHERE
        </logo>
        <nav-ele>
            <ul className='flex text-xl font-medium justify-center item-center'>
                <li className=' hover:border-red-400 hover:border-b-2 md:mr-10'>
                    {
                        islogin ?(
                            <div>{'@'+userName}</div>
                        ):("login")
                    }
                </li>
            </ul>
        </nav-ele>
    </nav>
  )
}

export default Header
