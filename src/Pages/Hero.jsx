import React from "react";
import "./CSS/Hero.css";

import BG1 from '../Assets/bg1.jpg'

import Nav from "../Components/Nav";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <div>
        <div className="heading-description container d-flex pt-5 ">
            <div className="heading"> <h1 className=" text-start"> Luxury Living for Your <span className="text-warning">Family</span>  </h1> </div>
            <div>
            <p className="description text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                eaque, rerum neque voluptatum maiores atque earum fugiat, iure ullam
                adipisci reiciendis sed laudantium.
            </p>
            </div>
        </div>
        <div className="bg-image">
            <div>
                <img src={BG1} alt="" />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
