import React, { useState } from 'react';
import '../styles/sidebar.css'
import menu from '../resources/menu';
import { menu1 } from '../resources/menu';

import {AllInterior } from '../resources/images';

const Sidebar = (props) => {
    const [isOpen, setIsopen] = useState(true);
const[option,SetOption]=useState('All');
const[index,SetIndex]=useState(0);
    const handleOnClick = (id,indx) => {
        SetOption(id);
        SetIndex(indx);
    }
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(true) : setIsopen(true);
    }
    return (
        <div>
            <div className="container-fluid mt-3 ">
                <div className={`sidebar active bg-dark`}>
                    <div className="sd-header " >

                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <h3 className='text-white mt-2 side-int'>Interior Designs</h3>
                        <ul className='mt-3'>
                            {menu?.map((val, index) => {
                                return (
                                    <li><a onClick={(e) => handleOnClick(val,index)} className={`sd-link bg-${props.mode === 'dark' ? 'secondary' : 'white'} text-${props.mode === 'dark' ? 'white' : 'dark'}`} > {val}</a></li>
                                )
                            })}
                        </ul>
                        <ul>
                            {menu1?.map((val, index) => {
                                return (
                                    <li><a onClick={(e) => handleOnClick(val,(4+index))} className={`sd-link bg-${props.mode === 'dark' ? 'secondary' : 'white'} text-${props.mode === 'dark' ? 'white' : 'dark'}`} > {val}</a></li>

                                )
                            })}
                        </ul>
                    </div>
                </div>
        
            </div>
           
               
                <div className="row rr">
                {AllInterior?.[index]?.[option]?.map((val)=>{
                    return(
                     
                        <div className='view overlay card kk ' style={{ width: '19rem' }}>
                            <img className="card-img-top int-img" src={val} alt="Card image cap" />
                        </div>
                        
                    )
                })} 
                </div>
            </div>


    );
}

export default Sidebar;
