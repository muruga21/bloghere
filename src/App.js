import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';


function App() {
  const [userName , setUserName] = useState(null);

  useEffect(()=>{
    console.log(userName);
  },[userName])

  return (
    <div>
      <section>
        <Header userName = {userName} setUserName = {setUserName}/>
      </section>
      <section className='w-[100%] flex justify-center items-center h-[auto]'>
        <Outlet/>
      </section>
    </div>
  );
}

export default App;
