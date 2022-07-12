import React,{useEffect, useState} from 'react';
import '../styles/interior.css'
import $,{click,ready}from 'jquery';
import {
   BrowserRouter,
   Link,
   Outlet,
   useRoutes
 } from 'react-router-dom';
import Modals from './Modals';
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
import img16 from '../assets/img/img16.jpg'
import ErrorModal from './ErrorModal';

const Interior = () => {
const [modalShow, setModalShow] = React.useState(false);
const [isOpen, setIsOpen] = React.useState(false);  
const[path, setPath]=useState('inital path');    
  const showModal = (e,path) => {
     setPath('path from parent')
    e.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setModalShow(true)
      setIsOpen(false);
     },1500);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const handlePath=(e,a)=>{
    e.preventDefault()
    console.log('path.........',a);
    setPath(a);

  }
        
  return (
    <div id='interior'>
      <div className="container mt-5">
         <div className="row">
            <div className="col-lg-12 text-center my-2">
                   <h3 className="py-3 text-white">Exterior</h3>
               <h4 className='text-white'>Succesfully projects</h4>
            </div>
         </div>
         <ErrorModal
          show={modalShow}
        onHide={() => setModalShow(false)}/>
           <Modals isOpens={isOpen} hideModal={hideModal} path={path}/>
         <div className="portfolio-item row">
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm" 
   
            onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img1);}} >
               <a href="" className="fancylight popup-btn" data-fancybox-group="light"> 
               <img className="img-fluid" src={img1} alt=""/>
               </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img2);}} >
              
               <img className="img-fluid" src={img2} alt=""/>
               
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img3);}} >
               
               <img className="img-fluid" src={img3} alt=""/>
               
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img4);}} >
               
               <img className="img-fluid" src={img4} alt=""/>
               
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img5);}} >
               
               <img className="img-fluid" src={img5} alt=""/>
               
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img6);}} >
              
               <img className="img-fluid" src={img6} alt=""/>
              
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img7);}} >
               
               <img className="img-fluid" src={img7} alt=""/>
               
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img8);}} >
              
               <img className="img-fluid" src={img8} alt=""/>
               
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img9);}} >
               
               <img className="img-fluid" src={img9} alt=""/>
               
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img10);}} >
               
               <img className="img-fluid" src={img10} alt=""/>
               
            
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img11);}} >
               
               <img className="img-fluid" src={img11} alt=""/>
               
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm"  onClick={(e)=>{ e.preventDefault();  showModal(e); handlePath(e,img16);}} >
              
               <img className="img-fluid" src={img16} alt=""/>
              
            </div>

         </div>
      </div>
      
     <Outlet />
      
    </div>
  );
}

export default Interior;
