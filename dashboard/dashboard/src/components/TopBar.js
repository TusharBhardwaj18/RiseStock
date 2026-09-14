import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className=" border-bottom sticky-top shadow-sm">
      <div className="container-fluid px-0 ">
        <div className="row g-0 align-items-center">
        {/* Indices Section */}
        <div className="col-12 col-md-4 border-end px-3 py-2 d-flex align-items-center justify-content-around text-secondary small">
          <div className="d-flex gap-4 align-items-center">
            <span className="fw-semibold text-uppercase text-white">NIFTY 50 </span>
            <span className="text-danger">100.2</span>
            {/* <span className="badge bg-danger-subtle text-danger">-0.35%</span> */}
          </div>
          <div className="d-flex gap-4 align-items-center">
            <span className="fw-semibold text-uppercase text-white">SENSEX </span>
            <span className="text-danger ">100.2</span>
            {/* <span className="badge bg-danger-subtle text-danger">-0.42%</span> */}
          </div>
        </div>
        <div className="col-12 col-md-8 px-3 py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="Logo.png.png" style={{ width: "100px" }} />
          </div>

        {/* Navigation Menu */}
        <Menu />
      </div>
      </div>
      </div>
    </header>
  );
};

export default TopBar;