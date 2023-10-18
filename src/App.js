import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <section>
        <Header/>
      </section>
      <section className='w-[100%] flex justify-center items-center h-[60vh]'>
        <Hero/>
      </section>
    </div>
  );
}

export default App;
