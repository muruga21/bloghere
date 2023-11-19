import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';


function App() {
  const [userName , setUserName] = useState(null);
  // const [mousePositon , setMousePosition] = useState(null);

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
      {/* <div className="h-3 w-3 rounded-full bg-black absolute" style={{top: mousePositon.y , left: mousePositon.x}}></div> */}
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
