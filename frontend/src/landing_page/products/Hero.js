import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const Hero = () => {
   useEffect(() =>{
          AOS.init({
            duration:1000,
            once: false,
          });
        }, []);
  return (
    <div className="container border-bottom overflow-hidden ">
      <div className="text-center mt-5 p-5">
      <div className="row justify-content-center ">
          <h1 className='fw-bold' data-aos='fade-up'> Products</h1>
          <h3 className=" text-white-50" data-aos-delay='200' data-aos='fade-up'>Sleek, modern, and intuitive trading platforms</h3>
          
        </div>
      </div>
      </div>
  )
}

export default Hero