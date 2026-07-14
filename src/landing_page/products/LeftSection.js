import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
   useEffect(() =>{
          AOS.init({
            duration:1000,
            once: false,
          });
        }, []);
  return (
   <div className="container mt-5 my-5 p-4 overflow-hidden">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 text-center " data-aos='fade-right'>
          <img src={imageURL} className='img-fluid rounded' />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-4 p-lg-5" data-aos='fade-left'>
          <h1 className='fw-bold mb-3 text-white fs-2 fs-md-1' data-aos='fade-up' data-aos-delay='200'>{productName}</h1>
          <p className=" text-white-50 mb-4 fs-6" data-aos='fade-up' data-aos-delay='300'>{productDesription}</p>
          <div className='mb-2 d-flex flex-wrap gap-2 align-items-center' data-aos='fade-up' data-aos-delay='400'>
            <a href={tryDemo} className='fw-semibold text-decoration-none'  >Try Demo</a>
            <a href={learnMore} className='fw-semibold text-decoration-none ms-3 ms-sm-4' >
              Learn More
            </a>
          </div>
          <div className="d-flex flex-wrap gap-3 mt-4 align-items-center" data-aos='zoom-in' data-aos-delay='500'>
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg" style={{height:'35px'}} />
            </a>
            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                style={{ height:'35px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection