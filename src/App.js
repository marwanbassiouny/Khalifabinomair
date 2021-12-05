import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Footer from './components/Footer';
import './i18n' 
import { useTranslation } from 'react-i18next';
import About from './components/About';
import Services from './components/Services';
import AOS from 'aos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  withRouter
} from "react-router-dom";
import SscrollToTop from "./components/ScrollToTop"
import { ContactUs } from './components/ContactUs';


function App() {
  const {i18n} =useTranslation();
  document.body.dir = i18n.dir();
  
  AOS.init({
    duration :1100,
    once:false,
    
  });

  return (
    
    <React.Fragment>
       <SscrollToTop>
      <Routes>
      <Route  path='home' element={<Home/>} />
      <Route  path='/' element={<Home/>} />
      <Route  path='Aboutus' element={<About/>} />
      <Route  path='services' element={<Services/>} />
      <Route  path='contactus' element={<ContactUs/>} />
      </Routes> 
      </SscrollToTop>
    </React.Fragment>
  
  );
}

export default App;
