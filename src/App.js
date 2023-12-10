import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
//this is linga


function App() {
  const [userName , setUserName] = useState();
  // const [mousePositon , setMousePosition] = useState({});

  // useEffect(()=>{
  //   const handleMouseMove = (e)=>{
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     })
  //   }
  //   window.addEventListener('mousemove', handleMouseMove)
  // },[userName])

  return (
    <div>
      {/* <div className="h-5 w-5 rounded-full bg-black fixed" style={{top: mousePositon.y-5 , left: mousePositon.x-5}}></div> */}
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
