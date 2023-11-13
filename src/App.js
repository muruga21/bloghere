import { Outlet } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [userName , setUserName] = useState(null);
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
