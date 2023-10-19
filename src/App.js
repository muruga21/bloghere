import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section className='w-[100%] flex justify-center items-center h-[50vh]'>
        <Hero/>
      </section>
      <section className='w-[100%] h-[100vh] flex justify-center'>
        <Blogs/>
      </section>
    </div>
  );
}

export default App;
