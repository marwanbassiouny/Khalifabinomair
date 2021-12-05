import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
 const Services=()=> {

return (
<div>
<Navbar/>

  <div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1>About Us</h1>
      </div>
    </div>
  </div>
  </div>
  
    <div className="pd-y">
     <div className="wel-head">
      <h2 className="wel-title">Our Goals</h2>
        <span className="linee"></span>
      </div>
      

      <div className="main-box">
          <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-desktop"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
          
        </div>

        <div data-aos="flip-down" className="box">
          <div className="icon">
            <i className="fas fa-globe"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
         
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
          
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
          
        </div>

        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
          
        </div>
        
        <div data-aos="flip-down" className="box ">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h2>Web Design</h2>
          <span className="line"></span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore.</p>
          
        </div>

      </div>
      </div>
    
    <Footer/>
    </div>
        
    )
}
export default Services;