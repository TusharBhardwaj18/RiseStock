import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="display-4 text-center fw-bold">About Us</h1>
        <h2 className="text-center mb-5 mt-4 ">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
        <hr />
        <div>
          <div className="row ">
            <div className="col-6">
              <p className="lead mt-4">
                We kick‑started our journey on 15th August 2010 with a mission
                to remove every barrier that traders and investors face in India
                — from high costs to lack of support and outdated technology.
                That vision gave birth to RiseStock, a platform built on
                innovation, transparency, and trust.
              </p>
              <p className="lead">
                Today, our disruptive pricing models and in‑house technology
                have positioned RiseStock as one of the most trusted brokerage
                platforms in India. With a growing community of investors
                placing millions of trades every year, we continue to empower
                retail traders by delivering seamless experiences and redefining
                how India invests.
              </p>
            </div>
            <div className="col-6">
              <p className="lead mt-4">
                In addition to trading, we run several open online educational
                and community initiatives designed to empower retail investors
                with knowledge and confidence. Through RiseFund, our fintech
                incubator, we actively support and invest in innovative startups
                that are shaping the future of India’s capital markets. And
                because innovation never stops, we’re always building something
                new.
                </p>
                <p className="lead">
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
