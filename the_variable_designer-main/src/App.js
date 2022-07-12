import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Services from './components/Services';
import Interior from './components/Interior.jsx';
import Floor from './components/Floor';
import  Policy  from './components/Policy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/exterior' element={<Interior/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/floor' element={<Floor/>}/>
        <Route path='/policy' element={<Policy/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
