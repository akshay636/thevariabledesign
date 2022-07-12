import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../styles/services.css'
import { BsCircle } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
    Aos.init({ duration:500 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="services pd" id='services' data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        >
        <div className="container">
          <h3 className="title"><p className='head'>Services</p></h3>
          <div className="row text-center">
            <div className="col-md-3 int">
              <div className="square"><i className="fas fa-code interior">
              </i></div>
              <div className="serv">
                <h5><Link className="navbar-brand ser-link" to="/sidebar">Interior</Link> </h5>

                <p>Room, Hall, House interior</p>
              </div>
            </div>
            <div className="col-md-3 int">
              <div className="serv">
                <div className="square"><i className="fas fa-cogs exterior"></i></div>
                <h5><Link className="navbar-brand ser-link" to="/exterior">Exterior</Link> </h5>
                <p>Home Exterior</p>
              </div>
            </div>
            <div className="col-md-3 int">
              <div className="square"><i className="fas fa-globe  planning"></i></div>
              <div className="serv">
                <h5>Planning</h5>
                <p>Floor Planing</p>
              </div>
            </div>
            <div className="col-md-3 int">
              <div className="square"><i className="fas fa-user-shield designing"></i></div>
              <div className="serv">
                <h5>Landscape Design</h5>
                <p>Landscape Architeture is the arranging and modifying of features in a landscape view</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="award">
        <div className="col-md-6 sec-1">
          <h1 className='get'>Get to know us better !</h1>
          <div className='vertical'></div>
        </div>
        <div className="col-md-6 sec-2">
          <div className="col-md-4 sec-3">
            <div className='texxt'>
              <h3>500+</h3>
              <h5>Happy Client</h5>
              <div className='vertical-1'></div>
            </div>

          </div>
          <div className="col-md-4 sec-4 ">
            <div className='texxt'>
              <h3>1500+</h3>
              <h5>Projects Finished</h5>
              <div className='vertical-2'></div>
            </div>

          </div>
          <div className="col-md-4 sec-5">
            <div className='texxt'>
              <h3>700+</h3>
              <h5>Clinet Review</h5>
              <div className='vertical-3'></div>
            </div>
          </div>
        </div>
      </div>
      <div className="raw mt-5 pppp">
        <div className="cols">
          <BsCircle className='BsCircle' />
          <h4 className='process'>01</h4>
          <p className='step mt-3'>Step-1</p>

          <p >Let us know your requirement<br />
            are share an idea with us
          </p>
        </div>
        <div className="cols">
          <BsCircle className='BsCircle' />
          <h4 className='process'>02</h4>
          <p className='step mt-3'>Step-2</p>

          <p >Get a call from our expert <br />
            discussion</p>
        </div>
        <div className="cols">
          <BsCircle className='BsCircle' />
          <h4 className='process'>03</h4>
          <p className='step mt-3'>Step-3</p>

          <p >Sit back and relax, our expert's  <br />
            will work on your design
          </p>
        </div>
        <div className="cols">
          <BsCircle className='BsCircle' />
          <h4 className='process'>04</h4>
          <p className='step mt-3'>Step-4</p>

          <p >Discussion / Modification <br />
            Revissions up to your satisfication
          </p>
        </div>
        <div className="cols">
          <BsCircle className='BsCircle' />
          <h4 className='process'>05</h4>
          <p className='step mt-3'>Step-5</p>
          <p >Get all the final design in<br />
            your hands </p>
        </div>

      </div>
      <div className='feel'> FEEL PROUD AND HAPPY</div>
    </>
  );
}

export default Services;
