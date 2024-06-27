import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/Herosection/HeroSection';
import About from './components/about/About';

function App() {
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 4000);
  }, [])

  return (
    <>
      {preloader ? (<div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
  <img src="/img/loading.svg" alt='preloader' />
</div>
) :
        (
          <>
            <Header />
            <HeroSection />
            <About />
            <p title='Opening'>Under Maintainence</p>
          </>
        )
      }
    </>

  );
}

export default App;
