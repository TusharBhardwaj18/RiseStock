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
    <div className="container ">
      <div className="row p-5 justify-content-center text-center my-5">
        <div className="col-12 col-md-10 col-lg-8">
        <h1 className="display-4 fw-bold mb-5" data-aos='fade-up'>About Us</h1>
        <h2 className="fs-4 text-white-50 fw-normal lh-base"
        data-aos='fade-up' data-aos-delay='200'>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
        </div>
          <div>
        <hr className="my-5 text-muted opacity-25"
        data-aos='fade-up'
        data-aos-delay='400' />
      
          <div className="row g-4 g-md-5 border-top">
            <div className="col-12 col-md-6 text-secondary fs-5 lh-lg" data-aos='fade-right' data-aos-delay='500'>
              <p className="">
                We kick‑started our journey on 15th August 2010 with a mission
                to remove every barrier that traders and investors face in India
                — from high costs to lack of support and outdated technology.
                That vision gave birth to RiseStock, a platform built on
                innovation, transparency, and trust.
              </p>
              <p>
                Today, our disruptive pricing models and in‑house technology
                have positioned RiseStock as one of the most trusted brokerage
                platforms in India. With a growing community of investors
                placing millions of trades every year, we continue to empower
                retail traders by delivering seamless experiences and redefining
                how India invests.
              </p>
            </div>
            <div className="col-12 col-md-6 text-secondary fs-5 lh-lg" data-aos='fade-left' data-aos-delay='700'>
              <p>
                In addition to trading, we run several open online educational
                and community initiatives designed to empower retail investors
                with knowledge and confidence. Through RiseFund, our fintech
                incubator, we actively support and invest in innovative startups
                that are shaping the future of India’s capital markets. And
                because innovation never stops, we’re always building something
                new.
                </p>
                <p>
                 Stay updated with our latest ideas on the RiseStock Blog,
                explore what the media is saying about us, or dive deeper into
                our business and product philosophies.
              </p>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
