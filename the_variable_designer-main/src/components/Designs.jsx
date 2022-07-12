import React from 'react';
import '../styles/design.css'
import img1 from '../assets/img/1.jpg'
// import img2 from '..assets/img/2.JPG'
import img2 from '../assets/img/2.JPG'
import img3 from '../assets/img/3.jpeg'
import img4 from '../assets/img/img1.jpg'
import img5 from '../assets/img/img2.png'
import img6 from '../assets/img/img3.jpeg'
import img7 from '../assets/img/img4.jpg'
import img8 from '../assets/img/img5.jpg'
import img9 from '../assets/img/img6.jpg'
import img10 from '../assets/img/img7.jpg'
import img11 from '../assets/img/img8.jpg'
const Designs = () => {
  return (
    <div>
      <div className='rqw mt-6'>
        <div className="design-col">
            <img src={img1}/>
        </div>
        <div className="design-col">
        <img src={img1}/>
        </div>
        <div className="design-col">
        <img src={img1}/></div>
        <div className="design-col">
        <img src={img1}/>
        </div>
        <div className="design-col">
        <img src={img1}/>
        </div>
        
      </div>
      <h1 className='heading'>Simplex</h1>
      <div className='rqw mt'>
        <div className="design-col">
        <img src={img4}/></div>
        <div className="design-col">
        <img src={img5}/></div>
        <div className="design-col">
        <img src={img6}/></div>
        <div className="design-col">
        <img src={img7}/></div>
        <div className="design-col">
        <img src={img8}/></div>
        
      </div>
      
      <h1 className='heading'>Duplex</h1>
      <div className='rqw mt'>
        <div className="design-col">
        <img src={img1}/></div>
        <div className="design-col">
        <img src={img2}/></div>
        <div className="design-col">
        <img src={img3}/></div>
        <div className="design-col">one</div>
        <div className="design-col">one</div>
      </div>
      <h1 className='heading'>Triplex</h1>
    </div>
  );
}

export default Designs;
