

import React from "react";
import arrowSvg from "../socials/down-arrow.svg";

import './Home.css'


import images from "../socials/businessman-working-with-laptop-office-scaled-1.jpg";

const imageAltText =
  "Adult male in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = () => {
  return (
    <section id="home" className="min-height">
      <img className="background background1" src={images} alt="" />
    
      <div className='Name'>
        <h1>Sangram Singh</h1>
        <h2>Web Designer & Content Creator</h2>
      </div>
      <div className='arrowSvg'>
        <img
          src={arrowSvg}
         className='image1'
          alt={imageAltText}
        />
      </div>
    </section>
  );
};




export default Home;
