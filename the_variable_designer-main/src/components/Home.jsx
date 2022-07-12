import React,{useEffect} from 'react';

import '../styles/home.css'
import Services from './Services';

import Plans from './Plans';
import Contact from './Contact'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className='home'>
      </div>
      <Services/>
      <Plans/>
      <Contact/>
    
    </div>
  );
}

export default Home;
