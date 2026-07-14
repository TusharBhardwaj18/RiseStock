import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const RightSection = ({ imageURL, productName, productDesription, learnMore }) => {
   useEffect(() =>{
          AOS.init({
            duration:1000,
            once: false,
          });
        }, []);
  return (
    <div className="container my-5 p-4 overflow-hidden">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 p-3 p-md-4 p-lg-5 order-2 order-md-1 " data-aos='fade-right'>
          <h1 className='fw-bold mb-3 text-white fs-2 fs-md-1' data-aos='fade-up' data-aos-delay='200'>{productName}</h1>
          <p className="text-white-50 mb-4 fs-6" data-aos='fade-up' data-aos-delay='300'>{productDesription}</p>
          <div data-aos='fade-up' data-aos-delay='400'>
            <a href={learnMore} className='fw-semibold text-decoration-none'>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center order-1 order-md-2" data-aos='fade-left'>
          <img src={imageURL}
          className='img-fluid rounded' />
        </div>
      </div>
      </div>
  )
}

export default RightSection