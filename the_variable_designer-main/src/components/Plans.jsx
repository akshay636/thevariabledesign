import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { Link,Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../styles/plans.css'
import img1 from '../assets/bedroom/img1.jpg'
import img2 from '../assets/cafe/img2.jpg'
import img3 from '../assets/child hospital/img1.jpg'
import img4 from '../assets/house interior/img1.jpg'
import img5 from '../assets/living traditional/img1.jpg'
import img6 from '../assets/pooja area/img1.jpg'
import 'aos/dist/aos.css';
import '../styles/about.css'

import Aos from 'aos';
const Plans = () => {
    useEffect(()=>{
    Aos.init({duration:2000})
    },[])
    return (
        
        <div id='plans' className='container mr-auto' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

            <div className="container mx-auto mt-4">
                <div className="row pln">
                 
               <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">1 BHK HOUSE DESIGN</h5>
                            
                                    
                                    <a href="#" className="btn btn-pln mr-2"><i className="fas fa-link"></i> Know more </a>                               
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">2 BHK HOUSE DESIGN</h5>
                               
                                    
                                    <a href="#" className="btn btn-pln mr-2"><i className="fas fa-link"></i> Know More</a>
                                     
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">1 BHK HOUSE DESIGN</h5>
                                
                                    
                                    <a href="#" className="btn btn-pln mr-2"><i className="fas fa-link"></i> Know More</a>
                                     
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img4} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">4 BHK HOUSE DESIGN</h5>
                                
                                    
                                    <a href="#" className="btn btn-pln mr-2"><i className="fas fa-link"></i> Know More</a>
                                     
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img5} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">1 RK HOUSE DESIGN</h5>
                                  
                                    
                                    <a href="#" className="btn btn-pln mr-2"><i className="fas fa-link"></i> Know More</a>
                                     
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 plns">
                        <div className="card" style={{width:'18rem'}}>
                            <img src= {img6} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">FARM HOUSE DESIGN</h5>
                                   
                                    
                                    <a href="#" className="btn btn-pln btn btn-pln-primary mr-2"><i className="fas fa-link"></i> Know More</a>
                                   
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    );
}

export default Plans;
