import React, { Component } from 'react';
import image from "../h1.jpg";



export default class Carousel extends Component {

    render() {
     return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div div className="carousel-inner">
            <div className="carousel-item active">
                <img src={image} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."></img>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </div>
        )
    }
}
